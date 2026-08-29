import type { Metadata } from 'next';

import { site, type SiteLocation } from '@/lib/site';
import { testimonials } from '@/lib/testimonials';

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type CollectionListItem = {
  name: string;
  path: string;
  image?: string;
};

export type GallerySchemaItem = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const schemaIds = {
  organization: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  office: (id: SiteLocation['id']) =>
    `${site.url}/#office-${id.toLowerCase().replace(/\s+/g, '-')}`,
} as const;

export function absoluteUrl(path: string) {
  if (path === '/') return site.url;
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const canonical = path === '/' ? '/' : path;
  const ogImage = image ?? site.ogImage;
  // Titles that already include "|" should not get the layout template appended again.
  const resolvedTitle = title.includes('|')
    ? { absolute: `${title} | ${site.name}` }
    : title;

  return {
    title: resolvedTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title:
        typeof resolvedTitle === 'string'
          ? resolvedTitle
          : resolvedTitle.absolute,
      description,
      url: absoluteUrl(canonical),
      type: 'website',
      siteName: site.name,
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title:
        typeof resolvedTitle === 'string'
          ? resolvedTitle
          : resolvedTitle.absolute,
      description,
      images: [ogImage],
    },
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Aggregate rating from reviews published on-site (honest reviewCount). */
export function aggregateRatingFromTestimonials() {
  const count = testimonials.length;
  const sum = testimonials.reduce((total, review) => total + review.rating, 0);
  const ratingValue = Math.round((sum / count) * 10) / 10;

  return {
    '@type': 'AggregateRating' as const,
    ratingValue,
    reviewCount: count,
    bestRating: 5,
    worstRating: 1,
  };
}

export type ReviewSchemaItem = {
  author: string;
  body: string;
  rating: number;
  /** Full ISO date only — omit year-only strings. */
  datePublished?: string;
};

export function reviewsJsonLd(reviews: ReviewSchemaItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${site.url}/testimonials`,
    name: `Testimonials | ${site.name}`,
    url: `${site.url}/testimonials`,
    about: { '@id': schemaIds.organization },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: reviews.length,
      itemListElement: reviews.map((review, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Review',
          author: { '@type': 'Person', name: review.author },
          reviewBody: review.body,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: review.rating,
            bestRating: 5,
            worstRating: 1,
          },
          publisher: { '@type': 'Organization', name: 'Google' },
          itemReviewed: { '@id': schemaIds.organization },
          ...(review.datePublished &&
          /^\d{4}-\d{2}-\d{2}/.test(review.datePublished)
            ? { datePublished: review.datePublished }
            : {}),
        },
      })),
    },
  };
}

export function collectionPageJsonLd({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: CollectionListItem[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': absoluteUrl(path),
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { '@id': schemaIds.website },
    about: { '@id': schemaIds.organization },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
        ...(item.image
          ? {
              item: {
                '@type': 'Thing',
                name: item.name,
                url: absoluteUrl(item.path),
                image: absoluteUrl(item.image),
              },
            }
          : {}),
      })),
    },
  };
}

export function imageGalleryJsonLd({
  name,
  description,
  path,
  images,
}: {
  name: string;
  description: string;
  path: string;
  images: GallerySchemaItem[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': absoluteUrl(path),
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { '@id': schemaIds.website },
    about: { '@id': schemaIds.organization },
    associatedMedia: images.map((image) => ({
      '@type': 'ImageObject',
      name: image.name,
      contentUrl: absoluteUrl(image.src),
      url: absoluteUrl(image.src),
      width: image.width,
      height: image.height,
    })),
  };
}

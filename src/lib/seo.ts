import type { Metadata } from 'next';

import { site, type SiteLocation } from '@/lib/site';

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export const schemaIds = {
  organization: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  office: (id: SiteLocation['id']) => `${site.url}/#office-${id}`,
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

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
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
      title,
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

export type ReviewSchemaItem = {
  author: string;
  body: string;
  rating: number;
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
          ...(review.datePublished
            ? { datePublished: review.datePublished }
            : {}),
        },
      })),
    },
  };
}

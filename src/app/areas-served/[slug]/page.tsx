import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ServiceAreaView } from '@/components/service-area-view';
import { areas, getArea, regionMeta } from '@/lib/areas';
import { site } from '@/lib/site';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
    },
    alternates: {
      canonical: `/areas-served/${area.slug}`,
    },
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const office = regionMeta[area.region];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: site.name,
    url: `${site.url}/areas-served/${area.slug}`,
    telephone: office.phone,
    areaServed: {
      '@type': 'City',
      name: area.name,
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.office.address,
      addressLocality: office.office.city,
      addressRegion: office.office.state,
      postalCode: office.office.zip,
      addressCountry: 'US',
    },
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Areas Served',
        item: `${site.url}/areas-served`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${area.name} Roofing`,
        item: `${site.url}/areas-served/${area.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ServiceAreaView area={area} />
    </>
  );
}

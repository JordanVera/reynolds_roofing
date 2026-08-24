import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { JsonLd } from '@/components/json-ld';
import { ServiceAreaView } from '@/components/service-area-view';
import { areas, getArea, regionMeta } from '@/lib/areas';
import { breadcrumbJsonLd, pageMetadata, schemaIds } from '@/lib/seo';
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

  return pageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas-served/${area.slug}`,
  });
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const office = regionMeta[area.region].office;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${area.name} Roofing`,
    description: area.metaDescription,
    url: `${site.url}/areas-served/${area.slug}`,
    provider: { '@id': schemaIds.office(office.id) },
    areaServed: {
      '@type': 'City',
      name: area.name,
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Areas Served', path: '/areas-served' },
          { name: `${area.name} Roofing`, path: `/areas-served/${area.slug}` },
        ])}
      />
      <ServiceAreaView area={area} />
    </>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { JsonLd } from '@/components/json-ld';
import { ServiceView } from '@/components/service-view';
import { categoryMeta, getService, services } from '@/lib/services';
import { breadcrumbJsonLd, pageMetadata, schemaIds } from '@/lib/seo';
import { site } from '@/lib/site';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const category = categoryMeta[service.category];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.metaDescription,
    provider: { '@id': schemaIds.organization },
    areaServed: ['Houston, TX', 'Fort Worth, TX', 'Katy, TX', 'Arlington, TX'],
    url: `${site.url}/services/${service.slug}`,
    ...(service.image ? { image: `${site.url}${service.image}` } : {}),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: category.label, path: `/services/${service.category}` },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <ServiceView service={service} />
    </>
  );
}

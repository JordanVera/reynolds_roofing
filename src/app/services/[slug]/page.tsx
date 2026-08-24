import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ServiceView } from '@/components/service-view';
import { categoryMeta, getService, services } from '@/lib/services';
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

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
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
    provider: {
      '@type': 'RoofingContractor',
      name: site.name,
      telephone: site.phone,
      url: site.url,
    },
    areaServed: ['Houston, TX', 'Fort Worth, TX', 'Katy, TX', 'Arlington, TX'],
    url: `${site.url}/services/${service.slug}`,
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${site.url}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.label,
        item: `${site.url}/services/${service.category}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: service.name,
        item: `${site.url}/services/${service.slug}`,
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
      <ServiceView service={service} />
    </>
  );
}

import type { Metadata } from 'next';

import { JsonLd } from '@/components/json-ld';
import { ServiceCategoryView } from '@/components/service-category-view';
import {
  categoryMeta,
  categoryPath,
  servicesByCategory,
} from '@/lib/services';
import { breadcrumbJsonLd, collectionPageJsonLd, pageMetadata } from '@/lib/seo';

const meta = categoryMeta.residential;
const items = servicesByCategory('residential');

export const metadata: Metadata = pageMetadata({
  title: meta.metaTitle,
  description: meta.metaDescription,
  path: '/services/residential',
});

export default function ResidentialServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: meta.label, path: '/services/residential' },
        ])}
      />
      <JsonLd
        data={collectionPageJsonLd({
          name: meta.name,
          description: meta.metaDescription,
          path: categoryPath('residential'),
          items: items.map((service) => ({
            name: service.name,
            path: `/services/${service.slug}`,
            image: service.image,
          })),
        })}
      />
      <ServiceCategoryView category="residential" />
    </>
  );
}

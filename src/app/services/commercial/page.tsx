import type { Metadata } from 'next';

import { JsonLd } from '@/components/json-ld';
import { ServiceCategoryView } from '@/components/service-category-view';
import {
  categoryMeta,
  categoryPath,
  servicesByCategory,
} from '@/lib/services';
import { breadcrumbJsonLd, collectionPageJsonLd, pageMetadata } from '@/lib/seo';

const meta = categoryMeta.commercial;
const items = servicesByCategory('commercial');

export const metadata: Metadata = pageMetadata({
  title: meta.metaTitle,
  description: meta.metaDescription,
  path: '/services/commercial',
});

export default function CommercialServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: meta.label, path: '/services/commercial' },
        ])}
      />
      <JsonLd
        data={collectionPageJsonLd({
          name: meta.name,
          description: meta.metaDescription,
          path: categoryPath('commercial'),
          items: items.map((service) => ({
            name: service.name,
            path: `/services/${service.slug}`,
            image: service.image,
          })),
        })}
      />
      <ServiceCategoryView category="commercial" />
    </>
  );
}

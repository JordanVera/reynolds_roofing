import type { Metadata } from 'next';

import { JsonLd } from '@/components/json-ld';
import { ServiceCategoryView } from '@/components/service-category-view';
import { categoryMeta } from '@/lib/services';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

const meta = categoryMeta.commercial;

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
      <ServiceCategoryView category="commercial" />
    </>
  );
}

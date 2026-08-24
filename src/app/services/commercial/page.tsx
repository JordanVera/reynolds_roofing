import type { Metadata } from 'next';

import { ServiceCategoryView } from '@/components/service-category-view';
import { categoryMeta } from '@/lib/services';

export const metadata: Metadata = {
  title: categoryMeta.commercial.metaTitle,
  description: categoryMeta.commercial.metaDescription,
};

export default function CommercialServicesPage() {
  return <ServiceCategoryView category="commercial" />;
}

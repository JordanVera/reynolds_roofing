import type { Metadata } from 'next';

import { ServiceCategoryView } from '@/components/service-category-view';
import { categoryMeta } from '@/lib/services';

export const metadata: Metadata = {
  title: categoryMeta.residential.metaTitle,
  description: categoryMeta.residential.metaDescription,
};

export default function ResidentialServicesPage() {
  return <ServiceCategoryView category="residential" />;
}

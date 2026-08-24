import type { MetadataRoute } from 'next';

import { areas } from '@/lib/areas';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${site.url}/areas-served`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...areas.map((area) => ({
      url: `${site.url}/areas-served/${area.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}

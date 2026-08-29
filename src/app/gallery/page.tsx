import type { Metadata } from 'next';
import Link from 'next/link';
import { PhoneIcon } from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { GalleryGrid } from '@/components/gallery-grid';
import { JsonLd } from '@/components/json-ld';
import { PageBreadcrumbs } from '@/components/page-breadcrumbs';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { LeadForm } from '@/components/lead-form';
import { galleryItems } from '@/lib/gallery';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Project Gallery',
  description:
    'Browse Reynolds Roofing TX project photos — roof replacements, leak repairs, storm damage, patio covers, and restoration work across Houston and Fort Worth.',
  path: '/gallery',
  image: galleryItems[2]?.src,
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ])}
      />

      <PageHero
        eyebrow="Our work"
        title="Project gallery from Houston and Fort Worth roofs."
        description="Real jobs from the Reynolds Roofing TX crew — replacements, repairs, leak work, and restoration. Filter by type or open any photo for a closer look."
        compact
      >
        <Button asChild className="h-12 px-6 text-base font-semibold">
          <Link href="/contact">Get a free estimate</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-12 border-white/45 bg-white/10 px-6 text-base font-medium text-white hover:bg-white/20 hover:text-white"
        >
          <a href={site.phoneHref}>
            <PhoneIcon className="size-4" />
            {site.phone}
          </a>
        </Button>
      </PageHero>

      <PageBreadcrumbs
        items={[{ href: '/', label: 'Home' }, { label: 'Gallery' }]}
      />

      <Section>
        <FadeIn className="mb-10 max-w-2xl">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {galleryItems.length} photos from the field
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Whether your project is a full roof replacement or a targeted repair,
            we take the time to finish on schedule and within budget. These
            photos are from residential and commercial work across our service
            area.
          </p>
        </FadeIn>

        <GalleryGrid />
      </Section>

      <Section className="bg-card/30 stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Your project next
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Ready for a free inspection?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Tell us about your roof and we will schedule a free walk-through
              and written estimate.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="mb-6 flex flex-wrap gap-4">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"
              >
                <PhoneIcon className="size-4 text-primary" />
                {site.phone}
              </a>
            </div>
            <LeadForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

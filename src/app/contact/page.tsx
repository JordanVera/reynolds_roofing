import type { Metadata } from 'next';
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckIcon,
  ShieldCheckIcon,
  MailIcon,
} from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { FaqList } from '@/components/faq-list';
import { JsonLd } from '@/components/json-ld';
import { PageBreadcrumbs } from '@/components/page-breadcrumbs';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { LeadForm } from '@/components/lead-form';
import { contactFaqs } from '@/lib/faqs';
import { resolveFormService } from '@/lib/services';
import { breadcrumbJsonLd, pageMetadata, schemaIds } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Free Estimate & Roof Inspection',
  description: `Request a free roof inspection and estimate with ${site.name}. Call ${site.phone} or ${site.locations[1].phone}.`,
  path: '/contact',
});

const trustPoints = [
  'Free walk-through and written estimate',
  'No pressure — you decide on your timeline',
  'Response within 1 business day',
  'Licensed and insured crew',
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const { service } = await searchParams;
  const defaultService = resolveFormService(service);
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: `Contact ${site.name}`,
          url: `${site.url}/contact`,
          mainEntity: { '@id': schemaIds.organization },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Free Estimate', path: '/contact' },
        ])}
      />

      <PageHero
        eyebrow="Free, no-obligation"
        title="Request a free roof inspection"
        description="Choose the way that works for you — call, or fill out the form. We will get back to you during business hours."
        compact
      />

      <PageBreadcrumbs
        items={[{ href: '/', label: 'Home' }, { label: 'Free Estimate' }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <FadeIn className="space-y-6">
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15">
                Houston &amp; Fort Worth
              </Badge>
              <h2 className="font-heading text-2xl font-bold tracking-tight">
                Get in touch
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Most calls are answered same day. Form submissions receive a
                response by next business morning.
              </p>
            </div>

            <div className="space-y-3">
              {site.locations.map((location) => (
                <div key={location.id} className="space-y-3">
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <PhoneIcon className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {`${location.city}, ${location.state}`}
                      </p>
                      <a
                        href={`tel:+1${location.phone.replace(/\D/g, '')}`}
                        className="mt-0.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPinIcon className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {`${location.city} office`}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold">
                        {`${location.address}, ${location.city} ${location.state} ${location.zip}`}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MailIcon className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-0.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <ClockIcon className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Hours
                  </p>
                  <p className="mt-0.5 text-sm font-semibold">
                    {site.hours.weekdays}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {site.hours.weekend}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-border pt-4">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <ShieldCheckIcon className="size-3.5 text-primary" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <CheckIcon className="size-3.5 text-primary" />
                Free Inspections
              </div>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="mb-6">
              <h2 className="font-heading text-xl font-bold">
                Request your free inspection
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Fill in the form and we will reach out to schedule — usually
                same afternoon.
              </p>
              <div className="mt-4 space-y-1.5">
                {trustPoints.map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <CheckIcon className="size-3.5 shrink-0 text-primary" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <LeadForm defaultService={defaultService} />
          </FadeIn>
        </div>
      </Section>

      <FaqList
        faqs={contactFaqs}
        title="Before you call"
        description="How inspections are scheduled and which office to use."
      />
    </>
  );
}

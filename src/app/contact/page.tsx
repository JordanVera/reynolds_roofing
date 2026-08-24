import type { Metadata } from 'next';
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckIcon,
  ShieldCheckIcon,
} from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { LeadForm } from '@/components/lead-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Free Estimate & Roof Inspection',
  description: `Request a free roof inspection and estimate with ${site.name}. Call ${site.phone}.`,
};

const trustPoints = [
  'Free walk-through and written estimate',
  'No pressure — you decide on your timeline',
  'Response within 1 business day',
  'Licensed and insured crew',
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free, no-obligation"
        title="Request a free roof inspection"
        description="Choose the way that works for you — call, or fill out the form. We will get back to you during business hours."
        compact
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <FadeIn className="space-y-6">
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15">
                Houston &amp; Fort Worth
              </Badge>
              <h2 className="font-heading text-2xl font-bold tracking-tight">Get in touch</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Most calls are answered same day. Form submissions receive a response by next
                business morning.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: PhoneIcon,
                  label: 'Katy, TX',
                  value: '832.321.5088',
                  href: 'tel:+18323215088',
                },
                {
                  icon: PhoneIcon,
                  label: 'Fort Worth, TX',
                  value: '817.789.8458',
                  href: 'tel:+18177898458',
                },
                {
                  icon: MapPinIcon,
                  label: 'Katy Location',
                  value: '20501 Katy Freeway #203, Katy TX 77450',
                },
                {
                  icon: ClockIcon,
                  label: 'Hours',
                  value: site.hours.weekdays,
                  sub: site.hours.weekend,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-semibold">{item.value}</p>
                    )}
                    {'sub' in item && item.sub && (
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    )}
                  </div>
                </div>
              ))}
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
              <h2 className="font-heading text-xl font-bold">Request your free inspection</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Fill in the form and we will reach out to schedule — usually same afternoon.
              </p>
              <div className="mt-4 space-y-1.5">
                {trustPoints.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckIcon className="size-3.5 shrink-0 text-primary" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <LeadForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

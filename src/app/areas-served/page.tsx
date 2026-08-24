import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import {
  areaPath,
  areasByRegion,
  regionMeta,
  type ServiceRegion,
} from '@/lib/areas';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Areas Served | Houston & Fort Worth Roofing',
  description:
    'Reynolds Roofing TX serves Houston, Katy, Sugar Land, Stafford, Cypress, Jersey Village, Greater Houston, Fort Worth, Arlington, and Benbrook with licensed local crews.',
};

const regions: { key: ServiceRegion; title: string; description: string }[] = [
  {
    key: 'houston',
    title: 'Greater Houston',
    description:
      'Dispatched from our Katy office on Katy Freeway — west, north, and southwest Houston plus Fort Bend County.',
  },
  {
    key: 'dfw',
    title: 'Dallas–Fort Worth',
    description:
      'Dispatched from our Arlington office on Matlock Road — Fort Worth, Arlington, and Benbrook.',
  },
];

export default function AreasServedPage() {
  return (
    <>
      <PageHero
        eyebrow="Houston · Fort Worth · Surrounding cities"
        title="Areas we serve"
        description="Reynolds Roofing TX takes time to know each client and treat the house as if it were our own. Every city we list has a full-service team from start to finish — not a distant call center."
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

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Local, not mainstream"
              title="A roofing company that shows up as a neighbor"
              description="Many larger outfits will not take the time to know who you are. We do. Each location we serve has a licensed crew that handles questions and concerns from the first inspection through the last shingle."
            />
          </FadeIn>
          <FadeIn delay={0.08} className="grid gap-4 sm:grid-cols-2">
            {site.locations.map((loc) => (
              <div
                key={loc.city}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                  {loc.city} office
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {loc.address}
                  <br />
                  {loc.city}, {loc.state} {loc.zip}
                </p>
                <a
                  href={`tel:+1${loc.phone.replace(/\D/g, '')}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-primary"
                >
                  <PhoneIcon className="size-3.5" />
                  {loc.phone}
                </a>
              </div>
            ))}
          </FadeIn>
        </div>
      </Section>

      {regions.map((region) => {
        const office = regionMeta[region.key];
        const cities = areasByRegion(region.key);
        return (
          <Section
            key={region.key}
            className={region.key === 'houston' ? 'bg-card/20 texas-grid' : undefined}
          >
            <SectionHeading
              eyebrow={office.label}
              title={region.title}
              description={region.description}
            />
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((area) => (
                <StaggerItem key={area.slug}>
                  <Link href={areaPath(area.slug)} className="block h-full">
                    <Card className="h-full transition-shadow hover:glow-primary">
                      <CardHeader>
                        <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                          <MapPinIcon className="size-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{area.name} Roofing</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {area.blurb}
                        </p>
                        <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                          {office.phone}
                          <ArrowRightIcon className="ml-auto size-4 text-primary" />
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </Section>
        );
      })}

      <Section className="bg-card/30 stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Free inspection
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Not sure if we cover your street?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              If you are in the Houston or Fort Worth metros, send the form.
              We will confirm coverage and schedule a no-obligation inspection.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <LeadForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

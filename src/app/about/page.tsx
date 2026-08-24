import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircleIcon,
  HandshakeIcon,
  HardHatIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us | Texas Roofing Since 2006',
  description:
    'Reynolds Roofing TX was founded in Spring 2006 in Katy, with an Arlington office for Fort Worth. Full-service residential and commercial roofing, remodeling trades, and 50+ years of combined experience.',
};

const standards = [
  {
    icon: HardHatIcon,
    title: 'Workmanship',
    body: 'We hold crews to the standard we would put on our own homes — not a production-line pass that looks fine from the street.',
  },
  {
    icon: WrenchIcon,
    title: 'Materials',
    body: 'Long-standing manufacturer relationships mean we spec the right system for the building and the budget, not whatever is leftover on the truck.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Safety',
    body: 'Occupied houses and open businesses are not jobsite extras. We require the highest safety standard we can run, every day.',
  },
  {
    icon: HandshakeIcon,
    title: 'Relationships',
    body: 'The company was built to last longer than one storm season. We take pride in clients who call us back — and send us to the neighbor.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: `About ${site.name}`,
  url: `${site.url}/about`,
  mainEntity: {
    '@type': 'RoofingContractor',
    name: site.name,
    foundingDate: String(site.founded),
    telephone: site.phone,
    url: site.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.locations[0].address,
      addressLocality: site.locations[0].city,
      addressRegion: site.locations[0].state,
      postalCode: site.locations[0].zip,
      addressCountry: 'US',
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={`Founded ${site.foundedLabel} · Katy, TX`}
        title="A full-service roofing company that grew up in Texas."
        description="Reynolds Roofing TX started as a roofing outfit with a simple brief: the highest customer service and craftsmanship we could deliver. Two decades on, we still run that way — from the Katy office and the Arlington shop."
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

      <div className="border-b border-border bg-card/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 text-sm md:px-6">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <span className="text-muted-foreground/50" aria-hidden>
            /
          </span>
          <span className="font-medium">About</span>
        </div>
      </div>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Our story"
              title={`Founded ${site.foundedLabel}`}
              description="Reynolds Roofing TX was started with a clear vision: give clients the highest level of customer service and craftsmanship available, then keep showing up after the job is done."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                With over 50 years of combined roofing and construction
                experience, we require the highest standards in workmanship,
                materials, and safety. We take pride in building long-lasting
                relationships with every client — not a one-storm handshake.
              </p>
              <p>
                Thank you for taking the time to learn about the company. We are
                confident you will be satisfied choosing us for the next
                project, and we look forward to speaking with you.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="space-y-4">
            {[
              { label: 'Founded', value: site.foundedLabel },
              { label: 'Combined experience', value: '50+ years' },
              { label: 'Corporate office', value: 'Katy, TX' },
              { label: 'DFW office', value: 'Fort Worth, TX' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/20 texas-grid">
        <SectionHeading
          eyebrow="What we became"
          title="Roofing first. Trades when the house needs them."
          description="We were founded as a full-service roofing company. We have grown into a remodeling outfit that can handle the interior and exterior work a leak — or a renovation — actually requires."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">
                  Corporate office in Katy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Our home office sits at {site.locations[0].address} in Katy,
                  serving Houston, Fort Bend, and the west-side communities
                  around it. That is where residential and commercial work for
                  the Greater Houston area is dispatched.
                </p>
                <p>
                  Founded as roofing, we now take on the trades around the roof
                  — siding, gutters, interior restoration, and the packages that
                  keep a system from failing early. Visit{' '}
                  <Link
                    href="/services"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Services
                  </Link>{' '}
                  for the full list.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">
                  Arlington office for Fort Worth
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  The DFW shop is at {site.locations[1].address} in Arlington —
                  not a PO box. Fort Worth, Arlington, and Benbrook work runs
                  from that office on {site.locations[1].phone}.
                </p>
                <p>
                  Same licensed standard as Katy. Same process: inspect,
                  document, estimate, then do the work. Two metros, one company.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="Four things we will not cheap out on"
          description="The original brief from 2006 still holds. Customer service and craftsmanship are the job — not a slogan on the truck."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2">
          {standards.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-card/30">
        <SectionHeading
          eyebrow="Offices"
          title="Where to find us"
          description="Call the office that covers your metro. Both locations take inspection requests the same way."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {site.locations.map((loc) => (
            <div
              key={loc.city}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15">
                {loc.city} office
              </Badge>
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-bold">
                    {loc.city}, {loc.state}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {loc.address}, {loc.zip}
                  </p>
                  <a
                    href={`tel:+1${loc.phone.replace(/\D/g, '')}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-primary"
                  >
                    <PhoneIcon className="size-3.5" />
                    {loc.phone}
                  </a>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {site.hours.weekdays}
              </p>
              <p className="text-sm text-muted-foreground">
                {site.hours.weekend}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-card/30 stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Next project
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Ready when you are
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Send the form or call. We will inspect, put a number on the work,
              and stay on the job until it is finished.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="mb-6 flex flex-wrap gap-4">
              {[
                'Free inspection and written estimate',
                'Licensed and insured crews',
                'Katy and Arlington offices',
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <CheckCircleIcon className="size-3.5 shrink-0 text-primary" />
                  {point}
                </div>
              ))}
            </div>
            <LeadForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

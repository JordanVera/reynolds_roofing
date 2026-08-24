import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PhoneIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  MapPinIcon,
  ClockIcon,
  StarIcon,
  HomeIcon,
  WrenchIcon,
  LayersIcon,
  SquareIcon,
  PanelLeftIcon,
  MinusIcon,
} from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Roofing Contractor Houston & Katy TX | Free Inspections',
  description: site.description,
};

const iconMap: Record<string, React.ElementType> = {
  Home: HomeIcon,
  Wrench: WrenchIcon,
  Layers: LayersIcon,
  Square: SquareIcon,
  PanelLeft: PanelLeftIcon,
  Minus: MinusIcon,
};

const trustItems = [
  { icon: ShieldCheckIcon, label: 'Licensed & Insured' },
  { icon: CheckCircleIcon, label: 'Free Inspections' },
  { icon: MapPinIcon, label: 'Houston + Fort Worth' },
  { icon: ClockIcon, label: 'Fast Response' },
];

const reasons = [
  {
    title: 'Manufacturer Relationships',
    body: "Long-standing partnerships with the industry's largest suppliers give us the flexibility to meet every budget and material preference.",
  },
  {
    title: 'Storm Damage Specialists',
    body: 'We inspect, document, and work with your insurance adjuster — making the claims process as painless as possible.',
  },
  {
    title: 'Full-Service Capability',
    body: 'From roofing to siding to gutters — one crew, one point of contact, no subcontracting surprises.',
  },
  {
    title: 'Two Locations, One Standard',
    body: "Whether you're in Katy or Arlington, the same licensed crew and same quality standards show up on every job.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Katy, TX · Houston · Fort Worth"
        title="Roofing built tough for Texas weather."
        description="Full-service residential and commercial roofing from a team with deep manufacturer relationships and a straight process — free inspection, honest estimate, solid work."
        size="lg"
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

      {/* Trust bar */}
      <div className="border-b border-border bg-card/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 md:px-6">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <item.icon className="size-4 shrink-0 text-primary" />
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <Section id="services" className="bg-card/20 texas-grid">
        <SectionHeading
          eyebrow="What we do"
          title="Every roofing service under one roof"
          description="From full replacements to seamless gutters — Reynolds Roofing handles it all with licensed crews and top-tier materials."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? HomeIcon;
            return (
              <StaggerItem key={service.slug}>
                <Card className="h-full transition-shadow hover:glow-primary">
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircleIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Who we are"
              title="A roofing company with long-standing roots in Texas"
              description="Reynolds Roofing TX is a full-service construction, commercial, and industrial roofing company. We have long-standing relationships with the industry's largest manufacturers and suppliers, giving us the flexibility to meet every client's needs."
            />
            <div className="mt-6 space-y-4">
              {reasons.map((r) => (
                <div key={r.title} className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">{r.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {r.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <div className="mb-6">
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15">
                Two Locations
              </Badge>
              <div className="space-y-4">
                {site.locations.map((loc) => (
                  <div key={loc.city} className="flex items-start gap-3">
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
                        className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-border pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Business hours
              </p>
              <p className="text-sm text-muted-foreground">
                {site.hours.weekdays}
              </p>
              <p className="text-sm text-muted-foreground">
                {site.hours.weekend}
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Lead form */}
      <Section id="estimate" className="bg-card/30 stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              No pressure
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Get your free roof inspection
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Fill in the form and we will contact you to schedule a free,
              no-obligation inspection and written estimate.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="mb-6 flex flex-wrap gap-4">
              {[
                'Free walk-through and written estimate',
                'No pressure — you decide the timeline',
                'Response within 1 business day',
              ].map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <StarIcon className="size-3.5 shrink-0 text-primary" />
                  {p}
                </div>
              ))}
            </div>
            <LeadForm />
          </FadeIn>
        </div>
      </Section>

      {/* Final CTA */}
      <div className="border-y border-primary/20 bg-primary/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              Storm damage? Don&rsquo;t wait.
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Unaddressed damage leads to bigger repairs. Call for a same-week
              inspection.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="h-11 px-6 font-semibold">
              <Link href="/contact">Request inspection</Link>
            </Button>
            <Button asChild variant="outline" className="h-11 px-6">
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

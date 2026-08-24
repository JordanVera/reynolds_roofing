import Link from 'next/link';
import {
  CheckCircleIcon,
  CloudLightningIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  SunIcon,
  WindIcon,
} from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import {
  areaPath,
  nearbyAreas,
  regionMeta,
  type ServiceArea,
} from '@/lib/areas';
import { services, servicePath } from '@/lib/services';
import { site } from '@/lib/site';

export function ServiceAreaView({ area }: { area: ServiceArea }) {
  const office = regionMeta[area.region];
  const nearby = nearbyAreas(area);

  return (
    <>
      <PageHero
        eyebrow={`${area.name}, TX · ${office.label}`}
        title={area.heroTitle}
        description={area.heroDescription}
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
          <a href={office.phoneHref}>
            <PhoneIcon className="size-4" />
            {office.phone}
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
          <Link
            href="/areas-served"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Areas Served
          </Link>
          <span className="text-muted-foreground/50" aria-hidden>
            /
          </span>
          <span className="font-medium">{area.name}</span>
        </div>
      </div>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <FadeIn>
            <SectionHeading
              eyebrow={`Roofing in ${area.name}`}
              title={`Your ${area.name} roofing contractor`}
              description={area.intro[0]}
            />
            {area.intro.slice(1).map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              {area.zips.map((zip) => (
                <Badge
                  key={zip}
                  variant="secondary"
                  className="font-mono text-xs font-medium"
                >
                  {zip}
                </Badge>
              ))}
            </div>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15">
              {office.label} office
            </Badge>
            <div className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-bold">
                  {office.office.city}, {office.office.state}
                </p>
                <p className="text-sm text-muted-foreground">
                  {office.office.address}, {office.office.zip}
                </p>
                <a
                  href={office.phoneHref}
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <PhoneIcon className="size-3.5" />
                  {office.phone}
                </a>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {site.hours.weekdays}
            </p>
            <p className="text-sm text-muted-foreground">
              {site.hours.weekend}
            </p>
            <Button asChild className="mt-5 w-full">
              <Link href="/contact">Request a free inspection</Link>
            </Button>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/20 texas-grid">
        <SectionHeading
          eyebrow="Local conditions"
          title={`What roofs face in ${area.name}`}
          description={`${area.name} is not a generic Texas market. Storm patterns, housing stock, and neighborhood rules all change how a roof should be built and maintained.`}
        />
        <Stagger className="grid gap-5 md:grid-cols-3">
          {area.localConditions.map((item, index) => {
            const Icon =
              [CloudLightningIcon, WindIcon, SunIcon][index] ??
              CloudLightningIcon;
            return (
              <StaggerItem key={item.title}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
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
            );
          })}
        </Stagger>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Communities"
          title={`Neighborhoods we serve in ${area.name}`}
          description="These are the streets and subdivisions we regularly inspect, repair, and reroof. If you are just outside this list, we still want the call."
        />
        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {area.communities.map((community) => (
            <StaggerItem key={community}>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <HomeIcon className="size-4 shrink-0 text-primary" />
                <p className="text-sm font-medium">{community}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-card/30">
        <SectionHeading
          eyebrow="Services"
          title={`Roofing services in ${area.name}`}
          description="The same licensed crew handles the full exterior — not a different sub for every trade."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link href={servicePath(service.slug)} className="block h-full">
                <div className="h-full rounded-xl border border-border bg-card p-5 transition-shadow hover:glow-primary">
                  <p className="text-sm font-semibold">{service.shortName}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {nearby.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="Nearby"
            title="Other cities we cover"
            description={`${area.name} is part of a wider service map. These neighboring pages have local details for the next town over.`}
          />
          <div className="flex flex-wrap gap-3">
            {nearby.map((item) => (
              <Button key={item.slug} asChild variant="outline">
                <Link href={areaPath(item.slug)}>{item.name} Roofing</Link>
              </Button>
            ))}
            <Button asChild variant="ghost">
              <Link href="/areas-served">All service areas</Link>
            </Button>
          </div>
        </Section>
      ) : null}

      <Section className="bg-card/30 stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {area.name}, TX
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Get a free {area.name} roof inspection
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Tell us about the leak, the storm, or the replacement you are
              planning. We respond same business day.
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
                `Served from the ${office.office.city} office`,
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
            <LeadForm defaultCity={`${area.name}, TX`} />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

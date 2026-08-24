import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { JsonLd } from '@/components/json-ld';
import { PageBreadcrumbs } from '@/components/page-breadcrumbs';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { ServiceCard } from '@/components/service-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import {
  categoryMeta,
  categoryPath,
  servicesByCategory,
  type ServiceCategory,
} from '@/lib/services';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Roofing Services | Residential & Commercial',
  description:
    'Reynolds Roofing TX offers a full line of residential and commercial roofing — inspections, shingles, metal, tile, TPO, leak repair, waterproofing, and restoration in Houston and Fort Worth.',
  path: '/services',
});

const categories: ServiceCategory[] = ['residential', 'commercial'];

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <PageHero
        eyebrow="Residential · Commercial · Restoration"
        title="Roofing services for Houston and Fort Worth"
        description="A full line of residential and commercial roofing products, plus the restoration work that follows a leak. Big job or small — we take the time to finish on schedule and on budget."
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
        items={[{ href: '/', label: 'Home' }, { label: 'Services' }]}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((key) => {
            const category = categoryMeta[key];
            return (
              <FadeIn key={key}>
                <Link href={categoryPath(key)} className="block h-full">
                  <Card className="h-full transition-shadow hover:glow-primary">
                    <CardHeader>
                      <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                        {category.label}
                      </p>
                      <CardTitle className="text-2xl">
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {category.intro[0]}
                      </p>
                      <p className="flex items-center gap-1.5 text-sm font-medium">
                        View {category.label.toLowerCase()} services
                        <ArrowRightIcon className="size-4 text-primary" />
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {categories.map((key) => {
        const category = categoryMeta[key];
        const items = servicesByCategory(key);
        return (
          <Section
            key={key}
            className={
              key === 'residential' ? 'bg-card/20 texas-grid' : undefined
            }
          >
            <SectionHeading
              eyebrow={category.label}
              title={category.name}
              description={category.heroDescription}
            />
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((service) => (
                <StaggerItem key={service.slug}>
                  <ServiceCard service={service} />
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
              Not sure which service you need?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Send the form. We will inspect, tell you whether it is a repair or
              a replacement, and put a number on it.
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

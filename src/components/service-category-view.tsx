import Link from 'next/link';
import { PhoneIcon } from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { ServiceCard } from '@/components/service-card';
import { Button } from '@/components/ui/button';
import { LeadForm } from '@/components/lead-form';
import {
  categoryMeta,
  servicesByCategory,
  type ServiceCategory,
} from '@/lib/services';
import { site } from '@/lib/site';

export function ServiceCategoryView({
  category,
}: {
  category: ServiceCategory;
}) {
  const meta = categoryMeta[category];
  const items = servicesByCategory(category);

  return (
    <>
      <PageHero
        eyebrow={`${meta.label} · Houston & Fort Worth`}
        title={meta.heroTitle}
        description={meta.heroDescription}
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
          <Link
            href="/services"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <span className="text-muted-foreground/50" aria-hidden>
            /
          </span>
          <span className="font-medium">{meta.label}</span>
        </div>
      </div>

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow={meta.label}
            title={meta.name}
            description={meta.intro[0]}
          />
          {meta.intro.slice(1).map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </FadeIn>
      </Section>

      <Section className="bg-card/20 texas-grid">
        <SectionHeading
          eyebrow="The full list"
          title={`${meta.label} services`}
          description="Each page has the spec, process, and estimate form for that system — not a renamed copy of the others."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} priority={index < 3} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-card/30 stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {meta.label}
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Get a free {meta.label.toLowerCase()} estimate
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Tell us about the building and the problem. We will inspect and
              send a written number.
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

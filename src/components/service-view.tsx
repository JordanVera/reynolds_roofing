import Link from 'next/link';
import { CheckCircleIcon, PhoneIcon } from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { ServiceIcon } from '@/components/service-icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import {
  categoryMeta,
  categoryPath,
  relatedServices,
  servicePath,
  type Service,
} from '@/lib/services';
import { site } from '@/lib/site';

export function ServiceView({ service }: { service: Service }) {
  const category = categoryMeta[service.category];
  const related = relatedServices(service);

  return (
    <>
      <PageHero
        eyebrow={`${category.label} · Houston & Fort Worth`}
        title={service.heroTitle}
        description={service.heroDescription}
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
          <Link
            href={categoryPath(service.category)}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {category.label}
          </Link>
          <span className="text-muted-foreground/50" aria-hidden>
            /
          </span>
          <span className="font-medium">{service.shortName}</span>
        </div>
      </div>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <FadeIn>
            <SectionHeading
              eyebrow={category.label}
              title={service.name}
              description={service.intro[0]}
            />
            {service.intro.slice(1).map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15">
              {category.label}
            </Badge>
            <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <ServiceIcon name={service.icon} className="size-5 text-primary" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <ul className="mt-4 space-y-2">
              {service.bullets.slice(0, 4).map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  {bullet}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-5 w-full">
              <Link href="/contact">Request a free inspection</Link>
            </Button>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/20 texas-grid">
        <SectionHeading
          eyebrow="Why it matters"
          title={`What sets our ${service.shortName.toLowerCase()} work apart`}
          description="Texas weather, occupancy, and the way the last roof was built all change the spec. These are the details we will not skip."
        />
        <Stagger className="grid gap-5 md:grid-cols-3">
          {service.highlights.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full">
                <CardHeader>
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

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="What's included"
              title="Scope we actually bid"
              description="The line items that show up on a Reynolds Roofing estimate for this service — not a vague 'roofing' lump sum."
            />
            <ul className="space-y-2">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm"
                >
                  <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  {bullet}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08}>
            <SectionHeading
              eyebrow="How we work"
              title="A straight process"
              description="Inspection, honest scope, licensed crew. Same sequence whether the job is a leak or a full system."
            />
            <ol className="space-y-4">
              {service.process.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section className="bg-card/30">
          <SectionHeading
            eyebrow="Related"
            title="Services that often go with this one"
            description="Roofing jobs rarely live in isolation. These pages cover the work that commonly sits next to this spec."
          />
          <div className="flex flex-wrap gap-3">
            {related.map((item) => (
              <Button key={item.slug} asChild variant="outline">
                <Link href={servicePath(item.slug)}>{item.shortName}</Link>
              </Button>
            ))}
            <Button asChild variant="ghost">
              <Link href={categoryPath(service.category)}>
                All {category.label.toLowerCase()} services
              </Link>
            </Button>
          </div>
        </Section>
      ) : null}

      <Section className="bg-card/30 stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {service.shortName}
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Get a free estimate
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Tell us about the leak, the storm, or the replacement. We respond
              same business day.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <LeadForm defaultService={service.formValue} />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

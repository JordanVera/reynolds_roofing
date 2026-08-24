import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PhoneIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  MapPinIcon,
  ClockIcon,
  StarIcon,
} from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { GoogleIcon } from '@/components/google-icon';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { ServiceCard } from '@/components/service-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LeadForm } from '@/components/lead-form';
import {
  categoryMeta,
  categoryPath,
  servicesByCategory,
  type ServiceCategory,
} from '@/lib/services';
import { FaqList } from '@/components/faq-list';
import { areaPath, areas } from '@/lib/areas';
import { homeFaqs } from '@/lib/faqs';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import { featuredTestimonials } from '@/lib/testimonials';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Houston & Fort Worth Roofing | Free Inspections',
    description: site.description,
    path: '/',
  }),
  title: {
    absolute: `Houston & Fort Worth Roofing | Free Inspections | ${site.name}`,
  },
};

const trustItems = [
  { icon: ShieldCheckIcon, label: 'Licensed & Insured' },
  { icon: CheckCircleIcon, label: 'Free Inspections' },
  { icon: MapPinIcon, label: 'Houston + Fort Worth' },
  { icon: ClockIcon, label: 'Fast Response' },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Katy, TX · Houston · Fort Worth"
        title="Houston and Fort Worth roofing built tough for Texas weather."
        description="Full-service residential and commercial roofing from a team with deep manufacturer relationships and a straight process — free inspection, honest estimate, solid work."
        size="lg"
      >
        <Button asChild className="h-12 px-6 text-base font-semibold">
          <Link href="/contact">Get a free estimate</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-12 border-white/45 bg-white/20 px-6 text-base font-medium text-white hover:bg-white/35 hover:text-white backdrop-blur-md shadow-lg"
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.08) 100%)',
            borderColor: 'rgba(255,255,255,0.35)',
          }}
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

      {(['residential', 'commercial'] as ServiceCategory[]).map((key) => {
        const category = categoryMeta[key];
        const items = servicesByCategory(key);
        return (
          <Section
            key={key}
            id={key === 'residential' ? 'services' : undefined}
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
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href={categoryPath(key)}>
                  View {category.label.toLowerCase()} services
                </Link>
              </Button>
            </div>
          </Section>
        );
      })}

      {/* About */}
      <Section id="about">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Who we are"
              title="A roofing company with roots in Texas since 2006"
              description="Founded in Katy as a full-service roofing company, Reynolds Roofing TX now runs two offices — Katy for Houston and Arlington for Fort Worth — with licensed crews and long manufacturer relationships."
            />
            <div className="mt-8">
              <Button asChild>
                <Link href="/about">Read our story</Link>
              </Button>
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
              <Link
                href="/areas-served"
                className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:underline"
              >
                See all service areas
              </Link>
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

      {/* Service areas */}
      <Section className="bg-card/20 texas-grid">
        <SectionHeading
          eyebrow="Where we work"
          title="Ten cities. Two offices. One standard."
          description="Licensed crews from Katy and Arlington cover Houston, Fort Worth, and the communities in between."
        />
        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {areas.map((area) => (
            <StaggerItem key={area.slug}>
              <Link
                href={areaPath(area.slug)}
                className="flex h-full items-start gap-3 rounded-xl border border-border bg-card p-4 transition-shadow hover:glow-primary"
              >
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">{area.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {area.region === 'houston' ? 'Houston metro' : 'DFW metro'}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/areas-served">View all service areas</Link>
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Google reviews"
          title="Customers who already called William"
          description="Five-star Google reviews from homeowners in our service area. Names and wording are unchanged from Google."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href="/testimonials">Read more testimonials</Link>
          </Button>
          <Button asChild variant="outline">
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleIcon />
              View all on Google
            </a>
          </Button>
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

      <FaqList
        faqs={homeFaqs}
        title="Roofing questions, answered"
        description="What homeowners and property managers ask before they schedule a free inspection."
      />

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

import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLinkIcon, PhoneIcon, StarIcon } from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { FaqList } from '@/components/faq-list';
import { GoogleIcon } from '@/components/google-icon';
import { JsonLd } from '@/components/json-ld';
import { PageBreadcrumbs } from '@/components/page-breadcrumbs';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { TestimonialCard } from '@/components/testimonial-card';
import { Button } from '@/components/ui/button';
import { LeadForm } from '@/components/lead-form';
import { testimonialFaqs } from '@/lib/faqs';
import { breadcrumbJsonLd, pageMetadata, reviewsJsonLd } from '@/lib/seo';
import { site } from '@/lib/site';
import { testimonials } from '@/lib/testimonials';

export const metadata: Metadata = pageMetadata({
  title: 'Google Reviews & Testimonials',
  description:
    'Read 5-star Google reviews from Houston and Fort Worth homeowners who hired Reynolds Roofing TX — then open Google to see every review.',
  path: '/testimonials',
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        data={reviewsJsonLd(
          testimonials.map((review) => ({
            author: review.name,
            body: review.body,
            rating: review.rating,
            // Year-only values are invalid ISO dates — omit datePublished.
          })),
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Testimonials', path: '/testimonials' },
        ])}
      />

      <PageHero
        eyebrow="Google reviews"
        title="What customers say about Reynolds Roofing TX."
        description="These are 5-star Google reviews from homeowners who called William and the crew. The wording is theirs. Open Google to read every review, including the ones truncated here."
        compact
      >
        <Button asChild className="h-12 px-6 text-base font-semibold">
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoogleIcon />
            View all Google reviews
            <ExternalLinkIcon className="size-4" />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-12 border-white/45 bg-white/10 px-6 text-base font-medium text-white hover:bg-white/20 hover:text-white"
        >
          <Link href="/contact">Get a free estimate</Link>
        </Button>
      </PageHero>

      <PageBreadcrumbs
        items={[{ href: '/', label: 'Home' }, { label: 'Testimonials' }]}
      />

      <Section>
        <FadeIn className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Google reviews
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A selection from the Reynolds Roofing TX Google listing. Names,
              ratings, and quotes match the original reviews.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <StarIcon className="size-4 fill-amber-400 text-amber-400" />
            5-star Google reviews
          </div>
        </FadeIn>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-10 rounded-2xl border border-border bg-card p-6 text-center md:p-8">
          <GoogleIcon className="mx-auto size-8" />
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight">
            See every Google review
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            This page is a sample. Google has the complete listing — including
            longer reviews that were cut off in the original posts.
          </p>
          <Button asChild className="mt-6 h-11 px-6 font-semibold">
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleIcon />
              View all testimonials on Google
              <ExternalLinkIcon className="size-4" />
            </a>
          </Button>
        </FadeIn>
      </Section>

      <FaqList
        faqs={testimonialFaqs}
        title="About these reviews"
        description="Where the quotes come from and how to read or leave a Google review."
      />

      <Section className="bg-card/30 stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Your roof next
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Ready for a free inspection?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Same process the reviews describe: we inspect, tell you what is
              needed, and do the work — nothing extra.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="mb-6 flex flex-wrap gap-4">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"
              >
                <PhoneIcon className="size-4 text-primary" />
                {site.phone}
              </a>
            </div>
            <LeadForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

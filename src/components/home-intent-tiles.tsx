import Link from 'next/link';
import {
  ArrowRightIcon,
  Building2Icon,
  CloudLightningIcon,
  DropletsIcon,
  HouseIcon,
} from 'lucide-react';

import { Stagger, StaggerItem } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';
import { estimatePath } from '@/lib/site';
import { getService } from '@/lib/services';

const intents = [
  {
    title: 'Leaking now',
    description: 'Water in the house or on the ceiling. Same-week inspection.',
    icon: DropletsIcon,
    slug: 'residential-roof-inspections',
  },
  {
    title: 'Hail or storm damage',
    description: 'We inspect, photograph, and document the roof for the claim.',
    icon: CloudLightningIcon,
    slug: 'residential-roof-inspections',
  },
  {
    title: 'Replace the roof',
    description:
      'Shingles, tile, or metal — written estimate before anyone starts.',
    icon: HouseIcon,
    slug: 'residential-asphalt-shingles',
  },
  {
    title: 'Commercial roof',
    description:
      'Leaks, TPO, metal — scheduled around the business underneath.',
    icon: Building2Icon,
    slug: 'commercial-roof-inspection',
  },
] as const;

export function HomeIntentTiles() {
  return (
    <Section className="bg-card/20">
      <SectionHeading
        eyebrow="Where to start"
        title="What brought you here?"
        description="Pick the job. The estimate form opens with that service already selected."
      />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {intents.map((intent) => {
          const service = getService(intent.slug);
          const href = estimatePath(service?.formValue);
          return (
            <StaggerItem key={intent.title}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:glow-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <intent.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-tight">
                  {intent.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {intent.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Request inspection
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </p>
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

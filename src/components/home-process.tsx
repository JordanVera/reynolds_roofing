import { Stagger, StaggerItem } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';

const steps = [
  {
    title: 'Free inspection',
    body: 'We walk the roof, take photos, and tell you what we see — not a glance from the driveway.',
  },
  {
    title: 'Written estimate',
    body: 'Repair, maintain, or replace, with a number on paper. You decide whether to move.',
  },
  {
    title: 'You set the date',
    body: 'No pressure on the roof. You pick the timeline that works for the house or the business.',
  },
  {
    title: 'Crews do the work',
    body: 'Licensed crews from Katy or Arlington. Same standard, whichever office runs the job.',
  },
] as const;

export function HomeProcess() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How it works"
        title="Four steps. Then we get on the roof."
        description="The same process from both offices — inspect, document, estimate, then do the work."
      />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <StaggerItem key={step.title}>
            <div className="relative h-full border-l border-primary/30 pl-5 lg:border-l-0 lg:border-t lg:pt-5 lg:pl-0">
              <p className="mb-3 font-heading text-sm font-bold tracking-[0.2em] text-primary">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="font-heading text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

import { Reveal } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Thank You',
  description: `Thanks for contacting ${site.name}. We will be in touch soon.`,
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Reveal className="mx-auto flex max-w-xl flex-col items-start px-4 py-24 md:px-6">
      <p className="mb-3 text-xs font-medium tracking-[0.18em] text-primary uppercase">
        Estimate request received
      </p>
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        Thank you!
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        We got your request. Someone from Reynolds Roofing TX will call or email
        during business hours to schedule your free inspection. If you have an
        urgent roofing issue — call {site.phone} now.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="h-11 px-5">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 px-5">
          <a href={site.phoneHref}>Call {site.phone}</a>
        </Button>
      </div>
    </Reveal>
  );
}

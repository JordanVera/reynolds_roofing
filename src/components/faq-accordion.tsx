'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FaqItem } from '@/lib/seo';

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-4">
      {faqs.map((faq) => (
        <AccordionItem key={faq.question} value={faq.question}>
          <AccordionTrigger className="py-4 text-base font-semibold hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>
            <p className="pb-2 text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

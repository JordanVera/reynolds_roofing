import { FaqAccordion } from '@/components/faq-accordion';
import { JsonLd } from '@/components/json-ld';
import { Section, SectionHeading } from '@/components/section';
import { faqJsonLd, type FaqItem } from '@/lib/seo';

export function FaqList({
  faqs,
  eyebrow = 'FAQ',
  title = 'Frequently asked questions',
  description,
}: {
  faqs: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <Section>
      <JsonLd data={faqJsonLd(faqs)} />
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <div className="mx-auto max-w-3xl">
        <FaqAccordion faqs={faqs} />
      </div>
    </Section>
  );
}

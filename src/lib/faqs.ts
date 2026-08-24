import type { FaqItem } from '@/lib/seo';
import { site } from '@/lib/site';

export const homeFaqs: FaqItem[] = [
  {
    question: 'Do you offer free roof inspections in Houston and Fort Worth?',
    answer:
      'Yes. Reynolds Roofing TX provides a free walk-through and a written estimate from the Katy and Arlington offices. You decide whether to repair, maintain, or replace — there is no pressure to sign on the roof.',
  },
  {
    question: 'Where are your offices?',
    answer: `Our Houston-area office is at ${site.locations[0].address}, ${site.locations[0].city}, TX ${site.locations[0].zip} (${site.locations[0].phone}). The DFW office is at ${site.locations[1].address}, ${site.locations[1].city}, TX ${site.locations[1].zip} (${site.locations[1].phone}). Fort Worth, Arlington, and Benbrook work runs from Arlington.`,
  },
  {
    question: 'Do you handle both residential and commercial roofing?',
    answer:
      'Yes. We inspect, repair, and replace residential shingles, tile, and metal, plus commercial TPO, modified bitumen, metal, tile, and coatings — and the interior and exterior work a leak leaves behind.',
  },
  {
    question: 'How quickly can you respond after a storm?',
    answer:
      'Unaddressed storm damage leads to bigger repairs. Call for a same-week inspection, or same-day emergency leak service when water is in a commercial building. Most form submissions get a response by the next business morning.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. Reynolds Roofing TX is licensed and insured, founded in Spring 2006 in Katy, with more than 50 years of combined roofing and construction experience across the two offices.',
  },
];

export const contactFaqs: FaqItem[] = [
  {
    question: 'How do I request a free roof inspection?',
    answer:
      'Call the Katy office at 832-321-5088, the Arlington office at 817-789-8458, or send the form on this page. We will follow up during business hours to schedule a free, no-obligation inspection and written estimate.',
  },
  {
    question: 'How fast do you respond to estimate requests?',
    answer:
      'Most calls are answered the same day. Form submissions receive a response by the next business morning. Emergency commercial leaks are treated as urgent — do not wait on the form if water is in the building.',
  },
  {
    question: 'Which office should I call?',
    answer:
      'Houston, Katy, Sugar Land, Stafford, Cypress, Jersey Village, and Greater Houston: 832-321-5088 (Katy). Fort Worth, Arlington, and Benbrook: 817-789-8458 (Arlington). Either number will get you on the calendar.',
  },
  {
    question: 'What happens after I submit the form?',
    answer:
      'We contact you to schedule a walk-through, inspect the roof, and send a written estimate. There is no pressure — you decide on your timeline. Licensed and insured crews handle the work if you move forward.',
  },
];

export const aboutFaqs: FaqItem[] = [
  {
    question: 'When was Reynolds Roofing TX founded?',
    answer:
      'Spring 2006 in Katy. The company started as a full-service roofing outfit with a simple brief: the highest customer service and craftsmanship we could deliver. We still run that way from the Katy office and the Arlington shop.',
  },
  {
    question: 'Do you have an office in Fort Worth?',
    answer:
      'The DFW shop is in Arlington at 4840 Matlock Rd., Ste. D110 — not a PO box. Fort Worth, Arlington, and Benbrook work runs from that office on 817-789-8458. Houston-area work runs from Katy.',
  },
  {
    question: 'What kind of work do you take on besides roofing?',
    answer:
      'Roofing is the core, but leaks do not stop at the shingles. We handle interior restoration, siding, gutters, and related exterior trades so you are not coordinating three companies after a storm.',
  },
  {
    question: 'Are you a storm-chaser company?',
    answer:
      'No. The company was built to last longer than one storm season. We take pride in clients who call us back — and send us to the neighbor — not a one-off roof drop after hail.',
  },
];

import type { FaqItem } from '@/lib/seo';

export type ServiceCategory = 'residential' | 'commercial';

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  formValue: string;
  category: ServiceCategory;
  icon: string;
  image?: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  description: string;
  intro: string[];
  highlights: { title: string; body: string }[];
  bullets: string[];
  process: { title: string; body: string }[];
  related: string[];
  faqs: FaqItem[];
};

export const categoryMeta: Record<
  ServiceCategory,
  {
    slug: ServiceCategory;
    name: string;
    label: string;
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroDescription: string;
    intro: string[];
    faqs: FaqItem[];
  }
> = {
  residential: {
    slug: 'residential',
    name: 'Residential Roofing',
    label: 'Residential',
    metaTitle: 'Residential Roofing | Inspections, Shingles, Metal & Tile',
    metaDescription:
      'Residential roofing in Houston and Fort Worth from Reynolds Roofing TX — inspections, asphalt shingles, tile, metal, interior and exterior repairs, and maintenance packages.',
    heroTitle: 'Residential roofing built for Texas homes.',
    heroDescription:
      'Every house presents its own roof. We inspect, repair, and replace residential systems — then handle the interior and exterior work a leak leaves behind.',
    intro: [
      'Reynolds Roofing TX handles residential roofing and home improvement from the Katy and Arlington offices. Regardless of the condition of the existing roof, we will give you a straight path: repair, maintain, or replace.',
      'Residential roofs are not interchangeable. Slope, ventilation, HOA rules, and the last storm all change the spec. We install and repair asphalt, tile, slate, and metal systems, and we stay on the job for the interior and exterior work that follows a leak.',
      'Whether you are buying, selling, appraising, or renovating, the condition of the roof can change the deal. A dedicated inspection is the right first step — not a glance from the driveway.',
    ],
    faqs: [
      {
        question:
          'What residential roofing services do you offer in Houston and Fort Worth?',
        answer:
          'Reynolds Roofing TX inspects, repairs, and replaces residential roofs from the Katy and Arlington offices — asphalt shingles, tile, slate, and metal, plus the interior and exterior work a leak leaves behind. We also run preventative maintenance packages so a small issue does not become a tear-off.',
      },
      {
        question:
          'How do I know if my house needs a repair or a full roof replacement?',
        answer:
          'A dedicated roof inspection answers that — not a look from the driveway. We photograph the field, flashings, and ventilation, estimate remaining life, and put repair versus replace in a written estimate so you can decide on a timeline.',
      },
      {
        question: 'Do you work with HOA architectural rules?',
        answer:
          'Yes. Many Houston-area and DFW communities have color, profile, and material standards. We spec manufacturer systems that meet the look the neighborhood expects without cutting corners on underlayment, fastening, or ventilation.',
      },
      {
        question: 'Are residential inspections free?',
        answer:
          'Yes. We offer a free walk-through and a written estimate. You decide whether to repair, maintain, or replace — there is no pressure to sign on the roof.',
      },
    ],
  },
  commercial: {
    slug: 'commercial',
    name: 'Commercial Roofing',
    label: 'Commercial',
    metaTitle: 'Commercial Roofing | TPO, Metal, Repair & Inspections',
    metaDescription:
      'Commercial and industrial roofing in Houston and Fort Worth — inspections, leak response, TPO, modified bitumen, metal, tile, and waterproofing from Reynolds Roofing TX.',
    heroTitle: 'Commercial roofing with less downtime.',
    heroDescription:
      'Quality workmanship on a business schedule. We inspect, repair, and replace commercial systems so a leak does not shut the doors.',
    intro: [
      'Reynolds Roofing TX handles commercial and industrial roofing from the same two Texas offices that run residential work. Commercial roofs are unique — low slope, HVAC penetrations, parapets, and occupied buildings all change the job.',
      'We determine the general condition of the roof, its remaining life, and the maintenance or repairs that actually matter. Manufacturer relationships give us the flexibility to spec TPO, modified bitumen, metal, tile, coatings, and the rest of the commercial stack without forcing one product.',
      'When a roof leaks, the clock is running. We treat commercial leak calls as urgent work and plan replacements so they interfere as little as possible with the business underneath.',
    ],
    faqs: [
      {
        question: 'What commercial roofing systems do you install?',
        answer:
          'We spec TPO, modified bitumen, metal, tile, coatings, and related commercial assemblies from the same Katy and Arlington offices that run residential work. Manufacturer relationships let us match the deck instead of forcing one product on every building.',
      },
      {
        question:
          'Can you repair a commercial leak without shutting the business down?',
        answer:
          'That is the goal. Emergency leak calls are treated as urgent. Planned repairs and replacements are staged around occupancy so a leak does not have to close the doors for a week.',
      },
      {
        question: 'Do you inspect commercial roofs before a sale or refinance?',
        answer:
          'Yes. We document condition, remaining life, and the repairs that actually matter in a PDF with photos — the kind of report a buyer, lender, or facilities manager can act on, not a driveway glance.',
      },
      {
        question:
          'How fast do you respond to a commercial leak in Houston or Fort Worth?',
        answer:
          'Same-day emergency leak service is on the board when water is in the building. Call the Katy office at 832-321-5088 or the Arlington office at 817-789-8458 and we will get a crew moving.',
      },
    ],
  },
};

export const services: Service[] = [
  {
    slug: 'residential-roof-inspections',
    name: 'Residential Roof Inspections',
    shortName: 'Roof Inspections',
    formValue: 'Residential Roof Inspection',
    category: 'residential',
    icon: 'ClipboardCheck',
    image: '/services/residential/roof-inspections.jpg',
    metaTitle: 'Residential Roof Inspections | Photo Reports & Estimates',
    metaDescription:
      'Professional residential roof inspections in Houston and Fort Worth. PDF reports with photos, life expectancy, and a written repair estimate from Reynolds Roofing TX.',
    heroTitle: 'A roof inspection that actually gets on the roof.',
    heroDescription:
      'Buying, selling, or just overdue for a look. We document condition, remaining life, and what to fix — in a PDF you can send to a buyer, an adjuster, or yourself.',
    description:
      'Photo-documented roof inspections with a written estimate — more thorough than a typical home inspection.',
    intro: [
      'Whether you are buying, selling, appraising, or renovating, the condition of the roof can change the status of the sale. Our inspectors determine the general condition of the roof, its life expectancy, and the maintenance or repairs that are actually needed.',
      'A general home inspector often will not do a thorough roof inspection — liability, access, and time get in the way. We get on the roof, photograph deficiencies, and put it in a PDF you can forward. If repairs or maintenance are needed, the report comes with a detailed written estimate.',
      'Roofs are easy to ignore until they leak. Putting off a minor repair is how you buy a major one.',
    ],
    highlights: [
      {
        title: 'PDF reports with photos',
        body: 'Every condition is notated and tied to a digital photo. Whoever does the repair — us or someone else — has a clear outline of what needs to happen.',
      },
      {
        title: 'More than a home inspection',
        body: 'We inspect roof materials, chimneys, flashings, accessories, scuppers, gutters, and downspouts — the spots a drive-by inspection never sees.',
      },
      {
        title: 'Tied to a real estimate',
        body: 'If work is needed, you do not get a vague “call a roofer.” You get a written estimate next to the findings so you can decide on a timeline.',
      },
    ],
    bullets: [
      'Condition of all roofing materials',
      'Flashing at transitions, chimneys, HVAC, vents, and valleys',
      'Ridge caps and drip edge',
      'Gutters, downspouts, and roof drains',
      'Issues causing leaks now — and ones that will',
      'Suggested repairs with a written estimate',
    ],
    process: [
      {
        title: 'Walk the roof',
        body: 'We inspect materials, flashings, penetrations, and drainage — not just what is visible from the yard.',
      },
      {
        title: 'Document in PDF',
        body: 'Photos, notes, material type, and remaining life go into a report you can keep or send.',
      },
      {
        title: 'Decide with numbers',
        body: 'If repairs or a replacement are on the table, the estimate is attached so you are not guessing.',
      },
    ],
    related: [
      'residential-asphalt-shingles',
      'residential-home-improvement',
      'residential-exterior-repairs',
    ],
    faqs: [
      {
        question:
          'Is a roof inspection more thorough than a general home inspection?',
        answer:
          'Usually, yes. A general home inspector often will not spend dedicated time on the roof because of access, liability, and schedule. We get on the roof, photograph deficiencies, and put condition, remaining life, and a written repair estimate in a PDF you can send to a buyer, an adjuster, or yourself.',
      },
      {
        question:
          'When should I schedule a residential roof inspection in Houston or Fort Worth?',
        answer:
          'Before you buy or sell, after a hail or wind event, or if the roof is approaching typical shingle age. Putting off a minor repair is how Texas weather turns it into a replacement. We inspect from the Katy and Arlington offices.',
      },
      {
        question: 'What do I receive after the inspection?',
        answer:
          'A PDF report with photos tied to each finding, notes on material type and remaining life, and — if work is needed — a detailed written estimate. You are not left with a vague “call a roofer.”',
      },
      {
        question: 'Do you charge for a residential roof inspection?',
        answer:
          'Inspections are free. If you need repairs or a replacement, the estimate is attached to the report so you can decide on your timeline with no pressure on the roof.',
      },
    ],
  },
  {
    slug: 'residential-asphalt-shingles',
    name: 'Asphalt Shingles',
    shortName: 'Asphalt Shingles',
    formValue: 'Asphalt Shingles',
    category: 'residential',
    icon: 'Home',
    image: '/services/residential/asphalt-shingles.jpg',
    metaTitle: 'Asphalt Shingle Roofing | Installation & Repair',
    metaDescription:
      'Asphalt shingle installation, repair, and replacement in Houston and Fort Worth. Premium and architectural shingles with manufacturer warranties from Reynolds Roofing TX.',
    heroTitle: 'Asphalt shingles that hold up to Texas weather.',
    heroDescription:
      'The most common sloped-roof material in Texas — done with the right weight, wind rating, and warranty, not the cheapest bundle on the truck.',
    description:
      'Architectural and premium asphalt shingles for Texas slopes — repair, replacement, and full tear-off.',
    intro: [
      'Asphalt shingles are the most commonly used residential roofing material for sloped roofs in Texas. Manufacturers offer a wide range of styles and colors; cost moves with weight, wind rating, and warranty. Premium shingles are usually heavier, last longer, and resist wind better than a builder-grade strip.',
      'Warranties run from about 20 years to a lifetime material warranty depending on the product. We help you choose the shingle that matches the house, the HOA, and how long you plan to stay — then we install it to the manufacturer’s spec so the warranty is real.',
      'Asphalt is often the most cost-effective way to reroof. If you are selling soon or you sit in a hail corridor, we will also walk you through tile and metal so you are not defaulting to the lowest line item by habit.',
    ],
    highlights: [
      {
        title: 'The Texas default — done right',
        body: 'Most Houston and Fort Worth houses wear asphalt. That does not mean every shingle is equal. We spec weight and wind rating for Gulf humidity and DFW hail, not a generic inland climate.',
      },
      {
        title: 'Repair or replace',
        body: 'Missing tabs, bruised fields after hail, and tired ridges can often be repaired. When the roof is at the end of its life, we tear off and replace — we do not stack a third layer and hope.',
      },
      {
        title: 'Honest comparison',
        body: 'If tile or metal is the better long-term spend for your house, we will say so. Asphalt is a tool, not the only product we sell.',
      },
    ],
    bullets: [
      'Architectural and premium shingle installation',
      'Full tear-off and reroof',
      'Storm and hail repairs',
      'Manufacturer material warranties',
      'Color and profile matching for HOA communities',
      'Code-compliant underlayment and ventilation',
    ],
    process: [
      {
        title: 'Inspect and spec',
        body: 'We check deck, ventilation, and the existing layers, then recommend a shingle class that fits budget and weather.',
      },
      {
        title: 'Tear-off or overlay',
        body: 'Most Texas codes and good practice call for tear-off. If an overlay is even on the table, we will tell you why — or why not.',
      },
      {
        title: 'Install to spec',
        body: 'Nailing pattern, starter, ridges, and flashing follow the manufacturer. That is how the warranty stays attached to the roof.',
      },
    ],
    related: [
      'residential-tile',
      'residential-metal-roofing',
      'residential-roof-inspections',
    ],
    faqs: [
      {
        question:
          'Are asphalt shingles a good choice for Houston and Fort Worth weather?',
        answer:
          'They are the most common sloped-roof material in Texas when the weight, wind rating, and warranty match the climate. We spec architectural and premium shingles for Gulf humidity and DFW hail — not a generic inland bundle — and install them to the manufacturer’s nailing and ventilation spec.',
      },
      {
        question: 'Should I repair damaged shingles or replace the whole roof?',
        answer:
          'Missing tabs, bruised fields after hail, and tired ridges can often be repaired. When the roof is at the end of its life or stacked too many layers, we tear off and replace. We will not add a third layer and hope.',
      },
      {
        question: 'Do asphalt shingles come with a manufacturer warranty?',
        answer:
          'Yes, depending on the product — typically from about 20 years to a lifetime material warranty. We install to spec so that warranty stays attached to the roof, not just the receipt.',
      },
      {
        question: 'Can you match HOA colors and profiles?',
        answer:
          'Yes. We work with major manufacturers so the shingle color and profile meet neighborhood rules without cutting corners on underlayment, starter, ridges, or ventilation.',
      },
    ],
  },
  {
    slug: 'residential-tile',
    name: 'Tile & Slate Roofing',
    shortName: 'Tile & Slate',
    formValue: 'Tile & Slate Roofing',
    category: 'residential',
    icon: 'Square',
    image: '/services/residential/tile-service.jpg',
    metaTitle: 'Tile & Slate Roofing | Installation and Repair',
    metaDescription:
      'Clay, concrete tile, and slate roofing in Houston and Fort Worth. Wind-resistant installation, copper flashings, and low-maintenance systems from Reynolds Roofing TX.',
    heroTitle: 'Tile and slate that earn their keep in Texas.',
    heroDescription:
      'Curb appeal, insulation, and a long service life — if the underlayment, flashings, and fastening are done like a specialty roof, not a shingle job in disguise.',
    description:
      'Clay, concrete tile, and slate roofs — long-lived, low-maintenance, and built for Texas heat and wind.',
    intro: [
      'A well-installed tile roof lasts for decades, adds value, and is one of the better defenses against harsh Texas weather. Tile and slate also insulate, which can take pressure off cooling bills, and they are among the least expensive systems to maintain once they are on correctly.',
      'We repair and install clay and concrete tile systems, and we handle slate when the house calls for it. Slate has the natural-stone look, a range of colors and textures, and it is among the most fire-resistant roofing materials available.',
      'Tile and slate fail at the details: underlayment, copper flashings, and fastening. We use copper flashings and accessories with a proper underlayment on slate, and we treat tile as a system — not just a pretty top layer.',
    ],
    highlights: [
      {
        title: 'Built for the long haul',
        body: 'Color-holding profiles, low maintenance, and a lifespan that outlasts several asphalt cycles. That is the economic case, not just the look.',
      },
      {
        title: 'Slate done as slate',
        body: 'Unique patterns, fire resistance, and a one-of-a-kind roof — if copper flashings and the right underlayment go on with it. Installation quality is the whole product.',
      },
      {
        title: 'Repair without a full tear-off',
        body: 'Broken tiles, slipped courses, and failed flashings are everyday work. We match profiles and repair instead of defaulting to a full replacement when the field is still sound.',
      },
    ],
    bullets: [
      'Clay and concrete tile installation',
      'Slate installation and repair',
      'Copper flashings and accessories',
      'Cleaning and maintenance',
      'Wind-resistant fastening',
      'Color, shape, and profile matching',
    ],
    process: [
      {
        title: 'Evaluate the deck',
        body: 'Tile and slate are heavy. We confirm structure, underlayment, and drainage before a single piece goes up.',
      },
      {
        title: 'Detail the metal',
        body: 'Valleys, sidewalls, and penetrations get the flashings those systems require — including copper on slate.',
      },
      {
        title: 'Set and maintain',
        body: 'Courses are fastened for Texas wind. We leave you with a maintenance path so the roof stays as durable as the day we finished.',
      },
    ],
    related: [
      'residential-asphalt-shingles',
      'residential-metal-roofing',
      'commercial-tile',
    ],
    faqs: [
      {
        question: 'How long does a tile or slate roof last in Texas?',
        answer:
          'A well-installed tile or slate roof lasts for decades — often through several asphalt cycles — if the underlayment, copper flashings, and fastening are treated as a system. The tile you see from the street is only as good as what is under it.',
      },
      {
        question:
          'Can you repair a tile roof without replacing the whole thing?',
        answer:
          'Often yes. Broken tiles, slipped courses, and failed flashings are everyday work. We match profiles and repair when the field is still sound instead of defaulting to a full tear-off.',
      },
      {
        question: 'Does a tile roof need a stronger roof deck?',
        answer:
          'Tile and slate are heavy. We confirm structure, underlayment, and drainage before a single piece goes up so the house can carry the system in Texas wind.',
      },
      {
        question: 'Why do you use copper flashings on slate?',
        answer:
          'Slate fails at the details. Copper flashings and the right underlayment are how a specialty roof stays watertight — not a shingle-style flashing kit improvised on a stone roof.',
      },
    ],
  },
  {
    slug: 'residential-metal-roofing',
    name: 'Residential Metal Roofing',
    shortName: 'Metal Roofing',
    formValue: 'Residential Metal Roofing',
    category: 'residential',
    icon: 'Layers',
    image: '/services/residential/metal-roofing.jpg',
    metaTitle: 'Residential Metal Roofing | Standing Seam & Lock Seam',
    metaDescription:
      'Standing seam and lock seam metal roofs for Houston and Fort Worth homes. Recyclable, long-lived systems that can often go over an existing roof. Reynolds Roofing TX.',
    heroTitle: 'A metal roof that works as hard as the Texas sun.',
    heroDescription:
      'Standing seam and lock seam systems — long service life, strong colors, and an environmental edge when the old roof can stay put.',
    description:
      'Standing seam and lock seam metal roofs — durable, recyclable, and often installable over the existing roof.',
    intro: [
      'Metal roofs can often be placed over a current roof, which means less tear-off waste on install day. Years later, when the system is finally replaced, the metal itself can be recycled. That is a better story than sending another asphalt roof to the landfill.',
      'We install standing seam and lock seam residential systems in Kynar-coated colors. Metal is a lifetime-oriented solution when it is detailed correctly — not a barn panel screwed to a house.',
      'Energy, hail, and HOA rules all factor in. We will tell you when metal is the right spend and when a premium shingle still makes more sense for the street.',
    ],
    highlights: [
      {
        title: 'Less waste on the way up',
        body: 'Where structure and code allow, metal can overlay the existing roof. That saves tear-off labor and keeps material out of the landfill.',
      },
      {
        title: 'Standing seam and lock seam',
        body: 'We install the profiles that belong on a house — clean lines, concealed or controlled fasteners, and coatings that hold color in Gulf and North Texas sun.',
      },
      {
        title: 'End of life is not the dump',
        body: 'When a metal roof is finally replaced, the panels recycle. Few residential systems can say the same.',
      },
    ],
    bullets: [
      'Standing seam metal roofing',
      'Lock seam profiles',
      'Kynar-coated color options',
      'Overlay installations where allowed',
      'Energy-efficient, reflective finishes',
      'Long service life with low maintenance',
    ],
    process: [
      {
        title: 'Check the deck',
        body: 'We confirm whether an overlay is structurally and legally sound, or whether tear-off is the honest move.',
      },
      {
        title: 'Choose the profile',
        body: 'Standing seam, lock seam, color, and trim are specced to the house — not a leftover commercial panel.',
      },
      {
        title: 'Flash like metal',
        body: 'Penetrations, eaves, and ridges are detailed for a metal system. That is where leaks start if you treat it like shingles.',
      },
    ],
    related: [
      'commercial-metal-roofing',
      'residential-asphalt-shingles',
      'residential-tile',
    ],
    faqs: [
      {
        question: 'Can a metal roof go over my existing shingles?',
        answer:
          'Often, yes — where structure and code allow. Overlaying saves tear-off labor and keeps asphalt out of the landfill. We will tell you when an overlay is sound and when tear-off is the honest move.',
      },
      {
        question: 'What metal roof profiles do you install on houses?',
        answer:
          'Standing seam and lock seam systems with Kynar-coated colors — the profiles that belong on a house, not a barn panel screwed to a residential deck.',
      },
      {
        question: 'Is metal roofing a good fit for Houston heat and DFW hail?',
        answer:
          'Metal is a long-lived, reflective option when it is detailed correctly. Energy, hail exposure, and HOA rules all factor in. We will say when metal is the right spend and when a premium shingle still makes more sense for the street.',
      },
      {
        question: 'Are metal roofs recyclable?',
        answer:
          'Yes. When a metal roof is finally replaced, the panels recycle. Few residential systems can say the same, which is part of why homeowners choose metal as a lifetime-oriented spec.',
      },
    ],
  },
  {
    slug: 'residential-interior-repairs',
    name: 'Interior Repairs',
    shortName: 'Interior Repairs',
    formValue: 'Interior Repairs',
    category: 'residential',
    icon: 'PaintRoller',
    image: '/services/residential/interior-repairs.jpg',
    metaTitle: 'Interior Repairs After Roof Leaks | Drywall, Paint & Restore',
    metaDescription:
      'Interior repairs in Houston and Fort Worth — sheetrock, texture matching, painting, and restoration after roof leaks. Reynolds Roofing TX handles the roof and the rooms underneath.',
    heroTitle: 'The leak is fixed. Now fix the rooms.',
    heroDescription:
      'Sheetrock, texture, paint, and the restoration work a roof leak leaves behind — same company, one schedule.',
    description:
      'Interior restoration after leaks: sheetrock, texture matching, painting, and remodel work tied to the roof above.',
    intro: [
      'A roofing company that walks away after the tarps come off leaves you with stained ceilings and a second contractor. We handle interior repairs alongside the roof — from a simple paint-up after a leak to rebuilding rooms that took water.',
      'Our crews do sheetrock repair, texture matching, interior painting, and the finish work that makes the room look like the leak never happened. When the project is larger, we also take on kitchen and bath remodels, flooring, cabinets, trim, and additions as general contracting.',
      'If the water came from the roof, start with the roof. Then we restore what it damaged so you are not coordinating three trades.',
    ],
    highlights: [
      {
        title: 'Roof and rooms, one point of contact',
        body: 'The crew that stops the leak can close the ceiling. You are not waiting on a separate drywall sub who never saw the roof.',
      },
      {
        title: 'Match what was there',
        body: 'Texture matching and paint are where cheap repairs show. We blend the repair into the existing finish instead of leaving a square on the ceiling.',
      },
      {
        title: 'From patch to remodel',
        body: 'Some jobs are a stain. Some are a kitchen. We scale from leak restoration to full interior work without changing companies.',
      },
    ],
    bullets: [
      'Sheetrock repair and texture matching',
      'Interior painting',
      'Kitchen and bathroom remodels',
      'Custom cabinets, trim, and granite',
      'Window and door installation',
      'Wood flooring, tile, and carpet',
      'Blown insulation',
      'Additions and general contracting',
    ],
    process: [
      {
        title: 'Stop the water',
        body: 'Interior work is wasted if the roof still leaks. We sequence the exterior first.',
      },
      {
        title: 'Open, dry, replace',
        body: 'Damaged board comes out, the cavity dries, and new sheetrock and texture go in to match.',
      },
      {
        title: 'Finish the room',
        body: 'Paint, trim, and any remodel scope close the job so the house is livable — not just dry.',
      },
    ],
    related: [
      'residential-exterior-repairs',
      'residential-roof-inspections',
      'residential-home-improvement',
    ],
    faqs: [
      {
        question: 'Do you repair the rooms after you fix the roof leak?',
        answer:
          'Yes. A roofing company that walks away after the tarps come off leaves you with stained ceilings and a second contractor. We handle sheetrock, texture matching, paint, and restoration so the leak and the rooms are one schedule.',
      },
      {
        question: 'Can you match existing ceiling texture and paint?',
        answer:
          'That is the standard, not an upgrade. Texture matching and paint are where cheap repairs show. We blend the repair into the existing finish instead of leaving a square on the ceiling.',
      },
      {
        question: 'What if the leak damaged more than a ceiling stain?',
        answer:
          'We scale from a paint-up to kitchens, baths, flooring, trim, and additions as general contracting. Interior work still waits until the roof above it is actually dry.',
      },
      {
        question: 'Should interior repairs start before the roof is fixed?',
        answer:
          'No. Interior work is wasted if the roof still leaks. We sequence the exterior first, then open, dry, and restore the rooms.',
      },
    ],
  },
  {
    slug: 'residential-exterior-repairs',
    name: 'Exterior Repairs',
    shortName: 'Exterior Repairs',
    formValue: 'Exterior Repairs',
    category: 'residential',
    icon: 'PanelLeft',
    image: '/services/residential/exterior-repairs.jpg',
    metaTitle: 'Exterior Repairs | Siding, Gutters, Paint & Roof Work',
    metaDescription:
      'Exterior home repairs in Houston and Fort Worth — siding, seamless gutters, fascia, paint, chimneys, and roof work from Reynolds Roofing TX.',
    heroTitle: 'The whole envelope, not just the shingles.',
    heroDescription:
      'Siding, gutters, fascia, paint, and the roof that ties it together — one crew for the outside of the house.',
    description:
      'Siding, seamless gutters, fascia, paint, chimneys, and roof repairs — the exterior work that keeps water out.',
    intro: [
      'The roof is the cap, not the whole envelope. We handle exterior repairs and home improvement so siding, gutters, and trim are not an afterthought farmed out to whoever is free.',
      'That includes roof replacement and leak maintenance, wood and James Hardie siding, vinyl, fascia and soffit, 5" and 6" seamless gutters, chimney work, exterior paint, windows, doors, patio covers, fencing, and the general construction that sits around a reroof.',
      'If the house took flood or storm damage, we can rebuild the exterior as a coordinated job instead of a stack of unrelated bids.',
    ],
    highlights: [
      {
        title: 'Siding that belongs with the roof',
        body: 'James Hardie, wood, and vinyl — installed so wall caps, kickout flashing, and roof edges actually meet. That junction is where leaks start.',
      },
      {
        title: 'Seamless gutters, sized right',
        body: '5" and 6" seamless aluminum formed for the house, pitched, and tied into downspouts. Clogged or jointed gutters are a roof problem wearing a different name.',
      },
      {
        title: 'One exterior schedule',
        body: 'Paint, fascia, chimneys, and skylights get done with the roof instead of six return trips.',
      },
    ],
    bullets: [
      'Roof replacement, repairs, and leak maintenance',
      'Wood, vinyl, and James Hardie siding',
      '5" and 6" seamless gutters',
      'Fascia, soffit, and chimney repair',
      'Exterior painting',
      'Skylights and custom sheet metal',
      'Windows, doors, and solar screens',
      'Patio covers, decks, fencing, and additions',
    ],
    process: [
      {
        title: 'Look at the whole wall',
        body: 'We inspect roof edges, siding, and drainage together so we are not patching the symptom.',
      },
      {
        title: 'Sequence the trades',
        body: 'Roof, sheet metal, siding, then paint and gutters — in an order that does not wreck the last step.',
      },
      {
        title: 'Close the envelope',
        body: 'Flashings, gutters, and paint go on so the house sheds water as a system.',
      },
    ],
    related: [
      'residential-interior-repairs',
      'residential-asphalt-shingles',
      'residential-home-improvement',
    ],
    faqs: [
      {
        question: 'Do you handle siding and gutters as well as the roof?',
        answer:
          'Yes. The roof is the cap, not the whole envelope. We install wood, vinyl, and James Hardie siding, 5" and 6" seamless gutters, fascia, soffit, chimney work, and exterior paint so wall caps and roof edges actually meet.',
      },
      {
        question: 'Why do gutters matter for roof leaks?',
        answer:
          'Clogged or poorly pitched gutters overflow into fascia and back onto the roof edge. Seamless gutters, sized and tied into downspouts, are often a roof problem wearing a different name.',
      },
      {
        question: 'Can one crew handle storm damage to the whole exterior?',
        answer:
          'That is the point. Roof, sheet metal, siding, then paint and gutters — sequenced so the last step is not wrecked by the next trade. Flood and storm rebuilds do not have to be a stack of unrelated bids.',
      },
      {
        question: 'Do you install James Hardie siding in Houston humidity?',
        answer:
          'Yes. Fiber cement is a common Houston-area spec. We detail kickout flashing and roof-to-wall junctions so the siding and the roof shed water as one system.',
      },
    ],
  },
  {
    slug: 'residential-home-improvement',
    name: 'Home Improvement Packages',
    shortName: 'Maintenance Packages',
    formValue: 'Home Improvement Package',
    category: 'residential',
    icon: 'Package',
    image: '/services/residential/home-improvement.jpg',
    metaTitle:
      'Roof Maintenance Packages | Preventative Care & Critter Control',
    metaDescription:
      'Preventative roof maintenance, deep cleaning, and critter control packages for Houston and Fort Worth homes. Keep the roof you have. Reynolds Roofing TX.',
    heroTitle: 'Keep the roof you have working longer.',
    heroDescription:
      'Yearly inspections, preventative maintenance, and packages that catch small problems before they become a replacement.',
    description:
      'Preventative maintenance, deep cleaning, and critter control — packages that extend the life of the roof you already have.',
    intro: [
      'We install complete roof systems, and we also understand the economics of yearly inspections. A roof and its accessories reach full life expectancy when someone actually looks at them. Every repair we perform includes a photo-documented inspection; depending on condition, we offer a package that fits the house.',
      'The Preventative Maintenance Package stays on top of normal wear: flashings secured and sealed, vents and nail heads addressed, missing shingles repaired, and problem areas flagged before they leak.',
      'Add deep cleaning when debris and gutters are the issue, or Critter Control when wildlife is using the attic as a second house. An ounce of prevention is still cheaper than a tear-off.',
    ],
    highlights: [
      {
        title: 'Preventative Maintenance Package',
        body: 'Secure and re-nail flashings, seal vents and exposed nails, repaint flashings and turbines, repair missing shingles, and identify major problem areas.',
      },
      {
        title: 'Deep Cleaning add-on',
        body: 'Debris off the roof, gutters cleared, and tree limbs cut back from the edge — the stuff that rots edges and overflows into fascia.',
      },
      {
        title: 'Critter Control Package',
        body: 'Find and seal attic entry points, cover vents, and install custom metal flashing rodents cannot chew through. Wildlife belongs outside.',
      },
    ],
    bullets: [
      'Annual photo-documented inspections',
      'Flashing, vent, and nail-head sealing',
      'Missing shingle repair',
      'Gutter and roof debris removal',
      'Tree trimming away from the roof',
      'Attic entry sealing and vent covers',
      'Custom metal flashing for rodent control',
    ],
    process: [
      {
        title: 'Inspect with photos',
        body: 'We document the roof the same way we would for a full inspection, then recommend the package that matches what we found.',
      },
      {
        title: 'Maintain, don’t guess',
        body: 'Flashings, vents, shingles, and drainage get the work listed in the package — not a vague “tune-up.”',
      },
      {
        title: 'Come back next year',
        body: 'The point is a rhythm. Small visits beat surprise replacements.',
      },
    ],
    related: [
      'residential-roof-inspections',
      'residential-exterior-repairs',
      'commercial-leak-detection',
    ],
    faqs: [
      {
        question: 'What is included in a preventative roof maintenance package?',
        answer:
          'Flashings secured and sealed, vents and nail heads addressed, missing shingles repaired, and problem areas photographed before they leak. Every visit includes a photo-documented inspection so you know what was done.',
      },
      {
        question: 'Is yearly roof maintenance cheaper than waiting for a leak?',
        answer:
          'Almost always. An ounce of prevention is still cheaper than a tear-off — especially once Texas storms and code upgrades enter a replacement. Small visits beat surprise replacements.',
      },
      {
        question: 'Do you clean gutters and cut back trees as part of maintenance?',
        answer:
          'Yes, as a Deep Cleaning add-on: debris off the roof, gutters cleared, and limbs cut back from the edge — the stuff that rots edges and overflows into fascia.',
      },
      {
        question: 'Can you keep animals out of the attic?',
        answer:
          'The Critter Control Package finds and seals attic entry points, covers vents, and installs custom metal flashing rodents cannot chew through. Wildlife belongs outside.',
      },
    ],
  },
  {
    slug: 'commercial-metal-roofing',
    name: 'Commercial Metal Roofing',
    shortName: 'Commercial Metal',
    formValue: 'Commercial Metal Roofing',
    category: 'commercial',
    icon: 'Layers',
    image: '/services/commercial/metal-roofing.jpg',
    metaTitle: 'Commercial Metal Roofing | Standing Seam & Industrial Panels',
    metaDescription:
      'Commercial metal roof installation and repair in Houston and Fort Worth. Standing seam, lock seam, and industrial metal systems from Reynolds Roofing TX.',
    heroTitle: 'Commercial metal that looks finished and lasts.',
    heroDescription:
      'Low-maintenance metal for sloping commercial structures — standing seam, lock seam, and industrial panels specced as a long-term investment.',
    description:
      'Standing seam, lock seam, and industrial metal roofs for commercial buildings — low maintenance, long life.',
    intro: [
      'Metal is an aesthetically clean, low-maintenance system for sloping commercial structures. Newer coatings, panel profiles, and pricing have made it a serious long-term investment rather than a warehouse-only look.',
      'We install and repair standing seam, lock seam, and industrial metal roofs. Panels are light — often under 1.6 pounds per square foot — so they can frequently go over existing roofing, which saves tear-off time and landfill waste.',
      'A sales rep will walk you through color, profile, and whether overlay or tear-off is the honest spec for the building.',
    ],
    highlights: [
      {
        title: 'Made for slope',
        body: 'Commercial metal belongs on sloping structures. We do not force a standing-seam look onto a dead-flat deck that wants TPO.',
      },
      {
        title: 'Overlay when it is sound',
        body: 'Light panels can often ride over the existing roof, cutting downtime and disposal. We will not overlay a failed deck just to win the bid.',
      },
      {
        title: 'Shop-quality flashing',
        body: 'Penetrations, copings, and transitions are where commercial metal leaks. We treat sheet metal as part of the roof, not an accessory.',
      },
    ],
    bullets: [
      'Standing seam and lock seam',
      'Industrial metal panel systems',
      'Installation and repair',
      'Overlay over existing roofs where allowed',
      'Color and profile options',
      'Custom sheet metal at penetrations',
    ],
    process: [
      {
        title: 'Read the structure',
        body: 'Slope, existing roof, and attachment method decide whether metal is the right system.',
      },
      {
        title: 'Spec the panel',
        body: 'Profile, coating, and fastening are chosen for the building’s weather and look — Houston humidity or DFW hail.',
      },
      {
        title: 'Install with the business running',
        body: 'We plan staging and hours so the roof goes on without shutting the operation underneath.',
      },
    ],
    related: [
      'residential-metal-roofing',
      'commercial-roof-repair',
      'commercial-tpo',
    ],
    faqs: [
      {
        question: 'When is commercial metal the right system instead of TPO?',
        answer:
          'Commercial metal belongs on sloping structures. We do not force a standing-seam look onto a dead-flat deck that wants TPO. Slope, existing roof, and attachment method decide the spec.',
      },
      {
        question: 'Can commercial metal panels overlay an existing roof?',
        answer:
          'Often. Panels are light — frequently under 1.6 pounds per square foot — so they can ride over existing roofing, cutting downtime and disposal. We will not overlay a failed deck just to win the bid.',
      },
      {
        question: 'What metal profiles do you install on commercial buildings?',
        answer:
          'Standing seam, lock seam, and industrial metal panel systems, with shop-quality flashing at penetrations, copings, and transitions — the spots commercial metal actually leaks.',
      },
      {
        question: 'Will a metal reroof shut down our operation?',
        answer:
          'We plan staging and hours so the roof goes on without shutting the business underneath. That is the same occupancy-first approach we use on commercial repairs.',
      },
    ],
  },
  {
    slug: 'commercial-roof-inspection',
    name: 'Commercial Roof Inspections',
    shortName: 'Commercial Inspections',
    formValue: 'Commercial Roof Inspection',
    category: 'commercial',
    icon: 'ClipboardCheck',
    image: '/services/commercial/inspection-reports.jpg',
    metaTitle: 'Commercial Roof Inspections | PDF Reports & Maintenance Plans',
    metaDescription:
      'Commercial roof inspections in Houston and Fort Worth with PDF photo reports, remaining-life estimates, and written repair proposals from Reynolds Roofing TX.',
    heroTitle: 'Know what the commercial roof is actually doing.',
    heroDescription:
      'Condition, remaining life, and a maintenance path — documented in PDF with photos your facilities team can act on.',
    description:
      'Unbiased commercial inspections with photo PDFs, remaining-life estimates, and a written repair plan.',
    intro: [
      'Whether you are buying, selling, appraising, or renovating a commercial property, the roof can move the deal. We determine general condition, life expectancy, and the maintenance or repairs that are needed, then put an unbiased assessment in PDF form for easy review and transmittal.',
      'Most general inspectors will not do a thorough commercial roof inspection. We inspect roof areas, materials, chimneys, skylights, coping caps, parapet walls, flashings, HVAC penetrations, plumbing, scuppers, drains, gutters, and downspouts — the assembly that actually keeps a low-slope building dry.',
      'If repairs or routine maintenance are needed, they show up in the report with photos and a detailed written estimate.',
    ],
    highlights: [
      {
        title: 'Computerized photo reports',
        body: 'Deficiencies are referenced to specific photos. When corrections are required, the people doing the work have a clear outline.',
      },
      {
        title: 'Commercial-specific checklist',
        body: 'Parapets, copings, HVAC curbs, scuppers, and internal drains are not residential details. We inspect them as a system.',
      },
      {
        title: 'Tied to maintenance',
        body: 'The inspection is the start of a repair or maintenance program — not a PDF that sits in a drawer until the next leak.',
      },
    ],
    bullets: [
      'Condition of all roofing materials',
      'Flashing at transitions, chimneys, HVAC, vents, drains, and plumbing',
      'Coping caps and parapet walls',
      'Roof drains, scuppers, gutters, and downspouts',
      'Current leaks and conditions that will leak',
      'Written estimate with the report',
    ],
    process: [
      {
        title: 'Walk the roof and the walls',
        body: 'We inspect the field, perimeters, and penetrations — not just the membrane in the middle.',
      },
      {
        title: 'Report in PDF',
        body: 'Photos, material type, remaining life, and recommended work, formatted so ownership or a buyer can use it.',
      },
      {
        title: 'Price the next step',
        body: 'Repairs and maintenance come with a written estimate so the decision is a number, not a feeling.',
      },
    ],
    related: [
      'commercial-roof-repair',
      'commercial-leak-detection',
      'residential-roof-inspections',
    ],
    faqs: [
      {
        question: 'What does a commercial roof inspection include?',
        answer:
          'We inspect the field, perimeters, and penetrations: materials, chimneys, skylights, coping caps, parapet walls, flashings, HVAC curbs, plumbing, scuppers, drains, gutters, and downspouts. Findings go in a PDF with photos and remaining-life notes.',
      },
      {
        question: 'Do you inspect commercial roofs for buyers and lenders?',
        answer:
          'Yes. Whether you are buying, selling, appraising, or refinancing, the roof can move the deal. The report is formatted so ownership, a buyer, or a facilities manager can act on it.',
      },
      {
        question: 'Is the inspection tied to a repair estimate?',
        answer:
          'If repairs or routine maintenance are needed, they show up next to the photos with a detailed written estimate — not a PDF that sits in a drawer until the next leak.',
      },
      {
        question: 'Why not use a general building inspector for the roof?',
        answer:
          'Most general inspectors will not do a thorough commercial roof inspection. Parapets, copings, HVAC curbs, and internal drains are not residential details. We inspect them as a system.',
      },
    ],
  },
  {
    slug: 'commercial-roof-repair',
    name: 'Commercial Roof Repair',
    shortName: 'Commercial Repair',
    formValue: 'Commercial Roof Repair',
    category: 'commercial',
    icon: 'Wrench',
    image: '/services/commercial/roof-repair.jpg',
    metaTitle: 'Commercial Roof Repair | Emergency Leaks & Replacements',
    metaDescription:
      'Commercial roof repair in Houston and Fort Worth — emergency leaks, maintenance, full replacement, and insurance-claim help from Reynolds Roofing TX.',
    heroTitle: 'Commercial repairs that respect the business below.',
    heroDescription:
      'Emergency leaks, planned maintenance, and full replacements — with manufacturer relationships and insurance-claim help when the weather did the damage.',
    description:
      'Emergency leak service, maintenance, and full commercial replacements across TPO, metal, bitumen, and coatings.',
    intro: [
      'Commercial roofs are unique and they fail in unique ways. We provide repair, maintenance, and replacement for the systems Houston and Fort Worth buildings actually wear — TPO, EPDM, modified bitumen, built-up, standing seam, tile, coatings, and foam.',
      'Long-standing manufacturer and supplier relationships give us the flexibility to meet the building instead of forcing one product. When damage is beyond normal wear, our insurance-claims staff can help evaluate the property and walk you through the claims process, staying in contact through the project.',
      'Same-day emergency leak service is on the board when water is in the building. The rest of the work gets scheduled around your operation.',
    ],
    highlights: [
      {
        title: 'Emergency leak service',
        body: 'When the roof is in the suite, we treat it as urgent — temporary measures first, then a lasting repair.',
      },
      {
        title: 'Insurance advocacy',
        body: 'Storm damage is not a DIY claim. We help evaluate, document, and stay on the file so you are not translating adjuster-speak alone.',
      },
      {
        title: 'Full commercial stack',
        body: 'TPO/EPDM, modified bitumen and BUR, metal, tile, elastomeric coatings, skylights, ventilation, and custom warranties.',
      },
    ],
    bullets: [
      'Emergency leak service and 24-hour repair response',
      'Maintenance and full replacement',
      'TPO, EPDM, modified bitumen, and built-up systems',
      'Standing seam and industrial metal',
      'Elastomeric coatings and SPF foam',
      'Custom skylights, sheet metal, and ventilation',
      'Preventative maintenance programs',
      'Manufacturer warranty and insurance-claim assistance',
    ],
    process: [
      {
        title: 'Stop the water',
        body: 'Emergency service first if the building is taking on water. Then we diagnose the system, not just the drip.',
      },
      {
        title: 'Repair or replace',
        body: 'We price the honest scope — patch, restore, or reroof — against remaining life and code upgrades.',
      },
      {
        title: 'Work around occupancy',
        body: 'Staging, hours, and access are planned so the business keeps operating.',
      },
    ],
    related: [
      'commercial-leak-detection',
      'commercial-roof-inspection',
      'commercial-tpo',
    ],
    faqs: [
      {
        question: 'Do you offer emergency commercial roof repair in Houston and Fort Worth?',
        answer:
          'Yes. Same-day emergency leak service is on the board when water is in the building. Temporary measures stop the leak first; then we diagnose the system and price a lasting repair.',
      },
      {
        question: 'Which commercial roof systems can you repair?',
        answer:
          'TPO, EPDM, modified bitumen, built-up, standing seam, tile, elastomeric coatings, and foam — the stack Houston and Fort Worth buildings actually wear. Manufacturer relationships let us meet the building instead of forcing one product.',
      },
      {
        question: 'Can you help with an insurance claim after storm damage?',
        answer:
          'Yes. Our insurance-claims staff can help evaluate the property, document the damage, and stay in contact through the project so you are not translating adjuster-speak alone.',
      },
      {
        question: 'Will repairs interrupt our tenants or customers?',
        answer:
          'We plan staging, hours, and access so the business keeps operating. Emergency work stops the water; planned replacements are scheduled around occupancy.',
      },
    ],
  },
  {
    slug: 'commercial-leak-detection',
    name: 'Commercial Leak Detection',
    shortName: 'Leak Detection',
    formValue: 'Commercial Leak Detection',
    category: 'commercial',
    icon: 'Droplets',
    image: '/services/commercial/roof-leak-detection.jpg',
    metaTitle: 'Commercial Leak Detection | Same-Day Emergency Service',
    metaDescription:
      'Same-day commercial leak detection and emergency roofing in Houston and Fort Worth. Photo reports, recommended repairs, and preventative maintenance. Reynolds Roofing TX.',
    heroTitle: 'Find the leak. Then stop it.',
    heroDescription:
      'Commercial leaks rarely start where the bucket sits. We trace them, document them, and repair the system — often the same day.',
    description:
      'Same-day leak response for low-slope commercial roofs, with photo documentation and a repair plan.',
    intro: [
      'We understand the urgency when a commercial roof leaks. Dedicated service crews handle emergency roofing so you are not waiting on a residential calendar. We repair all types of low-slope and flat commercial and industrial systems, and we work around a business schedule.',
      'Preventative maintenance is still the cheaper path. An ounce of prevention can extend — sometimes roughly double — the life of a roof you would otherwise replace, especially once code upgrades enter a reroof.',
      'The approach is simple: a short conversation about leak history, an inspection of condition and deficiencies, then a free inspection report with photos, recommended repair methods, and enough information to make a timely decision.',
    ],
    highlights: [
      {
        title: 'Same-day emergency response',
        body: 'When water is in the building, we prioritize the call and get a crew on the leak — not a callback next week.',
      },
      {
        title: 'Low-slope specialists',
        body: 'We are set up for the membranes commercial buildings actually use, and we work as manufacturer-certified repair crews on those systems.',
      },
      {
        title: 'Prevention after the panic',
        body: 'Once the leak is stopped, we will show you the maintenance that keeps the next one from showing up in the same corner.',
      },
    ],
    bullets: [
      'Same-day emergency leak service',
      'Low-slope and flat commercial systems',
      'Photo-documented inspection reports',
      'Recommended repair methods with pricing',
      'Preventative maintenance programs',
      'Work scheduled around business hours',
    ],
    process: [
      {
        title: 'History first',
        body: 'A brief conversation about where water shows up and what has already been tried.',
      },
      {
        title: 'Inspect and photograph',
        body: 'We find deficiencies on the roof — not just the stain on the ceiling — and put them in a report.',
      },
      {
        title: 'Repair, then maintain',
        body: 'Emergency work stops the water. A maintenance plan keeps you from buying the same leak twice.',
      },
    ],
    related: [
      'commercial-roof-repair',
      'commercial-roof-inspection',
      'commercial-waterproofing',
    ],
    faqs: [
      {
        question: 'How quickly can you find and stop a commercial roof leak?',
        answer:
          'We understand the urgency. Dedicated service crews handle emergency roofing, often the same day, instead of waiting on a residential calendar. Call Katy at 832-321-5088 or Arlington at 817-789-8458 when water is in the building.',
      },
      {
        question: 'Why is the leak not always where the bucket sits?',
        answer:
          'On low-slope roofs, water travels. We trace deficiencies on the roof — flashings, seams, drains, penetrations — not just the stain on the ceiling, then document them in a photo report.',
      },
      {
        question: 'Do you work around business hours for leak repairs?',
        answer:
          'Yes. We repair low-slope and flat commercial systems on a business schedule so a leak does not have to close the doors.',
      },
      {
        question: 'Should we maintain the roof after the emergency repair?',
        answer:
          'Yes. Preventative maintenance can extend — sometimes roughly double — the life of a roof you would otherwise replace, especially once code upgrades enter a reroof. Stopping the leak is step one; keeping the next one from showing up is the cheaper path.',
      },
    ],
  },
  {
    slug: 'commercial-modified-bitumen',
    name: 'Modified Bitumen',
    shortName: 'Modified Bitumen',
    formValue: 'Modified Bitumen Roofing',
    category: 'commercial',
    icon: 'Layers',
    image: '/services/commercial/modified-bitumen.jpg',
    metaTitle: 'Modified Bitumen Roofing | Multi-Ply Commercial Systems',
    metaDescription:
      'Modified bitumen commercial roofing in Houston and Fort Worth — multi-ply membranes, insulation, flashings, and surfacing from Reynolds Roofing TX.',
    heroTitle: 'Multi-ply roofs for decks that need redundancy.',
    heroDescription:
      'Modified bitumen systems built in layers — insulation, plies, membrane, adhesive, and surfacing — so one puncture is not an open building.',
    description:
      'Multi-ply modified bitumen membranes for commercial low-slope roofs, assembled like a built-up system with modern sheets.',
    intro: [
      'Polymer-modified roof membranes use reinforcing fabrics as carriers for hot polymer-modified bitumen rolled in the factory. On the roof, modified bitumen systems are built in multiple layers, much like traditional built-up roofs — redundancy you do not get from a single thin sheet.',
      'Five basic components can be assembled in a number of combinations: insulation for R-value and a stable substrate; modified or unmodified base and ply sheets; a factory-fabricated modified bitumen membrane (typically polyester, fiberglass, or composite reinforced); hot- or cold-applied adhesive; and a factory or field-applied surfacing for UV protection.',
      'Flashings waterproof the perimeter, equipment curbs, and penetrations. That is where these systems succeed or fail, and it is where we spend the attention.',
    ],
    highlights: [
      {
        title: 'Layers on purpose',
        body: 'Multiple plies mean a single scrape is less likely to open the building. That is the point of a modified bitumen spec versus a bare single-ply.',
      },
      {
        title: 'Hot or cold applied',
        body: 'Adhesive and assembly method are chosen for the building, occupancy, and odor constraints — not whatever the crew prefers that week.',
      },
      {
        title: 'Surfacing that takes the sun',
        body: 'UV protection is not optional in Texas. Granules, coatings, or factory surfacing are part of the system, not an upgrade.',
      },
    ],
    bullets: [
      'Multi-ply modified bitumen membranes',
      'Insulation and stable substrates',
      'Base sheets and ply layers',
      'Hot- and cold-applied assemblies',
      'UV surfacing and weathering caps',
      'Perimeter and penetration flashings',
    ],
    process: [
      {
        title: 'Spec the stack',
        body: 'Insulation, plies, membrane, and surfacing are chosen for the deck, traffic, and Texas UV.',
      },
      {
        title: 'Build in sequence',
        body: 'Each layer is installed to the manufacturer’s assembly — no skipped plies to hit a number.',
      },
      {
        title: 'Flash the exceptions',
        body: 'Walls, curbs, and pipes get detailed flashings so the field membrane is not asked to do the impossible.',
      },
    ],
    related: [
      'commercial-tpo',
      'commercial-waterproofing',
      'commercial-roof-repair',
    ],
    faqs: [
      {
        question: 'What is modified bitumen roofing?',
        answer:
          'It is a multi-ply commercial membrane built in layers — insulation, ply sheets, a factory-fabricated modified bitumen sheet, adhesive, and UV surfacing. Redundancy you do not get from a single thin sheet, assembled much like a traditional built-up roof with modern materials.',
      },
      {
        question: 'When should a building use modified bitumen instead of TPO?',
        answer:
          'When the deck needs puncture resistance and layered redundancy — traffic, equipment, or a history of single-ply failures. We spec the stack for the deck, occupancy, and Texas UV instead of defaulting to whatever is cheapest that week.',
      },
      {
        question: 'Can modified bitumen be installed with low-odor adhesives?',
        answer:
          'Hot- or cold-applied assemblies are chosen for the building, occupancy, and odor constraints — not whatever the crew prefers. Occupied buildings often need the colder, lower-odor path.',
      },
      {
        question: 'Where do modified bitumen roofs usually leak?',
        answer:
          'At flashings: perimeters, equipment curbs, and penetrations. That is where these systems succeed or fail, and it is where we spend the attention — not just the field membrane.',
      },
    ],
  },
  {
    slug: 'commercial-tile',
    name: 'Commercial Tile & Slate',
    shortName: 'Commercial Tile',
    formValue: 'Commercial Tile & Slate',
    category: 'commercial',
    icon: 'Square',
    image: '/services/commercial/tile-service.jpg',
    metaTitle: 'Commercial Tile & Slate Roofing | Repair and Installation',
    metaDescription:
      'Commercial tile and slate roof repair and installation in Houston and Fort Worth. Long-lived, low-maintenance systems from Reynolds Roofing TX.',
    heroTitle: 'Tile and slate on buildings that need to look finished.',
    heroDescription:
      'Steep-slope commercial and institutional roofs — tile and slate that add value, insulation, and a real defense against Texas weather.',
    description:
      'Tile and slate for commercial and institutional steep-slope roofs — long life, low maintenance, and strong curb presence.',
    intro: [
      'A high-quality tile or slate roof lasts for years, adds beauty and value to a building, and is an excellent defense against harsh Texas weather. These systems insulate, can lower energy bills, and are among the least expensive to maintain once they are installed correctly.',
      'We advise on, repair, and install commercial tile and slate. A certified sales representative will help you choose the right system instead of treating a church, school, or office like a production house.',
      'The same detailing rules apply as residential tile — underlayment, flashings, and fastening — with commercial access, liability, and occupancy layered on.',
    ],
    highlights: [
      {
        title: 'Steep-slope commercial work',
        body: 'Not every commercial roof is a flat TPO deck. We handle the tile and slate buildings that still need a specialist.',
      },
      {
        title: 'Repair without a full reroof',
        body: 'Broken tiles, slipped courses, and failed flashings can often be repaired. We match existing profiles instead of defaulting to a cheap overlay.',
      },
      {
        title: 'Energy and maintenance',
        body: 'Mass and air space in a tile system work as insulation. Low maintenance is the operating-cost argument, not just the brochure.',
      },
    ],
    bullets: [
      'Commercial tile installation and repair',
      'Slate repair and installation',
      'Profile and color matching',
      'Underlayment and flashing replacement',
      'Steep-slope safety and access',
      'Maintenance programs for tile roofs',
    ],
    process: [
      {
        title: 'Inspect the system',
        body: 'We separate cosmetic tile issues from failed underlayment — the expensive problem hiding under a pretty field.',
      },
      {
        title: 'Repair or replace',
        body: 'Sound fields get repairs. Failed underlayment or widespread breakage gets an honest replacement number.',
      },
      {
        title: 'Protect occupancy',
        body: 'Staging and fall protection are planned for a building that may stay open during the work.',
      },
    ],
    related: [
      'residential-tile',
      'commercial-roof-repair',
      'commercial-metal-roofing',
    ],
    faqs: [
      {
        question: 'Do you install tile and slate on commercial buildings?',
        answer:
          'Yes. Not every commercial roof is a flat TPO deck. Churches, schools, and offices with steep-slope tile or slate need a specialist for underlayment, flashings, fastening, access, and occupancy.',
      },
      {
        question: 'Can commercial tile be repaired instead of replaced?',
        answer:
          'Broken tiles, slipped courses, and failed flashings can often be repaired. We match existing profiles. Failed underlayment or widespread breakage gets an honest replacement number instead of a cheap overlay.',
      },
      {
        question: 'Does tile help with cooling costs on a commercial building?',
        answer:
          'Mass and air space in a tile system work as insulation and can lower energy bills. Low maintenance is the operating-cost argument, not just the curb appeal.',
      },
      {
        question: 'Can the building stay open during a tile reroof?',
        answer:
          'Often yes. Staging and fall protection are planned for a building that may stay open. We treat commercial tile as occupied work, not a vacant production house.',
      },
    ],
  },
  {
    slug: 'commercial-waterproofing',
    name: 'Waterproofing & Coatings',
    shortName: 'Waterproofing',
    formValue: 'Waterproofing & Coatings',
    category: 'commercial',
    icon: 'Shield',
    image: '/services/commercial/waterproofing.jpg',
    metaTitle: 'Waterproofing & Roof Coatings | Restoration Without Tear-Off',
    metaDescription:
      'Commercial waterproofing and reflective roof coatings in Houston and Fort Worth. Restore low-slope roofs, decks, and walls without a full tear-off. Reynolds Roofing TX.',
    heroTitle: 'Waterproof and restore before you tear it off.',
    heroDescription:
      'Roof coatings, deck coatings, and wall systems that stop leaks, reflect heat, and postpone a replacement when the deck is still sound.',
    description:
      'Roof and deck coatings, sealers, and waterproofing that restore a system without sending it to the landfill.',
    intro: [
      'Waterproofing and protective coatings come in many forms and can go on roofs, above- or below-grade decks, exterior walls, foundations, slabs, retaining walls, and basement walls. We are licensed and insured for commercial and residential waterproofing: roof coatings, waterproof decks, wall coatings, penetrating sealers, stairs, walkways, balconies, pool decks, landings, patios, drainage and slope control, and slip-resistant finishes.',
      'Coatings reduce landfill waste from tear-offs and can be refreshed years later for a fraction of a full replacement. They also reflect solar radiation — dark and metal roofs can run extremely hot; a proper white reflective coating sends a large share of that heat back, which can cut cooling load.',
      'We work with rubber (including EPDM), TPO, PVC, and asphalt (built-up and SBS) systems, plus coatings that seal leaks and block UV. A coating is not a miracle: if the deck is failed, we will tell you to replace it.',
    ],
    highlights: [
      {
        title: 'Restore instead of landfill',
        body: 'When the membrane is a candidate, a coating system extends service life without a tear-off. Ten years later, many systems can be recoated instead of replaced.',
      },
      {
        title: 'Reflect the Texas sun',
        body: 'White reflective coatings cut roof-surface temperature and take pressure off HVAC. That is operating cost, not just a cooler photo.',
      },
      {
        title: 'More than the roof',
        body: 'Decks, stairs, walls, and drainage failures show up as “roof leaks.” We waterproof the assembly that is actually wet.',
      },
    ],
    bullets: [
      'Roof coating and restoration systems',
      'Waterproof deck, stair, and balcony coatings',
      'Wall coatings and penetrating sealers',
      'EPDM, TPO, PVC, and asphalt-compatible systems',
      'Reflective cool-roof coatings',
      'Drainage, slope, and slip-resistant finishes',
    ],
    process: [
      {
        title: 'Confirm the substrate',
        body: 'Coatings fail on wet, failed, or contaminated decks. We inspect before we promise a restoration.',
      },
      {
        title: 'Prep like it matters',
        body: 'Repairs, rust, dry rot, and cleaning happen first. A coating is only as good as what it sticks to.',
      },
      {
        title: 'Coat and maintain',
        body: 'Specified mils go on, details are flashed, and you leave with a recoating horizon instead of a surprise leak.',
      },
    ],
    related: [
      'commercial-tpo',
      'commercial-leak-detection',
      'commercial-modified-bitumen',
    ],
    faqs: [
      {
        question: 'Can a roof coating replace a full commercial tear-off?',
        answer:
          'When the membrane and deck are still candidates, a coating system extends service life without a tear-off. If the deck is failed, we will tell you to replace it — a coating is not a miracle.',
      },
      {
        question: 'Do reflective coatings actually cut cooling costs in Texas?',
        answer:
          'White reflective coatings send a large share of solar heat back off the roof. Dark and metal roofs can run extremely hot; a proper cool-roof coating is operating cost, not just a cooler photo.',
      },
      {
        question: 'Which roof types can you coat?',
        answer:
          'We work with rubber (including EPDM), TPO, PVC, and asphalt (built-up and SBS) systems, plus decks, stairs, walls, and drainage assemblies that show up as “roof leaks.”',
      },
      {
        question: 'How long does a commercial roof coating last?',
        answer:
          'It depends on the substrate and the spec. Many systems can be refreshed years later for a fraction of a full replacement. You leave with a recoating horizon instead of a surprise leak — after repairs, cleaning, and the specified mils actually go on.',
      },
    ],
  },
  {
    slug: 'commercial-tpo',
    name: 'TPO Roofing',
    shortName: 'TPO',
    formValue: 'TPO Roofing',
    category: 'commercial',
    icon: 'Grid3x3',
    image: '/services/commercial/TPO.jpg',
    metaTitle: 'TPO Roofing | Thermoplastic Single-Ply for Texas',
    metaDescription:
      'TPO single-ply commercial roofing in Houston and Fort Worth. Reflective, energy-efficient membranes — fully adhered, mechanically attached, or ballasted. Reynolds Roofing TX.',
    heroTitle: 'TPO — the single-ply Texas commercial roofs keep choosing.',
    heroDescription:
      'Reflective thermoplastic membranes for southern climates: energy-efficient, weldable, and specced for Houston and Fort Worth commercial decks.',
    description:
      'Thermoplastic polyolefin single-ply — reflective cool-roof membranes for commercial and industrial buildings.',
    intro: [
      'Thermoplastic polyolefin (TPO) is the fastest-growing single-ply product in commercial and industrial roofing, especially in southern climates where reflective, energy-efficient “cool roof” membranes have become the norm.',
      'Single-ply membranes are thermoplastic or thermoset. Thermoplastics like TPO can be softened with heat and welded; thermosets like EPDM set irreversibly. Sheets are often reinforced with polyester scrim, glass fiber, or fleece, in common thicknesses from about 45 to 80 mils depending on the spec.',
      'TPO can be fully adhered, mechanically attached, or ballasted — and often a mix (for example, insulation mechanically attached with the membrane fully adhered). We install TPO and other single-ply systems; call for a consultation on which attachment method belongs on your deck.',
    ],
    highlights: [
      {
        title: 'Built for southern sun',
        body: 'White TPO reflects heat. In Houston and Fort Worth that is not a green-building extra — it is how you keep a low-slope roof from cooking the top floor.',
      },
      {
        title: 'Heat-welded seams',
        body: 'Thermoplastic seams are welded, not taped like many EPDM laps. Done correctly, the seam is as waterproof as the sheet.',
      },
      {
        title: 'Attachment that matches the building',
        body: 'Fully adhered, mechanically attached, or ballasted — we spec the method for wind, occupancy, and the deck that is already there.',
      },
    ],
    bullets: [
      'TPO single-ply installation and replacement',
      'Fully adhered, mechanically attached, or ballasted',
      'Reinforced membranes in commercial mil thicknesses',
      'Heat-welded seams',
      'Reflective cool-roof finishes',
      'Compatibility with coatings and restoration',
    ],
    process: [
      {
        title: 'Choose attachment',
        body: 'Deck type, wind, and occupancy decide adhered vs mechanical vs ballast — sometimes a combination.',
      },
      {
        title: 'Set insulation and sheet',
        body: 'Cover board and membrane go down to spec, with welds tested rather than assumed.',
      },
      {
        title: 'Detail the roof',
        body: 'Curbs, pipes, and walls get TPO flashings. Field sheet without details is only half a roof.',
      },
    ],
    related: [
      'commercial-modified-bitumen',
      'commercial-waterproofing',
      'commercial-roof-repair',
    ],
    faqs: [
      {
        question: 'Why is TPO so common on Houston and Fort Worth commercial roofs?',
        answer:
          'TPO is a reflective, energy-efficient single-ply well suited to southern climates. White TPO reflects heat so a low-slope roof does not cook the top floor — that is not a green-building extra in Texas, it is how the membrane is supposed to work.',
      },
      {
        question: 'How is TPO attached to the building?',
        answer:
          'Fully adhered, mechanically attached, or ballasted — and often a mix. Deck type, wind, and occupancy decide the method. We spec attachment for the building that is already there, not a one-size detail.',
      },
      {
        question: 'Are TPO seams glued or welded?',
        answer:
          'Heat-welded. Thermoplastic seams are welded, not taped like many EPDM laps. Done correctly, the seam is as waterproof as the sheet.',
      },
      {
        question: 'Can an existing TPO roof be coated instead of replaced?',
        answer:
          'Sometimes. If the sheet and insulation are still candidates, a restoration coating can postpone a tear-off. If welds, insulation, or the deck have failed, replacement is the honest spec — we will say which.',
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function servicesByCategory(category: ServiceCategory) {
  return services.filter((service) => service.category === category);
}

export function relatedServices(service: Service) {
  return service.related
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item));
}

export function servicePath(slug: string) {
  return `/services/${slug}`;
}

export function categoryPath(category: ServiceCategory) {
  return `/services/${category}`;
}

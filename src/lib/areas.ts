import { site } from '@/lib/site';

export type ServiceRegion = 'houston' | 'dfw';

export type ServiceArea = {
  slug: string;
  name: string;
  region: ServiceRegion;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  blurb: string;
  intro: string[];
  localConditions: { title: string; body: string }[];
  communities: string[];
  zips: string[];
  nearby: string[];
};

export const regionMeta = {
  houston: {
    label: 'Greater Houston',
    office: site.locations[0],
    phone: site.locations[0].phone,
    phoneHref: `tel:+1${site.locations[0].phone.replace(/\D/g, '')}`,
  },
  dfw: {
    label: 'Dallas–Fort Worth',
    office: site.locations[1],
    phone: site.locations[1].phone,
    phoneHref: `tel:+1${site.locations[1].phone.replace(/\D/g, '')}`,
  },
} as const;

export const areas: ServiceArea[] = [
  {
    slug: 'houston',
    name: 'Houston',
    region: 'houston',
    metaTitle: 'Houston Roofing Company | Repairs & Replacement',
    metaDescription:
      'Reynolds Roofing TX is a Houston roofing contractor for residential and commercial roofs — replacements, repairs, metal, tile, siding, and gutters. Call 832.321.5088.',
    heroTitle: 'Houston roofing that keeps up with the city.',
    heroDescription:
      'A full-service roofing crew for Houston homes and businesses — built for Gulf Coast storms, heat, and the pace of a city that does not slow down.',
    blurb:
      'Residential and commercial roofing across Houston, with crews that treat every job like it is their own home.',
    intro: [
      'Reynolds Roofing TX is based around Houston and built for the way this city works. Hiring a contractor should not become another full-time job — we take the work, do it right, and get you back to your day.',
      'We take pride in long relationships, not one-off roof drops. The workmanship we put on Houston houses and commercial buildings is the same quality we would put on our own. Roof replacement, repairs, metal, tile, siding, and seamless gutters are all handled by licensed crews from our Katy office.',
    ],
    localConditions: [
      {
        title: 'Gulf humidity and UV',
        body: 'Houston heat and moisture cook shingles, flashings, and underlayment faster than drier climates. Regular inspections catch granule loss and sealed-pipe issues before they leak.',
      },
      {
        title: 'Tropical systems and hail',
        body: 'Gulf storms, high wind, and the occasional hail event lift tabs, bruise shingles, and drive water under flashing. We inspect, document, and repair so you are not guessing after the next front.',
      },
      {
        title: 'Mixed housing stock',
        body: 'From bungalows and ranch homes to commercial low-slope roofs, Houston needs more than one system. We match the material to the building — not a one-size pitch.',
      },
    ],
    communities: [
      'Memorial',
      'Energy Corridor',
      'Spring Branch',
      'Galleria',
      'Bellaire',
      'Meyerland',
      'West Houston',
    ],
    zips: ['77024', '77042', '77055', '77063', '77079', '77082'],
    nearby: ['katy', 'cypress', 'jersey-village', 'sugar-land', 'greater-houston'],
  },
  {
    slug: 'katy',
    name: 'Katy',
    region: 'houston',
    metaTitle: 'Katy Roofing Company | Local Crews & Free Inspections',
    metaDescription:
      'Katy is home for Reynolds Roofing TX. Roof replacement, repairs, metal and tile roofs, siding, and gutters for Katy neighbors. Call 832.321.5088.',
    heroTitle: 'Katy’s local roofing company.',
    heroDescription:
      'Our home office sits on Katy Freeway. We serve the neighbors, schools, and master-planned communities that make Katy a place people want to stay.',
    blurb:
      'Our hometown. The Katy office handles roofing for Cinco Ranch, Cross Creek Ranch, and the rest of Katy ISD country.',
    intro: [
      'Reynolds Roofing TX is proud to call Katy home. With strong schools, growing neighborhoods, and the kind of community where people know their neighbors, Katy is a place people work hard to keep looking right — and we treat every roof here as if it were our own.',
      'We are not a fly-by-night storm chaser looking to turn a quick profit on a replacement. We focus on long-term customers, honest pricing, and work you would send to your mom, your neighbor, or your boss. Ask us about our referral program — Katy is a tight-knit town, and referrals mean the world to this company.',
    ],
    localConditions: [
      {
        title: 'Master-planned growth',
        body: 'Cinco Ranch, Cross Creek Ranch, Firethorne, and Cane Island put a lot of similar-age roofs on the same storm path. When one neighborhood takes hail, many homes need the same inspection window.',
      },
      {
        title: 'Open prairie wind',
        body: 'West of Houston, Katy still catches wide-open wind that lifts ridge caps and stresses valley metal. Proper fastening and flashing matter more here than in a sheltered in-town lot.',
      },
      {
        title: 'HOA-ready materials',
        body: 'Many Katy communities have architectural standards. We work with major manufacturers so you can meet the look the neighborhood expects without cutting corners on the deck.',
      },
    ],
    communities: [
      'Cinco Ranch',
      'Cross Creek Ranch',
      'Firethorne',
      'Cane Island',
      'Katy Mills area',
      'Old Katy',
    ],
    zips: ['77449', '77450', '77493', '77494'],
    nearby: ['houston', 'sugar-land', 'stafford', 'cypress', 'greater-houston'],
  },
  {
    slug: 'sugar-land',
    name: 'Sugar Land',
    region: 'houston',
    metaTitle: 'Sugar Land Roofing Company | Repairs & Replacement',
    metaDescription:
      'Roofing in Sugar Land, TX — replacements, repairs, metal and tile roofs, siding, and gutters from Reynolds Roofing TX. Call 832.321.5088.',
    heroTitle: 'Roofing for Sugar Land homes that take pride in the details.',
    heroDescription:
      'Sugar Land is a city that grew up around Imperial Sugar and never lost its eye for a well-kept home. We roof it with the same standard.',
    blurb:
      'Fort Bend County roofing for Sugar Land neighborhoods that take real pride in curb appeal and upkeep.',
    intro: [
      'Sugar Land is still “oh so sweet” — a rapidly growing Fort Bend city with Imperial Sugar in its bones and neighborhoods that show it. Homeowners here tend to take extra pride in the property, and that kind of pride takes real maintenance.',
      'That is where we come in. Reynolds Roofing TX handles residential and commercial roofing in Sugar Land: replacements, metal, shingles, tile, leak repair, siding, and seamless gutters. If the roof is the first thing people see from the street, it should look like it belongs on the house.',
    ],
    localConditions: [
      {
        title: 'Tile and architectural roofs',
        body: 'Upscale Sugar Land communities often run tile or heavy architectural shingles. Those systems need installers who understand weight, underlayment, and flashing — not a shingle-only crew improvising.',
      },
      {
        title: 'Fort Bend storm path',
        body: 'Sugar Land sits in the same hail and tropical-rain corridor as southwest Houston. After a cell moves through, we inspect for bruised shingles, lifted flashing, and slow leaks around chimneys and skylights.',
      },
      {
        title: 'Master-planned curb appeal',
        body: 'First Colony, Sweetwater, Riverstone, New Territory, and Telfair reward a finished look. We help you pick materials that last in Gulf weather and still read well from the street.',
      },
    ],
    communities: [
      'First Colony',
      'Sweetwater',
      'Riverstone',
      'New Territory',
      'Telfair',
      'Sugar Creek',
    ],
    zips: ['77478', '77479', '77498'],
    nearby: ['stafford', 'katy', 'houston', 'greater-houston'],
  },
  {
    slug: 'stafford',
    name: 'Stafford',
    region: 'houston',
    metaTitle: 'Stafford Roofing Company | Residential & Commercial',
    metaDescription:
      'Stafford, TX roofing from Reynolds Roofing TX — roof replacement, repairs, metal, tile, siding, and gutters for homes and businesses. Call 832.321.5088.',
    heroTitle: 'Stafford roofing for homes and businesses on the rise.',
    heroDescription:
      'Stafford punches above its size as a place to live and run a business. We cover both sides — residential roofs and commercial work along the US-59 corridor.',
    blurb:
      'A compact Fort Bend city with serious commercial energy — we roof both the houses and the businesses that keep Stafford growing.',
    intro: [
      'Reynolds Roofing TX was founded on a simple idea: the highest level of service and craftsmanship brings customers back. Stafford, long known as one of Texas’s stronger small cities to start a business, was a natural place for us to grow. Thank you, Stafford, for helping us do it.',
      'We handle residential and commercial roofing here — replacements, metal, shingles, tile, leak repair, siding, and gutters — from neighborhood streets to the commercial strips that make Stafford more than a pass-through on the way to Houston.',
    ],
    localConditions: [
      {
        title: 'Residential next to commercial',
        body: 'Stafford mixes houses with offices, retail, and light industrial. Low-slope commercial roofs and steep residential systems both show up on the same week’s schedule — we come equipped for both.',
      },
      {
        title: 'US-59 weather exposure',
        body: 'Open corridor wind and Gulf rain hit Stafford roofs hard. Ponding on commercial decks and wind-driven rain at residential valleys are the two calls we see most after a storm week.',
      },
      {
        title: 'Small-city response',
        body: 'Stafford is compact. That means we can inspect, estimate, and get materials on site without the downtown Houston logistics tax — useful when a leak will not wait.',
      },
    ],
    communities: [
      'Stafford Centre',
      'Fifth Street',
      'Missouri City nearby',
      'US-59 / I-69 corridor',
    ],
    zips: ['77477'],
    nearby: ['sugar-land', 'houston', 'katy', 'greater-houston'],
  },
  {
    slug: 'cypress',
    name: 'Cypress',
    region: 'houston',
    metaTitle: 'Cypress Roofing Company | Roof Replacement & Repair',
    metaDescription:
      'Cypress, TX roofers for replacements, leak repair, metal and tile roofs, siding, and gutters. Reynolds Roofing TX. Call 832.321.5088.',
    heroTitle: 'Cypress roofing for growing northwest Houston.',
    heroDescription:
      'Bridgeland, Towne Lake, and the Cy-Fair neighborhoods need roofs that survive northwest Harris County storms — not just look good on day one.',
    blurb:
      'Northwest Houston roofing for Cypress subdivisions, from established Cy-Fair streets to newer master-planned communities.',
    intro: [
      'Hiring a contractor should not be a nuisance. In Cypress we take the same approach we do everywhere: long relationships, workmanship we would put on our own homes, and a job done right so you can get back to yours.',
      'Reynolds Roofing TX covers residential and commercial roofing in Cypress — replacements, metal, shingles, tile, leak repair, siding, and gutters — from our Katy office with crews who know northwest Harris County weather.',
    ],
    localConditions: [
      {
        title: '1990s–2000s housing boom',
        body: 'A large share of Cypress roofs went on during the same growth years. Many are now at or past a typical shingle lifespan. If the neighborhood around you is replacing, it is worth an inspection — not a guess from the driveway.',
      },
      {
        title: 'Northwest storm cells',
        body: 'Cypress sits in a corridor that regularly catches hail and straight-line wind. We inspect for bruised shingles, exposed nails, and flashing that opened up on the last cell.',
      },
      {
        title: 'Lakes and master plans',
        body: 'Towne Lake and Bridgeland add humidity, irrigation overspray, and HOA material rules on top of ordinary Texas weather. We spec systems that hold up to all three.',
      },
    ],
    communities: [
      'Bridgeland',
      'Towne Lake',
      'Coles Crossing',
      'Cypress Creek Lakes',
      'Cy-Fair',
    ],
    zips: ['77429', '77433'],
    nearby: ['houston', 'jersey-village', 'katy', 'greater-houston'],
  },
  {
    slug: 'jersey-village',
    name: 'Jersey Village',
    region: 'houston',
    metaTitle: 'Jersey Village Roofing Company | Family-Run Crews',
    metaDescription:
      'Family-focused roofing in Jersey Village, TX — replacements, repairs, metal, tile, siding, and gutters from Reynolds Roofing TX. Call 832.321.5088.',
    heroTitle: 'Jersey Village roofing for families who want it handled.',
    heroDescription:
      'A small city along US-290 with a family pace. We take the roof so you can get back to the rest of the plan.',
    blurb:
      'A close-knit US-290 community. We handle the roof so Jersey Village families can get back to what matters.',
    intro: [
      'Reynolds Roofing TX is a family company. Every step we take is planned with our own families in mind — and we know Jersey Village is busy doing the same. Let us take the roof, the leak, and the estimate off your list.',
      'We provide roof replacement, metal and shingle work, tile, leak repair, siding, and gutters. Get back to what is most important and let us handle the home repairs. A house is not much without a good roof over it.',
    ],
    localConditions: [
      {
        title: 'Established neighborhoods',
        body: 'Jersey Village has mature trees and older roof lines. That is good shade and a real debris load — clogged gutters, lifted shingles at branches, and moss on north slopes are common inspection finds.',
      },
      {
        title: 'US-290 corridor storms',
        body: 'The same cells that rake Cypress and northwest Houston hit Jersey Village. After high wind we look at ridge caps, pipe boots, and the back side of chimneys — the spots you cannot see from the street.',
      },
      {
        title: 'Small-city standard',
        body: 'This is not a throwaway suburb. Neighbors talk, and a sloppy roof job shows. We roof Jersey Village the way a family company roofs its own street.',
      },
    ],
    communities: [
      'Jersey Meadow',
      'US-290 corridor',
      'Copperfield nearby',
      'Northwest Houston',
    ],
    zips: ['77040', '77041', '77064', '77065'],
    nearby: ['cypress', 'houston', 'katy', 'greater-houston'],
  },
  {
    slug: 'greater-houston',
    name: 'Greater Houston',
    region: 'houston',
    metaTitle: 'Greater Houston Roofing | Surrounding Communities',
    metaDescription:
      'Reynolds Roofing TX serves the Greater Houston area — replacements, repairs, metal, tile, siding, and gutters from the Katy office. Call 832.321.5088.',
    heroTitle: 'Roofing across the Greater Houston area.',
    heroDescription:
      'Houston is busy, and the cities around it are growing just as fast. We cover the surrounding communities from our Katy office with the same licensed crews.',
    blurb:
      'Surrounding Houston communities — Spring, Tomball, Richmond, Rosenberg, Pearland, Humble, and more.',
    intro: [
      'Houston is one of the busiest metros in Texas, and Reynolds Roofing TX has grown with it. As the city and the towns around it expand, so does the work — replacements after storms, new construction roofs, and the maintenance that keeps a growing region dry.',
      'We want that growth to include your neighbors. Ask about our referral program — we take pride in the work and want your friends, family, and coworkers to see it too. From the Katy office we run roof replacement, metal, shingles, tile, leak repair, siding, and gutters across the Greater Houston area.',
    ],
    localConditions: [
      {
        title: 'A metro of microclimates',
        body: 'North-side hail, west-side prairie wind, and coastal rain do not hit every suburb the same week. We inspect for what actually happened on your street, not a generic Houston pitch.',
      },
      {
        title: 'Fast-growing suburbs',
        body: 'Spring, Tomball, Richmond, Rosenberg, Pearland, and Humble add inventory every year. New roofs still need correct ventilation and flashing — and older rings of houses are hitting replacement age together.',
      },
      {
        title: 'One office, full coverage',
        body: 'You do not need a different company for every suburb. The Katy team schedules Greater Houston work with the same process: free inspection, written estimate, licensed crew.',
      },
    ],
    communities: [
      'Spring',
      'Tomball',
      'Richmond',
      'Rosenberg',
      'Pearland',
      'Humble',
      'Pasadena',
      'The Woodlands area',
    ],
    zips: ['77373', '77375', '77407', '77471', '77584', '77338'],
    nearby: ['houston', 'katy', 'cypress', 'jersey-village', 'sugar-land', 'stafford'],
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    region: 'dfw',
    metaTitle: 'Fort Worth Roofing Company | Hail & Storm Repairs',
    metaDescription:
      'Fort Worth roofing from Reynolds Roofing TX — replacements, hail repairs, metal and tile roofs, siding, and gutters. Call 817.789.8458.',
    heroTitle: 'Fort Worth roofing built for North Texas weather.',
    heroDescription:
      'Hail, wind, and heat are the job in Fort Worth. Our Arlington office puts a licensed crew on Cowtown roofs without the out-of-town runaround.',
    blurb:
      'North Texas storm country. Hail repairs, replacements, and full-service roofing from our Arlington office.',
    intro: [
      'Hiring a contractor should not be a hassle. In Fort Worth we work the same way we do in Houston: long relationships, workmanship we would put on our own homes, and a job finished so you can get back to yours.',
      'From the Arlington office we handle residential and commercial roofing in Fort Worth — replacements, metal, shingles, tile, leak repair, siding, and gutters. Call 817.789.8458 and we will get on the calendar.',
    ],
    localConditions: [
      {
        title: 'DFW hail alley',
        body: 'Fort Worth sits in one of the most active hail corridors in the country. Bruised shingles can look fine from the yard and still fail in two summers. We get on the roof and document what the storm actually did.',
      },
      {
        title: 'Heat and UV',
        body: 'North Texas summers cook underlayment and dry out pipe boots. A Fort Worth roof that skips ventilation or cheap flashing shows it by year five. We spec for the heat, not just the hail.',
      },
      {
        title: 'Historic and new stock',
        body: 'Ridglea bungalows, west-side ranch homes, and new construction all need different systems. We match the roof to the house instead of forcing one product across town.',
      },
    ],
    communities: [
      'Ridglea',
      'Arlington Heights',
      'Tanglewood',
      'Near Sundance Square',
      'Southwest Fort Worth',
    ],
    zips: ['76107', '76109', '76116', '76132', '76133'],
    nearby: ['arlington', 'benbrook'],
  },
  {
    slug: 'arlington',
    name: 'Arlington',
    region: 'dfw',
    metaTitle: 'Arlington Roofing Company | Local Office on Matlock',
    metaDescription:
      'Arlington, TX roofing from our office at 4840 Matlock Rd. Replacements, hail repairs, metal, tile, siding, and gutters. Call 817.789.8458.',
    heroTitle: 'Arlington roofing from a crew down the road.',
    heroDescription:
      'Our DFW office is at 4840 Matlock Rd. in Arlington — not a distant dispatch. Hail, wind, and everyday leaks get a local response.',
    blurb:
      'Home of our DFW office on Matlock Road. Local Arlington roofing for hail, replacement, and repairs.',
    intro: [
      'Reynolds Roofing TX keeps a full-service team in Arlington so Mid-Cities work does not wait on a Houston calendar. We take pride in relationships and in workmanship we would put on our own homes — then we get the job done so you can get back to yours.',
      'Residential and commercial roofing, replacements, metal, shingles, tile, leak repair, siding, and gutters are all on the board. Call 817.789.8458 or send the estimate form and the Arlington office will follow up.',
    ],
    localConditions: [
      {
        title: 'Mid-Cities hail',
        body: 'Arlington catches the same severe-storm track as Fort Worth and Dallas. After a cell, we inspect for hail bruises, wind-lifted tabs, and damaged ventilation — and we can help document it for insurance when that is the path.',
      },
      {
        title: 'Heat islands and attics',
        body: 'Between the stadiums, highways, and housing, Arlington attics run hot. Ventilation and the right shingle rating are not extras here. They are how a ten-year roof does not become a six-year roof.',
      },
      {
        title: 'Local office, local schedule',
        body: 'Matlock Road is not a PO box. Estimates, material staging, and crew dispatch for Arlington happen from the same shop that answers 817.789.8458.',
      },
    ],
    communities: [
      'South Arlington',
      'Matlock corridor',
      'Pantego',
      'Near AT&T Stadium',
      'East Arlington',
    ],
    zips: ['76010', '76012', '76013', '76015', '76016', '76018'],
    nearby: ['fort-worth', 'benbrook'],
  },
  {
    slug: 'benbrook',
    name: 'Benbrook',
    region: 'dfw',
    metaTitle: 'Benbrook Roofing Company | Fort Worth Suburb Crews',
    metaDescription:
      'Benbrook, TX roofing from Reynolds Roofing TX — replacements, hail repairs, metal, tile, siding, and gutters. Call 817.789.8458.',
    heroTitle: 'Benbrook roofing on the southwest edge of Fort Worth.',
    heroDescription:
      'Lake Benbrook, established streets, and DFW storm weather. We cover this Fort Worth suburb from the Arlington office.',
    blurb:
      'Southwest Fort Worth suburb by Lake Benbrook — hail-ready roofing from the Arlington crew.',
    intro: [
      'Benbrook is the Fort Worth-area community our DFW team serves on the southwest side of town (listed as Belbrook on the older site). Same licensed crews, same standard: workmanship we would put on our own homes, and a finished job so you can get back to yours.',
      'From the Arlington office we handle replacements, metal, shingles, tile, leak repair, siding, and gutters in Benbrook. Call 817.789.8458 and we will schedule the inspection.',
    ],
    localConditions: [
      {
        title: 'Lake and prairie exposure',
        body: 'Near Lake Benbrook, roofs see more wind and driving rain than a sheltered in-town lot. Ridge caps, drip edge, and valley metal have to be detailed — not tacked on.',
      },
      {
        title: 'North Texas hail',
        body: 'Benbrook is still in DFW hail country. We inspect for bruises you cannot see from the driveway and help you decide repair versus replace before the next season.',
      },
      {
        title: 'Residential character',
        body: 'This is a hometown suburb, not a commercial strip. We roof Benbrook houses to look right on the street and hold up in the heat — no storm-chaser shortcuts.',
      },
    ],
    communities: [
      'Lake Benbrook',
      'Dutch Branch',
      'Winscott',
      'Southwest Fort Worth',
    ],
    zips: ['76126'],
    nearby: ['fort-worth', 'arlington'],
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}

export function areasByRegion(region: ServiceRegion) {
  return areas.filter((area) => area.region === region);
}

export function nearbyAreas(area: ServiceArea) {
  return area.nearby
    .map((slug) => getArea(slug))
    .filter((item): item is ServiceArea => Boolean(item));
}

export function areaPath(slug: string) {
  return `/areas-served/${slug}`;
}

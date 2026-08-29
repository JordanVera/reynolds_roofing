const googleReviewsUrl =
  'https://www.google.com/maps/place/Reynolds+Roofing/@29.4550101,-98.0971933,8z/data=!4m10!1m2!2m1!1sReynolds+Roofing+TX+20501+Katy+Freeway+Katy+TX+77450!3m6!1s0x864120672351073f:0xec5699d732ced6b1!8m2!3d29.4550101!4d-95.6582285!15sCjRSZXlub2xkcyBSb29maW5nIFRYIDIwNTAxIEthdHkgRnJlZXdheSBLYXR5IFRYIDc3NDUwkgEScm9vZmluZ19jb250cmFjdG9y4AEA!16s%2Fg%2F1yfj43lzl?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D';

export const site = {
  name: 'Reynolds Roofing TX',
  shortName: 'Reynolds Roofing',
  tagline: 'Full-service roofing for Houston and Fort Worth',
  description:
    'Reynolds Roofing TX is a full-service residential and commercial roofing company serving Houston and Fort Worth with roof replacement, repairs, metal roofs, tile roofs, siding, and seamless gutters.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.reynoldsroofingtx.com',
  phone: '832-321-5088',
  phoneHref: 'tel:+18323215088',
  email:
    process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ?? 'info@reynoldsroofingtx.com',
  city: 'Katy',
  state: 'TX',
  region: 'Katy, TX',
  logo: '/logo/logo-black.png',
  ogImage: '/og.jpg',
  priceRange: '$$',
  googleReviewsUrl,
  sameAs: [
    googleReviewsUrl,
    'https://www.facebook.com/reynoldsroofingtx',
    'https://twitter.com/ReynoldsRoofing',
  ],
  locations: [
    {
      id: 'houston',
      city: 'Houston',
      state: 'TX',
      address: '20501 Katy Freeway #203',
      zip: '77450',
      phone: '832-321-5088',
      geo: { latitude: 29.78438, longitude: -95.72841 },
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=20501+Katy+Freeway+%23203+Katy+TX+77450',
    },
    {
      id: 'Fort Worth',
      city: 'Fort Worth',
      state: 'TX',
      address: '4840 Matlock Rd., Ste. D110',
      zip: '76018',
      phone: '817-789-8458',
      geo: { latitude: 32.66925, longitude: -97.11533 },
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=4840+Matlock+Rd+Ste+D110+Arlington+TX+76018',
    },
  ],
  hours: {
    weekdays: 'Monday – Friday: 8:00 AM – 6:00 PM',
    weekend: 'Saturday: By appointment',
    schema: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  },
  credentials: ['Licensed', 'Insured'] as const,
  founded: 2006,
  foundedLabel: 'Spring 2006',
} as const;

export type SiteLocation = (typeof site.locations)[number];

export function telHref(phone: string) {
  return `tel:+1${phone.replace(/\D/g, '')}`;
}

export function estimatePath(service?: string) {
  if (!service) return '/contact';
  return `/contact?service=${encodeURIComponent(service)}`;
}

export const formsubmitEndpoint = `https://formsubmit.co/${site.email}`;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/areas-served', label: 'Areas Served' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Free Estimate' },
] as const;

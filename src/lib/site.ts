export const site = {
  name: "Reynolds Roofing TX",
  shortName: "Reynolds Roofing",
  tagline: "Full-service roofing for Houston and Fort Worth",
  description:
    "Reynolds Roofing TX is a full-service residential and commercial roofing company serving Houston and Fort Worth with roof replacement, repairs, metal roofs, tile roofs, siding, and seamless gutters.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.reynoldsroofingtx.com",
  phone: "832.321.5088",
  phoneHref: "tel:+18323215088",
  email:
    process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ?? "info@reynoldsroofingtx.com",
  city: "Katy",
  state: "TX",
  region: "Katy, TX",
  locations: [
    {
      city: "Katy",
      state: "TX",
      address: "20501 Katy Freeway #203",
      zip: "77450",
      phone: "832.321.5088",
    },
    {
      city: "Arlington",
      state: "TX",
      address: "4840 Matlock Rd., Ste. D110",
      zip: "76018",
      phone: "817.789.8458",
    },
  ],
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
    weekend: "Saturday: By appointment",
    schema: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  },
  credentials: ["Licensed", "Insured"] as const,
} as const;

export const formsubmitEndpoint = `https://formsubmit.co/${site.email}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/areas-served", label: "Areas Served" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Free Estimate" },
] as const;

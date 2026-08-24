export type Service = {
  slug: string;
  name: string;
  shortName: string;
  formValue: string;
  description: string;
  icon: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "residential-roofing",
    name: "Residential Roofing",
    shortName: "Residential Roofing",
    formValue: "Residential Roofing",
    description:
      "Complete residential roof installations using premium shingles and materials rated for Texas storms. We work with every major manufacturer.",
    icon: "Home",
    bullets: [
      "Asphalt shingle installation & replacement",
      "Full tear-off and re-roof",
      "Manufacturer warranty on materials",
      "Code-compliant installation",
    ],
  },
  {
    slug: "roof-repair",
    name: "Roof Repairs",
    shortName: "Roof Repairs",
    formValue: "Roof Repair",
    description:
      "Leak fixes, storm damage patching, flashing repairs, and emergency tarping — fast response to keep water out of your home.",
    icon: "Wrench",
    bullets: [
      "Leak detection & repair",
      "Storm damage patching",
      "Flashing & valley repair",
      "Emergency tarping available",
    ],
  },
  {
    slug: "metal-roofing",
    name: "Metal Roofing",
    shortName: "Metal Roofs",
    formValue: "Metal Roofing",
    description:
      "Standing seam and exposed fastener metal roofing — durable, energy-efficient, and built to last 40+ years in the Texas heat.",
    icon: "Layers",
    bullets: [
      "Standing seam metal roofing",
      "Exposed fastener panels",
      "Energy-efficient options",
      "40–70 year lifespan",
    ],
  },
  {
    slug: "tile-roofing",
    name: "Tile Roofing",
    shortName: "Tile Roofs",
    formValue: "Tile Roofing",
    description:
      "Clay and concrete tile roofing that adds curb appeal, superior wind resistance, and decades of low-maintenance performance.",
    icon: "Square",
    bullets: [
      "Clay & concrete tile",
      "Wind-resistant installation",
      "50+ year lifespan",
      "Variety of profiles & colors",
    ],
  },
  {
    slug: "siding",
    name: "Stone & Fiber Cement Siding",
    shortName: "Siding",
    formValue: "Siding",
    description:
      "James Hardie fiber cement and stone veneer siding installations that protect your home's exterior and boost property value.",
    icon: "PanelLeft",
    bullets: [
      "James Hardie fiber cement",
      "Stone veneer installation",
      "Impact & moisture resistant",
      "Painted or factory finish",
    ],
  },
  {
    slug: "gutters",
    name: "Seamless Gutters & Downspouts",
    shortName: "Gutters",
    formValue: "Gutters",
    description:
      "5\" and 6\" seamless aluminum gutters custom-formed on-site — no joints, no leaks, properly pitched and secured to your fascia.",
    icon: "Minus",
    bullets: [
      "5\" & 6\" seamless aluminum",
      "Custom on-site fabrication",
      "Gutter guards available",
      "Downspout extensions included",
    ],
  },
];

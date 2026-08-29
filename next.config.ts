import path from 'node:path';
import type { NextConfig } from 'next';

const permanent = true as const;

/** Legacy HTML paths from reynoldsroofingtx.com → App Router routes. */
const legacyHtmlRedirects: Array<{
  source: string;
  destination: string;
  permanent: true;
}> = [
  { source: '/index.html', destination: '/', permanent },
  { source: '/about_us.html', destination: '/about', permanent },
  { source: '/gallery.html', destination: '/gallery', permanent },
  { source: '/contacts.html', destination: '/contact', permanent },
  { source: '/testimonials.html', destination: '/testimonials', permanent },
  { source: '/services.html', destination: '/services', permanent },
  { source: '/areas-served.html', destination: '/areas-served', permanent },
  { source: '/residential.html', destination: '/services/residential', permanent },
  { source: '/commercial.html', destination: '/services/commercial', permanent },

  // Residential services (exact mixed-case filenames from legacy site)
  {
    source: '/residential-Roof-Inspections.html',
    destination: '/services/residential-roof-inspections',
    permanent,
  },
  {
    source: '/residential-Asphalt-shingles.html',
    destination: '/services/residential-asphalt-shingles',
    permanent,
  },
  {
    source: '/residential-Tile-Service.html',
    destination: '/services/residential-tile',
    permanent,
  },
  {
    source: '/residential-Metal-Roofs.html',
    destination: '/services/residential-metal-roofing',
    permanent,
  },
  {
    source: '/residential-Interior-Repairs.html',
    destination: '/services/residential-interior-repairs',
    permanent,
  },
  {
    source: '/residential-Exterior-Repairs.html',
    destination: '/services/residential-exterior-repairs',
    permanent,
  },
  {
    source: '/residential-Home-Improvement-Packages.html',
    destination: '/services/residential-home-improvement',
    permanent,
  },
  // Orphan legacy pages → nearest relevant destination
  {
    source: '/residential-Gutters-Downspouts.html',
    destination: '/services/residential-exterior-repairs',
    permanent,
  },
  {
    source: '/residential-Low-Slope-Roofing.html',
    destination: '/services/residential',
    permanent,
  },
  {
    source: '/residential-Specialty-Slate-Roofing.html',
    destination: '/services/residential-tile',
    permanent,
  },

  // Commercial services
  {
    source: '/commercial-Metal-Roofing.html',
    destination: '/services/commercial-metal-roofing',
    permanent,
  },
  {
    source: '/commercial-Roof-Inspection.html',
    destination: '/services/commercial-roof-inspection',
    permanent,
  },
  {
    source: '/commercial-Roof-Repair.html',
    destination: '/services/commercial-roof-repair',
    permanent,
  },
  {
    source: '/commercial-Leak-Detection.html',
    destination: '/services/commercial-leak-detection',
    permanent,
  },
  {
    source: '/commercial-Modified-Bitumen.html',
    destination: '/services/commercial-modified-bitumen',
    permanent,
  },
  {
    source: '/commercial-Tile-Service.html',
    destination: '/services/commercial-tile',
    permanent,
  },
  {
    source: '/commercial-Waterproofing.html',
    destination: '/services/commercial-waterproofing',
    permanent,
  },
  {
    source: '/commercial-TPO.html',
    destination: '/services/commercial-tpo',
    permanent,
  },

  // City / area pages
  {
    source: '/Houston-Roofing-Company.html',
    destination: '/areas-served/houston',
    permanent,
  },
  {
    source: '/Katy-Roofing-Company.html',
    destination: '/areas-served/katy',
    permanent,
  },
  {
    source: '/Sugarland-Roofing-Company.html',
    destination: '/areas-served/sugar-land',
    permanent,
  },
  {
    source: '/Stafford-Roofing-Company.html',
    destination: '/areas-served/stafford',
    permanent,
  },
  {
    source: '/Cypress-Roofing-Company.html',
    destination: '/areas-served/cypress',
    permanent,
  },
  {
    source: '/Jersey-Village-Roofing-Company.html',
    destination: '/areas-served/jersey-village',
    permanent,
  },
  {
    source: '/Greater-Houston-Roofing-Company.html',
    destination: '/areas-served/greater-houston',
    permanent,
  },
  {
    source: '/Fort-Worth-Roofing-Company.html',
    destination: '/areas-served/fort-worth',
    permanent,
  },
  {
    source: '/Arlington-Roofing-Company.html',
    destination: '/areas-served/arlington',
    permanent,
  },
  {
    source: '/Belbrook-Roofing-Company.html',
    destination: '/areas-served/benbrook',
    permanent,
  },
];

/** Old gallery image deep links → new public/gallery assets. */
const legacyGalleryImageRedirects = Array.from({ length: 30 }, (_, i) => {
  const n = i + 1;
  return {
    source: `/images/gallery/big-${n}.jpg`,
    destination: `/gallery/gallery-${n}.jpg`,
    permanent,
  };
});

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/icons/favicon.ico',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/areas-served/belbrook',
        destination: '/areas-served/benbrook',
        permanent,
      },
      {
        source: '/areas-served/sugarland',
        destination: '/areas-served/sugar-land',
        permanent,
      },
      ...legacyHtmlRedirects,
      ...legacyGalleryImageRedirects,
    ];
  },
};

export default nextConfig;

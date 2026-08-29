import { areas } from '@/lib/areas';
import {
  absoluteUrl,
  aggregateRatingFromTestimonials,
  schemaIds,
} from '@/lib/seo';
import { site, type SiteLocation } from '@/lib/site';

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function postalAddress(location: SiteLocation) {
  return {
    '@type': 'PostalAddress',
    streetAddress: location.address,
    addressLocality: location.city,
    addressRegion: location.state,
    postalCode: location.zip,
    addressCountry: 'US',
  };
}

function openingHours() {
  return site.hours.schema.map((hours) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [...hours.dayOfWeek],
    opens: hours.opens,
    closes: hours.closes,
  }));
}

function officeNode(location: SiteLocation) {
  const region = location.id === 'katy' ? 'houston' : 'dfw';
  const served = areas.filter((area) => area.region === region);
  const aggregateRating = aggregateRatingFromTestimonials();

  return {
    '@type': 'RoofingContractor',
    '@id': schemaIds.office(location.id),
    name: `${site.name} — ${location.city}`,
    description: site.description,
    url: site.url,
    telephone: location.phone,
    email: site.email,
    priceRange: site.priceRange,
    image: absoluteUrl(site.ogImage),
    logo: absoluteUrl(site.logo),
    parentOrganization: { '@id': schemaIds.organization },
    address: postalAddress(location),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    hasMap: location.mapsUrl,
    areaServed: served.map((area) => ({
      '@type': 'City',
      name: area.name,
      addressRegion: 'TX',
      addressCountry: 'US',
    })),
    openingHoursSpecification: openingHours(),
    aggregateRating,
  };
}

export function LocalBusinessJsonLd() {
  const aggregateRating = aggregateRatingFromTestimonials();

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': schemaIds.organization,
        name: site.name,
        legalName: site.name,
        description: site.description,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        foundingDate: String(site.founded),
        logo: absoluteUrl(site.logo),
        image: absoluteUrl(site.ogImage),
        ...(site.sameAs.length > 0 ? { sameAs: [...site.sameAs] } : {}),
        aggregateRating,
        subOrganization: site.locations.map((location) => ({
          '@id': schemaIds.office(location.id),
        })),
      },
      {
        '@type': 'WebSite',
        '@id': schemaIds.website,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { '@id': schemaIds.organization },
        inLanguage: 'en-US',
      },
      ...site.locations.map(officeNode),
    ],
  };

  return <JsonLd data={data} />;
}

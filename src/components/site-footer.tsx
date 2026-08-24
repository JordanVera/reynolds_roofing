import Link from 'next/link';
import { MapPinIcon, PhoneIcon, ShieldCheckIcon } from 'lucide-react';

import { SiteLogo } from '@/components/site-logo';
import { Separator } from '@/components/ui/separator';
import { areaPath, areas } from '@/lib/areas';
import { servicePath, services } from '@/lib/services';
import { site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-primary/30 bg-card">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-6 border-b border-border py-5">
          <div className="flex items-center gap-2 text-sm">
            <ShieldCheckIcon className="size-4 shrink-0 text-primary" />
            <span className="font-medium">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <PhoneIcon className="size-4 shrink-0 text-primary" />
            <span className="font-medium">Free Inspections & Estimates</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPinIcon className="size-4 shrink-0 text-primary" />
            <span className="font-medium">Houston & Fort Worth, TX</span>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-3 inline-block">
            <SiteLogo className="h-12 w-auto" />
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Full-service residential and commercial roofing in Houston and Fort Worth, TX.
            Licensed and insured. Free inspections available.
          </p>
          <div className="mt-5 space-y-3 text-sm">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary"
            >
              <PhoneIcon className="size-4 shrink-0 text-primary" />
              {site.phone}
            </a>
            {site.locations.map((loc) => (
              <div key={loc.city} className="flex items-start gap-2 text-muted-foreground">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-semibold text-foreground/80">{loc.city}, {loc.state}</p>
                  <p className="text-xs">{loc.address}, {loc.zip}</p>
                  <p className="text-xs">{loc.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={servicePath(s.slug)}
                  className="inline-block text-muted-foreground transition-all hover:translate-x-0.5 hover:text-foreground"
                >
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Areas Served
          </h3>
          <ul className="space-y-2 text-sm">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={areaPath(area.slug)}
                  className="inline-block text-muted-foreground transition-all hover:translate-x-0.5 hover:text-foreground"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/#about', label: 'About' },
              { href: '/areas-served', label: 'Areas Served' },
              { href: '/contact', label: 'Free Estimate' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block text-muted-foreground transition-all hover:translate-x-0.5 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Licensed & Insured · Houston & Fort Worth, TX</p>
      </div>
    </footer>
  );
}

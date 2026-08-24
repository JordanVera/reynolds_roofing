'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuIcon, PhoneIcon, XIcon, ClipboardListIcon } from 'lucide-react';

import { ModeToggle } from '@/components/mode-toggle';
import { SiteLogo } from '@/components/site-logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { areaPath, areas, areasByRegion } from '@/lib/areas';
import {
  servicePath,
  services,
  servicesByCategory,
  type ServiceCategory,
} from '@/lib/services';
import { nav, site } from '@/lib/site';

function isNavActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  const path = href.split('#')[0];
  if (!path || path === '/') return false;
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md">
      {/* <div className="border-b border-primary/20 bg-primary/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-sm md:px-6">
          <p className="font-medium text-foreground/90">
            Storm damage? We inspect, document, and repair roofs across Houston
            and Fort Worth.
          </p>
          <a
            href={site.phoneHref}
            className="hidden shrink-0 items-center gap-1.5 font-semibold text-primary hover:underline md:flex"
          >
            <PhoneIcon className="size-3.5" />
            {site.phone}
          </a>
        </div>
      </div> */}

      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="shrink-0">
          <SiteLogo priority className="h-11 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.href === '/areas-served' || item.href === '/services' ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    isNavActive(pathname, item.href)
                      ? 'text-primary'
                      : 'text-foreground/75 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
                <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid w-[30rem] grid-cols-2 gap-6 rounded-xl border border-border bg-popover p-4 shadow-lg">
                    {item.href === '/services'
                      ? (
                          [
                            ['residential', 'Residential'],
                            ['commercial', 'Commercial'],
                          ] as const satisfies ReadonlyArray<
                            [ServiceCategory, string]
                          >
                        ).map(([category, label]) => (
                          <div key={category}>
                            <Link
                              href={`/services/${category}`}
                              className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground"
                            >
                              {label}
                            </Link>
                            <ul className="space-y-0.5">
                              {servicesByCategory(category).map((service) => (
                                <li key={service.slug}>
                                  <Link
                                    href={servicePath(service.slug)}
                                    className={`block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted ${
                                      pathname === servicePath(service.slug)
                                        ? 'text-primary'
                                        : 'text-foreground/80'
                                    }`}
                                  >
                                    {service.shortName}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      : (
                          [
                            ['houston', 'Greater Houston'],
                            ['dfw', 'Dallas–Fort Worth'],
                          ] as const
                        ).map(([region, label]) => (
                          <div key={region}>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                              {label}
                            </p>
                            <ul className="space-y-0.5">
                              {areasByRegion(region).map((area) => (
                                <li key={area.slug}>
                                  <Link
                                    href={areaPath(area.slug)}
                                    className={`block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted ${
                                      pathname === areaPath(area.slug)
                                        ? 'text-primary'
                                        : 'text-foreground/80'
                                    }`}
                                  >
                                    {area.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isNavActive(pathname, item.href)
                    ? 'text-primary'
                    : 'text-foreground/75 hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <a
            href={site.phoneHref}
            className="h-9 px-4 rounded-md hidden items-center gap-1.5 text-sm font-medium text-white dark:text-black transition-colors hover:text-primary md:flex bg-black dark:bg-white"
          >
            <PhoneIcon className="size-3.5" />
            {site.phone}
          </a>
          <Button asChild className="hidden h-9 px-4 text-sm sm:inline-flex">
            <Link href="/contact">
              <ClipboardListIcon className="size-3.5" />
              Free Estimate
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                {open ? (
                  <XIcon className="size-4" />
                ) : (
                  <MenuIcon className="size-4" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader className="pb-2">
                <SheetTitle>
                  <SiteLogo className="h-10 w-auto" />
                </SheetTitle>
              </SheetHeader>
              <div className="px-4 pb-2">
                <Button asChild className="h-11 w-full">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <ClipboardListIcon className="size-4" />
                    Get Free Estimate
                  </Link>
                </Button>
                <a
                  href={site.phoneHref}
                  onClick={() => setOpen(false)}
                  className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-border text-sm font-medium transition-colors hover:bg-muted"
                >
                  <PhoneIcon className="size-4" />
                  {site.phone}
                </a>
              </div>
              <nav className="flex flex-col gap-0.5 px-4 pb-8 pt-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isNavActive(pathname, item.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Services
                </p>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={servicePath(service.slug)}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                      pathname === servicePath(service.slug)
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {service.shortName}
                  </Link>
                ))}
                <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Cities
                </p>
                {areas.map((area) => (
                  <Link
                    key={area.slug}
                    href={areaPath(area.slug)}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                      pathname === areaPath(area.slug)
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {area.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

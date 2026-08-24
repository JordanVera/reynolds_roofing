import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircleIcon,
  ClipboardCheckIcon,
  HardHatIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from 'lucide-react';

import { FadeIn, Reveal, Stagger, StaggerItem } from '@/components/motion';
import { KenBurnsBackground } from '@/components/page-hero';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: `This page isn't on the roof. Get back to ${site.shortName} — Houston and Fort Worth roofing, free inspections.`,
  robots: { index: false, follow: true },
};

const destinations = [
  {
    href: '/services',
    label: 'Services',
    description: 'Residential and commercial roofing.',
    icon: WrenchIcon,
  },
  {
    href: '/areas-served',
    label: 'Areas served',
    description: 'Houston, Fort Worth, and in between.',
    icon: MapPinIcon,
  },
  {
    href: '/about',
    label: 'About us',
    description: `Texas roofing since ${site.founded}.`,
    icon: HardHatIcon,
  },
  {
    href: '/contact',
    label: 'Free estimate',
    description: 'Inspection with no pressure.',
    icon: ClipboardCheckIcon,
  },
] as const;

const trustItems = [
  { icon: ShieldCheckIcon, label: 'Licensed & Insured' },
  { icon: CheckCircleIcon, label: 'Free Inspections' },
  { icon: MapPinIcon, label: 'Houston + Fort Worth' },
] as const;

function MissingShingleMark() {
  return (
    <svg
      viewBox="0 0 280 210"
      className="mx-auto w-full max-w-[280px] text-white"
      aria-hidden
    >
      <path
        d="M40 118 L40 196 H240 V118"
        fill="rgba(0,0,0,0.28)"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="2"
      />
      <path
        d="M118 148 h44 v48 h-44 z"
        fill="rgba(255,255,255,0.08)"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      <path
        d="M58 138 h28 v22 h-28 z"
        fill="rgba(255,255,255,0.06)"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.25"
      />
      <path
        d="M14 122 L140 22 L266 122"
        fill="rgba(171,19,14,0.18)"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 122 H266"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="2"
      />
      <path
        d="M48 98 L140 28 L232 98"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="1.25"
      />
      <path
        d="M36 110 L140 32 L244 110"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="1.25"
      />
      <path
        d="M24 116 L140 38 L256 116"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.16"
        strokeWidth="1.25"
      />
      <path
        d="M88 28 V12 h18 v22"
        fill="rgba(0,0,0,0.35)"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M186 58 L204 72 L196 82 L178 68 Z"
        fill="rgba(0,0,0,0.45)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.25"
        strokeDasharray="3 3"
      />
      <g className="origin-center animate-shingle motion-reduce:animate-none [transform-box:fill-box]">
        <path
          d="M208 28 L236 48 L224 64 L196 44 Z"
          fill="#ab130e"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.5"
        />
        <path
          d="M214 36 L228 46"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1"
        />
      </g>
      <path
        d="M248 22 L262 16"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M252 32 L268 28"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function NotFound() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-border">
        <KenBurnsBackground />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/68 to-black/32" />
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-background/80" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
                404 · Missing shingle
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-xl font-heading text-4xl font-bold tracking-tight text-balance text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] md:text-5xl lg:text-6xl">
                This page blew off in the last storm.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-200 md:text-lg">
                The URL you followed isn&rsquo;t on this roof. Happens — hail, a
                bad link, Texas wind. We&rsquo;ll get you back on solid decking,
                or send a crew if that&rsquo;s actually what you needed.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="h-12 px-6 text-base font-semibold">
                <Link href="/">Back to home</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 border-white/45 bg-white/20 px-6 text-base font-medium text-white hover:bg-white/35 hover:text-white backdrop-blur-md shadow-lg"
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.08) 100%)',
                  borderColor: 'rgba(255,255,255,0.35)',
                }}
              >
                <a href={site.phoneHref}>
                  <PhoneIcon className="size-4" />
                  {site.phone}
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal
            delay={0.12}
            className="relative order-1 flex justify-center overflow-hidden lg:order-2"
          >
            <p
              aria-hidden
              className="select-none font-heading text-[6.5rem] leading-none font-bold tracking-tighter text-white/55 drop-shadow-[0_4px_28px_rgba(0,0,0,0.75)] sm:text-[8rem] lg:text-[9.5rem]"
            >
              4
              <span className="text-transparent [-webkit-text-stroke:5px_rgba(255,255,255,0.8)] lg:[-webkit-text-stroke:6px_rgba(255,255,255,0.82)]">
                0
              </span>
              4
            </p>
            <div className="absolute inset-0 flex items-center justify-center pt-2 lg:pt-4">
              <MissingShingleMark />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-b border-border bg-card/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 md:px-6">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <item.icon className="size-4 shrink-0 text-primary" />
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <Section className="bg-card/20 texas-grid">
        <FadeIn className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Still looking?
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
            These pages are still on the roof.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Jump to a live page — or skip the scavenger hunt and request a free
            inspection.
          </p>
        </FadeIn>

        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((item) => (
            <StaggerItem key={item.href}>
              <Link
                href={item.href}
                className="flex h-full items-start gap-3 rounded-xl border border-border bg-card p-4 transition-shadow hover:glow-primary"
              >
                <item.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <div className="border-y border-primary/20 bg-primary/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              Storm damage? Don&rsquo;t wait.
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Unaddressed damage leads to bigger repairs. Call for a same-week
              inspection.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="h-11 px-6 font-semibold">
              <Link href="/contact">Request inspection</Link>
            </Button>
            <Button asChild variant="outline" className="h-11 px-6">
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

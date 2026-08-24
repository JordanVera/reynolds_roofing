'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

import { Reveal } from '@/components/motion';
import { cn } from '@/lib/utils';

const SLIDES = [
  '/slides/slide1.jpg',
  '/slides/slide2.jpg',
  '/slides/slide3.jpg',
  '/slides/slide4.jpg',
] as const;

const SLIDE_SECONDS = 8;
const FADE_SECONDS = 1.4;

const KEN_BURNS = [
  { from: { scale: 1.08, x: 0, y: 0 }, to: { scale: 1.2, x: 28, y: -18 } },
  { from: { scale: 1.18, x: 20, y: 12 }, to: { scale: 1.08, x: -18, y: -10 } },
  { from: { scale: 1.1, x: -14, y: 8 }, to: { scale: 1.22, x: 22, y: -16 } },
  { from: { scale: 1.16, x: -12, y: 0 }, to: { scale: 1.08, x: 18, y: 14 } },
] as const;

function KenBurnsSlide({
  src,
  active,
  variant,
  priority,
  reduce,
}: {
  src: string;
  active: boolean;
  variant: number;
  priority?: boolean;
  reduce: boolean;
}) {
  const kb = KEN_BURNS[variant];
  const [playing, setPlaying] = useState(active && !reduce);

  useEffect(() => {
    if (reduce) {
      setPlaying(false);
      return;
    }

    if (active) {
      setPlaying(true);
      return;
    }

    const timeout = window.setTimeout(
      () => setPlaying(false),
      FADE_SECONDS * 1000,
    );
    return () => window.clearTimeout(timeout);
  }, [active, reduce]);

  return (
    <motion.div
      className="absolute inset-0"
      initial={false}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: reduce ? 0 : FADE_SECONDS, ease: 'easeInOut' }}
    >
      <motion.div
        key={playing ? 'play' : 'rest'}
        className="absolute inset-0 will-change-transform"
        initial={kb.from}
        animate={playing ? kb.to : kb.from}
        transition={
          playing
            ? { duration: SLIDE_SECONDS, ease: 'linear' }
            : { duration: 0 }
        }
      >
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
    </motion.div>
  );
}

function KenBurnsBackground() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_SECONDS * 1000);

    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {SLIDES.map((src, i) => (
        <KenBurnsSlide
          key={src}
          src={src}
          active={reduce ? i === 0 : i === index}
          variant={i}
          priority={i === 0}
          reduce={!!reduce}
        />
      ))}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  trustRow,
  compact = false,
  size = 'default',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  trustRow?: React.ReactNode;
  compact?: boolean;
  size?: 'default' | 'lg';
}) {
  return (
    <div className="relative overflow-hidden border-b border-border">
      <KenBurnsBackground />
      <div className="absolute inset-0 bg-linear-to-r from-black/88 via-black/62 to-black/28" />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-background/70" />
      <div
        className={cn(
          'relative mx-auto max-w-6xl px-4 md:px-6',
          size === 'lg'
            ? 'py-28 md:py-44'
            : compact
              ? 'py-16 md:py-20'
              : 'py-20 md:py-28',
        )}
      >
        {eyebrow ? (
          <Reveal>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
              {eyebrow}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={0.08}>
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-balance text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-200 md:text-lg">
              {description}
            </p>
          </Reveal>
        ) : null}
        {children ? (
          <Reveal delay={0.24} className="mt-8 flex flex-wrap gap-3">
            {children}
          </Reveal>
        ) : null}
        {trustRow ? (
          <Reveal delay={0.32} className="mt-10">
            {trustRow}
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}

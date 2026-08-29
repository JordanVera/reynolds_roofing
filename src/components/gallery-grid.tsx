'use client';

import Image from 'next/image';
import { useCallback, useEffect, useId, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon, ZoomInIcon } from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { Button } from '@/components/ui/button';
import {
  categoryLabel,
  galleryCategories,
  galleryItems,
  type GalleryCategoryId,
  type GalleryItem,
} from '@/lib/gallery';
import { cn } from '@/lib/utils';

function GalleryLightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const item = items[index];
  const titleId = useId();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') {
        onNavigate((index - 1 + items.length) % items.length);
      }
      if (event.key === 'ArrowRight') {
        onNavigate((index + 1) % items.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close gallery"
        className="absolute top-4 right-4 z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/70"
        onClick={onClose}
      >
        <XIcon className="size-5" />
      </button>

      {items.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            className="absolute top-1/2 left-3 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/70 md:left-6"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((index - 1 + items.length) % items.length);
            }}
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            className="absolute top-1/2 right-3 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/70 md:right-6"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((index + 1) % items.length);
            }}
          >
            <ChevronRightIcon className="size-5" />
          </button>
        </>
      ) : null}

      <motion.div
        key={item.id}
        className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
        initial={reduce ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative max-h-[min(78vh,820px)] w-full overflow-hidden rounded-xl bg-black/40">
          <Image
            src={item.src}
            alt={item.title}
            width={item.width}
            height={item.height}
            className="mx-auto max-h-[min(78vh,820px)] w-auto object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
        <div className="mt-4 max-w-2xl text-center">
          <p id={titleId} className="text-base font-semibold text-white">
            {item.title}
          </p>
          <p className="mt-1 text-sm text-white/65">
            {categoryLabel(item.category)} · {index + 1} of {items.length}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function GalleryGrid({
  items = galleryItems,
  showFilters = true,
}: {
  items?: GalleryItem[];
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<GalleryCategoryId>('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    if (filter === 'all') return items;
    return items.filter((item) => item.category === filter);
  }, [filter, items]);

  const openAt = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  return (
    <div>
      {showFilters ? (
        <FadeIn className="mb-8 flex flex-wrap gap-2">
          {galleryCategories.map((category) => {
            const count =
              category.id === 'all'
                ? items.length
                : items.filter((item) => item.category === category.id).length;

            if (category.id !== 'all' && count === 0) return null;

            const active = filter === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setFilter(category.id)}
                className={cn(
                  'rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-foreground/80 hover:border-primary/40 hover:text-foreground',
                )}
              >
                {category.label}
                <span
                  className={cn(
                    'ml-2 text-xs tabular-nums',
                    active ? 'text-primary-foreground/80' : 'text-muted-foreground',
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </FadeIn>
      ) : null}

      <motion.div
        layout={!reduce}
        className="columns-1 gap-4 sm:columns-2 lg:columns-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => {
            const portrait = item.height > item.width;

            return (
              <motion.button
                key={item.id}
                type="button"
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: reduce ? 0 : index * 0.02 }}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                onClick={() => openAt(index)}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className={cn(
                    'h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]',
                    portrait ? 'min-h-72' : 'min-h-44',
                  )}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <div className="min-w-0 text-left">
                    <p className="truncate text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs text-white/70">
                      {categoryLabel(item.category)}
                    </p>
                  </div>
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition group-hover:bg-primary group-hover:border-primary">
                    <ZoomInIcon className="size-4" />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-16 text-center">
          <p className="text-sm text-muted-foreground">No photos in this category.</p>
          <Button
            type="button"
            variant="outline"
            className="mt-4"
            onClick={() => setFilter('all')}
          >
            Show all projects
          </Button>
        </div>
      ) : null}

      <AnimatePresence>
        {activeIndex !== null ? (
          <GalleryLightbox
            items={filtered}
            index={activeIndex}
            onClose={close}
            onNavigate={setActiveIndex}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

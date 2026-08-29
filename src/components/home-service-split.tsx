import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';
import { Button } from '@/components/ui/button';
import {
  categoryMeta,
  categoryPath,
  servicePath,
  servicesByCategory,
  type ServiceCategory,
} from '@/lib/services';

const categories: ServiceCategory[] = ['residential', 'commercial'];

export function HomeServiceSplit() {
  return (
    <Section id="services" className="bg-card/20 texas-grid">
      <SectionHeading
        eyebrow="What we do"
        title="Residential and commercial. Two offices, one standard."
        description="Pick the side that matches the building. Each list is the real spec — not a renamed copy of the other."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {categories.map((key, index) => {
          const category = categoryMeta[key];
          const items = servicesByCategory(key);
          const cover = items.find((item) => item.image);

          return (
            <FadeIn key={key} delay={index * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                <Link
                  href={categoryPath(key)}
                  className="group relative block aspect-16/10 overflow-hidden focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {cover?.image ? (
                    <Image
                      src={cover.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                      {category.label}
                    </p>
                    <h3 className="mt-1 font-heading text-2xl font-bold tracking-tight text-white">
                      {category.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                      {category.heroDescription}
                    </p>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {items.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={servicePath(service.slug)}
                          className="block py-1 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                        >
                          {service.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button asChild variant="outline">
                      <Link href={categoryPath(key)}>
                        View {category.label.toLowerCase()} services
                        <ArrowRightIcon className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}

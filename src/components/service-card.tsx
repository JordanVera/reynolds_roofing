import Image from 'next/image';
import Link from 'next/link';

import { ServiceIcon } from '@/components/service-icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { servicePath, type Service } from '@/lib/services';
import { cn } from '@/lib/utils';

export function ServiceCard({
  service,
  priority = false,
}: {
  service: Service;
  priority?: boolean;
}) {
  return (
    <Link href={servicePath(service.slug)} className="block h-full">
      <Card
        className={cn(
          'relative h-full transition-shadow hover:glow-primary',
          service.image && 'bg-transparent text-white',
        )}
      >
        {service.image ? (
          <div className="absolute inset-0 z-0" aria-hidden>
            <Image
              src={service.image}
              alt={service.name}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>
        ) : null}
        <CardHeader className="relative z-10">
          <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
            <ServiceIcon
              name={service.icon}
              className="size-5 text-primary"
            />
          </div>
          <CardTitle className="text-base">{service.name}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p
            className={cn(
              'text-sm leading-relaxed',
              service.image ? 'text-white/75' : 'text-muted-foreground',
            )}
          >
            {service.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

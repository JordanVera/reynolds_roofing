import Image from 'next/image';

import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

export function SiteLogo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <>
      <Image
        src="/logo/logo-black.png"
        alt={site.name}
        width={360}
        height={90}
        priority={priority}
        className={cn(
          'h-10 w-auto max-w-[200px] sm:max-w-none dark:hidden',
          className,
        )}
      />
      <Image
        src="/logo/logo-white.png"
        alt=""
        aria-hidden
        width={360}
        height={90}
        priority={priority}
        className={cn(
          'hidden h-10 w-auto max-w-[200px] sm:max-w-none dark:block',
          className,
        )}
      />
    </>
  );
}

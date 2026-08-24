import { StarIcon } from 'lucide-react';

import { GoogleIcon } from '@/components/google-icon';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { site } from '@/lib/site';
import type { Testimonial } from '@/lib/testimonials';

function StarRating({ rating }: { rating: number }) {
  return (
    <p className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }, (_, index) => (
        <StarIcon
          key={index}
          className="size-3.5 fill-amber-400 text-amber-400"
        />
      ))}
    </p>
  );
}

export function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col gap-4">
        <div className="flex items-start gap-3">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: testimonial.color }}
            aria-hidden
          >
            {testimonial.initials}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{testimonial.name}</p>
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <StarRating rating={testimonial.rating} />
              <p className="text-xs text-muted-foreground">
                Google · {testimonial.year}
                {testimonial.localGuide ? ' · Local Guide' : ''}
              </p>
            </div>
          </div>
        </div>

        <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
          “{testimonial.body}
          {testimonial.truncated ? '…' : ''}”
        </blockquote>

        {testimonial.tags && testimonial.tags.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {testimonial.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="h-auto py-0.5 text-[0.7rem] font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}

        {testimonial.truncated ? (
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary underline-offset-4 hover:underline"
          >
            <GoogleIcon className="size-3.5" />
            Read the full review on Google
          </a>
        ) : null}
      </CardContent>
    </Card>
  );
}

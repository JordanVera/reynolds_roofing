'use client';

import { ArrowRightIcon, ClockIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { services } from '@/lib/services';
import { formsubmitEndpoint, site } from '@/lib/site';

export function LeadForm({
  defaultService,
  defaultCity,
}: {
  defaultService?: string;
  defaultCity?: string;
}) {
  const nextUrl = `${site.url}/thank-you`;

  return (
    <form
      action={formsubmitEndpoint}
      method="POST"
      className="grid gap-5 sm:grid-cols-2"
    >
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_subject" value={`New estimate request — ${site.name}`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      {defaultCity ? (
        <input type="hidden" name="city" value={defaultCity} />
      ) : null}

      <Field label="First name" htmlFor="firstName">
        <Input id="firstName" name="firstName" required autoComplete="given-name" className="h-11" />
      </Field>
      <Field label="Last name" htmlFor="lastName">
        <Input id="lastName" name="lastName" required autoComplete="family-name" className="h-11" />
      </Field>
      <Field label="Email" htmlFor="email">
        <Input id="email" name="email" type="email" required autoComplete="email" className="h-11" />
      </Field>
      <Field label="Phone number" htmlFor="phone">
        <Input id="phone" name="phone" type="tel" required autoComplete="tel" className="h-11" />
      </Field>
      <Field label="Zip code" htmlFor="zip">
        <Input id="zip" name="zip" required autoComplete="postal-code" className="h-11" />
      </Field>
      <Field label="Service needed" htmlFor="service">
        <Select name="service" defaultValue={defaultService ?? ''} required>
          <SelectTrigger id="service" className="h-11 w-full">
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent position="popper">
            {services.map((s) => (
              <SelectItem key={s.slug} value={s.formValue}>
                {s.formValue}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Describe the project, damage, or questions — photos available on request."
          className="min-h-20"
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" className="h-12 w-full px-6 text-base font-semibold">
          Request a free estimate
          <ArrowRightIcon className="size-4" />
        </Button>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <ClockIcon className="size-3.5 shrink-0" />
          We respond same business day — usually within a few hours.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

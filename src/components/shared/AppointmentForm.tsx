"use client";

import { FormEvent, useState } from "react";
import { primaryPhone } from "@/data/site";
import Icon from "@/components/ui/Icon";
import TimePicker from "@/components/shared/TimePicker";

const inputClasses =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet focus:ring-4 focus:ring-violet-tint";

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-2xl border border-violet/20 bg-violet-tint p-8 text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-violet-dark shadow-sm">
          <Icon name="phone" size={20} />
        </span>
        <p className="font-heading text-lg font-semibold text-ink">Online booking isn&apos;t connected yet</p>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-body">
          This form isn&apos;t wired up to a booking system yet, so nothing was sent. To book your appointment right
          now, please call us directly at{" "}
          <a href={primaryPhone.href} className="font-semibold text-violet-dark underline underline-offset-2">
            {primaryPhone.number}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-semibold text-violet-dark underline underline-offset-4"
        >
          Fill out the form again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <p className="flex items-start gap-2 rounded-xl bg-bg-alt px-4 py-3 text-xs leading-relaxed text-muted">
        <Icon name="activity" size={14} className="mt-0.5 shrink-0 text-violet-dark" />
        This form isn&apos;t connected to our booking system yet. For the fastest response, call{" "}
        <a href={primaryPhone.href} className="font-semibold text-violet-dark underline underline-offset-2">
          {primaryPhone.number}
        </a>
        .
      </p>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-ink">
            Preferred Date
          </label>
          <input id="date" name="date" type="date" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="time" className="mb-1.5 block text-sm font-medium text-ink">
            Preferred Time
          </label>
          <TimePicker id="time" name="time" required />
        </div>
      </div>

      <fieldset>
        <legend className="mb-2.5 text-sm font-medium text-ink">
          Please tell us if you are a current patient, or are requesting to become a new patient.
        </legend>
        <div className="space-y-2.5">
          <label className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-border px-4 py-3 text-sm text-body transition-colors hover:border-violet/50">
            <input type="radio" name="patient-status" value="current" required className="h-4 w-4 accent-violet" />
            I am a current patient at your office
          </label>
          <label className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-border px-4 py-3 text-sm text-body transition-colors hover:border-violet/50">
            <input type="radio" name="patient-status" value="new" required className="h-4 w-4 accent-violet" />
            I am looking to make an appointment to become a new patient
          </label>
        </div>
      </fieldset>

      <button
        type="submit"
        className="btn-sheen inline-flex items-center justify-center gap-2 rounded-full bg-violet-dim px-8 py-3.5 text-sm font-semibold text-white shadow-glow-violet transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-dark hover:shadow-lg"
      >
        Submit Request
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import { EMAIL_RE, PHONE_RE, type Errors } from "./form-parts";

export const partnershipTypes = [
  "Co-Sponsor",
  "Diamond",
  "Gold",
  "Silver",
  "Technology Partner",
  "Exhibitor Sponsor",
  "Media Partner",
  "Gifting Partner",
  "Food Partner",
  "Hydration Partner",
  "Delegate Kit Partner",
  "Gala Dinner Partner",
  "Conference Partner",
];

const control =
  "w-full rounded-lg border bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:ring-2";
const controlState = (err?: string) =>
  err
    ? "border-red-500 focus:border-red-500 focus:ring-red-500/25"
    : "border-neutral-300 hover:border-neutral-400 focus:border-brand-orange focus:ring-brand-orange/25";

function Field({
  label,
  required,
  optional,
  error,
  hint,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 flex items-baseline gap-1 text-sm font-semibold text-neutral-800">
        {label}
        {required && (
          <span className="text-red-600" aria-hidden>
            *
          </span>
        )}
        {optional && <span className="text-xs font-normal text-neutral-500">(optional)</span>}
      </span>
      {children}
      {error ? (
        <span role="alert" className="mt-1.5 block text-xs font-medium text-red-600">
          {error}
        </span>
      ) : (
        hint && <span className="mt-1.5 block text-xs text-neutral-500">{hint}</span>
      )}
    </label>
  );
}

export type EnquiryFormProps = {
  choiceLabel?: string;
  choices?: string[];
  selected?: string;
  submitLabel?: string;
  successTitle?: string;
  title?: string;
  intro?: string;
};

export default function EnquiryForm({
  choiceLabel = "Partnership type",
  choices = partnershipTypes,
  selected = "",
  submitLabel = "Submit Details",
  successTitle = "Thank you for your enquiry",
  title = "Register Interest",
  intro = "Interested in partnering? Use the form below to get in touch.",
}: EnquiryFormProps) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const err: Errors = {};
    if (!get("name")) err.name = "Please enter your full name.";
    if (!get("company")) err.company = "Please enter your company.";
    if (!get("email")) err.email = "Please enter your email.";
    else if (!EMAIL_RE.test(get("email"))) err.email = "Please enter a valid email address.";
    if (!get("phone")) err.phone = "Please enter your phone number.";
    else if (!PHONE_RE.test(get("phone"))) err.phone = "Include the country code, e.g. +91 7400945550.";
    if (!get("type")) err.type = `Please choose a ${choiceLabel.toLowerCase()}.`;
    setErrors(err);
    if (Object.keys(err).length) return;
    // TODO: wire to a backend / email service
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex h-full flex-col justify-center py-10 text-center" role="status">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-brand-mint text-brand-green">
          <svg viewBox="0 0 20 20" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="m4 10.5 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-2xl font-bold text-brand-green sm:text-3xl">{successTitle}</p>
        <p className="mt-2 text-neutral-600">The TREACG team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-brand-green sm:text-3xl">{title}</h3>
      <div className="mt-3 h-1 w-12 rounded bg-brand-orange" />
      <p className="mt-4 text-sm text-neutral-600">{intro}</p>

      <form noValidate onSubmit={submit} className="mt-8 grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name}>
          <input
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            className={`${control} ${controlState(errors.name)}`}
          />
        </Field>

        <Field label="Company name" required error={errors.company}>
          <input
            name="company"
            autoComplete="organization"
            placeholder="Company or organisation"
            aria-invalid={!!errors.company}
            className={`${control} ${controlState(errors.company)}`}
          />
        </Field>

        <Field label="Email address" required error={errors.email}>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            aria-invalid={!!errors.email}
            className={`${control} ${controlState(errors.email)}`}
          />
        </Field>

        <Field label="Phone number" required error={errors.phone} hint="Include the country code.">
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            aria-invalid={!!errors.phone}
            className={`${control} ${controlState(errors.phone)}`}
          />
        </Field>

        <Field label={choiceLabel} required error={errors.type} className="sm:col-span-2">
          <span className="relative block">
            <select
              name="type"
              defaultValue={selected}
              aria-invalid={!!errors.type}
              className={`${control} ${controlState(errors.type)} cursor-pointer appearance-none pr-11`}
            >
              <option value="" disabled>
                Select a {choiceLabel.toLowerCase()}
              </option>
              {choices.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <svg
              viewBox="0 0 20 20"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Field>

        <Field label="Message" optional className="sm:col-span-2">
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us more about how you would like to partner with IIRS 2027"
            className={`${control} ${controlState()} resize-y`}
          />
        </Field>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-neutral-200 pt-6 sm:col-span-2 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-500">Fields marked * are required.</p>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-orange py-1.5 pl-7 pr-1.5 font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:w-auto"
          >
            {submitLabel}
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-orange">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

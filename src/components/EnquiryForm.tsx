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

// underline-style input shared by every text field
const line =
  "w-full border-0 border-b bg-transparent px-0 py-2 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-brand-orange";
const lineBorder = (err?: string) => (err ? "border-red-500" : "border-neutral-400");

function Line({
  label,
  required,
  error,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm italic text-neutral-700">
        {label}
        {required && "*"}
      </span>
      {children}
      {error && (
        <span role="alert" className="mt-1 block text-xs font-medium text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}

export type EnquiryFormProps = {
  /** name of the choice group, e.g. "Partnership type" or "Ticket plan" */
  choiceLabel?: string;
  choices?: string[];
  /** pre-selected choice */
  selected?: string;
};

export default function EnquiryForm({
  choiceLabel = "Partnership type",
  choices = partnershipTypes,
  selected = "",
}: EnquiryFormProps) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="py-16 text-center">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-brand-mint text-brand-green">
          <svg viewBox="0 0 20 20" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="m4 10.5 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-2xl font-bold text-brand-green">Thank you for your enquiry</p>
        <p className="mt-2 text-neutral-600">The TREACG team will get back to you shortly.</p>
      </div>
    );
  }

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

  return (
    <form noValidate onSubmit={submit} className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
      <Line label="Full name" required error={errors.name} className="sm:col-span-2">
        <input name="name" autoComplete="name" className={`${line} ${lineBorder(errors.name)}`} />
      </Line>
      <Line label="Email" required error={errors.email}>
        <input name="email" type="email" autoComplete="email" className={`${line} ${lineBorder(errors.email)}`} />
      </Line>
      <Line label="Phone number" required error={errors.phone}>
        <input name="phone" type="tel" autoComplete="tel" placeholder="+91 …" className={`${line} ${lineBorder(errors.phone)}`} />
      </Line>
      <Line label="Company name" required error={errors.company}>
        <input name="company" autoComplete="organization" className={`${line} ${lineBorder(errors.company)}`} />
      </Line>
      <Line label="Address">
        <input name="address" autoComplete="street-address" className={`${line} ${lineBorder()}`} />
      </Line>

      <fieldset className="sm:col-span-2">
        <legend className="text-sm italic text-neutral-700">{choiceLabel}*</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {choices.map((t) => (
            <label key={t} className="cursor-pointer">
              <input type="radio" name="type" value={t} defaultChecked={t === selected} className="peer sr-only" />
              <span className="block rounded-md border border-neutral-400 px-3 py-1.5 text-xs text-neutral-700 transition hover:border-brand-green peer-checked:border-brand-green peer-checked:bg-brand-green peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand-orange">
                {t}
              </span>
            </label>
          ))}
        </div>
        {errors.type && (
          <span role="alert" className="mt-2 block text-xs font-medium text-red-600">
            {errors.type}
          </span>
        )}
      </fieldset>

      <Line label="Message" className="sm:col-span-2">
        <textarea name="message" rows={2} className={`${line} ${lineBorder()} resize-y`} />
      </Line>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-3 rounded-md bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          Send Enquiry
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </form>
  );
}

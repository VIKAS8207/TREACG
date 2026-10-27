"use client";

import { useState } from "react";
import { EMAIL_RE, PHONE_RE, Field, Success, border, inputCls, type Errors } from "./form-parts";

const registeringAs = [
  "Exporter",
  "Miller",
  "International Buyer",
  "Technology Provider",
  "Logistics Company",
  "Financial Institution",
  "Government / Policymaker",
  "Researcher",
  "Other",
];

const interests = [
  "Conference",
  "Exhibition",
  "International Buyer–Seller Meetings",
  "Industry Networking",
  "Food Street",
];

export default function RegisterForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  if (done)
    return (
      <Success message="Thank you for registering for IIRS 2027. The TREACG team will contact you shortly." />
    );

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const err: Errors = {};
    if (!get("name")) err.name = "Please enter your full name.";
    if (!get("company")) err.company = "Please enter your company or organisation.";
    if (!get("email")) err.email = "Please enter your email.";
    else if (!EMAIL_RE.test(get("email"))) err.email = "Please enter a valid email address.";
    if (!get("phone")) err.phone = "Please enter your phone number.";
    else if (!PHONE_RE.test(get("phone"))) err.phone = "Include the country code, e.g. +91 7400945550.";
    const n = get("attendees");
    if (n && (!/^\d+$/.test(n) || Number(n) < 1)) err.attendees = "Enter a whole number of 1 or more.";
    if (!f.get("consent")) err.consent = "Please agree to be contacted to continue.";
    setErrors(err);
    if (Object.keys(err).length) return;
    // TODO: send to backend / email service
    setDone(true);
  }

  return (
    <form noValidate onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Full name" required error={errors.name}>
        <input name="name" className={`${inputCls} ${border(errors.name)}`} />
      </Field>
      <Field label="Designation">
        <input name="designation" className={`${inputCls} ${border()}`} />
      </Field>
      <Field label="Company / Organisation" required error={errors.company} className="sm:col-span-2">
        <input name="company" className={`${inputCls} ${border(errors.company)}`} />
      </Field>
      <Field label="Email" required error={errors.email}>
        <input name="email" type="email" className={`${inputCls} ${border(errors.email)}`} />
      </Field>
      <Field label="Phone number (with country code)" required error={errors.phone}>
        <input name="phone" type="tel" placeholder="+91 …" className={`${inputCls} ${border(errors.phone)}`} />
      </Field>
      <Field label="Country and city" className="sm:col-span-2">
        <input name="location" className={`${inputCls} ${border()}`} />
      </Field>
      <Field label="Registering as">
        <select name="category" defaultValue="" className={`${inputCls} ${border()}`}>
          <option value="">Select…</option>
          {registeringAs.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>
      <Field label="Number of attendees" error={errors.attendees}>
        <input name="attendees" inputMode="numeric" className={`${inputCls} ${border(errors.attendees)}`} />
      </Field>
      <fieldset className="sm:col-span-2">
        <legend className="mb-2 text-sm font-semibold text-neutral-800">Areas of interest</legend>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {interests.map((i) => (
            <label key={i} className="flex items-center gap-2 text-sm text-neutral-700">
              <input type="checkbox" name="interests" value={i} className="h-4 w-4 accent-brand-orange" />
              {i}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Message (optional)" className="sm:col-span-2">
        <textarea name="message" rows={3} className={`${inputCls} ${border()}`} />
      </Field>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-2 text-sm text-neutral-700">
          <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 accent-brand-orange" />
          I agree to be contacted by TREACG about IIRS 2027.
        </label>
        {errors.consent && (
          <p role="alert" className="mt-1 text-xs font-medium text-red-600">
            {errors.consent}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="rounded-sm bg-brand-orange px-8 py-3 font-semibold text-white transition hover:brightness-110 sm:col-span-2"
      >
        Submit Registration
      </button>
    </form>
  );
}

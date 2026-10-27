"use client";

import { useState } from "react";
import { EMAIL_RE, PHONE_RE, Field, Success, border, inputCls, type Errors } from "./form-parts";

export default function TicketEnquiryForm({ plan }: { plan: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  if (done) return <Success message="Thank you for your enquiry. The TREACG team will contact you shortly." />;

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const err: Errors = {};
    if (!get("name")) err.name = "Please enter your full name.";
    if (!get("email")) err.email = "Please enter your email.";
    else if (!EMAIL_RE.test(get("email"))) err.email = "Please enter a valid email address.";
    if (!get("phone")) err.phone = "Please enter your phone number.";
    else if (!PHONE_RE.test(get("phone"))) err.phone = "Include the country code, e.g. +91 7400945550.";
    setErrors(err);
    if (Object.keys(err).length) return;
    // TODO: send to backend / email service
    setDone(true);
  }

  return (
    <form noValidate onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Selected plan" className="sm:col-span-2">
        <input name="plan" defaultValue={plan} readOnly className={`${inputCls} ${border()} bg-neutral-100`} />
      </Field>
      {/* original spec was cut off after "Selected plan": remaining fields are a standard enquiry set */}
      <Field label="Full name" required error={errors.name}>
        <input name="name" className={`${inputCls} ${border(errors.name)}`} />
      </Field>
      <Field label="Company / Organisation">
        <input name="company" className={`${inputCls} ${border()}`} />
      </Field>
      <Field label="Email" required error={errors.email}>
        <input name="email" type="email" className={`${inputCls} ${border(errors.email)}`} />
      </Field>
      <Field label="Phone number (with country code)" required error={errors.phone}>
        <input name="phone" type="tel" placeholder="+91 …" className={`${inputCls} ${border(errors.phone)}`} />
      </Field>
      <Field label="Message (optional)" className="sm:col-span-2">
        <textarea name="message" rows={3} className={`${inputCls} ${border()}`} />
      </Field>
      <button
        type="submit"
        className="rounded-sm bg-brand-orange px-8 py-3 font-semibold text-white transition hover:brightness-110 sm:col-span-2"
      >
        Send Enquiry
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";

const partnershipTypes = [
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

const field =
  "w-full rounded-sm border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-md bg-brand-mint p-8 text-brand-green">
        <p className="text-lg font-semibold">Thank you for your enquiry.</p>
        <p className="mt-1 text-sm">Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to a backend / email service
        setSent(true);
      }}
    >
      <input required name="name" placeholder="Name" className={field} />
      <input required name="company" placeholder="Company" className={field} />
      <input required type="email" name="email" placeholder="Email" className={field} />
      <input required type="tel" name="phone" placeholder="Phone" className={field} />
      <input name="address" placeholder="Address" className={`${field} sm:col-span-2`} />
      <select required name="type" defaultValue="" className={`${field} sm:col-span-2`}>
        <option value="" disabled>
          Partnership type
        </option>
        {partnershipTypes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      <textarea name="message" rows={4} placeholder="Message" className={`${field} sm:col-span-2`} />
      <button
        type="submit"
        className="rounded-sm bg-brand-orange px-8 py-3 font-semibold text-white transition hover:brightness-110 sm:col-span-2 sm:justify-self-start"
      >
        Send Enquiry
      </button>
    </form>
  );
}

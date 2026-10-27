import Link from "next/link";
import { plans } from "@/lib/plans";

// card colour treatments, applied to plans in order
const tones = [
  {
    card: "border-brand-green/40 bg-gradient-to-b from-brand-green/15 to-white",
    bar: "bg-brand-green",
    badge: "text-brand-green",
    button: "bg-brand-green hover:brightness-125",
  },
  {
    card: "border-amber-300 bg-gradient-to-b from-amber-100/80 to-white",
    bar: "bg-amber-600",
    badge: "text-amber-600",
    button: "bg-brand-orange hover:brightness-110",
  },
];

function TicketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path
        d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.5a2.5 2.5 0 0 0 0 5V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5a2.5 2.5 0 0 0 0-5zM14 6v12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" strokeLinecap="round" />
    </svg>
  );
}

export default function TicketPlans() {
  return (
    <div className="mx-auto grid max-w-4xl items-start gap-6 md:grid-cols-2">
      {plans.map((p, i) => {
        const t = tones[i % tones.length];
        return (
          <article
            key={p.name}
            className={`relative flex flex-col overflow-hidden rounded-2xl border p-7 shadow-sm ${t.card}`}
          >
            <div className={`absolute inset-x-0 top-0 h-1.5 ${t.bar}`} />
            <div className="flex flex-col items-center text-center">
              <span className={`grid h-11 w-11 place-items-center rounded-xl border border-neutral-200 bg-white ${t.badge}`}>
                <TicketIcon />
              </span>
              <p className="mt-4 flex items-center gap-1.5 text-xs text-neutral-500">
                <CalendarIcon />
                All 2 days
              </p>
              <h3 className="mt-2 text-3xl font-bold text-neutral-900">{p.name}</h3>
            </div>

            <p className="mt-8 text-center text-sm font-semibold text-neutral-400">
              Standard <span className="line-through">{p.standard}</span>
            </p>
            <p className="mt-1 text-center text-xs font-bold uppercase tracking-widest text-brand-green">Early Bird</p>
            <p className="text-center text-4xl font-bold text-neutral-900">
              {p.earlyBird}
              <span className="ml-2 text-sm font-normal text-neutral-500">/ delegate</span>
            </p>

            <details className="group mt-6 rounded-lg border border-neutral-200 bg-white/70">
              <summary className="flex cursor-pointer list-none items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-neutral-800">
                What&apos;s included
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <ul className="space-y-1.5 border-t border-neutral-200 px-4 py-3 text-center text-sm text-neutral-600">
                {p.inclusions.map((inc, idx) => (
                  <li key={idx}>{inc}</li>
                ))}
              </ul>
            </details>

            <Link
              href={`/tickets/enquire?plan=${encodeURIComponent(p.name)}`}
              className={`mt-6 flex items-center justify-center gap-2 rounded-lg px-4 py-3.5 font-semibold text-white transition ${t.button}`}
            >
              Enquire Now
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

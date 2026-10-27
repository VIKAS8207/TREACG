import Link from "next/link";
import { plans } from "@/lib/plans";

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

export default function TicketPlans() {
  return (
    <div className="mx-auto grid max-w-4xl items-start gap-5 md:grid-cols-2">
      {plans.map((p) => (
        <article key={p.name} className="flex flex-col rounded-2xl bg-brand-mint p-3">
          <div className="px-4 pb-4 pt-4">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-green">All 2 days</span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-green">
                <TicketIcon />
              </span>
            </div>

            <h3 className="mt-6 text-3xl font-bold leading-tight text-neutral-900">{p.name}</h3>

            <p className="mt-8 text-sm font-semibold text-neutral-500">
              Standard <span className="line-through">{p.standard}</span>
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-brand-green">Early Bird</p>
            <p className="text-4xl font-bold text-neutral-900">
              {p.earlyBird}
              <span className="ml-2 text-sm font-normal text-neutral-500">/ delegate</span>
            </p>

            <details className="group mt-6 rounded-xl bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-neutral-800">
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
              <ul className="space-y-1.5 border-t border-neutral-200 px-4 py-3 text-sm text-neutral-600">
                {p.inclusions.map((inc, idx) => (
                  <li key={idx}>{inc}</li>
                ))}
              </ul>
            </details>

            <Link
              href={`/tickets/enquire?plan=${encodeURIComponent(p.name)}`}
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-brand-orange py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Enquire Now
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-orange">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

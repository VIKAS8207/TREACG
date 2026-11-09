import Link from "next/link";
import { Globe, Handshake, Mic, Network, Store, Utensils, type LucideIcon } from "lucide-react";

// floating tiles around the headline (large screens only), zig-zagging down each side
const tiles: { Icon: LucideIcon; label: string; pos: string; tone: string }[] = [
  { Icon: Mic, label: "Conference", pos: "left-[6%] top-[4%]", tone: "text-brand-orange" },
  { Icon: Handshake, label: "International Buyer–Seller Meetings", pos: "left-[-2%] top-[40%]", tone: "text-brand-green" },
  { Icon: Utensils, label: "Food Street", pos: "left-[10%] top-[76%]", tone: "text-brand-orange" },
  { Icon: Store, label: "Exhibition", pos: "right-[6%] top-[4%]", tone: "text-brand-green" },
  { Icon: Globe, label: "30+ countries participating", pos: "right-[-2%] top-[40%]", tone: "text-brand-orange" },
  { Icon: Network, label: "Industry Networking", pos: "right-[10%] top-[76%]", tone: "text-brand-green" },
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Product-style hero: centred headline with highlighted words, floating icon tiles and a soft colour glow
// rising from the bottom edge.
export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[760px] items-center justify-center overflow-hidden bg-white text-center">
      {/* soft glow rising from the bottom edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[70%] bg-[radial-gradient(60%_90%_at_50%_100%,rgba(232,119,34,0.5)_0%,rgba(251,191,36,0.28)_42%,transparent_75%),radial-gradient(40%_70%_at_12%_100%,rgba(31,90,42,0.22)_0%,transparent_70%),radial-gradient(40%_70%_at_88%_100%,rgba(31,90,42,0.22)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-24">
        {/* floating tiles */}
        <ul aria-hidden className="pointer-events-none hidden lg:block">
          {tiles.map((t) => (
            <li
              key={t.label}
              title={t.label}
              className={`absolute grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-[0_12px_32px_-8px_rgba(0,0,0,0.2)] ${t.pos} ${t.tone}`}
            >
              <t.Icon className="h-7 w-7" strokeWidth={1.8} />
            </li>
          ))}
        </ul>

        <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
          IIRS 2027 · 20–21 January 2027
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-neutral-900 sm:text-6xl">
          Where India&apos;s <span className="text-brand-orange">rice trade</span> meets{" "}
          <span className="text-brand-green">the world</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
          Exporters, millers, international buyers and policymakers in one place, at Maira Resort &amp; Convention
          Centre, Raipur.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/register/form"
            className="inline-flex items-center gap-3 rounded-full bg-neutral-900 py-1.5 pl-7 pr-1.5 text-sm font-semibold text-white transition hover:bg-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Register Now
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-neutral-900">
              <Arrow />
            </span>
          </Link>
          <a
            href="#tickets"
            className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-[11px] text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            View Ticket Plans
          </a>
        </div>
      </div>
    </section>
  );
}

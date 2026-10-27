import Image from "next/image";
import SectionHeading from "./SectionHeading";

// `image`: path under /public, e.g. "/images/glimpse-inauguration.jpg". Without it a placeholder shows.
const activities: { title: string; text: string; image?: string; card: string; muted: string; pill: string; ph: string }[] = [
  {
    title: "Grand Inauguration",
    text: "Inaugurated by the Hon'ble Chief Minister and the Hon'ble Finance Minister of Chhattisgarh, setting a powerful national tone.",
    card: "bg-brand-orange text-white",
    muted: "text-white/85",
    pill: "bg-white/25 text-white",
    ph: "from-orange-300 to-orange-600",
  },
  {
    title: "Leadership Roundtable",
    text: "High-level discussions with industry leaders and MNCs across the global rice value chain.",
    card: "bg-brand-mint text-neutral-900",
    muted: "text-neutral-600",
    pill: "bg-white text-brand-green",
    ph: "from-emerald-200 to-emerald-500",
  },
  {
    title: "Expert Panels",
    text: "Renowned experts shared insights on trends, technology, exports and future opportunities.",
    card: "bg-amber-100 text-neutral-900",
    muted: "text-neutral-600",
    pill: "bg-white text-amber-700",
    ph: "from-amber-200 to-amber-500",
  },
  {
    title: "Music Night & Gala Dinner",
    text: "A vibrant music night and elegant gala dinner fostering meaningful networking.",
    card: "bg-brand-green text-white",
    muted: "text-white/80",
    pill: "bg-white/20 text-white",
    ph: "from-green-600 to-green-900",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GlimpseSection() {
  return (
    <section id="glimpse" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-[1920px] px-6 py-20 lg:px-20">
        <SectionHeading eyebrow="Last edition" title="IIRS-2026 Glimpse & Activities" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {activities.map((a, i) => (
            <article key={a.title} className={`flex flex-col rounded-2xl p-3 ${a.card}`}>
              <div className="px-4 pb-5 pt-4">
                <div className="flex gap-2 text-xs font-semibold">
                  <span className={`rounded-full px-3 py-1 ${a.pill}`}>0{i + 1}</span>
                  <span className={`rounded-full px-3 py-1 ${a.pill}`}>IIRS-2026</span>
                </div>
                <h3 className="mt-6 text-3xl font-bold leading-tight">{a.title}</h3>
                <p className={`mt-3 min-h-24 text-sm leading-relaxed ${a.muted}`}>{a.text}</p>
              </div>

              <div className={`relative mt-auto h-64 overflow-hidden rounded-xl bg-linear-to-br ${a.ph}`}>
                {a.image ? (
                  <Image src={a.image} alt={a.title} fill sizes="(min-width: 1280px) 25vw, 50vw" className="object-cover" />
                ) : (
                  <span className="absolute inset-0 grid place-items-center text-sm font-semibold text-white/90">
                    IIRS-2026 Glimpse
                  </span>
                )}
                <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/85 py-1.5 pl-4 pr-1.5 text-xs font-semibold text-neutral-800 backdrop-blur">
                  Glimpse
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-neutral-900 text-white">
                    <Arrow />
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-lg font-medium text-brand-green">
          Engage with rice exporters, millers, international buyers, technology providers, logistics companies,
          financial institutions and policymakers.
        </p>
      </div>
    </section>
  );
}

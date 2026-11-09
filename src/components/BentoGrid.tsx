import Image from "next/image";
import bgImage from "../../public/images/TREACG wall.png";

export type BentoItem = {
  title: string;
  text: string;
  /** grid spans, e.g. "sm:col-span-2" */
  span: string;
  tone: keyof typeof tones;
};

const tones = {
  feature: { card: "bg-brand-orange text-white", text: "text-white/90", pill: "bg-white/25 text-white", arrow: "bg-white text-brand-orange" },
  orange: { card: "bg-orange-100 text-neutral-900", text: "text-neutral-700", pill: "bg-white text-brand-orange", arrow: "bg-neutral-900 text-white" },
  neutral: { card: "bg-neutral-100 text-neutral-900", text: "text-neutral-700", pill: "bg-white text-neutral-700", arrow: "bg-neutral-900 text-white" },
  mint: { card: "bg-brand-mint text-neutral-900", text: "text-neutral-700", pill: "bg-white text-brand-green", arrow: "bg-neutral-900 text-white" },
};

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Bento grid on a 4-column layout (large screens). The "feature" card gets the photo that fades into orange.
export default function BentoGrid({ items }: { items: readonly BentoItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(220px,auto)] lg:grid-cols-4">
      {items.map((it, i) => {
        const t = tones[it.tone];
        const big = it.tone === "feature";
        return (
          <article
            key={it.title}
            className={`group relative isolate flex flex-col justify-between overflow-hidden rounded-2xl p-7 transition hover:-translate-y-1 hover:shadow-lg ${t.card} ${it.span}`}
          >
            {big && (
              // photo across the card; the orange fades in from top to bottom over it
              <div aria-hidden className="absolute inset-0 -z-10">
                <Image src={bgImage} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-b from-brand-orange/0 via-brand-orange/65 to-brand-orange" />
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${t.pill}`}>0{i + 1}</span>
              <span className={`grid h-9 w-9 place-items-center rounded-full transition group-hover:rotate-45 ${t.arrow}`}>
                <Arrow />
              </span>
            </div>
            <div className="mt-10">
              <h3 className={`font-bold leading-tight ${big ? "text-5xl sm:text-6xl" : "text-3xl"}`}>{it.title}</h3>
              <p className={`mt-3 leading-relaxed ${t.text} ${big ? "max-w-sm text-lg" : ""}`}>{it.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

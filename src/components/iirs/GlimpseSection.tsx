import ImageCarousel from "./ImageCarousel";
import SectionHeading from "./SectionHeading";
import WheatDecor from "@/components/WheatDecor";

// `images`: photo paths under /public, e.g. ["/images/glimpse-inauguration-1.jpg", "/images/glimpse-inauguration-2.jpg"].
// They cross-fade as a carousel; without them soft gradient placeholders slide instead.
// The /images/glimpse/*.svg files are dummies: replace them with real photos (jpg/webp) and update the paths.
const activities: { title: string; text: string; images?: string[]; card: string; muted: string; pill: string; ph: string }[] = [
  {
    title: "Grand Inauguration",
    images: ["/images/glimpse/inauguration-1.svg", "/images/glimpse/inauguration-2.svg", "/images/glimpse/inauguration-3.svg"],
    text: "Inaugurated by the Hon'ble Chief Minister and the Hon'ble Finance Minister of Chhattisgarh, setting a powerful national tone.",
    card: "bg-brand-orange text-white",
    muted: "text-white/85",
    pill: "bg-white/25 text-white",
    ph: "from-orange-300 to-orange-600",
  },
  {
    title: "Leadership Roundtable",
    images: ["/images/glimpse/roundtable-1.svg", "/images/glimpse/roundtable-2.svg", "/images/glimpse/roundtable-3.svg"],
    text: "High-level discussions with industry leaders and MNCs across the global rice value chain.",
    card: "bg-brand-mint text-neutral-900",
    muted: "text-neutral-600",
    pill: "bg-white text-brand-green",
    ph: "from-emerald-200 to-emerald-500",
  },
  {
    title: "Expert Panels",
    images: ["/images/glimpse/panels-1.svg", "/images/glimpse/panels-2.svg", "/images/glimpse/panels-3.svg"],
    text: "Renowned experts shared insights on trends, technology, exports and future opportunities.",
    card: "bg-amber-100 text-neutral-900",
    muted: "text-neutral-600",
    pill: "bg-white text-amber-700",
    ph: "from-amber-200 to-amber-500",
  },
  {
    title: "Music Night & Gala Dinner",
    images: ["/images/glimpse/gala-1.svg", "/images/glimpse/gala-2.svg", "/images/glimpse/gala-3.svg"],
    text: "A vibrant music night and elegant gala dinner fostering meaningful networking.",
    card: "bg-brand-green text-white",
    muted: "text-white/80",
    pill: "bg-white/20 text-white",
    ph: "from-green-600 to-green-900",
  },
];

export default function GlimpseSection() {
  return (
    <section id="glimpse" className="scroll-mt-16 bg-white relative overflow-hidden">
      <WheatDecor items={[{ side:"left", top:"30%", size:96, rotate:-20 }, { side:"right", top:"68%", size:140, rotate:25 }]} />
      <div className="relative mx-auto max-w-[1920px] px-6 py-20 lg:px-20">
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

              <ImageCarousel
                images={a.images}
                gradient={a.ph}
                alt={a.title}
                startDelayMs={i * 1100}
                className="mt-auto h-64 rounded-xl"
              />
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

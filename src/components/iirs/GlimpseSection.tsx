import ImageCarousel from "./ImageCarousel";
import SectionHeading from "./SectionHeading";
import GradientOrbs from "@/components/GradientOrbs";

// The same three photos feed every carousel. Each card starts from a different one,
// so neighbouring cards never show the same picture at the same time.
const photos = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];
const startingAt = (n: number) => [...photos.slice(n % photos.length), ...photos.slice(0, n % photos.length)];

const activities: { title: string; text: string; card: string; muted: string; pill: string }[] = [
  {
    title: "Grand Inauguration",
    text: "Inaugurated by the Hon'ble Chief Minister and the Hon'ble Finance Minister of Chhattisgarh, setting a powerful national tone.",
    card: "bg-brand-orange text-white",
    muted: "text-white/85",
    pill: "bg-white/25 text-white",
  },
  {
    title: "Leadership Roundtable",
    text: "High-level discussions with industry leaders and MNCs across the global rice value chain.",
    card: "bg-brand-mint text-neutral-900",
    muted: "text-neutral-600",
    pill: "bg-white text-brand-green",
  },
  {
    title: "Expert Panels",
    text: "Renowned experts shared insights on trends, technology, exports and future opportunities.",
    card: "bg-amber-100 text-neutral-900",
    muted: "text-neutral-600",
    pill: "bg-white text-amber-700",
  },
  {
    title: "Music Night & Gala Dinner",
    text: "A vibrant music night and elegant gala dinner fostering meaningful networking.",
    card: "bg-brand-green text-white",
    muted: "text-white/80",
    pill: "bg-white/20 text-white",
  },
];

export default function GlimpseSection() {
  return (
    <section id="glimpse" className="scroll-mt-16 bg-white relative overflow-hidden">
      <GradientOrbs items={[{ x:8, top:40, size:80, tone:"orange" }, { x:78, top:58, size:70, tone:"green" }]} />
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
                images={startingAt(i)}
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

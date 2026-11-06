import Image from "next/image";
import GradientOrbs from "@/components/GradientOrbs";
import bgImage from "../../../public/images/TREACG wall.png";

// Bento layout on a 4-column grid (large screens):
//   Explore  (2x2) | Connect | Learn
//                  | Showcase (2x1)
//   Collaborate | Grow | Shape (2x1)
const items = [
  {
    title: "Explore",
    text: "Innovation-driven solutions and technologies that transform the rice supply chain, from paddy to port.",
    span: "sm:col-span-2 lg:row-span-2",
    tone: "feature",
  },
  {
    title: "Connect",
    text: "Meet buyers, sellers, millers and exporters in curated B2B, B2G and reverse buyer–seller meetings.",
    span: "",
    tone: "orange",
  },
  {
    title: "Learn",
    text: "Insights from expert sessions and policy roundtables on trade policy, market access, quality standards and competitiveness.",
    span: "",
    tone: "neutral",
  },
  {
    title: "Showcase",
    text: "Present your products, brands and capabilities to national and international buyers.",
    span: "sm:col-span-2",
    tone: "mint",
  },
  {
    title: "Collaborate",
    text: "Build partnerships with government bodies, financial institutions, logistics providers and technology partners.",
    span: "",
    tone: "neutral",
  },
  {
    title: "Grow",
    text: "Identify new export markets, diversify destinations and leave with concrete business opportunities.",
    span: "",
    tone: "orange",
  },
  {
    title: "Shape",
    text: "Take part in the dialogue that influences the policies and direction of India's rice sector.",
    span: "sm:col-span-2",
    tone: "mint",
  },
] as const;

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

export default function WhyPartnerSection() {
  return (
    <section id="why-partner" className="scroll-mt-16 bg-white relative overflow-hidden">
      <GradientOrbs items={[{ side:"right", top:46, size:90 }, { side:"left", top:55, size:82 }]} />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        {/* centred heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Why Partner</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-brand-green sm:text-5xl">
            Seven reasons to partner with IIRS 2027
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded bg-brand-orange" />
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">
            Partner with IIRS 2027 to connect with key decision-makers across the rice value chain, strengthen your
            brand presence and explore new business opportunities. Contribute to a shared agenda for innovation,
            collaboration and export growth.
          </p>
        </div>

        {/* bento grid */}
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
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-full transition group-hover:rotate-45 ${t.arrow}`}
                  >
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

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-brand-orange py-2 pl-7 pr-2 font-semibold text-white transition hover:brightness-110"
          >
            Become a Partner
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-orange">
              <Arrow />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

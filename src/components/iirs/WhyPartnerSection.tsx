import GradientOrbs from "@/components/GradientOrbs";
import BentoGrid from "@/components/BentoGrid";

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
      <GradientOrbs items={[{ x:92, top:45, size:84, tone:"green" }, { x:30, top:56, size:60, tone:"orange" }]} />
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

        <BentoGrid items={items} />

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

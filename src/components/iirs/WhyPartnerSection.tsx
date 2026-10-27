import WheatDecor from "@/components/WheatDecor";

const whyPartner = [
  ["Explore", "Innovation-driven solutions and technologies that transform the rice supply chain, from paddy to port."],
  ["Connect", "Meet buyers, sellers, millers and exporters in curated B2B, B2G and reverse buyer–seller meetings."],
  ["Learn", "Insights from expert sessions and policy roundtables on trade policy, market access, quality standards and competitiveness."],
  ["Showcase", "Present your products, brands and capabilities to national and international buyers."],
  ["Collaborate", "Build partnerships with government bodies, financial institutions, logistics providers and technology partners."],
  ["Grow", "Identify new export markets, diversify destinations and leave with concrete business opportunities."],
  ["Shape", "Take part in the dialogue that influences the policies and direction of India's rice sector."],
];

// card colour treatments, cycled; the last card is styled separately
const tones = [
  { card: "bg-brand-mint", pill: "bg-white text-brand-green" },
  { card: "bg-amber-100", pill: "bg-white text-amber-700" },
  { card: "bg-orange-100", pill: "bg-white text-brand-orange" },
  { card: "bg-neutral-100", pill: "bg-white text-neutral-700" },
];

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
      <WheatDecor items={[{ side:"right", top:"28%", size:120, rotate:15 }, { side:"left", top:"70%", size:80, rotate:-30 }]} />
      <div className="relative mx-auto grid max-w-[1920px] gap-12 px-6 py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-20">
        {/* intro */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Why Partner</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-brand-green sm:text-5xl">
            Seven reasons to partner with IIRS 2027
          </h2>
          <div className="mt-5 h-1 w-16 rounded bg-brand-orange" />
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">
            Partner with IIRS 2027 to connect with key decision-makers across the rice value chain, strengthen your
            brand presence and explore new business opportunities. Contribute to a shared agenda for innovation,
            collaboration and export growth.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-orange py-2 pl-7 pr-2 font-semibold text-white transition hover:brightness-110"
          >
            Become a Partner
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-orange">
              <Arrow />
            </span>
          </a>
        </div>

        {/* cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {whyPartner.map(([title, text], i) => {
            const last = i === whyPartner.length - 1;
            const t = tones[i % tones.length];
            return (
              <article
                key={title}
                className={`group flex flex-col rounded-2xl p-7 transition hover:-translate-y-1 hover:shadow-lg ${
                  last ? "bg-brand-green text-white sm:col-span-2" : `${t.card} text-neutral-900`
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${last ? "bg-white/20 text-white" : t.pill}`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-full transition group-hover:rotate-45 ${
                      last ? "bg-white/20 text-white" : "bg-neutral-900 text-white"
                    }`}
                  >
                    <Arrow />
                  </span>
                </div>
                <h3 className="mt-8 text-3xl font-bold">{title}</h3>
                <p className={`mt-3 leading-relaxed ${last ? "max-w-xl text-white/85" : "text-neutral-700"}`}>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

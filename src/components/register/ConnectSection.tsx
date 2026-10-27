import Link from "next/link";
import WheatDecor from "@/components/WheatDecor";

const benefits = [
  ["Connect", "Meet buyers, sellers, millers and exporters in curated B2B, B2G and reverse buyer–seller meetings."],
  ["Showcase", "Present your products, brands and capabilities to national and international buyers."],
  ["Explore", "Discover innovation-driven solutions and technologies that transform the rice supply chain, from paddy to port."],
  ["Collaborate", "Build partnerships with government bodies, financial institutions, logistics providers and technology partners."],
  ["Learn", "Gain insights from expert sessions and policy roundtables on trade policy, market access, quality standards and competitiveness."],
  ["Grow", "Identify new export markets, diversify destinations and leave with concrete business opportunities."],
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ConnectSection() {
  return (
    <section className="bg-white relative overflow-hidden">
      <WheatDecor items={[{ side:"left", top:"68%", size:110, rotate:-20 }, { side:"right", top:"30%", size:90, rotate:20 }]} />
      <div className="relative mx-auto grid max-w-[1920px] gap-12 px-6 py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-20">
        {/* intro */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Why join</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-brand-green sm:text-5xl">
            Make new connections across the world
          </h2>
          <div className="mt-5 h-1 w-16 rounded bg-brand-orange" />
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">
            Exhibitors and delegates from over 30 countries meet in one place. Whether you export, mill, buy, supply
            technology or shape policy, IIRS 2027 is where trade opportunities turn into commercial partnerships and
            where the industry works together to make India a reliable supplier of rice to the world.
          </p>
          <Link
            href="/register/form"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-orange py-2 pl-7 pr-2 font-semibold text-white transition hover:brightness-110"
          >
            Register Now
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-orange">
              <Arrow />
            </span>
          </Link>
        </div>

        {/* cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map(([title, text], i) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl bg-brand-mint p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-green">0{i + 1}</span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-neutral-900 text-white transition group-hover:rotate-45">
                  <Arrow />
                </span>
              </div>
              <h3 className="mt-8 text-3xl font-bold text-neutral-900">{title}</h3>
              <p className="mt-3 leading-relaxed text-neutral-700">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

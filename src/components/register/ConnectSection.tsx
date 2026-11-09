import Link from "next/link";
import GradientOrbs from "@/components/GradientOrbs";
import BentoGrid, { type BentoItem } from "@/components/BentoGrid";

// Bento layout on a 4-column grid (large screens):
//   Connect (2x2) | Showcase | Explore
//                 | Collaborate (2x1)
//   Learn (2x1)   | Grow (2x1)
const items: BentoItem[] = [
  {
    title: "Connect",
    text: "Meet buyers, sellers, millers and exporters in curated B2B, B2G and reverse buyer–seller meetings.",
    span: "sm:col-span-2 lg:row-span-2",
    tone: "feature",
  },
  {
    title: "Showcase",
    text: "Present your products, brands and capabilities to national and international buyers.",
    span: "",
    tone: "orange",
  },
  {
    title: "Explore",
    text: "Discover innovation-driven solutions and technologies that transform the rice supply chain, from paddy to port.",
    span: "",
    tone: "neutral",
  },
  {
    title: "Collaborate",
    text: "Build partnerships with government bodies, financial institutions, logistics providers and technology partners.",
    span: "sm:col-span-2",
    tone: "mint",
  },
  {
    title: "Learn",
    text: "Gain insights from expert sessions and policy roundtables on trade policy, market access, quality standards and competitiveness.",
    span: "sm:col-span-2",
    tone: "neutral",
  },
  {
    title: "Grow",
    text: "Identify new export markets, diversify destinations and leave with concrete business opportunities.",
    span: "sm:col-span-2",
    tone: "orange",
  },
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
    <section className="relative overflow-hidden bg-white">
      <GradientOrbs items={[{ x:14, top:48, size:86, tone:"orange" }, { x:96, top:52, size:80, tone:"green" }]} />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        {/* centred heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Why join</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-brand-green sm:text-5xl">
            Make new connections across the world
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded bg-brand-orange" />
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">
            Exhibitors and delegates from over 30 countries meet in one place. Whether you export, mill, buy, supply
            technology or shape policy, IIRS 2027 is where trade opportunities turn into commercial partnerships and
            where the industry works together to make India a reliable supplier of rice to the world.
          </p>
        </div>

        <BentoGrid items={items} />

        <div className="mt-12 text-center">
          <Link
            href="/register/form"
            className="inline-flex items-center gap-3 rounded-full bg-brand-orange py-2 pl-7 pr-2 font-semibold text-white transition hover:brightness-110"
          >
            Register Now
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-orange">
              <Arrow />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

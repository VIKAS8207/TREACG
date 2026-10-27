import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "IIRS 2027 | India International Rice Summit, 3rd Edition",
  description:
    "India International Rice Summit 2027 - A Global Event to Showcase, Connect and Collaborate. 20-21 January 2027, Raipur, Chhattisgarh.",
};

const subNav = [
  { label: "Highlights", href: "#highlights" },
  { label: "Why Partner", href: "#why-partner" },
  { label: "Partnership Opportunities", href: "#partnership" },
  { label: "Contact", href: "#contact" },
];

const included = [
  "Conference",
  "Exhibition",
  "International Buyer–Seller Meetings",
  "Industry Networking",
  "Food Street",
];

const supporters = [
  "TREACG",
  "APEDA",
  "FICCI",
  "Trade Promotion Council of India",
  "CII",
];

const highlights = [
  { value: "40+", label: "Speakers" },
  { value: "30+", label: "Sessions" },
  { value: "40+", label: "Stalls" },
  { value: "1500+", label: "Footfall" },
  { value: "30+", label: "Countries participating" },
];

const activities = [
  {
    title: "Grand Inauguration",
    text: "Inaugurated by the Hon'ble Chief Minister and the Hon'ble Finance Minister of Chhattisgarh, setting a powerful national tone.",
  },
  {
    title: "Leadership Roundtable",
    text: "High-level discussions with industry leaders and MNCs across the global rice value chain.",
  },
  {
    title: "Expert Panels",
    text: "Renowned experts shared insights on trends, technology, exports and future opportunities.",
  },
  {
    title: "Music Night & Gala Dinner",
    text: "A vibrant music night and elegant gala dinner fostering meaningful networking.",
  },
];

const whyPartner = [
  ["Explore", "Innovation-driven solutions and technologies that transform the rice supply chain, from paddy to port."],
  ["Connect", "Meet buyers, sellers, millers and exporters in curated B2B, B2G and reverse buyer–seller meetings."],
  ["Learn", "Insights from expert sessions and policy roundtables on trade policy, market access, quality standards and competitiveness."],
  ["Showcase", "Present your products, brands and capabilities to national and international buyers."],
  ["Collaborate", "Build partnerships with government bodies, financial institutions, logistics providers and technology partners."],
  ["Grow", "Identify new export markets, diversify destinations and leave with concrete business opportunities."],
  ["Shape", "Take part in the dialogue that influences the policies and direction of India's rice sector."],
];

type Tier = { name: string; spots?: string; benefits: string[]; featured?: boolean };

const tiers: Tier[] = [
  {
    name: "Co-Sponsor",
    featured: true,
    benefits: [
      "IIRS logo placement at the bottom of promotional material",
      "15 digital posts + 7 print media",
      "Full-page event directory ad (1st advt)",
      "LED screens in conference hall and pre-function area",
      "Speaker slots",
      "36 m² exhibition space",
      "2 suite rooms + 2 executive rooms",
      "8 VIP passes + 15 visitor passes",
      "Pick-up & drop",
    ],
  },
  {
    name: "Diamond",
    spots: "1 spot",
    benefits: [
      "Logo at the bottom of promotional material",
      "10 digital posts + 5 print media",
      "Full-page directory",
      "LED screens",
      "Speaker slots",
      "36 m² branding stall",
      "1 suite room + 2 executive rooms",
      "5 VIP + 15 visitor passes",
      "Pick-up & drop",
    ],
  },
  {
    name: "Gold",
    spots: "2 spots",
    benefits: [
      "Logo with IIRS logo on every promotional material",
      "5 digital posts + 5 print media",
      "Full-page directory",
      "LED screens",
      "Speaker slots",
      "27 m² exhibition space",
      "1 suite room + 1 executive room",
      "3 VIP + 10 visitor passes",
      "Pick-up & drop",
    ],
  },
  {
    name: "Silver",
    spots: "3 spots",
    benefits: [
      "Logo with IIRS logo on every promotional material",
      "5 digital posts + 3 print media",
      "Full-page directory",
      "LED screens",
      "Speaker slots",
      "18 m² exhibition space",
      "1 executive room",
      "2 VIP + 7 visitor passes",
      "Pick-up & drop",
    ],
  },
  {
    name: "Technology Partner",
    benefits: [
      "Logo at main gate",
      "Billboard promotion + 5 print media",
      "Full-page directory",
      "LED screens",
      "Speaker slots",
      "18 m² exhibition space",
      "1 executive room",
      "1 VIP + 3 visitor passes",
      "Pick-up & drop",
    ],
  },
  {
    name: "Exhibitor Sponsor",
    spots: "30 spots",
    benefits: [
      "Billboard promotion + 5 print media",
      "Half-page directory",
      "LED screens",
      "9 m² exhibition space",
      "1 executive room",
      "1 VIP + 5 visitor passes",
      "Pick-up & drop",
    ],
  },
  {
    name: "Media Partner",
    benefits: [
      "Logo at main gate",
      "Billboard promotion + 5 print media",
      "1/4 page directory",
      "LED screens",
      "Speaker slots",
      "9 m² exhibition space",
      "1 VIP + 3 visitor passes",
    ],
  },
  {
    name: "Gifting · Food · Hydration · Delegate Kit · Gala Dinner · Conference Partner",
    benefits: [
      "Same package for each partner category",
      "Logo at main gate",
      "Billboard promotion + 5 print media",
      "1/4 page directory",
      "LED screens in conference hall and pre-function",
      "1 VIP + 3 visitor passes",
    ],
  },
];

function SectionHeading({ eyebrow, title, light }: { eyebrow?: string; title: string; light?: boolean }) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">{eyebrow}</p>
      )}
      <h2 className={`text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-brand-green"}`}>{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-orange" />
    </div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="m4 10.5 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Iirs2027Page() {
  return (
    <>
      <Header />

      {/* section nav */}
      <div className="sticky top-0 z-30 border-b border-neutral-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1920px] items-center justify-between gap-4 px-6 py-3 lg:px-20">
          <ul className="flex gap-6 overflow-x-auto text-sm font-semibold text-brand-green">
            {subNav.map((n) => (
              <li key={n.href} className="shrink-0">
                <a href={n.href} className="hover:text-brand-orange">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="shrink-0 rounded-sm bg-brand-orange px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Partner with us
          </a>
        </div>
      </div>

      <main className="flex-1 scroll-smooth">
        {/* 1. hero */}
        <section className="relative isolate overflow-hidden bg-slate-700 text-center text-white">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,#8b93a1_0%,#4a5160_70%,#2b303b_100%)]" />
          <div className="absolute inset-0 -z-10 bg-black/30" />
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24">
            <p className="text-base font-medium sm:text-lg">3rd Edition</p>
            <h1 className="text-5xl font-bold leading-tight sm:text-7xl">
              India International
              <span className="block text-amber-400">Rice Summit 2027</span>
              <span className="block text-3xl sm:text-4xl">(IIRS 2027)</span>
            </h1>
            <p className="text-xl sm:text-2xl">A Global Event to Showcase, Connect and Collaborate</p>
            <p className="text-lg font-semibold text-amber-400">Think Rice, Think India</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold sm:text-base">
              <span className="rounded-md border border-white/30 bg-slate-900/50 px-6 py-3 backdrop-blur-sm">
                20th &amp; 21st January 2027
              </span>
              <span className="rounded-md border border-white/30 bg-slate-900/50 px-6 py-3 backdrop-blur-sm">
                Maira Resort &amp; Convention Centre, Raipur, Chhattisgarh
              </span>
            </div>
            <ul className="flex flex-wrap justify-center gap-2 text-sm">
              {included.map((i) => (
                <li key={i} className="rounded-full bg-white/15 px-4 py-1.5">
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="rounded-sm bg-brand-orange px-8 py-3 text-lg font-semibold transition hover:brightness-110">
                Become a Partner
              </a>
              <a
                href="#why-partner"
                className="rounded-sm border-2 border-white px-8 py-3 text-lg font-semibold transition hover:bg-white hover:text-brand-green"
              >
                Why Partner?
              </a>
            </div>
          </div>
          <div className="bg-black/35 px-6 py-4 text-sm">
            <p className="mb-2 text-xs uppercase tracking-widest text-white/70">Organised &amp; supported by</p>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 font-semibold">
              {supporters.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2. highlights */}
        <section id="highlights" className="scroll-mt-16 bg-brand-orange text-white">
          <div className="mx-auto grid max-w-[1920px] grid-cols-2 gap-8 px-6 py-14 text-center sm:grid-cols-3 lg:grid-cols-5 lg:px-20">
            {highlights.map((h) => (
              <div key={h.label}>
                <p className="text-5xl font-bold">{h.value}</p>
                <p className="mt-1 font-semibold">{h.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. IIRS 2026 glimpse */}
        <section id="glimpse" className="scroll-mt-16 bg-brand-mint">
          <div className="mx-auto max-w-[1920px] px-6 py-20 lg:px-20">
            <SectionHeading eyebrow="Last edition" title="IIRS-2026 Glimpse & Activities" />
            <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="grid aspect-[4/3] place-items-center rounded-md bg-gradient-to-br from-slate-400 to-slate-600 text-sm font-semibold text-white/90"
                >
                  IIRS-2026 Glimpse
                </div>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {activities.map((a, i) => (
                <article key={a.title} className="rounded-md border-t-4 border-brand-orange bg-white p-6 shadow-sm">
                  <p className="text-3xl font-bold text-brand-orange">0{i + 1}</p>
                  <h3 className="mt-2 text-xl font-bold text-brand-green">{a.title}</h3>
                  <p className="mt-2 text-neutral-700">{a.text}</p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-12 max-w-3xl text-center text-lg font-medium text-brand-green">
              Engage with rice exporters, millers, international buyers, technology providers, logistics companies,
              financial institutions and policymakers.
            </p>
          </div>
        </section>

        {/* 5. why partner */}
        <section id="why-partner" className="scroll-mt-16 bg-white">
          <div className="mx-auto max-w-[1920px] px-6 py-20 lg:px-20">
            <SectionHeading title="Why Partner?" />
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-neutral-700">
              Partner with IIRS 2027 to connect with key decision-makers across the rice value chain, strengthen your
              brand presence and explore new business opportunities. Contribute to a shared agenda for innovation,
              collaboration and export growth.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyPartner.map(([title, text]) => (
                <article key={title} className="rounded-md border border-neutral-200 p-6 transition hover:border-brand-orange hover:shadow-md">
                  <h3 className="text-xl font-bold text-brand-orange">{title}</h3>
                  <p className="mt-2 text-neutral-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. partnership opportunities */}
        <section id="partnership" className="scroll-mt-16 bg-brand-green">
          <div className="mx-auto max-w-[1920px] px-6 py-20 lg:px-20">
            <SectionHeading title="Partnership Opportunities" light />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {tiers.map((t) => (
                <article
                  key={t.name}
                  className={`flex flex-col rounded-md bg-white p-6 ${t.featured ? "ring-4 ring-brand-orange" : ""}`}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-brand-green">{t.name}</h3>
                    {t.spots && (
                      <span className="shrink-0 rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold text-white">
                        {t.spots}
                      </span>
                    )}
                  </div>
                  <ul className="flex-1 space-y-2 text-sm text-neutral-700">
                    {t.benefits.map((b) => (
                      <li key={b} className="flex gap-2">
                        <Check />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 rounded-sm border-2 border-brand-orange px-4 py-2 text-center text-sm font-semibold text-brand-orange transition hover:bg-brand-orange hover:text-white"
                  >
                    Enquire
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. contact */}
        <section id="contact" className="scroll-mt-16 bg-white">
          <div className="mx-auto max-w-[1920px] px-6 py-20 lg:px-20">
            <SectionHeading title="Let's Grow Together. Partner with IIRS 2027." />
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
                  For partnership &amp; sponsorship enquiries
                </p>
                <h3 className="mt-2 text-2xl font-bold text-brand-green">
                  The Rice Exporters Association Chhattisgarh (TREACG)
                </h3>
                <ul className="mt-6 space-y-3 text-lg text-neutral-800">
                  <li>
                    <span className="font-semibold">Phone: </span>
                    <a href="tel:+917400945550" className="hover:text-brand-orange">+91 7400945550</a>
                  </li>
                  <li>
                    <span className="font-semibold">Email: </span>
                    <a href="mailto:info@thericeexporters.org" className="hover:text-brand-orange">info@thericeexporters.org</a>
                  </li>
                  <li>
                    <span className="font-semibold">Website: </span>
                    <a href="https://www.treacg.in" className="hover:text-brand-orange">www.treacg.in</a>
                  </li>
                </ul>

                {/* map pin */}
                <div className="mt-8 grid h-56 place-items-center rounded-md bg-brand-mint">
                  <div className="flex flex-col items-center gap-2 text-brand-green">
                    <svg viewBox="0 0 24 24" className="h-12 w-12 text-brand-orange" fill="currentColor" aria-hidden>
                      <path d="M12 22s8-6.7 8-12.5a8 8 0 1 0-16 0C4 15.300 12 22 12 22zm0-9.500a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <p className="font-semibold">Raipur, Chhattisgarh</p>
                    <p className="text-sm">Maira Resort &amp; Convention Centre</p>
                  </div>
                </div>
              </div>

              <div>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-green py-8 text-center text-white">
        <p className="text-lg font-semibold">Think Rice... Think India...</p>
        <p className="mt-1 text-sm text-white/70">
          <Link href="/" className="hover:text-amber-200">TREACG</Link> · IIRS 2027
        </p>
      </footer>
    </>
  );
}

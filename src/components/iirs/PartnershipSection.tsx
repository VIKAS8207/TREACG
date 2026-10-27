import SectionHeading from "./SectionHeading";

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

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="m4 10.5 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PartnershipSection() {
  return (
    <section id="partnership" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-[1920px] px-6 pb-24 lg:px-20">
        <SectionHeading eyebrow="Become a partner" title="Partnership Opportunities" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((t, i) => (
            <article
              key={t.name}
              className="group flex flex-col rounded-2xl bg-brand-mint p-3 text-neutral-900 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
                <div className="flex gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-white px-3 py-1 text-brand-green">0{i + 1}</span>
                  {t.spots && <span className="rounded-full bg-white px-3 py-1 text-brand-green">{t.spots}</span>}
                </div>

                <h3 className="mt-6 text-3xl font-bold leading-tight">{t.name}</h3>

                <ul className="mt-5 flex-1 space-y-2.5 text-sm text-neutral-700">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-left">
                      <Tick />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-3 self-start rounded-full bg-brand-orange py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Enquire
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-orange">
                    <Arrow />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

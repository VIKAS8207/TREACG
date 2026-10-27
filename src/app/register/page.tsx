import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import TicketPlans from "@/components/TicketPlans";

export const metadata: Metadata = {
  title: "Join IIRS 2027",
  description:
    "Join the India International Rice Summit 2027: meet exporters, millers and international buyers, and explore ticket plans.",
};

const stats = [
  { value: "40+", label: "Stalls" },
  { value: "30+", label: "Countries participating" },
  { value: "40+", label: "Speakers" },
  { value: "1500+", label: "Footfall" },
];

const benefits = [
  ["Connect", "Meet buyers, sellers, millers and exporters in curated B2B, B2G and reverse buyer–seller meetings."],
  ["Showcase", "Present your products, brands and capabilities to national and international buyers."],
  ["Explore", "Discover innovation-driven solutions and technologies that transform the rice supply chain, from paddy to port."],
  ["Collaborate", "Build partnerships with government bodies, financial institutions, logistics providers and technology partners."],
  ["Learn", "Gain insights from expert sessions and policy roundtables on trade policy, market access, quality standards and competitiveness."],
  ["Grow", "Identify new export markets, diversify destinations and leave with concrete business opportunities."],
];

export default function JoinPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* intro */}
        <section className="bg-brand-mint">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">3rd Edition</p>
            <h1 className="mt-3 text-4xl font-bold text-brand-green sm:text-5xl">Join IIRS 2027</h1>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-orange" />
            <p className="mt-6 font-semibold text-neutral-700">
              20–21 January 2027 · Maira Resort &amp; Convention Centre, Raipur, Chhattisgarh
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700">
              The India International Rice Summit brings together exporters, millers, international buyers,
              policymakers, diplomatic representatives, researchers and allied industries, with a focus on unlocking the
              value and export potential of India&apos;s non-basmati rice sector. Through a conference, exhibition and
              international buyer–seller meetings, it connects trade opportunities with the capabilities needed to serve
              global markets.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/register/form"
                className="rounded-sm bg-brand-orange px-8 py-3 text-lg font-semibold text-white transition hover:brightness-110"
              >
                Register Now
              </Link>
              <a
                href="#tickets"
                className="rounded-sm border-2 border-brand-green px-8 py-3 text-lg font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
              >
                View Ticket Plans
              </a>
            </div>
          </div>
        </section>

        {/* stats */}
        <section className="bg-brand-orange text-white">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-12 text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold sm:text-5xl">{s.value}</p>
                <p className="mt-1 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* connections + how it helps */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-brand-green sm:text-4xl">
                Make new connections across the world
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-orange" />
              <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-700">
                Exhibitors and delegates from over 30 countries meet in one place. Whether you export, mill, buy,
                supply technology or shape policy, IIRS 2027 is where trade opportunities turn into commercial
                partnerships and where the industry works together to make India a reliable supplier of rice to the world.
              </p>
            </div>
            <h3 className="mb-8 text-center text-xl font-bold text-brand-green">How IIRS 2027 can help you</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(([title, text]) => (
                <article
                  key={title}
                  className="rounded-md border border-neutral-200 p-6 text-center transition hover:border-brand-orange hover:shadow-md"
                >
                  <h4 className="text-xl font-bold text-brand-orange">{title}</h4>
                  <p className="mt-2 text-neutral-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ticket plans */}
        <section id="tickets" className="scroll-mt-4 bg-brand-mint">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">Your pass to IIRS 2027</p>
              <h2 className="mt-4 text-3xl font-bold text-brand-green sm:text-4xl">Ticket Plans</h2>
              <p className="mt-4 text-lg font-semibold text-brand-orange">Choose a plan and send us your enquiry.</p>
            </div>
            <TicketPlans />
          </div>
        </section>

        {/* closing CTA */}
        <section className="bg-brand-green text-center text-white">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <h2 className="text-3xl font-bold">Ready to join IIRS 2027?</h2>
            <p className="mt-3 text-white/80">Register now to attend, or enquire about ticket plans above.</p>
            <Link
              href="/register/form"
              className="mt-8 inline-block rounded-sm bg-brand-orange px-8 py-3 text-lg font-semibold transition hover:brightness-110"
            >
              Register Now
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

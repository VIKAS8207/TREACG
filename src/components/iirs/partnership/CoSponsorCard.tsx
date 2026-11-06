import Image from "next/image";
import Icon from "./Icons";
import { coSponsor, ENQUIRE_HREF } from "./data";
import bgImage from "../../../../public/images/TREACG wall.png";

export default function CoSponsorCard() {
  return (
    <article className="relative isolate grid gap-8 overflow-hidden rounded-2xl bg-brand-green p-6 text-white transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-10 min-[900px]:grid-cols-2 min-[900px]:gap-12">
      {/* background photo on the right; the green fades in over it towards the left */}
      <div aria-hidden className="absolute inset-y-0 right-0 -z-10 hidden w-[65%] min-[900px]:block">
        <Image src={bgImage} alt="" fill sizes="65vw" className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-brand-green via-brand-green/70 to-brand-green/10" />
      </div>

      {/* left: identity, perks, CTA */}
      <div className="flex flex-col">
        <span className="self-start rounded-full bg-brand-orange px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {coSponsor.pill}
        </span>
        <h3 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">{coSponsor.name}</h3>
        <div className="mt-4 h-1 w-12 rounded bg-brand-orange" />
        <p className="mt-4 text-lg text-white/85">{coSponsor.blurb}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {coSponsor.perks.map((p) => (
            <li
              key={p.text}
              className="flex items-center gap-2 rounded-full border border-white/25 px-3.5 py-1.5 text-sm"
            >
              <Icon name={p.icon} className="h-4 w-4 shrink-0 text-brand-orange" />
              {p.text}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-10">
          <a
            href={ENQUIRE_HREF}
            className="inline-flex items-center gap-3 rounded-full bg-brand-orange py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Enquire
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-orange">
              <Icon name="arrow" />
            </span>
          </a>
        </div>
      </div>

      {/* right: big-number tiles */}
      <dl className="grid grid-cols-2 content-center gap-3 sm:grid-cols-3 min-[900px]:translate-y-6">
        {coSponsor.stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-white px-4 py-5 text-center text-neutral-900">
            <dd className="text-3xl font-bold leading-none text-brand-green sm:text-4xl">{s.value}</dd>
            <dt className="mt-2 text-sm leading-snug text-neutral-600">{s.label}</dt>
          </div>
        ))}
      </dl>
    </article>
  );
}

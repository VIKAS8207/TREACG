import Icon from "./Icons";
import { ENQUIRE_HREF, tiers } from "./data";

function SpotsPill({ n }: { n: number }) {
  return (
    <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-green">
      {n} {n === 1 ? "spot" : "spots"}
    </span>
  );
}

export default function TierCards() {
  // items-start: opening one card's expander must not stretch its neighbours
  return (
    <div className="grid items-start gap-5 min-[900px]:grid-cols-3">
      {tiers.map((t) => (
        <article
          key={t.name}
          className={`flex flex-col rounded-2xl p-6 text-neutral-900 transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${t.tint}`}
        >
          <header className="flex items-center justify-between gap-3">
            <h3 className="text-3xl font-bold">{t.name}</h3>
            <SpotsPill n={t.spots} />
          </header>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            {t.stats.map((s) => (
              <div key={s.label} className="flex h-24 flex-col justify-between rounded-xl bg-white p-3.5">
                <dd className="text-2xl font-bold leading-none">{s.value}</dd>
                <dt className="text-xs leading-snug text-neutral-600">{s.label}</dt>
              </div>
            ))}
          </dl>

          <details className="group mt-4 rounded-xl bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange">
              See all benefits
              <Icon name="chevron" className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <ul className="space-y-2.5 border-t border-neutral-200 px-4 py-3 text-sm text-neutral-700">
              {t.benefits.map((b) => (
                <li key={b.text} className="flex items-start gap-2.5">
                  <Icon name={b.icon} className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                  {b.text}
                </li>
              ))}
            </ul>
          </details>

          <a
            href={ENQUIRE_HREF}
            className="mt-5 inline-flex items-center gap-3 self-start rounded-full bg-brand-orange py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            Enquire
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-orange">
              <Icon name="arrow" />
            </span>
          </a>
        </article>
      ))}
    </div>
  );
}

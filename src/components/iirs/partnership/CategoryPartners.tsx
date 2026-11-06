import Icon from "./Icons";
import { categories, categoryIntro, ENQUIRE_HREF } from "./data";

export default function CategoryPartners() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-brand-green sm:text-3xl">Category partnerships</h3>
        <p className="mt-2 text-neutral-600">{categoryIntro}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((c) => (
          <article
            key={c.name}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-mint text-brand-green">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              {c.spots && (
                <span className="rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold text-white">
                  {c.spots}
                </span>
              )}
            </div>

            <h4 className="mt-4 text-xl font-bold text-neutral-900">{c.name}</h4>
            <p className="mt-1 text-sm text-neutral-600">{c.summary}</p>

            {"chips" in c && (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {c.chips.map((chip) => (
                  <li key={chip} className="rounded-full bg-brand-mint px-2.5 py-1 text-xs font-medium text-brand-green">
                    {chip}
                  </li>
                ))}
              </ul>
            )}

            <ul className="mt-4 flex-1 space-y-1.5 text-sm text-neutral-700">
              {c.facts.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={ENQUIRE_HREF}
              className="mt-6 rounded-full border-2 border-brand-orange px-5 py-2 text-center text-sm font-semibold text-brand-orange transition hover:bg-brand-orange hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
            >
              Enquire
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

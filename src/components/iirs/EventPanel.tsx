import Countdown from "./Countdown";

const included = [
  "Conference",
  "Exhibition",
  "International Buyer–Seller Meetings",
  "Industry Networking",
  "Food Street",
];

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 21s7-6.1 7-11.5a7 7 0 1 0-14 0C5 14.9 12 21 12 21zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" strokeLinecap="round" />
    </svg>
  );
}

// frosted panel for heroes: date, venue, live countdown and (optionally) what's included
export default function EventPanel({ showIncluded = false }: { showIncluded?: boolean }) {
  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-white/20 bg-black/35 text-white backdrop-blur-md">
      <div className="grid divide-white/15 sm:grid-cols-2 sm:divide-x">
        <div className="flex items-center gap-4 px-6 py-5 text-left">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-orange">
            <CalendarIcon />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Date</p>
            <p className="text-lg font-bold">20th &amp; 21st January 2027</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-t border-white/15 px-6 py-5 text-left sm:border-t-0">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-orange">
            <PinIcon />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Venue</p>
            <p className="text-lg font-bold leading-snug">Maira Resort &amp; Convention Centre</p>
            <p className="text-sm text-white/80">Raipur, Chhattisgarh</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 px-4 py-5 sm:px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/70">Event starts in</p>
        <Countdown />
      </div>

      {showIncluded && (
        <ul className="flex flex-wrap justify-center gap-x-2 gap-y-2 border-t border-white/15 px-4 py-4 text-xs sm:px-6 sm:text-sm">
          {included.map((i) => (
            <li key={i} className="rounded-full border border-white/25 px-3.5 py-1.5">
              {i}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

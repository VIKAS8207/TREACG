const topTape = [
  "Conference",
  "Exhibition",
  "International Buyer–Seller Meetings",
  "Industry Networking",
  "Food Street",
];

const bottomTape = ["Think Rice, Think India", "20–21 January 2027", "Raipur, Chhattisgarh", "IIRS 2027"];

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="mx-8 h-7 w-7 shrink-0" fill="currentColor" aria-hidden>
      <path d="M12 0c.8 6.8 5.2 11.2 12 12-6.8.8-11.2 5.2-12 12-.8-6.8-5.2-11.2-12-12C6.8 11.2 11.2 6.8 12 0z" />
    </svg>
  );
}

function Track({ items, className }: { items: string[]; className: string }) {
  // two identical halves for a seamless loop
  return (
    <div className={`flex w-max items-center whitespace-nowrap ${className}`}>
      {[0, 1].map((half) => (
        <div key={half} className="flex items-center" aria-hidden={half === 1}>
          {items.map((text) => (
            <span key={text} className="flex items-center">
              <span className="text-2xl font-extrabold uppercase tracking-wide sm:text-3xl">{text}</span>
              <Star />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function MarqueeTapes() {
  return (
    <div className="relative h-44 overflow-hidden bg-white sm:h-56" aria-label="Conference, Exhibition, International Buyer–Seller Meetings, Industry Networking, Food Street">
      {/* both tapes sit slightly wider than the viewport so the rotated ends never show */}
      <div className="absolute -left-[5%] top-1/2 w-[110%] -translate-y-1/2 -rotate-3 bg-brand-green py-4 text-white shadow-lg">
        <Track items={bottomTape} className="animate-tape-right" />
      </div>
      <div className="absolute -left-[5%] top-1/2 w-[110%] -translate-y-1/2 rotate-3 bg-brand-orange py-4 text-white shadow-lg">
        <Track items={topTape} className="animate-tape-left" />
      </div>
    </div>
  );
}

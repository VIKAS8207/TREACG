const highlights = [
  { value: "40+", label: "Speakers" },
  { value: "30+", label: "Sessions" },
  { value: "40+", label: "Stalls" },
  { value: "1500+", label: "Footfall" },
  { value: "30+", label: "Countries participating" },
];

export default function HighlightsSection() {
  return (
    // negative top margin pulls the card up so it straddles the hero's bottom edge
    <section id="highlights" className="relative z-10 -mt-20 scroll-mt-16 px-4 sm:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 rounded-2xl bg-brand-orange px-6 py-8 text-center text-white shadow-xl sm:grid-cols-3 lg:grid-cols-5">
        {highlights.map((h) => (
          <div key={h.label}>
            <p className="text-4xl font-bold">{h.value}</p>
            <p className="mt-1 text-sm font-semibold">{h.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

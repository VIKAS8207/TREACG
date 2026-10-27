const stats = [
  { value: "40+", label: "Stalls" },
  { value: "30+", label: "Countries participating" },
  { value: "40+", label: "Speakers" },
  { value: "1500+", label: "Footfall" },
];

export default function StatsSection() {
  return (
    // negative top margin pulls the card up so it straddles the hero's bottom edge
    <section className="relative z-10 -mt-20 px-4 sm:px-8">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 rounded-2xl bg-brand-orange px-6 py-8 text-center text-white shadow-xl lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-bold">{s.value}</p>
            <p className="mt-1 text-sm font-semibold">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

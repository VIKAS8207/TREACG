export default function SectionHeading({ eyebrow, title, light }: { eyebrow?: string; title: string; light?: boolean }) {
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

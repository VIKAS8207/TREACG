type Orb = {
  /** horizontal centre, in % of the section width: 0 / 100 sit half off the edge, 50 is centred */
  x: number;
  /** vertical centre, in % of the section height */
  top: number;
  /** diameter, in % of the section height */
  size: number;
  tone: "orange" | "green";
};

const rgb = { orange: "232, 119, 34", green: "31, 90, 42" } as const;

// Big soft circular gradients scattered through a section's background.
// Each orb fades to fully transparent at its own edge and is sized to stay inside the section
// (top ± size/2 must stay within 0-100), so it is never sliced by the section boundary.
export default function GradientOrbs({ items }: { items: Orb[] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      {items.map((o, i) => (
        <div
          key={i}
          className="absolute aspect-square rounded-full"
          style={{
            left: `${o.x}%`,
            top: `${o.top}%`,
            height: `${o.size}%`,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(closest-side, rgba(${rgb[o.tone]}, 0.26) 0%, rgba(${rgb[o.tone]}, 0.12) 50%, rgba(${rgb[o.tone]}, 0) 100%)`,
          }}
        />
      ))}
    </div>
  );
}

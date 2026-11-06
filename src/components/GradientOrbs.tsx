type Orb = {
  side: "left" | "right";
  /** vertical centre, in % of the section height */
  top: number;
  /** diameter, in % of the section height */
  size: number;
};

// Big soft circular gradients in a section's left / right background; orange and green alternate.
// Each orb fades to fully transparent at its own edge and is sized to stay inside the section
// (top ± size/2 must stay within 0-100), so it is never sliced by the section boundary.
export default function GradientOrbs({ items }: { items: Orb[] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      {items.map((o, i) => {
        const rgb = i % 2 === 0 ? "232, 119, 34" : "31, 90, 42";
        const shift = o.side === "left" ? "-30%" : "30%";
        return (
          <div
            key={i}
            className="absolute aspect-square rounded-full"
            style={{
              top: `${o.top}%`,
              height: `${o.size}%`,
              [o.side]: 0,
              transform: `translate(${shift}, -50%)`,
              background: `radial-gradient(closest-side, rgba(${rgb}, 0.26) 0%, rgba(${rgb}, 0.12) 50%, rgba(${rgb}, 0) 100%)`,
            }}
          />
        );
      })}
    </div>
  );
}

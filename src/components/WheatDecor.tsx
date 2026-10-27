import { Wheat } from "lucide-react";

type Item = {
  side: "left" | "right";
  /** vertical position inside the section; keep between ~25% and ~75% so icons stay away from the top and bottom */
  top: string;
  size: number;
  rotate: number;
};

// soft decorative wheat icons in a section's left / right margins (hidden on small screens)
export default function WheatDecor({ items }: { items: Item[] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      {items.map((it, i) => (
        <Wheat
          key={i}
          size={it.size}
          strokeWidth={1.5}
          className="absolute text-brand-green opacity-40"
          style={{ top: it.top, [it.side]: "1.5%", transform: `rotate(${it.rotate}deg)` }}
        />
      ))}
    </div>
  );
}

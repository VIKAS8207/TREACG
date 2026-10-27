const subNav = [
  { label: "Highlights", href: "#highlights" },
  { label: "Why Partner", href: "#why-partner" },
  { label: "Partnership Opportunities", href: "#partnership" },
  { label: "Contact", href: "#contact" },
];

export default function SectionNav() {
  return (
    <div className="sticky top-0 z-30 border-b border-neutral-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between gap-4 px-6 py-3 lg:px-20">
        <ul className="flex gap-6 overflow-x-auto text-sm font-semibold text-brand-green">
          {subNav.map((n) => (
            <li key={n.href} className="shrink-0">
              <a href={n.href} className="hover:text-brand-orange">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="shrink-0 rounded-sm bg-brand-orange px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
        >
          Partner with us
        </a>
      </div>
    </div>
  );
}

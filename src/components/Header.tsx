import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#", children: ["Our Story", "Leadership", "Members"] },
  { label: "Rice Industry", href: "#", children: ["Overview", "Production", "Exports"] },
  { label: "GI Rice Variety", href: "#", children: ["Chhattisgarh Rice", "Aromatic Varieties"] },
  { label: "Global Dishes", href: "#" },
  { label: "Statistical Data", href: "#" },
  { label: "Events & Activities", href: "#", children: ["IIRS 2027", "Past Events"] },
];

const partners = [
  { name: "APEDA", className: "text-lg font-bold text-green-700" },
  { name: "IIRS", className: "text-3xl font-extrabold text-red-600" },
  { name: "FICCI", className: "text-xl font-semibold text-orange-600" },
  { name: "CII", className: "text-3xl font-black italic text-blue-800" },
  { name: "TPCI", className: "text-3xl font-black text-neutral-800" },
];

const socials = [
  {
    label: "X",
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Facebook",
    d: "M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.6V13h2.8v8z",
  },
  {
    label: "LinkedIn",
    d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z",
  },
  {
    label: "Instagram",
    d: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  },
];

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  return (
    <header>
      {/* partner logos + CTAs */}
      <div className="bg-brand-mint">
        <div className="mx-auto flex max-w-[1920px] flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-20">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
            {partners.map((p) => (
              <span key={p.name} className={p.className}>
                {p.name}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <Link
              href="/iirs-2027"
              className="rounded-sm border-2 border-brand-orange bg-brand-orange px-8 py-3 font-semibold text-white transition hover:brightness-110"
            >
              IIRS 2027
            </Link>
            <Link
              href="/register"
              className="rounded-sm border-2 border-brand-orange px-8 py-3 font-semibold text-brand-orange transition hover:bg-brand-orange hover:text-white"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* social strip */}
      <div className="bg-brand-orange">
        <div className="mx-auto flex max-w-[1920px] items-center justify-end gap-5 px-6 py-2 text-white lg:px-20">
          <span className="font-semibold">Follow IIRS On:</span>
          {socials.map((s) => (
            <Link key={s.label} href="#" aria-label={s.label} className="hover:opacity-80">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d={s.d} />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* main nav */}
      <nav className="bg-brand-green text-white">
        <div className="mx-auto flex max-w-[1920px] items-center justify-between gap-6 px-6 py-3 lg:px-20">
          <Link href="/" className="flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-amber-300/70 text-[10px] font-bold text-amber-200">
              TREACG
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-bold">TREACG</span>
              <span className="block text-sm font-semibold">The Rice Exporters</span>
              <span className="block text-sm font-semibold">Association C.G.</span>
            </span>
          </Link>

          {/* desktop */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <Link href={item.href} className="flex items-center gap-1 py-4 font-semibold hover:text-amber-200">
                  {item.label}
                  {item.children && <Chevron />}
                </Link>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full z-20 min-w-48 rounded-b bg-brand-green py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((c) => (
                      <li key={c}>
                        <Link href="#" className="block px-5 py-2 text-sm hover:bg-white/10">
                          {c}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* mobile */}
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded border border-white/40 px-3 py-2 text-sm font-semibold">
              Menu
            </summary>
            <ul className="absolute right-0 top-full z-20 mt-2 w-56 rounded bg-brand-green py-2 shadow-lg">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="block px-5 py-2 text-sm font-semibold hover:bg-white/10">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </nav>

      {/* notifications ticker */}
      <div className="flex items-center overflow-hidden bg-brand-orange text-sm font-semibold text-white">
        <span className="z-10 shrink-0 bg-brand-orange py-2 pr-6">Notifications:</span>
        <p className="animate-marquee whitespace-nowrap py-2">
          Expo to be organised on 20-21 January 2027 in Raipur, Chhattisgarh, India
        </p>
      </div>
    </header>
  );
}

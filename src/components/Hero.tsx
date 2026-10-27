import Link from "next/link";

function Pill({ icon, children }: { icon: "calendar" | "pin"; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-3 rounded-md border border-white/30 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm sm:text-base">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        {icon === "calendar" ? (
          <path d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" strokeLinecap="round" />
        ) : (
          <path d="M12 21s7-6.1 7-11.5a7 7 0 1 0-14 0C5 14.9 12 21 12 21zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" strokeLinecap="round" />
        )}
      </svg>
      {children}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] flex-1 items-center justify-center overflow-hidden bg-slate-700 text-center text-white">
      {/* swap for a real photo/video: put file in /public and use next/image or <video> here */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,#8b93a1_0%,#4a5160_70%,#2b303b_100%)]" />
      <div className="absolute inset-0 -z-10 bg-black/30" />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24">
        <p className="text-base font-medium sm:text-lg">
          In Association with APEDA &amp; Ministry of Commerce &amp; Industry
        </p>
        <h1 className="text-5xl font-bold leading-tight sm:text-7xl">
          India International
          <span className="block text-amber-400">Rice Summit 2027</span>
        </h1>
        <p className="text-xl sm:text-2xl">
          Shaping the Future of Rice Trade, Innovation, and Sustainability
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Pill icon="calendar">January 20-21, 2027</Pill>
          <Pill icon="pin">Raipur, Chhattisgarh, India</Pill>
        </div>
        <Link
          href="#"
          className="mt-4 rounded-sm bg-brand-orange px-8 py-3 text-lg font-semibold transition hover:brightness-110"
        >
          Register Now
        </Link>
      </div>
    </section>
  );
}

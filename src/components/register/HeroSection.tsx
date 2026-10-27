import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../public/images/TREACG wall.png";
import EventPanel from "@/components/iirs/EventPanel";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-700 text-center text-white">
      <Image src={heroImage} alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 pb-36 pt-24">
        <p className="text-base font-medium sm:text-lg">3rd Edition</p>
        <h1 className="text-5xl font-bold leading-tight sm:text-7xl">
          Join <span className="text-amber-400">IIRS 2027</span>
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-white/90">
          The India International Rice Summit brings together exporters, millers, international buyers, policymakers,
          diplomatic representatives, researchers and allied industries, with a focus on unlocking the value and export
          potential of India&apos;s non-basmati rice sector.
        </p>
        <EventPanel />
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Link
            href="/register/form"
            className="rounded-sm bg-brand-orange px-8 py-3 text-lg font-semibold transition hover:brightness-110"
          >
            Register Now
          </Link>
          <a
            href="#tickets"
            className="rounded-sm border-2 border-white px-8 py-3 text-lg font-semibold transition hover:bg-white hover:text-brand-green"
          >
            View Ticket Plans
          </a>
        </div>
      </div>
    </section>
  );
}

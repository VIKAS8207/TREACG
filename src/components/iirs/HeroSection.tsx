import Image from "next/image";
import heroImage from "../../../public/images/new event 2.png";
import logo from "../../../public/images/iirs-footer.png";
import Countdown from "./Countdown";

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Summit-style hero: the illustrated scene fills the section, everything sits on the sky at the top
// (logo, "LIVE IN" line, CTAs, open countdown numbers) and the port and people stay visible underneath.
export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-sky-300 text-center text-black min-[1280px]:h-[780px]">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-bottom"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-44 pt-12 sm:pt-14 min-[1280px]:pb-0">
        {/* logo replaces the text title; the h1 keeps the event name for screen readers and search */}
        <h1>
          <Image
            src={logo}
            alt="India International Rice Summit 2027 (IIRS 2027)"
            priority
            sizes="(min-width: 640px) 320px, 260px"
            className="mx-auto h-auto w-[260px] sm:w-[320px]"
          />
        </h1>

        <p className="mt-6 text-2xl font-extrabold uppercase tracking-wide sm:text-3xl">
          Live in Raipur <span className="mx-2 text-brand-orange">|</span> 20–21 January 2027
        </p>
        <p className="mt-2 text-base font-medium sm:text-lg">A Global Event to Showcase, Connect and Collaborate</p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-black py-1.5 pl-7 pr-1.5 text-sm font-semibold text-white transition hover:bg-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Become a Partner
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
              <Arrow />
            </span>
          </a>
          <a
            href="#why-partner"
            className="inline-flex items-center rounded-full border-2 border-black px-7 py-[11px] text-sm font-semibold transition hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Why Partner?
          </a>
        </div>

        <div className="mt-9 w-full">
          <Countdown />
        </div>
      </div>
    </section>
  );
}

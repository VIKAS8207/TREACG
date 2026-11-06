import Image from "next/image";
import heroImage from "../../../public/images/new event.png";
import logo from "../../../public/images/iirs-footer.png";
import EventPanel from "./EventPanel";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-700 text-center text-white">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 pb-36 pt-24">
        <p className="text-base font-medium sm:text-lg">3rd Edition</p>
        {/* logo replaces the text title; the h1 keeps the event name for screen readers and search */}
        <h1>
          <Image
            src={logo}
            alt="India International Rice Summit 2027 (IIRS 2027)"
            priority
            sizes="(min-width: 640px) 420px, 300px"
            className="mx-auto h-auto w-[300px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] sm:w-[420px]"
          />
        </h1>
        <p className="text-xl sm:text-2xl">A Global Event to Showcase, Connect and Collaborate</p>
        <p className="text-lg font-semibold text-amber-400">Think Rice, Think India</p>
        <EventPanel showIncluded />
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <a href="#contact" className="rounded-sm bg-brand-orange px-8 py-3 text-lg font-semibold transition hover:brightness-110">
            Become a Partner
          </a>
          <a
            href="#why-partner"
            className="rounded-sm border-2 border-white px-8 py-3 text-lg font-semibold transition hover:bg-white hover:text-brand-green"
          >
            Why Partner?
          </a>
        </div>
      </div>
    </section>
  );
}

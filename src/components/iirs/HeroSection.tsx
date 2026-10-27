import Image from "next/image";
import heroImage from "../../../public/images/TREACG wall.png";

const included = [
  "Conference",
  "Exhibition",
  "International Buyer–Seller Meetings",
  "Industry Networking",
  "Food Street",
];

export default function HeroSection() {
  return (
    <section className="relative isolate mx-4 mt-4 overflow-hidden rounded-3xl bg-slate-700 text-center text-white sm:mx-8 lg:mx-12">
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
        <h1 className="text-5xl font-bold leading-tight sm:text-7xl">
          India International
          <span className="block text-amber-400">Rice Summit 2027</span>
          <span className="block text-3xl sm:text-4xl">(IIRS 2027)</span>
        </h1>
        <p className="text-xl sm:text-2xl">A Global Event to Showcase, Connect and Collaborate</p>
        <p className="text-lg font-semibold text-amber-400">Think Rice, Think India</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold sm:text-base">
          <span className="rounded-md border border-white/30 bg-slate-900/50 px-6 py-3 backdrop-blur-sm">
            20th &amp; 21st January 2027
          </span>
          <span className="rounded-md border border-white/30 bg-slate-900/50 px-6 py-3 backdrop-blur-sm">
            Maira Resort &amp; Convention Centre, Raipur, Chhattisgarh
          </span>
        </div>
        <ul className="flex flex-wrap justify-center gap-2 text-sm">
          {included.map((i) => (
            <li key={i} className="rounded-full bg-white/15 px-4 py-1.5">
              {i}
            </li>
          ))}
        </ul>
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

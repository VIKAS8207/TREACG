import Countdown from "./Countdown";

// frosted panel for heroes: the live countdown to the event
export default function EventPanel() {
  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-white/60 bg-white/70 px-4 py-8 text-center text-black backdrop-blur-md sm:px-6">
      <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-700">Event starts in</p>
      <Countdown />
    </div>
  );
}

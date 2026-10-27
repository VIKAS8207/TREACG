import Link from "next/link";
import WheatDecor from "@/components/WheatDecor";

export default function CtaSection() {
  return (
    <section className="bg-white relative overflow-hidden">
      <WheatDecor items={[{ side:"left", top:"42%", size:90, rotate:-25 }, { side:"right", top:"55%", size:120, rotate:20 }]} />
      <div className="relative mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-2xl bg-orange-100/70 px-6 py-14 text-center sm:px-10">
          <h2 className="text-3xl font-bold text-brand-green sm:text-4xl">Ready to join IIRS 2027?</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-orange" />
          <p className="mx-auto mt-5 max-w-xl text-neutral-700">
            Register now to attend, or enquire about ticket plans above.
          </p>
          <Link
            href="/register/form"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-orange py-2 pl-8 pr-2 text-lg font-semibold text-white transition hover:brightness-110"
          >
            Register Now
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-orange">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

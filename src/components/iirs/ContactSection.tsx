import EnquiryForm from "@/components/EnquiryForm";

const contacts = [
  { label: "Phone", value: "+91 7400945550", href: "tel:+917400945550" },
  { label: "Email", value: "info@thericeexporters.org", href: "mailto:info@thericeexporters.org" },
  { label: "Website", value: "www.treacg.in", href: "https://www.treacg.in" },
];

function PaperPlane() {
  return (
    <svg viewBox="0 0 260 170" className="w-full max-w-xs text-neutral-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden>
      <path d="M10 62 250 8 160 160 126 98z" />
      <path d="M250 8 126 98M126 98l-8 52 42 10" />
      <path d="M8 150c40 12 80-6 112-52" className="text-brand-orange" stroke="currentColor" strokeDasharray="4 6" />
    </svg>
  );
}

function ApprovalStamp() {
  // red rubber-stamp seal: double ring, widely spaced circular text, big tick
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-24 w-24 -rotate-12 text-red-600 opacity-90 sm:h-32 sm:w-32"
      fill="none"
      stroke="currentColor"
      role="img"
      aria-label="Stamp of approval"
    >
      <defs>
        <path id="stamp-ring" d="M100 100m-68 0a68 68 0 1 1 136 0a68 68 0 1 1-136 0" />
      </defs>
      <circle cx="100" cy="100" r="94" strokeWidth="5" />
      <circle cx="100" cy="100" r="86" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="50" strokeWidth="1.5" />
      <text fill="currentColor" stroke="none" fontSize="14" fontWeight="700">
        {/* textLength spreads the letters evenly around the full ring */}
        <textPath href="#stamp-ring" textLength="420" lengthAdjust="spacing">
          IIRS 2027 · TREACG ·
        </textPath>
      </text>
      <path d="M72 102l20 20 38-44" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative rounded-2xl bg-orange-100/70 p-6 sm:p-10">
          <div className="absolute -right-3 -top-8 sm:-right-6 sm:-top-10">
            <ApprovalStamp />
          </div>
          <div className="grid gap-10 lg:grid-cols-[5fr_7fr]">
            {/* left: pitch */}
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl">
                Let&apos;s Grow Together. Partner with IIRS 2027.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-700">
                For partnership &amp; sponsorship enquiries, write to The Rice Exporters Association Chhattisgarh
                (TREACG).
              </p>
              <div className="mt-10 hidden lg:block">
                <PaperPlane />
              </div>
            </div>

            {/* right: form panel */}
            <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
              <EnquiryForm />
            </div>
          </div>

          {/* contact row */}
          <div className="mt-12 grid gap-6 text-center sm:grid-cols-3">
            {contacts.map((c) => (
              <div key={c.label}>
                <p className="text-xs text-neutral-500">{c.label}</p>
                <a href={c.href} className="mt-1 inline-block text-lg font-medium text-neutral-900 hover:text-brand-orange">
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

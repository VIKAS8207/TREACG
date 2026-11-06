import EnquiryForm, { type EnquiryFormProps } from "@/components/EnquiryForm";
import Image from "next/image";
import heroImage from "../../../public/images/TREACG wall.png";
import GradientOrbs from "@/components/GradientOrbs";

const contacts = [
  { label: "Phone", value: "+91 7400945550", href: "tel:+917400945550" },
  { label: "Email", value: "info@thericeexporters.org", href: "mailto:info@thericeexporters.org" },
  { label: "Website", value: "www.treacg.in", href: "https://www.treacg.in" },
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactSection({
  heading = "Let's Grow Together",
  description = "Connect with industry leaders, millers, and global buyers. Sign up to secure your partnership.",
  form,
}: {
  heading?: string;
  description?: string;
  form?: EnquiryFormProps;
}) {
  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-white px-4 py-20 md:px-8">
      <GradientOrbs items={[{ side:"left", top:45, size:90 }, { side:"right", top:56, size:80 }]} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl lg:grid-cols-[5fr_7fr]">
          {/* left: message on solid green, photo rises from the bottom and fades out towards the top */}
          <div className="relative isolate flex min-h-[520px] flex-col bg-brand-green p-8 text-white md:p-12 lg:min-h-[640px]">
            <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-[58%]">
              <Image src={heroImage} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-bottom" />
              <div className="absolute inset-0 bg-linear-to-b from-brand-green from-0% via-brand-green/65 via-40% to-transparent" />
            </div>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">{heading}</h2>
            <p className="mt-3 text-xl font-semibold text-amber-400 md:text-2xl">Partner with IIRS 2027.</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/80">{description}</p>

            <a
              href="#why-partner"
              className="mt-8 inline-flex items-center gap-3 self-start rounded-full bg-brand-orange py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn More
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-orange">
                <Arrow />
              </span>
            </a>
          </div>

          {/* right: the form */}
          <div className="flex flex-col justify-center bg-white p-8 md:p-12">
            <EnquiryForm {...form} />
          </div>
        </div>

        {/* contact details */}
        <div className="mt-14 grid gap-6 text-center sm:grid-cols-3">
          {contacts.map((c) => (
            <div key={c.label}>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-orange">{c.label}</p>
              <a href={c.href} className="inline-block text-lg font-medium text-neutral-900 transition-colors hover:text-brand-orange">
                {c.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

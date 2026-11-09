import TicketPlans from "@/components/TicketPlans";
import SectionHeading from "@/components/iirs/SectionHeading";
import GradientOrbs from "@/components/GradientOrbs";

export default function TicketsSection() {
  return (
    <section id="tickets" className="scroll-mt-4 bg-white relative overflow-hidden">
      <GradientOrbs items={[{ x:50, top:48, size:90, tone:"green" }, { x:0, top:56, size:60, tone:"orange" }]} />
      <div className="relative mx-auto max-w-6xl px-6 pb-24">
        <SectionHeading eyebrow="Your pass to IIRS 2027" title="Ticket Plans" />
        <p className="-mt-4 mb-12 text-center text-lg font-semibold text-brand-orange">
          Choose a plan and send us your enquiry.
        </p>
        <TicketPlans />
      </div>
    </section>
  );
}

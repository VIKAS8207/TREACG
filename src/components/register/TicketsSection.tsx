import TicketPlans from "@/components/TicketPlans";
import SectionHeading from "@/components/iirs/SectionHeading";
import WheatDecor from "@/components/WheatDecor";

export default function TicketsSection() {
  return (
    <section id="tickets" className="scroll-mt-4 bg-white relative overflow-hidden">
      <WheatDecor items={[{ side:"left", top:"38%", size:120, rotate:15 }, { side:"right", top:"62%", size:100, rotate:-30 }]} />
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

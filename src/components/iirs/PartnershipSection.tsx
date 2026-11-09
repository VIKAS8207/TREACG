import SectionHeading from "./SectionHeading";
import GradientOrbs from "@/components/GradientOrbs";
import CoSponsorCard from "./partnership/CoSponsorCard";
import TierCards from "./partnership/TierCards";
import CategoryPartners from "./partnership/CategoryPartners";

export default function PartnershipSection() {
  return (
    <section id="partnership" className="scroll-mt-16 bg-white relative overflow-hidden">
      <GradientOrbs items={[{ x:50, top:46, size:70, tone:"orange" }, { x:100, top:62, size:76, tone:"green" }]} />
      <div className="relative mx-auto max-w-[1920px] space-y-16 px-6 pb-24 lg:px-20">
        <div className="space-y-5">
          <SectionHeading eyebrow="Become a partner" title="Partnership Opportunities" />
          <CoSponsorCard />
          <TierCards />
        </div>
        <CategoryPartners />
      </div>
    </section>
  );
}

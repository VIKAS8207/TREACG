import type { Metadata } from "next";
import Header from "@/components/Header";
import MarqueeTapes from "@/components/MarqueeTapes";
import SectionNav from "@/components/iirs/SectionNav";
import HeroSection from "@/components/iirs/HeroSection";
import HighlightsSection from "@/components/iirs/HighlightsSection";
import GlimpseSection from "@/components/iirs/GlimpseSection";
import WhyPartnerSection from "@/components/iirs/WhyPartnerSection";
import PartnershipSection from "@/components/iirs/PartnershipSection";
import ContactSection from "@/components/iirs/ContactSection";
import IirsFooter from "@/components/iirs/IirsFooter";

export const metadata: Metadata = {
  title: "IIRS 2027 | India International Rice Summit, 3rd Edition",
  description:
    "India International Rice Summit 2027 - A Global Event to Showcase, Connect and Collaborate. 20-21 January 2027, Raipur, Chhattisgarh.",
};

export default function Iirs2027Page() {
  return (
    <>
      <Header />
      <SectionNav />
      <main className="flex-1 scroll-smooth">
        <HeroSection />
        <HighlightsSection />
        <MarqueeTapes />
        <GlimpseSection />
        <WhyPartnerSection />
        <PartnershipSection />
        <ContactSection />
      </main>
      <IirsFooter />
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import IirsFooter from "@/components/iirs/IirsFooter";
import HeroSection from "@/components/register/HeroSection";
import StatsSection from "@/components/register/StatsSection";
import ConnectSection from "@/components/register/ConnectSection";
import TicketsSection from "@/components/register/TicketsSection";
import CtaSection from "@/components/register/CtaSection";

export const metadata: Metadata = {
  title: "Join IIRS 2027",
  description:
    "Join the India International Rice Summit 2027: meet exporters, millers and international buyers, and explore ticket plans.",
};

export default function JoinPage() {
  return (
    <>
      <Header />
      <main className="flex-1 scroll-smooth">
        <HeroSection />
        <StatsSection />
        <ConnectSection />
        <TicketsSection />
        <CtaSection />
      </main>
      <IirsFooter />
    </>
  );
}

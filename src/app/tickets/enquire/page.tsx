import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import IirsFooter from "@/components/iirs/IirsFooter";
import ContactSection from "@/components/iirs/ContactSection";
import { plans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Ticket Enquiry | IIRS 2027",
};

// searchParams is runtime data, so it is read inside <Suspense> to keep the shell prerenderable
async function TicketEnquiry({ searchParams }: Pick<PageProps<"/tickets/enquire">, "searchParams">) {
  const { plan } = await searchParams;
  const requested = Array.isArray(plan) ? plan[0] : plan;
  // only accept known plan names
  const selected = plans.find((p) => p.name === requested)?.name ?? "";
  return (
    <ContactSection
      heading="Enquire about your IIRS 2027 ticket."
      description="Tell us which plan you are interested in and the TREACG team will get back to you."
      form={{ choiceLabel: "Ticket plan", choices: plans.map((p) => p.name), selected }}
    />
  );
}

export default function TicketEnquiryPage({ searchParams }: PageProps<"/tickets/enquire">) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Suspense fallback={<div className="mx-auto my-24 h-[560px] max-w-6xl animate-pulse rounded-2xl bg-orange-100/70" />}>
          <TicketEnquiry searchParams={searchParams} />
        </Suspense>
      </main>
      <IirsFooter />
    </>
  );
}

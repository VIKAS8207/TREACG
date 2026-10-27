import type { Metadata } from "next";
import Header from "@/components/Header";
import TicketEnquiryForm from "@/components/TicketEnquiryForm";
import { PageShell } from "@/components/form-parts";
import { plans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Ticket Enquiry | IIRS 2027",
};

export default async function TicketEnquiryPage({ searchParams }: PageProps<"/tickets/enquire">) {
  const { plan } = await searchParams;
  const requested = Array.isArray(plan) ? plan[0] : plan;
  // only accept known plan names
  const selected = plans.find((p) => p.name === requested)?.name ?? "";

  return (
    <>
      <Header />
      <PageShell title="Ticket Enquiry" back={{ href: "/tickets", label: "Back to Ticket Plans" }}>
        <div className="rounded-md bg-white p-6 shadow-sm sm:p-8">
          <TicketEnquiryForm plan={selected} />
        </div>
      </PageShell>
    </>
  );
}

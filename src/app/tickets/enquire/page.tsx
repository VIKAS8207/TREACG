import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import TicketEnquiryForm from "@/components/TicketEnquiryForm";
import { PageShell } from "@/components/form-parts";
import { plans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Ticket Enquiry | IIRS 2027",
};

// searchParams is runtime data, so it is read inside <Suspense> to keep the shell prerenderable
async function EnquiryForm({ searchParams }: Pick<PageProps<"/tickets/enquire">, "searchParams">) {
  const { plan } = await searchParams;
  const requested = Array.isArray(plan) ? plan[0] : plan;
  // only accept known plan names
  const selected = plans.find((p) => p.name === requested)?.name ?? "";
  return <TicketEnquiryForm plan={selected} />;
}

export default function TicketEnquiryPage({ searchParams }: PageProps<"/tickets/enquire">) {
  return (
    <>
      <Header />
      <PageShell title="Ticket Enquiry" back={{ href: "/tickets", label: "Back to Ticket Plans" }}>
        <div className="rounded-md bg-white p-6 shadow-sm sm:p-8">
          <Suspense fallback={<div className="h-80 animate-pulse rounded bg-neutral-100" />}>
            <EnquiryForm searchParams={searchParams} />
          </Suspense>
        </div>
      </PageShell>
    </>
  );
}

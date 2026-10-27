import type { Metadata } from "next";
import Header from "@/components/Header";
import TicketPlans from "@/components/TicketPlans";

export const metadata: Metadata = {
  title: "Ticket Plans | IIRS 2027",
};

export default function TicketsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">Your pass to IIRS 2027</p>
            <h1 className="mt-4 text-4xl font-bold text-brand-green sm:text-5xl">Ticket Plans</h1>
            <p className="mt-4 text-lg font-semibold text-brand-orange">Choose a plan and send us your enquiry.</p>
          </div>
          <TicketPlans />
        </div>
      </main>
    </>
  );
}

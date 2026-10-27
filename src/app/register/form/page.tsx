import type { Metadata } from "next";
import Header from "@/components/Header";
import RegisterForm from "@/components/RegisterForm";
import { PageShell } from "@/components/form-parts";

export const metadata: Metadata = {
  title: "Register for IIRS 2027",
};

export default function RegisterFormPage() {
  return (
    <>
      <Header />
      <PageShell title="Register for IIRS 2027" back={{ href: "/register", label: "Back" }}>
        <div className="rounded-md bg-white p-6 shadow-sm sm:p-8">
          <RegisterForm />
        </div>
      </PageShell>
    </>
  );
}

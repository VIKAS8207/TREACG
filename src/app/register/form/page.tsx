import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import IirsFooter from "@/components/iirs/IirsFooter";
import SectionHeading from "@/components/iirs/SectionHeading";
import { IIRS_FORM_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Register for IIRS 2027",
};

export default function RegisterFormPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <SectionHeading eyebrow="IIRS 2027 · 20–21 January 2027" title="Register for IIRS 2027" />

          <div className="rounded-2xl bg-orange-100/70 p-3 sm:p-6">
            {IIRS_FORM_URL ? (
              <iframe
                src={IIRS_FORM_URL}
                title="IIRS 2027 registration form"
                className="h-[900px] w-full rounded-xl bg-white"
              />
            ) : (
              <div className="grid h-[480px] place-items-center rounded-xl bg-white px-6 text-center">
                <div>
                  <p className="text-xl font-bold text-brand-green">IIRS registration form</p>
                  <p className="mt-2 text-neutral-600">The registration form will appear here.</p>
                </div>
              </div>
            )}
          </div>

          {IIRS_FORM_URL && (
            <p className="mt-6 text-center text-sm text-neutral-600">
              Form not loading?{" "}
              <a href={IIRS_FORM_URL} target="_blank" rel="noreferrer" className="font-semibold text-brand-orange hover:underline">
                Open it in a new tab
              </a>
              .
            </p>
          )}

          <p className="mt-8 text-center text-sm">
            <Link href="/register" className="font-semibold text-brand-green hover:text-brand-orange">
              ← Back to Join IIRS 2027
            </Link>
          </p>
        </div>
      </main>
      <IirsFooter />
    </>
  );
}

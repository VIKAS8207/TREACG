import Link from "next/link";

export type Errors = Record<string, string>;

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_RE = /^\+\d[\d\s-]{6,16}$/;

export const inputCls =
  "w-full rounded-sm border bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30";

export const border = (err?: string) => (err ? "border-red-500" : "border-neutral-300");

export function Field({
  label,
  required,
  error,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block text-sm font-semibold text-neutral-800 ${className}`}>
      {label}
      {required && <span className="text-red-600"> *</span>}
      <span className="mt-1 block font-normal">{children}</span>
      {error && (
        <span role="alert" className="mt-1 block text-xs font-medium text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}

export function Success({ message }: { message: string }) {
  return (
    <div className="py-6 text-center">
      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-brand-mint text-brand-green">
        <svg viewBox="0 0 20 20" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path d="m4 10.5 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-lg font-semibold text-brand-green">{message}</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-sm bg-brand-orange px-8 py-3 font-semibold text-white transition hover:brightness-110"
      >
        Back to Home
      </Link>
    </div>
  );
}

export function PageShell({
  title,
  subtitle,
  back,
  wide,
  children,
}: {
  title: string;
  subtitle?: string;
  back?: { href: string; label: string };
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 bg-brand-mint">
      <div className={`mx-auto px-6 py-16 ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
        {back && (
          <Link
            href={back.href}
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-orange"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M12.5 4 6.5 10l6 6M7 10h8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {back.label}
          </Link>
        )}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-brand-green">{title}</h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-orange" />
          {subtitle && <p className="mt-4 text-neutral-700">{subtitle}</p>}
        </div>
        {children}
      </div>
    </main>
  );
}

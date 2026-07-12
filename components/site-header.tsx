import Link from "next/link";
import { CalendarCheck, Menu } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-clinic/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="KineticCare home">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-palm text-lg font-bold text-white">KC</span>
          <span>
            <span className="block font-serif text-xl font-bold leading-none text-ink">KineticCare</span>
            <span className="text-xs uppercase tracking-[0.2em] text-palm">Virtual physio Nigeria</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/75 md:flex">
          <Link href="/book" className="hover:text-palm">Book</Link>
          <Link href="/pricing" className="hover:text-palm">Pricing</Link>
          <Link href="/trust-safety" className="hover:text-palm">Trust and safety</Link>
          <Link href="/portal" className="hover:text-palm">Patient portal</Link>
          <Link href="/clinician" className="hover:text-palm">Clinician portal</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/book"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-white transition hover:bg-palm"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book
          </Link>
          <button className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}

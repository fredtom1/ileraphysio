import Link from "next/link";
import { LogoMark } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="text-leaf" />
              <span className="leading-none">
                <span className="block font-serif text-xl font-semibold">Ìlera Physio</span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-leaf/80">
                  Virtual physiotherapy
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
              Specialist physiotherapy for Nigeria and the diaspora — verified clinicians, safety-first booking, Naira
              pricing, and a clear home plan after every session.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-leaf/70">Clinic</p>
            <div className="mt-4 grid gap-2.5 text-sm text-white/70">
              <Link href="/book" className="transition hover:text-white">
                Book a session
              </Link>
              <Link href="/pricing" className="transition hover:text-white">
                Pricing
              </Link>
              <Link href="/trust-safety" className="transition hover:text-white">
                Trust &amp; safety
              </Link>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-leaf/70">Portals</p>
            <div className="mt-4 grid gap-2.5 text-sm text-white/70">
              <Link href="/portal" className="transition hover:text-white">
                Patient portal
              </Link>
              <Link href="/clinician" className="transition hover:text-white">
                Clinician portal
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ìlera Physio. Not for emergencies — seek urgent in-person care when symptoms feel unsafe.</p>
          <p className="font-mono uppercase tracking-[0.16em]">Built around Nigerian digital-health realities</p>
        </div>
      </div>
    </footer>
  );
}

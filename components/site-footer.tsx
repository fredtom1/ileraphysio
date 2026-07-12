import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-serif text-2xl font-bold">KineticCare</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
            A starter MVP for a Nigerian virtual physiotherapy marketplace. Clinical workflows, legal policies, and provider
            integrations must be reviewed before launch.
          </p>
        </div>
        <div>
          <p className="font-semibold">Clinic</p>
          <div className="mt-3 grid gap-2 text-sm text-white/70">
            <Link href="/book">Book a session</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/trust-safety">Trust and safety</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Portals</p>
          <div className="mt-3 grid gap-2 text-sm text-white/70">
            <Link href="/portal">Patient portal</Link>
            <Link href="/clinician">Clinician portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

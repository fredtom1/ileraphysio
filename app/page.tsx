import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarDays, CreditCard, FileText, ShieldCheck, Video } from "lucide-react";
import { clinicians, researchSources, specialties } from "@/lib/data";
import { formatNaira } from "@/lib/utils";

export default function HomePage() {
  return (
    <main>
      <section className="hero-wash border-b border-line">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-palm/25 bg-surface px-3.5 py-1.5 text-[13px] font-medium text-palm-strong shadow-soft">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-palm text-white">
                <ShieldCheck className="h-2.5 w-2.5" aria-hidden="true" />
              </span>
              Verified specialists · Nigeria &amp; the diaspora
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-[2.75rem] font-semibold leading-[1.04] text-ink md:text-6xl">
              Book the right physiotherapist <span className="text-palm">without a hospital visit.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Find a verified specialist, complete safety screening, pay in Naira, join a video consultation, and leave
              with a clear home plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-[15px] font-semibold text-white shadow-soft transition hover:bg-palm-strong active:translate-y-px"
              >
                Start booking <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/trust-safety"
                className="inline-flex h-12 items-center rounded-lg border border-line bg-surface px-6 text-[15px] font-semibold text-ink transition hover:border-ink/40"
              >
                See safety checks
              </Link>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["4", "launch specialties"],
                ["WAT", "timezone-first"],
                ["NDPA", "privacy model"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-line bg-surface/70 p-4">
                  <dt className="font-serif text-2xl font-semibold text-ink">{value}</dt>
                  <dd className="mt-1 text-sm text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-palm/5 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-lift ring-1 ring-ink/5">
              <Image
                src="/hero-virtual-physio.png"
                alt="Patient following a virtual physiotherapy session at home"
                width={1792}
                height={1024}
                priority
                className="h-full min-h-[400px] w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl border border-line bg-surface/90 p-4 shadow-soft backdrop-blur">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-leaf text-palm-strong">
                  <CalendarDays className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-palm">Next safe slot</p>
                  <p className="truncate text-sm text-ink">
                    MSK with Tomi Adebayo · Tue 18:30 WAT · {formatNaira(18000)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-palm">Sub-specialties</p>
            <h2 className="mt-2 font-serif text-4xl font-bold">Choose the right clinical lane.</h2>
          </div>
          <Link href="/book" className="inline-flex items-center gap-2 font-bold text-palm">
            Match me with next available <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {specialties.map((specialty) => (
            <Link key={specialty.slug} href={`/specialties/${specialty.slug}`} className={`${specialty.accent} rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-soft`}>
              <p className="font-serif text-2xl font-bold">{specialty.shortName}</p>
              <p className="mt-3 text-sm leading-6 text-ink/70">{specialty.summary}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-palm">
                Explore <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-palm">How it works</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              [CalendarDays, "Choose", "Select a specialty, clinician, or next available slot."],
              [FileText, "Screen", "Complete intake and red-flag triage before payment."],
              [CreditCard, "Pay", "Checkout path prepared for Paystack or Flutterwave."],
              [Video, "Consult", "Join video, receive notes, and follow your home plan."]
            ].map(([Icon, title, text]) => {
              const StepIcon = Icon as typeof CalendarDays;
              return (
                <div key={String(title)} className="rounded-lg border border-ink/10 p-5">
                  <StepIcon className="h-6 w-6 text-palm" aria-hidden="true" />
                  <p className="mt-4 font-serif text-2xl font-bold">{String(title)}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{String(text)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-palm">Featured clinicians</p>
            <h2 className="mt-2 font-serif text-4xl font-bold">Verified before they go live.</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {clinicians.map((clinician) => (
            <Link key={clinician.id} href={`/clinicians/${clinician.id}`} className="rounded-lg border border-ink/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-palm text-xl font-bold text-white">
                {clinician.name.split(" ").map((part) => part[0]).join("")}
              </div>
              <p className="mt-4 font-serif text-2xl font-bold">{clinician.name}</p>
              <p className="mt-1 text-sm text-ink/65">{clinician.credential}</p>
              <p className="mt-4 text-sm font-bold text-palm">{formatNaira(clinician.fee)} / session</p>
              <p className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/60">
                <BadgeCheck className="h-4 w-4 text-palm" aria-hidden="true" /> credentials reviewed
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Market notes</p>
            <h2 className="mt-3 font-serif text-4xl font-bold">Built around Nigerian digital health realities.</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {researchSources.map((source) => (
              <a key={source.label} href={source.url} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/75">
                <span className="block font-bold text-white">{source.label}</span>
                {source.finding}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarDays, CreditCard, FileText, Video } from "lucide-react";
import { clinicians, researchSources, specialties } from "@/lib/data";
import { formatNaira } from "@/lib/utils";

export default function HomePage() {
  return (
    <main>
      <section className="soft-grid">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-palm/20 bg-white px-4 py-2 text-sm font-semibold text-palm">
              Specialist physiotherapy, wherever you are in Nigeria
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.02] text-ink md:text-6xl">
              Book the right physiotherapist without a hospital visit.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">
              Find a verified specialist, complete safety screening, pay in Naira, join a video consultation, and leave with
              a clear home plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-palm px-5 text-sm font-bold text-white transition hover:bg-ink"
              >
                Start booking <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/trust-safety"
                className="inline-flex h-12 items-center rounded-full border border-ink/15 px-5 text-sm font-bold text-ink transition hover:border-palm hover:text-palm"
              >
                See safety checks
              </Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm text-ink/70">
              <div className="panel rounded-lg p-3">
                <p className="font-bold text-ink">4</p>
                <p>launch specialties</p>
              </div>
              <div className="panel rounded-lg p-3">
                <p className="font-bold text-ink">WAT</p>
                <p>timezone-first</p>
              </div>
              <div className="panel rounded-lg p-3">
                <p className="font-bold text-ink">NDPA</p>
                <p>privacy model</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-soft">
            <Image
              src="/hero-virtual-physio.png"
              alt="Patient following a virtual physiotherapy session at home"
              width={1792}
              height={1024}
              priority
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/88 p-4 shadow-soft backdrop-blur">
              <p className="text-sm font-bold text-ink">Next safe slot</p>
              <p className="mt-1 text-sm text-ink/70">MSK assessment with Tomi Adebayo - Tue 18:30 WAT - {formatNaira(18000)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Sub-specialties</p>
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
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">How it works</p>
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
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Featured clinicians</p>
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

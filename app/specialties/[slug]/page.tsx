import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { clinicians, specialties } from "@/lib/data";
import { formatNaira } from "@/lib/utils";

export function generateStaticParams() {
  return specialties.map((specialty) => ({ slug: specialty.slug }));
}

export default function SpecialtyPage({ params }: { params: { slug: string } }) {
  const specialty = specialties.find((item) => item.slug === params.slug);

  if (!specialty) {
    notFound();
  }

  const matchingClinicians = clinicians.filter((clinician) => clinician.specialtySlug === specialty.slug);

  return (
    <main>
      <section className={`${specialty.accent} py-16`}>
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Specialty</p>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl font-bold">{specialty.name}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">{specialty.summary}</p>
          <Link href="/book" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white">
            Book this specialty <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <h2 className="font-serif text-4xl font-bold">What it can help with</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {specialty.conditions.map((condition) => (
              <p key={condition} className="flex gap-3 rounded-lg border border-ink/10 bg-white p-4 text-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-palm" aria-hidden="true" />
                {condition}
              </p>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-ink/10 bg-white p-6">
            <h3 className="font-serif text-3xl font-bold">What to expect virtually</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">{specialty.virtualFit}</p>
          </div>
          <div className="mt-4 rounded-lg border border-clay/20 bg-[#fff8ed] p-6">
            <AlertTriangle className="h-6 w-6 text-clay" aria-hidden="true" />
            <h3 className="mt-3 font-serif text-3xl font-bold">Honest caveat</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">{specialty.caveat}</p>
          </div>
        </div>
        <aside className="rounded-lg border border-ink/10 bg-white p-6">
          <h2 className="font-serif text-3xl font-bold">Specialists</h2>
          <div className="mt-5 grid gap-4">
            {matchingClinicians.map((clinician) => (
              <Link key={clinician.id} href={`/clinicians/${clinician.id}`} className="rounded-lg border border-ink/10 p-4 hover:border-palm">
                <p className="font-bold">{clinician.name}</p>
                <p className="mt-1 text-sm text-ink/60">{clinician.experience} experience</p>
                <p className="mt-2 text-sm font-bold text-palm">{formatNaira(clinician.fee)}</p>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}

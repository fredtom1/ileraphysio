import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, CalendarCheck, Languages } from "lucide-react";
import { clinicians, specialties } from "@/lib/data";
import { formatNaira } from "@/lib/utils";

export function generateStaticParams() {
  return clinicians.map((clinician) => ({ id: clinician.id }));
}

export default function ClinicianPage({ params }: { params: { id: string } }) {
  const clinician = clinicians.find((item) => item.id === params.id);

  if (!clinician) {
    notFound();
  }

  const specialty = specialties.find((item) => item.slug === clinician.specialtySlug);

  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
          <div className="grid h-28 w-28 place-items-center rounded-full bg-palm text-4xl font-bold text-white">
            {clinician.name.split(" ").map((part) => part[0]).join("")}
          </div>
          <h1 className="mt-5 font-serif text-4xl font-bold">{clinician.name}</h1>
          <p className="mt-2 text-ink/65">{clinician.credential}</p>
          <p className="mt-4 text-2xl font-bold text-palm">{formatNaira(clinician.fee)}</p>
          <Link href="/book" className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" /> Book a session
          </Link>
        </aside>
        <section>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">{specialty?.name}</p>
          <h2 className="mt-3 font-serif text-5xl font-bold">Clinical profile</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">{clinician.bio}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-ink/10 bg-white p-5">
              <BadgeCheck className="h-6 w-6 text-palm" aria-hidden="true" />
              <p className="mt-3 font-bold">Verified credentials</p>
              <p className="mt-2 text-sm leading-6 text-ink/60">{clinician.verifiedBy.join(", ")}</p>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-5">
              <Languages className="h-6 w-6 text-palm" aria-hidden="true" />
              <p className="mt-3 font-bold">Languages</p>
              <p className="mt-2 text-sm leading-6 text-ink/60">{clinician.languages.join(", ")}</p>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-5">
              <CalendarCheck className="h-6 w-6 text-palm" aria-hidden="true" />
              <p className="mt-3 font-bold">Next slots</p>
              <p className="mt-2 text-sm leading-6 text-ink/60">{clinician.nextSlots.join(", ")}</p>
            </div>
          </div>
          <div className="mt-8 rounded-lg bg-leaf p-6">
            <h3 className="font-serif text-3xl font-bold">Clinical interests</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {clinician.interests.map((interest) => (
                <span key={interest} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-ink/70">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

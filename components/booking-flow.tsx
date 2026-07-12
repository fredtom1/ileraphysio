"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, ArrowRight, Check, CreditCard, Upload, Video } from "lucide-react";
import { clinicians, specialties } from "@/lib/data";
import { cn, formatNaira } from "@/lib/utils";

const steps = ["Specialty", "Clinician", "Intake", "Payment"];

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [specialtySlug, setSpecialtySlug] = useState("msk-orthopaedic");
  const [clinicianId, setClinicianId] = useState("tomi-adebayo");
  const [selectedFlags, setSelectedFlags] = useState<string[]>([]);
  const [guardian, setGuardian] = useState(false);
  const [bodyRegion, setBodyRegion] = useState("Shoulder");

  const specialty = specialties.find((item) => item.slug === specialtySlug) ?? specialties[0];
  const availableClinicians = clinicians.filter((item) => item.specialtySlug === specialtySlug);
  const clinician = clinicians.find((item) => item.id === clinicianId) ?? availableClinicians[0] ?? clinicians[0];
  const shouldTriage = selectedFlags.length > 0;

  const slot = useMemo(() => clinician.nextSlots[0], [clinician]);

  function chooseSpecialty(slug: string) {
    setSpecialtySlug(slug);
    const firstClinician = clinicians.find((item) => item.specialtySlug === slug);
    if (firstClinician) {
      setClinicianId(firstClinician.id);
    }
    setSelectedFlags([]);
    setGuardian(slug === "paediatric");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
      <aside className="rounded-lg border border-ink/10 bg-white p-5">
        <p className="font-serif text-2xl font-bold">Booking progress</p>
        <div className="mt-5 grid gap-3">
          {steps.map((label, index) => (
            <button
              key={label}
              type="button"
              onClick={() => setStep(index)}
              className={cn(
                "flex h-12 items-center gap-3 rounded-lg border px-3 text-left text-sm font-bold",
                step === index ? "border-palm bg-leaf text-ink" : "border-ink/10 text-ink/55"
              )}
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-xs">{index + 1}</span>
              {label}
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-lg bg-[#fff8ed] p-4 text-sm leading-6 text-ink/75">
          <AlertTriangle className="mb-2 h-5 w-5 text-clay" aria-hidden="true" />
          The system blocks payment when urgent red flags are selected. This protects patients and clinicians.
        </div>
      </aside>

      <section className="rounded-lg border border-ink/10 bg-white p-5 md:p-7">
        {step === 0 && (
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Step 1</p>
            <h1 className="mt-2 font-serif text-4xl font-bold">What do you need help with?</h1>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {specialties.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => chooseSpecialty(item.slug)}
                  className={cn(
                    "rounded-lg border p-4 text-left transition",
                    specialtySlug === item.slug ? "border-palm bg-leaf" : "border-ink/10 hover:border-palm/40"
                  )}
                >
                  <p className="font-serif text-2xl font-bold">{item.shortName}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{item.summary}</p>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-palm px-5 text-sm font-bold text-white">
              Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}

        {step === 1 && (
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Step 2</p>
            <h1 className="mt-2 font-serif text-4xl font-bold">Choose a clinician or next available.</h1>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {availableClinicians.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setClinicianId(item.id)}
                  className={cn(
                    "rounded-lg border p-5 text-left",
                    clinicianId === item.id ? "border-palm bg-leaf" : "border-ink/10"
                  )}
                >
                  <p className="font-serif text-2xl font-bold">{item.name}</p>
                  <p className="mt-1 text-sm text-ink/65">{item.credential}</p>
                  <p className="mt-3 text-sm font-bold text-palm">{formatNaira(item.fee)}</p>
                  <p className="mt-3 text-sm text-ink/60">Next: {item.nextSlots[0]}</p>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(2)} className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-palm px-5 text-sm font-bold text-white">
              Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Step 3</p>
            <h1 className="mt-2 font-serif text-4xl font-bold">Complete intake and safety screening.</h1>
            <div className="mt-6 grid gap-5">
              {specialtySlug === "paediatric" && (
                <label className="flex items-start gap-3 rounded-lg border border-ink/10 p-4">
                  <input type="checkbox" checked={guardian} onChange={(event) => setGuardian(event.target.checked)} className="mt-1 h-5 w-5" />
                  <span>
                    <span className="block font-bold">I am booking as a parent or guardian</span>
                    <span className="text-sm text-ink/65">The account holder can be different from the child patient.</span>
                  </span>
                </label>
              )}

              {specialtySlug === "msk-orthopaedic" && (
                <label className="grid gap-2">
                  <span className="font-bold">Body region</span>
                  <select value={bodyRegion} onChange={(event) => setBodyRegion(event.target.value)} className="h-12 rounded-lg border border-ink/15 bg-white px-3">
                    {["Neck", "Shoulder", "Back", "Hip", "Knee", "Ankle", "Wrist or hand"].map((region) => (
                      <option key={region}>{region}</option>
                    ))}
                  </select>
                </label>
              )}

              <div>
                <p className="font-bold">Select any symptoms that apply</p>
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  {specialty.redFlags.map((flag) => (
                    <label key={flag} className="flex items-center gap-3 rounded-lg border border-ink/10 p-3 text-sm">
                      <input
                        type="checkbox"
                        checked={selectedFlags.includes(flag)}
                        onChange={() =>
                          setSelectedFlags((current) =>
                            current.includes(flag) ? current.filter((item) => item !== flag) : [...current, flag]
                          )
                        }
                        className="h-5 w-5"
                      />
                      {flag}
                    </label>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-dashed border-palm/40 bg-leaf/40 p-4">
                <Upload className="mb-2 h-5 w-5 text-palm" aria-hidden="true" />
                <p className="font-bold">Optional media upload placeholder</p>
                <p className="mt-1 text-sm leading-6 text-ink/65">
                  For MSK care, patients can upload a movement clip. Production storage should use S3-compatible private objects and signed URLs.
                </p>
              </div>

              {shouldTriage && (
                <div className="rounded-lg border border-clay/30 bg-[#fff2e8] p-4 text-sm leading-6">
                  <p className="font-bold text-clay">Booking paused for safety review</p>
                  <p className="mt-1 text-ink/70">
                    These answers suggest this may not be suitable for virtual-only care. The next production step is clinician triage before payment.
                  </p>
                </div>
              )}
            </div>
            <button
              disabled={shouldTriage}
              onClick={() => setStep(3)}
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-palm px-5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-ink/25"
            >
              Continue to payment <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Step 4</p>
            <h1 className="mt-2 font-serif text-4xl font-bold">Review and payment.</h1>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-ink/10 p-5">
                <p className="font-bold">Session</p>
                <p className="mt-3 text-sm leading-6 text-ink/70">{specialty.name}</p>
                <p className="text-sm leading-6 text-ink/70">{clinician.name}</p>
                <p className="text-sm leading-6 text-ink/70">{slot}</p>
                {specialtySlug === "msk-orthopaedic" && <p className="text-sm leading-6 text-ink/70">Region: {bodyRegion}</p>}
                {guardian && <p className="text-sm leading-6 text-ink/70">Guardian booking enabled</p>}
              </div>
              <div className="rounded-lg border border-ink/10 p-5">
                <p className="font-bold">Payment rail</p>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  Production checkout should initialise Paystack or Flutterwave server-side and verify payment by webhook before confirming.
                </p>
                <p className="mt-4 font-serif text-3xl font-bold">{formatNaira(clinician.fee)}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white">
                <CreditCard className="h-4 w-4" aria-hidden="true" /> Pay with local checkout
              </button>
              <button className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 px-5 text-sm font-bold text-ink">
                <Video className="h-4 w-4" aria-hidden="true" /> Preview video room
              </button>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-palm">
              <Check className="h-4 w-4" aria-hidden="true" /> Calendar invite and pre-session instructions are generated after payment verification.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

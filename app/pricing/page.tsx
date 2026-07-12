import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { packages } from "@/lib/data";
import { formatNaira } from "@/lib/utils";

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Pricing</p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl font-bold">Clear Naira pricing before booking.</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
        MVP pricing is transparent and clinician fees can vary within platform bounds. Packages should be charged only after
        clear refund and cancellation terms are accepted.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {packages.map((plan) => (
          <div key={plan.name} className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
            <p className="font-serif text-2xl font-bold">{plan.name}</p>
            <p className="mt-4 font-serif text-4xl font-bold text-palm">{formatNaira(plan.price)}</p>
            <p className="mt-4 min-h-[72px] text-sm leading-6 text-ink/65">{plan.description}</p>
            <Link href="/book" className="mt-6 inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-bold text-white">
              Book this option
            </Link>
          </div>
        ))}
      </div>
      <section className="mt-12 rounded-lg bg-leaf p-6">
        <h2 className="font-serif text-3xl font-bold">Included and not included</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            "Included: video consultation, written plan, receipt, and basic post-session summary.",
            "Not included: emergency care, diagnosis requiring physical tests, imaging, prescriptions, or hospital treatment.",
            "Cancellation: proposed 24-hour free reschedule window, then clinician review.",
            "Refunds: payment should remain pending until booking acceptance and triage pass."
          ].map((item) => (
            <p key={item} className="flex gap-3 text-sm leading-6 text-ink/75">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-palm" aria-hidden="true" />
              {item}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}

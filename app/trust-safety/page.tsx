import { AlertTriangle, BadgeCheck, FileKey2, ShieldCheck } from "lucide-react";

export default function TrustSafetyPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-palm">Trust and safety</p>
      <h1 className="mt-3 max-w-4xl font-serif text-5xl font-bold">Healthcare trust is a product feature.</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          [ShieldCheck, "NDPA and NDPR privacy controls", "Capture explicit consent, show purpose of processing, support deletion requests, keep audit logs, and report breaches through the proper channel."],
          [BadgeCheck, "Credential verification", "Clinician profiles stay hidden until licensing, identity, safeguarding, and professional references are reviewed by admin."],
          [AlertTriangle, "Emergency boundary", "Booking and video screens repeat that the platform is not for emergencies and triage unsafe cases before payment."],
          [FileKey2, "Session recording consent", "If recording is ever enabled, both patient and clinician must consent per session. A blanket checkbox is not enough."]
        ].map(([Icon, title, text]) => {
          const CardIcon = Icon as typeof ShieldCheck;
          return (
            <section key={String(title)} className="rounded-lg border border-ink/10 bg-white p-6">
              <CardIcon className="h-7 w-7 text-palm" aria-hidden="true" />
              <h2 className="mt-4 font-serif text-3xl font-bold">{String(title)}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/65">{String(text)}</p>
            </section>
          );
        })}
      </div>
      <section className="mt-10 rounded-lg bg-warning-tint p-6">
        <h2 className="font-serif text-3xl font-bold">Paediatric safeguarding pathway</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">
          Clinician-facing escalation should include a documented concern form, admin notification, session note lock,
          supervisor review, and referral guidance aligned with Nigerian safeguarding obligations and the clinician's
          professional registration requirements.
        </p>
      </section>
    </main>
  );
}

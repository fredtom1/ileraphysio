import { CalendarClock, FileText, HandCoins, Video } from "lucide-react";

export default function ClinicianPortalPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Clinician portal preview</p>
      <h1 className="mt-3 font-serif text-5xl font-bold">Calendar, notes, video, and earnings.</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {[
          [CalendarClock, "8", "open slots this week"],
          [Video, "3", "video consults today"],
          [FileText, "12", "SOAP notes pending review"],
          [HandCoins, "NGN 146k", "pending payout"]
        ].map(([Icon, value, label]) => {
          const CardIcon = Icon as typeof CalendarClock;
          return (
            <section key={String(label)} className="rounded-lg border border-ink/10 bg-white p-5">
              <CardIcon className="h-6 w-6 text-palm" aria-hidden="true" />
              <p className="mt-4 font-serif text-3xl font-bold">{String(value)}</p>
              <p className="text-sm text-ink/60">{String(label)}</p>
            </section>
          );
        })}
      </div>
      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-ink/10 bg-white p-6">
          <h2 className="font-serif text-3xl font-bold">SOAP note shell</h2>
          <div className="mt-5 grid gap-3">
            {["Subjective", "Objective", "Assessment", "Plan"].map((label) => (
              <textarea key={label} placeholder={label} className="min-h-24 rounded-lg border border-ink/10 p-3 text-sm" />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-ink/10 bg-white p-6">
          <h2 className="font-serif text-3xl font-bold">Assign exercises</h2>
          <div className="mt-5 grid gap-3">
            {["Gaze stability", "Breathing control", "Caregiver play routine", "Knee strength progression"].map((item) => (
              <label key={item} className="flex items-center gap-3 rounded-lg border border-ink/10 p-3 text-sm">
                <input type="checkbox" className="h-5 w-5" />
                {item}
              </label>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

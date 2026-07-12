import { Calendar, FileText, MessageSquare, PlayCircle } from "lucide-react";

export default function PatientPortalPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Patient portal preview</p>
      <h1 className="mt-3 font-serif text-5xl font-bold">Your care plan in one calm place.</h1>
      <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <section className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
          <h2 className="font-serif text-3xl font-bold">Upcoming session</h2>
          <div className="mt-5 rounded-lg bg-leaf p-5">
            <p className="font-bold">MSK assessment with Tomi Adebayo</p>
            <p className="mt-1 text-sm text-ink/65">Tue 18:30 WAT - Device check opens 15 minutes before the call.</p>
            <button className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-palm px-5 text-sm font-bold text-white">
              <PlayCircle className="h-4 w-4" aria-hidden="true" /> Join video room
            </button>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              [Calendar, "2", "sessions booked"],
              [FileText, "1", "home plan"],
              [MessageSquare, "3", "clinician messages"]
            ].map(([Icon, value, label]) => {
              const CardIcon = Icon as typeof Calendar;
              return (
                <div key={String(label)} className="rounded-lg border border-ink/10 p-4">
                  <CardIcon className="h-5 w-5 text-palm" aria-hidden="true" />
                  <p className="mt-3 font-serif text-3xl font-bold">{String(value)}</p>
                  <p className="text-sm text-ink/60">{String(label)}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="rounded-lg border border-ink/10 bg-white p-6">
          <h2 className="font-serif text-3xl font-bold">Exercise programme</h2>
          <div className="mt-5 grid gap-3">
            {["Wall shoulder slides - 3 sets of 8", "Thoracic rotation - daily", "Pain and sleep progress note"].map((item) => (
              <label key={item} className="flex items-center gap-3 rounded-lg border border-ink/10 p-3 text-sm">
                <input type="checkbox" className="h-5 w-5" />
                {item}
              </label>
            ))}
          </div>
          <p className="mt-5 rounded-lg bg-[#fff8ed] p-4 text-sm leading-6 text-ink/70">
            Messaging is for follow-up questions only, not urgent symptoms.
          </p>
        </section>
      </div>
    </main>
  );
}

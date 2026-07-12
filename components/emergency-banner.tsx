import { AlertTriangle } from "lucide-react";

export function EmergencyBanner() {
  return (
    <div className="border-b border-clay/20 bg-[#fff8ed] px-4 py-3 text-sm text-ink">
      <div className="mx-auto flex max-w-7xl items-start gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-clay" aria-hidden="true" />
        <p>
          This virtual clinic is not for emergencies. If symptoms feel sudden, severe, or unsafe, seek urgent in-person care
          or contact local emergency services before booking.
        </p>
      </div>
    </div>
  );
}

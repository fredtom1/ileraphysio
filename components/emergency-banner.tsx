import { AlertTriangle } from "lucide-react";

export function EmergencyBanner() {
  return (
    <div className="border-b border-warning/20 bg-warning-tint px-4 py-2.5 text-sm text-ink">
      <div className="mx-auto flex max-w-7xl items-start gap-2.5">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
        <p className="leading-6">
          <span className="font-semibold">Not for emergencies.</span> If symptoms feel sudden, severe, or unsafe, seek
          urgent in-person care or contact local emergency services before booking.
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Ìlera mark — a leaf (recovery / growth) cradling a heartbeat line (clinical care).
 * Single-accent, no photography: honours the low-bandwidth, system-only posture.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-7 w-7 text-palm", className)} aria-hidden="true" fill="none">
      <path
        d="M27 5c0 10.5-6.2 17-15 17.5C10.2 14 16.4 6.6 27 5Z"
        fill="currentColor"
        opacity="0.16"
      />
      <path
        d="M27 5c0 10.5-6.2 17-15 17.5C10.2 14 16.4 6.6 27 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 19h4.5l2-4.5 3 9 2.5-5.5H24"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="logo-pulse"
      />
    </svg>
  );
}

export function Wordmark({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2.5" aria-label="Ìlera Physio home">
      <LogoMark />
      <span className="leading-none">
        <span className="block font-serif text-[21px] font-semibold tracking-tight text-ink">Ìlera</span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-palm">Physio</span>
      </span>
    </Link>
  );
}

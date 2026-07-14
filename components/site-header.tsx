"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Menu, X } from "lucide-react";
import { Wordmark } from "@/components/logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/book", label: "Book" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trust-safety", label: "Trust & safety" },
  { href: "/portal", label: "Patient portal" },
  { href: "/clinician", label: "Clinician portal" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-clinic/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5">
        <Wordmark />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-[15px] font-medium transition",
                  active ? "bg-ink/5 text-ink" : "text-muted hover:bg-ink/5 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/book"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-palm px-4 text-sm font-semibold text-white shadow-soft transition hover:bg-palm-strong"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Book a session</span>
            <span className="sm:hidden">Book</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-line text-ink transition hover:border-ink/40 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-surface px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition",
                    active ? "bg-leaf text-palm-strong" : "text-ink hover:bg-ink/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

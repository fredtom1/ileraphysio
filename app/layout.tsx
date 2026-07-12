import type { Metadata } from "next";
import "./globals.css";
import { EmergencyBanner } from "@/components/emergency-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "KineticCare | Virtual Physiotherapy Clinic Nigeria",
  description: "A Nigerian virtual physiotherapy marketplace MVP with booking, triage, clinician profiles, and portal previews."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <EmergencyBanner />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

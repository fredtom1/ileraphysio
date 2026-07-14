import type { Metadata } from "next";
import "./globals.css";
import { EmergencyBanner } from "@/components/emergency-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Ìlera Physio | Virtual Physiotherapy for Nigeria & the Diaspora",
  description:
    "Book a verified specialist physiotherapist, complete safety screening, pay in Naira, join a video consultation, and leave with a clear home plan."
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

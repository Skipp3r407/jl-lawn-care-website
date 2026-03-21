import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCall from "@/components/StickyMobileCall";

export const metadata: Metadata = {
  title: "Lawn Care in Deltona, FL | J&L Lawn Care Services LLC",
  description:
    "Professional lawn care in Deltona, FL by J&L Lawn Care Services LLC. Call for mowing, recurring maintenance, yard cleanup, trimming, and landscaping services.",
  keywords: [
    "lawn care Deltona FL",
    "lawn mowing Deltona",
    "yard cleanup Deltona",
    "landscaping Deltona",
    "recurring lawn service Deltona"
  ],
  openGraph: {
    title: "Lawn Care in Deltona, FL | J&L Lawn Care Services LLC",
    description:
      "Reliable lawn mowing, cleanup, landscaping, and recurring yard maintenance in Deltona and nearby areas.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <StickyMobileCall />
        <div className="h-20 md:hidden" aria-hidden="true" />
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCall from "@/components/StickyMobileCall";

export const metadata: Metadata = {
  title: "J&L Lawn Care Services LLC",
  description: "Reliable lawn care services in Deltona, FL",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png"
  },
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
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 antialiased">
        <Header />
        {children}
        <StickyMobileCall />
        <div className="h-24 md:hidden" aria-hidden="true" />
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact J&L Lawn Care Services LLC | Free Quote Deltona",
  description:
    "Call or contact J&L Lawn Care Services LLC for lawn care in Deltona, FL. Request a free quote for mowing, cleanup, and maintenance."
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-white py-16 text-center sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2E7D32]">Contact</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
            Contact J&amp;L Lawn Care Services LLC
          </h1>
          <p className="mt-4 text-gray-600">
            Request lawn service in Deltona, FL and nearby areas. Commercial &amp; Residential.
          </p>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}

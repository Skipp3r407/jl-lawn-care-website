import type { Metadata } from "next";
import Link from "next/link";

import { DEMO_PHONE_TEL } from "@/lib/demo-contact";

export const metadata: Metadata = {
  title: "Service Areas | Lawn Care Deltona and Nearby Cities",
  description:
    "J&L Lawn Care Services LLC serves Deltona, DeBary, Orange City, DeLand, Sanford, Lake Mary, and Altamonte Springs with dependable lawn care."
};

const areas = ["Deltona", "DeBary", "Orange City", "DeLand", "Sanford", "Lake Mary", "Altamonte Springs"];

export default function ServiceAreasPage() {
  return (
    <main className="bg-[#F8FAF8] py-16 sm:py-20">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2E7D32]">Service Areas</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
            Proudly Serving Deltona and Nearby Areas
          </h1>
          <p className="mt-4 text-gray-600">
            If you are searching for lawn care in Deltona, lawn mowing near Deltona, yard cleanup in
            surrounding neighborhoods, or landscaping help in nearby cities, J&amp;L Lawn Care Services LLC
            is ready to help.
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((city) => (
            <article
              key={city}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_14px_30px_-24px_rgba(17,24,39,0.55)]"
            >
              <h2 className="text-xl font-bold text-[#111827]">{city}</h2>
              <p className="mt-2 text-sm text-gray-600">
                Local lawn care, mowing, cleanups, and recurring service available based on schedule.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_35px_-26px_rgba(17,24,39,0.65)]">
          <h2 className="text-2xl font-bold text-[#111827]">Deltona, FL is Our Core Service Area</h2>
          <p className="mt-3 text-gray-600">
            Our team is based around Deltona, FL and regularly serves nearby communities across Central
            Florida. We focus on dependable, homeowner-friendly service with clear communication and quick
            quote response.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-[#2E7D32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1B5E20]"
            >
              Request a Free Quote
            </Link>
            <Link
              href={DEMO_PHONE_TEL}
              className="inline-flex rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-[#2E7D32] hover:text-[#1B5E20]"
            >
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

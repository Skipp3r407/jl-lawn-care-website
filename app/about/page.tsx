import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About J&L Lawn Care Services LLC | Deltona, FL",
  description:
    "Learn about J&L Lawn Care Services LLC, a trusted local lawn care company serving homeowners in Deltona and surrounding Central Florida areas."
};

const values = [
  {
    title: "Reliable Local Service",
    text: "We serve Deltona homeowners with consistent scheduling and dependable communication."
  },
  {
    title: "Quality Work Every Visit",
    text: "Clean mowing, detailed edging, and careful cleanup are part of every service."
  },
  {
    title: "Customer-First Approach",
    text: "We provide practical recommendations, fair pricing, and easy quote requests."
  }
];

export default function AboutPage() {
  return (
    <main className="bg-[#F8FAF8] py-16 sm:py-20">
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-gray-200 bg-white p-7 shadow-[0_20px_42px_-28px_rgba(17,24,39,0.65)] sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2E7D32]">About Us</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
              Local Lawn Care Built on Trust
            </h1>
            <p className="mt-6 text-gray-600">
              J&amp;L Lawn Care Services LLC proudly serves Deltona, FL and surrounding communities with
              professional lawn mowing, yard cleanup, landscaping, and recurring maintenance. We are a
              local company focused on helping homeowners keep their properties neat, healthy, and
              well-maintained year-round.
            </p>
            <p className="mt-3 text-gray-600">
              Our mission is simple: provide reliable service, quality results, and a hassle-free customer
              experience. Whether you need one-time help or recurring lawn care, our team is here to make
              yard maintenance easier and more dependable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-[#2E7D32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1B5E20]"
              >
                Request a Free Quote
              </Link>
              <Link
                href="tel:13863349423"
                className="inline-flex rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-[#2E7D32] hover:text-[#1B5E20]"
              >
                Call Now
              </Link>
            </div>
          </article>

          <aside className="rounded-3xl bg-[#111827] p-7 text-gray-100 shadow-[0_20px_45px_-30px_rgba(17,24,39,0.95)] sm:p-10">
            <h2 className="text-2xl font-bold">Our Mission &amp; Values</h2>
            <p className="mt-2 text-sm text-gray-300">Commercial &amp; Residential lawn service in Deltona, FL.</p>
            <div className="mt-6 space-y-5">
              {values.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

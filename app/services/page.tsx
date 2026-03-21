import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lawn Care Services in Deltona, FL | J&L Lawn Care",
  description:
    "Explore lawn mowing, lawn maintenance, yard cleanup, landscaping, grass cutting, trimming, edging, and recurring service options in Deltona, FL."
};

const services = [
  {
    title: "Lawn Mowing",
    includes: "Consistent mowing with clean lines and professional finish.",
    matters: "Regular mowing supports healthy growth and keeps your home looking maintained.",
    for: "Homeowners who want a neat lawn without spending weekends on yard work."
  },
  {
    title: "Lawn Maintenance",
    includes: "Routine lawn care visits tailored to seasonal growth and property needs.",
    matters: "Consistent upkeep improves curb appeal and prevents overgrowth issues.",
    for: "Busy homeowners needing reliable recurring lawn service in Deltona."
  },
  {
    title: "Yard Clean Up",
    includes: "Removal of leaves, debris, overgrowth, and seasonal yard buildup.",
    matters: "A clean yard is safer, healthier, and more inviting for your household.",
    for: "Properties needing one-time or seasonal cleanup support."
  },
  {
    title: "Landscaping",
    includes: "Light landscaping touch-ups and visual improvements around beds and borders.",
    matters: "Clean landscaping improves the overall look and value of your property.",
    for: "Homeowners looking to refresh the appearance of their outdoor space."
  },
  {
    title: "Grass Cutting",
    includes: "Precision cutting for even lawn height and polished curb appeal.",
    matters: "Proper cutting promotes lawn health and keeps your property looking professional.",
    for: "Residential clients wanting dependable, detail-focused cutting service."
  },
  {
    title: "Recurring Lawn Service",
    includes: "Weekly or biweekly service plans based on your preferred schedule.",
    matters: "Recurring service keeps your yard under control all season with less stress.",
    for: "Customers who want consistent results and predictable maintenance."
  },
  {
    title: "Trimming & Edging",
    includes: "Detailed trimming and crisp edging around walkways, driveways, and beds.",
    matters: "Sharp edges create the finished, professional look homeowners notice.",
    for: "Any property that needs clean borders and a polished final appearance."
  },
  {
    title: "Seasonal Cleanups",
    includes: "Targeted spring and fall cleanup services for changing lawn conditions.",
    matters: "Seasonal service prevents buildup and prepares your yard for growth cycles.",
    for: "Homeowners who want proactive lawn care at key times of the year."
  },
  {
    title: "General Yard Care",
    includes: "Flexible upkeep support for ongoing property care and presentation.",
    matters: "General maintenance prevents small issues from becoming larger cleanup problems.",
    for: "Homeowners who want a reliable local team for day-to-day yard care needs."
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F8FAF8] py-16 sm:py-20">
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2E7D32]">Services</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
            Lawn Care Services for Deltona Homeowners
          </h1>
          <p className="mt-4 text-gray-600">
            J&amp;L Lawn Care Services LLC provides commercial &amp; residential lawn services with a strong
            focus on dependable scheduling, quality results, and local customer support.
          </p>
        </header>

        <div className="mt-12 space-y-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-[0_16px_34px_-25px_rgba(17,24,39,0.5)]"
            >
              <h2 className="text-2xl font-bold text-[#111827]">{service.title}</h2>
              <div className="mt-4 grid gap-4 text-sm text-gray-600 md:grid-cols-3">
                <p>
                  <span className="font-semibold text-gray-800">What it includes: </span>
                  {service.includes}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">Why it matters: </span>
                  {service.matters}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">Best for: </span>
                  {service.for}
                </p>
              </div>

              {(index + 1) % 2 === 0 && (
                <div className="mt-6 flex flex-wrap gap-3 rounded-2xl bg-[#F8FAF8] p-4">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-xl bg-[#2E7D32] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1B5E20]"
                  >
                    Request a Free Quote
                  </Link>
                  <Link
                    href="tel:13863349423"
                    className="inline-flex rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-[#2E7D32] hover:text-[#1B5E20]"
                  >
                    Call Now
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

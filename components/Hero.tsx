import Link from "next/link";

const trustBadges = ["Local Deltona Service", "Residential Lawn Care", "Reliable Recurring Service"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#F8FAF8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(76,175,80,0.24),transparent_42%)]" />
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#4CAF50]/10 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-[#2E7D32]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#1B5E20]">
            Serving Deltona and Nearby Areas
          </p>
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
            Reliable Lawn Care Services in Deltona, FL
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600">
            Professional lawn mowing, yard cleanups, landscaping, and recurring lawn maintenance for
            homeowners in Deltona and nearby areas.
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#2E7D32]">
            Commercial &amp; Residential
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#2E7D32] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B5E20]"
            >
              Request a Free Quote
            </Link>
            <Link
              href="tel:13863349423"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2E7D32] hover:text-[#1B5E20]"
            >
              Call (386) 334-9423
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-green-200 bg-white px-3 py-1 text-xs font-semibold text-green-800"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_45px_-20px_rgba(17,24,39,0.35)] backdrop-blur">
          <h2 className="text-2xl font-bold text-[#111827]">Dependable Care. Clean Results.</h2>
          <p className="mt-3 text-gray-600">
            Homeowners trust J&amp;L Lawn Care Services LLC for consistent quality and easy scheduling.
            Choose one-time help or recurring service for year-round curb appeal.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#4CAF50]" />
              Professional mowing and edging that keeps your yard neat and polished
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#4CAF50]" />
              Fast quote response for Deltona homeowners and nearby neighborhoods
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#4CAF50]" />
              Friendly local team focused on quality and reliable service visits
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

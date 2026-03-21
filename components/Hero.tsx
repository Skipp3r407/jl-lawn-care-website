import Link from "next/link";

const trustBadges = ["Local Deltona Service", "Residential Lawn Care", "Recurring Service Available"];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#0F172A] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_15%,rgba(76,175,80,0.32),transparent_32%),radial-gradient(circle_at_95%_20%,rgba(46,125,50,0.28),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,23,42,0.95),rgba(17,24,39,0.78)_45%,rgba(15,23,42,0.9))]" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute -left-16 top-16 h-52 w-52 rounded-full bg-[#4CAF50]/15 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-60 w-60 rounded-full bg-[#2E7D32]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.12em] text-green-200">
            Serving Deltona and Nearby Areas
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Reliable Lawn Care Services in Deltona, FL
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            Professional lawn mowing, yard cleanups, landscaping, and recurring lawn maintenance for
            homeowners in Deltona and nearby areas.
          </p>
          <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
            Commercial &amp; Residential
          </p>
          <div className="flex flex-wrap gap-3 max-sm:flex-col">
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_32px_-20px_rgba(76,175,80,0.95)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 max-sm:w-full"
            >
              Request a Free Quote
            </Link>
            <Link
              href="tel:13863349423"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 max-sm:w-full"
            >
              Call (386) 334-9423
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-green-300/30 bg-green-300/15 px-3 py-1 text-sm font-semibold text-green-100"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-0 shadow-[0_30px_50px_-30px_rgba(15,23,42,1)] backdrop-blur-xl">
            <div className="border-b border-white/10 bg-gradient-to-r from-white/10 to-transparent px-6 py-5">
              <h2 className="text-2xl font-semibold text-white">Dependable Care. Clean Results.</h2>
              <p className="mt-1 text-sm text-slate-200">Built for homeowners who want consistent curb appeal.</p>
            </div>
            <div className="px-6 py-5">
              <ul className="space-y-3 text-sm text-slate-100">
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

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-green-200/40 bg-green-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-green-700">Fast Quote Response</p>
              <p className="mt-1 text-sm font-semibold text-[#0F172A]">Same-day callbacks available.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-600">Recurring Service</p>
              <p className="mt-1 text-sm font-semibold text-[#0F172A]">Weekly and biweekly options.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

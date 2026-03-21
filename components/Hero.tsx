import Image from "next/image";
import Link from "next/link";

const trustBadges = ["5 Star Service", "Deltona Local", "Fast Response"];

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-landscape.jpg"
          alt="Beautiful landscaped lawn in Deltona"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.72),rgba(15,23,42,0.55))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(76,175,80,0.22),transparent_30%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-28 md:px-10">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-200">
            Serving Deltona and Nearby Areas
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Reliable Lawn Care Services in Deltona, FL
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Professional lawn mowing, yard cleanups, landscaping, and recurring lawn maintenance for
            homeowners in Deltona and nearby areas.
          </p>
          <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
            Commercial &amp; Residential
          </p>
          <div className="flex flex-wrap gap-3 max-sm:flex-col">
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700 max-sm:w-full"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:13863349423"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 max-sm:w-full"
            >
              Call Now
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-green-200">5 Star Service</p>
              <p className="mt-1 text-sm text-slate-100">Trusted by local homeowners.</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-green-200">Deltona Local</p>
              <p className="mt-1 text-sm text-slate-100">Serving nearby neighborhoods.</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-green-200">Fast Response</p>
              <p className="mt-1 text-sm text-slate-100">Quick callbacks and quotes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

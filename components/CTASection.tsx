import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] p-8 text-white shadow-[0_20px_40px_-25px_rgba(17,24,39,0.75)] sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready for a Cleaner, Better-Looking Yard?
              </h2>
              <p className="mt-3 text-green-100">
                Contact J&amp;L Lawn Care Services LLC today for dependable lawn care in Deltona and
                surrounding areas.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1B5E20] transition-all duration-200 hover:-translate-y-0.5"
              >
                Request a Free Quote
              </Link>
              <Link
                href="tel:13863349423"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

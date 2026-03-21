import Link from "next/link";

export default function AboutPreview() {
  return (
    <section id="about" className="border-t border-gray-100 bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto grid gap-10 px-6 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-green-600">About J&amp;L</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-[#111827]">
            Local Lawn Care You Can Count On
          </h2>
          <p className="mt-5 max-w-3xl text-gray-600 leading-relaxed">
            J&amp;L Lawn Care Services LLC proudly serves homeowners in Deltona, FL and surrounding areas
            with reliable lawn mowing, cleanup, and landscaping services. We are known for dependable
            scheduling, clear communication, and quality work that helps your home stay clean, polished,
            and curb-appeal ready.
          </p>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Whether you need recurring lawn maintenance or one-time yard help, our team delivers practical
            service with a local, customer-first approach.
          </p>
          <div className="mt-7">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-[#2E7D32] px-5 py-3 text-sm font-semibold text-[#1B5E20] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E7D32] hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#111827] p-7 text-gray-200 shadow-[0_22px_45px_-28px_rgba(15,23,42,0.9)]">
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#4CAF50]/20 blur-2xl" />
          <h3 className="relative text-lg font-semibold text-white">Residential Service Focus</h3>
          <ul className="relative mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#4CAF50]" />
              Lawn care plans built for busy homeowners
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#4CAF50]" />
              Quick quote process with clear service options
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#4CAF50]" />
              Professional results designed to protect curb appeal
            </li>
          </ul>

          <div className="relative mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-widest text-green-300">Local</p>
              <p className="mt-1 text-sm font-semibold text-white">Deltona Based Team</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-widest text-green-300">Focused</p>
              <p className="mt-1 text-sm font-semibold text-white">Commercial &amp; Residential</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

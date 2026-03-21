import Link from "next/link";

export default function AboutPreview() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2E7D32]">About J&amp;L</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
            Local Lawn Care You Can Count On
          </h2>
          <p className="mt-5 max-w-3xl text-gray-600">
            J&amp;L Lawn Care Services LLC proudly serves homeowners in Deltona, FL and surrounding areas
            with reliable lawn mowing, cleanup, and landscaping services. We are known for dependable
            scheduling, clear communication, and quality work that helps your home stay clean, polished,
            and curb-appeal ready.
          </p>
          <p className="mt-3 max-w-3xl text-gray-600">
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

        <aside className="rounded-3xl bg-[#111827] p-7 text-gray-200 shadow-[0_20px_45px_-24px_rgba(17,24,39,0.9)]">
          <h3 className="text-xl font-bold text-white">Residential Service Focus</h3>
          <ul className="mt-5 space-y-4 text-sm">
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
        </aside>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#F8FAF8] py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <aside className="rounded-3xl border border-gray-200 bg-white p-7 shadow-[0_16px_30px_-25px_rgba(17,24,39,0.6)]">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2E7D32]">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111827]">Get Your Free Quote</h2>
          <p className="mt-4 text-gray-600">
            Reach out today for dependable local lawn care services in Deltona and nearby areas.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <p>
              <span className="font-semibold text-[#111827]">Phone:</span>{" "}
              <Link href="tel:13863349423" className="text-[#1B5E20] hover:underline">
                (386) 334-9423
              </Link>
            </p>
            <p>
              <span className="font-semibold text-[#111827]">Email:</span>{" "}
              <Link
                href="mailto:j.l.lawncareservices16@gmail.com"
                className="break-all text-[#1B5E20] hover:underline"
              >
                j.l.lawncareservices16@gmail.com
              </Link>
            </p>
            <p>
              <span className="font-semibold text-[#111827]">Location:</span> Deltona, FL
            </p>
          </div>
        </aside>

        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-[0_16px_30px_-25px_rgba(17,24,39,0.6)]">
          <h3 className="text-2xl font-bold text-[#111827]">Request Quote</h3>
          <form className="mt-6 space-y-4">
            <label className="block text-sm font-semibold text-gray-700">
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20"
              />
            </label>
            <label className="block text-sm font-semibold text-gray-700">
              Phone
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20"
              />
            </label>
            <label className="block text-sm font-semibold text-gray-700">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20"
              />
            </label>
            <label className="block text-sm font-semibold text-gray-700">
              Service Needed
              <select className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20">
                <option>Lawn Mowing</option>
                <option>Lawn Maintenance</option>
                <option>Yard Clean Up</option>
                <option>Landscaping</option>
                <option>Recurring Lawn Service</option>
                <option>Trimming &amp; Edging</option>
                <option>Seasonal Cleanups</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-gray-700">
              Message
              <textarea
                rows={4}
                name="message"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20"
                placeholder="Tell us about your property and what service you need."
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-[#2E7D32] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B5E20]"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

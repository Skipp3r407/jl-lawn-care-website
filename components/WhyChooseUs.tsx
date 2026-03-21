const highlights = [
  {
    title: "Local and Dependable Service",
    text: "We proudly serve Deltona homeowners with on-time, reliable lawn care visits."
  },
  {
    title: "Quality Work, Detail Focused",
    text: "From clean mowing lines to precise edging, we treat every yard with care."
  },
  {
    title: "Recurring & One-Time Options",
    text: "Choose weekly maintenance or one-time cleanups based on your property needs."
  },
  {
    title: "Fast Response, Easy Quotes",
    text: "Call or message us for quick pricing and straightforward service scheduling."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F8FAF8] py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2E7D32]">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
            Why Homeowners Choose J&amp;L Lawn Care
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_14px_28px_-24px_rgba(17,24,39,0.55)]"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#2E7D32]/10 text-[#2E7D32]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#111827]">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

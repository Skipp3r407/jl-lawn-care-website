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
    <section className="border-t border-slate-800 bg-[#111827] py-20 text-white md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300">Why Choose Us</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
            Why Homeowners Choose J&amp;L Lawn Care
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-green-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-300">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const highlights = [
  {
    title: "Fast Response",
    text: "Quick scheduling, prompt callbacks, and easy quote turnaround."
  },
  {
    title: "Local Experts",
    text: "Deltona-focused team with local knowledge of seasonal lawn conditions."
  },
  {
    title: "Reliable Service",
    text: "Consistent quality from mowing to cleanup and recurring maintenance."
  },
  {
    title: "Affordable Pricing",
    text: "Clear, fair estimates designed for residential and commercial properties."
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

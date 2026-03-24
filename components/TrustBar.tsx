const trustItems = [
  "Local Deltona Service",
  "Commercial & Residential",
  "Recurring Service Available",
  "Fast Quote Response"
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-white/95 py-8 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap gap-3">
          {trustItems.map((item) => (
            <div
              key={item}
              className="rounded-full border border-emerald-200/80 bg-emerald-50/90 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-emerald-500/15"
            >
              <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-[#2E7D32]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

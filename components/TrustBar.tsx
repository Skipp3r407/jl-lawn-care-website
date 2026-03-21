const trustItems = [
  "Local Deltona Service",
  "Commercial & Residential",
  "Recurring Service Available",
  "Fast Quote Response"
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item} className="rounded-2xl border border-gray-100 bg-[#F8FAF8] px-4 py-3 text-sm font-semibold text-slate-700">
              <span className="mr-2 inline-flex h-2.5 w-2.5 rounded-full bg-[#2E7D32]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

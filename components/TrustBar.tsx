const trustItems = [
  "Local Deltona Service",
  "Commercial & Residential",
  "Recurring Service Available",
  "Fast Quote Response"
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap gap-3">
          {trustItems.map((item) => (
            <div key={item} className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-slate-700">
              <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-[#2E7D32]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

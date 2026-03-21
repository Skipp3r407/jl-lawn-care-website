const trustItems = [
  "Local Deltona Service",
  "Residential Lawn Care",
  "Recurring Service Available",
  "Fast Quote Response"
];

export default function TrustBar() {
  return (
    <section className="border-y border-green-100 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
        {trustItems.map((item) => (
          <div key={item} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700">
            <span className="h-2 w-2 rounded-full bg-[#4CAF50]" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

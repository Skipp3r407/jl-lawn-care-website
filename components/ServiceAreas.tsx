const cities = ["Deltona", "DeBary", "Orange City", "DeLand", "Sanford", "Lake Mary", "Altamonte Springs"];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-[#F8FAF8] py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2E7D32]">Service Areas</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
            Proudly Serving Deltona and Nearby Areas
          </h2>
          <p className="mt-4 text-gray-600">
            Looking for lawn care in Deltona, lawn mowing near Deltona, or yard cleanup in nearby
            neighborhoods? J&amp;L Lawn Care Services LLC provides dependable local service throughout the
            surrounding Central Florida area.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {cities.map((city) => (
            <span
              key={city}
              className="rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-[#1B5E20] shadow-sm"
            >
              {city}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_16px_34px_-24px_rgba(17,24,39,0.45)]">
          <div className="grid items-center gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-xl font-bold text-[#111827]">Local Coverage You Can Trust</h3>
              <p className="mt-2 text-sm text-gray-600">
                If you are in Deltona or a nearby city and need recurring lawn service, cleanup, trimming,
                or landscaping, contact us for a fast local quote.
              </p>
            </div>
            <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2E7D32]">Primary Service Hub</p>
              <p className="mt-2 text-lg font-bold text-[#111827]">Deltona, Florida</p>
              <p className="mt-1 text-sm text-gray-600">Serving surrounding communities based on schedule and availability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Melissa R.",
    city: "Deltona",
    quote: "Always shows up on time and does a great job with our yard."
  },
  {
    name: "Carlos M.",
    city: "Orange City",
    quote: "Our lawn looks better than ever. Very reliable and easy to work with."
  },
  {
    name: "Andrea T.",
    city: "DeBary",
    quote: "Quick response, fair pricing, and clean work every visit."
  },
  {
    name: "James P.",
    city: "Sanford",
    quote: "Great recurring service. The edging and cleanup always look professional."
  },
  {
    name: "Lauren H.",
    city: "Deland",
    quote: "They made our overgrown yard look amazing in one cleanup visit."
  },
  {
    name: "Victor S.",
    city: "Lake Mary",
    quote: "Friendly local team and dependable service every time."
  }
];

function Stars() {
  return (
    <div className="mb-3 flex gap-1 text-[#4CAF50]">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.03 3.171a1 1 0 00.95.69h3.333c.969 0 1.371 1.24.588 1.81l-2.697 1.96a1 1 0 00-.364 1.118l1.03 3.17c.3.922-.755 1.688-1.539 1.118l-2.697-1.959a1 1 0 00-1.175 0l-2.697 1.96c-.783.57-1.838-.197-1.539-1.119l1.03-3.17a1 1 0 00-.364-1.118L2.098 8.6c-.783-.57-.38-1.81.588-1.81H6.02a1 1 0 00.95-.69l1.03-3.171z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2E7D32]">Testimonials</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
            What Local Customers Are Saying
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={`${item.name}-${item.city}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(17,24,39,0.55)]"
            >
              <Stars />
              <p className="text-gray-700">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-bold text-[#111827]">{item.name}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">{item.city}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

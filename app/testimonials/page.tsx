import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | J&L Lawn Care Services LLC",
  description:
    "Read local testimonials from homeowners in Deltona and nearby areas who trust J&L Lawn Care Services LLC for reliable service."
};

const reviews = [
  {
    name: "Melissa R.",
    city: "Deltona",
    quote: "Always shows up on time and does a great job with our yard.",
    rating: 5
  },
  {
    name: "Carlos M.",
    city: "Orange City",
    quote: "Our lawn looks better than ever. Very reliable and easy to work with.",
    rating: 5
  },
  {
    name: "Andrea T.",
    city: "DeBary",
    quote: "Quick response, fair pricing, and clean work every visit.",
    rating: 5
  },
  {
    name: "James P.",
    city: "Sanford",
    quote: "Great recurring service. The edging and cleanup always look professional.",
    rating: 5
  },
  {
    name: "Lauren H.",
    city: "DeLand",
    quote: "They made our overgrown yard look amazing in one cleanup visit.",
    rating: 5
  },
  {
    name: "Victor S.",
    city: "Lake Mary",
    quote: "Friendly local team and dependable service every time.",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <main className="bg-[#F8FAF8] py-16 sm:py-20">
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2E7D32]">Testimonials</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
            What Local Customers Are Saying
          </h1>
          <p className="mt-4 text-gray-600">
            Homeowners across Deltona and nearby areas trust J&amp;L Lawn Care Services LLC for dependable
            service, fair pricing, and professional results.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.city}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(17,24,39,0.55)]"
            >
              <div className="mb-3 flex gap-1 text-[#4CAF50]">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <svg key={idx} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.03 3.171a1 1 0 00.95.69h3.333c.969 0 1.371 1.24.588 1.81l-2.697 1.96a1 1 0 00-.364 1.118l1.03 3.17c.3.922-.755 1.688-1.539 1.118l-2.697-1.959a1 1 0 00-1.175 0l-2.697 1.96c-.783.57-1.838-.197-1.539-1.119l1.03-3.17a1 1 0 00-.364-1.118L2.098 8.6c-.783-.57-.38-1.81.588-1.81H6.02a1 1 0 00.95-.69l1.03-3.171z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">&ldquo;{review.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-bold text-[#111827]">{review.name}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">{review.city}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

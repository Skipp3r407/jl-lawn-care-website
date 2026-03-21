import type { ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    title: "Lawn Mowing",
    description: "Scheduled mowing for a clean, healthy lawn that always looks cared for.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 14h8l4 4h4" />
        <circle cx="6" cy="17" r="2" />
        <circle cx="18" cy="17" r="2" />
        <path d="M10 14V8h4l2 6" />
      </svg>
    )
  },
  {
    title: "Lawn Maintenance",
    description: "Consistent yard upkeep plans tailored for Deltona-area residential properties.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M6 12h12" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    )
  },
  {
    title: "Yard Clean Up",
    description: "Remove leaves, debris, and overgrowth to refresh your outdoor space quickly.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 18h16M6 18l2-9h8l2 9" />
        <path d="M9 9l1-3h4l1 3" />
      </svg>
    )
  },
  {
    title: "Landscaping",
    description: "Light landscape touch-ups that improve curb appeal and visual balance.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20V8" />
        <path d="M8 12c0-2.2 1.8-4 4-4 0 2.2-1.8 4-4 4Z" />
        <path d="M16 14c0-2.2-1.8-4-4-4 0 2.2 1.8 4 4 4Z" />
      </svg>
    )
  },
  {
    title: "Grass Cutting",
    description: "Precision cutting designed to keep your lawn even, tidy, and neighborhood-ready.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 20l6-6M9 20l6-6M13 20l6-6" />
        <path d="M4 8h16" />
      </svg>
    )
  },
  {
    title: "Recurring Lawn Service",
    description: "Weekly or biweekly recurring service options with dependable scheduling.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 12a8 8 0 1 1-2.3-5.7" />
        <path d="M20 4v6h-6" />
      </svg>
    )
  },
  {
    title: "Trimming & Edging",
    description: "Sharp lines around sidewalks, driveways, and beds for a polished finish.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 20h18M6 16l4-4 3 3 5-5" />
      </svg>
    )
  },
  {
    title: "Seasonal Cleanups",
    description: "Targeted cleanup services for high-growth and transition seasons in Florida.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21c4-4 7-7 7-11a7 7 0 1 0-14 0c0 4 3 7 7 11Z" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="border-t border-gray-100 bg-[#F8FAF8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Services</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#111827]">
            Our Lawn &amp; Yard Services
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            We help keep your property looking clean, healthy, and well-maintained with dependable lawn
            care services tailored to your needs.
          </p>
        </div>

        <div className="mb-6 rounded-3xl border border-green-100 bg-gradient-to-r from-green-50 to-white p-6 md:p-7">
          <div className="grid items-center gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-green-700">Most Requested</p>
              <h3 className="mt-2 text-xl font-semibold text-[#111827]">Recurring Lawn Service Plans</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Keep your property consistently clean with weekly or biweekly lawn maintenance tailored to your yard and schedule.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <div className="rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">Commercial &amp; Residential</div>
              <div className="rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">Fast Quote Response</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl border border-green-100 bg-green-50 p-2.5 text-[#2E7D32] transition-colors duration-300 group-hover:bg-[#2E7D32] group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#111827]">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-4 inline-flex items-center text-sm font-semibold text-[#2E7D32]">
                Learn More
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

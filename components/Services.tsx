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
    <section id="services" className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2E7D32]">Services</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
            Our Lawn &amp; Yard Services
          </h2>
          <p className="mt-4 text-gray-600">
            We help keep your property looking clean, healthy, and well-maintained with dependable lawn
            care services tailored to your needs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-gray-100 bg-[#F8FAF8] p-5 shadow-[0_10px_30px_-18px_rgba(17,24,39,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#4CAF50]/40 hover:shadow-[0_18px_35px_-18px_rgba(17,24,39,0.45)]"
            >
              <div className="inline-flex rounded-xl bg-white p-2 text-[#2E7D32] shadow-sm transition-colors duration-300 group-hover:bg-[#2E7D32] group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#111827]">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

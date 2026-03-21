import type { ReactNode } from "react";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    title: "Lawn Mowing",
    description: "Scheduled mowing for a clean, healthy lawn that always looks cared for.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1563212031-ae4df5f0f6c7?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1599687266725-1a7f5d12c9dd?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1562748153-6570f3f6ef8f?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1464638681273-0962e9b53566?auto=format&fit=crop&w=900&q=80",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 20h18M6 16l4-4 3 3 5-5" />
      </svg>
    )
  },
  {
    title: "Seasonal Cleanups",
    description: "Targeted cleanup services for high-growth and transition seasons in Florida.",
    image:
      "https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=900&q=80",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21c4-4 7-7 7-11a7 7 0 1 0-14 0c0 4 3 7 7 11Z" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="border-t border-gray-100 bg-[#F8FAF8] py-20 md:py-28">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl"
            >
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(15,23,42,.65), rgba(15,23,42,.2)), url('${service.image}')`
                }}
              >
                <div className="flex h-full items-end p-4">
                  <div className="inline-flex rounded-xl border border-white/30 bg-white/10 p-2 text-white backdrop-blur">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#111827]">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{service.description}</p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-[#2E7D32]">
                  Explore Service
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

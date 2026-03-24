"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { fadeInLeft, staggerContainer } from "@/lib/motion-variants";

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
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1593691509543-c55fb32f2ecf?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1599687266725-1a7f5d12c9dd?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1464638681273-0962e9b53566?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=1600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21c4-4 7-7 7-11a7 7 0 1 0-14 0c0 4 3 7 7 11Z" />
      </svg>
    )
  }
];

const viewport = { once: true, amount: 0.2 } as const;

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/10 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">Services</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Our Lawn &amp; Yard Services</h2>
          <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
            We help keep your property looking clean, healthy, and well-maintained with dependable lawn
            care services tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeInLeft} className="h-full min-h-0">
              <Link
                href="/services"
                className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div
                  className="relative h-40 w-full shrink-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.35) 45%, rgba(15,23,42,0.15) 100%), url('${service.image}')`
                  }}
                >
                  <div className="flex h-full items-end p-4">
                    <div className="inline-flex rounded-xl border border-white/25 bg-white/10 p-2 text-emerald-100 backdrop-blur">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{service.description}</p>
                  <div className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-400">
                    Explore Service
                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

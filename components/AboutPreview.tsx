"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { fadeInLeft, fadeInRight } from "@/lib/motion-variants";

const viewport = { once: true, amount: 0.2 } as const;

export default function AboutPreview() {
  return (
    <section id="about" className="border-t border-gray-100 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={fadeInLeft} initial="hidden" whileInView="show" viewport={viewport}>
          <p className="text-sm font-bold uppercase tracking-widest text-green-600">About J&amp;L</p>
          <h2 className="mt-3 text-2xl font-semibold text-[#111827] md:text-3xl">
            Local Lawn Care You Can Count On
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-gray-600">
            J&amp;L Lawn Care Services LLC proudly serves homeowners in Deltona, FL and surrounding areas
            with reliable lawn mowing, cleanup, and landscaping services. We are known for dependable
            scheduling, clear communication, and quality work that helps your home stay clean, polished,
            and curb-appeal ready.
          </p>
          <p className="mt-3 max-w-3xl leading-relaxed text-gray-600">
            Whether you need recurring lawn maintenance or one-time yard help, our team delivers practical
            service with a local, customer-first approach.
          </p>
          <div className="mt-7">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-600 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.aside
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#111827] p-7 text-gray-200 shadow-[0_22px_45px_-28px_rgba(15,23,42,0.9)]"
        >
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#4CAF50]/20 blur-2xl" />
          <h3 className="relative text-lg font-semibold text-white">Residential Service Focus</h3>
          <ul className="relative mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4CAF50]" />
              Lawn care plans built for busy homeowners
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4CAF50]" />
              Quick quote process with clear service options
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4CAF50]" />
              Professional results designed to protect curb appeal
            </li>
          </ul>

          <div className="relative mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-widest text-green-300">Local</p>
              <p className="mt-1 text-sm font-semibold text-white">Deltona Based Team</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-widest text-green-300">Focused</p>
              <p className="mt-1 text-sm font-semibold text-white">Commercial &amp; Residential</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

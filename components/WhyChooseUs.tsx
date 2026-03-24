"use client";

import { motion } from "framer-motion";

import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/motion-variants";

const highlights = [
  {
    title: "Fast Response",
    text: "Quick scheduling, prompt callbacks, and easy quote turnaround."
  },
  {
    title: "Local Experts",
    text: "Deltona-focused team with local knowledge of seasonal lawn conditions."
  },
  {
    title: "Reliable Service",
    text: "Consistent quality from mowing to cleanup and recurring maintenance."
  },
  {
    title: "Affordable Pricing",
    text: "Clear, fair estimates designed for residential and commercial properties."
  }
];

const viewport = { once: true, amount: 0.2 } as const;

export default function WhyChooseUs() {
  return (
    <section className="border-t border-slate-800 bg-[#111827] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="mb-10 text-center"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-green-300">Why Choose Us</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Why Homeowners Choose J&amp;L Lawn Care
          </h2>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-green-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-300">{item.text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

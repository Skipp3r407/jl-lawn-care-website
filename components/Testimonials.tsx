"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { fadeInLeft, fadeInRight } from "@/lib/motion-variants";

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
    city: "DeLand",
    quote: "They made our overgrown yard look amazing in one cleanup visit."
  },
  {
    name: "Victor S.",
    city: "Lake Mary",
    quote: "Friendly local team and dependable service every time."
  }
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

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

const viewport = { once: true, amount: 0.2 } as const;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  const next = () => setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));

  return (
    <section id="reviews" className="border-t border-gray-100 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-green-600">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold text-[#111827] md:text-4xl">
            What Local Customers Are Saying
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-[#F8FAF8] p-8 shadow-lg"
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <Stars />
          <p className="text-lg leading-8 text-slate-700">&ldquo;{current.quote}&rdquo;</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#2E7D32] to-[#4CAF50] text-sm font-bold text-white">
              {initials(current.name)}
            </div>
            <div>
              <p className="font-bold text-slate-900">{current.name}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{current.city}</p>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between">
            <button
              type="button"
              onClick={prev}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Prev
            </button>
            <div className="text-sm text-slate-500">
              {index + 1} / {testimonials.length}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Next
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

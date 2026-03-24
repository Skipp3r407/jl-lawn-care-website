"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

import {
  DEMO_EMAIL,
  DEMO_LOCATION,
  DEMO_MAILTO,
  DEMO_PHONE_DISPLAY,
  DEMO_PHONE_TEL
} from "@/lib/demo-contact";

export default function ContactSection() {
  const [demoNotice, setDemoNotice] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDemoNotice(true);
  }

  return (
    <section id="contact" className="border-t border-gray-100 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-3xl border border-gray-200 bg-gradient-to-br from-[#F8FAF8] to-white p-7 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-green-600">Contact</p>
          <h2 className="mt-3 text-2xl font-semibold text-[#111827] md:text-3xl">Get Your Free Quote</h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Reach out today for dependable local lawn care services in Deltona and nearby areas.
          </p>
          <p className="mt-3 text-xs text-gray-500">
            Portfolio demo: phone and email below are placeholders for display only.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <p>
              <span className="font-semibold text-[#111827]">Phone:</span>{" "}
              <Link href={DEMO_PHONE_TEL} className="text-[#1B5E20] hover:underline">
                {DEMO_PHONE_DISPLAY}
              </Link>
            </p>
            <p>
              <span className="font-semibold text-[#111827]">Email:</span>{" "}
              <Link href={DEMO_MAILTO} className="break-all text-[#1B5E20] hover:underline">
                {DEMO_EMAIL}
              </Link>
            </p>
            <p>
              <span className="font-semibold text-[#111827]">Location:</span> {DEMO_LOCATION}
            </p>
          </div>
        </aside>

        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-[0_22px_45px_-30px_rgba(15,23,42,0.7)]">
          <h3 className="text-2xl font-semibold text-[#111827]">Request Quote</h3>
          <p className="mt-2 text-xs text-gray-500">
            Demo form — submissions are not sent anywhere.
          </p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm font-semibold text-gray-700">
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20"
              />
            </label>
            <label className="block text-sm font-semibold text-gray-700">
              Phone
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20"
              />
            </label>
            <label className="block text-sm font-semibold text-gray-700">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20"
              />
            </label>
            <label className="block text-sm font-semibold text-gray-700">
              Service Needed
              <select className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20">
                <option>Lawn Mowing</option>
                <option>Lawn Maintenance</option>
                <option>Yard Clean Up</option>
                <option>Landscaping</option>
                <option>Recurring Lawn Service</option>
                <option>Trimming &amp; Edging</option>
                <option>Seasonal Cleanups</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-gray-700">
              Message
              <textarea
                rows={4}
                name="message"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20"
                placeholder="Tell us about your property and what service you need."
              />
            </label>
            {demoNotice ? (
              <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                Thanks — this is a portfolio demo, so your message was not delivered. Use the placeholder
                phone or email above to test links.
              </p>
            ) : null}
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_25px_-18px_rgba(27,94,32,0.9)] transition-all duration-200 hover:-translate-y-0.5"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

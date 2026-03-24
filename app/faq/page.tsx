import type { Metadata } from "next";
import Link from "next/link";

import { DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL } from "@/lib/demo-contact";

export const metadata: Metadata = {
  title: "Lawn Care FAQ | J&L Lawn Care (Portfolio Demo)",
  description:
    "Portfolio demo FAQ for a Deltona-area lawn care layout. Answers use sample copy; contact info is placeholder only."
};

const faqs = [
  {
    question: "Do you offer recurring lawn service?",
    answer: "Yes, we offer weekly and biweekly recurring service options based on your lawn and schedule."
  },
  {
    question: "Do you service Deltona and nearby areas?",
    answer:
      "Yes. Deltona is our primary service area, and we also serve surrounding Central Florida cities."
  },
  {
    question: "Can I request lawn mowing and yard cleanup together?",
    answer: "Absolutely. Many customers combine mowing, edging, and cleanup in one visit."
  },
  {
    question: "Do I need to be home during service?",
    answer:
      "Not in most cases. As long as we have access and service details, we can complete the work and follow up."
  },
  {
    question: "How do I request a quote?",
    answer: `Call ${DEMO_PHONE_DISPLAY} or submit the contact form for a quick estimate.`
  },
  {
    question: "Do you offer one-time cleanups?",
    answer: "Yes, one-time and seasonal cleanups are available for overgrowth and debris."
  },
  {
    question: "What types of properties do you service?",
    answer: "We focus on commercial and residential lawn service, with most work serving local homeowners."
  },
  {
    question: "Do you provide trimming and edging?",
    answer: "Yes. Trimming and edging are available as standalone service or as part of maintenance visits."
  }
];

export default function FAQPage() {
  return (
    <main className="bg-[#F8FAF8] py-16 sm:py-20">
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2E7D32]">FAQ</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </header>

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_14px_30px_-24px_rgba(17,24,39,0.55)]"
            >
              <summary className="cursor-pointer list-none pr-4 text-base font-semibold text-[#111827]">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-[#111827] p-7 text-white">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p className="mt-2 text-sm text-gray-300">
            Contact J&amp;L Lawn Care Services LLC for fast answers and a free local quote in Deltona.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-[#2E7D32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1B5E20]"
            >
              Request a Free Quote
            </Link>
            <Link
              href={DEMO_PHONE_TEL}
              className="inline-flex rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

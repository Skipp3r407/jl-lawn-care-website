"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you offer recurring lawn service?",
    answer:
      "Yes. We offer recurring lawn service with weekly and biweekly options for homeowners who want consistent results."
  },
  {
    question: "Do you service Deltona and nearby areas?",
    answer:
      "Absolutely. Deltona is our primary service area, and we also serve nearby Central Florida communities based on availability."
  },
  {
    question: "Can I request lawn mowing and yard cleanup together?",
    answer: "Yes. Many customers bundle mowing, edging, and yard cleanup in one convenient visit."
  },
  {
    question: "Do I need to be home during service?",
    answer:
      "Not in most cases. As long as we have access and service details, we can complete the job and follow up afterward."
  },
  {
    question: "How do I request a quote?",
    answer:
      "Call us at (386) 334-9423 or fill out the quote form below. We respond quickly with local pricing and availability."
  },
  {
    question: "Do you offer one-time cleanups?",
    answer: "Yes. One-time and seasonal cleanups are available for overgrowth, debris, and yard refreshes."
  },
  {
    question: "What types of properties do you service?",
    answer: "We focus on residential lawn care and yard services for homeowners and local property owners."
  },
  {
    question: "Do you provide trimming and edging?",
    answer: "Yes. Trimming and edging are available as part of recurring maintenance or as add-on service."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-gray-100 bg-[#F8FAF8] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-green-600">FAQ</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-[#111827]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-green-50/60"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#111827]">{faq.question}</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-[#2E7D32]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

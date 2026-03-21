"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#0f172a]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/images/logo.png"
            alt="J&L Lawn Care Services LLC"
            width={180}
            height={60}
            className="h-[42px] w-auto object-contain md:h-[56px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <a href="#services" className="text-sm font-medium text-slate-200 transition hover:text-green-300">
            Services
          </a>
          <a href="#transformations" className="text-sm font-medium text-slate-200 transition hover:text-green-300">
            Before & After
          </a>
          <a href="#reviews" className="text-sm font-medium text-slate-200 transition hover:text-green-300">
            Reviews
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-200 transition hover:text-green-300">
            Contact
          </a>
          <a
            href="tel:13863349423"
            className="inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700"
          >
            Call Now
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/20 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div className={`${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden`}>
        <nav className="mx-auto grid max-w-7xl gap-1 px-6 py-4 md:px-10">
          <a href="#services" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10">
            Services
          </a>
          <a href="#transformations" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10">
            Before & After
          </a>
          <a href="#reviews" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10">
            Reviews
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10">
            Contact
          </a>
          <a
            href="tel:13863349423"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md"
          >
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}

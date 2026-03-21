"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Reviews", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-gray-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/90"
          : "border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="J&L Lawn Care homepage"
          className="inline-flex flex-shrink-0 items-center transition-transform duration-200 hover:scale-105"
        >
          <Image
            src="/images/logo.png"
            alt="J&L Lawn Care Logo"
            width={220}
            height={60}
            priority
            className="h-11 w-auto object-contain md:h-[60px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-[#2E7D32]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="tel:13863349423"
            className="hidden rounded-xl bg-[#2E7D32] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B5E20] sm:inline-flex"
          >
            Call Now
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 p-2 text-gray-700 transition hover:border-[#2E7D32] hover:text-[#2E7D32] lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-gray-200 bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-[#2E7D32]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="tel:13863349423"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-[#2E7D32] px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1B5E20]"
          >
            Call Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

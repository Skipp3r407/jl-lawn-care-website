import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import {
  DEMO_EMAIL,
  DEMO_LOCATION,
  DEMO_MAILTO,
  DEMO_PHONE_DISPLAY,
  DEMO_PHONE_TEL
} from "@/lib/demo-contact";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0F172A] text-gray-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-3">
        <div>
          <Link
            href="/"
            aria-label="Go to homepage"
            className="inline-flex items-center opacity-90 transition-opacity duration-200 hover:opacity-100"
          >
            <BrandLogo
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
              fallbackClassName="text-base text-white"
            />
          </Link>
          <p className="mt-3 text-sm font-semibold text-gray-100">J&amp;L Lawn Care Services LLC</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#4CAF50]">Commercial &amp; Residential</p>
          <p className="mt-2 text-sm text-gray-400">
            Trusted residential lawn care for Deltona and nearby Central Florida communities.
          </p>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-green-300">Serving</p>
            <p className="mt-1 text-sm text-gray-300">
              Deltona, DeBary, Orange City, DeLand, Sanford, Lake Mary, Altamonte Springs
            </p>
          </div>
        </div>

        <div className="lg:pl-6 lg:border-l lg:border-white/10">
          <h3 className="text-base font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/#top" className="transition-colors duration-200 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors duration-200 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition-colors duration-200 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/service-areas" className="transition-colors duration-200 hover:text-white">
                Service Areas
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="transition-colors duration-200 hover:text-white">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/faq" className="transition-colors duration-200 hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors duration-200 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:pl-6 lg:border-l lg:border-white/10">
          <h3 className="text-base font-semibold text-white">Services & Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>Lawn Mowing</li>
            <li>Recurring Lawn Service</li>
            <li>Yard Cleanups &amp; Edging</li>
            <li>Landscaping</li>
            <li>
              <Link href={DEMO_PHONE_TEL} className="transition-colors duration-200 hover:text-white">
                {DEMO_PHONE_DISPLAY}
              </Link>
            </li>
            <li>
              <Link href={DEMO_MAILTO} className="transition-colors duration-200 hover:text-white">
                {DEMO_EMAIL}
              </Link>
            </li>
            <li>{DEMO_LOCATION}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} J&amp;L Lawn Care Services LLC. All rights reserved.
        </p>
      </div>

      <div className="w-full bg-black/90 py-2 text-center text-xs text-gray-400">
        <Link
          href="https://elevatedigitalstudios.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200 hover:text-white"
        >
          Website Design by Elevate Digital Studio.
        </Link>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function StickyMobileCall() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-4 md:hidden">
      <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-2 rounded-2xl border border-white/20 bg-white/90 p-2 shadow-[0_20px_28px_-18px_rgba(15,23,42,0.95)] backdrop-blur">
        <Link
          href="tel:13863349423"
          className="flex items-center justify-center rounded-xl bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] px-4 py-3 text-sm font-semibold text-white"
        >
          Call Now
        </Link>
        <Link
          href="/contact"
          className="flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}

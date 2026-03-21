import Link from "next/link";

export default function StickyMobileCall() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-4 md:hidden">
      <Link
        href="tel:13863349423"
        className="mx-auto flex w-full max-w-md items-center justify-center rounded-xl bg-[#2E7D32] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_25px_-18px_rgba(17,24,39,0.95)] transition-all duration-200 hover:bg-[#1B5E20]"
      >
        Call Now
      </Link>
    </div>
  );
}

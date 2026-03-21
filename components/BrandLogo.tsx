"use client";

import { useState } from "react";
import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  fallbackClassName?: string;
  width: number;
  height: number;
};

export default function BrandLogo({ className, fallbackClassName, width, height }: BrandLogoProps) {
  const [logoError, setLogoError] = useState(false);

  if (logoError) {
    return (
      <span className={`inline-flex items-center font-semibold tracking-tight ${fallbackClassName ?? "text-slate-900"}`}>
        J&amp;L Lawn Care Services LLC
      </span>
    );
  }

  return (
    <Image
      src="/images/logo.png"
      alt="J&L Lawn Care Logo"
      width={width}
      height={height}
      priority
      className={className}
      onError={() => setLogoError(true)}
    />
  );
}

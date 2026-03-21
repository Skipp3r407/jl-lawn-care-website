"use client";

import { useState } from "react";

export default function BeforeAfterSection() {
  const [position, setPosition] = useState(50);

  return (
    <section id="transformations" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Before &amp; After</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">See the Lawn Transformation</h2>
          <p className="mt-4 text-base md:text-lg leading-8 text-slate-600">
            Drag the slider to compare the same property before and after service.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
          <div
            className="h-[420px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558521558-037f1cb0276d?auto=format&fit=crop&w=1600&q=80')"
            }}
          />

          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <div
              className="h-full w-[1200px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1600&q=80')"
              }}
            />
          </div>

          <div className="pointer-events-none absolute inset-y-0" style={{ left: `${position}%` }}>
            <div className="h-full w-0.5 -translate-x-1/2 bg-white shadow-lg" />
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute bottom-4 left-1/2 z-10 w-[80%] -translate-x-1/2 accent-green-600"
            aria-label="Before and after comparison slider"
          />

          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
            Before
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-green-600/90 px-3 py-1 text-xs font-semibold text-white">
            After
          </div>
        </div>
      </div>
    </section>
  );
}

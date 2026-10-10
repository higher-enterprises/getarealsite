"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { buySites } from "./data";
import BuyCard from "./buy-card";
import BuySideCard from "./buy-side-card";

export default function Rebrand() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);

  const total = buySites.length;

  /* =========================================================
     AUTO ROTATION
  ========================================================= */

  useEffect(() => {
    if (paused || total <= 1) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  /* =========================================================
     CAROUSEL INDEXES
  ========================================================= */

  const previousIndex = useMemo(() => {
    if (total === 0) return 0;

    return (active - 1 + total) % total;
  }, [active, total]);

  const nextIndex = useMemo(() => {
    if (total === 0) return 0;

    return (active + 1) % total;
  }, [active, total]);

  function next() {
    if (total <= 1) return;

    setActive((current) => (current + 1) % total);
  }

  function previous() {
    if (total <= 1) return;

    setActive((current) => (current - 1 + total) % total);
  }

  /* =========================================================
     EMPTY STATE
  ========================================================= */

  if (total === 0) {
    return (
      <section className="bg-[#040816] pb-20 pt-40 text-white">
        <div className="mx-auto max-w-[1700px] px-8 text-center">
          <h1 className="mx-auto max-w-5xl text-5xl font-light leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Get a{" "}
            <span className="italic text-[#526cff]">
              real
            </span>{" "}
            site that's already built.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg font-light leading-8 text-white/65 sm:text-xl sm:leading-9">
            Choose a fully built and branded RealSite. It's complete,
            professional, and ready to use as-is or completely rebrand
            as your own.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="overflow-hidden bg-[#040816] pb-20 pt-40 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1700px] px-8">
        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="text-center">
          <h1 className="mx-auto max-w-5xl text-5xl font-light leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Get a{" "}
            <span className="italic text-[#526cff]">
              real
            </span>{" "}
            site that's already built.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg font-light leading-8 text-white/65 sm:text-xl sm:leading-9">
            Choose a fully built and branded RealSite. It's complete,
            professional, and ready to use as-is or completely rebrand
            as your own.
          </p>
        </div>

        {/* =====================================================
            CAROUSEL
        ===================================================== */}

        <div className="relative mt-20 flex items-center justify-center gap-6 2xl:gap-10">
          {/* Previous Arrow */}

          <button
            type="button"
            onClick={previous}
            aria-label="Previous RealSite"
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/15 bg-black/20 text-white/70 transition duration-300 hover:border-[#526cff] hover:bg-[#526cff]/10 hover:text-white sm:h-16 sm:w-16"
          >
            <ChevronLeft
              size={28}
              strokeWidth={1.4}
            />
          </button>

          {/* Previous Site */}

          <div className="hidden shrink-0 scale-[0.88] opacity-70 transition-all duration-500 hover:opacity-100 xl:block">
            <BuySideCard
              site={buySites[previousIndex]}
              side="left"
              onClick={() => setActive(previousIndex)}
            />
          </div>

          {/* Active Site */}

          <div className="relative z-10 w-full max-w-[700px] transition-all duration-700">
            <BuyCard site={buySites[active]} />
          </div>

          {/* Next Site */}

          <div className="hidden shrink-0 scale-[0.88] opacity-70 transition-all duration-500 hover:opacity-100 xl:block">
            <BuySideCard
              site={buySites[nextIndex]}
              side="right"
              onClick={() => setActive(nextIndex)}
            />
          </div>

          {/* Next Arrow */}

          <button
            type="button"
            onClick={next}
            aria-label="Next RealSite"
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/15 bg-black/20 text-white/70 transition duration-300 hover:border-[#526cff] hover:bg-[#526cff]/10 hover:text-white sm:h-16 sm:w-16"
          >
            <ChevronRight
              size={28}
              strokeWidth={1.4}
            />
          </button>
        </div>

        {/* =====================================================
            PAGINATION
        ===================================================== */}

        <div className="mt-10 flex justify-center gap-3">
          {buySites.map((site, index) => (
            <button
              key={site.id}
              type="button"
              aria-label={`Show ${site.title}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === active
                  ? "w-8 bg-[#526cff]"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Header from "@/components/navigation/navigation";

const mockups = [
  "/images/acquire-site-01.png",
  "/images/acquire-site-02.png",
  "/images/acquire-site-03.png",
  "/images/acquire-site-04.png",
  "/images/acquire-site-05.png",
  "/images/acquire-site-06.png",
];

const listings = [
  {
    title: "Established Service Business",
    category: "SERVICE BUSINESS",
    revenue: "$18,400/mo",
    price: "$285K",
  },
  {
    title: "Niche Ecommerce Brand",
    category: "ECOMMERCE",
    revenue: "$31,200/mo",
    price: "$495K",
  },
  {
    title: "Professional Services Platform",
    category: "PROFESSIONAL",
    revenue: "$24,700/mo",
    price: "$390K",
  },
];

export default function Acquire() {
  const listingsRef = useRef<HTMLElement | null>(null);

  const [formSubmitted, setFormSubmitted] = useState(false);

  function scrollToListings() {
    listingsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSubmitted(true);
  }

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(
      "[data-acquire-card]"
    );

    cards.forEach((card, index) => {
      card.animate(
        [
          {
            transform: "translateY(0)",
          },
          {
            transform: "translateY(-90px)",
          },
        ],
        {
          duration: 18000 + index * 2200,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030811] text-white">
      {/* =========================================================
          HEADER
      ========================================================= */}

      <div className="absolute inset-x-0 top-0 z-[100]">
        <Header />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[100dvh] overflow-hidden bg-[#030811]">
        {/* Ambient background */}

        <div className="absolute inset-0">
          <div className="absolute right-[-10%] top-[-15%] h-[700px] w-[700px] rounded-full bg-[#3048ff]/10 blur-[140px]" />

          <div className="absolute bottom-[-20%] left-[15%] h-[600px] w-[600px] rounded-full bg-[#3048ff]/5 blur-[130px]" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#030811]/20 via-[#030811]/50 to-[#030811]" />
        </div>

        {/* Hero content */}

        <div className="relative z-20 mx-auto grid min-h-[100dvh] max-w-[1800px] items-center px-7 pb-28 pt-32 sm:px-10 lg:grid-cols-[42%_58%] lg:px-14">
          {/* LEFT */}

          <div className="relative z-30 max-w-[680px]">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.38em] text-[#526cff]">
              ACQUIRE
            </p>

            <h1 className="text-[48px] font-light leading-[1.04] tracking-[-0.05em] sm:text-[58px] lg:text-[68px] xl:text-[76px]">
              Acquire a{" "}
              <span className="text-[#526cff]">real site.</span>
              <br />
              Not just a domain.
            </h1>

            <p className="mt-8 max-w-[590px] text-base font-light leading-8 text-white/55 sm:text-lg">
              Buy an established website with a real audience, real traffic,
              real systems and real revenue already working behind it.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={scrollToListings}
                className="rounded-lg bg-[#3048ff] px-7 py-4 text-sm font-medium shadow-[0_15px_50px_rgba(48,72,255,0.2)] transition hover:bg-[#4057ff]"
              >
                View Available Sites →
              </button>

              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("acquire-interest")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                }}
                className="rounded-lg border border-white/20 bg-black/10 px-7 py-4 text-sm font-medium text-white transition hover:border-[#526cff] hover:bg-[#526cff]/10"
              >
                Tell Us What You Want
              </button>
            </div>
          </div>

          {/* RIGHT — VERTICAL WEBSITE STREAM */}

          <div className="relative mt-12 h-[650px] overflow-hidden lg:mt-0 lg:h-[760px]">
            {/* Fade at top */}

            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-32 bg-gradient-to-b from-[#030811] to-transparent" />

            {/* Fade at bottom */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-[#030811] to-transparent" />

            {/* Cards */}

            <div className="relative mx-auto h-[1100px] w-[92%] max-w-[780px]">
              {mockups.map((src, index) => {
                const left =
                  index % 2 === 0
                    ? "left-[4%]"
                    : "left-[22%]";

                const width =
                  index === 0
                    ? "w-[68%]"
                    : index === 1
                      ? "w-[62%]"
                      : "w-[66%]";

                const top = index * 145;

                return (
                  <div
                    key={src}
                    data-acquire-card
                    className={`absolute ${left} ${width} overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1a] shadow-[0_30px_90px_rgba(0,0,0,0.55)]`}
                    style={{
                      top: `${top}px`,
                      zIndex: mockups.length - index,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Website acquisition preview ${index + 1}`}
                      className="block h-auto w-full"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#030811]/30 to-transparent" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}

        <button
          type="button"
          onClick={scrollToListings}
          className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3 text-white/45 transition hover:text-white"
        >
          <span className="text-[10px] uppercase tracking-[0.35em]">
            Explore
          </span>

          <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </button>
      </section>

      {/* =========================================================
          TRUSTED LISTINGS
      ========================================================= */}

      <section
        ref={listingsRef}
        className="relative scroll-mt-10 overflow-hidden border-t border-white/5 bg-[#050912] py-28 sm:py-36"
      >
        <div className="mx-auto max-w-[1500px] px-7 sm:px-10 lg:px-14">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* GRAPHIC */}

            <div className="relative flex min-h-[420px] items-center justify-center">
              <div className="absolute h-[360px] w-[360px] rounded-full bg-[#3048ff]/10 blur-[100px]" />

              <div className="relative w-full max-w-[470px] rounded-2xl border border-white/10 bg-[#080e1b] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#526cff]">
                      VERIFIED LISTING
                    </p>

                    <p className="mt-2 text-sm font-medium">
                      Established Business
                    </p>
                  </div>

                  <div className="rounded-full border border-[#526cff]/40 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#526cff]">
                    Verified
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg border border-white/5 bg-white/[0.025] p-4">
                    <p className="text-[9px] uppercase tracking-wider text-white/35">
                      Revenue
                    </p>

                    <p className="mt-3 text-lg">$24.7K</p>
                  </div>

                  <div className="rounded-lg border border-white/5 bg-white/[0.025] p-4">
                    <p className="text-[9px] uppercase tracking-wider text-white/35">
                      Traffic
                    </p>

                    <p className="mt-3 text-lg">84K</p>
                  </div>

                  <div className="rounded-lg border border-white/5 bg-white/[0.025] p-4">
                    <p className="text-[9px] uppercase tracking-wider text-white/35">
                      Growth
                    </p>

                    <p className="mt-3 text-[#526cff]">+18%</p>
                  </div>
                </div>

                <div className="mt-5 h-32 rounded-lg border border-white/5 bg-[#030811] p-4">
                  <div className="flex h-full items-end gap-2">
                    {[35, 42, 38, 55, 51, 68, 61, 82, 75, 94].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm bg-[#3048ff]/60"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* COPY */}

            <div className="max-w-[650px]">
              <p className="text-xs uppercase tracking-[0.35em] text-[#526cff]">
                TRUSTED LISTINGS
              </p>

              <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl">
                Know what you're buying.
              </h2>

              <p className="mt-7 text-base leading-8 text-white/50 sm:text-lg">
                Every acquisition starts with understanding the business
                behind the website. We focus on established digital properties
                with measurable performance, documented systems and
                transferable assets.
              </p>

              <div className="mt-9 space-y-5">
                {[
                  "Verified business and ownership information",
                  "Historical revenue and traffic data",
                  "Clear operating metrics and business model",
                  "Documented assets, systems and technology",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 text-sm text-white/65"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#526cff]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          METRICS
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#030811] py-28 sm:py-36">
        <div className="absolute right-[-15%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#3048ff]/5 blur-[130px]" />

        <div className="relative mx-auto grid max-w-[1500px] gap-16 px-7 sm:px-10 lg:grid-cols-[1fr_1fr] lg:px-14">
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#526cff]">
              METRICS THAT MATTER
            </p>

            <h2 className="mt-5 max-w-[650px] text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl">
              Buy the business.
              <br />
              Not the story.
            </h2>

            <p className="mt-7 max-w-[600px] text-base leading-8 text-white/50 sm:text-lg">
              A beautiful website isn't enough. We look at the numbers that
              tell you whether a digital business actually works.
            </p>

            <p className="mt-5 max-w-[600px] text-sm leading-7 text-white/35">
              Revenue. Traffic. Conversion. Customer acquisition. Retention.
              Operating costs. Growth. The metrics behind the asset matter as
              much as the asset itself.
            </p>
          </div>

          {/* DASHBOARD GRAPHIC */}

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-[#070d18] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                    PERFORMANCE
                  </p>

                  <p className="mt-2 text-2xl font-light">
                    Last 12 Months
                  </p>
                </div>

                <span className="text-sm text-[#526cff]">+18.6%</span>
              </div>

              <div className="mt-10 h-[260px]">
                <div className="relative h-full border-l border-b border-white/10">
                  <div className="absolute inset-x-0 top-0 border-t border-white/5" />
                  <div className="absolute inset-x-0 top-1/3 border-t border-white/5" />
                  <div className="absolute inset-x-0 top-2/3 border-t border-white/5" />

                  <svg
                    viewBox="0 0 700 260"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 220 C80 205, 90 180, 160 190 S240 140, 300 155 S390 115, 440 125 S530 70, 600 85 S650 50, 700 40"
                      fill="none"
                      stroke="#526cff"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-white/[0.025] p-4">
                  <p className="text-[9px] uppercase tracking-wider text-white/35">
                    Monthly Rev.
                  </p>

                  <p className="mt-2 text-xl">$31.2K</p>
                </div>

                <div className="rounded-lg bg-white/[0.025] p-4">
                  <p className="text-[9px] uppercase tracking-wider text-white/35">
                    Conversion
                  </p>

                  <p className="mt-2 text-xl">4.8%</p>
                </div>

                <div className="rounded-lg bg-white/[0.025] p-4">
                  <p className="text-[9px] uppercase tracking-wider text-white/35">
                    Retention
                  </p>

                  <p className="mt-2 text-xl">82%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TIME SAVING / ESCROW
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#050a18] py-28 sm:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-16 px-7 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-14">
          {/* GRAPHIC */}

          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl border border-white/10 bg-[#080e1b] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#526cff]">
                    ACQUISITION WORKSPACE
                  </p>

                  <p className="mt-2 text-lg">Closing Process</p>
                </div>

                <div className="rounded-full bg-[#3048ff]/10 px-3 py-1 text-[9px] text-[#526cff]">
                  SECURE
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {[
                  ["01", "Due diligence", "Complete"],
                  ["02", "Asset transfer", "Complete"],
                  ["03", "Escrow funding", "Protected"],
                  ["04", "Ownership transfer", "Ready"],
                ].map(([number, label, status]) => (
                  <div
                    key={number}
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <span className="text-xs text-[#526cff]">{number}</span>

                    <div className="flex-1">
                      <p className="text-sm">{label}</p>
                    </div>

                    <span className="text-[9px] uppercase tracking-wider text-white/40">
                      {status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-xl border border-[#526cff]/20 bg-[#526cff]/5 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      ESCROW
                    </p>

                    <p className="mt-2 text-2xl">$285,000</p>
                  </div>

                  <div className="h-10 w-10 rounded-full border border-[#526cff]/50 bg-[#526cff]/10" />
                </div>

                <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-[#526cff]" />
                </div>
              </div>
            </div>
          </div>

          {/* COPY */}

          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.35em] text-[#526cff]">
              SIMPLE TRANSFER
            </p>

            <h2 className="mt-5 max-w-[700px] text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl">
              Time-saving technology and integrated escrow.
            </h2>

            <p className="mt-7 max-w-[650px] text-base leading-8 text-white/50 sm:text-lg">
              Acquiring a website shouldn't feel like rebuilding a company
              from scratch. The right systems make the transition faster,
              clearer and safer.
            </p>

            <div className="mt-9 space-y-5">
              {[
                "Centralized acquisition workspace",
                "Organized business and website assets",
                "Secure transaction workflow",
                "Integrated escrow process",
                "Clear ownership transfer milestones",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 text-sm text-white/65"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#526cff]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AVAILABLE LISTINGS
      ========================================================= */}

      <section className="border-t border-white/5 bg-[#030811] py-28">
        <div className="mx-auto max-w-[1500px] px-7 sm:px-10 lg:px-14">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#526cff]">
              AVAILABLE OPPORTUNITIES
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] sm:text-5xl">
              Find a business worth owning.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {listings.map((listing) => (
              <article
                key={listing.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#070d18] transition duration-300 hover:border-[#526cff]/60 hover:shadow-[0_20px_70px_rgba(48,72,255,0.12)]"
              >
                <div className="relative h-48 overflow-hidden bg-[#0b1220]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3048ff]/20 via-transparent to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white/50">
                    {listing.category}
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <p className="text-3xl font-light">
                      {listing.price}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-medium">
                    {listing.title}
                  </h3>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/30">
                        Monthly Revenue
                      </p>

                      <p className="mt-2 text-sm text-white/75">
                        {listing.revenue}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/30">
                        Status
                      </p>

                      <p className="mt-2 text-sm text-[#526cff]">
                        Available
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-7 w-full rounded-lg border border-white/15 px-5 py-3 text-xs uppercase tracking-[0.2em] transition hover:border-[#526cff] hover:bg-[#526cff]/10"
                  >
                    View Opportunity →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT INTEREST
      ========================================================= */}

      <section
        id="acquire-interest"
        className="relative overflow-hidden border-t border-white/5 bg-[#05091a] py-28 sm:py-36"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3048ff]/5 blur-[150px]" />

        <div className="relative mx-auto grid max-w-[1200px] gap-16 px-7 sm:px-10 lg:grid-cols-[1fr_0.8fr] lg:px-14">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#526cff]">
              ACQUISITION INTEREST
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl">
              Tell us what you're looking for.
            </h2>

            <p className="mt-7 max-w-[560px] text-base leading-8 text-white/50">
              Tell us what kind of business you want to acquire, your target
              investment range and what you're hoping to find.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#070d18] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
            {formSubmitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#526cff]/10 text-[#526cff]">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-light">
                  Request received.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/45">
                  We'll review your acquisition criteria and follow up with
                  opportunities that fit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/35"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-white/10 bg-[#030811] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#526cff]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/35"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-[#030811] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#526cff]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/35"
                  >
                    Investment Range
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-white/10 bg-[#030811] px-4 py-3 text-sm text-white outline-none transition focus:border-[#526cff]"
                  >
                    <option value="" disabled>
                      Select a range
                    </option>

                    <option value="under-100k">Under $100K</option>
                    <option value="100k-250k">$100K – $250K</option>
                    <option value="250k-500k">$250K – $500K</option>
                    <option value="500k-1m">$500K – $1M</option>
                    <option value="1m-plus">$1M+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/35"
                  >
                    What are you looking for?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full resize-none rounded-lg border border-white/10 bg-[#030811] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#526cff]"
                    placeholder="Industry, business model, revenue target, location, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#3048ff] px-6 py-4 text-sm font-medium shadow-[0_12px_40px_rgba(48,72,255,0.2)] transition hover:bg-[#4057ff]"
                >
                  Submit Acquisition Interest →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="border-t border-white/5 bg-[#030811] px-7 py-24 text-center sm:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#526cff]">
          YOUR NEXT BUSINESS
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light tracking-[-0.04em] sm:text-6xl">
          Don't start from zero.
          <br />
          <span className="text-[#526cff]">Acquire what's already working.</span>
        </h2>

        <button
          type="button"
          onClick={() => {
            document
              .getElementById("acquire-interest")
              ?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
          }}
          className="mt-9 rounded-lg bg-[#3048ff] px-8 py-4 text-sm font-medium transition hover:bg-[#4057ff]"
        >
          Tell Us What You Want →
        </button>
      </section>
    </main>
  );
}
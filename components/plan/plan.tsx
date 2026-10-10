"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const paths = [
  {
    title: "DEVELOP",
    text: "Build a new website, platform, or digital experience from the ground up.",
    href: "/develop",
    image: "/images/choose-your-path/develop.webp",
  },
  {
    title: "PURCHASE",
    text: "Start with a ready-made website or digital solution and make it your own.",
    href: "/purchase",
    image: "/images/choose-your-path/purchase.webp",
  },
  {
    title: "ACQUIRE",
    text: "Acquire an existing website, digital asset, or online business.",
    href: "/acquire",
    image: "/images/choose-your-path/acquire.webp",
  },
  {
    title: "EXPAND",
    text: "Add more capability to your website with ecommerce, CRM, online learning, booking, membership, marketing, and other connected systems.",
    href: "/expand",
    image: "/images/choose-your-path/expand.webp",
  },
];

export default function Plan() {
  return (
    <section className="bg-[#050918] text-white">
      {/* DIGITAL ROADMAP */}
      <div className="relative overflow-hidden py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: "url('/images/digital-roadmap-mountains.png')",
            backgroundSize: "auto 100%",
            backgroundPosition: "left center",
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent from-30% via-[#050918]/70 via-55% to-[#050918] to-75%" />
        <div className="pointer-events-none absolute inset-0 bg-[#050918]/30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pl-16 sm:px-8 sm:pl-20 lg:pl-32 xl:pl-40">
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
            <div>
              <p className="inline-flex rounded-full bg-indigo-500/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-indigo-300 backdrop-blur-sm">
                Plan
              </p>

              <h2 className="mt-7 max-w-4xl text-4xl font-light leading-[1.08] tracking-tight lg:text-6xl">
                A successful website
                <br />
                begins with a
                <br />
                <span className="text-indigo-400">Digital Roadmap.</span>
              </h2>

              <div className="mt-7 h-px w-20 bg-indigo-500" />

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
                The best websites aren&apos;t built by guessing but from clear
                strategic planning. Failing to plan is planning to fail.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#050918]/80 shadow-2xl backdrop-blur-md">
              <div className="px-8 py-12 text-center sm:px-12 lg:py-14">
                <p className="text-xs uppercase tracking-[0.4em] text-indigo-300">
                  Starting From
                </p>

                <div className="mt-4 text-7xl font-light tracking-tight">
                  $149
                </div>

                <div className="mx-auto mt-5 h-px w-24 bg-indigo-500" />

                <p className="mt-6 text-xl font-light text-white/75">
                  Essential Roadmap
                </p>

                <Link
                  href="/plan"
                  className="btn-primary mx-auto mt-9 inline-flex"
                >
                  GET YOUR DIGITAL ROADMAP →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHOOSE YOUR PATH */}
      <div className="border-t border-white/10 bg-[#030711]">
        <div className="mx-auto max-w-[1800px]">
          <div className="px-6 py-16 sm:px-8 lg:px-14 lg:py-20">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#526cff]">
                  What Comes Next
                </p>

                <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Choose your path.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-white/55 lg:text-right">
                Whether you&apos;re starting something new, purchasing a proven
                solution, acquiring an existing digital property, or expanding
                what you already have, there&apos;s a path forward.
              </p>
            </div>
          </div>

          <div className="grid border-t border-white/10 md:grid-cols-2 xl:grid-cols-4">
            {paths.map((path, index) => (
              <Link
                key={path.title}
                href={path.href}
                className={[
                  "group relative overflow-hidden border-b border-white/10 bg-[#050918]",
                  index % 2 === 0 ? "md:border-r" : "",
                  index !== paths.length - 1 ? "xl:border-r" : "",
                  "xl:border-b-0",
                ].join(" ")}
              >
                {/* GRAPHIC HEADER — native proportions, no stretching */}
                <div className="relative h-[250px] overflow-hidden bg-[#050918]">
                  <img
                    src={path.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-70 transition-all duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-100"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[#030711]/10 transition-opacity duration-700 group-hover:opacity-0" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050918] to-transparent" />
                </div>

                <div className="relative min-h-[290px] px-7 pb-9 pt-7 sm:px-9">
                  <h3 className="text-3xl font-light tracking-[0.08em] transition-colors duration-300 group-hover:text-[#6880ff]">
                    {path.title}
                  </h3>

                  <div className="mt-5 h-px w-12 bg-[#526cff] transition-all duration-500 group-hover:w-24" />

                  <p className="mt-6 max-w-[320px] text-base leading-7 text-white/60">
                    {path.text}
                  </p>

                  <div className="absolute bottom-9 left-7 right-7 flex items-center justify-between sm:left-9 sm:right-9">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/40 transition-colors duration-300 group-hover:text-white/80">
                      Explore
                    </span>

                    <ArrowRight className="h-4 w-4 text-white/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#526cff]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

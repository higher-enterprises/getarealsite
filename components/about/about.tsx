"use client";

import { ArrowRight, Eye } from "lucide-react";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-32">

      {/* Background Decorative Lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-64 top-0 h-[900px] w-[900px] rotate-45 border border-white/5" />
        <div className="absolute left-1/3 top-0 h-[900px] w-[900px] -rotate-45 border border-white/5" />
        <div className="absolute right-[-250px] top-0 h-[900px] w-[900px] rotate-45 border border-white/5" />
      </div>

      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        >
          <source src="/videos/business.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />

        {/* Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#0a0a0a]" />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto flex w-full max-w-7xl justify-center px-8">

        <div className="flex w-full max-w-4xl flex-col items-center">

          {/* Heading */}
          <h2 className="mt-6 text-center text-5xl font-light leading-tight text-white lg:text-6xl">
            Websites cost money.
            <br />
            A real site makes it.
          </h2>

          {/* Description */}
          <p className="mt-10 w-full max-w-3xl text-left text-lg leading-9 text-white/60">
            Whether you are custom building from the ground up, purchasing a
            ready-to-launch site, acquiring an existing one that is up and
            running, redesigning an ugly one, or expanding the website that you
            still love, RealSite partners with local businesses to establish
            exceptional digital assets that continuously attract customers,
            generate revenue, and increase in value alongside their businesses.
          </p>

          {/* Buttons */}
          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <button
              className="
                flex
                items-center
                justify-center
                gap-3
                border
                border-white/20
                px-8
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[.25em]
                text-white
                transition-all
                duration-300
                hover:border-indigo-500
                hover:bg-indigo-500/10
              "
            >
              <ArrowRight size={18} />
              Learn More
            </button>

            <button
              className="
                flex
                items-center
                justify-center
                gap-3
                border
                border-white/20
                px-8
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[.25em]
                text-white
                transition-all
                duration-300
                hover:border-indigo-500
                hover:bg-indigo-500/10
              "
            >
              <Eye size={18} />
              View Projects
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
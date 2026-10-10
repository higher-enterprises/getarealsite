"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Compass,
  FileText,
  Search,
  Target,
  Map,
  DollarSign,
  Sparkles,
} from "lucide-react";

import Header from "@/components/navigation/navigation";

const phases = [
  {
    number: "01",
    title: "Assess",
    short: "Where are you now?",
    description:
      "Understand your current website, brand, technology, customers, traffic, conversion and digital position before deciding what to change.",
    deliverable: "Digital Assessment",
    icon: Compass,
    diy: "Assessment Template",
    professional: "Professional Site Assessment",
    details: [
      "Current website review",
      "Brand and positioning review",
      "Technology assessment",
      "Conversion and customer journey review",
      "Opportunities and priorities",
    ],
  },
  {
    number: "02",
    title: "Research",
    short: "What does your market need?",
    description:
      "Understand your audience, competitors, market, search landscape and the opportunities that exist around your business.",
    deliverable: "Market & Audience Brief",
    icon: Search,
    diy: "Research Workbook",
    professional: "Market Research Sprint",
    details: [
      "Audience research",
      "Customer profiles",
      "Competitor landscape",
      "Search opportunities",
      "Market and content opportunities",
    ],
  },
  {
    number: "03",
    title: "Strategize",
    short: "What should you accomplish?",
    description:
      "Turn what you learned into a clear digital strategy that defines your positioning, goals, customer journey and conversion strategy.",
    deliverable: "Digital Strategy",
    icon: Target,
    diy: "Strategy Workbook",
    professional: "Strategy Workshop",
    details: [
      "Positioning",
      "Value proposition",
      "Business objectives",
      "Customer journey",
      "Conversion strategy",
      "Offer strategy",
      "Success metrics",
    ],
  },
  {
    number: "04",
    title: "Plan",
    short: "What should you actually build?",
    description:
      "Turn your strategy into a practical digital roadmap that defines the architecture, pages, systems, features, technology and priorities.",
    deliverable: "Digital Roadmap",
    icon: Map,
    diy: "Website Planning Template",
    professional: "Digital Roadmap Development",
    details: [
      "Website architecture",
      "Sitemap",
      "User flows",
      "Content requirements",
      "Features and functionality",
      "Systems and integrations",
      "Technology recommendations",
      "Timeline and priorities",
    ],
  },
  {
    number: "05",
    title: "Budget",
    short: "What will it take?",
    description:
      "Turn the roadmap into an investment plan so you know what it will take to build, launch, maintain and grow your digital presence.",
    deliverable: "Investment Plan",
    icon: DollarSign,
    diy: "Budget Calculator",
    professional: "Project Investment Plan",
    details: [
      "Recommended scope",
      "Build investment",
      "Optional systems",
      "Marketing investment",
      "Hosting and maintenance",
      "Growth investment",
      "Recommended path forward",
    ],
  },
];

const paths = [
  {
    title: "Build",
    description: "Create a new digital presence from the ground up.",
  },
  {
    title: "Rebrand",
    description: "Transform an existing site into a stronger digital brand.",
  },
  {
    title: "Acquire",
    description: "Purchase an established website and business that's already working.",
  },
  {
    title: "Expand",
    description: "Add systems, capabilities and growth to what you already have.",
  },
];

export default function PlanDetail() {
  const [activePhase, setActivePhase] = useState(0);

  const phase = phases[activePhase];
  const ActiveIcon = phase.icon;

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

      <section className="relative min-h-[100dvh] overflow-hidden">
        {/* Background atmosphere */}

        <div className="absolute inset-0">
          <div className="absolute left-[-10%] top-[5%] h-[650px] w-[650px] rounded-full bg-[#3048ff]/10 blur-[150px]" />

          <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-[#3048ff]/5 blur-[150px]" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#030811]/20 via-[#030811]/70 to-[#030811]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1600px] flex-col justify-center px-7 pb-20 pt-32 sm:px-10 lg:px-14">
          {/* Label */}

          <div className="mb-7">
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-[#526cff]">
              PLAN
            </span>
          </div>

          {/* Headline */}

          <h1 className="max-w-[900px] text-[48px] font-light leading-[1.03] tracking-[-0.055em] sm:text-[62px] lg:text-[76px]">
            Plan your{" "}
            <span className="text-[#526cff]">real site.</span>
          </h1>

          <p className="mt-7 max-w-[680px] text-lg font-light leading-8 text-white/55 sm:text-xl">
            Five steps from where you are to what you should build.
          </p>

          {/* =====================================================
              JOURNEY
          ===================================================== */}

          <div className="mt-20 w-full">
            {/* Connecting line */}

            <div className="relative hidden h-px bg-white/10 lg:block">
              <div
                className="absolute left-0 top-0 h-px bg-[#526cff] transition-all duration-500"
                style={{
                  width: `${(activePhase / (phases.length - 1)) * 100}%`,
                }}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
              {phases.map((item, index) => {
                const Icon = item.icon;
                const active = index === activePhase;
                const complete = index < activePhase;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActivePhase(index)}
                    className="group relative text-left lg:px-5"
                  >
                    <div className="flex items-center gap-4 lg:block">
                      <div
                        className={[
                          "relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border transition-all duration-300",
                          active
                            ? "border-[#526cff] bg-[#526cff] text-white shadow-[0_0_35px_rgba(82,108,255,.35)]"
                            : complete
                              ? "border-[#526cff]/60 bg-[#526cff]/10 text-[#526cff]"
                              : "border-white/15 bg-[#030811] text-white/35 group-hover:border-[#526cff]/50 group-hover:text-[#526cff]",
                        ].join(" ")}
                      >
                        <Icon size={20} strokeWidth={1.5} />
                      </div>

                      <div className="lg:mt-6">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                          {item.number}
                        </p>

                        <h2
                          className={[
                            "mt-1 text-xl font-light transition-colors",
                            active
                              ? "text-white"
                              : "text-white/50 group-hover:text-white",
                          ].join(" ")}
                        >
                          {item.title}
                        </h2>

                        <p
                          className={[
                            "mt-2 text-sm transition-colors",
                            active
                              ? "text-white/60"
                              : "text-white/30 group-hover:text-white/50",
                          ].join(" ")}
                        >
                          {item.short}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scroll */}

          <button
            type="button"
            onClick={() => {
              document
                .getElementById("planning-phases")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-white/35 transition hover:text-white"
          >
            <span className="text-[10px] uppercase tracking-[0.35em]">
              Explore the process
            </span>

            <ArrowDown size={16} />
          </button>
        </div>
      </section>

      {/* =========================================================
          ACTIVE PHASE
      ========================================================= */}

      <section
        id="planning-phases"
        className="border-t border-white/5 bg-[#050a14] py-28 sm:py-36"
      >
        <div className="mx-auto max-w-[1500px] px-7 sm:px-10 lg:px-14">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            {/* LEFT */}

            <div>
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-[0.35em] text-[#526cff]">
                  {phase.number}
                </span>

                <div className="h-px w-16 bg-[#526cff]/50" />

                <span className="text-xs uppercase tracking-[0.35em] text-white/30">
                  {phase.title}
                </span>
              </div>

              <h2 className="mt-7 text-4xl font-light leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                {phase.short}
              </h2>

              <p className="mt-7 max-w-[620px] text-base leading-8 text-white/50 sm:text-lg">
                {phase.description}
              </p>

              {/* Deliverable */}

              <div className="mt-10 rounded-2xl border border-[#526cff]/20 bg-[#526cff]/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#526cff]/30 bg-[#526cff]/10 text-[#526cff]">
                    <FileText size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#526cff]">
                      DELIVERABLE
                    </p>

                    <p className="mt-2 text-xl font-light">
                      {phase.deliverable}
                    </p>

                    <p className="mt-2 text-sm text-white/40">
                      The tangible result of this phase.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="rounded-2xl border border-white/10 bg-[#070d18] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                    WHAT'S INCLUDED
                  </p>

                  <p className="mt-2 text-xl font-light">
                    {phase.deliverable}
                  </p>
                </div>

                <ActiveIcon
                  size={26}
                  strokeWidth={1.25}
                  className="text-[#526cff]"
                />
              </div>

              <div className="mt-7 space-y-4">
                {phase.details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0"
                  >
                    <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#526cff]/10 text-[#526cff]">
                      <Check size={12} />
                    </div>

                    <span className="text-sm text-white/65">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Service options */}

              <div className="mt-8 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                    DO IT YOURSELF
                  </p>

                  <p className="mt-3 text-lg font-light">
                    {phase.diy}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-white/35">
                    Templates, tools and guidance to help you do the work
                    yourself.
                  </p>
                </div>

                <div className="rounded-xl border border-[#526cff]/25 bg-[#526cff]/5 p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#526cff]">
                    WORK WITH REALSITE
                  </p>

                  <p className="mt-3 text-lg font-light">
                    {phase.professional}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-white/40">
                    Have our team handle this part of the process for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase navigation */}

          <div className="mt-16 flex justify-between border-t border-white/5 pt-6">
            <button
              type="button"
              disabled={activePhase === 0}
              onClick={() =>
                setActivePhase((current) => Math.max(0, current - 1))
              }
              className="text-xs uppercase tracking-[0.25em] text-white/35 transition hover:text-white disabled:pointer-events-none disabled:opacity-20"
            >
              ← Previous
            </button>

            <button
              type="button"
              disabled={activePhase === phases.length - 1}
              onClick={() =>
                setActivePhase((current) =>
                  Math.min(phases.length - 1, current + 1)
                )
              }
              className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50 transition hover:text-[#526cff] disabled:pointer-events-none disabled:opacity-20"
            >
              Next Phase
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIY / DONE FOR YOU
      ========================================================= */}

      <section className="border-t border-white/5 bg-[#030811] py-28 sm:py-36">
        <div className="mx-auto max-w-[1300px] px-7 sm:px-10 lg:px-14">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#526cff]">
              HOW MUCH HELP DO YOU WANT?
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] sm:text-5xl">
              You can do it yourself.
              <br />
              Or we can do it with you.
            </h2>

            <p className="mx-auto mt-6 max-w-[650px] text-base leading-8 text-white/45">
              Realsite gives you the tools to plan your site on your own,
              or you can bring us in to handle as much of the process as
              you need.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {/* FREE */}

            <div className="rounded-2xl border border-white/10 bg-[#070d18] p-7">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                START HERE
              </p>

              <h3 className="mt-5 text-2xl font-light">
                Digital Assessment
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Get a basic picture of where your digital presence stands
                before you spend anything.
              </p>

              <div className="mt-8 text-3xl font-light">
                Free
              </div>

              <button className="mt-7 flex w-full items-center justify-center gap-3 rounded-lg border border-white/15 px-5 py-3 text-xs uppercase tracking-[0.2em] transition hover:border-[#526cff] hover:bg-[#526cff]/10">
                Start Assessment
                <ArrowRight size={14} />
              </button>
            </div>

            {/* DIY */}

            <div className="rounded-2xl border border-[#526cff]/30 bg-[#526cff]/5 p-7 shadow-[0_25px_80px_rgba(48,72,255,0.08)]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#526cff]">
                DO IT YOURSELF
              </p>

              <h3 className="mt-5 text-2xl font-light">
                Essential Roadmap
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                Work through the Realsite planning system yourself with
                templates, guides and practical tools.
              </p>

              <div className="mt-8 text-4xl font-light">
                $149
              </div>

              <button className="mt-7 flex w-full items-center justify-center gap-3 rounded-lg bg-[#3048ff] px-5 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-[#4057ff]">
                Get the Roadmap
                <ArrowRight size={14} />
              </button>
            </div>

            {/* DONE FOR YOU */}

            <div className="rounded-2xl border border-white/10 bg-[#070d18] p-7">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                WORK WITH REALSITE
              </p>

              <h3 className="mt-5 text-2xl font-light">
                Digital Blueprint
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Have Realsite take you through the complete five-phase
                planning process.
              </p>

              <div className="mt-8 text-3xl font-light">
                $3,500+
              </div>

              <button className="mt-7 flex w-full items-center justify-center gap-3 rounded-lg border border-white/15 px-5 py-3 text-xs uppercase tracking-[0.2em] transition hover:border-[#526cff] hover:bg-[#526cff]/10">
                Work With Realsite
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIGITAL BLUEPRINT
      ========================================================= */}

      <section className="border-t border-white/5 bg-[#050a18] py-28 sm:py-36">
        <div className="mx-auto max-w-[1200px] px-7 text-center sm:px-10">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-[#526cff]/30 bg-[#526cff]/10 text-[#526cff]">
            <Sparkles size={26} strokeWidth={1.25} />
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.35em] text-[#526cff]">
            COMPLETE THE JOURNEY
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] sm:text-6xl">
            Your Digital Blueprint.
          </h2>

          <p className="mx-auto mt-7 max-w-[700px] text-base leading-8 text-white/45 sm:text-lg">
            Complete all five phases and you'll know where you are, who
            you're trying to reach, what you need to accomplish, what you
            should build and what it will take to make it happen.
          </p>

          <div className="mx-auto mt-14 grid max-w-[1000px] grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-5">
            {phases.map((item) => (
              <div
                key={item.number}
                className="bg-[#070d18] px-5 py-7"
              >
                <p className="text-[10px] tracking-[0.25em] text-[#526cff]">
                  {item.number}
                </p>

                <p className="mt-3 text-sm text-white/70">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CHOOSE YOUR PATH
      ========================================================= */}

      <section className="border-t border-white/5 bg-[#030811] py-28 sm:py-36">
        <div className="mx-auto max-w-[1500px] px-7 sm:px-10 lg:px-14">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#526cff]">
              NOW WHAT?
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] sm:text-6xl">
              Choose your path.
            </h2>

            <p className="mx-auto mt-6 max-w-[650px] text-base leading-8 text-white/45">
              Once you know what you need, Realsite can help you decide
              what comes next.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {paths.map((path) => (
              <button
                key={path.title}
                type="button"
                className="group min-h-[260px] rounded-2xl border border-white/10 bg-[#070d18] p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-[#526cff]/60 hover:bg-[#526cff]/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                    NEXT
                  </span>

                  <ArrowRight
                    size={18}
                    className="text-white/25 transition group-hover:translate-x-1 group-hover:text-[#526cff]"
                  />
                </div>

                <h3 className="mt-16 text-3xl font-light transition group-hover:text-[#526cff]">
                  {path.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {path.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="border-t border-white/5 bg-[#05091a] px-7 py-28 text-center sm:py-36">
        <p className="text-xs uppercase tracking-[0.35em] text-[#526cff]">
          READY?
        </p>

        <h2 className="mx-auto mt-5 max-w-[900px] text-4xl font-light leading-tight tracking-[-0.05em] sm:text-6xl">
          Before you build a real site,
          <br />
          <span className="text-[#526cff]">
            build the right plan.
          </span>
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-3 rounded-lg bg-[#3048ff] px-8 py-4 text-sm font-medium shadow-[0_15px_50px_rgba(48,72,255,.2)] transition hover:bg-[#4057ff]">
            Start Your Assessment
            <ArrowRight size={17} />
          </button>

          <button className="rounded-lg border border-white/15 px-8 py-4 text-sm font-medium transition hover:border-[#526cff] hover:bg-[#526cff]/10">
            Work With Realsite
          </button>
        </div>
      </section>
    </main>
  );
}
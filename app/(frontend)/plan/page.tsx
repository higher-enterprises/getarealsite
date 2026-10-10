"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Compass,
  Search,
  Target,
  Map,
  GitBranch,
  CalendarDays,
  Rocket,
  FileText,
  Check,
  Sparkles,
} from "lucide-react";

import Header from "@/components/navigation/navigation";

const phases = [
  {
    number: "01",
    title: "Assess",
    heroTitle: "Assess your real site.",
    short: "Where are you now?",
    description:
      "Assess your current business, website, brand, assets, technology, customers, traffic, conversion and digital position so you understand where you are before deciding where to go.",
    deliverable: "Digital Assessment",
    icon: Compass,
    image: "/images/assess.jpg",
    diy: "Assessment Template",
    professional: "Professional Site Assessment",
    details: [
      "Current website review",
      "Business and brand review",
      "Technology assessment",
      "Content and asset review",
      "Traffic and conversion review",
      "Customer journey review",
      "Strengths, weaknesses and opportunities",
    ],
  },
  {
    number: "02",
    title: "Research",
    heroTitle: "Research your real market.",
    short: "What does your market need?",
    description:
      "Research your audience, competitors, market, search landscape and customer needs to understand the opportunities your website should address.",
    deliverable: "Market & Audience Brief",
    icon: Search,
    image: "/images/research.png",
    diy: "Research Workbook",
    professional: "Market Research Sprint",
    details: [
      "Audience research",
      "Customer profiles",
      "Customer needs and pain points",
      "Competitor landscape",
      "Market trends",
      "Search opportunities",
      "Content opportunities",
    ],
  },
  {
    number: "03",
    title: "Strategize",
    heroTitle: "Strategize your real site.",
    short: "What should you accomplish?",
    description:
      "Strategize what your website needs to accomplish by defining your positioning, value proposition, business objectives, customer journey and conversion strategy.",
    deliverable: "Digital Strategy",
    icon: Target,
    image: "/images/strategize.png",
    diy: "Strategy Workbook",
    professional: "Strategy Workshop",
    details: [
      "Positioning",
      "Value proposition",
      "Business objectives",
      "Website goals",
      "Customer journey",
      "Conversion strategy",
      "Offer strategy",
      "Success metrics",
    ],
  },
  {
    number: "04",
    title: "Blueprint",
    heroTitle: "Blueprint your real site.",
    short: "What should you actually build?",
    description:
      "Blueprint the website by defining its architecture, pages, navigation, customer journeys, content, features, functionality, systems and technology.",
    deliverable: "Digital Blueprint",
    icon: Map,
    image: "/images/plan.png",
    diy: "Website Planning System",
    professional: "Digital Blueprint Development",
    details: [
      "Website architecture",
      "Sitemap",
      "Navigation",
      "User flows",
      "Customer journeys",
      "Page requirements",
      "Content requirements",
      "Features and functionality",
      "Systems and integrations",
      "Technology recommendations",
    ],
  },
  {
    number: "05",
    title: "Decide",
    heroTitle: "Decide your real site.",
    short: "What is the right path forward?",
    description:
      "Decide whether your best path is to build something new, rebuild what you have, purchase a prebuilt site, acquire an established site, expand an existing site or optimize what already works.",
    deliverable: "Digital Path Decision",
    icon: GitBranch,
    image: "/images/decide.png",
    diy: "Decision Framework",
    professional: "Strategic Path Assessment",
    details: [
      "Build vs. rebuild analysis",
      "Buy vs. build analysis",
      "Existing website evaluation",
      "Acquisition opportunities",
      "Rebrand considerations",
      "Expansion opportunities",
      "Risk and opportunity assessment",
      "Recommended path forward",
    ],
  },
  {
    number: "06",
    title: "Plan",
    heroTitle: "Plan your real site.",
    short: "What will it take?",
    description:
      "Plan the implementation by defining scope, priorities, timeline, resources, budget, responsibilities and the practical steps required to move from blueprint to execution.",
    deliverable: "Implementation Plan",
    icon: CalendarDays,
    image: "/images/budget.png",
    diy: "Implementation Planner",
    professional: "Website Implementation Plan",
    details: [
      "Recommended scope",
      "Project priorities",
      "Implementation timeline",
      "Project phases",
      "Resource requirements",
      "Team responsibilities",
      "Build investment",
      "Technology costs",
      "Marketing investment",
      "Hosting and maintenance",
    ],
  },
  {
    number: "07",
    title: "Launch",
    heroTitle: "Launch your real site.",
    short: "How will you launch, measure and grow?",
    description:
      "Launch your website with the right preparation, measurement and optimization plan, then use what you learn to improve performance and create a path for continued growth.",
    deliverable: "Launch & Growth Plan",
    icon: Rocket,
    image: "/images/launch.png",
    diy: "Launch Checklist",
    professional: "Launch & Growth Strategy",
    details: [
      "Launch preparation",
      "Content and asset readiness",
      "Technical QA",
      "Analytics and tracking",
      "Conversion tracking",
      "Launch checklist",
      "Performance measurement",
      "Optimization plan",
      "Post-launch priorities",
      "Growth roadmap",
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
    description:
      "Transform an existing site into a stronger digital brand.",
  },
  {
    title: "Acquire",
    description:
      "Purchase an established website and business that's already working.",
  },
  {
    title: "Expand",
    description:
      "Add systems, capabilities and growth to what you already have.",
  },
];

export default function PlanPage() {
  const [activePhase, setActivePhase] = useState(0);

  const phase = phases[activePhase];
  const ActiveIcon = phase.icon;

  const nextPhase =
    activePhase < phases.length - 1 ? activePhase + 1 : null;

  useEffect(() => {
    const preloadImages = () => {
      phases.forEach((item) => {
        const image = new Image();
        image.src = item.image;
      });

      const heroImages = [
        "/images/plan-owner.png",
        "/images/plan-blueprint-bg.jpg",
        "/images/planning-options-business-owner.jpg",
        "/images/planning-options-realsite-consultant.jpg",
      ];

      heroImages.forEach((src) => {
        const image = new Image();
        image.src = src;
      });
    };

    preloadImages();
  }, []);

  const goToPhase = (index: number) => {
    if (index < 0 || index >= phases.length) return;

    setActivePhase(index);
  };

  const scrollToPlanningProcess = () => {
    document.getElementById("planning-process")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToPlanningOptions = () => {
    document.getElementById("planning-phases")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030811] text-white">
      {/* =========================================================
          GLOBAL HEADER
      ========================================================= */}

      <div className="absolute inset-x-0 top-0 z-[100]">
        <Header />
      </div>

      {/* =========================================================
          PLAN PAGE HEADER
      ========================================================= */}

      <section className="relative min-h-[100dvh] overflow-hidden border-b border-white/10 bg-[#030811]">
        {/* =====================================================
            BACKGROUND ENVIRONMENT
        ===================================================== */}

        <div className="absolute inset-0">
          {/* Planning background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("/images/plan-blueprint-bg.jpg")',
            }}
          />

          {/* Overall unified dark treatment */}
          <div className="absolute inset-0 bg-[#030811]/48" />

          {/*
            Fade the BACKGROUND into the solid navy on the right.
            The fade begins before the center of the page so the
            text area becomes clean and uncluttered.
          */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(3,8,17,0) 0%, rgba(3,8,17,0) 35%, rgba(3,8,17,0.12) 40%, rgba(3,8,17,0.28) 46%, rgba(3,8,17,0.52) 52%, rgba(3,8,17,0.72) 58%, rgba(3,8,17,0.88) 64%, rgba(3,8,17,0.97) 70%, #030811 76%, #030811 100%)",
            }}
          />

          {/* Top navigation protection */}
          <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-[#030811]/95 via-[#030811]/55 to-transparent" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#030811] via-[#030811]/55 to-transparent" />

          {/* Blue atmospheric glow */}
          <div className="absolute right-[10%] top-[25%] h-[520px] w-[520px] rounded-full bg-[#3048ff]/10 blur-[180px]" />
        </div>

        {/* =====================================================
            SMALL BUSINESS OWNER
            OWNER REMAINS FULLY VISIBLE
        ===================================================== */}

        <div className="pointer-events-none absolute bottom-0 left-[20%] z-10 hidden h-[88%] -translate-x-1/2 lg:block">
          <img
            src="/images/plan-owner.png"
            alt="Small business owner"
            className="h-full w-auto max-w-none object-contain object-bottom"
          />
        </div>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="relative z-20 mx-auto grid min-h-[100dvh] max-w-[1800px] grid-cols-1 items-center px-7 pb-20 pt-32 sm:px-10 lg:grid-cols-[40%_60%] lg:px-14 lg:pb-16 lg:pt-28">
          {/* LEFT SPACER */}

          <div className="hidden lg:block" />

          {/* RIGHT CONTENT */}

          <div className="flex items-center">
            <div className="max-w-[720px]">
              {/* <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.42em] text-[#526cff]">
                Plan Your Website
              </p> */}

              <h1 className="text-[46px] font-light leading-[1.02] tracking-[-0.010em] sm:text-[56px] lg:text-[62px] xl:text-[68px]">
                Good{" "}
                <span className="text-[#526cff]">
                  plans
                </span>{" "}
                create
                <br />
                great{" "}
                <span className="text-[#526cff]">
                  websites.
                </span>
              </h1>

              <p className="mt-7 max-w-[650px] text-base font-light leading-8 text-white/60 sm:text-lg">
                Our planning process aligns strategy, design, and
                technology to build websites that connect with your
                audience and drive measurable results.
              </p>

              {/* =================================================
                  HERO ACTIONS
              ================================================= */}

              <div className="mt-10 flex flex-wrap items-center gap-4">
  <button
    type="button"
    onClick={scrollToPlanningProcess}
    className="group flex h-[58px] items-center justify-center gap-3 rounded-lg bg-[#3048ff] px-8 text-[11px] font-semibold uppercase tracking-[0.28em] shadow-[0_15px_50px_rgba(48,72,255,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4057ff]"
  >
    Explore the Process

    <ArrowDown
      size={15}
      className="plan-arrow-pulse"
    />
  </button>

  <button
    type="button"
    onClick={scrollToPlanningOptions}
    className="group flex h-[58px] items-center justify-center gap-3 rounded-lg border border-white/15 bg-[#030811]/25 px-8 text-[11px] font-semibold uppercase tracking-[0.28em] backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04]"
  >
    Build A Real Plan

    <ArrowDown
      size={15}
      className="plan-arrow-pulse"
    />
  </button>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PLANNING JOURNEY
      ========================================================= */}

      <section
        id="planning-process"
        className="relative min-h-[100dvh] overflow-hidden"
      >
        {/* =====================================================
            BACKGROUND IMAGE LAYERS
        ===================================================== */}

        <div className="absolute inset-0">
          {phases.map((item, index) => {
            const isActive = index === activePhase;

            return (
              <div
                key={item.number}
                className={[
                  "absolute inset-0 transition-all duration-[1200ms] ease-out",
                  isActive
                    ? "translate-x-0 scale-100 opacity-100"
                    : index < activePhase
                      ? "-translate-x-[4%] scale-[1.04] opacity-0"
                      : "translate-x-[4%] scale-[1.04] opacity-0",
                ].join(" ")}
                style={{
                  backgroundImage: `url("${item.image}")`,
                  backgroundPosition: "center right",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            );
          })}

          <div className="absolute inset-0 bg-[#030811]/35" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#030811] via-[#030811]/95 via-[38%] to-[#030811]/35" />

          <div className="absolute inset-y-0 right-0 w-[65%] bg-gradient-to-l from-transparent via-[#030811]/10 to-[#030811]/90" />

          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#030811] to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#030811] via-[#030811]/75 to-transparent" />

          <div className="absolute right-[8%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#3048ff]/10 blur-[160px]" />
        </div>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1800px] flex-col justify-center px-7 pb-24 pt-32 sm:px-10 lg:px-14">
          {/* Label */}

          <div>
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-[#526cff]">
              THE REALSITE PLANNING PROCESS
            </span>
          </div>

          {/* =================================================
              DYNAMIC HERO TITLE
          ================================================= */}

          <div
            key={phase.number}
            className="mt-7 max-w-[1000px] transition-all duration-500"
          >
            <h1 className="text-[48px] font-light leading-[1.03] tracking-[-0.055em] sm:text-[62px] lg:text-[76px]">
              {phase.heroTitle}
            </h1>

            <p className="mt-7 max-w-[780px] text-lg font-light leading-8 text-white/55 sm:text-xl">
              {phase.description}
            </p>
          </div>

          {/* =====================================================
              STEP JOURNEY
          ===================================================== */}

          <div className="mt-16 w-full lg:mt-20">
            {/* Connecting line */}

            <div className="relative hidden h-px bg-white/10 lg:block">
              <div
                className="absolute left-0 top-0 h-px bg-[#526cff] transition-all duration-700"
                style={{
                  width:
                    activePhase === 0
                      ? "0%"
                      : `${
                          (activePhase /
                            (phases.length - 1)) *
                          100
                        }%`,
                }}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-7 lg:gap-0">
              {phases.map((item, index) => {
                const Icon = item.icon;
                const active = index === activePhase;
                const isNext = index === nextPhase;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => goToPhase(index)}
                    className="group relative text-left lg:px-3"
                  >
                    <div className="flex items-center gap-4 lg:block">
                      {/* STEP CIRCLE */}

                      <div
                        className={[
                          "relative z-20 grid h-14 w-14 shrink-0 place-items-center rounded-full border transition-all duration-500",
                          active
                            ? "border-[#526cff] bg-[#526cff] text-white shadow-[0_0_45px_rgba(82,108,255,.4)]"
                            : "border-white/15 bg-[#030811]/85 text-white/35 backdrop-blur-sm group-hover:border-[#526cff]/70 group-hover:text-[#526cff]",
                          isNext
                            ? "plan-next-pulse border-[#526cff]/70 text-[#526cff]"
                            : "",
                        ].join(" ")}
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.5}
                          className="relative z-10"
                        />

                        {isNext && (
                          <span className="absolute inset-[-7px] rounded-full border border-[#526cff]/30 plan-next-ring" />
                        )}
                      </div>

                      {/* STEP TEXT */}

                      <div className="lg:mt-6">
                        <p
                          className={[
                            "text-[10px] uppercase tracking-[0.3em] transition-colors",
                            active
                              ? "text-[#526cff]"
                              : "text-white/25",
                          ].join(" ")}
                        >
                          {item.number}
                        </p>

                        <h2
                          className={[
                            "mt-1 text-lg font-light transition-colors duration-300",
                            active
                              ? "text-white"
                              : "text-white/45 group-hover:text-white",
                          ].join(" ")}
                        >
                          {item.title}
                        </h2>

                        <p
                          className={[
                            "mt-2 text-xs transition-colors duration-300",
                            active
                              ? "text-white/60"
                              : "text-white/25 group-hover:text-white/45",
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

         {/* =====================================================
    CONTINUE TO NEXT SECTION
===================================================== */}

<button
  type="button"
  onClick={() =>
    document.getElementById("planning-phases")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center"
  aria-label="Continue to planning options"
>
  <ArrowDown
    size={18}
    className="plan-arrow-pulse text-white/40 transition-colors group-hover:text-[#526cff]"
  />
</button>

          
        </div>
      </section>

      {/* =========================================================
          HOW MUCH HELP
      ========================================================= */}

      <section
        id="planning-phases"
        className="relative overflow-hidden border-t border-white/5 bg-[#030811] py-28 sm:py-36"
      >
        {/* =====================================================
    BACKGROUND PEOPLE
===================================================== */}

<div className="pointer-events-none absolute inset-0 overflow-hidden">
  {/* LEFT — BUSINESS OWNER */}
  <div className="absolute inset-y-0 left-0 hidden w-[42%] lg:block">
    <img
      src="/images/planning-options-business-owner.jpg"
      alt=""
      className="h-full w-full object-cover object-center"
      style={{
        filter: "brightness(1.08) contrast(1.05)",
        WebkitMaskImage:
          "linear-gradient(to right, black 0%, black 58%, rgba(0,0,0,.85) 68%, rgba(0,0,0,.5) 80%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, black 0%, black 58%, rgba(0,0,0,.85) 68%, rgba(0,0,0,.5) 80%, transparent 100%)",
      }}
    />
  </div>

  {/* RIGHT — REALSITE CONSULTANT */}
  <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
    <img
      src="/images/planning-options-realsite-consultant.jpg"
      alt=""
      className="h-full w-full object-cover object-center"
      style={{
        filter: "brightness(1.08) contrast(1.05)",
        WebkitMaskImage:
          "linear-gradient(to left, black 0%, black 58%, rgba(0,0,0,.85) 68%, rgba(0,0,0,.5) 80%, transparent 100%)",
        maskImage:
          "linear-gradient(to left, black 0%, black 58%, rgba(0,0,0,.85) 68%, rgba(0,0,0,.5) 80%, transparent 100%)",
      }}
    />
  </div>

  {/* Very light unified navy treatment */}
  <div className="absolute inset-0 bg-[#030811]/12" />

  {/* Top blend */}
  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#030811]/70 to-transparent" />

  {/* Bottom blend */}
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030811]/70 to-transparent" />
</div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="relative z-10 mx-auto max-w-[1300px] px-7 sm:px-10 lg:px-14">
          {/* HEADER */}

          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#526cff]">
              HOW MUCH HELP DO YOU WANT?
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.035em] sm:text-5xl">
              You can do it yourself.
              <br />
              Or we can do it with you.
            </h2>

            <p className="mx-auto mt-6 max-w-[650px] text-base leading-8 text-white/45">
              Choose the level of planning support that fits your project.
              Start with a website-specific Roadmap, collaborate with a
              Realsite planner, or have us develop the complete plan for you.
            </p>
          </div>

{/* =====================================================
    PLANNING OPTIONS
===================================================== */}

<div className="mx-auto mt-24 grid max-w-[960px] gap-6 md:grid-cols-3">
  {/* ROADMAP */}

  <div className="flex min-h-[400px] flex-col rounded-2xl border border-white/10 bg-[#070d18]/72 p-7 backdrop-blur-[6px]">
    <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
      DO IT YOURSELF
    </p>

    <h3 className="mt-5 text-2xl font-light">
      Roadmap
    </h3>

    <p className="mt-4 min-h-[112px] text-sm leading-7 text-white/45">
      Get a website-specific planning kit with
      <br />
      the tools, worksheets, guidance and
      <br />
      framework you need to confidently
      <br />
      plan your website yourself.
    </p>

    <div className="mt-7">
      <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
        Starting at
      </p>

      <div className="mt-2 text-4xl font-light">
        $99
      </div>
    </div>

    <button
      type="button"
      className="group mt-12 flex w-full items-center justify-center gap-3 rounded-lg border border-white/15 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] transition hover:border-[#526cff] hover:bg-[#526cff]/10"
    >
      Choose A Roadmap

      <ArrowRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  </div>

  {/* COLLABORATION */}

  <div className="flex min-h-[400px] flex-col rounded-2xl border border-[#526cff]/45 bg-[#081022]/72 p-7 shadow-[0_25px_80px_rgba(48,72,255,0.10)] backdrop-blur-[6px]">
    <p className="text-[10px] uppercase tracking-[0.3em] text-[#526cff]">
      DO IT WITH US
    </p>

    <h3 className="mt-5 text-2xl font-light">
      Collaboration
    </h3>

    <p className="mt-4 min-h-[112px] text-sm leading-7 text-white/50">
      Get your Roadmap plus expert planning
      <br />
      hours to work through strategy,
      <br />
      structure and important decisions
      <br />
      together with a Realsite planner.
    </p>

    <div className="mt-7">
      <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
        Starting at
      </p>

      <div className="mt-2 text-4xl font-light">
        $399
      </div>
    </div>

    <button
      type="button"
      className="group mt-12 flex w-full items-center justify-center gap-3 rounded-lg bg-[#3048ff] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] transition hover:bg-[#4057ff]"
    >
      Plan With Realsite

      <ArrowRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  </div>

  {/* SIGNATURE */}

  <div className="flex min-h-[400px] flex-col rounded-2xl border border-white/10 bg-[#070d18]/72 p-7 backdrop-blur-[6px]">
    <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
      WE PLAN IT FOR YOU
    </p>

    <h3 className="mt-5 text-2xl font-light">
      Signature
    </h3>

    <p className="mt-4 min-h-[112px] text-sm leading-7 text-white/45">
      Have Realsite conduct the research,
      <br />
      strategy, blueprinting and planning
      <br />
      process and deliver a complete,
      <br />
      professional website plan.
    </p>

    <div className="mt-7">
      <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
        Starting at
      </p>

      <div className="mt-2 text-4xl font-light">
        $899
      </div>
    </div>

    <button
      type="button"
      className="group mt-12 flex w-full items-center justify-center gap-3 rounded-lg border border-white/15 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] transition hover:border-[#526cff] hover:bg-[#526cff]/10"
    >
      Let Us Plan It

      <ArrowRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  </div>
</div>

          <p className="mt-8 text-center text-xs tracking-wide text-white/30">
            Pricing varies by website type and planning complexity.
          </p>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}



      {/* =========================================================
          ANIMATION
      ========================================================= */}

      <style jsx global>{`
        @keyframes plan-next-pulse {
          0%,
          100% {
            box-shadow:
              0 0 0 0 rgba(82, 108, 255, 0),
              0 0 0 0 rgba(82, 108, 255, 0);
          }

          50% {
            box-shadow:
              0 0 0 7px rgba(82, 108, 255, 0.08),
              0 0 28px rgba(82, 108, 255, 0.2);
          }
        }

        @keyframes plan-next-ring {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.95);
          }

          50% {
            opacity: 0.65;
            transform: scale(1.08);
          }
        }

        @keyframes plan-arrow-pulse {
          0%,
          100% {
            opacity: 0.35;
            transform: translateY(0);
          }

          50% {
            opacity: 0.9;
            transform: translateY(4px);
          }
        }

        .plan-next-pulse {
          animation: plan-next-pulse 2.8s ease-in-out infinite;
        }

        .plan-next-ring {
          animation: plan-next-ring 2.8s ease-in-out infinite;
        }

        .plan-arrow-pulse {
          animation: plan-arrow-pulse 2.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .plan-next-pulse,
          .plan-next-ring,
          .plan-arrow-pulse {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
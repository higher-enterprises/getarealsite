"use client";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Search,
  ClipboardList,
  FolderOpen,
  Layers3,
  PenTool,
  Code2,
  Puzzle,
  Gauge,
  FlaskConical,
  Rocket,
  Check,
} from "lucide-react";
import Home from "../page";
import BusinessConceptCarousel from "@/components/BusinessConceptCarousel";
const buildSteps = [
  {
    title: "Research",
    description:
      "We learn about your business, audience, industry, competitors, opportunities, and goals.",
    details: ["Business", "Audience"],
    icon: Search,
    employeeImage:
      "/images/build/process/research-employee.png",
    backgroundImage:
      "/images/build/process/office-background.png",
  },
  {
    title: "Plan",
    description:
      "We define the goals, strategy, scope, structure, and roadmap needed to move forward.",
    details: ["Strategy", "Roadmap"],
    icon: ClipboardList,
    employeeImage:
      "/images/build/process/research-employee.png",
    backgroundImage:
      "/images/build/process/office-background.png",
  },
  {
    title: "Gather",
    description:
      "We collect the content, brand assets, access, information, and materials required for the project.",
    details: ["Content", "Assets"],
    icon: FolderOpen,
    employeeImage:
      "/images/build/process/research-employee.png",
    backgroundImage:
      "/images/build/process/office-background.png",
  },
  {
    title: "Choose",
    description:
      "We determine whether the right path is to build, purchase, acquire, or expand your RealSite.",
    details: [
      "Build",
      "Purchase",
      "Acquire",
      "Expand",
    ],
    icon: Layers3,
    employeeImage:
      "/images/build/process/research-employee.png",
    backgroundImage:
      "/images/build/process/office-background.png",
  },
  {
    title: "Design",
    description:
      "We create the user experience, visual system, layouts, and interfaces that connect with your audience.",
    details: ["UX / UI", "Brand"],
    icon: PenTool,
    employeeImage:
      "/images/build/process/research-employee.png",
    backgroundImage:
      "/images/build/process/office-background.png",
  },
  {
    title: "Develop",
    description:
      "We turn approved designs into a fast, scalable, responsive website using modern development practices.",
    details: ["Code", "CMS"],
    icon: Code2,
    employeeImage:
      "/images/build/process/research-employee.png",
    backgroundImage:
      "/images/build/process/office-background.png",
  },
  {
    title: "Integrate",
    description:
      "We connect the systems, tools, forms, CRM, commerce, and services your website depends on.",
    details: ["Integrations", "APIs"],
    icon: Puzzle,
    employeeImage:
      "/images/build/process/research-employee.png",
    backgroundImage:
      "/images/build/process/office-background.png",
  },
  {
    title: "Optimize",
    description:
      "We refine the website for usability, speed, search visibility, conversion, and overall performance.",
    details: ["SEO", "Performance"],
    icon: Gauge,
    employeeImage:
      "/images/build/process/research-employee.png",
    backgroundImage:
      "/images/build/process/office-background.png",
  },
  {
    title: "Test",
    description:
      "We thoroughly test the experience across devices, browsers, functionality, integrations, and real-world use cases.",
    details: ["QA", "Devices"],
    icon: FlaskConical,
    employeeImage:
      "/images/build/process/research-employee.png",
    backgroundImage:
      "/images/build/process/office-background.png",
  },
  {
    title: "Launch",
    description:
      "We deploy your RealSite, monitor the launch, and make sure everything is ready to support your growth.",
    details: ["Launch", "Support"],
    icon: Rocket,
    employeeImage:
      "/images/build/process/research-employee.png",
    backgroundImage:
      "/images/build/process/office-background.png",
  },
];
const loopedBuildSteps = [
  ...buildSteps,
  ...buildSteps,
];
const buildPackages = [
  {
    number: "01",
    kicker: "START SIMPLE",
    name: "Starter",
    pages: "1 PAGE REALSITE",
    description:
      "A focused professional presence for businesses that need one strong page to establish themselves online.",
    features: [
      "1 custom page",
      "Custom visual design",
      "Mobile responsive",
      "Contact form",
    ],
    price: "$799",
    cta: "SELECT STARTER",
    featured: false,
  },
  {
    number: "02",
    kicker: "BUILD YOUR FOUNDATION",
    name: "Complete",
    pages: "UP TO 5 PAGES",
    description:
      "Everything you need for a complete professional website present built to attract, convert, and grow engagement.",
    features: [
      "Up to 5 custom pages",
      "Custom visual design",
      "Contact / lead capture",
      "Blog or news capability",
    ],
    price: "$2,999",
    cta: "SELECT COMPLETE",
    featured: false,
  },
  {
    number: "03",
    kicker: "EXPAND YOUR PRESENCE",
    name: "Professional",
    pages: "UP TO 10 PAGES",
    description:
      "A larger digital presence for established businesses that need deeper content, integrations and conversion paths.",
    features: [
      "Up to 10 custom pages",
      "Integrated content management system",
      "Complete package features",
      "Basic SEO Optimization",
    ],
    price: "$4,999",
    cta: "SELECT PROFESSIONAL",
    featured: false,
  },
  {
    number: "04",
    kicker: "BUILD AT SCALE",
    name: "Enterprise",
    pages: "UP TO 25 PAGES",
    description:
      "An expansive RealSite for organizations with multiple audiences, complex architecture and advanced requirements.",
    features: [
      "Up to 25 custom pages",
      "Advanced architecture",
      "CRM + automation",
      "Performance optimization",
    ],
    price: "$9,999",
    cta: "SELECT ENTERPRISE",
    featured: false,
  },
];
export default function Page() {
  const processViewportRef =
    useRef<HTMLDivElement>(null);
  const processTrackRef =
    useRef<HTMLDivElement>(null);
  const animationFrameRef =
    useRef<number | null>(null);
  const previousTimeRef =
    useRef<number | null>(null);
  const trackPositionRef =
    useRef(0);
  const loopWidthRef =
    useRef(0);
  const resumeTimeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    );
  const isPausedRef =
    useRef(false);
  const [activeStep, setActiveStep] =
    useState(0);
  const scrollToPricing = () => {
    document
      .getElementById("build-packages")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };
  const scrollToCustom = () => {
    document
      .getElementById("custom-realsite")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };
  const applyTrackPosition = () => {
    const track =
      processTrackRef.current;
    if (!track) return;
    track.style.transform =
      `translate3d(${-trackPositionRef.current}px, 0, 0)`;
  };
  const measureCarousel = () => {
    const track =
      processTrackRef.current;
    if (!track) return 0;
    const cards =
      track.querySelectorAll<HTMLElement>(
        "[data-build-card]"
      );
    if (
      cards.length <
      buildSteps.length + 1
    ) {
      return 0;
    }
    const first =
      cards[0];
    const firstDuplicate =
      cards[buildSteps.length];
    if (
      !first ||
      !firstDuplicate
    ) {
      return 0;
    }
    const loopWidth =
      firstDuplicate.offsetLeft -
      first.offsetLeft;
    loopWidthRef.current =
      loopWidth;
    return loopWidth;
  };
  const normalizePosition = () => {
    const loopWidth =
      loopWidthRef.current;
    if (!loopWidth) return;
    while (
      trackPositionRef.current >=
      loopWidth
    ) {
      trackPositionRef.current -=
        loopWidth;
    }
    while (
      trackPositionRef.current < 0
    ) {
      trackPositionRef.current +=
        loopWidth;
    }
  };
  const updateActiveFromPosition = () => {
    const track =
      processTrackRef.current;
    const loopWidth =
      loopWidthRef.current;
    if (!track || !loopWidth) {
      return;
    }
    const cards =
      track.querySelectorAll<HTMLElement>(
        "[data-build-card]"
      );
    let closestIndex = 0;
    let closestDistance =
      Infinity;
    for (
      let index = 0;
      index < buildSteps.length;
      index++
    ) {
      const card =
        cards[index];
      if (!card) continue;
      const cardPosition =
        card.offsetLeft;
      let distance =
        Math.abs(
          cardPosition -
            trackPositionRef.current
        );
      const wrappedDistance =
        Math.abs(
          cardPosition +
            loopWidth -
            trackPositionRef.current
        );
      distance = Math.min(
        distance,
        wrappedDistance
      );
      if (
        distance <
        closestDistance
      ) {
        closestDistance =
          distance;
        closestIndex =
          index;
      }
    }
    setActiveStep((current) =>
      current === closestIndex
        ? current
        : closestIndex
    );
  };
  const pauseAutoScroll = () => {
    isPausedRef.current = true;
    if (
      resumeTimeoutRef.current
    ) {
      clearTimeout(
        resumeTimeoutRef.current
      );
      resumeTimeoutRef.current =
        null;
    }
  };
  const resumeAutoScroll = () => {
    if (
      resumeTimeoutRef.current
    ) {
      clearTimeout(
        resumeTimeoutRef.current
      );
    }
    resumeTimeoutRef.current =
      setTimeout(() => {
        isPausedRef.current =
          false;
        previousTimeRef.current =
          null;
      }, 1200);
  };
  const goToStep = (
    index: number
  ) => {
    const track =
      processTrackRef.current;
    if (!track) return;
    const cards =
      track.querySelectorAll<HTMLElement>(
        "[data-build-card]"
      );
    const normalizedIndex =
      ((index % buildSteps.length) +
        buildSteps.length) %
      buildSteps.length;
    const target =
      cards[normalizedIndex];
    if (!target) return;
    trackPositionRef.current =
      target.offsetLeft;
    normalizePosition();
    applyTrackPosition();
    setActiveStep(
      normalizedIndex
    );
    previousTimeRef.current =
      null;
  };
  const moveProcess = (
    direction:
      | "previous"
      | "next"
  ) => {
    pauseAutoScroll();
    const nextIndex =
      direction === "next"
        ? (activeStep + 1) %
          buildSteps.length
        : (activeStep -
            1 +
            buildSteps.length) %
          buildSteps.length;
    goToStep(nextIndex);
    resumeAutoScroll();
  };
  useEffect(() => {
    let resizeFrame:
      | number
      | null = null;
    const initialize =
      () => {
        const loopWidth =
          measureCarousel();
        if (!loopWidth) {
          resizeFrame =
            requestAnimationFrame(
              initialize
            );
          return;
        }
        trackPositionRef.current =
          0;
        applyTrackPosition();
        previousTimeRef.current =
          null;
      };
    initialize();
    const handleResize =
      () => {
        if (resizeFrame) {
          cancelAnimationFrame(
            resizeFrame
          );
        }
        resizeFrame =
          requestAnimationFrame(
            () => {
              measureCarousel();
              normalizePosition();
              applyTrackPosition();
              previousTimeRef.current =
                null;
            }
          );
      };
    window.addEventListener(
      "resize",
      handleResize
    );
    return () => {
      if (resizeFrame) {
        cancelAnimationFrame(
          resizeFrame
        );
      }
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);
  useEffect(() => {
    const pixelsPerSecond =
      30;
    const animate = (
      time: number
    ) => {
      if (
        previousTimeRef.current ===
        null
      ) {
        previousTimeRef.current =
          time;
      }
      const elapsed =
        Math.min(
          time -
            previousTimeRef.current,
          50
        );
      previousTimeRef.current =
        time;
      if (
        !isPausedRef.current &&
        loopWidthRef.current > 0
      ) {
        trackPositionRef.current +=
          (pixelsPerSecond *
            elapsed) /
          1000;
        normalizePosition();
        applyTrackPosition();
        updateActiveFromPosition();
      }
      animationFrameRef.current =
        requestAnimationFrame(
          animate
        );
    };
    animationFrameRef.current =
      requestAnimationFrame(
        animate
      );
    return () => {
      if (
        animationFrameRef.current !==
        null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, []);
  useEffect(() => {
    return () => {
      if (
        resumeTimeoutRef.current
      ) {
        clearTimeout(
          resumeTimeoutRef.current
        );
      }
    };
  }, []);
  return (
    <>
      <main className="relative bg-[#030811] text-white">
        <Home/>
        {/* =========================================================
            GLOBAL NAVIGATION
        ========================================================= */}
        {/* =========================================================
            BUILD HERO + PROCESS
        ========================================================= */}
        <section className="relative min-h-[100dvh] overflow-hidden border-b border-white/10 bg-[#030811]">
          {/* =====================================================
              ACTIVE STEP OFFICE BACKGROUND
          ===================================================== */}
          <div className="absolute inset-0">
            {buildSteps.map(
              (step, index) => (
                <div
                  key={`${step.title}-background`}
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
                    activeStep ===
                    index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  style={{
                    backgroundImage:
                      `url("${step.backgroundImage}")`,
                  }}
                />
              )
            )}
            <div className="absolute inset-0 bg-[#030811]/38" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #030811 0%, #030811 18%, rgba(3,8,17,.98) 26%, rgba(3,8,17,.92) 34%, rgba(3,8,17,.78) 43%, rgba(3,8,17,.58) 52%, rgba(3,8,17,.34) 62%, rgba(3,8,17,.12) 74%, rgba(3,8,17,0) 88%)",
              }}
            />
            <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-[#030811]/95 via-[#030811]/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#030811] via-[#030811]/55 to-transparent" />
            <div className="absolute right-[12%] top-[24%] h-[520px] w-[520px] rounded-full bg-[#3048ff]/8 blur-[180px]" />
          </div>
          {/* =====================================================
              HERO CONTENT
          ===================================================== */}
          <div className="relative z-20 mx-auto flex min-h-[100dvh] max-w-[1800px] flex-col px-7 pb-8 pt-32 sm:px-10 lg:px-14 lg:pb-8 lg:pt-28">
            {/* ===================================================
                HERO COPY
            =================================================== */}
            <div className="flex flex-1 items-center">
              <div className="max-w-[760px]">
                <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.42em] text-[#526cff]">
                  Build
                </p>
                <h1 className="text-[46px] font-light leading-[1.02] tracking-[-0.01em] sm:text-[56px] lg:text-[62px] xl:text-[68px]">
                  Real{" "}
                  <span className="text-[#526cff]">
                    websites.
                  </span>
                  <br />
                  Built the{" "}
                  <span className="text-[#526cff]">
                    right way.
                  </span>
                </h1>
                <p className="mt-7 max-w-[650px] text-base font-light leading-8 text-white/60 sm:text-lg">
                  From strategy and
                  design to development
                  and launch, we build
                  professional websites
                  around your business,
                  your customers, and
                  the way you want to
                  grow.
                </p>
                <div className="mt-10">
                  <button
                    type="button"
                    onClick={
                      scrollToPricing
                    }
                    className="group flex h-[58px] items-center justify-center gap-3 rounded-lg bg-[#3048ff] px-8 text-[11px] font-semibold uppercase tracking-[0.28em] shadow-[0_15px_50px_rgba(48,72,255,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4057ff]"
                  >
                    View Pricing
                    <ArrowDown
                      size={15}
                      className="build-arrow-pulse"
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* ===================================================
                PROCESS CAROUSEL
            =================================================== */}
            <div
              id="build-process"
              className="relative z-30 mt-8 pb-4 lg:mt-4"
            >
              <div
                ref={
                  processViewportRef
                }
                className="relative overflow-hidden"
              >
                <div
                  ref={
                    processTrackRef
                  }
                  className="build-process-track flex w-max gap-4 will-change-transform"
                >
                  {loopedBuildSteps.map(
                    (
                      step,
                      physicalIndex
                    ) => {
                      const logicalIndex =
                        physicalIndex %
                        buildSteps.length;
                      const Icon =
                        step.icon;
                      const isActive =
                        activeStep ===
                        logicalIndex;
                      return (
                        <article
                          key={`${step.title}-${physicalIndex}`}
                          data-build-card
                          onPointerDown={
                            pauseAutoScroll
                          }
                          onPointerUp={
                            resumeAutoScroll
                          }
                          onPointerCancel={
                            resumeAutoScroll
                          }
                          onClick={() => {
                            pauseAutoScroll();
                            goToStep(
                              logicalIndex
                            );
                            resumeAutoScroll();
                          }}
                          className={`build-process-card group relative flex shrink-0 cursor-pointer flex-col overflow-hidden rounded-[14px] border px-6 py-6 backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-500 ${
                            isActive
                              ? "border-[#3048ff] bg-[#071426]/95 shadow-[0_18px_55px_rgba(48,72,255,.16)]"
                              : "border-white/10 bg-[#050d18]/80 hover:border-[#526cff]/45 hover:bg-[#071426]/90"
                          }`}
                        >
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl border transition duration-500 ${
                              isActive
                                ? "border-[#526cff]/50 bg-[#0b1b39] text-[#526cff]"
                                : "border-white/10 bg-[#07101d]/80 text-[#526cff]/85"
                            }`}
                          >
                            <Icon
                              size={24}
                              strokeWidth={
                                1.45
                              }
                            />
                          </div>
                          <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#526cff]">
                            STEP:{" "}
                            {logicalIndex +
                              1}
                          </p>
                          <h3 className="mt-2 text-[22px] font-medium tracking-[-0.025em] text-white">
                            {step.title}
                          </h3>
                          <p className="mt-2 max-w-[330px] text-[13px] font-light leading-[1.6] text-white/55">
                            {
                              step.description
                            }
                          </p>
                          <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                            {step.details.map(
                              (
                                detail
                              ) => (
                                <span
                                  key={
                                    detail
                                  }
                                  className="rounded-md bg-white/[0.045] px-2.5 py-1.5 text-[9px] text-white/45"
                                >
                                  {
                                    detail
                                  }
                                </span>
                              )
                            )}
                          </div>
                        </article>
                      );
                    }
                  )}
                </div>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[10%] lg:block"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(3,8,17,0) 0%, rgba(3,8,17,.08) 50%, rgba(3,8,17,.28) 100%)",
                  }}
                />
              </div>
              {/* =================================================
                  ACTIVE EMPLOYEE
              ================================================= */}
              <div className="pointer-events-none absolute bottom-[-8px] right-[-3%] z-50 hidden h-[500px] lg:block xl:h-[550px] 2xl:h-[610px]">
                {buildSteps.map(
                  (step, index) => (
                    <img
                      key={`${step.title}-employee`}
                      src={
                        step.employeeImage
                      }
                      alt=""
                      aria-hidden="true"
                      className={`absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-bottom transition-opacity duration-500 ${
                        activeStep ===
                        index
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  )
                )}
              </div>
              {/* =================================================
                  LEFT ARROW
              ================================================= */}
              <button
                type="button"
                aria-label="Previous build step"
                onClick={() =>
                  moveProcess(
                    "previous"
                  )
                }
                className="absolute -left-3 top-1/2 z-[70] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#526cff]/45 bg-[#07101f]/90 text-white/80 backdrop-blur-md transition hover:border-[#526cff] hover:text-white lg:flex"
              >
                <ChevronLeft
                  size={21}
                />
              </button>
              {/* =================================================
                  RIGHT ARROW
              ================================================= */}
              <button
                type="button"
                aria-label="Next build step"
                onClick={() =>
                  moveProcess("next")
                }
                className="absolute -right-3 top-1/2 z-[80] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#526cff]/55 bg-[#07101f]/95 text-white/90 shadow-[0_8px_30px_rgba(0,0,0,.35)] backdrop-blur-md transition hover:border-[#526cff] hover:text-white lg:flex"
              >
                <ChevronRight
                  size={21}
                />
              </button>
              {/* =================================================
                  PAGINATION
              ================================================= */}
              <div className="relative z-[70] mt-5 flex items-center gap-2 pl-1">
                {buildSteps.map(
                  (step, index) => (
                    <button
                      key={
                        step.title
                      }
                      type="button"
                      aria-label={`Go to ${step.title}`}
                      onClick={() => {
                        pauseAutoScroll();
                        goToStep(
                          index
                        );
                        resumeAutoScroll();
                      }}
                      className={`h-[3px] rounded-full transition-all duration-500 ${
                        activeStep ===
                        index
                          ? "w-8 bg-[#3048ff]"
                          : "w-6 bg-white/15 hover:bg-white/30"
                      }`}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </section>
        <BusinessConceptCarousel />
        {/* =========================================================
            CHOOSE YOUR REALSITE / PRICING
            100VH WITH RESTORED SPACING
        ========================================================= */}
        <section
          id="build-packages"
          className="relative z-20 overflow-hidden border-b border-white/5 bg-[#030811] xl:h-[100dvh] xl:min-h-[720px]"
        >
          <div className="pointer-events-none absolute left-1/2 top-[28%] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[#3048ff]/[0.035] blur-[220px]" />
          <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col px-7 py-12 sm:px-10 lg:px-14 xl:h-full xl:justify-center xl:py-8">
            {/* =====================================================
                PRICING HEADER
            ===================================================== */}
            <div className="mx-auto max-w-[980px] shrink-0 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
                CHOOSE YOUR REALSITE
              </p>
              <h2 className="mt-1 text-[42px] font-light leading-[1.04] tracking-[-0.04em] sm:text-[48px] lg:text-[52px] xl:text-[54px]">
                Built for where your customers are.
              </h2>
              <p className="mx-auto mt-3 max-w-[760px] text-base font-light leading-7 text-white/50">
                Every website is custom designed and professionally built,
                with room to expand as your needs grow.
              </p>
            </div>
            {/* =====================================================
                PACKAGE CARDS
            ===================================================== */}
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:h-[440px] xl:grid-cols-4">
              {buildPackages.map(
                (pkg) => (
                  <article
                    key={pkg.name}
                    className={`relative flex flex-col rounded-[18px] border p-6 transition duration-300 xl:h-[440px] ${
                      pkg.featured
                        ? "border-[#526cff] bg-[#07101d] shadow-[0_20px_80px_rgba(48,72,255,.08)]"
                        : "border-white/15 bg-[#060c16]"
                    }`}
                  >
                    <h3 className="text-[30px] font-light tracking-[-0.04em]">
                      {pkg.name}
                    </h3>
                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#526cff]">
                      {pkg.pages}
                    </p>
                    <p className="mt-3 min-h-[60px] text-[13px] font-light leading-[1.55] text-white/55">
                      {
                        pkg.description
                      }
                    </p>
                    <div className="my-3 h-px bg-white/10" />
                    <div className="space-y-2.5">
                      {pkg.features.map(
                        (
                          feature
                        ) => (
                          <div
                            key={
                              feature
                            }
                            className="flex items-start gap-3 text-[13px] text-white/70"
                          >
                            <Check
                              size={
                                14
                              }
                              strokeWidth={
                                1.8
                              }
                              className="mt-0.5 shrink-0 text-[#526cff]"
                            />
                            <span>
                              {
                                feature
                              }
                            </span>
                          </div>
                        )
                      )}
                    </div>
                    <div className="mt-auto pt-3">
                      <p className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/35">
                        Starting from
                      </p>
                      <div className="mt-1 text-[34px] font-light tracking-[-0.04em]">
                        {pkg.price}
                      </div>
                      <button
                        type="button"
                        className={`group mt-3 flex h-[44px] w-full items-center justify-center gap-3 rounded-lg text-[9px] font-semibold uppercase tracking-[0.22em] transition ${
                          pkg.featured
                            ? "bg-[#3048ff] text-white hover:bg-[#4057ff]"
                            : "border border-[#526cff]/60 text-[#6f83ff] hover:border-[#526cff] hover:bg-[#526cff]/10 hover:text-white"
                        }`}
                      >
                        {pkg.cta}
                        <ArrowUpRight
                          size={
                            13
                          }
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </button>
                    </div>
                  </article>
                )
              )}
            </div>
            {/* =====================================================
                CUSTOM REALSITE SCROLL CTA
            ===================================================== */}
            <div className="flex shrink-0 justify-center pt-8">
              <button
                type="button"
                onClick={
                  scrollToCustom
                }
                className="group flex h-[52px] items-center justify-center gap-3 rounded-lg bg-[#3048ff] px-8 text-[10px] font-semibold uppercase tracking-[0.26em] shadow-[0_15px_50px_rgba(48,72,255,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4057ff]"
              >
                Need Something Custom?
                <ArrowDown
                  size={14}
                  className="build-arrow-pulse"
                />
              </button>
            </div>
          </div>
        </section>
        {/* =========================================================
            CUSTOM REALSITE
            FINAL LEAD CAPTURE SECTION
        ========================================================= */}
        <section
          id="custom-realsite"
          className="relative min-h-[640px] overflow-hidden border-b border-white/10 bg-[#06101e]"
        >
          {/* =====================================================
              BACKGROUND
          ===================================================== */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
              style={{
                backgroundImage:
                  'url("/images/build/process/office-background.png")',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #030811 0%, rgba(3,8,17,.94) 35%, rgba(3,8,17,.82) 58%, rgba(3,8,17,.92) 78%, #030811 100%)",
              }}
            />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030811]/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030811]/80 to-transparent" />
            <div className="absolute left-[8%] top-1/2 h-[420px] w-[520px] -translate-y-1/2 rounded-full bg-[#3048ff]/[0.05] blur-[170px]" />
            <div className="absolute right-[10%] top-1/2 h-[440px] w-[600px] -translate-y-1/2 rounded-full bg-[#3048ff]/[0.055] blur-[180px]" />
          </div>
          {/* =====================================================
              CUSTOM EMPLOYEE
          ===================================================== */}
          <div className="pointer-events-none absolute bottom-0 left-[25%] z-10 hidden h-[500px] -translate-x-1/2 opacity-55 xl:block 2xl:h-[540px]">
            <img
              src="/images/build/custom/custom-employee.png"
              alt=""
              aria-hidden="true"
              className="h-full w-auto max-w-none object-contain object-bottom"
            />
          </div>
          {/* =====================================================
              CUSTOM CONTENT + LEAD FORM
          ===================================================== */}
          <div className="relative z-20 mx-auto grid min-h-[640px] max-w-[1600px] items-center gap-12 px-7 py-16 sm:px-10 lg:px-14 xl:grid-cols-[0.9fr_1.1fr] xl:gap-20">
            {/* ===================================================
                LEFT CONTENT
            =================================================== */}
            <div className="relative z-20 max-w-[610px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
                CUSTOM REALSITE
              </p>
              <h2 className="mt-4 text-[44px] font-light leading-[1.02] tracking-[-0.04em] sm:text-[54px] lg:text-[62px]">
                Something bigger
                <br />
                in mind?
              </h2>
              <p className="mt-6 max-w-[590px] text-base font-light leading-8 text-white/55 sm:text-lg">
                Custom page counts, specialized functionality, advanced
                integrations, portals, platforms, unusual workflows, or
                entirely custom digital experiences.
              </p>
              <div className="mt-8 h-px w-20 bg-[#526cff]/70" />
              <p className="mt-7 max-w-[540px] text-sm font-light leading-7 text-white/40">
                Tell us what you&apos;re building, what it needs to do, and
                where you want to take it. We&apos;ll help determine the
                right way to build it.
              </p>
            </div>
            {/* ===================================================
                RIGHT LEAD CAPTURE FORM
            =================================================== */}
            <div className="relative z-30 w-full">
              <div className="border border-white/12 bg-[#050d18]/90 p-7 shadow-[0_30px_100px_rgba(0,0,0,.28)] backdrop-blur-xl sm:p-8 lg:p-9">
                <div className="mb-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#526cff]">
                    START THE CONVERSATION
                  </p>
                  <h3 className="mt-2 text-[28px] font-light tracking-[-0.035em] text-white sm:text-[32px]">
                    Tell us what you&apos;re building.
                  </h3>
                  <p className="mt-2 text-sm font-light leading-6 text-white/45">
                    Give us a few details and we&apos;ll start with the right
                    questions.
                  </p>
                </div>
                <form
                  className="grid gap-4 sm:grid-cols-2"
                  onSubmit={(event) =>
                    event.preventDefault()
                  }
                >
                  {/* ===============================================
                      FULL NAME
                  =============================================== */}
                  <div>
                    <label
                      htmlFor="custom-name"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45"
                    >
                      Full Name
                    </label>
                    <input
                      id="custom-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      className="h-[48px] w-full border border-white/10 bg-white/[0.035] px-4 text-sm font-light text-white outline-none transition placeholder:text-white/25 focus:border-[#526cff]/70 focus:bg-white/[0.05]"
                    />
                  </div>
                  {/* ===============================================
                      EMAIL
                  =============================================== */}
                  <div>
                    <label
                      htmlFor="custom-email"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45"
                    >
                      Email
                    </label>
                    <input
                      id="custom-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="h-[48px] w-full border border-white/10 bg-white/[0.035] px-4 text-sm font-light text-white outline-none transition placeholder:text-white/25 focus:border-[#526cff]/70 focus:bg-white/[0.05]"
                    />
                  </div>
                  {/* ===============================================
                      PHONE
                  =============================================== */}
                  <div>
                    <label
                      htmlFor="custom-phone"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45"
                    >
                      Phone
                    </label>
                    <input
                      id="custom-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Phone number"
                      className="h-[48px] w-full border border-white/10 bg-white/[0.035] px-4 text-sm font-light text-white outline-none transition placeholder:text-white/25 focus:border-[#526cff]/70 focus:bg-white/[0.05]"
                    />
                  </div>
                  {/* ===============================================
                      COMPANY
                  =============================================== */}
                  <div>
                    <label
                      htmlFor="custom-company"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45"
                    >
                      Company
                    </label>
                    <input
                      id="custom-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company name"
                      className="h-[48px] w-full border border-white/10 bg-white/[0.035] px-4 text-sm font-light text-white outline-none transition placeholder:text-white/25 focus:border-[#526cff]/70 focus:bg-white/[0.05]"
                    />
                  </div>
                  {/* ===============================================
                      CURRENT WEBSITE
                  =============================================== */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="custom-website"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45"
                    >
                      Current Website
                    </label>
                    <input
                      id="custom-website"
                      name="website"
                      type="url"
                      placeholder="https\://"
                      className="h-[48px] w-full border border-white/10 bg-white/[0.035] px-4 text-sm font-light text-white outline-none transition placeholder:text-white/25 focus:border-[#526cff]/70 focus:bg-white/[0.05]"
                    />
                  </div>
                  {/* ===============================================
                      PROJECT DESCRIPTION
                  =============================================== */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="custom-project"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45"
                    >
                      What Are You Building?
                    </label>
                    <textarea
                      id="custom-project"
                      name="project"
                      rows={4}
                      placeholder="Tell us about the website, platform, functionality, integrations, or experience you have in mind."
                      className="w-full resize-none border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-light leading-6 text-white outline-none transition placeholder:text-white/25 focus:border-[#526cff]/70 focus:bg-white/[0.05]"
                    />
                  </div>
                  {/* ===============================================
                      SUBMIT
                  =============================================== */}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-lg bg-[#3048ff] px-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_15px_50px_rgba(48,72,255,.2)] transition-all duration-300 hover:bg-[#4057ff]"
                    >
                      Tell Us What You&apos;re Building
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* =========================================================
            GLOBAL STYLES
        ========================================================= */}
        <style jsx global>{`
          @keyframes build-arrow-pulse {
            0%,
            100% {
              opacity: 0.4;
              transform: translateY(0);
            }
            50% {
              opacity: 1;
              transform: translateY(4px);
            }
          }
          .build-arrow-pulse {
            animation:
              build-arrow-pulse
              2.2s
              ease-in-out
              infinite;
          }
          .build-process-track {
            transform: translate3d(
              0,
              0,
              0
            );
            backface-visibility: hidden;
          }
          .build-process-card {
            width: 278px;
            min-height: 235px;
          }
          @media (min-width: 1280px) {
            .build-process-card {
              width: 293px;
              min-height: 240px;
            }
          }
          @media (min-width: 1536px) {
            .build-process-card {
              width: 308px;
              min-height: 245px;
            }
          }
          @media (max-width: 1023px) {
            .build-process-card {
              width: 285px;
              min-height: 240px;
            }
            #custom-realsite {
              min-height: 480px;
            }
          }
          @media (max-width: 639px) {
            .build-process-card {
              width: 86vw;
              min-height: 240px;
            }
            #custom-realsite {
              min-height: 460px;
            }
          }
          /*
           * Preserve the visual spacing on shorter desktop
           * viewports by reducing the card height instead of
           * collapsing the space above and below the cards.
           */
          @media (min-width: 1280px) and (max-height: 850px) {
            #build-packages
              .grid {
              margin-top: 32px;
            }
            #build-packages
              article {
              height: 410px;
              padding-top: 20px;
              padding-bottom: 20px;
            }
            #build-packages
              article
              h3 {
              font-size: 28px;
            }
            #build-packages
              article
              > p:nth-of-type(2) {
              min-height: 52px;
              font-size: 12px;
              line-height: 1.45;
            }
          }
          @media (min-width: 1280px) and (max-height: 780px) {
            #build-packages
              .grid {
              margin-top: 28px;
            }
            #build-packages
              article {
              height: 380px;
              padding-top: 17px;
              padding-bottom: 17px;
            }
            #build-packages
              article
              h3 {
              font-size: 26px;
            }
            #build-packages
              article
              > p:nth-of-type(2) {
              min-height: 44px;
              font-size: 11px;
              line-height: 1.4;
            }
            #build-packages
              article
              .space-y-2\\\\\.5 {
              row-gap: 7px;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .build-arrow-pulse {
              animation: none;
            }
          }
        `}</style>
      </main>
    </>
  );
}

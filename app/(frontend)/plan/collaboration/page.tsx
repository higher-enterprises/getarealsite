"use client";

import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Code2,
  FileText,
  LayoutGrid,
  Network,
  PenTool,
  Search,
  Settings2,
  Smartphone,
  Target,
  Users,
} from "lucide-react";

import Header from "@/components/navigation/navigation";

/* =========================================================
   PLAN DELIVERABLES
========================================================= */

const roadmapParts = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Goals, audience, positioning, site purpose, priorities, and business objectives.",
    icon: Target,
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Page structure, navigation, hierarchy, sitemap, and user journeys.",
    icon: Network,
  },
  {
    number: "03",
    title: "Content",
    description:
      "Content requirements, page messaging, calls to action, and content needs.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Functionality",
    description:
      "Forms, booking, ecommerce, memberships, workflows, integrations, and required features.",
    icon: Settings2,
  },
  {
    number: "05",
    title: "Experience",
    description:
      "UX direction, mobile behavior, conversion paths, and user experience priorities.",
    icon: Smartphone,
  },
  {
    number: "06",
    title: "Technology",
    description:
      "Platform recommendations, technical requirements, data, integrations, and systems.",
    icon: Code2,
  },
  {
    number: "07",
    title: "SEO & Traffic",
    description:
      "SEO foundation, keyword considerations, search structure, and traffic opportunities.",
    icon: Search,
  },
  {
    number: "08",
    title: "Brand & Design",
    description:
      "Brand alignment, visual direction, interface considerations, and design guidance.",
    icon: LayoutGrid,
  },
  {
    number: "09",
    title: "Content Plan",
    description:
      "Content outline, page topics, assets, publishing requirements, and content direction.",
    icon: FileText,
  },
  {
    number: "10",
    title: "Conversion Plan",
    description:
      "Conversion strategy, lead flow, funnels, calls to action, and customer pathways.",
    icon: BarChart3,
  },
  {
    number: "11",
    title: "Integration Plan",
    description:
      "CRM, third-party tools, APIs, automations, booking systems, and platform connections.",
    icon: Boxes,
  },
  {
    number: "12",
    title: "Build Plan",
    description:
      "Priorities, requirements, implementation direction, dependencies, and next steps.",
    icon: CheckCircle2,
  },
];

/* =========================================================
   COLLABORATION PLANS
========================================================= */

const collaborationPlans = [
  {
    id: "business",
    name: "Business Website Collaboration",
    hours: 2,
    price: 399,
    image: "/images/collaboration/business-collaboration-cover.jpg",
  },
  {
    id: "nonprofit",
    name: "Nonprofit Website Collaboration",
    hours: 2,
    price: 399,
    image: "/images/collaboration/nonprofit-collaboration-cover.jpg",
  },
  {
    id: "church",
    name: "Church Website Collaboration",
    hours: 2,
    price: 399,
    image: "/images/collaboration/church-collaboration-cover.jpg",
  },
  {
    id: "ecommerce",
    name: "Ecommerce Website Collaboration",
    hours: 4,
    price: 599,
    image: "/images/collaboration/ecommerce-collaboration-cover.jpg",
  },
  {
    id: "lead-generation",
    name: "Lead Generation Website Collaboration",
    hours: 4,
    price: 599,
    image:
      "/images/collaboration/lead-generation-collaboration-cover.jpg",
  },
  {
    id: "booking",
    name: "Booking Website Collaboration",
    hours: 4,
    price: 599,
    image: "/images/collaboration/booking-collaboration-cover.jpg",
  },
  {
    id: "membership",
    name: "Membership Website Collaboration",
    hours: 5,
    price: 799,
    image: "/images/collaboration/membership-collaboration-cover.jpg",
  },
  {
    id: "directory",
    name: "Directory Website Collaboration",
    hours: 5,
    price: 799,
    image: "/images/collaboration/directory-collaboration-cover.jpg",
  },
  {
    id: "marketplace",
    name: "Marketplace Website Collaboration",
    hours: 8,
    price: 1199,
    image: "/images/collaboration/marketplace-collaboration-cover.jpg",
  },
  {
    id: "saas",
    name: "SaaS / Web App Collaboration",
    hours: 12,
    price: 1699,
    image: "/images/collaboration/saas-collaboration-cover.jpg",
  },
];

const collaborationFilters = [
  {
    label: "All Types",
    value: "all",
  },
  {
    label: "$399",
    value: "399",
  },
  {
    label: "$599",
    value: "599",
  },
  {
    label: "$799",
    value: "799",
  },
  {
    label: "$1,199",
    value: "1199",
  },
  {
    label: "$1,699+",
    value: "1699",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function CollaborationPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPlans = useMemo(() => {
    if (activeFilter === "all") {
      return collaborationPlans;
    }

    return collaborationPlans.filter(
      (plan) => plan.price === Number(activeFilter)
    );
  }, [activeFilter]);

  const scrollToPlans = () => {
    document
      .getElementById("choose-collaboration")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToIncluded = () => {
    document
      .getElementById("collaboration-includes")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      <main className="relative overflow-hidden bg-[#030811] text-white">
        {/* =========================================================
            GLOBAL NAVIGATION
        ========================================================= */}

        <div className="absolute inset-x-0 top-0 z-[1000]">
          <Header />
        </div>

        {/* =========================================================
            COLLABORATION HERO
            50VH
        ========================================================= */}

        <section className="relative h-[50vh] min-h-[500px] overflow-hidden border-b border-white/5 bg-[#030811]">
          {/* BACKGROUND */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[3%] top-[10%] h-[500px] w-[700px] rounded-full bg-[#3048ff]/[0.04] blur-[190px]" />

            <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#030811] to-transparent" />

            {/* subtle blueprint lines */}

            <div className="absolute right-[3%] top-[14%] hidden h-[380px] w-[650px] opacity-[0.08] lg:block">
              <div className="absolute left-[12%] top-[15%] h-px w-[64%] bg-[#526cff]" />

              <div className="absolute left-[32%] top-[15%] h-[62%] w-px bg-[#526cff]" />

              <div className="absolute left-[18%] top-[48%] h-px w-[70%] bg-[#526cff]" />

              <div className="absolute right-[12%] top-[30%] h-[40%] w-px bg-[#526cff]" />
            </div>
          </div>

          {/* =====================================================
              HERO CONTENT
          ===================================================== */}

          <div className="relative z-20 mx-auto grid h-full max-w-[1800px] grid-cols-1 items-center px-7 pb-10 pt-28 sm:px-10 lg:grid-cols-[50%_50%] lg:px-14">
            {/* LEFT */}

            <div className="max-w-[720px]">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#526cff]">
                REALSITE COLLABORATION
              </p>

              <h1 className="text-[44px] font-light leading-[1.03] tracking-[-0.035em] sm:text-[52px] xl:text-[62px]">
                Build the plan together.
                <br />

                <span className="text-[#526cff]">
                  Make better decisions.
                </span>
              </h1>

              <p className="mt-6 max-w-[630px] text-base font-light leading-7 text-white/58">
                Start with your website-specific Roadmap, then work directly
                with a RealSite planner to refine the strategy, structure,
                requirements, and decisions behind your site.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={scrollToPlans}
                  className="group flex h-[54px] items-center gap-3 rounded-lg bg-[#3048ff] px-7 text-[10px] font-semibold uppercase tracking-[0.24em] transition hover:bg-[#4057ff]"
                >
                  Choose Your Collaboration

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={scrollToIncluded}
                  className="group flex h-[54px] items-center gap-3 rounded-lg border border-white/15 px-7 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 transition hover:border-[#526cff]/60 hover:bg-[#526cff]/5 hover:text-white"
                >
                  See What&apos;s Included

                  <ArrowDown size={14} />
                </button>
              </div>
            </div>

            {/* =================================================
                COLLABORATIVE ROADMAP VISUAL
            ================================================= */}

            <div className="relative hidden h-full lg:block">
              {/* MAIN ROADMAP */}

              <div className="absolute left-[11%] top-[10%] h-[72%] w-[74%] rotate-[4deg] overflow-hidden rounded-[18px] border border-white/15 bg-[#e8eaee] shadow-[0_35px_120px_rgba(0,0,0,.45)]">
                <img
                  src="/images/roadmaps/roadmap-overview.jpg"
                  alt="RealSite collaboration roadmap overview"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* STRATEGY DOCUMENT */}

              <div className="absolute bottom-[2%] left-[4%] z-20 h-[47%] w-[37%] -rotate-[7deg] overflow-hidden rounded-md border border-white/15 bg-[#f0f1f3] shadow-2xl">
                <img
                  src="/images/roadmaps/roadmap-strategy-page.jpg"
                  alt="RealSite strategy document"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* WIREFRAME DOCUMENT */}

              <div className="absolute bottom-[-3%] left-[31%] z-30 h-[50%] w-[44%] rotate-[6deg] overflow-hidden rounded-md border border-white/15 bg-[#f0f1f3] shadow-2xl">
                <img
                  src="/images/roadmaps/roadmap-wireframe-page.jpg"
                  alt="RealSite website planning wireframe"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* COLLABORATION NOTE */}

              <div className="absolute right-[3%] top-[23%] z-40 hidden w-[245px] rounded-xl border border-[#526cff]/30 bg-[#07101a]/95 p-4 shadow-2xl backdrop-blur-sm xl:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#526cff]/30 bg-[#526cff]/10">
                    <Users
                      size={15}
                      className="text-[#526cff]"
                    />
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#526cff]">
                      Planner Note
                    </p>

                    <p className="mt-1 text-[10px] text-white/60">
                      Let&apos;s refine this together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHAT'S INCLUDED
        ========================================================= */}

        <section
          id="collaboration-includes"
          className="relative overflow-hidden border-b border-white/5 bg-[#030811] py-24 lg:py-28"
        >
          <div className="pointer-events-none absolute left-[60%] top-[45%] h-[650px] w-[900px] -translate-y-1/2 rounded-full bg-[#3048ff]/[0.025] blur-[200px]" />

          <div className="relative z-10 mx-auto max-w-[1650px] px-7 sm:px-10 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[34%_66%] lg:gap-14">
              {/* =================================================
                  COLLABORATION CONSULTANTS
              ================================================= */}

              <div className="relative min-h-[720px] overflow-hidden rounded-[18px] border border-white/10 bg-[#07101b]">
                <img
                  src="/images/collaboration/collaboration-consultants.jpg"
                  alt="RealSite planner collaborating with a business owner"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-transparent to-[#030811]/10" />
              </div>

              {/* =================================================
                  PLAN DETAILS
              ================================================= */}

              <div>
                <div className="max-w-[870px]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
                    WHAT&apos;S INCLUDED IN YOUR PLAN
                  </p>

                  <h2 className="mt-4 text-[40px] font-light leading-[1.05] tracking-[-0.04em] sm:text-[48px] lg:text-[54px]">
                    A complete plan.
                    <br />
                    Built around{" "}
                    <span className="text-[#526cff]">
                      your goals.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-[830px] text-base font-light leading-8 text-white/52">
                    Every Collaboration starts with the same RealSite planning
                    framework used in our Roadmaps—covering strategy,
                    architecture, content, functionality, technology, and the
                    decisions needed to define the right website.
                  </p>
                </div>

                {/* =============================================
                    PLAN GRID
                ============================================= */}

                <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {roadmapParts.map((part) => {
                    const Icon = part.icon;

                    return (
                      <article
                        key={part.number}
                        className="group min-h-[178px] rounded-[14px] border border-white/10 bg-[#07101a] p-5 transition duration-300 hover:border-[#526cff]/45 hover:bg-[#081321]"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#526cff]/20 bg-[#0a1730] text-[#526cff]">
                            <Icon
                              size={20}
                              strokeWidth={1.5}
                            />
                          </div>

                          <div>
                            <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#526cff]">
                              {part.number}
                            </p>

                            <h3 className="mt-1 text-[12px] font-semibold uppercase tracking-[0.12em]">
                              {part.title}
                            </h3>

                            <p className="mt-3 text-[12px] font-light leading-5 text-white/48">
                              {part.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CHOOSE YOUR COLLABORATION
        ========================================================= */}

        <section
          id="choose-collaboration"
          className="relative overflow-hidden border-b border-white/5 bg-[#030811] py-24 sm:py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute left-1/2 top-[40%] h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-[#3048ff]/[0.025] blur-[220px]" />

          <div className="relative z-10 mx-auto max-w-[1650px] px-7 sm:px-10 lg:px-14">
            {/* =====================================================
                INTRO
            ===================================================== */}

            <div className="mx-auto max-w-[920px] text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
                CHOOSE YOUR COLLABORATION
              </p>

              <h2 className="mt-4 text-[40px] font-light leading-[1.06] tracking-[-0.04em] sm:text-[48px] lg:text-[56px]">
                Select the website plan you need help building.
              </h2>

              <p className="mx-auto mt-5 max-w-[810px] text-base font-light leading-8 text-white/50">
                Choose your website type below. Each Collaboration includes its
                corresponding RealSite Roadmap plus a defined block of
                professional planning time with a RealSite planner.
              </p>
            </div>

            {/* =====================================================
                FILTER
            ===================================================== */}

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {collaborationFilters.map((filter) => {
                const active =
                  activeFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() =>
                      setActiveFilter(filter.value)
                    }
                    className={`min-w-[105px] rounded-md border px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                      active
                        ? "border-[#526cff] bg-[#3048ff] text-white shadow-[0_12px_35px_rgba(48,72,255,.15)]"
                        : "border-white/10 bg-[#07101a] text-white/60 hover:border-[#526cff]/50 hover:text-white"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* =====================================================
                PLAN CARDS
            ===================================================== */}

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {filteredPlans.map((plan) => (
                <article
                  key={plan.id}
                  className="group overflow-hidden rounded-[14px] border border-white/15 bg-[#07101a] transition-all duration-300 hover:-translate-y-1 hover:border-[#526cff]/55 hover:shadow-[0_20px_70px_rgba(48,72,255,.07)]"
                >
                  {/* =============================================
                      COLLABORATION PLAN COVER

                      No blue collaboration stripe.
                      Collaboration version is communicated
                      through the cover artwork itself.
                  ============================================= */}

                  <div className="relative aspect-[1.22/1] overflow-hidden border-b border-white/10 bg-[#040a13]">
                    <img
                      src={plan.image}
                      alt={`${plan.name} cover`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07101a]/30 via-transparent to-[#030811]/5" />
                  </div>

                  {/* =============================================
                      PLAN DETAILS
                  ============================================= */}

                  <div className="flex min-h-[220px] flex-col px-5 py-5 text-center">
                    <h3 className="text-[15px] font-medium leading-6 text-white">
                      {plan.name}
                    </h3>

                    <p className="mt-2 text-[12px] font-light text-white/52">
                      Roadmap +{" "}
                      <span className="text-[#526cff]">
                        {plan.hours} Planning Hours
                      </span>
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="text-[29px] font-light tracking-[-0.035em] text-white">
                        $
                        {plan.price.toLocaleString()}
                      </div>

                      <button
                        type="button"
                        className="group/button mt-4 flex h-[43px] w-full items-center justify-center gap-3 rounded-md bg-[#3048ff] text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#4057ff]"
                      >
                        Purchase

                        <ArrowRight
                          size={13}
                          className="transition-transform duration-300 group-hover/button:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            THREE WAYS TO PLAN
        ========================================================= */}

        <section className="relative border-b border-white/5 bg-[#030811] py-24 lg:py-28">
          <div className="mx-auto max-w-[1500px] px-7 sm:px-10 lg:px-14">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
                THREE WAYS TO PLAN YOUR SITE
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {/* ROADMAP */}

              <article className="relative min-h-[310px] overflow-hidden rounded-[16px] border border-white/10 bg-[#07101a] p-8">
                <div className="relative z-10 max-w-[55%]">
                  <h3 className="text-[26px] font-light">
                    Roadmap
                  </h3>

                  <p className="mt-1 text-[15px] text-white/70">
                    Do It Yourself
                  </p>

                  <p className="mt-6 text-sm font-light leading-6 text-white/45">
                    Get the complete plan and execute it on
                    your own.
                  </p>

                  <button
                    type="button"
                    className="group mt-8 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
                  >
                    Learn More

                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>

                <img
                  src="/images/roadmaps/business-roadmap-preview-cover.jpg"
                  alt=""
                  className="absolute bottom-0 right-[-5%] h-[74%] w-[50%] object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#07101a] via-[#07101a]/85 to-transparent" />
              </article>

              {/* COLLABORATION */}

              <article className="relative min-h-[310px] overflow-hidden rounded-[16px] border border-[#526cff]/70 bg-[#07101a] p-8 shadow-[0_18px_70px_rgba(48,72,255,.08)]">
                <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#526cff]/70 bg-[#526cff]/10 text-[#526cff]">
                  <CheckCircle2 size={18} />
                </div>

                <div className="relative z-10 max-w-[58%]">
                  <h3 className="text-[26px] font-light text-[#526cff]">
                    Collaboration
                  </h3>

                  <p className="mt-1 text-[15px] text-white/75">
                    Do It With Us
                  </p>

                  <p className="mt-6 text-sm font-light leading-6 text-white/50">
                    Work with a RealSite planner to refine
                    your plan and make the right decisions.
                  </p>

                  <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#526cff]">
                    ● You Are Here
                  </p>
                </div>

                <img
                  src="/images/collaboration/collaboration-consultants.jpg"
                  alt=""
                  className="absolute bottom-0 right-[-4%] h-[78%] w-[52%] object-cover opacity-75"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#07101a] via-[#07101a]/88 to-transparent" />
              </article>

              {/* SIGNATURE */}

              <article className="relative min-h-[310px] overflow-hidden rounded-[16px] border border-white/10 bg-[#07101a] p-8">
                <div className="relative z-10 max-w-[58%]">
                  <h3 className="text-[26px] font-light">
                    Signature
                  </h3>

                  <p className="mt-1 text-[15px] text-white/70">
                    We Plan It For You
                  </p>

                  <p className="mt-6 text-sm font-light leading-6 text-white/45">
                    We handle the entire planning process
                    for you—from strategy through the
                    completed plan.
                  </p>

                  <button
                    type="button"
                    className="group mt-8 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
                  >
                    Learn More

                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>

                <img
                  src="/images/collaboration/signature-planner.jpg"
                  alt=""
                  className="absolute bottom-0 right-[-3%] h-full w-[48%] object-cover object-center opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#07101a] via-[#07101a]/88 to-transparent" />
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="relative overflow-hidden bg-[#030811] px-7 py-20 text-center sm:px-10 lg:px-14 lg:py-24">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3048ff]/[0.04] blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-[1000px]">
            <h2 className="text-[40px] font-light leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
              Better plans are{" "}

              <span className="text-[#526cff]">
                built together.
              </span>
            </h2>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={scrollToPlans}
                className="group flex h-[54px] items-center gap-3 rounded-lg bg-[#3048ff] px-8 text-[10px] font-semibold uppercase tracking-[0.24em] transition hover:bg-[#4057ff]"
              >
                Choose Your Collaboration

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                className="group flex h-[54px] items-center gap-3 rounded-lg border border-white/15 px-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 transition hover:border-[#526cff]/60 hover:bg-[#526cff]/5 hover:text-white"
              >
                Have RealSite Plan It For You

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
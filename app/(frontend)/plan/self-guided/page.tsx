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
  Gauge,
  LayoutGrid,
  Megaphone,
  Network,
  PenTool,
  Search,
  Settings2,
  Smartphone,
  Target,
} from "lucide-react";

import Header from "@/components/navigation/navigation";

/* =========================================================
   ROADMAP DELIVERABLES
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
      "Page requirements, messaging direction, calls to action, and content needs.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Functionality",
    description:
      "Forms, booking, ecommerce, memberships, workflows, and required features.",
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
      "Content outline, assets, page topics, publishing needs, and content calendar direction.",
    icon: FileText,
  },
  {
    number: "10",
    title: "Conversion Plan",
    description:
      "Lead flow, conversion opportunities, funnels, calls to action, and customer pathways.",
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
   ROADMAP PRODUCTS
========================================================= */

const roadmaps = [
  {
    id: "business",
    name: "Business Website Roadmap",
    shortName: "Business",
    price: 199,
    image: "/images/roadmaps/business-roadmap-cover.jpg",
    description:
      "A strategic website plan for professional and local service businesses.",
  },
  {
    id: "nonprofit",
    name: "Nonprofit Website Roadmap",
    shortName: "Nonprofit",
    price: 199,
    image: "/images/roadmaps/nonprofit-roadmap-cover.jpg",
    description:
      "Plan your mission, programs, donations, resources, and community experience.",
  },
  {
    id: "church",
    name: "Church Website Roadmap",
    shortName: "Church",
    price: 199,
    image: "/images/roadmaps/church-roadmap-cover.jpg",
    description:
      "Plan sermons, ministries, events, giving, outreach, and church communications.",
  },
  {
    id: "ecommerce",
    name: "Ecommerce Website Roadmap",
    shortName: "Ecommerce",
    price: 299,
    image: "/images/roadmaps/ecommerce-roadmap-cover.jpg",
    description:
      "Everything needed to structure products, checkout, merchandising, and your online store.",
  },
  {
    id: "lead-generation",
    name: "Lead Generation Website Roadmap",
    shortName: "Lead Generation",
    price: 299,
    image: "/images/roadmaps/lead-generation-roadmap-cover.jpg",
    description:
      "Plan conversion paths, offers, forms, landing pages, and lead-generation systems.",
  },
  {
    id: "booking",
    name: "Booking Website Roadmap",
    shortName: "Booking",
    price: 299,
    image: "/images/roadmaps/booking-roadmap-cover.jpg",
    description:
      "Plan appointments, availability, booking flows, notifications, and customer intake.",
  },
  {
    id: "scheduling",
    name: "Scheduling Website Roadmap",
    shortName: "Scheduling",
    price: 299,
    image: "/images/roadmaps/scheduling-roadmap-cover.jpg",
    description:
      "Structure scheduling workflows, calendars, resources, staff, and availability.",
  },
  {
    id: "publishing",
    name: "Publishing Website Roadmap",
    shortName: "Publishing",
    price: 299,
    image: "/images/roadmaps/publishing-roadmap-cover.jpg",
    description:
      "Plan editorial structure, publishing workflows, archives, categories, and content discovery.",
  },
  {
    id: "media",
    name: "Media Website Roadmap",
    shortName: "Media",
    price: 299,
    image: "/images/roadmaps/media-roadmap-cover.jpg",
    description:
      "Plan video, audio, photography, streaming, media libraries, and audience engagement.",
  },
  {
    id: "membership",
    name: "Membership Website Roadmap",
    shortName: "Membership",
    price: 299,
    image: "/images/roadmaps/membership-roadmap-cover.jpg",
    description:
      "Plan member access, subscriptions, gated content, accounts, and recurring experiences.",
  },
  {
    id: "directory",
    name: "Directory Website Roadmap",
    shortName: "Directory",
    price: 299,
    image: "/images/roadmaps/directory-roadmap-cover.jpg",
    description:
      "Plan searchable entries, categories, filters, profiles, submissions, and discovery.",
  },
  {
    id: "listing",
    name: "Listing Website Roadmap",
    shortName: "Listing",
    price: 299,
    image: "/images/roadmaps/listing-roadmap-cover.jpg",
    description:
      "Plan inventory, listings, filters, details, search experiences, and lead capture.",
  },
  {
    id: "elearning",
    name: "eLearning Website Roadmap",
    shortName: "eLearning",
    price: 399,
    image: "/images/roadmaps/elearning-roadmap-cover.jpg",
    description:
      "Plan courses, lessons, student journeys, assessments, progress, and educational content.",
  },
  {
    id: "community",
    name: "Community Website Roadmap",
    shortName: "Community",
    price: 399,
    image: "/images/roadmaps/community-roadmap-cover.jpg",
    description:
      "Plan profiles, groups, discussions, resources, moderation, and member engagement.",
  },
  {
    id: "intranet",
    name: "Intranet Website Roadmap",
    shortName: "Intranet",
    price: 399,
    image: "/images/roadmaps/intranet-roadmap-cover.jpg",
    description:
      "Plan internal resources, staff tools, permissions, workflows, and organizational information.",
  },
  {
    id: "marketplace",
    name: "Marketplace Website Roadmap",
    shortName: "Marketplace",
    price: 499,
    image: "/images/roadmaps/marketplace-roadmap-cover.jpg",
    description:
      "Plan buyers, sellers, listings, transactions, commissions, accounts, and marketplace workflows.",
  },
  {
    id: "saas",
    name: "SaaS / Web App Roadmap",
    shortName: "SaaS / Web App",
    price: 999,
    image: "/images/roadmaps/saas-roadmap-cover.jpg",
    description:
      "Advanced planning for software platforms, dashboards, users, workflows, data, and integrations.",
  },
];

const filterOptions = [
  { label: "All Types", value: "all" },
  { label: "$199", value: "199" },
  { label: "$299", value: "299" },
  { label: "$399", value: "399" },
  { label: "$499", value: "499" },
  { label: "$999", value: "999" },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredRoadmaps = useMemo(() => {
    if (activeFilter === "all") {
      return roadmaps;
    }

    return roadmaps.filter(
      (roadmap) => roadmap.price === Number(activeFilter)
    );
  }, [activeFilter]);

  const scrollToRoadmaps = () => {
    document.getElementById("choose-roadmap")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToIncluded = () => {
    document.getElementById("roadmap-includes")?.scrollIntoView({
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
            ROADMAP HERO — 50VH
        ========================================================= */}

        <section className="relative min-h-[500px] h-[50vh] overflow-hidden border-b border-white/5 bg-[#030811]">
          {/* =====================================================
              BACKGROUND DETAILS
          ===================================================== */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[24%] top-[10%] h-[500px] w-[700px] rounded-full bg-[#3048ff]/[0.035] blur-[180px]" />

            <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#030811] to-transparent" />

            <div className="absolute right-[6%] top-[18%] hidden h-[380px] w-[600px] opacity-[0.10] lg:block">
              <div className="absolute left-[12%] top-[12%] h-px w-[58%] bg-[#526cff]" />
              <div className="absolute left-[42%] top-[12%] h-[60%] w-px bg-[#526cff]" />
              <div className="absolute left-[20%] top-[46%] h-px w-[65%] bg-[#526cff]" />
            </div>
          </div>

          {/* =====================================================
              HERO CONTENT
          ===================================================== */}

          <div className="relative z-20 mx-auto grid h-full max-w-[1800px] grid-cols-1 items-center px-7 pb-10 pt-28 sm:px-10 lg:grid-cols-[50%_50%] lg:px-14">
            {/* LEFT */}

            <div className="max-w-[720px]">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#526cff]">
                REALSITE ROADMAP
              </p>

              <h1 className="text-[44px] font-light leading-[1.03] tracking-[-0.035em] sm:text-[52px] xl:text-[62px]">
                Know what to build.
                <br />

                <span className="text-[#526cff]">
                  Before you build it.
                </span>
              </h1>

              <p className="mt-6 max-w-[620px] text-base font-light leading-7 text-white/58">
                A website-specific planning system that gives you the strategy,
                structure, requirements, and direction needed to confidently
                plan your RealSite.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={scrollToRoadmaps}
                  className="group flex h-[54px] items-center gap-3 rounded-lg bg-[#3048ff] px-7 text-[10px] font-semibold uppercase tracking-[0.24em] transition hover:bg-[#4057ff]"
                >
                  Choose Your Roadmap

                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
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
                ROADMAP HERO VISUAL
            ================================================= */}

            <div className="relative hidden h-full lg:block">
              <div className="absolute left-[10%] top-[13%] h-[71%] w-[72%] rotate-[4deg] overflow-hidden rounded-[18px] border border-white/15 bg-[#e6e9ee] shadow-[0_35px_120px_rgba(0,0,0,.45)]">
                <img
                  src="/images/roadmaps/roadmap-overview.jpg"
                  alt="RealSite roadmap overview"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-[1%] left-[3%] z-20 h-[46%] w-[38%] -rotate-[7deg] overflow-hidden rounded-md border border-white/15 bg-[#f0f1f3] shadow-2xl">
                <img
                  src="/images/roadmaps/roadmap-strategy-page.jpg"
                  alt="Roadmap strategy document"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-[-4%] left-[32%] z-30 h-[49%] w-[43%] rotate-[6deg] overflow-hidden rounded-md border border-white/15 bg-[#f0f1f3] shadow-2xl">
                <img
                  src="/images/roadmaps/roadmap-wireframe-page.jpg"
                  alt="Roadmap website wireframe"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHAT IS INCLUDED
        ========================================================= */}

        <section
          id="roadmap-includes"
          className="relative overflow-hidden border-b border-white/5 bg-[#030811] py-24 lg:py-28"
        >
          <div className="pointer-events-none absolute left-[63%] top-[42%] h-[600px] w-[800px] -translate-y-1/2 rounded-full bg-[#3048ff]/[0.028] blur-[190px]" />

          <div className="relative z-10 mx-auto max-w-[1600px] px-7 sm:px-10 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[36%_64%] lg:gap-14">
              {/* =================================================
                  CONSULTANT
              ================================================= */}

              <div className="relative min-h-[720px] overflow-hidden rounded-[18px] border border-white/10 bg-[#07101b]">
                <img
                  src="/images/roadmaps/roadmap-consultant.jpg"
                  alt="RealSite website planning consultant"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-transparent to-[#030811]/15" />
              </div>

              {/* =================================================
                  RIGHT CONTENT
              ================================================= */}

              <div>
                {/* TEXT ABOVE GRID */}

                <div className="max-w-[850px]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
                    WHAT&apos;S INCLUDED IN YOUR ROADMAP
                  </p>

                  <h2 className="mt-4 text-[40px] font-light leading-[1.05] tracking-[-0.04em] sm:text-[48px] lg:text-[54px]">
                    A complete plan.
                    <br />
                    Built around{" "}
                    <span className="text-[#526cff]">
                      your goals.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-[820px] text-base font-light leading-8 text-white/52">
                    Every RealSite Roadmap gives you everything you need to plan
                    your website with clarity and confidence. From strategy and
                    structure to content and technology, every important
                    decision is mapped so you can move forward with a plan built
                    around your business.
                  </p>
                </div>

                {/* =============================================
                    ROADMAP PARTS GRID
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
            CHOOSE YOUR ROADMAP
        ========================================================= */}

        <section
          id="choose-roadmap"
          className="relative overflow-hidden border-b border-white/5 bg-[#030811] py-24 lg:py-28"
        >
          <div className="pointer-events-none absolute left-1/2 top-[40%] h-[650px] w-[1200px] -translate-x-1/2 rounded-full bg-[#3048ff]/[0.025] blur-[220px]" />

          <div className="relative z-10 mx-auto max-w-[1650px] px-7 sm:px-10 lg:px-14">
            {/* =====================================================
                CENTERED INTRO
            ===================================================== */}

            <div className="mx-auto max-w-[900px] text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
                CHOOSE YOUR ROADMAP
              </p>

              <h2 className="mt-4 text-[40px] font-light leading-[1.06] tracking-[-0.04em] sm:text-[48px] lg:text-[54px]">
                Select the website roadmap you need.
              </h2>

              <p className="mx-auto mt-5 max-w-[760px] text-base font-light leading-8 text-white/50">
                Every Roadmap follows the RealSite planning system. Choose the
                type of website you want to plan and get a roadmap built around
                the requirements that matter for that kind of site.
              </p>
            </div>

            {/* =====================================================
                CENTERED SELECTOR
            ===================================================== */}

            <div className="mt-9 flex flex-wrap justify-center gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`min-w-[92px] rounded-md border px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                    activeFilter === filter.value
                      ? "border-[#526cff] bg-[#3048ff] text-white"
                      : "border-white/10 bg-[#07101a] text-white/55 hover:border-[#526cff]/50 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* =====================================================
                ROADMAP GRID
            ===================================================== */}

            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {filteredRoadmaps.map((roadmap) => (
                <article
                  key={roadmap.id}
                  className="group overflow-hidden rounded-[14px] border border-white/10 bg-[#07101a] transition duration-300 hover:-translate-y-1 hover:border-[#526cff]/55 hover:shadow-[0_20px_60px_rgba(48,72,255,.06)]"
                >
                  {/* =============================================
                      DARK PLAN COVER
                  ============================================= */}

                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={roadmap.image}
                      alt={`${roadmap.name} cover`}
                      className="h-full w-full object-cover brightness-[0.42] saturate-[0.65] transition-all duration-500 group-hover:scale-[1.025] group-hover:brightness-[0.62] group-hover:saturate-100"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07101a] via-[#07101a]/20 to-[#030811]/20" />

                    <div className="absolute inset-x-0 top-0 p-5">
                      <p className="max-w-[180px] text-[15px] font-medium uppercase leading-[1.15] tracking-[-0.01em] text-white">
                        {roadmap.name}
                      </p>
                    </div>
                  </div>

                  {/* =============================================
                      PRODUCT INFO
                  ============================================= */}

                  <div className="flex min-h-[225px] flex-col p-5 text-center">
                    <h3 className="text-[16px] font-medium leading-6">
                      {roadmap.name}
                    </h3>

                    <p className="mt-3 text-[12px] font-light leading-5 text-white/45">
                      {roadmap.description}
                    </p>

                    <div className="mt-auto pt-5">
                      <div className="text-[27px] font-light tracking-[-0.035em]">
                        ${roadmap.price}
                      </div>

                      <button
                        type="button"
                        className="group/button mt-4 flex h-[42px] w-full items-center justify-center gap-2 rounded-md bg-[#3048ff] text-[9px] font-semibold uppercase tracking-[0.2em] transition hover:bg-[#4057ff]"
                      >
                        Purchase

                        <ArrowRight
                          size={12}
                          className="transition-transform duration-300 group-hover/button:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* =====================================================
                HELP BAR
            ===================================================== */}

            <div className="mt-6 flex flex-col justify-between gap-4 rounded-lg border border-white/10 bg-[#060d17] px-6 py-4 text-[11px] text-white/45 sm:flex-row sm:items-center">
              <span>
                Not sure which roadmap fits you? We&apos;ll help you choose the
                right plan for your goals.
              </span>

              <button
                type="button"
                className="group flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#526cff]"
              >
                Help Me Choose

                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            ROADMAP PREVIEW
        ========================================================= */}

        <section className="relative border-b border-white/5 bg-[#030811] py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-7 sm:px-10 lg:grid-cols-[54%_46%] lg:items-center lg:px-14">
            {/* =====================================================
                DOCUMENT PREVIEW
            ===================================================== */}

            <div className="relative min-h-[410px]">
              <div className="absolute left-[5%] top-[12%] h-[74%] w-[26%] -rotate-[7deg] overflow-hidden rounded-sm bg-[#e5e7eb] shadow-2xl">
                <img
                  src="/images/roadmaps/sample-content-page.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute left-[19%] top-[2%] z-20 h-[88%] w-[53%] overflow-hidden rounded-sm bg-[#07101a] shadow-[0_30px_80px_rgba(0,0,0,.5)]">
                <img
                  src="/images/roadmaps/business-roadmap-preview-cover.jpg"
                  alt="Business Website Roadmap preview"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute right-[9%] top-[15%] h-[71%] w-[26%] rotate-[7deg] overflow-hidden rounded-sm bg-[#e5e7eb] shadow-2xl">
                <img
                  src="/images/roadmaps/sample-architecture-page.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* =====================================================
                PREVIEW COPY
            ===================================================== */}

            <div className="max-w-[600px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
                ROADMAP PREVIEW
              </p>

              <h2 className="mt-4 text-[42px] font-light leading-[1.06] tracking-[-0.04em] sm:text-[50px]">
                See exactly what you&apos;re building
                <br />
                before you build it.
              </h2>

              <p className="mt-5 max-w-[520px] text-base font-light leading-7 text-white/50">
                A detailed website plan that maps the decisions, requirements,
                structure, and direction you need to move forward with
                confidence and clarity.
              </p>

              <button
                type="button"
                className="group mt-8 flex h-[52px] items-center gap-3 rounded-lg bg-[#3048ff] px-7 text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:bg-[#4057ff]"
              >
                View Sample Roadmap

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="relative bg-[#030811] px-7 py-20 text-center sm:px-10 lg:px-14 lg:py-24">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3048ff]/[0.04] blur-[140px]" />

          <div className="relative z-10 mx-auto max-w-[1000px]">
            <h2 className="text-[40px] font-light leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
              Before you build your real site,
              <br />

              <span className="text-[#526cff]">
                build the right plan.
              </span>
            </h2>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={scrollToRoadmaps}
                className="group flex h-[54px] items-center gap-3 rounded-lg bg-[#3048ff] px-8 text-[10px] font-semibold uppercase tracking-[0.24em] transition hover:bg-[#4057ff]"
              >
                Choose Your Roadmap

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                className="group flex h-[54px] items-center gap-3 rounded-lg border border-white/15 px-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 transition hover:border-[#526cff]/60 hover:bg-[#526cff]/5 hover:text-white"
              >
                Work With RealSite

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
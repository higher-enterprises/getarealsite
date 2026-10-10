"use client";

import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BarChart3,
  Boxes,
  Check,
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
} from "lucide-react";

import Header from "@/components/navigation/navigation";

/* =========================================================
   SIGNATURE PLAN COMPONENTS
========================================================= */

const planComponents = [
  {
    number: "01",
    title: "Strategy",
    description:
      "We define your goals, audience, positioning, value proposition, competitive advantage, and strategic priorities.",
    icon: Target,
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "We design the information architecture, navigation, hierarchy, sitemap, and user journeys.",
    icon: Network,
  },
  {
    number: "03",
    title: "Content",
    description:
      "We plan content requirements, page messaging, calls to action, and content strategy.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Functionality",
    description:
      "We define required features, workflows, forms, bookings, memberships, ecommerce, and custom functionality.",
    icon: Settings2,
  },
  {
    number: "05",
    title: "Experience",
    description:
      "We plan the user experience, mobile behavior, conversion paths, and experience priorities.",
    icon: Smartphone,
  },
  {
    number: "06",
    title: "Technology",
    description:
      "We recommend platforms, technical requirements, data structure, systems, and development considerations.",
    icon: Code2,
  },
  {
    number: "07",
    title: "SEO & Traffic",
    description:
      "We build the SEO foundation, keyword strategy, site structure, and traffic growth opportunities.",
    icon: Search,
  },
  {
    number: "08",
    title: "Brand & Design",
    description:
      "We align the plan with your brand, visual direction, interface considerations, and design strategy.",
    icon: LayoutGrid,
  },
  {
    number: "09",
    title: "Content Plan",
    description:
      "We outline content topics, assets, publishing needs, and content calendar direction.",
    icon: FileText,
  },
  {
    number: "10",
    title: "Conversion Plan",
    description:
      "We map lead flow, conversion strategy, funnels, offers, CTAs, and customer pathways.",
    icon: BarChart3,
  },
  {
    number: "11",
    title: "Integration Plan",
    description:
      "We define integrations, third-party tools, APIs, automations, CRM, and system connections.",
    icon: Boxes,
  },
  {
    number: "12",
    title: "Build Plan",
    description:
      "We document priorities, requirements, implementation approach, dependencies, and next steps.",
    icon: CheckCircle2,
  },
];

/* =========================================================
   SIGNATURE SITE TYPES

   Business price is the confirmed $899 shown in the design.
   Update the remaining prices here when final Signature pricing
   is established.
========================================================= */

const signaturePlans = [
  {
    id: "business",
    name: "Business Website",
    eyebrow: "BUSINESS WEBSITE",
    price: 899,
    image: "/images/signature/business-signature-plan.png",
    description:
      "A complete professionally developed website plan built around your business, customers, goals, competition, and growth strategy.",
  },
  {
    id: "nonprofit",
    name: "Nonprofit Website",
    eyebrow: "NONPROFIT WEBSITE",
    price: null,
    image: "/images/signature/nonprofit-signature-plan.png",
    description:
      "A complete strategic plan built around your mission, programs, audiences, donors, resources, and organizational goals.",
  },
  {
    id: "church",
    name: "Church Website",
    eyebrow: "CHURCH WEBSITE",
    price: null,
    image: "/images/signature/church-signature-plan.png",
    description:
      "A complete website strategy for ministries, sermons, giving, events, outreach, resources, and community engagement.",
  },
  {
    id: "ecommerce",
    name: "Ecommerce Website",
    eyebrow: "ECOMMERCE WEBSITE",
    price: null,
    image: "/images/signature/ecommerce-signature-plan.png",
    description:
      "A complete ecommerce strategy covering products, merchandising, customer journeys, checkout, content, and technology.",
  },
  {
    id: "lead-generation",
    name: "Lead Generation Website",
    eyebrow: "LEAD GENERATION WEBSITE",
    price: null,
    image: "/images/signature/lead-generation-signature-plan.png",
    description:
      "A complete conversion-focused plan built around traffic, offers, landing experiences, forms, funnels, and qualified leads.",
  },
  {
    id: "booking",
    name: "Booking Website",
    eyebrow: "BOOKING WEBSITE",
    price: null,
    image: "/images/signature/booking-signature-plan.png",
    description:
      "A complete plan for appointments, customer intake, availability, booking workflows, notifications, and service delivery.",
  },
  {
    id: "scheduling",
    name: "Scheduling Website",
    eyebrow: "SCHEDULING WEBSITE",
    price: null,
    image: "/images/signature/scheduling-signature-plan.png",
    description:
      "A complete scheduling strategy covering calendars, availability, staff, resources, workflows, and customer interactions.",
  },
  {
    id: "publishing",
    name: "Publishing Website",
    eyebrow: "PUBLISHING WEBSITE",
    price: null,
    image: "/images/signature/publishing-signature-plan.png",
    description:
      "A complete publishing strategy for content architecture, editorial workflows, categories, discovery, archives, and growth.",
  },
  {
    id: "media",
    name: "Media Website",
    eyebrow: "MEDIA WEBSITE",
    price: null,
    image: "/images/signature/media-signature-plan.png",
    description:
      "A complete media strategy for video, audio, photography, streaming, libraries, distribution, and audience engagement.",
  },
  {
    id: "membership",
    name: "Membership Website",
    eyebrow: "MEMBERSHIP WEBSITE",
    price: null,
    image: "/images/signature/membership-signature-plan.png",
    description:
      "A complete membership strategy covering accounts, gated content, subscriptions, resources, engagement, and retention.",
  },
  {
    id: "directory",
    name: "Directory Website",
    eyebrow: "DIRECTORY WEBSITE",
    price: null,
    image: "/images/signature/directory-signature-plan.png",
    description:
      "A complete directory strategy covering listings, categories, profiles, search, filtering, submissions, and discovery.",
  },
  {
    id: "listing",
    name: "Listing Website",
    eyebrow: "LISTING WEBSITE",
    price: null,
    image: "/images/signature/listing-signature-plan.png",
    description:
      "A complete listing-platform strategy covering inventory, search, filters, detail pages, inquiries, and conversions.",
  },
  {
    id: "elearning",
    name: "eLearning Website",
    eyebrow: "ELEARNING WEBSITE",
    price: null,
    image: "/images/signature/elearning-signature-plan.png",
    description:
      "A complete learning strategy covering courses, lessons, students, assessments, progress, resources, and educational journeys.",
  },
  {
    id: "community",
    name: "Community Website",
    eyebrow: "COMMUNITY WEBSITE",
    price: null,
    image: "/images/signature/community-signature-plan.png",
    description:
      "A complete community strategy covering members, profiles, groups, conversations, resources, moderation, and engagement.",
  },
  {
    id: "intranet",
    name: "Intranet",
    eyebrow: "INTRANET",
    price: null,
    image: "/images/signature/intranet-signature-plan.png",
    description:
      "A complete internal digital strategy covering employees, permissions, resources, workflows, tools, and organizational information.",
  },
  {
    id: "marketplace",
    name: "Marketplace",
    eyebrow: "MARKETPLACE",
    price: null,
    image: "/images/signature/marketplace-signature-plan.png",
    description:
      "A complete marketplace strategy covering buyers, sellers, listings, accounts, transactions, commissions, and platform workflows.",
  },
  {
    id: "saas",
    name: "SaaS / Web App",
    eyebrow: "SAAS / WEB APP",
    price: null,
    image: "/images/signature/saas-signature-plan.png",
    description:
      "Advanced strategic planning for software platforms, users, dashboards, workflows, data architecture, integrations, and product growth.",
  },
];

/* =========================================================
   INCLUDED ITEMS
========================================================= */

const signatureIncludes = [
  "Complete research & discovery",
  "Complete website strategy",
  "Complete architecture & sitemap",
  "Content & conversion direction",
  "Technology & integration recommendations",
  "Professional final Roadmap",
];

/* =========================================================
   PAGE
========================================================= */

export default function SignaturePlanningPage() {
  const [selectedPlanId, setSelectedPlanId] =
    useState("business");

  const selectedPlan = useMemo(() => {
    return (
      signaturePlans.find(
        (plan) => plan.id === selectedPlanId
      ) ?? signaturePlans[0]
    );
  }, [selectedPlanId]);

  const scrollToSelector = () => {
    document
      .getElementById("signature-selector")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToComponents = () => {
    document
      .getElementById("signature-components")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative overflow-hidden bg-[#030811] text-white">
      {/* =========================================================
          GLOBAL NAVIGATION
      ========================================================= */}

      <div className="absolute inset-x-0 top-0 z-[1000]">
        <Header />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative h-[50vh] min-h-[520px] overflow-hidden border-b border-white/[0.07] bg-[#030811]">
        {/* BACKGROUND IMAGE */}

        <div className="absolute inset-0">
          <img
            src="/images/signature/signature-consultant-hero.jpg"
            alt="RealSite business consultant reviewing a Signature website plan"
            className="h-full w-full object-cover object-center"
          />

          {/* text protection / same RealSite dark treatment */}

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #030811 0%, #030811 19%, rgba(3,8,17,.97) 28%, rgba(3,8,17,.88) 38%, rgba(3,8,17,.58) 51%, rgba(3,8,17,.20) 67%, rgba(3,8,17,0) 83%)",
            }}
          />

          <div className="absolute inset-x-0 top-0 h-[150px] bg-gradient-to-b from-[#030811]/90 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#030811] to-transparent" />
        </div>

        {/* HERO CONTENT */}

        <div className="relative z-20 mx-auto grid h-full max-w-[1800px] grid-cols-1 items-center px-7 pb-10 pt-28 sm:px-10 lg:grid-cols-[55%_45%] lg:px-14">
          <div className="max-w-[720px]">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.36em] text-[#526cff]">
              REALSITE SIGNATURE PLANNING
            </p>

            <h1 className="text-[46px] font-light leading-[1.03] tracking-[-0.04em] sm:text-[56px] lg:text-[62px] xl:text-[68px]">
              Your business.
              <br />

              Completely{" "}
              <span className="text-[#526cff]">
                planned.
              </span>
            </h1>

            <p className="mt-7 max-w-[610px] text-base font-light leading-8 text-white/58 sm:text-lg">
              We conduct the research, define the strategy,
              architect the experience, and deliver the
              complete plan for your RealSite.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={scrollToSelector}
                className="group flex h-[56px] items-center gap-3 rounded-lg bg-[#3048ff] px-8 text-[10px] font-semibold uppercase tracking-[0.24em] transition hover:bg-[#4057ff]"
              >
                Start Your Signature Plan

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={scrollToComponents}
                className="group flex h-[56px] items-center gap-3 rounded-lg border border-white/15 bg-[#030811]/25 px-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                See What We Deliver

                <ArrowDown size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2
          SIGNATURE PLAN SELECTOR
      ========================================================= */}

      <section
        id="signature-selector"
        className="relative overflow-hidden border-b border-white/[0.06] bg-[#030811] py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute left-1/2 top-[45%] h-[800px] w-[1300px] -translate-x-1/2 rounded-full bg-[#3048ff]/[0.025] blur-[230px]" />

        <div className="relative z-10 mx-auto max-w-[1650px] px-7 sm:px-10 lg:px-14">
          {/* =====================================================
              CENTERED SECTION INTRO
          ===================================================== */}

          <div className="mx-auto mb-12 max-w-[920px] text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
              CHOOSE YOUR SIGNATURE PLAN
            </p>

            <h2 className="mt-4 text-[40px] font-light leading-[1.06] tracking-[-0.04em] sm:text-[48px] lg:text-[56px]">
              A complete plan, built specifically
              <br className="hidden sm:block" /> for your
              business.
            </h2>

            <p className="mx-auto mt-6 max-w-[820px] text-base font-light leading-8 text-white/52">
              Select the type of website you&apos;re
              planning. RealSite will research your
              business, audience, market, and requirements,
              then develop a complete Signature Plan
              tailored to what you need to build.
            </p>
          </div>

          {/* =====================================================
              PREMIUM SELECTOR
          ===================================================== */}

          <div className="overflow-hidden rounded-[18px] border border-white/12 bg-[#06101a]">
            <div className="grid lg:grid-cols-[25%_75%]">
              {/* =================================================
                  LEFT — SMOOTH VERTICAL SELECTOR
              ================================================= */}

              <aside className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r lg:p-6">
                <p className="mb-4 px-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#526cff]">
                  Choose Your Site Type
                </p>

                <div className="max-h-[700px] space-y-[2px] overflow-y-auto pr-1 signature-scrollbar">
                  {signaturePlans.map((plan) => {
                    const active =
                      selectedPlanId === plan.id;

                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() =>
                          setSelectedPlanId(plan.id)
                        }
                        className={`group flex min-h-[42px] w-full items-center justify-between rounded-md px-4 py-2.5 text-left text-[13px] font-light transition-all duration-300 ${
                          active
                            ? "bg-[#3048ff] text-white shadow-[0_8px_28px_rgba(48,72,255,.18)]"
                            : "text-white/62 hover:bg-white/[0.035] hover:text-white"
                        }`}
                      >
                        <span>{plan.name}</span>

                        <ArrowRight
                          size={13}
                          className={`transition-all duration-300 ${
                            active
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 border-t border-white/10 px-3 pt-5">
                  <p className="text-[11px] font-light leading-5 text-white/42">
                    Every Signature Plan is custom to your
                    business, your goals, and your market.
                  </p>
                </div>
              </aside>

              {/* =================================================
                  RIGHT — SELECTED SIGNATURE PLAN
              ================================================= */}

              <div
                key={selectedPlan.id}
                className="grid min-h-[720px] animate-signature-plan-in md:grid-cols-[45%_55%]"
              >
                {/* PLAN COVER */}

                <div className="relative flex items-center justify-center border-b border-white/10 bg-[#040b14] p-8 md:border-b-0 md:border-r lg:p-10">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3048ff]/[0.055] blur-[110px]" />

                  <img
                    src={selectedPlan.image}
                    alt={`${selectedPlan.name} Signature Plan`}
                    className="relative z-10 max-h-[610px] w-auto max-w-full object-contain drop-shadow-[0_35px_55px_rgba(0,0,0,.48)]"
                  />
                </div>

                {/* PLAN INFORMATION */}

                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#526cff]">
                    {selectedPlan.eyebrow}
                  </p>

                  <h3 className="mt-4 text-[38px] font-light leading-[1.05] tracking-[-0.04em] sm:text-[44px] lg:text-[50px]">
                    Signature Planning
                  </h3>

                  <p className="mt-5 max-w-[620px] text-[15px] font-light leading-7 text-white/52">
                    {selectedPlan.description}
                  </p>

                  {/* INCLUDED */}

                  <div className="mt-8 space-y-4">
                    {signatureIncludes.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <Check
                          size={16}
                          strokeWidth={1.7}
                          className="mt-[3px] shrink-0 text-[#526cff]"
                        />

                        <span className="text-[14px] font-light text-white/72">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* PRICE / CTA */}

                  <div className="mt-9 border-t border-white/10 pt-7">
                    {selectedPlan.price ? (
                      <div className="text-[42px] font-light tracking-[-0.045em]">
                        $
                        {selectedPlan.price.toLocaleString()}
                      </div>
                    ) : (
                      <div className="text-[34px] font-light tracking-[-0.035em]">
                        Custom
                      </div>
                    )}

                    <button
                      type="button"
                      className="group mt-5 flex h-[54px] min-w-[275px] items-center justify-center gap-3 rounded-lg bg-[#3048ff] px-7 text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:bg-[#4057ff]"
                    >
                      Purchase Signature Plan

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    <p className="mt-5 text-[11px] font-light text-white/42">
                      Delivery time: Typically 3–4 weeks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3
          EXPANDED SIGNATURE PLAN COMPONENTS
      ========================================================= */}

      <section
        id="signature-components"
        className="relative overflow-hidden border-b border-white/[0.06] bg-[#030811] py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[1250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3048ff]/[0.018] blur-[220px]" />

        <div className="relative z-10 mx-auto max-w-[1650px] px-7 sm:px-10 lg:px-14">
          {/* CENTERED TITLE */}

          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
              THE SIGNATURE PLANNING PROCESS
            </p>

            <h2 className="mt-4 text-[40px] font-light leading-[1.06] tracking-[-0.04em] sm:text-[48px] lg:text-[54px]">
              We plan every part of your site.
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-base font-light leading-8 text-white/50">
              Our team researches, defines, and documents
              the strategy, structure, experience, content,
              technology, and requirements your website
              needs before design and development begin.
            </p>
          </div>

          {/* =====================================================
              EXPANDED COMPONENT GRID
          ===================================================== */}

          <div className="mt-14 overflow-hidden rounded-[18px] border border-white/10 bg-[#06101a]">
            <div className="grid md:grid-cols-2 xl:grid-cols-4">
              {planComponents.map((component) => {
                const Icon = component.icon;

                return (
                  <article
                    key={component.number}
                    className="group min-h-[215px] border-b border-white/10 p-7 transition-colors duration-300 hover:bg-white/[0.018] md:border-r xl:[&:nth-child(4n)]:border-r-0"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#526cff]">
                        <Icon
                          size={31}
                          strokeWidth={1.35}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] font-semibold tracking-[0.22em] text-[#526cff]">
                            {component.number}
                          </span>

                          <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
                            {component.title}
                          </h3>
                        </div>

                        <p className="mt-4 text-[13px] font-light leading-6 text-white/48">
                          {component.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LARGE SECONDARY CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#030811] px-7 py-28 sm:px-10 lg:px-14 lg:py-36">
        {/* blueprint atmosphere */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div className="absolute left-[-8%] top-[22%] h-px w-[50%] rotate-[-9deg] bg-[#526cff]" />
          <div className="absolute right-[-8%] top-[58%] h-px w-[52%] rotate-[8deg] bg-[#526cff]" />
          <div className="absolute left-[17%] top-[10%] h-[75%] w-px rotate-[22deg] bg-[#526cff]" />
          <div className="absolute right-[20%] top-[14%] h-[70%] w-px rotate-[-20deg] bg-[#526cff]" />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3048ff]/[0.035] blur-[175px]" />

        <div className="relative z-10 mx-auto max-w-[1150px] text-center">
          <h2 className="text-[46px] font-light leading-[1.05] tracking-[-0.045em] sm:text-[58px] lg:text-[68px]">
            A better site begins with
            <br />

            <span className="text-[#526cff]">
              a plan built specifically for you.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[680px] text-base font-light leading-8 text-white/48">
            Let our team create the complete roadmap that
            sets your project up for clarity, confidence,
            and success.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={scrollToSelector}
              className="group flex h-[58px] items-center gap-3 rounded-lg bg-[#3048ff] px-9 text-[10px] font-semibold uppercase tracking-[0.24em] shadow-[0_18px_55px_rgba(48,72,255,.18)] transition hover:-translate-y-0.5 hover:bg-[#4057ff]"
            >
              Start Your Signature Plan

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="group flex h-[58px] items-center gap-3 rounded-lg border border-white/15 px-9 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/72 transition hover:border-white/30 hover:bg-white/[0.03] hover:text-white"
            >
              Back To Top

              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCAL ANIMATION / SCROLLBAR
      ========================================================= */}

      <style jsx global>{`
        @keyframes signature-plan-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-signature-plan-in {
          animation: signature-plan-in 0.32s ease-out;
        }

        .signature-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(82, 108, 255, 0.3)
            transparent;
        }

        .signature-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .signature-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .signature-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(82, 108, 255, 0.3);
          border-radius: 999px;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-signature-plan-in {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
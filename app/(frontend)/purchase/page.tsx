"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CarFront,
  Church,
  Hammer,
  HeartPulse,
  Home,
  Scale,
  ShoppingBag,
  Sparkles,
  Store,
  UtensilsCrossed,
} from "lucide-react";

import Header from "@/components/navigation/navigation";
import Rebrand from "@/components/rebrand/rebrand";

const purchaseCategories = [
  {
    name: "Home Services",
    description:
      "RealSites for contractors, repair companies, installers, maintenance providers, and local service businesses.",
    icon: Hammer,
    href: "/purchase/home-services",
  },
  {
    name: "Professional Services",
    description:
      "RealSites for consultants, agencies, accountants, advisors, and professional service businesses.",
    icon: BriefcaseBusiness,
    href: "/purchase/professional-services",
  },
  {
    name: "Health & Wellness",
    description:
      "RealSites for wellness practices, studios, health providers, fitness businesses, and personal care brands.",
    icon: HeartPulse,
    href: "/purchase/health-wellness",
  },
  {
    name: "Legal Services",
    description:
      "RealSites for law firms, attorneys, legal professionals, and specialized legal service providers.",
    icon: Scale,
    href: "/purchase/legal-services",
  },
  {
    name: "Real Estate & Property",
    description:
      "RealSites for agents, brokerages, property managers, real estate firms, and property businesses.",
    icon: Home,
    href: "/purchase/real-estate-property",
  },
  {
    name: "Food & Hospitality",
    description:
      "RealSites for restaurants, bakeries, cafés, caterers, hospitality businesses, and food brands.",
    icon: UtensilsCrossed,
    href: "/purchase/food-hospitality",
  },
  {
    name: "Automotive",
    description:
      "RealSites for repair shops, dealers, detailers, automotive services, parts businesses, and specialists.",
    icon: CarFront,
    href: "/purchase/automotive",
  },
  {
    name: "Beauty & Personal Care",
    description:
      "RealSites for salons, spas, beauty professionals, personal care businesses, and appointment-based brands.",
    icon: Sparkles,
    href: "/purchase/beauty-personal-care",
  },
  {
    name: "Retail & Commerce",
    description:
      "RealSites for retailers, specialty stores, product businesses, boutiques, and commerce-focused brands.",
    icon: ShoppingBag,
    href: "/purchase/retail-commerce",
  },
  {
    name: "Faith & Nonprofit",
    description:
      "RealSites for churches, ministries, nonprofits, community organizations, and mission-driven institutions.",
    icon: Church,
    href: "/purchase/faith-nonprofit",
  },
  {
    name: "Construction & Trades",
    description:
      "RealSites for builders, construction companies, specialty contractors, and skilled trade businesses.",
    icon: Building2,
    href: "/purchase/construction-trades",
  },
  {
    name: "Local Business",
    description:
      "RealSites for established local businesses that need a professional site ready to put to work.",
    icon: Store,
    href: "/purchase/local-business",
  },
];

export default function PurchasePage() {
  return (
    <main className="min-h-screen bg-[#030811] text-white">
      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <div className="absolute inset-x-0 top-0 z-[1000]">
        <Header />
      </div>

      {/* =========================================================
          PURCHASE HERO
      ========================================================= */}

      <Rebrand />

      {/* =========================================================
          PURCHASE CATEGORIES
      ========================================================= */}

      <section
        id="explore-realsites"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#030811] py-28"
      >
        {/* Background atmosphere */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[35%] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[#3048ff]/[0.045] blur-[200px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-8 lg:px-12">
          {/* Header */}

          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#526cff]">
              EXPLORE REALSITES
            </p>

            <h2 className="mt-5 text-[44px] font-light leading-[1.04] tracking-[-0.045em] sm:text-[54px] lg:text-[62px]">
              Find one that already
              <br />
              <span className="text-[#526cff]">
                fits your business.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[720px] text-base font-light leading-8 text-white/50 sm:text-lg">
              Browse ready-built RealSites by business type and start
              with a site designed around the customers, services, and
              transactions your business already has.
            </p>
          </div>

          {/* Category grid */}

          <div className="mt-16 grid gap-px overflow-hidden rounded-[16px] border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {purchaseCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative min-h-[250px] overflow-hidden bg-[#050b15] p-8 transition-colors duration-300 hover:bg-[#071120]"
                >
                  {/* Card background */}

                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-[#3048ff]/0 blur-[80px] transition-all duration-500 group-hover:bg-[#3048ff]/[0.08]" />

                    <div className="absolute right-8 top-8 text-[72px] font-extralight leading-none tracking-[-0.08em] text-white/[0.025]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Card content */}

                  <div className="relative z-10 flex h-full min-h-[186px] flex-col">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#526cff]/20 bg-[#526cff]/[0.06] text-[#526cff]">
                        <Icon size={20} strokeWidth={1.4} />
                      </div>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.3}
                        className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#526cff]"
                      />
                    </div>

                    <div className="mt-auto pt-10">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.27em] text-[#526cff]">
                        REALSITES FOR
                      </p>

                      <h3 className="mt-2 text-[24px] font-light tracking-[-0.035em] text-white">
                        {category.name}
                      </h3>

                      <p className="mt-3 max-w-[380px] text-[13px] font-light leading-6 text-white/40">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* View all */}

          <div className="mt-12 flex justify-center">
            <Link
              href="/purchase/all"
              className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-lg bg-[#526cff] px-8 text-[10px] font-semibold uppercase tracking-[0.23em] text-white transition hover:bg-[#6376ff]"
            >
              View All RealSites

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          BUILD / ACQUIRE
      ========================================================= */}

      <section className="border-t border-white/[0.08]">
        <div className="grid lg:grid-cols-2">
          {/* BUILD */}

          <Link
            href="/build"
            className="group relative min-h-[440px] overflow-hidden border-b border-white/[0.08] bg-[#050c17] lg:border-b-0 lg:border-r"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#071426] via-[#050c17] to-[#030811]" />

              <div className="absolute -bottom-[60%] -left-[20%] h-[650px] w-[750px] rounded-full bg-[#3048ff]/[0.08] blur-[180px] transition-all duration-700 group-hover:bg-[#3048ff]/[0.13]" />
            </div>

            <div className="relative z-10 flex min-h-[440px] items-end p-10 lg:p-16">
              <div className="max-w-[560px]">
                <div className="flex items-center gap-3">
                  <ArrowLeft
                    size={15}
                    className="text-[#526cff] transition-transform duration-300 group-hover:-translate-x-1"
                  />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#526cff]">
                    BUILD
                  </p>
                </div>

                <h2 className="mt-5 text-[42px] font-light leading-[1.04] tracking-[-0.045em] lg:text-[52px]">
                  Don't see the
                  <br />
                  RealSite you need?
                </h2>

                <p className="mt-5 max-w-[500px] text-base font-light leading-7 text-white/45">
                  Go back to Build and have a RealSite created around
                  your specific business, customers, content, and
                  functionality.
                </p>

                <div className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75 transition group-hover:text-white">
                  Explore Build

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* ACQUIRE */}

          <Link
            href="/acquire"
            className="group relative min-h-[440px] overflow-hidden bg-[#06101e]"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#0a1730] via-[#06101e] to-[#030811]" />

              <div className="absolute -right-[20%] top-1/2 h-[650px] w-[750px] -translate-y-1/2 rounded-full bg-[#3048ff]/[0.09] blur-[180px] transition-all duration-700 group-hover:bg-[#3048ff]/[0.14]" />

              <Building2
                size={330}
                strokeWidth={0.45}
                className="absolute right-[6%] top-1/2 -translate-y-1/2 text-[#526cff] opacity-[0.06] transition-all duration-700 group-hover:translate-x-3 group-hover:opacity-[0.1]"
              />
            </div>

            <div className="relative z-10 flex min-h-[440px] items-end p-10 lg:p-16">
              <div className="max-w-[560px]">
                <div className="flex items-center gap-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#526cff]">
                    ACQUIRE
                  </p>

                  <ArrowRight
                    size={15}
                    className="text-[#526cff] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                <h2 className="mt-5 text-[42px] font-light leading-[1.04] tracking-[-0.045em] lg:text-[52px]">
                  Want more than
                  <br />
                  the RealSite?
                </h2>

                <p className="mt-5 max-w-[510px] text-base font-light leading-7 text-white/45">
                  Move forward to Acquire and explore established
                  businesses with customers, operations, revenue, and
                  digital assets already in place.
                </p>

                <div className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75 transition group-hover:text-white">
                  Explore Acquire

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
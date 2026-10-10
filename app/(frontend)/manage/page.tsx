"use client";

import {
  ArrowDown,
  ArrowUpRight,
  ShieldCheck,
  CloudBackup,
  FilePenLine,
  Gauge,
  BarChart3,
  Cable,
  Headphones,
  Check,
  Users,
} from "lucide-react";

import Link from "next/link";

import Header from "@/components/navigation/navigation";

const buildSteps = [
  {
    number: "01",
    label: "SERVICE 1",
    title: "Security & Updates",
    description:
      "We monitor your website, apply critical updates, and help protect the systems that keep your site secure and dependable.",
    details: ["Security", "Updates"],
    icon: ShieldCheck,
  },
  {
    number: "02",
    label: "SERVICE 2",
    title: "Backups & Uptime",
    description:
      "We monitor availability and maintain dependable backups so your website stays online and recoverable when problems happen.",
    details: ["Backups", "Uptime"],
    icon: CloudBackup,
  },
  {
    number: "03",
    label: "SERVICE 3",
    title: "Content Updates",
    description:
      "We keep your website current with changes to text, images, pages, products, services, team information, and promotions.",
    details: ["Content", "Pages"],
    icon: FilePenLine,
  },
  {
    number: "04",
    label: "SERVICE 4",
    title: "Performance",
    description:
      "We monitor site health, speed, functionality, and technical performance and make improvements that keep your site running well.",
    details: ["Speed", "Health"],
    icon: Gauge,
  },
  {
    number: "05",
    label: "SERVICE 5",
    title: "SEO & Analytics",
    description:
      "We monitor search health and website analytics so you can understand performance, identify issues, and uncover opportunities.",
    details: ["SEO", "Analytics"],
    icon: BarChart3,
  },
  {
    number: "06",
    label: "SERVICE 6",
    title: "Integrations",
    description:
      "We monitor forms, CRM connections, booking tools, ecommerce systems, automations, and other services your website depends on.",
    details: ["Systems", "Integrations"],
    icon: Cable,
  },
  {
    number: "07",
    label: "SERVICE 7",
    title: "Support & Fixes",
    description:
      "When something needs attention, our team is available for troubleshooting, fixes, changes, and ongoing website support.",
    details: ["Support", "Fixes"],
    icon: Headphones,
  },
];

const buildPackages = [
  {
    number: "01",
    kicker: "ESSENTIAL SUPPORT",
    name: "Support",
    pages: "FOUNDATIONAL WEBSITE SUPPORT",
    description:
      "Essential technical support that keeps your website protected, available, updated, and supported.",
    features: [
      "Uptime monitoring",
      "SSL monitoring",
      "Daily backups",
      "Security monitoring",
      "Core platform updates",
      "Email support",
    ],
    price: "$99/mo",
    cta: "SELECT SUPPORT",
    href: "/manage/support",
    featured: false,
  },
  {
    number: "02",
    kicker: "PROACTIVE CARE",
    name: "Care",
    pages: "2 MANAGEMENT HOURS / MONTH",
    description:
      "Proactive care plus a fixed block of hands-on management time to keep your website healthy and current.",
    features: [
      "Everything in Support",
      "2 management hours each month",
      "Website health checks",
      "Form & functionality testing",
      "Broken link monitoring",
      "Performance monitoring",
      "SEO health monitoring",
      "Monthly site report",
    ],
    price: "$299/mo",
    cta: "SELECT CARE",
    href: "/manage/care",
    featured: true,
  },
  {
    number: "03",
    kicker: "ONGOING MAINTENANCE",
    name: "Maintain",
    pages: "4 MANAGEMENT HOURS / MONTH",
    description:
      "Ongoing hands-on maintenance for businesses that regularly need content, page, product, and service updates.",
    features: [
      "Everything in Care",
      "4 management hours each month",
      "Content updates",
      "Image & page updates",
      "Product / service updates",
      "Staff or team updates",
      "Blog post publishing",
      "Monthly update report",
    ],
    price: "$499/mo",
    cta: "SELECT MAINTAIN",
    href: "/manage/maintain",
    featured: false,
  },
  {
    number: "04",
    kicker: "ACTIVE MANAGEMENT",
    name: "Manage",
    pages: "8 MANAGEMENT HOURS / MONTH",
    description:
      "Active website management and optimization for businesses that rely on their site as an important operating and growth asset.",
    features: [
      "Everything in Maintain",
      "8 management hours each month",
      "Conversion monitoring",
      "Integration monitoring",
      "Analytics review",
      "Performance optimization",
      "Priority support",
      "Monthly strategy review",
    ],
    price: "$999/mo",
    cta: "SELECT MANAGE",
    href: "/manage/manage",
    featured: false,
  },
];


export default function Home() {
  const scrollToBuildProcess = () => {
    document.getElementById("management-services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToExperience = () => {
    document.getElementById("management-packages")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <main className="relative bg-[#030811] text-white">
        {/* =========================================================
            GLOBAL NAVIGATION
        ========================================================= */}

        <div className="absolute inset-x-0 top-0 z-[1000]">
          <Header />
        </div>

        {/* =========================================================
            MANAGE HERO
        ========================================================= */}

        <section className="relative min-h-[100dvh] overflow-hidden border-b border-white/10 bg-[#030811]">
          {/* =====================================================
              HERO BACKGROUND / MANAGEMENT DASHBOARD
          ===================================================== */}

          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#030811]" />

            <div className="absolute right-0 top-0 hidden h-full w-[62%] lg:block">
              <img
                src="/images/manage/manage-hero-dashboard.png"
                alt="Website management dashboard with service overlays"
                className="absolute right-[-3%] top-1/2 w-[112%] max-w-none -translate-y-1/2 object-contain"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#030811] via-[#030811]/30 to-transparent" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#030811] via-[#030811]/92 lg:via-[#030811]/78 to-[#030811]/10" />
            <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-[#030811] via-[#030811]/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#030811] via-[#030811]/55 to-transparent" />
            <div className="absolute right-[18%] top-[24%] h-[520px] w-[520px] rounded-full bg-[#3048ff]/10 blur-[180px]" />
          </div>

          {/* =====================================================
              HERO CONTENT
          ===================================================== */}

          <div className="relative z-20 mx-auto grid min-h-[100dvh] max-w-[1800px] grid-cols-1 items-center px-7 pb-20 pt-32 sm:px-10 lg:grid-cols-[60%_40%] lg:px-14 lg:pb-16 lg:pt-28">
            <div className="flex items-center">
              <div className="max-w-[760px]">

                <h1 className="text-[46px] font-light leading-[1.02] tracking-[-0.01em] sm:text-[56px] lg:text-[62px] xl:text-[68px]">
                  Better performance.

                  <br />

        
                  <span className="text-[#526cff]">
                    Real peace of mind.
                  </span>
                
                </h1>

                <p className="mt-7 max-w-[650px] text-base font-light leading-8 text-white/60 sm:text-lg">
                  Proactive website management, expert updates,
                  monitoring, and support keep your site
                  secure, current, and performing at its
                  best month after month.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={scrollToBuildProcess}
                    className="group flex h-[58px] items-center justify-center gap-3 rounded-lg bg-[#3048ff] px-8 text-[11px] font-semibold uppercase tracking-[0.28em] shadow-[0_15px_50px_rgba(48,72,255,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4057ff]"
                  >
                    Explore Management

                    <ArrowDown
                      size={15}
                      className="build-arrow-pulse"
                    />
                  </button>

                  <button
                    type="button"
                    className="group flex h-[58px] items-center justify-center gap-3 rounded-lg border border-white/15 bg-[#030811]/25 px-8 text-[11px] font-semibold uppercase tracking-[0.28em] backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04]"
                  >
                    View Service Details

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </section>

        {/* =========================================================
            WEBSITE MANAGEMENT SERVICES
        ========================================================= */}

        <section
          id="management-services"
          className="relative overflow-hidden border-b border-white/5 bg-[#030811] py-24 sm:py-28 lg:py-32"
        >
          {/* subtle lighting */}

          <div className="pointer-events-none absolute left-1/2 top-[45%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#3048ff]/[0.035] blur-[180px]" />

          {/* =====================================================
              PROCESS INTRO
          ===================================================== */}

          <div className="relative z-10 mx-auto max-w-[1550px] px-7 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-[950px] text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
                WE MANAGE EVERY PART OF YOUR WEBSITE
              </p>

              <h2 className="mt-5 text-[42px] font-light leading-[1.04] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                Comprehensive management.{" "}
                <span className="text-[#526cff]">
                  Consistent results.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[720px] text-base font-light leading-8 text-white/50 sm:text-lg">
                From protection and updates to content,
                performance, analytics, integrations, and
                support, we help keep your website healthy
                and moving forward.
              </p>
            </div>
          </div>

          {/* =====================================================
              MANAGEMENT SERVICE CATEGORY GRID
          ===================================================== */}

          <div className="relative z-10 mx-auto mt-16 max-w-[1600px] px-7 sm:px-10 lg:px-14">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {buildSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[18px] border border-white/15 bg-[#07101d] p-7 transition duration-300 hover:border-[#526cff]/55 hover:bg-[#081426]"
                  >
                    <div className="pointer-events-none absolute right-[-70px] top-[-70px] h-[220px] w-[220px] rounded-full bg-[#3048ff]/10 blur-[70px]" />

                    <div className="relative z-10 flex items-start justify-between gap-5">
                      <div>
                        <div className="text-[27px] font-light leading-none text-[#526cff]">
                          {step.number}
                        </div>
                        <div className="mt-4 h-[2px] w-8 bg-[#526cff]" />
                      </div>

                      <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[18px] border border-[#526cff]/20 bg-[#061126] text-[#526cff] transition-transform duration-300 group-hover:scale-105">
                        <Icon size={34} strokeWidth={1.25} />
                      </div>
                    </div>

                    <div className="relative z-10 mt-8">
                      <h3 className="text-[24px] font-medium tracking-[-0.035em] text-white">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-[14px] font-light leading-7 text-white/55">
                        {step.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-auto border-t border-white/10 pt-6">
                      <div className="flex flex-wrap gap-2.5">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="inline-flex items-center gap-2 rounded-md bg-white/[0.045] px-3 py-2 text-[10px] text-white/60"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#526cff]" />
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              BOTTOM PROCESS STATEMENT
          ===================================================== */}

          <div className="relative z-10 mx-auto mt-12 flex max-w-[900px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-7 text-center">
            <span className="text-[15px] font-medium text-white/85">
              Proactive management. Reliable support.
            </span>

            <span className="hidden h-5 w-px bg-white/15 sm:block" />

            <span className="text-[15px] font-light text-white/35">
              Managed to perform. Managed to grow.
            </span>
          </div>

          {/* =====================================================
              CONTINUE
          ===================================================== */}

          <div className="relative z-10 mt-10 flex justify-center">
            <button
              type="button"
              onClick={scrollToExperience}
              className="group flex h-[56px] items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/[0.02] px-8 text-[11px] font-semibold uppercase tracking-[0.28em] transition-all duration-300 hover:border-[#526cff]/60 hover:bg-[#526cff]/10"
            >
              Choose Your Plan

              <ArrowDown
                size={15}
                className="build-arrow-pulse"
              />
            </button>
          </div>
        </section>

        {/* =========================================================
            MANAGEMENT PACKAGES
        ========================================================= */}

        <section
          id="management-packages"
          className="relative overflow-hidden border-b border-white/5 bg-[#030811] py-24 sm:py-28 lg:py-32"
        >
          {/* SUBTLE BACKGROUND LIGHTING */}
          <div className="pointer-events-none absolute left-1/2 top-[42%] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[#3048ff]/[0.035] blur-[220px]" />

          <div className="relative z-10 mx-auto max-w-[1600px] px-7 sm:px-10 lg:px-14">
            {/* =====================================================
                PACKAGE INTRO
            ===================================================== */}

            <div className="mx-auto max-w-[980px] text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
                WEBSITE MANAGEMENT PLANS
              </p>

              <h2 className="mt-5 text-[42px] font-light leading-[1.04] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                Choose the level of support
                <br />
                that{" "}
                <span className="text-[#526cff]">
                  fits your business.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[760px] text-base font-light leading-8 text-white/50 sm:text-lg">
                Start with essential support or add hands-on management time
                as your website becomes more important to your business.
                Every plan is designed to keep your site protected, current,
                supported, and performing.
              </p>
            </div>

            {/* =====================================================
                PACKAGE GRID
            ===================================================== */}

            <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {buildPackages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`relative flex min-h-[650px] flex-col rounded-[18px] border p-7 transition duration-300 ${
                    pkg.featured
                      ? "border-[#526cff] bg-[#07101d] shadow-[0_20px_80px_rgba(48,72,255,.08)]"
                      : "border-white/15 bg-[#060c16]"
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute right-5 top-5 rounded-md bg-[#3048ff] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div className="text-[25px] font-light text-[#526cff]">
                      {pkg.number}
                    </div>

                    <div className="h-px w-6 bg-[#526cff]" />

                    <div
                      className={`text-[9px] font-semibold uppercase tracking-[0.22em] ${
                        pkg.featured
                          ? "text-[#526cff]"
                          : "text-white/55"
                      }`}
                    >
                      {pkg.kicker}
                    </div>
                  </div>

                  <h3 className="mt-8 text-[34px] font-light tracking-[-0.04em]">
                    {pkg.name}
                  </h3>

                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#526cff]">
                    {pkg.pages}
                  </p>

                  <p className="mt-6 min-h-[104px] text-sm font-light leading-7 text-white/55">
                    {pkg.description}
                  </p>

                  <div className="my-6 h-px bg-white/10" />

                  <div className="space-y-3.5">
                    {pkg.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm text-white/70"
                      >
                        <Check
                          size={15}
                          strokeWidth={1.8}
                          className="mt-0.5 shrink-0 text-[#526cff]"
                        />

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-10">
                    <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/35">
                      Starting from
                    </p>

                    <div className="mt-2 text-[42px] font-light tracking-[-0.04em]">
                      {pkg.price}
                    </div>

                    <Link
                      href={pkg.href}
                      className={`group mt-6 flex h-[52px] w-full items-center justify-center gap-3 rounded-lg text-[10px] font-semibold uppercase tracking-[0.22em] transition ${
                        pkg.featured
                          ? "bg-[#3048ff] text-white hover:bg-[#4057ff]"
                          : "border border-[#526cff]/60 text-[#6f83ff] hover:border-[#526cff] hover:bg-[#526cff]/10 hover:text-white"
                      }`}
                    >
                      {pkg.cta}

                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* =====================================================
                PARTNER PLAN
            ===================================================== */}

            <div className="relative mt-6 overflow-hidden rounded-[18px] border border-white/15 bg-[#060c16]">
              <div className="pointer-events-none absolute right-0 top-1/2 h-[300px] w-[620px] -translate-y-1/2 rounded-full bg-[#3048ff]/[0.06] blur-[120px]" />

              <div className="relative z-10 grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="flex gap-5">
                  <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0a1321] text-[#526cff] sm:flex">
                    <Users
                      size={28}
                      strokeWidth={1.4}
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#526cff]">
                      Partner
                    </p>

                    <h3 className="mt-2 text-[30px] font-light tracking-[-0.035em]">
                      Need a true digital partner?
                    </h3>

                    <p className="mt-3 max-w-[820px] text-sm font-light leading-7 text-white/50">
                      For organizations that need more than a fixed monthly
                      management block, Partner gives you custom hours, scope,
                      strategy, development, optimization, and ongoing support
                      built around your operation.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="group flex h-[54px] items-center justify-center gap-3 rounded-lg border border-[#526cff]/65 px-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6f83ff] transition hover:border-[#526cff] hover:bg-[#526cff]/10 hover:text-white"
                >
                  Talk About A Partnership

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            GLOBAL STYLES / ANIMATION
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
            animation: build-arrow-pulse 2.2s ease-in-out infinite;
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
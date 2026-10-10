"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Blocks,
  Check,
  CircleX,
  FileText,
  Gauge,
  HardDrive,
  Headphones,
  Megaphone,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import Header from "@/components/navigation/navigation";

/* =========================================================
   TYPES
========================================================= */

export type ManageServiceIcon =
  | "security"
  | "updates"
  | "performance"
  | "backups"
  | "content"
  | "seo"
  | "analytics"
  | "integrations"
  | "support"
  | "strategy"
  | "development"
  | "paid-media";

export type ManageServiceCategory = {
  id: string;
  title: string;
  description: string;
  icon: ManageServiceIcon;
  enabled: boolean;
};

export type ManagePlanSummary = {
  slug: string;
  number: string;
  name: string;
  eyebrow: string;
  description: string;
  price: string;
};

export type ManagePlanPageProps = {
  plan: {
    slug: string;
    number: string;
    name: string;
    eyebrow: string;

    hero: {
      label: string;
      headline: string;
      highlightedText: string;
      description: string;
      image: string;
      imageAlt: string;

      stats: {
        value: string;
        label: string;
      }[];
    };

    servicesSection: {
      eyebrow: string;
      title: string;
      description: string;
    };

    services: ManageServiceCategory[];

    contact: {
      eyebrow: string;
      title: string;
      description: string;
      price: string;
      bullets: string[];
      formTitle?: string;
      submitLabel: string;
    };

    otherPlans: ManagePlanSummary[];
  };
};

/* =========================================================
   ICON MAP

   Icons are resolved here inside the Client Component.
   The data file contains strings only.
========================================================= */

const serviceIcons = {
  security: ShieldCheck,
  updates: RefreshCw,
  performance: Gauge,
  backups: HardDrive,
  content: FileText,
  seo: Search,
  analytics: BarChart3,
  integrations: Blocks,
  support: Headphones,
  strategy: Sparkles,
  development: Wrench,
  "paid-media": Megaphone,
} satisfies Record<
  ManageServiceIcon,
  React.ComponentType<{
    size?: number | string;
    strokeWidth?: number | string;
    className?: string;
  }>
>;

/* =========================================================
   TEMPLATE
========================================================= */

export default function ManagePlanPage({
  plan,
}: ManagePlanPageProps) {
  function scrollToContact() {
    document
      .getElementById("manage-contact")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <main className="min-h-screen bg-[#020a13] text-white">
      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <div className="absolute inset-x-0 top-0 z-50">
        <Header />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[760px] overflow-hidden border-b border-white/[0.07] bg-[#020a13] pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-12%] top-[10%] h-[600px] w-[700px] rounded-full bg-[#173cff]/[0.07] blur-[190px]" />

          <div className="absolute right-[-5%] top-[5%] h-[650px] w-[750px] rounded-full bg-[#087cff]/[0.08] blur-[190px]" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#020a13] via-[#020a13]/90 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[620px] max-w-[1600px] items-center gap-16 px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-14">
          {/* LEFT */}

          <div className="relative z-20 max-w-[680px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#526cff]">
              {plan.hero.label}
            </p>

            <h1 className="mt-6 text-[52px] font-light leading-[1.02] tracking-[-0.05em] sm:text-[64px] lg:text-[72px]">
              {plan.hero.headline}
              <br />

              <span className="text-[#526cff]">
                {plan.hero.highlightedText}
              </span>
            </h1>

            <p className="mt-7 max-w-[610px] text-base font-light leading-8 text-white/55 lg:text-lg">
              {plan.hero.description}
            </p>

            {/* STATS */}

            <div className="mt-10 grid max-w-[650px] grid-cols-3">
              {plan.hero.stats.map((stat, index) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className={`pr-7 ${
                    index > 0
                      ? "border-l border-[#526cff]/40 pl-7"
                      : ""
                  }`}
                >
                  <div className="text-[34px] font-light tracking-[-0.04em] text-[#2785ff]">
                    {stat.value}
                  </div>

                  <div className="mt-2 max-w-[150px] text-[9px] font-semibold uppercase leading-4 tracking-[0.2em] text-white/65">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="group mt-10 inline-flex h-[54px] items-center justify-center gap-3 rounded-md bg-[#3048ff] px-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#4058ff]"
            >
              Get Started

              <ArrowDown
                size={14}
                className="transition-transform group-hover:translate-y-1"
              />
            </button>
          </div>

          {/* RIGHT — COMPUTER / DASHBOARD GRAPHIC */}

          <div className="relative hidden min-h-[560px] lg:block">
            <img
              src={plan.hero.image}
              alt={plan.hero.imageAlt}
              className="absolute bottom-0 right-[-8%] w-[112%] max-w-none object-contain"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE CATEGORIES
      ========================================================= */}

      <section className="relative border-b border-white/[0.07] bg-[#020a13] py-24 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-8 lg:px-14">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#526cff]">
              {plan.servicesSection.eyebrow}
            </p>

            <h2 className="mt-4 text-[42px] font-light leading-[1.05] tracking-[-0.045em] sm:text-[52px]">
              {plan.servicesSection.title}
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-base font-light leading-7 text-white/45">
              {plan.servicesSection.description}
            </p>
          </div>

          {/* 4-COLUMN GRID */}

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plan.services.map((service) => {
              const Icon = serviceIcons[service.icon];

              return (
                <article
                  key={service.id}
                  className={`relative min-h-[205px] rounded-xl border p-6 transition ${
                    service.enabled
                      ? "border-[#1676d9]/50 bg-[#041422]"
                      : "border-white/[0.05] bg-[#050b12]/65 opacity-45"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                        service.enabled
                          ? "border-[#1676d9]/30 bg-[#062044] text-[#2785ff]"
                          : "border-white/[0.08] bg-white/[0.025] text-white/35"
                      }`}
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.5}
                      />
                    </div>

                    {service.enabled ? (
                      <div className="flex items-center gap-1.5 rounded-full bg-[#073e35] px-3 py-1.5 text-[9px] font-medium text-[#42d8a0]">
                        <Check size={11} />
                        Included
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1.5 text-[9px] font-medium text-white/40">
                        <CircleX size={11} />
                        Not Included
                      </div>
                    )}
                  </div>

                  <h3 className="mt-6 text-[19px] font-medium text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-[280px] text-[13px] font-light leading-6 text-white/48">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section
        id="manage-contact"
        className="relative scroll-mt-24 border-b border-white/[0.07] bg-[#06182b] py-24"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-[15%] top-1/2 h-[600px] w-[700px] -translate-y-1/2 rounded-full bg-[#164dff]/[0.06] blur-[190px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1500px] gap-16 px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-14">
          {/* LEFT */}

          <div className="max-w-[560px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#526cff]">
              {plan.contact.eyebrow}
            </p>

            <h2 className="mt-4 text-[44px] font-light leading-[1.05] tracking-[-0.045em] lg:text-[52px]">
              {plan.contact.title}
            </h2>

            <p className="mt-5 text-base font-light leading-7 text-white/50">
              {plan.contact.description}
            </p>

            {/* PRICING */}

            <div className="mt-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#526cff]">
                {plan.name}
              </p>

              <div className="mt-2 text-[42px] font-light tracking-[-0.04em]">
                {plan.contact.price}
              </div>
            </div>

            {/* BULLETS */}

            <div className="mt-8 space-y-4">
              {plan.contact.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-center gap-3 text-sm text-white/65"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1676ff] text-white">
                    <Check size={13} />
                  </div>

                  {bullet}
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}

          <form
            onSubmit={(event) => event.preventDefault()}
            className="rounded-xl border border-[#1676d9]/50 bg-[#041422] p-7 lg:p-8"
          >
            {plan.contact.formTitle && (
              <h3 className="mb-6 text-[24px] font-light">
                {plan.contact.formTitle}
              </h3>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[10px] font-medium text-white/75">
                  Full Name
                </span>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="h-12 w-full rounded-md border border-white/[0.06] bg-[#020c16] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#526cff]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] font-medium text-white/75">
                  Email
                </span>

                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="h-12 w-full rounded-md border border-white/[0.06] bg-[#020c16] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#526cff]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] font-medium text-white/75">
                  Phone
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="(916) 555-5555"
                  className="h-12 w-full rounded-md border border-white/[0.06] bg-[#020c16] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#526cff]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] font-medium text-white/75">
                  Company
                </span>

                <input
                  type="text"
                  name="company"
                  placeholder="Business name"
                  className="h-12 w-full rounded-md border border-white/[0.06] bg-[#020c16] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#526cff]"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-[10px] font-medium text-white/75">
                What are your goals for your website?
              </span>

              <textarea
                name="goals"
                rows={4}
                placeholder="More traffic, higher conversions, ongoing support..."
                className="w-full resize-none rounded-md border border-white/[0.06] bg-[#020c16] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#526cff]"
              />
            </label>

            <button
              type="submit"
              className="group mt-5 flex h-[54px] w-full items-center justify-center gap-3 rounded-md bg-[#3048ff] text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#4058ff]"
            >
              {plan.contact.submitLabel}

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <p className="mt-4 text-center text-[11px] text-white/35">
              No obligation. Just a conversation about your goals.
            </p>
          </form>
        </div>
      </section>

      {/* =========================================================
          OTHER PLANS
      ========================================================= */}

      <section className="border-b border-white/[0.07] bg-[#020a13] py-24">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#526cff]">
              OTHER MANAGE PLANS
            </p>

            <h2 className="mt-4 text-[38px] font-light tracking-[-0.04em]">
              Explore our other manage plans.
            </h2>

            <p className="mt-4 text-sm font-light text-white/40">
              Each plan is designed to meet you where you are — and help
              you go further.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plan.otherPlans.map((otherPlan) => (
              <article
                key={otherPlan.slug}
                className="flex min-h-[300px] flex-col rounded-xl border border-[#1676d9]/40 bg-[#04111e] p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[20px] font-light text-[#2785ff]">
                    {otherPlan.number}
                  </span>

                  <div className="h-px w-8 bg-[#2785ff]" />
                </div>

                <h3 className="mt-6 text-[28px] font-light tracking-[-0.035em]">
                  {otherPlan.name}
                </h3>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#526cff]">
                  {otherPlan.eyebrow}
                </p>

                <p className="mt-5 text-sm font-light leading-6 text-white/45">
                  {otherPlan.description}
                </p>

                <div className="mt-auto pt-7">
                  <div className="mb-5 text-[28px] font-light">
                    {otherPlan.price}
                  </div>

                  <Link
                    href={`/manage/${otherPlan.slug}`}
                    className="group flex h-11 items-center justify-center gap-2 rounded-md border border-[#526cff]/70 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#6f83ff] transition hover:bg-[#526cff] hover:text-white"
                  >
                    View {otherPlan.name}

                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
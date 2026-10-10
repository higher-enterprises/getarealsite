"use client";

import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  Compass,
  Globe2,
  Layers3,
  MapPin,
  Palette,
  Search,
  ShoppingCart,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon:
    | "strategy"
    | "design"
    | "development"
    | "ecommerce"
    | "seo"
    | "integrations";
};

type Impact = {
  value: string;
  label: string;
  icon: "growth" | "cart" | "users" | "time";
};

type ProjectCaseStudyProps = {
  title: string;
  eyebrow?: string;

  industry: string;
  location: string;
  launchYear: string;

  summary: string;

  backgroundImage: string;
  ownerImage: string;

  desktopMockup: string;
  mobileMockup: string;

  overview?: string[];

  challenges?: string[];
  solutions?: string[];

  showcaseImages?: string[];

  services?: Service[];

  impacts?: Impact[];

  available?: boolean;

  startingPrice?: string;
  availableFor?: string;

  detailsHref?: string;
  purchaseHref?: string;
};

const serviceIcons = {
  strategy: Target,
  design: Palette,
  development: Code2,
  ecommerce: ShoppingCart,
  seo: Search,
  integrations: Layers3,
};

const impactIcons = {
  growth: ArrowRight,
  cart: ShoppingCart,
  users: Users,
  time: Clock3,
};

export default function ProjectCaseStudy({
  title,
  eyebrow = "Website Development",
  industry,
  location,
  launchYear,
  summary,
  backgroundImage,
  ownerImage,
  desktopMockup,
  mobileMockup,
  overview = [],
  challenges = [],
  solutions = [],
  showcaseImages = [],
  services = [],
  impacts = [],
  available = false,
  startingPrice,
  availableFor,
  detailsHref = "#",
  purchaseHref = "#",
}: ProjectCaseStudyProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  /*
   * Defensive normalization.
   *
   * Even if a project page accidentally passes undefined or null,
   * these values will always resolve to arrays before .map() is used.
   */
  const safeOverview = Array.isArray(overview) ? overview : [];
  const safeChallenges = Array.isArray(challenges) ? challenges : [];
  const safeSolutions = Array.isArray(solutions) ? solutions : [];
  const safeShowcaseImages = Array.isArray(showcaseImages)
    ? showcaseImages
    : [];
  const safeServices = Array.isArray(services) ? services : [];
  const safeImpacts = Array.isArray(impacts) ? impacts : [];

  function scrollCarousel(direction: "left" | "right") {
    if (!carouselRef.current) return;

    const distance = carouselRef.current.clientWidth * 0.72;

    carouselRef.current.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-[#030711] text-white">
      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        />

        <div className="absolute inset-0 bg-[#030711]/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#030711]/45 via-[#030711]/20 to-[#030711]/80" />

        <div className="relative mx-auto max-w-[1800px] px-6 pb-12 pt-8 sm:px-8 lg:px-12">
          <a
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-[11px] text-white/65 transition hover:text-white"
          >
            <ArrowLeft size={13} />
            Back to all projects
          </a>

          <div className="grid items-end gap-8 xl:grid-cols-[180px_minmax(0,1.45fr)_minmax(320px,0.85fr)]">
            {/* OWNER */}

            <div className="relative hidden self-end xl:block">
              <img
                src={ownerImage}
                alt=""
                className="relative z-20 w-[210px] max-w-none translate-x-5 object-contain object-bottom"
              />
            </div>

            {/* MOCKUP */}

            <div className="relative flex min-h-[390px] items-end">
              <img
                src={desktopMockup}
                alt={`${title} desktop website`}
                className="relative z-10 w-[88%] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
              />

              <img
                src={mobileMockup}
                alt={`${title} mobile website`}
                className="absolute bottom-0 right-[2%] z-20 h-[68%] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* PROJECT INFO */}

            <div className="pb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7b6cff]">
                {eyebrow}
              </p>

              <h1 className="mt-4 text-[42px] font-light leading-[1.02] tracking-[-0.045em] md:text-[54px]">
                {title}
              </h1>

              <div className="mt-7 space-y-4 border-t border-white/10 pt-6">
                <MetaRow
                  icon={<Building2 size={17} />}
                  label="Industry"
                  value={industry}
                />

                <MetaRow
                  icon={<MapPin size={17} />}
                  label="Location"
                  value={location}
                />

                <MetaRow
                  icon={<CalendarDays size={17} />}
                  label="Launch Year"
                  value={launchYear}
                />
              </div>

              <p className="mt-7 max-w-[420px] border-t border-white/10 pt-6 text-[13px] leading-6 text-white/68">
                {summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          OVERVIEW / CHALLENGE / SOLUTION
      ============================================================ */}

      <section className="mx-auto max-w-[1800px] px-6 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:pr-10">
            <h2 className="text-[24px] font-light tracking-[-0.035em]">
              Project Overview
            </h2>

            <div className="mt-5 space-y-4">
              {safeOverview.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[12px] leading-6 text-white/58"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <InfoColumn
            title="The Challenge"
            icon={<Compass size={18} />}
            items={safeChallenges}
          />

          <InfoColumn
            title="The Solution"
            icon={<Sparkles size={18} />}
            items={safeSolutions}
          />
        </div>
      </section>

      {/* ============================================================
          WEBSITE SHOWCASE
      ============================================================ */}

      <section className="border-t border-white/[0.08] py-14">
        <div className="mx-auto max-w-[1800px] px-6 sm:px-8 lg:px-12">
          <h2 className="text-[24px] font-light tracking-[-0.035em]">
            Website Showcase
          </h2>
        </div>

        <div className="relative mt-8">
          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            className="absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#756aff]/60 bg-[#050a14]/90 text-[#8176ff] transition hover:bg-[#756aff]/15 lg:left-8"
            aria-label="Previous website images"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={carouselRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-[10vw] py-6"
          >
            {safeShowcaseImages.map((image, index) => {
              const rotation =
                index % 3 === 0
                  ? "-rotate-[2deg]"
                  : index % 3 === 1
                    ? "rotate-[1deg]"
                    : "rotate-[2deg]";

              return (
                <div
                  key={`${image}-${index}`}
                  className={`w-[72vw] shrink-0 snap-center overflow-hidden rounded-lg border border-white/10 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.4)] sm:w-[52vw] lg:w-[360px] xl:w-[420px] ${rotation}`}
                >
                  <img
                    src={image}
                    alt={`${title} website screen ${index + 1}`}
                    className="aspect-[4/3] w-full object-cover object-top"
                  />
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            className="absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#756aff]/60 bg-[#050a14]/90 text-[#8176ff] transition hover:bg-[#756aff]/15 lg:right-8"
            aria-label="Next website images"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* ============================================================
          SERVICES
      ============================================================ */}

      <section className="border-t border-white/[0.08]">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-6 py-14 sm:px-8 lg:px-12 xl:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="text-[24px] font-light tracking-[-0.035em]">
              Services
            </h2>

            <div className="mt-7 grid gap-x-10 gap-y-8 md:grid-cols-3">
              {safeServices.map((service) => {
                const Icon =
                  serviceIcons[service.icon] ?? Layers3;

                return (
                  <div
                    key={service.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#756aff]/55 text-[#7d70ff]">
                      <Icon size={16} strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[12px] font-medium text-white">
                        {service.title}
                      </h3>

                      <p className="mt-1.5 text-[10px] leading-5 text-white/48">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================
              IMPACT
          ======================================================== */}

          {safeImpacts.length > 0 && (
            <div className="border-t border-white/[0.08] pt-10 xl:border-l xl:border-t-0 xl:pl-12 xl:pt-0">
              <h2 className="text-[24px] font-light tracking-[-0.035em]">
                The Impact
              </h2>

              <div className="mt-7 grid grid-cols-2 gap-8 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4">
                {safeImpacts.map((impact) => {
                  const Icon =
                    impactIcons[impact.icon] ?? ArrowRight;

                  return (
                    <div key={`${impact.value}-${impact.label}`}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#756aff]/60 text-[#7d70ff]">
                        <Icon size={17} strokeWidth={1.5} />
                      </div>

                      <div className="mt-4 text-[28px] font-light">
                        {impact.value}
                      </div>

                      <p className="mt-1 text-[9px] leading-4 text-white/45">
                        {impact.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          AVAILABLE WEBSITE CTA
          ENTIRE SECTION IS HIDDEN WHEN available === false
      ============================================================ */}

      {available && (
        <section className="mx-auto max-w-[1800px] px-6 pb-14 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-xl border border-[#756aff]/60 bg-gradient-to-r from-[#070b18] via-[#080c21] to-[#11113c] px-8 py-9 lg:px-10">
            <div className="absolute -right-12 -top-20 h-[220px] w-[220px] rounded-full bg-[#654cff]/20 blur-[70px]" />

            <div className="absolute right-7 top-6 text-[#796aff]">
              <Sparkles size={48} strokeWidth={0.8} />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7b6cff]" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    Available Website
                  </span>
                </div>

                <h2 className="mt-5 text-[34px] font-light leading-[1.08] tracking-[-0.045em] md:text-[44px]">
                  Like What You See?
                  <br />
                  This Website Is{" "}
                  <span className="text-[#7668ff]">Available.</span>
                </h2>

                <p className="mt-4 max-w-[520px] text-[12px] leading-6 text-white/52">
                  This RealSite can be adapted for your business, brand, and
                  goals — and it&apos;s ready to launch faster.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
                  {startingPrice && (
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#756aff]/50 text-[#756aff]">
                        <Users size={14} />
                      </div>

                      <span className="text-[11px] text-white/80">
                        Starting from{" "}
                        <strong className="font-medium text-white">
                          {startingPrice}
                        </strong>
                      </span>
                    </div>
                  )}

                  {availableFor && (
                    <div className="flex max-w-[340px] items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#756aff]/50 text-[#756aff]">
                        <Globe2 size={14} />
                      </div>

                      <span className="text-[11px] leading-5 text-white/80">
                        Available for:{" "}
                        <strong className="font-medium text-white">
                          {availableFor}
                        </strong>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div className="space-y-3">
                  <a
                    href={detailsHref}
                    className="flex h-13 w-full items-center justify-center gap-3 rounded-md bg-[#6557ff] px-6 text-[10px] font-semibold uppercase tracking-[0.12em] transition hover:bg-[#7469ff]"
                  >
                    View Website Details
                    <ArrowRight size={13} />
                  </a>

                  <a
                    href={purchaseHref}
                    className="flex h-13 w-full items-center justify-center gap-3 rounded-md border border-[#756aff]/60 px-6 text-[10px] font-semibold uppercase tracking-[0.12em] transition hover:bg-[#756aff]/10"
                  >
                    Purchase This Website
                    <ArrowRight size={13} />
                  </a>
                </div>

                <div className="mt-5 flex items-center justify-center gap-2 text-[9px] text-white/40">
                  <Sparkles size={12} className="text-[#756aff]" />
                  Secure • Proven • Ready to Launch
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

/* ================================================================
   META ROW
================================================================ */

function MetaRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-[#8074ff]">
        {icon}
      </div>

      <div>
        <p className="text-[9px] font-medium text-white/45">{label}</p>
        <p className="mt-0.5 text-[11px] text-white/90">{value}</p>
      </div>
    </div>
  );
}

/* ================================================================
   INFORMATION COLUMN
================================================================ */

function InfoColumn({
  title,
  icon,
  items = [],
}: {
  title: string;
  icon: React.ReactNode;
  items?: string[];
}) {
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <div className="border-t border-white/[0.08] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
      <div className="flex items-center gap-3">
        <div className="text-[#786bff]">{icon}</div>

        <h3 className="text-[12px] font-semibold">{title}</h3>
      </div>

      <div className="mt-5 space-y-4">
        {safeItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <ArrowRight
              size={11}
              className="mt-[4px] shrink-0 text-[#756aff]"
            />

            <p className="text-[11px] leading-5 text-white/58">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
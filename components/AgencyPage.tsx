"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Crosshair,
  MapPin,
  Megaphone,
  PackageOpen,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

import AgencyTopHeader from "@/components/AgencyTopHeader";
import Navigation from "@/components/navigation/navigation";
import type { Agency } from "@/data/agencies";
import { getProjectsByAgency } from "@/data/projects";
import AgencyServices from "@/components/AgencyServices";
import AgencyContactForm from "@/components/AgencyContactForm";
import AgencyFooter from "@/components/footer/AgencyFooter";

const services = [
  {
    name: "PLAN",
    description: "Create the strategy before you build.",
    icon: BriefcaseBusiness,
  },
  {
    name: "BUILD",
    description: "Custom websites built around real goals.",
    icon: Code2,
  },
  {
    name: "PURCHASE",
    description: "Start with an already-built RealSite.",
    icon: ShoppingCart,
  },
  {
    name: "ACQUIRE",
    description: "Buy or sell digital business assets.",
    icon: Crosshair,
  },
  {
    name: "EXPAND",
    description: "Add commerce, systems and intelligence.",
    icon: PackageOpen,
  },
  {
    name: "MANAGE",
    description: "Ongoing assurance, updates and support.",
    icon: ShieldCheck,
  },
  {
    name: "REACH",
    description: "Attract more of the right local customers.",
    icon: Megaphone,
  },
];

const clients = [
  "LINCOLN COUNTRY FARMS",
  "TWELVE BRIDGES DENTAL",
  "LINCOLN FAMILY CHIROPRACTIC",
  "PLACER TITLE COMPANY",
  "ELEVATE FITNESS",
  "STYLE ON 5TH",
  "WEST PARK HIGH SCHOOL",
];

export default function AgencyPage({
  agency,
}: {
  agency: Agency;
}) {
  const location = `${agency.city}, ${agency.stateCode}`;

  const agencyProjects = getProjectsByAgency(agency.id);

  return (
    <>
      <AgencyTopHeader agency={agency} />

      <div className="relative">
        {/* =========================================================
            NAVIGATION
        ========================================================= */}

        <div className="absolute left-0 right-0 top-0 z-[900]">
          <Navigation />
        </div>

        <main className="overflow-hidden text-white">
          {/* =========================================================
              HERO
          ========================================================= */}

          <section className="relative min-h-[720px] border-b border-white/[0.07]">
            <div className="absolute inset-0">
              <img
                src="/images/locations/lincoln/hero.jpg"
                alt={`${agency.city} local business`}
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,#030711_0%,rgba(3,7,17,.96)_24%,rgba(3,7,17,.72)_47%,rgba(3,7,17,.18)_72%,rgba(3,7,17,.08)_100%)]" />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,17,.12)_0%,rgba(3,7,17,.08)_55%,#030711_100%)]" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1800px] items-center px-8 pb-32 pt-[190px] lg:px-16 xl:px-24">
              <div className="max-w-[650px]">
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#746cff]">
                  {location} Security Experts
                </p>

                <h1
                  className="
                    max-w-[720px]
                    text-[24px]
                    font-light
                    leading-[1.18]
                    tracking-[-0.045em]
                    sm:text-[24px]
                    md:text-[32px]
                    lg:text-[40px]
                    xl:text-[44px]
                  "
                >
                  Phouvong does{" "}
                  <span className="text-[#526cff]">
                    real
                  </span>{" "}
                  security.

                  <br />

                  So Phouvong got a{" "}
                  <span className="text-[#526cff]">
                    real
                  </span>{" "}
                  website.

                  <br />

                  Now Phouvong has{" "}
                  <span className="text-[#526cff]">
                    real
                  </span>{" "}
                  customers.
                </h1>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="flex items-center gap-5 rounded-md bg-[#6257ff] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.17em] transition hover:bg-[#7168ff]"
                  >
                    Get A Real Site Too
                    <ArrowRight size={15} />
                  </a>

                  {agency.email && (
                    <a
                      href={`mailto:${agency.email}`}
                      className="flex items-center gap-4 rounded-md border border-white/30 bg-black/20 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] backdrop-blur-md transition hover:border-white/60"
                    >
                      Schedule A Meeting
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
              ABOUT
          ========================================================= */}

          <section className="relative overflow-hidden bg-[#0a0a0a] py-32">
            {/* Background Decorative Lines */}

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-64 top-0 h-[900px] w-[900px] rotate-45 border border-white/5" />
              <div className="absolute left-1/3 top-0 h-[900px] w-[900px] -rotate-45 border border-white/5" />
              <div className="absolute right-[-250px] top-0 h-[900px] w-[900px] rotate-45 border border-white/5" />
            </div>

            {/* Background Video */}

            <div className="absolute inset-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              >
                <source
                  src="/videos/business.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-[#0a0a0a]/80" />

              {/* Fade */}

              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#0a0a0a]" />
            </div>

            {/* Main Content */}

            <div className="relative mx-auto flex w-full max-w-7xl justify-center px-8">
              <div className="w-full max-w-3xl text-left">
                {/* Eyebrow */}

                <span className="text-sm font-semibold uppercase tracking-[.35em] text-indigo-500">
                  About Realsite
                </span>

                {/* Heading */}

                <h2
                  className="
                    mt-6
                    font-light
                    leading-tight
                    text-white
                    sm:text-[24px]
                    md:text-[32px]
                    lg:text-[40px]
                    xl:text-[44px]
                  "
                >
                  We build digital places where people actually do business.
                </h2>

                {/* Description */}

                <p className="mt-10 max-w-2xl text-lg leading-9 text-white/60">
                  Realsite combines strategy, branding, web development,
                  ecommerce, community, automation and AI into one platform.
                  Every project is built to become a real destination—not just
                  another website.
                </p>

                {/* Buttons */}

                <div className="mt-14 flex flex-wrap gap-5">
                  <button
                    className="
                      flex
                      items-center
                      gap-3
                      border
                      border-white/20
                      px-8
                      py-4
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[.25em]
                      text-white
                      transition-all
                      duration-300
                      hover:border-indigo-500
                      hover:bg-indigo-500/10
                    "
                  >
                    <ArrowRight size={18} />
                    Learn More
                  </button>

                  <button
                    className="
                      flex
                      items-center
                      gap-3
                      border
                      border-white/20
                      px-8
                      py-4
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[.25em]
                      text-white
                      transition-all
                      duration-300
                      hover:border-indigo-500
                      hover:bg-indigo-500/10
                    "
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </section>

          <AgencyServices />

          {/* =========================================================
              RECENT PROJECTS
          ========================================================= */}

          <section className="bg-[#030711] px-8 py-24 lg:px-16">
            <div className="mx-auto max-w-[1500px]">
              <div className="mb-12 flex items-end justify-between gap-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7469ff]">
                    Recent Projects
                  </p>

                  <h2 className="mt-3 text-[42px] font-light leading-[1.05] tracking-[-0.04em]">
                    Work that drives{" "}
                    <span className="text-[#695cff]">
                      real results.
                    </span>
                  </h2>
                </div>

                <Link
                  href="/work"
                  className="hidden items-center gap-5 rounded-md border border-white/20 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] transition hover:border-white/50 md:flex"
                >
                  View All Projects
                  <ArrowRight size={14} />
                </Link>
              </div>

              {agencyProjects.length > 0 ? (
                <div className="grid auto-rows-[245px] grid-cols-1 gap-4 md:grid-cols-3">
                  {agencyProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      name={project.title}
                      type={project.eyebrow ?? "Website Project"}
                      image={project.thumbnail}
                      href={`/projects/${project.slug}`}
                      className={getProjectCardClass(index)}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-[260px] items-center justify-center rounded-lg border border-white/[0.08] bg-[#080d18]">
                  <p className="text-[12px] text-white/40">
                    Projects coming soon.
                  </p>
                </div>
              )}
            </div>
          </section>

          <AgencyContactForm agency={agency} />
        </main>
      </div>
    </>
  );
}

/* ============================================================
   PROJECT CARD LAYOUT
============================================================ */

function getProjectCardClass(index: number) {
  const classes = [
    "md:row-span-2",
    "",
    "md:row-span-2",
    "",
    "md:col-span-2",
    "",
  ];

  return classes[index % classes.length];
}

/* ============================================================
   STAT
============================================================ */

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-r border-white/[0.07] px-8 py-7">
      <div className="flex items-center gap-4">
        <Sparkles
          size={23}
          strokeWidth={1.4}
          className="text-[#6a5cff]"
        />

        <div>
          <small className="block text-[8px] uppercase tracking-[0.18em] text-white/35">
            {label}
          </small>

          <strong className="mt-1 block text-[20px] font-medium uppercase">
            {value}
          </strong>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({
  name,
  type,
  image,
  href,
  className,
}: {
  name: string;
  type: string;
  image: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`
        group
        relative
        overflow-hidden
        rounded-lg
        border
        border-white/[0.09]
        bg-[#080d18]
        ${className ?? ""}
      `}
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,17,.12)_20%,rgba(3,7,17,.92)_100%)]" />

      <div className="absolute inset-x-0 top-0 flex justify-between p-6">
        <div>
          <h3 className="text-[15px] font-semibold uppercase">
            {name}
          </h3>

          <p className="mt-1 text-[10px] text-white/50">
            {type}
          </p>
        </div>

        <ArrowRight
          size={16}
          className="text-white/50 transition group-hover:translate-x-1 group-hover:text-[#7166ff]"
        />
      </div>

      <div className="absolute bottom-5 left-6 opacity-0 transition group-hover:opacity-100">
        <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#766aff]">
          View Project →
        </span>
      </div>
    </Link>
  );
}
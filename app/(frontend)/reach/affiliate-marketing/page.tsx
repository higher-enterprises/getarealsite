"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Header from "@/components/navigation/navigation";

type Project = {
  slug: string;
  name: string;
  industry: string;
  location: string;
  industryGroup: string;
  platform: string;
  expertise: string[];
  tags: string[];
  image: string;
};

const projects: Project[] = [
  {
    slug: "courage-pools",
    name: "Courage Pools",
    industry: "Custom Pool Builder",
    location: "Newcastle, CA",
    industryGroup: "Home & Construction",
    platform: "Next.js",
    expertise: ["Lead Generation", "Local Search"],
    tags: ["Website", "Lead Generation", "Local Search"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "core-momentum-pilates",
    name: "Core Momentum Pilates",
    industry: "Wellness Studio",
    location: "Newcastle, CA",
    industryGroup: "Health & Wellness",
    platform: "Next.js",
    expertise: ["Booking", "Local Search"],
    tags: ["Website", "Booking", "Local Search"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "mb-concrete",
    name: "MB Concrete",
    industry: "Construction",
    location: "Sacramento, CA",
    industryGroup: "Home & Construction",
    platform: "Next.js",
    expertise: ["Lead Generation", "Brand"],
    tags: ["Website", "Lead Generation", "Brand"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "junk-punk",
    name: "Junk Punk",
    industry: "Home Services",
    location: "Northern CA",
    industryGroup: "Home Services",
    platform: "Next.js",
    expertise: ["Commerce", "Brand"],
    tags: ["Website", "Commerce", "Brand"],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "total-derma-care",
    name: "Total Derma Care",
    industry: "Medical Aesthetics",
    location: "Roseville, CA",
    industryGroup: "Health & Wellness",
    platform: "Next.js",
    expertise: ["Booking", "Growth"],
    tags: ["Website", "Booking", "Brand"],
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "imagine-builders",
    name: "Imagine Builders",
    industry: "Home Builder",
    location: "Northern CA",
    industryGroup: "Home & Construction",
    platform: "Next.js",
    expertise: ["Lead Generation", "Brand"],
    tags: ["Website", "Lead Generation", "Brand"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "portillos",
    name: "Portillo’s",
    industry: "Restaurants",
    location: "Multiple Locations",
    industryGroup: "Food & Beverage",
    platform: "Custom",
    expertise: ["Commerce", "Brand"],
    tags: ["Website", "Commerce", "Brand"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "mecum-auctions",
    name: "Mecum Auctions",
    industry: "Automotive",
    location: "Nationwide",
    industryGroup: "Automotive",
    platform: "Custom",
    expertise: ["Platform", "Brand"],
    tags: ["Website", "Auctions", "Brand"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "spraying-systems",
    name: "Spraying Systems",
    industry: "Industrial Services",
    location: "Multiple Locations",
    industryGroup: "Industrial",
    platform: "Next.js",
    expertise: ["Lead Generation", "Brand"],
    tags: ["Website", "Lead Generation", "Brand"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "homeserve-usa",
    name: "HomeServe USA",
    industry: "Professional Services",
    location: "Nationwide",
    industryGroup: "Professional Services",
    platform: "Next.js",
    expertise: ["Growth", "Brand"],
    tags: ["Website", "Brand", "Growth"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M5 12h13" />
      <path d="m13 7 5 5-5 5" />
    </svg>
  );
}

function Search() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export default function WorkPage() {
  const [industry, setIndustry] = useState("Industries");
  const [platform, setPlatform] = useState("Platforms");
  const [expertise, setExpertise] = useState("Expertise");
  const [query, setQuery] = useState("");

  const industries = Array.from(new Set(projects.map((p) => p.industryGroup))).sort();
  const platforms = Array.from(new Set(projects.map((p) => p.platform))).sort();
  const expertiseOptions = Array.from(new Set(projects.flatMap((p) => p.expertise))).sort();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects.filter((project) => {
      const industryMatch = industry === "Industries" || project.industryGroup === industry;
      const platformMatch = platform === "Platforms" || project.platform === platform;
      const expertiseMatch = expertise === "Expertise" || project.expertise.includes(expertise);
      const searchMatch =
        !q ||
        [
          project.name,
          project.industry,
          project.location,
          project.industryGroup,
          project.platform,
          ...project.expertise,
          ...project.tags,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q);

      return industryMatch && platformMatch && expertiseMatch && searchMatch;
    });
  }, [industry, platform, expertise, query]);

  const filtersActive =
    industry !== "Industries" ||
    platform !== "Platforms" ||
    expertise !== "Expertise" ||
    query.length > 0;

  function clearFilters() {
    setIndustry("Industries");
    setPlatform("Platforms");
    setExpertise("Expertise");
    setQuery("");
  }

  return (
    <main className="relative min-h-screen bg-[#020814] text-white">
      {/* Same global header used on the Realsite homepage */}
      <div className="absolute inset-x-0 top-0 z-[1000]">
        <Header />
      </div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020814_0%,rgba(2,8,20,.96)_35%,rgba(2,8,20,.52)_70%,rgba(2,8,20,.25)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,20,.1),#020814_100%)]" />

        <div className="relative mx-auto max-w-[1600px] px-6 pb-12 pt-20 sm:px-8 lg:px-16 lg:pb-16 lg:pt-32 xl:px-24">
          <div className="max-w-[760px]">
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[.34em] text-[#596cff]">
              Work
            </p>

            <h1 className="text-[clamp(3rem,5vw,6rem)] font-light leading-[.95] tracking-[-.055em]">
              Real businesses.
              <br />
              Real sites. <span className="text-[#596cff]">Real results.</span>
            </h1>

            <p className="mt-7 max-w-[680px] text-sm font-light leading-7 text-white/55">
              We build digital businesses, not just websites. Explore the sites,
              systems, commerce experiences, and growth platforms we&apos;ve put
              to work for real companies.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS — dropdowns, not category buttons */}
      <section className="border-b border-white/10 bg-[#020814]">
        <div className="mx-auto max-w-[1600px] px-6 py-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <span className="mr-2 shrink-0 text-[10px] font-semibold uppercase tracking-[.2em] text-white/55">
              Filter by
            </span>

            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="h-11 min-w-[190px] rounded-md border border-white/12 bg-white/[.045] px-4 text-[10px] uppercase tracking-[.14em] text-white/70 outline-none focus:border-[#596cff]"
            >
              <option value="Industries" className="bg-[#07101f]">Industries</option>
              {industries.map((item) => (
                <option key={item} value={item} className="bg-[#07101f]">{item}</option>
              ))}
            </select>

            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="h-11 min-w-[190px] rounded-md border border-white/12 bg-white/[.045] px-4 text-[10px] uppercase tracking-[.14em] text-white/70 outline-none focus:border-[#596cff]"
            >
              <option value="Platforms" className="bg-[#07101f]">Platforms</option>
              {platforms.map((item) => (
                <option key={item} value={item} className="bg-[#07101f]">{item}</option>
              ))}
            </select>

            <select
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
              className="h-11 min-w-[190px] rounded-md border border-white/12 bg-white/[.045] px-4 text-[10px] uppercase tracking-[.14em] text-white/70 outline-none focus:border-[#596cff]"
            >
              <option value="Expertise" className="bg-[#07101f]">Expertise</option>
              {expertiseOptions.map((item) => (
                <option key={item} value={item} className="bg-[#07101f]">{item}</option>
              ))}
            </select>

            <label className="flex h-11 w-full items-center gap-3 rounded-md border border-white/12 bg-white/[.045] px-4 text-white/45 focus-within:border-[#596cff] lg:ml-auto lg:max-w-[330px]">
              <Search />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search our work..."
                className="w-full bg-transparent text-xs text-white outline-none placeholder:text-white/30"
              />
            </label>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-[1600px] px-6 py-8 sm:px-8 lg:px-16 lg:py-10 xl:px-24">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[.24em] text-white/30">
            {results.length} {results.length === 1 ? "project" : "projects"}
          </span>

          {filtersActive && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-[9px] uppercase tracking-[.22em] text-[#6576ff] transition hover:text-white"
            >
              Clear filters
            </button>
          )}
        </div>

        {results.length ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {results.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group relative min-h-[420px] overflow-hidden rounded-xl border border-white/10 bg-[#07101f]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.035]"
                  style={{ backgroundImage: `url("${project.image}")` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,20,.08)_0%,rgba(2,8,20,.14)_42%,rgba(2,8,20,.88)_78%,#020814_100%)]" />

                <div className="relative flex min-h-[420px] flex-col justify-between p-5">
                  {/* Tags only — these are NOT filters */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-white/30 bg-[#020814]/60 px-2 py-1 text-[7px] font-semibold uppercase tracking-[.15em] text-white/85 backdrop-blur"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h2 className="text-[clamp(1.45rem,2vw,2rem)] font-light leading-none tracking-[-.035em]">
                          {project.name}
                        </h2>
                        <p className="mt-2 text-[11px] text-white/58">
                          {project.industry} · {project.location}
                        </p>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/55 transition group-hover:border-[#596cff] group-hover:bg-[#596cff]">
                        <Arrow />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[320px] items-center justify-center rounded-xl border border-white/10">
            <div className="text-center">
              <p className="text-2xl font-light">No projects match those filters.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 text-[9px] uppercase tracking-[.22em] text-[#6576ff]"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1600px] px-6 pb-16 pt-5 sm:px-8 lg:px-16 xl:px-24">
        <div className="relative overflow-hidden rounded-xl border border-white/10 px-8 py-12 lg:px-14">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#061020_0%,rgba(6,16,32,.95)_48%,rgba(6,16,32,.3)_100%)]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[.32em] text-[#596cff]">
                Your business could be next.
              </p>
              <h2 className="text-[clamp(2.2rem,4vw,4.4rem)] font-light leading-none tracking-[-.045em]">
                Let&apos;s put your site <span className="text-[#596cff]">to work.</span>
              </h2>
            </div>

            <Link
              href="/plan/site-evaluation"
              className="inline-flex shrink-0 items-center gap-4 self-start rounded-lg bg-[#5750f6] px-7 py-4 text-[10px] font-semibold uppercase tracking-[.22em] shadow-[0_12px_35px_rgba(87,80,246,.25)] transition hover:bg-[#665fff] lg:self-auto"
            >
              Get a Real Site <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

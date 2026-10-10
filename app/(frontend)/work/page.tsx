"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Header from "@/components/navigation/navigation";

import { workProjects } from "@/data/work-projects";

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


function FeaturedWorkTeaser() {
  const featuredProjects = workProjects.slice(0, 6);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!featuredProjects.length) return;

    const enterTimer = window.setTimeout(() => setVisible(true), 900);

    const rotateTimer = window.setInterval(() => {
      // Slide the website completely back out to the right.
      setVisible(false);

      window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % featuredProjects.length);
        setVisible(true);
      }, 3200);
    }, 14000);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearInterval(rotateTimer);
    };
  }, [featuredProjects.length]);

  if (!featuredProjects.length) return null;

  const project = featuredProjects[activeIndex];
  const screenshot = project.desktop || project.cardImage;

  return (
    <>
      {/*
        FULL-VIEWPORT PROJECT BACKGROUND.
        This fills the entire 100vh hero. It does NOT move with the website.
        The project image is strongest on the right and feathers progressively
        into the black hero toward the left.
      */}
      <div className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-hidden">
        <img
          key={`hero-background-${project.slug}`}
          src={project.cardImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overall dark treatment */}
        <div className="absolute inset-0 bg-[#030811]/30" />

        {/* Left side becomes the solid black/navy hero */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030811_0%,#030811_34%,rgba(3,8,17,.96)_43%,rgba(3,8,17,.78)_54%,rgba(3,8,17,.38)_68%,rgba(3,8,17,.12)_82%,rgba(3,8,17,.04)_100%)]" />

        {/* Keep top/nav readable and bottom transition clean */}
        <div className="absolute inset-x-0 top-0 h-[24%] bg-gradient-to-b from-[#030811]/80 via-[#030811]/32 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#030811]/70 via-[#030811]/22 to-transparent" />
      </div>

      {/*
        WEBSITE SAMPLE.
        This is the ONLY moving element.
        No opacity animation: it physically slides from beyond the right edge.
      */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <div
          className={`pointer-events-auto absolute right-0 top-1/2 w-[42vw] min-w-[520px] max-w-[820px]
            -translate-y-1/2
            transition-transform duration-[3200ms]
            ease-[cubic-bezier(.16,1,.3,1)]
            ${
              visible
                ? "translate-x-[18%]"
                : "translate-x-[115%]"
            }`}
        >
          <Link
            href={`/work/${project.slug}`}
            aria-label={`View ${project.name} project`}
            className="group block"
          >
            <div className="relative overflow-hidden border border-white/10 bg-[#07101d] shadow-[0_45px_130px_rgba(0,0,0,.58)]">
              <div className="absolute inset-x-0 top-0 z-30 flex h-7 items-center gap-1.5 border-b border-white/10 bg-[#0a111c]/95 px-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              </div>

              <div className="relative aspect-[16/10] overflow-hidden pt-7">
                <img
                  key={`website-${project.slug}`}
                  src={screenshot}
                  alt={`${project.name} website`}
                  className="h-full w-full object-cover object-top transition-transform duration-[1800ms] ease-out group-hover:scale-[1.01]"
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-[1fr_auto] items-end gap-6 pr-[18%]">
              <div>
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[.28em] text-[#526cff]">
                  Featured Work
                </p>
                <h3 className="text-2xl font-light tracking-[-.035em] text-white sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-1.5 text-[11px] text-white/45">
                  {project.industry} · {project.location}
                </p>
              </div>

              <span className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition duration-500 group-hover:border-[#526cff] group-hover:bg-[#526cff] group-hover:text-white">
                <Arrow />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default function WorkPage() {
  const [industry, setIndustry] = useState("Industries");
  const [platform, setPlatform] = useState("Platforms");
  const [expertise, setExpertise] = useState("Expertise");
  const [query, setQuery] = useState("");

  const industries = Array.from(new Set(workProjects.map((p) => p.industryGroup))).sort();
  const platforms = Array.from(new Set(workProjects.map((p) => p.platform))).sort();
  const expertiseOptions = Array.from(new Set(workProjects.flatMap((p) => p.expertise))).sort();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    return workProjects.filter((project) => {
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
    <>
      <main className="relative bg-[#030811] text-white">
        {/* =========================================================
            GLOBAL NAVIGATION
        ========================================================= */}
        <div className="absolute inset-x-0 top-0 z-[1000]">
          <Header />
        </div>
      {/* HERO */}
      <section className="relative min-h-[100dvh] overflow-hidden border-b border-white/10 bg-[#030811]">
          {/* Full-height rotating project background + sliding website */}
          <FeaturedWorkTeaser />

          {/* Persistent dark foundation behind the left-side copy */}
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(3,8,17,.32)_0%,rgba(3,8,17,.12)_48%,transparent_72%)]" />

          <div className="relative z-30 mx-auto flex min-h-[100dvh] max-w-[1800px] items-center px-7 pb-14 pt-32 sm:px-10 lg:px-14 lg:pb-10 lg:pt-28 xl:px-24">
            <div className="max-w-[900px] lg:w-[62%] lg:pr-16">
              <p className="mb-5 text-[9px] font-semibold uppercase tracking-[.32em] text-[#526cff]">
                Work
              </p>

              <h1 className="text-[clamp(3.4rem,5.5vw,6.8rem)] font-light leading-[.94] tracking-[-.055em]">
                Real businesses.
                <br />
                Real sites.{" "}
                <span className="text-[#526cff]">Real results.</span>
              </h1>

              <p className="mt-7 max-w-[650px] text-sm font-light leading-7 text-white/50 sm:text-[15px]">
                We build digital businesses, not just websites. Explore the sites,
                systems, commerce experiences, and growth platforms we&apos;ve put to
                work for real companies.
              </p>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="group mt-10 inline-flex items-center gap-5 border-b border-white/20 pb-3 text-[10px] font-semibold uppercase tracking-[.26em] text-white/65 transition hover:border-[#526cff] hover:text-white"
              >
                View Our Work
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition group-hover:border-[#526cff] group-hover:bg-[#526cff]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path d="M12 5v13" />
                    <path d="m7 13 5 5 5-5" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <button
            type="button"
            aria-label="Scroll to projects"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="absolute bottom-7 left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 transition hover:text-white/70 lg:flex"
          >
            <span className="text-[8px] font-semibold uppercase tracking-[.3em]">
              Explore
            </span>
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M12 4v15" />
              <path d="m7 14 5 5 5-5" />
            </svg>
          </button>
        </section>

      {/* FILTERS — dropdowns, not category buttons */}
      <section className="border-b border-white/10 bg-[#020814]" id="projects">
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
                  style={{ backgroundImage: `url("${project.cardImage}")` }}
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
    </>
  );
}

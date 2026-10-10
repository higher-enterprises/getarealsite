"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Header from "@/components/navigation/navigation";
import {
  getNextWorkProject,
  getProjectEyebrow,
  getProjectHeadline,
  getProjectHeroImage,
  getProjectIntro,
  getProjectServices,
  getWorkProject,
} from "@/data/work-projects";

function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M5 12h13" />
      <path d="m13 7 5 5-5 5" />
    </svg>
  );
}

export default function WorkDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const project = slug ? getWorkProject(slug) : undefined;

  if (!project) notFound();

  const nextProject = getNextWorkProject(project.slug);
  const heroImage = getProjectHeroImage(project);
  const eyebrow = getProjectEyebrow(project);
  const headline = getProjectHeadline(project);
  const intro = getProjectIntro(project);
  const services = getProjectServices(project);

  return (
    <>
      <main className="relative bg-[#030811] text-white">
        <div className="absolute inset-x-0 top-0 z-[1000]">
          <Header />
        </div>

        {/* HERO */}
        <section className="relative min-h-[100dvh] overflow-hidden border-b border-white/10 bg-[#030811]">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${heroImage}")` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#030811_0%,rgba(3,8,17,.96)_34%,rgba(3,8,17,.70)_62%,rgba(3,8,17,.30)_100%)]" />
            <div className="absolute inset-x-0 top-0 h-[190px] bg-gradient-to-b from-[#030811] via-[#030811]/65 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#030811] via-[#030811]/70 to-transparent" />
          </div>

          <div className="relative z-20 mx-auto flex min-h-[100dvh] max-w-[1800px] items-end px-7 pb-16 pt-36 sm:px-10 lg:px-14 lg:pb-20 xl:px-24">
            <div className="grid w-full gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
              <div className="max-w-[980px]">
                <Link
                  href="/work"
                  className="mb-10 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[.26em] text-white/45 transition hover:text-white"
                >
                  <span className="rotate-180">
                    <Arrow />
                  </span>
                  All Work
                </Link>

                {project.logo && (
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="mb-8 max-h-[90px] max-w-[280px] object-contain object-left"
                  />
                )}

                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[.30em] text-[#526cff]">
                  {eyebrow}
                </p>

                <h1 className="text-[clamp(3.25rem,6vw,7.2rem)] font-light leading-[.92] tracking-[-.055em]">
                  {headline}
                </h1>
              </div>

              <div className="border-l border-white/15 pl-6 lg:pb-2">
                <p className="text-[9px] font-semibold uppercase tracking-[.26em] text-white/30">
                  Client
                </p>
                <p className="mt-2 text-lg font-light">{project.name}</p>

                <div className="mt-6 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-[9px] uppercase tracking-[.22em] text-white/30">
                      Industry
                    </p>
                    <p className="mt-2 text-sm text-white/70">{project.industry}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[.22em] text-white/30">
                      Location
                    </p>
                    <p className="mt-2 text-sm text-white/70">{project.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT INTRO */}
        <section className="border-b border-white/10 bg-[#030811]">
          <div className="mx-auto grid max-w-[1600px] gap-12 px-7 py-24 sm:px-10 lg:grid-cols-[.7fr_1.3fr] lg:px-14 lg:py-32 xl:px-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.32em] text-[#526cff]">
                The Project
              </p>
            </div>

            <div>
              <p className="max-w-[980px] text-[clamp(1.8rem,3vw,3.4rem)] font-light leading-[1.15] tracking-[-.035em] text-white/90">
                {intro}
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/15 bg-white/[.025] px-3 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-white/55"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP SHOWCASE - only when a project actually has one */}
        {project.desktop && (
          <section className="relative overflow-hidden border-b border-white/10 bg-[#050b15] py-20 lg:py-28">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3048ff]/[.05] blur-[180px]" />

            <div className="relative z-10 mx-auto max-w-[1700px] px-7 sm:px-10 lg:px-14 xl:px-24">
              <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.32em] text-[#526cff]">
                    The Experience
                  </p>
                  <h2 className="mt-4 text-[clamp(2.5rem,5vw,5.5rem)] font-light leading-none tracking-[-.05em]">
                    Built to work everywhere.
                  </h2>
                </div>
              </div>

              <div className="overflow-hidden border border-white/10 bg-[#07101d] shadow-[0_35px_120px_rgba(0,0,0,.35)]">
                <img
                  src={project.desktop}
                  alt={`${project.name} desktop website`}
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </section>
        )}

        {/* CHALLENGE / SOLUTION - render only supplied content */}
        {(project.challenge || project.solution) && (
          <section className="border-b border-white/10 bg-[#030811]">
            <div className={`mx-auto grid max-w-[1600px] ${project.challenge && project.solution ? "lg:grid-cols-2" : ""}`}>
              {project.challenge && (
                <article className="border-b border-white/10 px-7 py-20 sm:px-10 lg:border-b-0 lg:border-r lg:px-14 lg:py-28 xl:pl-24 xl:pr-20">
                  <p className="text-[10px] font-semibold uppercase tracking-[.32em] text-[#526cff]">
                    01 · The Challenge
                  </p>
                  {project.challengeHeadline && (
                    <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.6rem)] font-light leading-[1.02] tracking-[-.045em]">
                      {project.challengeHeadline}
                    </h2>
                  )}
                  <p className="mt-8 max-w-[620px] text-base font-light leading-8 text-white/50">
                    {project.challenge}
                  </p>
                </article>
              )}

              {project.solution && (
                <article className="px-7 py-20 sm:px-10 lg:px-14 lg:py-28 xl:pl-20 xl:pr-24">
                  <p className="text-[10px] font-semibold uppercase tracking-[.32em] text-[#526cff]">
                    {project.challenge ? "02" : "01"} · The Solution
                  </p>
                  {project.solutionHeadline && (
                    <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.6rem)] font-light leading-[1.02] tracking-[-.045em]">
                      {project.solutionHeadline}
                    </h2>
                  )}
                  <p className="mt-8 max-w-[620px] text-base font-light leading-8 text-white/50">
                    {project.solution}
                  </p>
                </article>
              )}
            </div>
          </section>
        )}

        {/* OWNER / BRAND MOMENT */}
        {project.owner && (
          <section className="relative overflow-hidden border-b border-white/10 bg-[#050b15]">
            <div className="mx-auto grid min-h-[720px] max-w-[1800px] lg:grid-cols-[.95fr_1.05fr]">
              <div className="relative min-h-[520px] overflow-hidden lg:min-h-[720px]">
                <img
                  src={project.owner}
                  alt={`${project.name} business owner`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050b15]/85" />
              </div>

              <div className="flex items-center px-7 py-20 sm:px-10 lg:px-16 xl:px-24">
                <div className="max-w-[650px]">
                  <p className="text-[10px] font-semibold uppercase tracking-[.32em] text-[#526cff]">
                    A Real Business
                  </p>
                  <h2 className="mt-5 text-[clamp(2.8rem,5vw,5.6rem)] font-light leading-[.98] tracking-[-.05em]">
                    The website should feel as real as the company behind it.
                  </h2>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* RESPONSIVE ASSETS - only when supplied */}
        {(project.tablet || project.mobile) && (
          <section className="relative overflow-hidden border-b border-white/10 bg-[#030811] py-24 lg:py-32">
            <div className="mx-auto max-w-[1600px] px-7 sm:px-10 lg:px-14 xl:px-24">
              <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.32em] text-[#526cff]">
                    Responsive By Design
                  </p>
                  <h2 className="mt-5 text-[clamp(2.5rem,4vw,4.8rem)] font-light leading-[1] tracking-[-.045em]">
                    One business.
                    <br />
                    Every screen.
                  </h2>
                </div>

                <div className={`grid items-end gap-5 sm:gap-8 ${project.tablet && project.mobile ? "grid-cols-[.72fr_.28fr]" : "grid-cols-1"}`}>
                  {project.tablet && (
                    <img
                      src={project.tablet}
                      alt={`${project.name} tablet website`}
                      className="h-auto w-full object-contain"
                    />
                  )}

                  {project.mobile && (
                    <img
                      src={project.mobile}
                      alt={`${project.name} mobile website`}
                      className="h-auto w-full object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SERVICES */}
        <section className="border-b border-white/10 bg-[#050b15] py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-7 sm:px-10 lg:px-14 xl:px-24">
            <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.32em] text-[#526cff]">
                  What We Did
                </p>
                <h2 className="mt-5 text-[clamp(2.5rem,4vw,4.8rem)] font-light leading-none tracking-[-.045em]">
                  Built for the business.
                </h2>
              </div>

              <div className="border-t border-white/15">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className="grid grid-cols-[60px_1fr] items-center border-b border-white/15 py-6"
                  >
                    <span className="text-[10px] tracking-[.2em] text-[#526cff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl font-light tracking-[-.02em] text-white/80 sm:text-2xl">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEXT PROJECT */}
        <section className="relative overflow-hidden bg-[#030811]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url("${heroImage}")` }}
          />
          <div className="absolute inset-0 bg-[#030811]/80" />

          <div className="relative z-10 mx-auto max-w-[1600px] px-7 py-24 sm:px-10 lg:px-14 lg:py-32 xl:px-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.32em] text-[#526cff]">
                  Keep Exploring
                </p>
                <h2 className="mt-5 text-[clamp(3rem,6vw,7rem)] font-light leading-[.92] tracking-[-.055em]">
                  More real work.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="inline-flex h-[56px] items-center justify-center border border-white/20 px-7 text-[10px] font-semibold uppercase tracking-[.24em] transition hover:border-white/50 hover:bg-white/[.04]"
                >
                  View All Work
                </Link>

                {nextProject && (
                  <Link
                    href={`/work/${nextProject.slug}`}
                    className="inline-flex h-[56px] items-center justify-center gap-4 bg-[#3048ff] px-7 text-[10px] font-semibold uppercase tracking-[.24em] transition hover:bg-[#4057ff]"
                  >
                    Next: {nextProject.name}
                    <Arrow />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

"use client";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Header from "@/components/navigation/navigation";
import homeHeroData, { type HeroProject } from "../../data/home-hero-data";
import domainsitesHeroData from "../../data/domainsites-hero-data";
import startersitesHeroData from "../../data/startersites-hero-data";
import websitesHeroData from "../../data/websites-hero-data";
import realsitesHeroData from "../../data/realsites-hero-data";
import venturesitesHeroData from "../../data/venturesites-hero-data";
import Link from "next/link";
export type HeroFeed =
  | "home"
  | "domainsites"
  | "startersites"
  | "websites"
  | "realsites"
  | "venturesites";
const heroFeeds: Record<HeroFeed, HeroProject[]> = {
  home: homeHeroData,
  domainsites: domainsitesHeroData,
  startersites: startersitesHeroData,
  websites: websitesHeroData,
  realsites: realsitesHeroData,
  venturesites: venturesitesHeroData,
};
export type HeroProps = {
  heroFeed?: HeroFeed;
  title?: ReactNode;
  description?: ReactNode;
  primaryCTA?: { label: string; href: string; enabled?: boolean } | null;
  secondaryCTA?: { label: string; href: string; enabled?: boolean } | null;
};
export default function Hero({
  heroFeed = "home",
  title,
  description,
  primaryCTA = { label: "About Us", href: "/about" },
  secondaryCTA = { label: "View Our Work", href: "/work" },
}: HeroProps) {
  const heroProjects = heroFeeds[heroFeed];
  const hasHeroProjects = heroProjects.length > 0;
  const showScroller = heroProjects.length > 1;
  const enableScrollerMotion = heroProjects.length > 7;
  const trackRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const tracerRef = useRef<HTMLSpanElement | null>(null);
  const offsetRef = useRef(0);
  const pauseUntilRef = useRef(0);
  const pulseTimeoutRef = useRef<number | null>(null);
  const hasMountedRef = useRef(false);
  const transitionStartedAtRef = useRef(Date.now());
  const currentTracerXRef = useRef(0);
  const tracerSegmentStartXRef = useRef(0);
  const tracerTargetXRef = useRef<number | null>(null);
  const tracerTargetIndexRef = useRef<number | null>(null);
  const [selectedId, setSelectedId] = useState(heroProjects[0]?.id ?? "");
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isPulseColorActive, setIsPulseColorActive] = useState(false);
  const [heartbeatKey, setHeartbeatKey] = useState(0);
  useEffect(() => {
    setSelectedId(heroProjects[0]?.id ?? "");
    offsetRef.current = 0;
    pauseUntilRef.current = 0;
    transitionStartedAtRef.current = Date.now();
    currentTracerXRef.current = 0;
    tracerSegmentStartXRef.current = 0;
    tracerTargetXRef.current = null;
    tracerTargetIndexRef.current = null;
    if (trackRef.current) {
      trackRef.current.style.transform = "translate3d(0, 0, 0)";
    }
  }, [heroFeed]);
  const selectedProject =
    heroProjects.find((project) => project.id === selectedId) ??
    heroProjects[0];
  const showHeroColor = isProjectHovered || isPulseColorActive;
  const sliderItems = useMemo(
    () =>
      enableScrollerMotion
        ? [...heroProjects, ...heroProjects, ...heroProjects]
        : heroProjects,
    [heroProjects, enableScrollerMotion],
  );
  function selectProject(id: string) {
    pauseUntilRef.current = Date.now() + 2500;
    transitionStartedAtRef.current = Date.now();
    tracerSegmentStartXRef.current = currentTracerXRef.current;
    tracerTargetXRef.current = null;
    tracerTargetIndexRef.current = null;
    setSelectedId(id);
  }
  function getProjectTargetAhead(
    projectId: string,
    currentX: number,
  ): { x: number; index: number } | null {
    const marquee = marqueeRef.current;
    const track = trackRef.current;
    if (!marquee || !track) {
      return null;
    }
    const marqueeRect = marquee.getBoundingClientRect();
    const candidates = Array.from(
      track.querySelectorAll<HTMLElement>(
        `[data-project-id="${projectId}"]`,
      ),
    )
      .map((candidate) => {
        const rect = candidate.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - marqueeRect.left,
          index: Number(candidate.dataset.sliderIndex ?? -1),
        };
      })
      .filter((candidate) => candidate.index >= 0)
      .sort((a, b) => a.x - b.x);
    if (candidates.length === 0) {
      return null;
    }
    // Continue forward from wherever the tracer currently is.
    const ahead = candidates.find(
      (candidate) => candidate.x > currentX + 24,
    );
    if (ahead) {
      return ahead;
    }
    // Only wrap after the tracer has genuinely reached the far side.
    // This prevents the "restart from the beginning after every pulse" effect.
    const firstVisible = candidates.find(
      (candidate) => candidate.x > -80,
    );
    if (!firstVisible) {
      return null;
    }
    currentTracerXRef.current = -110;
    tracerSegmentStartXRef.current = -110;
    return firstVisible;
  }
  /*
   * Fire the heartbeat and briefly bring the hero into color
   * whenever the featured client changes. Hovering "View Project"
   * continues to hold the hero in color independently.
   */
  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }
    setHeartbeatKey((current) => current + 1);
    setIsPulseColorActive(true);
    if (pulseTimeoutRef.current !== null) {
      window.clearTimeout(pulseTimeoutRef.current);
    }
    pulseTimeoutRef.current = window.setTimeout(() => {
      setIsPulseColorActive(false);
      pulseTimeoutRef.current = null;
    }, 650);
    return () => {
      if (pulseTimeoutRef.current !== null) {
        window.clearTimeout(pulseTimeoutRef.current);
        pulseTimeoutRef.current = null;
      }
    };
  }, [selectedId]);
  /*
   * Slow continuous marquee.
   */
  useEffect(() => {
    let frame = 0;
    function animate() {
      const track = trackRef.current;
      if (
        enableScrollerMotion &&
        track &&
        Date.now() > pauseUntilRef.current
      ) {
        offsetRef.current += 0.35;
        const resetPoint = track.scrollWidth / 3;
        if (offsetRef.current >= resetPoint) {
          offsetRef.current = 0;
        }
        track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
      }
      frame = window.requestAnimationFrame(animate);
    }
    frame = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [enableScrollerMotion]);
  /*
   * Move the blue tracer continuously from one client logo to the next.
   * After a pulse it continues from that exact position instead of
   * jumping back to the beginning.
   */
  useEffect(() => {
    if (!showScroller) {
      return;
    }
    let frame = 0;
    tracerSegmentStartXRef.current = currentTracerXRef.current;
    tracerTargetXRef.current = null;
    tracerTargetIndexRef.current = null;
    function animateTracer() {
      const marquee = marqueeRef.current;
      const tracer = tracerRef.current;
      if (!marquee || !tracer) {
        frame = window.requestAnimationFrame(animateTracer);
        return;
      }
      const now = Date.now();
      const isPaused = now < pauseUntilRef.current;
      const currentIndex = heroProjects.findIndex(
        (project) => project.id === selectedId,
      );
      const nextIndex =
        currentIndex === heroProjects.length - 1
          ? 0
          : currentIndex + 1;
      const nextProjectId = heroProjects[nextIndex].id;
      const liveTarget = getProjectTargetAhead(
        nextProjectId,
        tracerSegmentStartXRef.current,
      );
      if (liveTarget) {
        tracerTargetXRef.current = liveTarget.x;
        tracerTargetIndexRef.current = liveTarget.index;
      }
      if (
        !isPaused &&
        tracerTargetXRef.current !== null
      ) {
        const elapsed = now - transitionStartedAtRef.current;
        const progress = Math.min(
          Math.max(elapsed / 6000, 0),
          1,
        );
        const targetX = tracerTargetXRef.current;
        currentTracerXRef.current =
          tracerSegmentStartXRef.current +
          (targetX - tracerSegmentStartXRef.current) * progress;
      }
      tracer.style.transform =
        `translate3d(${currentTracerXRef.current}px, 0, 0)`;
      frame = window.requestAnimationFrame(animateTracer);
    }
    frame = window.requestAnimationFrame(animateTracer);
    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [selectedId, heroFeed, showScroller]);
  /*
   * Change active project every 6 seconds.
   */
  useEffect(() => {
    if (heroProjects.length < 2) {
      return;
    }
    const timer = window.setInterval(() => {
      if (Date.now() < pauseUntilRef.current) {
        return;
      }
      if (tracerTargetXRef.current !== null) {
        currentTracerXRef.current = tracerTargetXRef.current;
      }
      tracerSegmentStartXRef.current = currentTracerXRef.current;
      transitionStartedAtRef.current = Date.now();
      setSelectedId((currentId) => {
        const currentIndex = heroProjects.findIndex(
          (project) => project.id === currentId,
        );
        const nextIndex =
          currentIndex === heroProjects.length - 1
            ? 0
            : currentIndex + 1;
        return heroProjects[nextIndex].id;
      });
    }, 6000);
    return () => {
      window.clearInterval(timer);
    };
  }, [heroFeed, heroProjects]);
  if (!hasHeroProjects || !selectedProject) {
    return null;
  }
  return (
    <main className="relative h-[100dvh] min-h-[700px] overflow-hidden bg-[#030811] text-white">
        {/* =========================================================
            GLOBAL HERO NAVIGATION
        ========================================================= */}
        <div className="absolute inset-x-0 top-0 z-[1000]">
          <Header />
        </div>
        {/* =========================================================
            BACKGROUND
        ========================================================= */}
        <div className="absolute inset-0">
          <img
            key={selectedProject.id}
            src={selectedProject.background}
            alt=""
            className={`
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              transition-all
              duration-1000
              ${showHeroColor ? "grayscale-0" : "grayscale"}
            `}
          />
          {/* Overall darkness */}
          <div className="absolute inset-0 bg-[#030811]/30" />
          {/* Strong left fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030811] via-[#030811]/80 via-[34%] to-[#030811]/0" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#030811] via-[#030811]/85 to-transparent" />
        </div>
        {/* =========================================================
            HERO CONTENT
        ========================================================= */}
        <section className="absolute inset-0">
          <div className="relative mx-auto h-full max-w-[1800px] px-7 sm:px-10 lg:px-14">
            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <div className="pointer-events-none absolute left-7 right-7 top-[88px] bottom-[120px] z-30 flex items-center sm:left-10 sm:right-10 lg:left-14 lg:right-auto lg:w-[47%]">
              <div className="w-full max-w-[720px] pt-4">
                {/* MAIN HEADLINE */}
                <h1
                  className="max-w-[720px] text-[34px] font-light leading-[1.18] tracking-[-0.045em] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[56px]"
                >
                  {title ?? <>
                    If you have a{" "}<span className="text-[#526cff]">real business.</span>{" "}<br />
                    And you want{" "}<span className="text-[#526cff]">real customers.</span>{" "}<br />
                    Then you need to get a{" "}<span className="text-[#526cff]">real site.</span>{" "}
                  </>}
                </h1>
                {/* SUPPORTING COPY */}
                <div className="mt-6 space-y-1">
                  <p className="max-w-[620px] text-lg font-light leading-[1.5] tracking-wide text-white/65 sm:text-xl">
          {description ?? <>Realsite<sup>®</sup> puts your website to work where every visit and every click moves people closer to a decision, a transaction, and your brand.</>}</p>
                </div>
                {/* HERO CTA BUTTONS */}
                {((primaryCTA && primaryCTA.enabled !== false) || (secondaryCTA && secondaryCTA.enabled !== false)) && (
                  <div className="pointer-events-auto mt-7 flex flex-wrap gap-3">
                    {primaryCTA && primaryCTA.enabled !== false && (
                      <a href={primaryCTA.href} className="inline-flex items-center justify-center rounded-md border border-white/25 bg-black/70 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#526cff] hover:bg-[#526cff] hover:text-white hover:shadow-[0_10px_30px_rgba(82,108,255,.28)]">{primaryCTA.label}</a>
                    )}
                    {secondaryCTA && secondaryCTA.enabled !== false && (
                      <a href={secondaryCTA.href} className="inline-flex items-center justify-center rounded-md border border-white/25 bg-black/70 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#526cff] hover:bg-[#526cff] hover:text-white hover:shadow-[0_10px_30px_rgba(82,108,255,.28)]">{secondaryCTA.label}</a>
                    )}
                  </div>
                )}
              </div>
            </div>
            {/* =====================================================
                RIGHT PROJECT VISUAL
            ===================================================== */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-[120px] hidden w-[58%] lg:block">
              {/* =================================================
                  DESKTOP WEBSITE — LARGE SCREEN BEHIND OWNER
                  One desktop presentation only. No phone/tablet previews.
              ================================================= */}
              {selectedProject.desktopPreview && (
                <div className="pointer-events-none absolute left-[25%] top-1/2 z-[5] w-[43%] -translate-y-1/2 [perspective:1500px]">
                  <div className={`relative overflow-hidden rounded-[9px] border border-white/15 bg-[#07101d] shadow-[0_30px_80px_rgba(0,0,0,.55)] origin-right transition-all duration-700 ${showHeroColor ? "grayscale-0" : "grayscale"}`} style={{ transform: "perspective(1100px) rotateY(20deg) rotateX(1deg) rotateZ(-1deg)", transformOrigin: "right center", transformStyle: "preserve-3d" }}>
                    <div className="flex h-7 items-center gap-1.5 border-b border-white/10 bg-[#09111d]/95 px-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                      <div className="ml-3 h-3 w-[45%] rounded-full border border-white/[.06] bg-white/[.035]" />
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img key={`${selectedProject.id}-desktop-hero`} src={selectedProject.desktopPreview} alt={`${selectedProject.name} desktop website`} className="h-full w-full object-cover object-top" />
                      <div className="absolute inset-0 bg-[#030811]/10" />
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -left-12 -right-10 h-20 bg-[#030811]/60 blur-2xl" />
                </div>
              )}
              {/* =================================================
                  BUSINESS OWNER
              ================================================= */}
              {selectedProject.ownerImage && (
                <img
                  key={`${selectedProject.id}-owner`}
                  src={selectedProject.ownerImage}
                  alt={`${selectedProject.name} owner`}
                  className={`
                    absolute
                    top-[1%]
                    bottom-0
                    right-[12%]
                    z-20
                    h-[96%]
                    w-[56%]
                    max-w-none
                    object-contain
                    object-right-bottom
                    drop-shadow-[0_25px_60px_rgba(0,0,0,.45)]
                    transition-all
                    duration-700
                    ${
                      showHeroColor
                        ? "grayscale-0"
                        : "grayscale"
                    }
                  `}
                />
              )}
              {/* =================================================
                  PROJECT INFORMATION
              ================================================= */}
              <div
                className={`
                  absolute
                  bottom-[8%]
                  left-[18%]
                  z-40
                  pointer-events-auto
                `}
              >
                <h2 className="text-lg font-medium tracking-[-0.02em]">
                  {selectedProject.name}
                </h2>
                <div className="mt-1 flex items-center gap-2 text-xs text-white/65">
                  <span>
                    {selectedProject.category}
                  </span>
                  <span className="text-indigo-400">
                    •
                  </span>
                  <span>
                    {selectedProject.location}
                  </span>
                </div>
                <Link
                  href={selectedProject.projectLink || "#"}
                  aria-disabled={!selectedProject.projectLink}
                  tabIndex={selectedProject.projectLink ? 0 : -1}
                  onMouseEnter={() =>
                    setIsProjectHovered(true)
                  }
                  onMouseLeave={() =>
                    setIsProjectHovered(false)
                  }
                  className={`
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/30
                    bg-black/10
                    px-4
                    py-2
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-white/80
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:border-[#526cff]
                    hover:bg-[#526cff]
                    hover:text-white
                    hover:shadow-[0_8px_30px_rgba(82,108,255,.28)]
                  `}
                >
                  View Project
                  <span className="text-xs">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* =========================================================
            LOGO MARQUEE
        ========================================================= */}
        {showScroller && (
        <section className="absolute inset-x-0 bottom-0 z-[60] h-[120px] bg-[#030811]/90 backdrop-blur-xl">
          <div ref={marqueeRef} className="relative h-full overflow-visible">
            {/* =====================================================
                STATIC BLUE HEARTBEAT BASELINE
            ===================================================== */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-px bg-white/10" />
            {/* SMALL BLUE TRACER */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[55] h-[3px] overflow-hidden">
              <span
                ref={tracerRef}
                className="realsite-heartbeat-tracer absolute bottom-0 left-0 h-[2px] w-[110px] -translate-x-full"
              />
            </div>
            {/* LEFT FADE */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-32 bg-gradient-to-r from-[#030811] to-transparent" />
            {/* RIGHT FADE */}
            <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-32 bg-gradient-to-l from-[#030811] to-transparent" />
            {/* LOGO TRACK */}
            <div
              ref={trackRef}
              className={`
                flex
                h-full
                w-max
                items-center
                gap-12
                px-10
                will-change-transform
                lg:gap-16
                lg:px-14
              `}
            >
              {sliderItems.map((project, index) => {
                const isActive =
                  selectedProject.id === project.id;
                return (
                  <button
                    key={`${project.id}-${index}`}
                    type="button"
                    onPointerDown={() =>
                      selectProject(project.id)
                    }
                    aria-label={`View ${project.name}`}
                    data-project-id={project.id}
                    data-slider-index={index}
                    className={`
                      group
                      relative
                      flex
                      h-[80px]
                      w-[170px]
                      shrink-0
                      items-center
                      justify-center
                    `}
                  >
                    <img
                      src={project.logo}
                      alt={project.name}
                      className={`max-h-[52px] max-w-[145px] object-contain transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 ${
                        isActive
                          ? "grayscale-0 opacity-100"
                          : "grayscale opacity-45"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <style jsx>{`
            .realsite-heartbeat-tracer {
              background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(82, 108, 255, 0.25) 20%,
                rgba(82, 108, 255, 1) 58%,
                rgba(125, 145, 255, 0.9) 72%,
                transparent 100%
              );
              filter: drop-shadow(0 0 5px rgba(82, 108, 255, 0.65));
              will-change: transform;
            }
            .realsite-tracer-pulse {
              transform-origin: 50% 100%;
            }
            .realsite-heartbeat-core {
              opacity: 0;
              transform-origin: center;
              animation: realsiteHeartbeatCore 650ms
                cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }
            .realsite-heartbeat-glow {
              opacity: 0;
              transform-origin: center;
              filter: blur(4px);
              animation: realsiteHeartbeatGlow 650ms
                cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }
            @keyframes realsiteHeartbeatCore {
              0% {
                opacity: 0;
                transform: scaleX(0.92) scaleY(0.8);
              }
              8% {
                opacity: 1;
                transform: scaleX(1) scaleY(1.12);
              }
              30% {
                opacity: 1;
                transform: scaleX(1) scaleY(1);
              }
              70% {
                opacity: 0.65;
                transform: scaleX(1.04) scaleY(0.96);
              }
              100% {
                opacity: 0;
                transform: scaleX(1.08) scaleY(0.9);
              }
            }
            @keyframes realsiteHeartbeatGlow {
              0% {
                opacity: 0;
                transform: scaleX(0.92) scaleY(0.8);
              }
              8% {
                opacity: 0.95;
                transform: scaleX(1) scaleY(1.16);
              }
              32% {
                opacity: 0.7;
                transform: scaleX(1.03) scaleY(1);
              }
              100% {
                opacity: 0;
                transform: scaleX(1.12) scaleY(0.9);
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .realsite-heartbeat-tracer {
                display: none;
              }
            }
          `}</style>
        </section>
        )}
      </main>
  );
}

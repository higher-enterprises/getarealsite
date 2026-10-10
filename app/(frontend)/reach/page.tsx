"use client";

import { useEffect, useMemo, useState } from "react";

import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Clapperboard,
  Cog,
  FileText,
  Mail,
  Megaphone,
  Monitor,
  Search,
  Smartphone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import Header from "@/components/navigation/navigation";

const services = [
  {
    title: "Search Engine Optimization",
    description:
      "Improve your visibility on Google and attract high-intent traffic that converts.",
    icon: Search,
    href: "/reach/search-engine-optimization",
  },
  {
    title: "Paid Advertising (SEM/PPC)",
    description:
      "Reach the right customers with Google Ads, Meta Ads, and more that deliver measurable ROI.",
    icon: Target,
    href: "/reach/paid-advertising",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build your brand, engage your audience, and drive traffic across social platforms.",
    icon: Megaphone,
    href: "/reach/social-media-marketing",
  },
  {
    title: "Email Marketing",
    description:
      "Nurture leads, increase retention, and turn more customers into repeat buyers.",
    icon: Mail,
    href: "/reach/email-marketing",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Improve your website and funnels to turn more visitors into paying customers.",
    icon: TrendingUp,
    href: "/reach/conversion-rate-optimization",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track performance, measure ROI, and make data-driven decisions that fuel growth.",
    icon: BarChart3,
    href: "/reach/analytics-reporting",
  },
  {
    title: "Content Marketing",
    description:
      "Create valuable content that builds trust, boosts SEO, and attracts your ideal audience.",
    icon: FileText,
    href: "/reach/content-marketing",
  },
  {
    title: "Affiliate Marketing",
    description:
      "Expand your reach and drive sales through trusted partners and performance-based programs.",
    icon: Users,
    href: "/reach/affiliate-marketing",
  },
  {
    title: "Mobile Marketing",
    description:
      "Engage customers on the go with mobile-friendly strategies that drive action.",
    icon: Smartphone,
    href: "/reach/mobile-marketing",
  },
  {
    title: "Video Marketing",
    description:
      "Use the power of video to educate, engage, and convert across every platform.",
    icon: Clapperboard,
    href: "/reach/video-marketing",
  },
  {
    title: "Display Advertising",
    description:
      "Increase brand awareness and reach your audience with targeted visual ads.",
    icon: Monitor,
    href: "/reach/display-advertising",
  },
  {
    title: "Marketing Automation",
    description:
      "Automate campaigns, nurture leads, and save time while boosting results.",
    icon: Cog,
    href: "/reach/marketing-automation",
  },
];

const results = [
  {
    value: "53%",
    label: "Website Traffic",
    sublabel: "Can Come From Organic Search",
  },
  {
    value: "$36:1",
    label: "Average Return",
    sublabel: "From Email Marketing",
  },
  {
    value: "93%",
    label: "Marketers Report",
    sublabel: "Strong ROI From Video",
  },
  {
    value: "68%",
    label: "Trackable Traffic",
    sublabel: "Can Come From Search",
  },
];



function SimulatedGrowthDashboard() {
  const [tick, setTick] = useState(0);

  const [stats, setStats] = useState({
    revenue: 285430,
    traffic: 128498,
    leads: 3245,
    conversions: 1256,
  });

  const [growth, setGrowth] = useState({
    revenue: 67.0,
    traffic: 48.0,
    leads: 62.0,
    conversions: 71.0,
    channels: 42.0,
  });

  const [trafficMix, setTrafficMix] = useState({
    organic: 46.0,
    direct: 24.0,
    social: 18.0,
    paid: 12.0,
  });

  const [revenueTrend, setRevenueTrend] = useState([
    28, 34, 39, 45, 50, 56, 61, 67, 73, 79, 86, 94,
  ]);

  const [trafficTrend, setTrafficTrend] = useState([
    22, 27, 31, 36, 41, 46, 50, 55, 60, 65, 70, 76,
  ]);

  const [leadsTrend, setLeadsTrend] = useState([
    18, 23, 28, 33, 37, 42, 47, 52, 57, 62, 68, 74,
  ]);

  const [conversionTrend, setConversionTrend] = useState([
    15, 20, 24, 29, 34, 39, 44, 48, 54, 59, 64, 70,
  ]);

  const [channelBars, setChannelBars] = useState([24, 34, 44, 58, 72, 91]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTick((current) => current + 1);

      setStats((current) => ({
        revenue: current.revenue + Math.floor(350 + Math.random() * 650),
        traffic: current.traffic + Math.floor(60 + Math.random() * 140),
        leads: current.leads + Math.floor(3 + Math.random() * 6),
        conversions: current.conversions + Math.floor(2 + Math.random() * 4),
      }));

      setGrowth((current) => ({
        revenue: Math.min(79.9, current.revenue + 0.1 + Math.random() * 0.25),
        traffic: Math.min(59.9, current.traffic + 0.08 + Math.random() * 0.18),
        leads: Math.min(73.9, current.leads + 0.1 + Math.random() * 0.2),
        conversions: Math.min(
          82.9,
          current.conversions + 0.08 + Math.random() * 0.2
        ),
        channels: Math.min(54.9, current.channels + 0.08 + Math.random() * 0.18),
      }));

      setRevenueTrend((current) => {
        const previous = current[current.length - 1];
        const next = Math.min(99, previous + 2 + Math.floor(Math.random() * 5));
        return [...current.slice(1), next];
      });

      setTrafficTrend((current) => {
        const previous = current[current.length - 1];
        const next = Math.min(99, previous + 1 + Math.floor(Math.random() * 4));
        return [...current.slice(1), next];
      });

      setLeadsTrend((current) => {
        const previous = current[current.length - 1];
        const next = Math.min(99, previous + 1 + Math.floor(Math.random() * 4));
        return [...current.slice(1), next];
      });

      setConversionTrend((current) => {
        const previous = current[current.length - 1];
        const next = Math.min(99, previous + 1 + Math.floor(Math.random() * 4));
        return [...current.slice(1), next];
      });

      setTrafficMix((current) => {
        const organic = Math.min(55, current.organic + 0.15 + Math.random() * 0.2);
        const social = Math.min(24, current.social + 0.05 + Math.random() * 0.12);
        const paid = Math.min(18, current.paid + 0.03 + Math.random() * 0.08);
        const direct = Math.max(10, 100 - organic - social - paid);

        return { organic, direct, social, paid };
      });

      setChannelBars((current) =>
        current.map((height, index) =>
          Math.min(98, height + 1 + Math.floor(Math.random() * (index + 2)))
        )
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  const metricCards = useMemo(
    () => [
      {
        label: "Traffic",
        value: stats.traffic.toLocaleString(),
        change: `+${growth.traffic.toFixed(1)}%`,
        values: trafficTrend,
      },
      {
        label: "Leads",
        value: stats.leads.toLocaleString(),
        change: `+${growth.leads.toFixed(1)}%`,
        values: leadsTrend,
      },
      {
        label: "Conversions",
        value: stats.conversions.toLocaleString(),
        change: `+${growth.conversions.toFixed(1)}%`,
        values: conversionTrend,
      },
    ],
    [stats, growth, trafficTrend, leadsTrend, conversionTrend]
  );

  const makePoints = (
    values: number[],
    width: number,
    height: number,
    padding = 6
  ) => {
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = Math.max(max - min, 1);

    return values
      .map((value, index) => {
        const x =
          padding +
          (index / Math.max(values.length - 1, 1)) * (width - padding * 2);
        const y =
          height -
          padding -
          ((value - min) / range) * (height - padding * 2);

        return `${x},${y}`;
      })
      .join(" ");
  };

  const revenuePoints = makePoints(revenueTrend, 520, 145, 8);

  const organicEnd = trafficMix.organic;
  const directEnd = organicEnd + trafficMix.direct;
  const socialEnd = directEnd + trafficMix.social;

  return (
    <div className="relative h-full min-h-[360px] overflow-hidden bg-[#050d18]">
      <div className="pointer-events-none absolute right-[-12%] top-[-35%] h-[420px] w-[520px] rounded-full bg-[#3048ff]/10 blur-[140px]" />

      <div className="relative z-10 flex h-full flex-col p-5 sm:p-6 lg:p-7">
        <div className="mb-4 flex items-start justify-between gap-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#526cff]">
              Growth Simulation
            </p>
            <p className="mt-1.5 text-[10px] font-light text-white/35">
              Illustrative marketing performance
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-white/40">
              Simulated Live
            </span>
          </div>
        </div>

        <div className="rounded-[14px] border border-white/10 bg-[#071220]/90 p-4">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-[11px] text-white/40">Revenue</p>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-[26px] font-light tracking-[-0.04em] sm:text-[30px]">
                  ${stats.revenue.toLocaleString()}
                </span>
                <span className="pb-1 text-[11px] font-medium text-emerald-400">
                  +{growth.revenue.toFixed(1)}%
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/25">
                Trend
              </p>
              <p className="mt-1 text-[10px] text-emerald-400">
                Rising
              </p>
            </div>
          </div>

          <div className="mt-3 h-[122px]">
            <svg
              viewBox="0 0 520 145"
              className="h-full w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="simulated-revenue-area"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#526cff" stopOpacity="0.30" />
                  <stop offset="100%" stopColor="#526cff" stopOpacity="0" />
                </linearGradient>
              </defs>

              {[26, 56, 86, 116].map((y) => (
                <line
                  key={y}
                  x1="0"
                  x2="520"
                  y1={y}
                  y2={y}
                  stroke="rgba(255,255,255,.055)"
                  strokeWidth="1"
                />
              ))}

              <polygon
                points={`8,145 ${revenuePoints} 512,145`}
                fill="url(#simulated-revenue-area)"
              />

              <polyline
                key={tick}
                points={revenuePoints}
                fill="none"
                stroke="#526cff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sim-dashboard-line"
              />

              {revenueTrend.map((value, index) => {
                const point = revenuePoints.split(" ")[index];
                const [cx, cy] = point.split(",");

                return (
                  <circle
                    key={`${tick}-${index}-${value}`}
                    cx={cx}
                    cy={cy}
                    r="3.2"
                    fill="#071220"
                    stroke="#8092ff"
                    strokeWidth="1.6"
                  />
                );
              })}
            </svg>
          </div>

          <div className="mt-1 grid grid-cols-6 text-center text-[8px] uppercase tracking-[0.08em] text-white/20">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2.5">
          {metricCards.map((metric, metricIndex) => {
            const points = makePoints(metric.values, 145, 46, 4);

            return (
              <div
                key={metric.label}
                className="rounded-[12px] border border-white/10 bg-[#071220]/80 p-3"
              >
                <p className="text-[9px] text-white/35">{metric.label}</p>

                <div className="mt-1.5 flex items-end justify-between gap-2">
                  <span className="truncate text-[16px] font-light tracking-[-0.03em] sm:text-[18px]">
                    {metric.value}
                  </span>
                  <span className="pb-0.5 text-[9px] text-emerald-400">
                    {metric.change}
                  </span>
                </div>

                <div className="mt-2 h-[36px]">
                  <svg
                    viewBox="0 0 145 46"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polyline
                      key={`${tick}-${metricIndex}`}
                      points={points}
                      fill="none"
                      stroke="#526cff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sim-dashboard-spark"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 grid grid-cols-[1fr_1.35fr] gap-2.5">
          <div className="rounded-[12px] border border-white/10 bg-[#071220]/65 p-3">
            <div className="flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">
                Traffic Mix
              </p>
              <span className="text-[8px] text-emerald-400">
                Updating
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <div
                key={tick}
                className="h-[62px] w-[62px] shrink-0 rounded-full transition-all duration-700"
                style={{
                  background: `conic-gradient(
                    #526cff 0 ${organicEnd}%,
                    #7457ff ${organicEnd}% ${directEnd}%,
                    #1aa8b8 ${directEnd}% ${socialEnd}%,
                    rgba(255,255,255,.12) ${socialEnd}% 100%
                  )`,
                }}
              >
                <div className="m-[10px] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#071220] text-[8px] text-emerald-400">
                  +{growth.traffic.toFixed(1)}%
                </div>
              </div>

              <div className="min-w-0 flex-1 space-y-1.5 text-[8px] text-white/35">
                <div className="flex justify-between gap-4">
                  <span>Organic</span>
                  <span className="text-white/55">
                    {trafficMix.organic.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Direct</span>
                  <span className="text-white/55">
                    {trafficMix.direct.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Social</span>
                  <span className="text-white/55">
                    {trafficMix.social.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Paid</span>
                  <span className="text-white/55">
                    {trafficMix.paid.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[12px] border border-white/10 bg-[#071220]/65 p-3">
            <div className="flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">
                Channel Growth
              </p>
              <span className="text-[8px] text-emerald-400">
                +{growth.channels.toFixed(1)}%
              </span>
            </div>

            <div className="mt-4 flex h-[58px] items-end gap-2">
              {channelBars.map((height, index) => (
                <div
                  key={`${tick}-${index}-${height}`}
                  className="sim-dashboard-bar flex-1 rounded-t-[3px] bg-gradient-to-t from-[#3048ff]/55 to-[#526cff]"
                  style={{
                    height: `${height}%`,
                    animationDelay: `${index * 80}ms`,
                  }}
                />
              ))}
            </div>

            <div className="mt-2 grid grid-cols-6 text-center text-[7px] text-white/20">
              <span>SEO</span>
              <span>PPC</span>
              <span>Social</span>
              <span>Email</span>
              <span>Video</span>
              <span>CRO</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sim-dashboard-line,
        .sim-dashboard-spark {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: simDraw 1.4s ease forwards;
        }

        .sim-dashboard-bar {
          transform-origin: bottom;
          animation: simBarRise 700ms ease both;
        }

        @keyframes simDraw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes simBarRise {
          from {
            transform: scaleY(0.15);
            opacity: 0.25;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}


export default function Home() {
  const scrollToServices = () => {
    document.getElementById("reach-services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#030811] text-white">
        {/* =========================================================
            GLOBAL NAVIGATION
        ========================================================= */}

        <div className="absolute inset-x-0 top-0 z-[1000]">
          <Header />
        </div>

        {/* =========================================================
            REACH HERO
        ========================================================= */}

        <section className="relative min-h-[700px] overflow-hidden border-b border-white/5 bg-[#030811]">
          {/* =====================================================
              HERO COMPOSITE IMAGE
              
              IMPORTANT:
              The image already includes the owner + laptop +
              charts/data background. Do not layer another image.
          ===================================================== */}

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
            <img
              src="/images/reach/reach-business-owner-hero.jpg"
              alt="Business owner celebrating business growth"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-[72%_center]
              "
            />

            {/* =================================================
                LEFT BLEND

                Image extends well into center of hero.
                Fade protects copy without washing out owner.
            ================================================= */}

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #030811 0%, rgba(3,8,17,.97) 6%, rgba(3,8,17,.88) 16%, rgba(3,8,17,.58) 30%, rgba(3,8,17,.22) 43%, rgba(3,8,17,.04) 54%, rgba(3,8,17,0) 62%)",
              }}
            />

            {/* NAV PROTECTION */}

            <div className="absolute inset-x-0 top-0 h-[115px] bg-gradient-to-b from-[#030811]/55 to-transparent" />

            {/* BOTTOM TRANSITION */}

            <div className="absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-t from-[#030811]/60 to-transparent" />
          </div>

          {/* SUBTLE CENTER GLOW */}

          <div className="pointer-events-none absolute left-[48%] top-[27%] h-[430px] w-[430px] rounded-full bg-[#3048ff]/[0.035] blur-[170px]" />

          {/* =====================================================
              HERO CONTENT
          ===================================================== */}

          <div className="relative z-20 mx-auto grid min-h-[700px] max-w-[1800px] grid-cols-1 items-center px-7 pb-16 pt-32 sm:px-10 lg:grid-cols-[60%_40%] lg:px-14 lg:pb-20 lg:pt-28">
            {/* LEFT */}

            <div className="flex items-center">
              <div className="max-w-[760px]">
                <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.42em] text-[#526cff]">
                  Reach
                </p>

                <h1 className="text-[46px] font-light leading-[1.03] tracking-[-0.015em] sm:text-[56px] lg:text-[62px] xl:text-[68px]">
                  More visibility.
                  <br />
                  More customers.
                  <br />
                  More <span className="text-[#526cff]">growth.</span>
                </h1>

                <p className="mt-7 max-w-[620px] text-base font-light leading-8 text-white/60 sm:text-lg">
                  Data-driven digital marketing that helps your business get
                  found, get chosen, and keep growing.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={scrollToServices}
                    className="group flex h-[58px] items-center justify-center gap-3 rounded-lg bg-[#3048ff] px-8 text-[11px] font-semibold uppercase tracking-[0.28em] shadow-[0_15px_50px_rgba(48,72,255,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4057ff]"
                  >
                    Our Services

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <button
                    type="button"
                    className="group flex h-[58px] items-center justify-center gap-3 rounded-lg border border-white/15 bg-[#030811]/25 px-8 text-[11px] font-semibold uppercase tracking-[0.28em] backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04]"
                  >
                    Book A Strategy Call

                    <CalendarDays size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT — VISUAL IS ABSOLUTELY POSITIONED */}

            <div className="hidden lg:block" />
          </div>
        </section>

        {/* =========================================================
            INDUSTRY IMPACT BAR
        ========================================================= */}

        <section className="relative bg-[#030811] px-7 pt-0 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-[1600px] -translate-y-[1px] overflow-hidden rounded-[18px] border border-white/10 bg-[#06101c]/95">
            <div className="grid lg:grid-cols-[1.15fr_repeat(4,1fr)]">
              <div className="flex flex-col justify-center border-b border-white/10 px-8 py-7 lg:border-b-0 lg:border-r">
                <p className="text-[10px] font-semibold uppercase leading-6 tracking-[0.3em] text-[#526cff]">
                  The Impact Of
                  <br />
                  Digital Marketing
                </p>

                <button
                  type="button"
                  className="group mt-4 flex h-[42px] w-fit items-center gap-3 rounded-md border border-[#526cff]/55 px-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[#526cff] hover:bg-[#526cff]/10"
                >
                  Explore The Data

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>

              {results.map((result) => (
                <div
                  key={result.value}
                  className="flex min-h-[142px] flex-col items-center justify-center border-b border-white/10 px-5 py-7 text-center last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <div className="text-[34px] font-light tracking-[-0.04em]">
                    {result.value}
                  </div>

                  <div className="mt-2 text-xs font-light leading-5 text-white/55">
                    {result.label}
                    <br />
                    {result.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            DIGITAL MARKETING SERVICES
        ========================================================= */}

        <section
          id="reach-services"
          className="relative overflow-hidden bg-[#030811] py-24 sm:py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3048ff]/[0.025] blur-[220px]" />

          <div className="relative z-10 mx-auto max-w-[1600px] px-7 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-[950px] text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#526cff]">
                What We Do
              </p>

              <h2 className="mt-5 text-[40px] font-light leading-[1.05] tracking-[-0.035em] sm:text-[50px] lg:text-[58px]">
                Full-service digital marketing that drives{" "}
                <span className="text-[#526cff]">real results.</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-[18px] border border-white/10 bg-[#06101a] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#526cff]/45 hover:bg-[#071322]"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#526cff]/20 bg-[#0a1830] text-[#526cff]">
                        <Icon size={27} strokeWidth={1.45} />
                      </div>

                      <div>
                        <h3 className="text-[21px] font-medium tracking-[-0.025em]">
                          {service.title}
                        </h3>

                        <p className="mt-3 max-w-[360px] text-sm font-light leading-6 text-white/50">
                          {service.description}
                        </p>

                        <a
                          href={service.href}
                          className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#526cff]"
                        >
                          Learn More

                          <ArrowRight
                            size={13}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL GROWTH CTA
        ========================================================= */}

        <section className="relative bg-[#030811] px-7 pb-24 sm:px-10 lg:px-14 lg:pb-28">
          <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[20px] border border-white/10 bg-[#06101b]">
            <div className="pointer-events-none absolute right-[-8%] top-1/2 h-[420px] w-[760px] -translate-y-1/2 rounded-full bg-[#3048ff]/[0.10] blur-[140px]" />

            <div className="relative z-10 grid lg:grid-cols-[52%_48%]">
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#526cff]">
                  Ready To Reach More Customers?
                </p>

                <h2 className="mt-4 text-[40px] font-light leading-[1.08] tracking-[-0.04em] sm:text-[48px]">
                  Let&apos;s grow your business.
                </h2>

                <p className="mt-5 max-w-[570px] text-base font-light leading-7 text-white/50">
                  Book a free strategy call and let&apos;s build a plan that gets
                  you more traffic, more leads, and more revenue.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="group flex h-[54px] items-center justify-center gap-3 rounded-lg bg-[#3048ff] px-7 text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:bg-[#4057ff]"
                  >
                    Book A Strategy Call

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <button
                    type="button"
                    className="group flex h-[54px] items-center justify-center gap-3 rounded-lg border border-white/15 px-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-[#526cff]/60 hover:bg-[#526cff]/10 hover:text-white"
                  >
                    See Pricing Plans

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>

              <div className="relative min-h-[430px] overflow-hidden">
                <SimulatedGrowthDashboard />

                <div className="pointer-events-none absolute inset-y-0 left-0 w-[72px] bg-gradient-to-r from-[#06101b] to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
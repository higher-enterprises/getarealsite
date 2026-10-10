"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  Mail,
  Phone,
} from "lucide-react";

import type { Agency } from "@/data/agencies";

type AgencyFooterProps = {
  agency: Agency;
  backgroundImage?: string;
  timezone?: string;
};

export default function AgencyFooter({
  agency,
  backgroundImage,
  timezone = "America/Los_Angeles",
}: AgencyFooterProps) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      setDate(
        new Intl.DateTimeFormat("en-US", {
          timeZone: timezone,
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(now)
      );

      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: timezone,
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZoneName: "short",
        }).format(now)
      );
    };

    updateDateTime();

    const interval = window.setInterval(updateDateTime, 30_000);

    return () => window.clearInterval(interval);
  }, [timezone]);

  const location = `${agency.city}, ${agency.stateCode}`;

  const phoneHref = agency.phone
    ? `tel:${agency.phone.replace(/[^\d+]/g, "")}`
    : undefined;

  return (
    <footer className="relative overflow-hidden bg-[#030811] text-white">
      <section className="relative border-t border-white/[0.07]">
        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">
          {backgroundImage && (
            <Image
              src={backgroundImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-bottom"
            />
          )}

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #030811 0%, rgba(3,8,17,.98) 14%, rgba(3,8,17,.94) 28%, rgba(3,8,17,.78) 44%, rgba(3,8,17,.42) 66%, rgba(3,8,17,.16) 100%)",
            }}
          />

          <div className="absolute left-1/2 top-[58%] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#3048ff]/[0.035] blur-[180px]" />

          <div className="agency-footer-atmosphere absolute inset-0" />

          <svg
            viewBox="0 0 1600 700"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              className="agency-footer-network-line"
              d="
                M100 610
                C260 480 380 470 520 565
                C660 650 760 460 910 515
                C1080 580 1120 430 1320 510
              "
            />

            <path
              className="agency-footer-network-line agency-footer-network-delay"
              d="
                M300 630
                C430 520 570 500 700 575
                C850 660 930 480 1080 535
                C1200 580 1340 500 1500 570
              "
            />

            <circle
              className="agency-footer-node"
              cx="520"
              cy="565"
              r="4"
            />

            <circle
              className="agency-footer-node agency-footer-node-delay"
              cx="910"
              cy="515"
              r="4"
            />

            <circle
              className="agency-footer-node agency-footer-node-delay-two"
              cx="1320"
              cy="510"
              r="4"
            />
          </svg>
        </div>

        {/* CONTENT */}

        <div className="relative z-20 mx-auto max-w-[1800px] px-7 pb-[280px] pt-20 sm:px-10 lg:px-14 lg:pb-[320px] lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[370px_1fr]">
            {/* BRAND */}

            <div className="border-white/10 lg:border-r lg:pr-12">
              <Link href="/" aria-label="RealSite home">
                <Image
                  src="/images/branding/realsite-signature-logo.png"
                  alt="RealSite"
                  width={280}
                  height={106}
                  className="h-auto w-[230px] object-contain object-left"
                />
              </Link>

              <p className="mt-7 text-[13px] font-light uppercase tracking-[0.42em] text-white/40">
                {location}
              </p>

              {agency.address && (
                <p className="mt-4 max-w-[300px] text-[13px] leading-6 text-white/45">
                  {agency.address}
                  <br />
                  {agency.city}, {agency.stateCode} {agency.postalCode}
                </p>
              )}

              {agency.areasServed && agency.areasServed.length > 0 && (
                <div className="mt-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#526cff]">
                    Areas We Serve
                  </p>

                  <p className="mt-3 max-w-[320px] text-[12px] leading-6 text-white/45">
                    {agency.areasServed.join(" · ")}
                  </p>
                </div>
              )}
            </div>

            {/* AGENCY INFO */}

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#526cff]">
                Your Local RealSite Agency
              </p>

              <h2 className="mt-4 max-w-[650px] text-[34px] font-light leading-[1.1] tracking-[-0.035em]">
                RealSite {agency.city}
              </h2>

              {agency.description && (
                <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-white/55">
                  {agency.description}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-md bg-[#6257ff] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.17em] transition hover:bg-[#7168ff]"
                >
                  Start A Project
                </a>

                {agency.email && (
                  <a
                    href={`mailto:${agency.email}`}
                    className="rounded-md border border-white/20 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.17em] transition hover:border-white/50"
                  >
                    Contact Agency
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* LOCAL INFO BAR */}

          <div className="absolute bottom-[180px] left-1/2 w-[calc(100%-56px)] max-w-[1100px] -translate-x-1/2 sm:w-[calc(100%-80px)] lg:bottom-[200px]">
            <div className="border-t border-white/10 pt-8">
              <div className="grid grid-cols-2 gap-y-7 text-white/48 sm:grid-cols-4">
                <FooterStat>
                  <CalendarDays size={24} strokeWidth={1.35} />
                  <span>{date || "—"}</span>
                </FooterStat>

                <FooterStat>
                  <Clock3 size={24} strokeWidth={1.35} />
                  <span>{time || "—"}</span>
                </FooterStat>

                {agency.phone && phoneHref && (
                  <FooterStat>
                    <Phone size={23} strokeWidth={1.35} />

                    <a
                      href={phoneHref}
                      className="transition-colors hover:text-white/80"
                    >
                      {agency.phone}
                    </a>
                  </FooterStat>
                )}

                {agency.email && (
                  <FooterStat last>
                    <Mail size={23} strokeWidth={1.35} />

                    <a
                      href={`mailto:${agency.email}`}
                      className="truncate transition-colors hover:text-white/80"
                    >
                      {agency.email}
                    </a>
                  </FooterStat>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <style jsx global>{`
        @keyframes agency-footer-atmosphere {
          0% {
            transform: translateX(-2%);
          }

          100% {
            transform: translateX(2%);
          }
        }

        .agency-footer-atmosphere {
          background:
            radial-gradient(
              ellipse at 62% 61%,
              rgba(65, 95, 190, 0.06),
              transparent 38%
            ),
            radial-gradient(
              ellipse at 35% 50%,
              rgba(255, 255, 255, 0.025),
              transparent 35%
            );

          animation: agency-footer-atmosphere 20s ease-in-out infinite alternate;
        }

        @keyframes agency-footer-network {
          0% {
            stroke-dashoffset: 450;
            opacity: 0;
          }

          18% {
            opacity: 0.35;
          }

          75% {
            opacity: 0.35;
          }

          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        .agency-footer-network-line {
          fill: none;
          stroke: rgba(65, 100, 255, 0.48);
          stroke-width: 1;
          stroke-dasharray: 5 13;
          stroke-dashoffset: 450;
          animation: agency-footer-network 10s linear infinite;
        }

        .agency-footer-network-delay {
          animation-delay: 4s;
        }

        @keyframes agency-footer-node-animation {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(1);
          }

          50% {
            opacity: 0.95;
            transform: scale(2);
          }
        }

        .agency-footer-node {
          fill: #526cff;
          transform-box: fill-box;
          transform-origin: center;
          animation: agency-footer-node-animation 4s ease-in-out infinite;
        }

        .agency-footer-node-delay {
          animation-delay: 1.5s;
        }

        .agency-footer-node-delay-two {
          animation-delay: 2.8s;
        }

        @media (prefers-reduced-motion: reduce) {
          .agency-footer-atmosphere,
          .agency-footer-network-line,
          .agency-footer-node {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterStat({
  children,
  last = false,
}: {
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`flex min-h-[55px] items-center justify-center gap-3 px-4 text-[13px] font-light ${
        last ? "" : "sm:border-r sm:border-white/10"
      }`}
    >
      {children}
    </div>
  );
}
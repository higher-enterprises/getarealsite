"use client";

import { useRef } from "react";
import Header from "@/components/navigation/navigation";

const options = [
  {
    title: "Commerce & Transactions",
    description:
      "Turn your site into a place people can buy, sell, and pay.",
    image: "/images/commerce-transactions.png",
    items: [
      "E-commerce",
      "Marketplace",
      "Rentals",
      "Appointments & Booking",
      "Donations & Fundraising",
      "Quoting, Invoicing & Payments",
    ],
  },
  {
    title: "Community & Engagement",
    description: "Build an audience that comes back.",
    image: "/images/community-engagement.png",
    items: [
      "Community",
      "Membership",
      "Online Learning",
      "Loyalty & Rewards",
      "Affiliate & Referral Programs",
      "Surveys, Quizzes & Feedback",
    ],
  },
  {
    title: "Client & Business Operations",
    description:
      "Systems that run your operations, not just your storefront.",
    image: "/images/client-business-operations.png",
    items: [
      "CRM",
      "Client & Partner Portals",
      "Document Management & eSignature",
      "Security & Access Control",
      "Analytics & Reporting Dashboards",
    ],
  },
  {
    title: "Support & Communication",
    description: "Help people find answers and reach you.",
    image: "/images/support-communication.png",
    items: [
      "Helpdesk & Ticketing",
      "Live Chat & Messaging",
      "Knowledge Base / FAQ Systems",
    ],
  },
  {
    title: "Content & Discovery",
    description: "Help people find things on your site.",
    image: "/images/content-discovery.png",
    items: [
      "Directories & Listings",
      "Job Boards & Careers Portals",
      "Advanced / AI-Powered Search",
      "Multi-language & Localization",
    ],
  },
  {
    title: "Events",
    description: "From single events to ongoing programming.",
    image: "/images/events.png",
    items: [
      "Event Management",
      "Event Ticketing",
    ],
  },
  {
    title: "Growth & Marketing Automation",
    description: "Systems that market for you.",
    image: "/images/growth-marketing-automation.png",
    items: [
      "Email Marketing & Automation",
      "Personalization & Recommendation Engines",
    ],
  },
  {
    title: "Custom Applications",
    description:
      "Bespoke software built around exactly how you work.",
    image: "/images/custom-applications.png",
    items: [
      "Internal Tools & Dashboards",
      "Workflow / Process Automation Software",
      "Industry-specific Applications",
    ],
  },
  {
    title: "Systems Integrations",
    description:
      "Connect your website to the tools you already use.",
    image: "/images/systems-integrations.png",
    items: [
      "Third-party API Integrations",
      "ERP / Accounting Sync",
      "Data Migration & Platform Syncing",
    ],
  },
  {
    title: "Artificial Intelligence",
    description:
      "AI-powered features layered into your site.",
    image: "/images/artificial-intelligence.png",
    items: [
      "AI Chatbots & Assistants",
      "Content Generation Tools",
      "Predictive / Recommendation Systems",
      "AI-powered Search",
    ],
  },
  {
    title: "Content Management",
    description:
      "Create, organize, and update content with ease.",
    image: "/images/content-management.png",
    items: [
      "Content Management Systems",
      "Page & Landing Page Management",
      "Media & Asset Libraries",
      "Editorial Workflows",
      "Publishing & Scheduling",
    ],
  },
  {
    title: "Analytics & Performance",
    description:
      "Measure what matters and optimize for growth.",
    image: "/images/analytics-performance.png",
    items: [
      "Website Analytics",
      "Conversion Tracking",
      "Performance Monitoring",
      "Business Intelligence",
      "Custom Reporting Dashboards",
    ],
  },
];

export default function Expand() {
  const optionsRef = useRef<HTMLElement>(null);

  const scrollToOptions = () => {
    optionsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-[#030811] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-[100dvh] items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">

          <div className="absolute inset-0 bg-[#030811]" />

          {/* Subtle blue atmospheric glow */}
          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3048ff]/10 blur-[180px]" />

          {/* Geometric background */}
          <div className="absolute inset-0 opacity-[0.045]">
            <div className="absolute -left-[20%] top-[10%] h-[900px] w-[900px] rotate-45 border border-white" />
            <div className="absolute right-[-20%] top-[15%] h-[900px] w-[900px] -rotate-45 border border-white" />
          </div>

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#030811] to-transparent" />
        </div>

        {/* Navigation */}
        <div className="absolute inset-x-0 top-0 z-50">
          <Header />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col items-center px-7 pt-32 text-center sm:px-10 lg:px-14">

          <div className="max-w-4xl">

            <p className="text-xs font-medium uppercase tracking-[0.45em] text-white/40">
              Expand Your Site
            </p>

            <h1 className="mt-7 text-5xl font-light tracking-[-0.045em] text-white sm:text4-xl lg:text-6xl">
              Make your website
              <br />
              <span className="text-[#526cff]"> do more.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 tracking-wide text-white/50 sm:text-lg">
              Add the commerce, community, content, systems and intelligence
              your business needs to grow.
            </p>

          </div>

          {/* Scroll Button */}
          <button
            type="button"
            onClick={scrollToOptions}
            className="
              group
              mt-16
              flex
              flex-col
              items-center
              gap-4
              text-[10px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-white/45
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <span>Explore Options</span>

            <span
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                transition-all
                duration-300
                group-hover:border-[#526cff]
                group-hover:bg-[#526cff]/10
              "
            >
              <span
                className="
                  block
                  h-2
                  w-2
                  rotate-45
                  border-b
                  border-r
                  border-white/70
                  transition-colors
                  duration-300
                  group-hover:border-[#526cff]
                "
              />
            </span>
          </button>

        </div>
      </section>


      {/* =========================================================
          EXPANSION OPTIONS
          No introductory header — cards begin immediately.
      ========================================================= */}

      <section
        ref={optionsRef}
        id="expand-options"
        className="relative scroll-mt-20 overflow-hidden bg-[#030811] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >

        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#3048ff]/[0.035] blur-[160px]" />

          <div className="absolute inset-0 opacity-[0.025]">
            <div className="absolute left-[8%] top-0 h-[900px] w-[900px] rotate-45 border border-white" />
            <div className="absolute right-[-20%] top-[30%] h-[1000px] w-[1000px] -rotate-45 border border-white" />
          </div>

        </div>


        {/* =======================================================
            CARD GRID
        ======================================================= */}

        <div
          className="
            relative
            mx-auto
            grid
            max-w-[1500px]
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {options.map((option) => (
            <article
              key={option.title}
              className="
                group
                relative
                overflow-hidden
                border
                border-white/[0.08]
                bg-[#050b15]
                transition-all
                duration-500
                hover:border-[#526cff]/60
                hover:bg-[#070e1b]
              "
            >

              {/* =================================================
                  GRAPHIC
              ================================================= */}

              <div className="relative aspect-[16/9] overflow-hidden bg-[#02060c]">

                <img
                  src={option.image}
                  alt=""
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    grayscale
                    opacity-[0.38]
                    brightness-[0.55]
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.035]
                    group-hover:grayscale-0
                    group-hover:opacity-100
                    group-hover:brightness-100
                  "
                />

                {/* Default dark veil */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[#030811]/25
                    transition-opacity
                    duration-500
                    group-hover:opacity-0
                  "
                />

                {/* Blue hover wash */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[#3048ff]/0
                    mix-blend-color
                    transition-all
                    duration-500
                    group-hover:bg-[#3048ff]/10
                  "
                />

                {/* Bottom fade */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-24
                    bg-gradient-to-t
                    from-[#050b15]
                    to-transparent
                  "
                />

              </div>


              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div className="relative px-7 pb-8 pt-6">

                <h2
                  className="
                    text-xl
                    font-light
                    tracking-[-0.02em]
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#526cff]
                  "
                >
                  {option.title}
                </h2>

                <p className="mt-3 max-w-sm text-sm font-light leading-6 text-white/45">
                  {option.description}
                </p>


                {/* Service Links */}

                <div
                  className="
                    mt-6
                    max-h-0
                    overflow-hidden
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:max-h-[400px]
                    group-hover:opacity-100
                  "
                >
                  <div className="border-t border-white/[0.08] pt-5">

                    <div className="space-y-2">

                      {option.items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="
                            block
                            text-xs
                            font-light
                            tracking-wide
                            text-white/40
                            transition-colors
                            duration-300
                            hover:text-[#526cff]
                          "
                        >
                          {item}
                        </a>
                      ))}

                    </div>

                  </div>
                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

    </main>
  );
}
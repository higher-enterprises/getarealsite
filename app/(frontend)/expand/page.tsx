"use client";

import { useRef } from "react";
import Link from "next/link";
import Header from "@/components/navigation/navigation";

const options = [
  {
    slug: "commerce-transactions",
    title: "Commerce & Transactions",
    description: "Turn your site into a place people can buy, sell, book, fund, and pay.",
    image: "/images/commerce-transactions.png",
    items: [
      { title: "E-commerce", href: "/expand/commerce-transactions/e-commerce" },
      { title: "Marketplace", href: "/expand/commerce-transactions/marketplace" },
      { title: "Rentals", href: "/expand/commerce-transactions/rentals" },
      { title: "Appointments & Booking", href: "/expand/commerce-transactions/appointments-booking" },
      { title: "Donations & Fundraising", href: "/expand/commerce-transactions/donations-fundraising" },
      { title: "Quoting, Invoicing & Payments", href: "/expand/commerce-transactions/quoting-invoicing-payments" },
    ],
  },
  {
    slug: "community-engagement",
    title: "Community & Engagement",
    description: "Build an audience that participates, returns, learns, and belongs.",
    image: "/images/community-engagement.png",
    items: [
      { title: "Community", href: "/expand/community-engagement/community" },
      { title: "Membership", href: "/expand/community-engagement/membership" },
      { title: "Online Learning", href: "/expand/community-engagement/online-learning" },
      { title: "Loyalty & Rewards", href: "/expand/community-engagement/loyalty-rewards" },
      { title: "Affiliate & Referral Programs", href: "/expand/community-engagement/affiliate-referral-programs" },
      { title: "Surveys, Quizzes & Feedback", href: "/expand/community-engagement/surveys-quizzes-feedback" },
    ],
  },
  {
    slug: "client-business-operations",
    title: "Client & Business Operations",
    description: "Put the systems that run the business behind the same digital front door.",
    image: "/images/client-business-operations.png",
    items: [
      { title: "CRM", href: "/expand/client-business-operations/crm" },
      { title: "Client & Partner Portals", href: "/expand/client-business-operations/client-partner-portals" },
      { title: "Document Management & eSignature", href: "/expand/client-business-operations/document-management-esignature" },
      { title: "Security & Access Control", href: "/expand/client-business-operations/security-access-control" },
      { title: "Analytics & Reporting Dashboards", href: "/expand/client-business-operations/analytics-reporting-dashboards" },
    ],
  },
  {
    slug: "support-communication",
    title: "Support & Communication",
    description: "Help people get answers, reach your team, and resolve issues faster.",
    image: "/images/support-communication.png",
    items: [
      { title: "Helpdesk & Ticketing", href: "/expand/support-communication/helpdesk-ticketing" },
      { title: "Live Chat & Messaging", href: "/expand/support-communication/live-chat-messaging" },
      { title: "Knowledge Base / FAQ Systems", href: "/expand/support-communication/knowledge-base-faq" },
    ],
  },
  {
    slug: "content-discovery",
    title: "Content & Discovery",
    description: "Help people find the right information, opportunity, listing, or resource.",
    image: "/images/content-discovery.png",
    items: [
      { title: "Directories & Listings", href: "/expand/content-discovery/directories-listings" },
      { title: "Job Boards & Careers Portals", href: "/expand/content-discovery/job-boards-careers-portals" },
      { title: "Advanced / AI-Powered Search", href: "/expand/content-discovery/advanced-ai-search" },
      { title: "Multi-language & Localization", href: "/expand/content-discovery/multi-language-localization" },
    ],
  },
  {
    slug: "events",
    title: "Events",
    description: "Support everything from a single event to an ongoing calendar of programming.",
    image: "/images/events.png",
    items: [
      { title: "Event Management", href: "/expand/events/event-management" },
      { title: "Event Ticketing", href: "/expand/events/event-ticketing" },
    ],
  },
  {
    slug: "growth-marketing-automation",
    title: "Growth & Marketing Automation",
    description: "Build systems that keep marketing moving after the first click.",
    image: "/images/growth-marketing-automation.png",
    items: [
      { title: "Email Marketing & Automation", href: "/expand/growth-marketing-automation/email-marketing-automation" },
      { title: "Personalization & Recommendation Engines", href: "/expand/growth-marketing-automation/personalization-recommendation-engines" },
    ],
  },
  {
    slug: "custom-applications",
    title: "Custom Applications",
    description: "Build software around the way your organization actually works.",
    image: "/images/custom-applications.png",
    items: [
      { title: "Internal Tools & Dashboards", href: "/expand/custom-applications/internal-tools-dashboards" },
      { title: "Workflow / Process Automation Software", href: "/expand/custom-applications/workflow-process-automation" },
      { title: "Industry-specific Applications", href: "/expand/custom-applications/industry-specific-applications" },
    ],
  },
  {
    slug: "systems-integrations",
    title: "Systems Integrations",
    description: "Connect your RealSite to the tools and data your organization already depends on.",
    image: "/images/systems-integrations.png",
    items: [
      { title: "Third-party API Integrations", href: "/expand/systems-integrations/third-party-api-integrations" },
      { title: "ERP / Accounting Sync", href: "/expand/systems-integrations/erp-accounting-sync" },
      { title: "Data Migration & Platform Syncing", href: "/expand/systems-integrations/data-migration-platform-syncing" },
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    description: "Layer practical AI capabilities into the experiences and systems you already use.",
    image: "/images/artificial-intelligence.png",
    items: [
      { title: "AI Chatbots & Assistants", href: "/expand/artificial-intelligence/ai-chatbots-assistants" },
      { title: "Content Generation Tools", href: "/expand/artificial-intelligence/content-generation-tools" },
      { title: "Predictive / Recommendation Systems", href: "/expand/artificial-intelligence/predictive-recommendation-systems" },
      { title: "AI-powered Search", href: "/expand/artificial-intelligence/ai-powered-search" },
    ],
  },
  {
    slug: "content-management",
    title: "Content Management",
    description: "Create, organize, govern, and publish content without turning every update into a development task.",
    image: "/images/content-management.png",
    items: [
      { title: "Content Management Systems", href: "/expand/content-management/content-management-systems" },
      { title: "Page & Landing Page Management", href: "/expand/content-management/page-landing-page-management" },
      { title: "Media & Asset Libraries", href: "/expand/content-management/media-asset-libraries" },
      { title: "Editorial Workflows", href: "/expand/content-management/editorial-workflows" },
      { title: "Publishing & Scheduling", href: "/expand/content-management/publishing-scheduling" },
    ],
  },
  {
    slug: "analytics-performance",
    title: "Analytics & Performance",
    description: "Measure what matters, understand what is happening, and improve what happens next.",
    image: "/images/analytics-performance.png",
    items: [
      { title: "Website Analytics", href: "/expand/analytics-performance/website-analytics" },
      { title: "Conversion Tracking", href: "/expand/analytics-performance/conversion-tracking" },
      { title: "Performance Monitoring", href: "/expand/analytics-performance/performance-monitoring" },
      { title: "Business Intelligence", href: "/expand/analytics-performance/business-intelligence" },
      { title: "Custom Reporting Dashboards", href: "/expand/analytics-performance/custom-reporting-dashboards" },
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
                  <Link href={`/expand/${option.slug}`} className="block">
                    {option.title}
                  </Link>
                </h2>

                <p className="mt-3 max-w-sm text-sm font-light leading-6 text-white/45">
                  {option.description}
                </p>

                <Link
                  href={`/expand/${option.slug}`}
                  className="mt-5 inline-flex text-[10px] font-medium uppercase tracking-[0.22em] text-[#526cff] transition hover:text-white"
                >
                  Explore Category →
                </Link>

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
                        <Link
                          key={item.href}
                          href={item.href}
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
                          {item.title}
                        </Link>
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
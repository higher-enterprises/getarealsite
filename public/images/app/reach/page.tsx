"use client";

import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CircleDollarSign,
  Mail,
  Megaphone,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";

import Header from "@/components/navigation/navigation";

const services = [
  {
    title: "Search Engine Optimization",
    description:
      "Improve your visibility on Google and attract high-intent traffic that converts.",
    icon: Search,
    href: "#",
  },
  {
    title: "Paid Advertising",
    description:
      "Reach the right customers with Google Ads, Meta Ads, and more that deliver measurable ROI.",
    icon: Target,
    href: "#",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build your brand, engage your audience, and drive traffic across social platforms.",
    icon: Megaphone,
    href: "#",
  },
  {
    title: "Email Marketing",
    description:
      "Nurture leads, increase retention, and turn more customers into repeat buyers.",
    icon: Mail,
    href: "#",
  },
  {
    title: "Conversion Optimization",
    description:
      "Improve your website and funnels to turn more visitors into paying customers.",
    icon: TrendingUp,
    href: "#",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track performance, measure ROI, and make data-driven decisions that fuel growth.",
    icon: BarChart3,
    href: "#",
  },
];

const results = [
  {
    value: "245%",
    label: "Average Increase",
    sublabel: "in Organic Traffic",
  },
  {
    value: "3.2X",
    label: "Average Increase",
    sublabel: "in Leads",
  },
  {
    value: "$18.47",
    label: "Average Cost",
    sublabel: "Per Lead",
  },
  {
    value: "+67%",
    label: "Average Increase",
    sublabel: "in Conversions",
  },
];

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
            REACH HERO — 60 / 40
        ========================================================= */}

        <section className="relative overflow-hidden border-b border-white/5 bg-[#030811]">
          {/* RIGHT-SIDE HERO IMAGE */}
          <div className="absolute inset-y-0 right-0 hidden w-[40%] lg:block">
            <img
              src="/images/reach/reach-boutique-owner-hero.jpg"
              alt="Boutique business owner"
              className="h-full w-full object-cover object-center"
            />

            {/* fade image into 60% text side */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #030811 0%, rgba(3,8,17,.95) 10%, rgba(3,8,17,.68) 25%, rgba(3,8,17,.24) 48%, rgba(3,8,17,0) 72%)",
              }}
            />

            {/* overall dark treatment */}
            <div className="absolute inset-0 bg-[#030811]/10" />

            {/* top nav protection */}
            <div className="absolute inset-x-0 top-0 h-[150px] bg-gradient-to-b from-[#030811]/75 to-transparent" />

            {/* bottom blending */}
            <div className="absolute inset-x-0 bottom-0 h-[130px] bg-gradient-to-t from-[#030811] to-transparent" />
          </div>

          {/* subtle blue atmosphere */}
          <div className="pointer-events-none absolute left-[42%] top-[24%] h-[440px] w-[440px] rounded-full bg-[#3048ff]/[0.05] blur-[170px]" />

          <div className="relative z-20 mx-auto grid min-h-[700px] max-w-[1800px] grid-cols-1 items-center px-7 pb-16 pt-32 sm:px-10 lg:grid-cols-[60%_40%] lg:px-14 lg:pb-20 lg:pt-28">
            {/* LEFT — 60% */}
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

            {/* RIGHT — intentionally reserved for photography */}
            <div className="hidden lg:block" />
          </div>
        </section>

        {/* =========================================================
            RESULTS BAR — DIRECTLY UNDER HERO
        ========================================================= */}

        <section className="relative bg-[#030811] px-7 pt-0 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-[1600px] -translate-y-[1px] overflow-hidden rounded-[18px] border border-white/10 bg-[#06101c]/95">
            <div className="grid lg:grid-cols-[1.15fr_repeat(4,1fr)]">
              <div className="flex flex-col justify-center border-b border-white/10 px-8 py-7 lg:border-b-0 lg:border-r">
                <p className="text-[10px] font-semibold uppercase leading-6 tracking-[0.3em] text-[#526cff]">
                  Real Results For
                  <br />
                  Real Businesses
                </p>

                <button
                  type="button"
                  className="group mt-4 flex h-[42px] w-fit items-center gap-3 rounded-md border border-[#526cff]/55 px-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[#526cff] hover:bg-[#526cff]/10"
                >
                  View Case Studies
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

              <div className="relative min-h-[330px] overflow-hidden">
                <img
                  src="/images/reach/reach-growth-dashboard.jpg"
                  alt="Digital marketing growth dashboard"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#06101b] via-[#06101b]/40 to-transparent" />
                <div className="absolute inset-0 bg-[#030811]/10" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

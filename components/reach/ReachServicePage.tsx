"use client";

import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  Clapperboard,
  Cog,
  FileText,
  Info,
  Mail,
  Megaphone,
  Minus,
  Monitor,
  Plus,
  Search,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

import Header from "@/components/navigation/navigation";
import ServiceContactForm from "@/components/reach/ServiceContactForm";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Target,
  Megaphone,
  Mail,
  TrendingUp,
  BarChart3,
  FileText,
  Users,
  Smartphone,
  Clapperboard,
  Monitor,
  Cog,
};

export type JourneyStage = {
  number: string;
  title: string;
  subtitle: string;
  actions: string[];
  touchpoints: string[];
  channels: string[];
  moment: string;
  influence: "primary" | "supporting" | "subtle";
};

export type ReachServicePageProps = {
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  icon: keyof typeof iconMap;
  image: string;
  serviceSlug: string;

  heroBackgroundImage?: string;
  heroCustomerImage?: string;
  journeyCustomerImage?: string;

  whyItMatters: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    outcomes: string[];
    benchmarkEyebrow: string;
    metric: string;
    metricLabel: string;
  };

  customerJourney: {
    title: string;
    info: string;
    stageLabel: string;
    keyMomentsLabel: string;
    influenceLabel: string;
    stages: JourneyStage[];
  };

  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
};

function JourneyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-[12px] font-light leading-[1.45] text-white/60 xl:text-[13px]">
          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/35" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ReachServicePage({
  title,
  headline,
  description,
  icon,
  image,
  serviceSlug,
  heroBackgroundImage = "/images/reach/seo/seo-plumber-composite-faded-1920x1080.jpg",
  heroCustomerImage = "/images/reach/seo/plumber-cutout-1200x1800.png",
  journeyCustomerImage = "/images/reach/seo/plumber-headshot-smile-1200x1200.png",
  whyItMatters,
  customerJourney,
  faq,
}: ReachServicePageProps) {
  const Icon = iconMap[icon];
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const scrollToContact = () => {
    document.getElementById("service-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  return (
    <main className="min-h-screen bg-[#030811] text-white">
      <div className="absolute inset-x-0 top-0 z-[1000]">
        <Header />
      </div>

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[620px] overflow-hidden border-b border-white/5 bg-[#030811]">
        {/* Single composite background + independent foreground customer.
            The visual deliberately extends behind the navigation; masks feather
            every outer edge so the artwork never reads as a rectangular panel. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[61vw] lg:block">
          <div
            className="absolute left-0 top-[8%] h-[88%] w-[86%]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 88%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 70%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 88%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 70%, transparent 100%)",
              maskComposite: "intersect",
            }}
          >
            <img
              src={heroBackgroundImage || image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain object-left opacity-72"
            />
          </div>

          {/* Foreground plumber stays separate from the faded composite. */}
          <div className="absolute bottom-0 left-[18%] z-30 h-[76%] w-[28%]">
            <img
              src={heroCustomerImage}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain object-bottom"
            />
          </div>

          {/* Final right-side dissolve into the copy field. */}
          <div className="absolute inset-y-0 right-[-1px] z-40 w-[34%] bg-gradient-to-r from-transparent via-[#030811]/55 to-[#030811]" />
        </div>

        {/* MOBILE */}
        <div className="absolute inset-0 lg:hidden">
          <div
            className="absolute -inset-[8%]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
            }}
          >
            <img
              src={heroBackgroundImage || image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center opacity-35"
            />
          </div>
          <div className="absolute inset-0 bg-[#030811]/72" />
        </div>

        {/* RIGHT 50% CONTENT */}
        <div className="relative z-50 mx-auto grid h-full max-w-[1800px] grid-cols-1 items-center px-7 pt-[118px] sm:px-10 lg:grid-cols-2 lg:px-14">
          <div className="hidden lg:block" />
          <div className="flex w-full items-center justify-start lg:pl-8 xl:pl-12">
            <div className="w-full max-w-[700px] text-left">
              <h1 className="max-w-[660px] text-[36px] font-light leading-[1.06] tracking-[-0.035em] sm:text-[42px] lg:text-[46px] xl:text-[50px]">
                {headline}
              </h1>
              <p className="mt-5 max-w-[640px] text-sm font-light leading-7 text-white/55 sm:text-base">
                {description}
              </p>
              <div className="mt-7 flex flex-wrap justify-start gap-3">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="group flex h-[50px] items-center gap-3 rounded-lg bg-[#3048ff] px-6 text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:bg-[#4057ff]"
                >
                  Get Started
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="flex h-[50px] items-center gap-3 rounded-lg border border-white/15 px-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-[#526cff]/60 hover:bg-[#526cff]/10"
                >
                  Book A Strategy Call
                  <CalendarDays size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="border-b border-white/5 bg-[#030811] px-7 py-16 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#526cff]">{whyItMatters.eyebrow}</p>
            <h2 className="mt-4 max-w-[760px] text-[34px] font-light leading-[1.08] tracking-[-0.035em] sm:text-[42px]">
              {whyItMatters.title}
            </h2>
            <div className="mt-5 max-w-[760px] space-y-4">
              {whyItMatters.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-sm font-light leading-7 sm:text-[15px] ${
                    index === 0 ? "text-white/55" : "text-white/45"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {whyItMatters.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-[14px] border border-white/10 bg-[#06101a] p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0a1830] text-[#526cff]">
                    <Check size={16} />
                  </div>
                  <p className="mt-4 text-sm font-light leading-6 text-white/70">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-full rounded-[18px] border border-[#526cff]/20 bg-[#07111e] p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                {whyItMatters.benchmarkEyebrow}
              </p>
              <div className="mt-3 text-[54px] font-light tracking-[-0.05em] text-[#526cff]">{whyItMatters.metric}</div>
              <p className="mt-2 max-w-[420px] text-sm font-light leading-6 text-white/50">{whyItMatters.metricLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE REAL CUSTOMER JOURNEY */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#040b14] px-7 pb-20 pt-0 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative min-h-[250px]">
            <div className="pointer-events-none absolute bottom-0 left-0 hidden h-[285px] w-[360px] lg:block">
              <div className="absolute bottom-5 left-8 h-[210px] w-[210px] rounded-full border border-[#1677ff]/25" />
              <div className="absolute bottom-[-15px] left-[-10px] h-[280px] w-[280px] rounded-full bg-[#1265ff]/10 blur-[70px]" />
              <img
                src={journeyCustomerImage}
                alt=""
                aria-hidden="true"
                className="relative z-10 h-full w-full object-contain object-left-bottom"
              />
              <div className="absolute inset-x-0 bottom-0 z-20 h-[65px] bg-gradient-to-t from-[#040b14] to-transparent" />
            </div>
            <div className="flex min-h-[250px] items-center justify-end">
              <div className="relative z-20 text-right">
                <div className="flex items-center justify-end gap-2">
                  <h2 className="text-[34px] font-light leading-[1.08] tracking-[-0.035em] sm:text-[42px]">
                    {customerJourney.title}
                  </h2>
                  <div className="group relative">
                    <button
                      type="button"
                      aria-label="What is the customer journey?"
                      className="flex h-6 w-6 items-center justify-center rounded-full border border-[#526cff]/50 text-[#526cff] transition hover:border-[#526cff] hover:bg-[#526cff]/10"
                    >
                      <Info size={13} />
                    </button>
                    <div className="pointer-events-none absolute right-0 top-9 z-50 w-[330px] translate-y-1 rounded-[12px] border border-white/10 bg-[#081321] p-4 text-left opacity-0 shadow-2xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <p className="text-[12px] font-light leading-6 text-white/65">
                        {customerJourney.info}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[18px] border border-[#1677ff]/35 bg-[#05101c]">
            <div className="overflow-x-auto">
              <div className="min-w-[1180px]">
                <div className="grid grid-cols-[190px_repeat(5,minmax(0,1fr))]">
                  <div className="border-b border-r border-[#1677ff]/20 bg-[#06111d] p-5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/30">{customerJourney.stageLabel}</p>
                  </div>
                  {customerJourney.stages.map((stage) => {
                    const primary = stage.influence === "primary";
                    return (
                      <div
                        key={stage.number}
                        className={`relative border-b border-r border-[#1677ff]/20 px-5 pb-5 pt-6 text-center last:border-r-0 ${
                          primary ? "bg-[linear-gradient(180deg,rgba(20,104,255,.22),rgba(6,17,29,.92))]" : "bg-[#06111d]"
                        }`}
                      >
                        {primary && <div className="absolute inset-x-0 top-0 h-[2px] bg-[#1687ff]" />}
                        <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full border text-[13px] font-semibold ${
                          primary ? "border-[#1591ff] bg-[#116eff] text-white shadow-[0_0_24px_rgba(17,110,255,.35)]" : "border-[#1687ff]/65 bg-[#07111d] text-white/80"
                        }`}>
                          {stage.number}
                        </div>
                        <h3 className="mt-3 text-[17px] font-medium text-white">{stage.title}</h3>
                        <p className="mt-1 text-[11px] font-light text-white/45">{stage.subtitle}</p>
                      </div>
                    );
                  })}
                </div>

                {[
                  ["Customer Actions", "actions"],
                  ["Touchpoints", "touchpoints"],
                  ["Channels", "channels"],
                ].map(([label, key]) => (
                  <div key={label} className="grid grid-cols-[190px_repeat(5,minmax(0,1fr))]">
                    <div className="flex items-center border-b border-r border-[#1677ff]/20 bg-[#06111d] px-5 py-6">
                      <span className="text-[12px] font-medium text-white/80">{label}</span>
                    </div>
                    {customerJourney.stages.map((stage) => (
                      <div
                        key={`${stage.number}-${key}`}
                        className={`border-b border-r border-[#1677ff]/20 p-5 last:border-r-0 ${
                          stage.influence === "primary" ? "bg-[#0a3b78]/20" : "bg-[#05101c]"
                        }`}
                      >
                        <JourneyList items={stage[key as "actions" | "touchpoints" | "channels"] as string[]} />
                      </div>
                    ))}
                  </div>
                ))}

                <div className="grid grid-cols-[190px_repeat(5,minmax(0,1fr))]">
                  <div className="flex items-center border-r border-[#1677ff]/20 bg-[#06111d] px-5 py-6">
                    <span className="text-[12px] font-medium text-white/80">{customerJourney.keyMomentsLabel}</span>
                  </div>
                  {customerJourney.stages.map((stage) => {
                    const primary = stage.influence === "primary";
                    const supporting = stage.influence === "supporting";
                    return (
                      <div
                        key={`${stage.number}-moment`}
                        className={`relative border-r border-[#1677ff]/20 p-5 last:border-r-0 ${
                          primary
                            ? "bg-[linear-gradient(135deg,rgba(18,108,255,.50),rgba(7,45,91,.60))]"
                            : supporting
                              ? "bg-[#0a1b2d]"
                              : "bg-[#07131f]"
                        }`}
                      >
                        {primary && <div className="absolute inset-x-0 top-0 h-px bg-[#1687ff]" />}
                        <div className="flex min-h-[54px] items-center gap-3">
                          <Search size={21} className={primary ? "shrink-0 text-white" : "shrink-0 text-[#526cff]/60"} />
                          <p className={`text-[12px] font-light leading-5 ${primary ? "text-white/90" : "text-white/55"}`}>
                            {stage.moment}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 hidden grid-cols-[190px_repeat(5,minmax(0,1fr))] lg:grid">
            <div className="flex items-center">
              <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#526cff]/70">{customerJourney.influenceLabel}</span>
            </div>
            {customerJourney.stages.map((stage) => (
              <div key={`${stage.number}-influence`} className="flex items-center px-2">
                <div className={`h-[3px] w-full rounded-full ${
                  stage.influence === "primary"
                    ? "bg-[#1687ff] shadow-[0_0_12px_rgba(22,135,255,.35)]"
                    : stage.influence === "supporting"
                      ? "bg-[#1687ff]/35"
                      : "bg-[#1687ff]/15"
                }`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO FAQ */}
      <section className="border-b border-white/5 bg-[#030811] px-7 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1600px]">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#526cff]">
              {faq.eyebrow}
            </p>
            <h2 className="mt-4 text-[34px] font-light leading-[1.08] tracking-[-0.035em] sm:text-[42px]">
              {faq.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[720px] text-sm font-light leading-7 text-white/50 sm:text-[15px]">
              {faq.description}
            </p>
          </div>
          <div className="mt-12 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
            {faq.items.map((faq, index) => {
              const isOpen = openFaqs.includes(index);
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[16px] border transition-all duration-300 ${
                    isOpen ? "border-[#526cff]/45 bg-[#071321]" : "border-white/10 bg-[#06101a] hover:border-[#526cff]/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left"
                  >
                    <h3 className={`max-w-[340px] text-[17px] font-light leading-[1.45] transition-colors ${
                      isOpen ? "text-white" : "text-white/80"
                    }`}>
                      {faq.question}
                    </h3>
                    <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen ? "border-[#526cff] bg-[#526cff] text-white" : "border-white/15 text-[#526cff]"
                    }`}>
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}>
                    <div className="overflow-hidden">
                      <div className="border-t border-white/[0.07] px-6 pb-7 pt-5">
                        <p className="text-sm font-light leading-7 text-white/55">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceContactForm service={title} serviceSlug={serviceSlug} />
    </main>
  );
}

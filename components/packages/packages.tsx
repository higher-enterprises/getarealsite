"use client";

import { useMemo, useState } from "react";

type ExperienceId = "blueprint" | "predesigned" | "signature";

type Package = {
  id: string;
  name: string;
  pages: string;
  price: number;
  description: string;
  features: string[];
};

type Experience = {
  id: ExperienceId;
  name: string;
  buildType: string;
  tabDescription: string;
  packages: Package[];
};

const experiences: Experience[] = [
  {
    id: "blueprint",
    name: "Blueprint",
    buildType: "You Build",
    tabDescription:
      "We create the strategic blueprint, wireframes, and user experience. You bring it to life.",
    packages: [
      {
        id: "blueprint-launch",
        name: "Launch",
        pages: "1 Page Plan",
        price: 300,
        description:
          "A focused single-page plan for a new business, service, campaign, or local brand.",
        features: [
          "1 page wireframe",
          "Page structure",
          "User journey",
          "Calls-to-action",
          "Mobile layout guidance",
          "Content recommendations",
        ],
      },
      {
        id: "blueprint-growth",
        name: "Growth",
        pages: "5 Page Plan",
        price: 900,
        description:
          "A complete small-business roadmap with the essential pages needed to build trust and generate leads.",
        features: [
          "Up to 5 page wireframes",
          "Website architecture",
          "User journey planning",
          "Calls-to-action",
          "Mobile layout guidance",
          "Content recommendations",
          "Basic integration planning",
        ],
      },
      {
        id: "blueprint-professional",
        name: "Professional",
        pages: "10 Page Plan",
        price: 1800,
        description:
          "A larger website blueprint for established businesses with more services, content, and customer journeys.",
        features: [
          "Up to 10 page wireframes",
          "Advanced website architecture",
          "Multiple user journeys",
          "Conversion planning",
          "Mobile layout guidance",
          "Content recommendations",
          "CRM and form planning",
          "Integration roadmap",
        ],
      },
      {
        id: "blueprint-enterprise",
        name: "Enterprise",
        pages: "25 Page Plan",
        price: 3000,
        description:
          "A scalable digital roadmap for businesses that need deeper content, integrations, and long-term growth planning.",
        features: [
          "Up to 25 page wireframes",
          "Advanced information architecture",
          "Multiple audience journeys",
          "Conversion planning",
          "Content framework",
          "CRM and automation planning",
          "Integration roadmap",
          "Performance planning",
          "Strategic growth roadmap",
        ],
      },
    ],
  },
  {
    id: "predesigned",
    name: "Predesigned",
    buildType: "We Build Together",
    tabDescription:
      "Choose a professionally designed realsite and personalize it together with our team.",
    packages: [
      {
        id: "predesigned-launch",
        name: "Launch",
        pages: "1 Page Site",
        price: 800,
        description:
          "A polished single-page realsite personalized with your brand, content, imagery, and selected features.",
        features: [
          "1 professionally designed page",
          "Brand customization",
          "Color and typography updates",
          "Content placement",
          "Mobile responsive",
          "Basic SEO",
          "Contact form",
        ],
      },
      {
        id: "predesigned-growth",
        name: "Growth",
        pages: "5 Page Site",
        price: 1900,
        description:
          "A complete small-business realsite personalized around your brand, services, content, and customer goals.",
        features: [
          "Up to 5 professionally designed pages",
          "Brand customization",
          "Color and typography updates",
          "Content placement",
          "Mobile responsive",
          "Advanced SEO",
          "Lead capture forms",
          "Basic integrations",
        ],
      },
      {
        id: "predesigned-professional",
        name: "Professional",
        pages: "10 Page Site",
        price: 3600,
        description:
          "A more advanced realsite with expanded content, connected business tools, and deeper personalization.",
        features: [
          "Up to 10 professionally designed pages",
          "Brand customization",
          "Content collaboration",
          "Advanced SEO",
          "CRM integration",
          "Ecommerce ready",
          "Premium integrations",
          "Priority support",
        ],
      },
      {
        id: "predesigned-enterprise",
        name: "Enterprise",
        pages: "25 Page Site",
        price: 6000,
        description:
          "A scalable realsite for businesses with multiple audiences, services, locations, and operational needs.",
        features: [
          "Up to 25 professionally designed pages",
          "Advanced personalization",
          "Expanded content structure",
          "CRM and automation",
          "Ecommerce ready",
          "Premium integrations",
          "Priority support",
          "Performance optimization",
        ],
      },
    ],
  },
  {
    id: "signature",
    name: "Signature",
    buildType: "We Build For You",
    tabDescription:
      "We plan, design, and build every aspect of your realsite around the unique identity of your business.",
    packages: [
      {
        id: "signature-launch",
        name: "Launch",
        pages: "1 Page Site",
        price: 1500,
        description:
          "A unique single-page digital experience planned, designed, and built around your business and goals.",
        features: [
          "Custom strategy",
          "Custom UX planning",
          "Original visual design",
          "Professional development",
          "Content support",
          "Mobile responsive",
          "SEO setup",
        ],
      },
      {
        id: "signature-growth",
        name: "Growth",
        pages: "5 Page Site",
        price: 3500,
        description:
          "A fully planned and designed business realsite created around your identity, audience, and growth goals.",
        features: [
          "Digital roadmap",
          "Up to 5 unique pages",
          "Custom UX and design",
          "Content support",
          "Advanced SEO",
          "Lead capture",
          "Launch support",
        ],
      },
      {
        id: "signature-professional",
        name: "Professional",
        pages: "10 Page Site",
        price: 7000,
        description:
          "A complete digital experience for established businesses that need strategy, systems, and scalability.",
        features: [
          "Digital roadmap",
          "Up to 10 unique pages",
          "Custom UX architecture",
          "Original design system",
          "CRM integration",
          "Advanced SEO",
          "Ecommerce ready",
          "Premium integrations",
          "Priority support",
        ],
      },
      {
        id: "signature-enterprise",
        name: "Enterprise",
        pages: "25 Page Site",
        price: 15000,
        description:
          "A fully unique digital platform built around complex operations, audiences, systems, and long-term growth.",
        features: [
          "Advanced digital roadmap",
          "Up to 25 unique pages",
          "Custom UX architecture",
          "Original design system",
          "Business system integrations",
          "CRM and automation",
          "Ecommerce ready",
          "Performance optimization",
          "Ongoing strategic support",
        ],
      },
    ],
  },
];

export default function Packages() {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceId>("blueprint");

  const activeExperience = useMemo(() => {
    return (
      experiences.find(
        (experience) => experience.id === selectedExperience
      ) ?? experiences[0]
    );
  }, [selectedExperience]);

  return (
    <section className="relative overflow-hidden bg-[#050918] py-24 text-white lg:py-28">

      {/* Background office image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/digital-agency.png')",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.12,
        }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-[#050918]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050918]/90 via-transparent to-[#050918]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050918] via-transparent to-[#050918]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-light leading-[1.08] tracking-tight lg:text-6xl">
            Choose how you want to
            <br />
            build your realsite
          </h2>
        </div>

        <div className="mt-16 border-b border-white/10">
          <div
            className="grid grid-cols-1 sm:grid-cols-3"
            role="tablist"
            aria-label="Choose your build experience"
          >
            {experiences.map((experience) => {
              const isActive = experience.id === selectedExperience;

              return (
                <button
                  key={experience.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${experience.id}-packages`}
                  onClick={() => setSelectedExperience(experience.id)}
                  className={`relative min-h-[150px] px-5 py-7 text-center transition-colors duration-300 sm:px-8 ${
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white/75"
                  }`}
                >
                  <span
                    className={`block text-[11px] font-medium uppercase tracking-[0.35em] ${
                      isActive ? "text-indigo-300" : "text-white/35"
                    }`}
                  >
                    {experience.buildType}
                  </span>

                  <span className="mt-3 block text-2xl font-light tracking-tight">
                    {experience.name}
                  </span>

                  <span
                    className={`mx-auto mt-4 block max-w-sm text-sm leading-6 ${
                      isActive ? "text-white/70" : "text-white/35"
                    }`}
                  >
                    {experience.tabDescription}
                  </span>

                  <span
                    className={`absolute inset-x-0 -bottom-px mx-auto h-px transition-all duration-300 ${
                      isActive
                        ? "w-full bg-indigo-500 shadow-[0_0_18px_rgba(99,102,241,0.8)]"
                        : "w-0 bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div
          id={`${activeExperience.id}-packages`}
          key={activeExperience.id}
          role="tabpanel"
          className="grid border-l border-white/10 md:grid-cols-2 xl:grid-cols-4"
        >
          {activeExperience.packages.map((plan, index) => {
            const isFeatured = index === 1;

            return (
              <article
                key={plan.id}
                className={`flex min-h-[640px] flex-col border-b border-r border-white/10 p-7 transition-colors duration-300 lg:p-8 ${
                  isFeatured
                    ? "bg-indigo-500/[0.07]"
                    : "bg-white/[0.01] hover:bg-white/[0.025]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-light tracking-tight">
                        {plan.name}
                      </h3>

                      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-indigo-300">
                        {plan.pages}
                      </p>
                    </div>

                    {isFeatured && (
                      <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-indigo-300">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="mt-6 min-h-[96px] text-sm leading-6 text-white/55">
                    {plan.description}
                  </p>

                  <div className="mt-7 border-t border-white/10 pt-6">
                    <div className="flex items-end gap-2">
                      <span className="text-5xl font-light tracking-tight">
                        ${plan.price}
                      </span>

                      <span className="pb-1 text-sm text-white/45">/mo</span>
                    </div>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.32em] text-white/35">
                      Paid monthly
                    </p>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm leading-6 text-white/65"
                      >
                        <span className="mt-[2px] text-indigo-300">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className={`mt-auto inline-flex w-full items-center justify-center border px-5 py-4 text-xs uppercase tracking-[0.28em] transition ${
                    isFeatured
                      ? "border-indigo-500 bg-indigo-500/15 text-white hover:bg-indigo-500/25"
                      : "border-white/10 text-white/70 hover:border-indigo-500/50 hover:text-white"
                  }`}
                >
                  Select {plan.name} →
                </button>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-white/35">
          All plans include secure hosting, SSL certificates, and ongoing
          support.
        </p>
      </div>
      </div>
    </section>
  );
}
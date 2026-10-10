"use client";

import { useState } from "react";

const experiences = [
  {
    id: "blueprint",
    title: "Blueprint",
    subtitle: "Do You",
    icon: "▦",
    description: "Strategic foundation and tools for those who build it themselves.",
    packages: [
      { name: "Starter", plan: "1 PAGE PLAN", price: "$49", features: ["1 Custom Page", "Mobile Responsive", "Basic SEO", "Contact Form", "Hosting & SSL", "Realsite Subdomain"] },
      { name: "Complete", plan: "5 PAGE PLAN", price: "$129", features: ["Up to 5 Custom Pages", "Mobile Responsive", "Advanced SEO", "Contact Form", "Blog / News Section", "Hosting & SSL", "Realsite Subdomain", "Basic Integrations"] },
      { name: "Professional", plan: "10 PAGE PLAN", price: "$249", features: ["Up to 10 Custom Pages", "Mobile Responsive", "Advanced SEO", "Contact Forms + CRM", "Blog / News Section", "Ecommerce Ready", "Hosting & SSL", "Premium Integrations", "Priority Support"] },
      { name: "Enterprise", plan: "25 PAGE PLAN", price: "$549", features: ["Up to 25 Custom Pages", "Mobile Responsive", "Advanced SEO", "Contact Forms + CRM", "Blog / News Section", "Ecommerce Ready", "Hosting & SSL", "Premium Integrations", "Priority Support", "Performance Optimization"] },
    ],
  },
  {
    id: "signature",
    title: "Signature",
    subtitle: "Do With You",
    icon: "〽",
    description: "Collaborate with our team to bring your vision to life.",
    packages: [
      { name: "Starter", plan: "1 PAGE PLAN", price: "$249", features: ["1 Custom Page", "Guided Strategy", "Mobile Responsive", "Basic SEO", "Contact Form", "Hosting & SSL"] },
      { name: "Complete", plan: "5 PAGE PLAN", price: "$599", features: ["Up to 5 Custom Pages", "Brand Direction", "Mobile Responsive", "Advanced SEO", "Contact Form", "Blog / News Section", "Hosting & SSL", "Basic Integrations"] },
      { name: "Professional", plan: "10 PAGE PLAN", price: "$999", features: ["Up to 10 Custom Pages", "Brand Direction", "Mobile Responsive", "Advanced SEO", "Contact Forms + CRM", "Blog / News Section", "Ecommerce Ready", "Premium Integrations", "Priority Support"] },
      { name: "Enterprise", plan: "25 PAGE PLAN", price: "$1,999", features: ["Up to 25 Custom Pages", "Brand Direction", "Mobile Responsive", "Advanced SEO", "Contact Forms + CRM", "Blog / News Section", "Ecommerce Ready", "Premium Integrations", "Priority Support", "Performance Optimization"] },
    ],
  },
  {
    id: "custom",
    title: "Custom",
    subtitle: "Do For You",
    icon: "☆",
    description: "A fully custom realsite built exclusively for your brand.",
    packages: [
      { name: "Starter", plan: "1 PAGE PLAN", price: "$799", features: ["1 Custom Page", "Custom Design", "Mobile Responsive", "Basic SEO", "Contact Form", "Hosting & SSL"] },
      { name: "Complete", plan: "5 PAGE PLAN", price: "$2,499", features: ["Up to 5 Custom Pages", "Custom Design System", "Mobile Responsive", "Advanced SEO", "Contact Form", "Blog / News Section", "Hosting & SSL", "Basic Integrations"] },
      { name: "Professional", plan: "10 PAGE PLAN", price: "$4,999", features: ["Up to 10 Custom Pages", "Custom Design System", "Mobile Responsive", "Advanced SEO", "Contact Forms + CRM", "Blog / News Section", "Ecommerce Ready", "Premium Integrations", "Priority Support"] },
      { name: "Enterprise", plan: "25 PAGE PLAN", price: "Custom", features: ["Up to 25 Custom Pages", "Custom Design System", "Mobile Responsive", "Advanced SEO", "Contact Forms + CRM", "Blog / News Section", "Ecommerce Ready", "Premium Integrations", "Priority Support", "Performance Optimization"] },
    ],
  },
] as const;

const basicIntelligence = {
  id: "basic",
  title: "Basic",
  subtitle: "AI Ready",
  shortLabel: "Included AI",
  icon: "✦",
  price: "Included",
  description:
    "Every RealSite starts AI-ready with smarter website content, cleaner SEO structure, and a foundation that can expand into customer-facing AI later.",
  features: [
    "AI-Assisted Website Copy",
    "AI SEO Titles & Descriptions",
    "AI Image Prompt Direction",
    "Content Refinement",
    "AI-Ready Site Structure",
    "Future AI Upgrade Ready",
  ],
};

const realIntelligence = {
  Starter: [
    basicIntelligence,
    {
      id: "assist",
      title: "Assist",
      subtitle: "AI Receptionist",
      shortLabel: "Receptionist",
      icon: "◌",
      price: "$19",
      description:
        "Give your RealSite a simple customer-facing assistant that can answer common questions and help capture leads.",
      features: [
        "AI Chat Assistant",
        "FAQ & Knowledge Base",
        "Contact Assistance",
        "Lead Capture",
        "Appointment Assistance",
        "Business Information",
      ],
    },
    {
      id: "engage",
      title: "Engage",
      subtitle: "AI Sales Assistant",
      shortLabel: "Sales AI",
      icon: "◇",
      price: "$49",
      description:
        "Help visitors find the right service, product, appointment, or next step with a smarter sales assistant.",
      features: [
        "Everything in Assist",
        "Product Recommendations",
        "Quote Generation",
        "Smart Search",
        "Guided Shopping",
        "Calendar Booking",
      ],
    },
    {
      id: "automate",
      title: "Automate",
      subtitle: "AI Operations",
      shortLabel: "Operations",
      icon: "◎",
      price: "$99",
      description:
        "Connect your RealSite to workflows that reduce manual follow-up and move leads into the right systems.",
      features: [
        "Everything in Engage",
        "CRM Integration",
        "Workflow Automation",
        "Email Automation",
        "Lead Routing",
        "Notifications",
      ],
    },
    {
      id: "orchestrate",
      title: "Orchestrate",
      subtitle: "AI Workforce",
      shortLabel: "Workforce",
      icon: "◫",
      price: "$249",
      description:
        "Coordinate multiple AI roles across sales, marketing, operations, and reporting as your business grows.",
      features: [
        "Everything in Automate",
        "Multi-Agent AI",
        "Sales Agent",
        "Marketing Agent",
        "Operations Agent",
        "Executive Dashboard",
      ],
    },
  ],

  Complete: [
    basicIntelligence,
    {
      id: "assist",
      title: "Assist",
      subtitle: "AI Receptionist",
      shortLabel: "Receptionist",
      icon: "◌",
      price: "$39",
      description:
        "Add a more capable AI receptionist for lead capture, scheduling support, and business information.",
      features: [
        "AI Chat Assistant",
        "Knowledge Base",
        "Lead Capture",
        "Appointment Booking",
        "Business Information",
        "Email Capture",
      ],
    },
    {
      id: "engage",
      title: "Engage",
      subtitle: "AI Sales Assistant",
      shortLabel: "Sales AI",
      icon: "◇",
      price: "$79",
      description:
        "Guide visitors through services, products, quotes, appointments, and customer qualification.",
      features: [
        "Everything in Assist",
        "Quote Builder",
        "Product Recommendations",
        "Guided Shopping",
        "Calendar Booking",
        "Customer Qualification",
      ],
    },
    {
      id: "automate",
      title: "Automate",
      subtitle: "AI Operations",
      shortLabel: "Operations",
      icon: "◎",
      price: "$149",
      description:
        "Automate operational tasks such as document creation, tickets, CRM updates, and notifications.",
      features: [
        "Everything in Engage",
        "CRM Integration",
        "Workflow Automation",
        "Document Generation",
        "Support Tickets",
        "Notifications",
      ],
    },
    {
      id: "orchestrate",
      title: "Orchestrate",
      subtitle: "AI Workforce",
      shortLabel: "Workforce",
      icon: "◫",
      price: "$349",
      description:
        "Deploy coordinated AI roles for sales, marketing, operations, and executive visibility.",
      features: [
        "Everything in Automate",
        "Multi-Agent AI",
        "Sales Agent",
        "Marketing Agent",
        "Operations Agent",
        "Executive Dashboard",
      ],
    },
  ],

  Professional: [
    basicIntelligence,
    {
      id: "assist",
      title: "Assist",
      subtitle: "AI Receptionist",
      shortLabel: "Receptionist",
      icon: "◌",
      price: "$59",
      description:
        "Add a professional AI receptionist that supports visitors, captures leads, and helps route inquiries.",
      features: [
        "AI Receptionist",
        "Knowledge Base",
        "Lead Capture",
        "Scheduling",
        "Email Capture",
        "Smart Search",
      ],
    },
    {
      id: "engage",
      title: "Engage",
      subtitle: "AI Sales Assistant",
      shortLabel: "Sales AI",
      icon: "◇",
      price: "$129",
      description:
        "Create a sales-aware RealSite that recommends, qualifies, quotes, and books the next action.",
      features: [
        "Everything in Assist",
        "Sales Recommendations",
        "Quotes",
        "Calendar Booking",
        "Customer Qualification",
        "Shopping Assistant",
      ],
    },
    {
      id: "automate",
      title: "Automate",
      subtitle: "AI Operations",
      shortLabel: "Operations",
      icon: "◎",
      price: "$249",
      description:
        "Build operational intelligence into your RealSite with automation, CRM flows, documents, and tickets.",
      features: [
        "Everything in Engage",
        "CRM Integration",
        "Automation",
        "Document Generation",
        "Notifications",
        "Ticket Creation",
      ],
    },
    {
      id: "orchestrate",
      title: "Orchestrate",
      subtitle: "AI Workforce",
      shortLabel: "Workforce",
      icon: "◫",
      price: "$499",
      description:
        "Use multiple AI agents to help coordinate sales, marketing, support, and operations.",
      features: [
        "Everything in Automate",
        "Multiple AI Agents",
        "Sales",
        "Marketing",
        "Support",
        "Operations",
      ],
    },
  ],

  Enterprise: [
    basicIntelligence,
    {
      id: "assist",
      title: "Assist",
      subtitle: "AI Receptionist",
      shortLabel: "Receptionist",
      icon: "◌",
      price: "$99",
      description:
        "Enterprise-level AI reception with expanded knowledge, high-volume chat capacity, and smart lead capture.",
      features: [
        "Unlimited Knowledge",
        "Unlimited Chats",
        "Scheduling",
        "Lead Capture",
        "Email Capture",
        "Business Info",
      ],
    },
    {
      id: "engage",
      title: "Engage",
      subtitle: "AI Sales Assistant",
      shortLabel: "Sales AI",
      icon: "◇",
      price: "$199",
      description:
        "Advanced AI sales assistance for recommendations, qualification, booking, and shopping experiences.",
      features: [
        "Everything in Assist",
        "Sales Automation",
        "Recommendations",
        "Calendar",
        "Qualification",
        "Smart Shopping",
      ],
    },
    {
      id: "automate",
      title: "Automate",
      subtitle: "AI Operations",
      shortLabel: "Operations",
      icon: "◎",
      price: "$399",
      description:
        "Advanced operational AI for connected systems, documents, CRM flows, and business notifications.",
      features: [
        "Everything in Engage",
        "Advanced CRM",
        "Automation",
        "Notifications",
        "Documents",
        "Integrations",
      ],
    },
    {
      id: "orchestrate",
      title: "Orchestrate",
      subtitle: "AI Workforce",
      shortLabel: "Workforce",
      icon: "◫",
      price: "$799",
      description:
        "A coordinated AI workforce with multiple agents, executive visibility, and cross-system intelligence.",
      features: [
        "Everything in Automate",
        "Unlimited AI Agents",
        "Executive Dashboard",
        "Cross-System AI",
        "Learning",
        "Priority Support",
      ],
    },
  ],
} as const;

function getMonthlyPrice(price: string) {
  if (price === "Included" || price === "Custom") {
    return 0;
  }

  return Number(price.replace(/[$,]/g, ""));
}

export default function Experience() {
  const [selectedId, setSelectedId] = useState("blueprint");
  const [selectedPackage, setSelectedPackage] = useState("Starter");
  const [selectedIntelligence, setSelectedIntelligence] = useState("basic");

  const selectedExperience =
    experiences.find((experience) => experience.id === selectedId) ??
    experiences[0];

  const selectedPackageItem =
    selectedExperience.packages.find(
      (packageItem) => packageItem.name === selectedPackage
    ) ?? selectedExperience.packages[0];

  const intelligencePackages =
    realIntelligence[
      selectedPackage as keyof typeof realIntelligence
    ];

  const selectedIntelligenceItem =
    intelligencePackages.find((item) => item.id === selectedIntelligence) ??
    intelligencePackages[0];

  const websiteMonthlyPrice = getMonthlyPrice(selectedPackageItem.price);
  const intelligenceMonthlyPrice = getMonthlyPrice(selectedIntelligenceItem.price);
  const totalMonthlyPrice = websiteMonthlyPrice + intelligenceMonthlyPrice;

  return (
    <section className="bg-[#050918] px-8 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[.35em] text-indigo-300">
          Our Packages
        </p>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_.95fr]">
          <h2 className="max-w-xl text-5xl font-light leading-tight tracking-tight lg:text-6xl">
            Choose your realsite build experience
          </h2>

          <p className="max-w-xl text-lg font-light leading-8 text-white/80">
            From a single page to a full digital presence, our packages are
            built to scale with your vision. Every realsite is custom-built.
            You grow, we grow.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div>
              <p className="text-sm uppercase tracking-[.35em] text-purple-300">
                Step 1: Choose your build experience
              </p>

              <div className="mt-4 grid gap-5 lg:grid-cols-3">
                {experiences.map((experience) => {
                  const isSelected = selectedId === experience.id;

                  return (
                    <button
                      key={experience.id}
                      type="button"
                      onClick={() => {
                        setSelectedId(experience.id);
                        setSelectedPackage("Starter");
                        setSelectedIntelligence("basic");
                      }}
                      className={`relative rounded-lg border p-8 text-left transition ${
                        isSelected
                          ? "border-purple-500 bg-purple-500/5"
                          : "border-white/15 bg-white/[0.02] hover:border-purple-400"
                      }`}
                    >
                      <div className="absolute left-1/2 top-5 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border border-white/80">
                        {isSelected && (
                          <div className="h-3 w-3 rounded-full bg-purple-400" />
                        )}
                      </div>

                      <div className="mt-8 flex items-center gap-8">
                        <div className="text-5xl font-light text-purple-400">
                          {experience.icon}
                        </div>

                        <div>
                          <h3 className="text-2xl font-light tracking-tight">
                            {experience.title}
                          </h3>

                          <p className="mt-1 text-purple-300">
                            {experience.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="mt-6 max-w-xs text-lg font-light leading-8 text-white/80">
                        {experience.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-sm uppercase tracking-[.35em] text-purple-300">
                Step 2: Pick your starting point
              </p>

              <p className="mt-2 text-white/80">
                Package options update based on your selected build experience.
              </p>

              <div className="mt-5 grid gap-6 lg:grid-cols-4">
                {selectedExperience.packages.map((packageItem) => {
                  const isSelected = selectedPackage === packageItem.name;

                  return (
                    <div
                      key={`${selectedExperience.id}-${packageItem.name}`}
                      onClick={() => setSelectedPackage(packageItem.name)}
                      className={`relative flex min-h-[540px] cursor-pointer flex-col rounded-lg border p-7 transition-all ${
                        isSelected
                          ? "border-purple-500 bg-purple-500/5"
                          : "border-white/15 bg-white/[0.02] hover:border-purple-400"
                      }`}
                    >
                      <div className="absolute right-6 top-6 grid h-6 w-6 place-items-center rounded-full border border-white/70">
                        {isSelected && (
                          <div className="h-3 w-3 rounded-full bg-purple-400" />
                        )}
                      </div>

                      <h3 className="text-3xl font-light tracking-tight">
                        {packageItem.name}
                      </h3>

                      <p className="mt-3 text-sm uppercase tracking-[.35em] text-purple-300">
                        {packageItem.plan}
                      </p>

                      <div className="my-5 border-t border-white/10" />

                      <div>
                        <span className="text-4xl font-light">
                          {packageItem.price}
                        </span>

                        {packageItem.price !== "Custom" && (
                          <span className="ml-2 text-white/60">/mo</span>
                        )}
                      </div>

                      <p className="mt-3 text-xs uppercase tracking-[.35em] text-white/60">
                        Paid Monthly
                      </p>

                      <ul className="mt-6 space-y-3">
                        {packageItem.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex gap-3 text-sm leading-6 text-white/85"
                          >
                            <span className="text-purple-300">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-8">
                        <div
                          className={`rounded-md border py-3 text-center text-sm uppercase tracking-[.25em] transition ${
                            isSelected
                              ? "border-purple-500 bg-purple-500/10 text-white"
                              : "border-white/10 text-white/70"
                          }`}
                        >
                          {isSelected
                            ? "Selected"
                            : `Select ${packageItem.name}`}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-center text-sm text-white/50">
                ♢ All plans include secure hosting, SSL certificates, and ongoing support.
              </p>

              <div className="mt-16 border-t border-white/10 pt-8">
                <p className="text-sm uppercase tracking-[.35em] text-indigo-300">
                  Step 3: Power your RealSite with AI
                </p>

                <p className="mt-2 text-white/80">
                  Real Intelligence updates automatically based on your selected starting point.
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-5">
                  {intelligencePackages.map((item) => {
                    const isSelected = selectedIntelligence === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedIntelligence(item.id)}
                        className={`relative min-h-[170px] rounded-lg border p-5 text-left transition-all ${
                          isSelected
                            ? "border-indigo-500 bg-indigo-500/10"
                            : "border-white/15 bg-white/[0.02] hover:border-indigo-400"
                        }`}
                      >
                        <div className="absolute right-4 top-4 grid h-5 w-5 place-items-center rounded-full border border-white/60">
                          {isSelected && (
                            <div className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
                          )}
                        </div>

                        <div className="text-3xl text-indigo-300">
                          {item.icon}
                        </div>

                        <h3 className="mt-5 text-2xl font-light tracking-tight">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-indigo-300">
                          {item.shortLabel}
                        </p>

                        <p className="mt-4 text-sm text-white/70">
                          {item.price === "Included"
                            ? "Included"
                            : `+${item.price}/mo`}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-lg border border-indigo-500/25 bg-indigo-500/[0.04] p-8">
                  <div className="grid gap-8 lg:grid-cols-[.75fr_1fr]">
                    <div>
                      <p className="text-sm uppercase tracking-[.35em] text-indigo-300">
                        Real Intelligence
                      </p>

                      <h3 className="mt-4 text-4xl font-light tracking-tight">
                        {selectedIntelligenceItem.title}
                      </h3>

                      <p className="mt-2 text-lg text-indigo-200">
                        {selectedIntelligenceItem.subtitle}
                      </p>

                      <p className="mt-6 text-lg font-light leading-8 text-white/75">
                        {selectedIntelligenceItem.description}
                      </p>

                      <div className="mt-8">
                        <span className="text-4xl font-light">
                          {selectedIntelligenceItem.price}
                        </span>

                        {selectedIntelligenceItem.price !== "Included" && (
                          <span className="ml-2 text-white/60">/mo</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[.35em] text-white/50">
                        Capabilities
                      </p>

                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {selectedIntelligenceItem.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex gap-3 text-sm leading-6 text-white/85"
                          >
                            <span className="text-indigo-300">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-center text-sm text-white/50">
                  ♢ Basic AI readiness is included with every RealSite. Upgrade when you need customer-facing intelligence.
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[.35em] text-indigo-300">
                Your RealSite
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[.28em] text-white/40">
                    Build Experience
                  </p>
                  <p className="mt-2 text-xl font-light">
                    {selectedExperience.title}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[.28em] text-white/40">
                    Starting Point
                  </p>
                  <p className="mt-2 text-xl font-light">
                    {selectedPackageItem.name}
                  </p>
                  <p className="mt-1 text-sm text-purple-300">
                    {selectedPackageItem.plan}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[.28em] text-white/40">
                    Real Intelligence
                  </p>
                  <p className="mt-2 text-xl font-light">
                    {selectedIntelligenceItem.title}
                  </p>
                  <p className="mt-1 text-sm text-indigo-300">
                    {selectedIntelligenceItem.subtitle}
                  </p>
                </div>
              </div>

              <div className="my-7 border-t border-white/10" />

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-white/60">Website</span>
                  <span>{selectedPackageItem.price}/mo</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-white/60">Real Intelligence</span>
                  <span>
                    {selectedIntelligenceItem.price === "Included"
                      ? "Included"
                      : `${selectedIntelligenceItem.price}/mo`}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-white/60">Hosting + SSL</span>
                  <span>Included</span>
                </div>
              </div>

              <div className="my-7 border-t border-white/10" />

              <div className="flex items-end justify-between gap-6">
                <span className="text-sm uppercase tracking-[.28em] text-white/50">
                  Monthly
                </span>

                <div className="text-right">
                  {selectedPackageItem.price === "Custom" ? (
                    <span className="text-3xl font-light">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-light">
                        ${totalMonthlyPrice.toLocaleString()}
                      </span>
                      <span className="ml-2 text-white/60">/mo</span>
                    </>
                  )}
                </div>
              </div>

              <button className="mt-7 w-full rounded-lg border border-indigo-400/40 bg-indigo-500/10 px-5 py-4 text-sm uppercase tracking-[.25em] text-white transition hover:bg-indigo-500/20">
                Continue
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

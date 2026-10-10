"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Code2,
  ShoppingCart,
  Boxes,
  Sparkles,
  ShieldCheck,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

type ServiceTab = {
  id: string;
  label: string;
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  href: string;
  linkLabel?: string;
  icon: LucideIcon;
};

const serviceTabs: ServiceTab[] = [
  {
    id: "plan",
    label: "Strategic Planning",
    eyebrow: "PLAN",
    title: "Build with a clear digital strategy.",
    description:
      "Define your goals, audience, positioning, customer journey and digital roadmap before investing in execution.",
    image: "/images/locations/services/plan.jpg",
    href: "/plan",
    linkLabel: "Learn More",
    icon: BarChart3,
  },
  {
    id: "build",
    label: "Website Design & Development",
    eyebrow: "BUILD",
    title: "Digital experiences built around your business.",
    description:
      "Custom websites designed and developed around real business goals, customer behavior and measurable outcomes.",
    image: "/images/locations/services/build.jpg",
    href: "/build",
    linkLabel: "Learn More",
    icon: Code2,
  },
  {
    id: "purchase",
    label: "Purchase",
    eyebrow: "PURCHASE",
    title: "Start with an already-built digital asset.",
    description:
      "Purchase an existing RealSite and adapt it around your business, identity and goals.",
    image: "/images/locations/services/purchase.jpg",
    href: "/purchase",
    linkLabel: "Learn More",
    icon: ShoppingCart,
  },
  {
    id: "acquire",
    label: "Digital Acquisition",
    eyebrow: "ACQUIRE",
    title: "Acquire digital businesses and assets.",
    description:
      "Identify and evaluate digital properties that can expand your reach, capabilities or market position.",
    image: "/images/locations/services/acquire.jpg",
    href: "/acquire",
    linkLabel: "Learn More",
    icon: Boxes,
  },
  {
    id: "expand",
    label: "Digital Expansion",
    eyebrow: "EXPAND",
    title: "Add more capability to your digital business.",
    description:
      "Expand with commerce, automation, integrations, applications, AI and other digital systems.",
    image: "/images/locations/services/expand.jpg",
    href: "/expand",
    linkLabel: "Learn More",
    icon: Sparkles,
  },
  {
    id: "manage",
    label: "Management & Assurance",
    eyebrow: "MANAGE",
    title: "Keep your digital presence working.",
    description:
      "Ongoing support, updates, optimization and digital assurance after your initial launch.",
    image: "/images/locations/services/manage.jpg",
    href: "/manage",
    linkLabel: "Learn More",
    icon: ShieldCheck,
  },
  {
    id: "reach",
    label: "Marketing & Reach",
    eyebrow: "REACH",
    title: "Reach more of the right customers.",
    description:
      "Digital marketing, content, search and campaigns designed to increase visibility and customer acquisition.",
    image: "/images/locations/services/reach.jpg",
    href: "/reach",
    linkLabel: "Learn More",
    icon: Megaphone,
  },
];

export default function AgencyServices() {
  const [activeId, setActiveId] = useState(serviceTabs[0].id);

  const activeService =
    serviceTabs.find((service) => service.id === activeId) ??
    serviceTabs[0];

  return (
    <section className="border-t border-white/[0.07] bg-[#050505] px-8 py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 align">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#6d63ff]">
            Our Services
          </p>

            <h2 className="mt-4 max-w-[720px] text-[40px] font-light leading-[1.1] tracking-[-0.04em] text-white md:text-[48px]">
                Everything you need to build,
                <br />
                manage and{" "}
                <span className="text-[#695cff]">grow online.</span>
            </h2>
        </div>

        <div className="grid overflow-hidden border-y border-white/10 lg:grid-cols-[430px_1fr]">
          {/* LEFT TABS */}

          <div className="border-white/10 lg:border-r">
            {serviceTabs.map((service) => {
              const Icon = service.icon;
              const active = service.id === activeId;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                  className={`
                    group
                    flex
                    w-full
                    items-center
                    gap-5
                    border-b
                    border-white/10
                    px-6
                    py-6
                    text-left
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-[#101223] text-white"
                        : "bg-transparent text-white/45 hover:bg-white/[0.025] hover:text-white"
                    }
                  `}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className={
                      active
                        ? "text-[#695cff]"
                        : "text-white/25 transition group-hover:text-white/55"
                    }
                  />

                  <span className="text-[15px] font-medium">
                    {service.label}
                  </span>

                  <ArrowRight
                    size={15}
                    className={`
                      ml-auto
                      transition
                      ${
                        active
                          ? "translate-x-0 text-[#695cff] opacity-100"
                          : "-translate-x-2 text-white/25 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}

          <div className="relative min-h-[600px] overflow-hidden">
            <img
              key={activeService.image}
              src={activeService.image}
              alt={activeService.title}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.9)_30%,rgba(5,5,5,.42)_58%,rgba(5,5,5,.12)_100%)]" />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(5,5,5,.82)_100%)]" />

            <div className="relative z-10 flex min-h-[600px] max-w-[620px] flex-col justify-end p-8 md:p-12 lg:p-16">
              {activeService.eyebrow && (
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#756aff]">
                  {activeService.eyebrow}
                </p>
              )}

              <h3 className="mt-5 text-[36px] font-light leading-[1.15] tracking-[-0.03em] text-white md:text-[44px]">
                {activeService.title}
              </h3>

              <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-white/58">
                {activeService.description}
              </p>

              <Link
                href={activeService.href}
                className="mt-8 flex w-fit items-center gap-5 border-b border-white/40 pb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition hover:border-[#695cff] hover:text-[#8077ff]"
              >
                {activeService.linkLabel ?? "Learn More"}

                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
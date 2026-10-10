"use client";

import {
  Zap,
  ShieldCheck,
  Gauge,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Seamless Integration",
    text: "Everything works together out of the box.",
    color: "text-blue-400",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    text: "Enterprise-grade security and uptime you can trust.",
    color: "text-violet-400",
  },
  {
    icon: Gauge,
    title: "Built to Scale",
    text: "Add what you need now and expand anytime.",
    color: "text-green-400",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    text: "Real humans. Real help. Whenever you need it.",
    color: "text-orange-400",
  },
];

export default function ExpandFeatureBar() {
  return (
    <div className="mt-24 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur">

      <div className="grid lg:grid-cols-4">

        {features.map((feature, index) => {

          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className={`flex gap-5 p-8 ${
                index !== features.length - 1
                  ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              <div>

                <Icon
                  size={36}
                  className={feature.color}
                />

              </div>

              <div>

                <h3 className="text-xl font-light tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-white/60">
                  {feature.text}
                </p>

              </div>

            </div>
          );

        })}

      </div>

    </div>
  );
}
"use client";

import { useState } from "react";
import type { ExpandSystem } from "./types";

type ExpandNodeProps = {
  system: ExpandSystem;
};

export default function ExpandNode({ system }: ExpandNodeProps) {
  const [active, setActive] = useState(false);

  const Icon = system.icon;

  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="group flex cursor-pointer items-center gap-5">
        <div
          className={`grid h-24 w-24 place-items-center rounded-full border bg-[#070b1d] shadow-2xl transition duration-300 group-hover:-translate-y-3 group-hover:scale-110 ${system.color}`}
        >
          <Icon size={42} />
        </div>

        <div className="max-w-[220px]">
          <h3 className="text-sm font-medium uppercase tracking-[.22em] text-white">
            {system.title}
          </h3>

          <p className="mt-3 text-base font-light leading-7 text-white/65">
            {system.short}
          </p>
        </div>
      </div>

      {active && (
        <div className="absolute left-0 top-full z-30 mt-4 w-[300px] rounded-2xl border border-white/10 bg-[#080d22]/95 p-5 shadow-2xl backdrop-blur-xl">
          <p className="text-sm font-medium uppercase tracking-[.22em] text-indigo-300">
            {system.title}
          </p>

          <p className="mt-3 text-sm leading-7 text-white/70">
            {system.description}
          </p>
        </div>
      )}
    </div>
  );
}
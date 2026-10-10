"use client";

import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="mt-24 overflow-hidden rounded-2xl border border-white/10 bg-[#070b1d]">

      <div className="grid items-center gap-10 p-10 lg:grid-cols-[1fr_auto]">

        {/* Left */}

        <div className="flex items-center gap-6">

          <div className="grid h-20 w-20 place-items-center rounded-full bg-indigo-600/10">

            <Mail
              size={36}
              className="text-indigo-400"
            />

          </div>

          <div>

            <h3 className="text-4xl font-light tracking-tight">
              Stay ahead of the curve.
            </h3>

            <p className="mt-3 max-w-xl text-lg leading-8 text-white/60">
              Subscribe to receive strategies,
              product updates, case studies,
              and practical digital business insights.
            </p>

          </div>

        </div>

        {/* Right */}

        <form className="flex w-full max-w-[700px] gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-lg outline-none transition focus:border-indigo-500"
          />

          <button
            type="submit"
            className="rounded-xl bg-indigo-600 px-10 py-5 text-lg font-medium transition hover:bg-indigo-500"
          >
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/navigation/navigation";
import type { ExpandServicePageData } from "./expand-service-data";

export default function ExpandServicePage({ service }: { service: ExpandServicePageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#030811] text-white">
      <section className="relative min-h-[720px] overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[#030811]" />
        <div className="absolute -left-[12%] top-[8%] h-[720px] w-[720px] rounded-full bg-[#3048ff]/10 blur-[180px]" />
        <div className="absolute right-[-8%] top-[8%] h-[680px] w-[680px] rounded-full bg-[#526cff]/10 blur-[190px]" />
        <div className="absolute inset-x-0 top-0 z-50"><Header /></div>

        <div className="relative z-10 mx-auto grid min-h-[720px] max-w-[1500px] items-center gap-16 px-8 pb-16 pt-32 lg:grid-cols-[.95fr_1.05fr] lg:px-14">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.34em] text-[#526cff]">
              Expand › {service.categoryTitle}
            </p>
            <h1 className="mt-6 text-5xl font-light tracking-[-.05em] sm:text-6xl lg:text-[70px]">{service.title}</h1>
            <h2 className="mt-4 max-w-2xl text-3xl font-light tracking-[-.04em] text-[#526cff] sm:text-4xl">{service.heroAccent}</h2>
            <p className="mt-7 max-w-xl text-base font-light leading-8 text-white/55">{service.summary} {service.description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-md bg-[#3048ff] px-7 py-4 text-[10px] font-semibold uppercase tracking-[.2em] transition hover:bg-[#526cff]">Get Started →</a>
              <a href="#contact" className="rounded-md border border-white/15 px-7 py-4 text-[10px] font-semibold uppercase tracking-[.2em] text-white/75 transition hover:border-white/35 hover:text-white">Book a Strategy Call</a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#3048ff]/10 blur-[100px]" />
            <div className="relative overflow-hidden rounded-xl border border-[#526cff]/20 bg-[#07111f] p-5">
              <img src={service.categoryImage} alt="" className="aspect-[16/10] w-full object-cover opacity-90" />
              <div className="pointer-events-none absolute inset-5 bg-gradient-to-t from-[#030811]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] px-8 py-24 lg:px-14">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.34em] text-[#526cff]">Why It Matters</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-light tracking-[-.045em] sm:text-5xl">{service.whyTitle}</h2>
              <p className="mt-6 max-w-2xl text-base font-light leading-8 text-white/50">{service.description}</p>
            </div>
            <div className="rounded-xl border border-[#526cff]/25 bg-[#07111f] p-8">
              <p className="text-[9px] uppercase tracking-[.3em] text-white/35">Service / Connected Capability</p>
              <div className="mt-5 text-5xl font-light text-[#526cff]">{service.benchmark}</div>
              <p className="mt-3 text-sm font-light leading-6 text-white/45">{service.benchmarkLabel}</p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="flex min-h-[78px] items-center gap-4 rounded-lg border border-white/[0.07] bg-[#07111f] px-5">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-[#3048ff]/15 text-[#526cff]">✓</span>
                <p className="text-sm font-light text-white/60">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] bg-[#04101d] px-8 py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.34em] text-[#526cff]">Key Features</p>
            <h2 className="mt-5 text-4xl font-light tracking-[-.045em] sm:text-5xl">Everything you need to make {service.title.toLowerCase()} work.</h2>
            <p className="mt-5 max-w-xl text-base font-light leading-8 text-white/50">The capability is designed as part of the larger RealSite experience—not as another disconnected tool.</p>
            <div className="mt-9 space-y-5">
              {service.capabilities.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#526cff]/25 bg-[#3048ff]/10 text-[#526cff]">+</span>
                  <div>
                    <h3 className="text-base font-medium">{feature.title}</h3>
                    <p className="mt-1 text-sm font-light leading-6 text-white/45">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#3048ff]/10 blur-[110px]" />
            <div className="relative rounded-xl border border-[#526cff]/20 bg-[#030811] p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {service.capabilities.slice(0, 6).map((feature, index) => (
                  <div key={feature.title} className="min-h-[150px] border border-white/[0.07] bg-[#07111f] p-5">
                    <p className="text-[9px] uppercase tracking-[.28em] text-[#526cff]">{String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-5 text-lg font-light">{feature.title}</p>
                    <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]"><div className="h-full w-2/3 rounded-full bg-[#3048ff]" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] px-8 py-24 lg:px-14">
        <div className="mx-auto max-w-[1380px]">
          <p className="text-[10px] font-semibold uppercase tracking-[.34em] text-[#526cff]">Built For Your Business</p>
          <h2 className="mt-5 text-4xl font-light tracking-[-.045em] sm:text-5xl">More than a feature. <span className="text-[#526cff]">A business capability.</span></h2>
          <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/50">Build it around the way your organization works today, with room to connect and evolve tomorrow.</p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.growth.map((item) => (
              <article key={item.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#526cff]/30 text-[#526cff]">◇</div>
                <h3 className="mt-5 text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-6 text-white/45">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Real Customer Journey intentionally omitted. */}

      <section className="border-b border-white/[0.06] bg-[#02070d] px-8 py-24 lg:px-14">
        <div className="mx-auto max-w-[1380px]">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[.34em] text-[#526cff]">Frequently Asked Questions</p>
            <h2 className="mt-5 text-4xl font-light tracking-[-.045em]">Questions about {service.title.toLowerCase()}? Start here.</h2>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {service.faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-lg border border-white/[0.08] bg-[#07111f]">
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left">
                  <span className="text-sm font-light text-white/75">{faq.question}</span>
                  <span className="text-[#526cff]">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && <p className="px-5 pb-5 text-sm font-light leading-6 text-white/45">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-8 py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.34em] text-[#526cff]">Talk To RealSite</p>
            <h2 className="mt-5 text-4xl font-light tracking-[-.045em] sm:text-5xl">Let&apos;s talk about your <span className="text-[#526cff]">{service.title.toLowerCase()}</span> goals.</h2>
            <p className="mt-6 max-w-lg text-base font-light leading-8 text-white/50">Tell us about your business and what you want to accomplish. We&apos;ll help you map the right approach.</p>
            <div className="mt-8 space-y-4 text-sm font-light text-white/55">
              <p>◉ &nbsp; No obligation strategy conversation</p>
              <p>◉ &nbsp; Recommendations tailored to your goals</p>
              <p>◉ &nbsp; Clear scope and next steps</p>
            </div>
          </div>

          <form onSubmit={(event) => event.preventDefault()} className="rounded-xl border border-white/[0.08] bg-[#07111f] p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["Name", "Your name"],
                ["Email", "you@company.com"],
                ["Phone", "(555) 555-5555"],
                ["Company", "Business name"],
              ].map(([label, placeholder]) => (
                <label key={label}>
                  <span className="mb-2 block text-[9px] uppercase tracking-[.2em] text-white/45">{label}</span>
                  <input placeholder={placeholder} className="h-12 w-full rounded border border-white/[0.08] bg-[#030811] px-4 text-sm outline-none placeholder:text-white/20 focus:border-[#526cff]" />
                </label>
              ))}
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-[9px] uppercase tracking-[.2em] text-white/45">Website</span>
              <input placeholder="https://" className="h-12 w-full rounded border border-white/[0.08] bg-[#030811] px-4 text-sm outline-none placeholder:text-white/20 focus:border-[#526cff]" />
            </label>
            <label className="mt-5 block">
              <span className="mb-2 block text-[9px] uppercase tracking-[.2em] text-white/45">What would you like to accomplish?</span>
              <textarea rows={5} placeholder={`Tell us about your ${service.title.toLowerCase()} goals...`} className="w-full resize-none rounded border border-white/[0.08] bg-[#030811] px-4 py-4 text-sm outline-none placeholder:text-white/20 focus:border-[#526cff]" />
            </label>
            <div className="mt-5 flex flex-col gap-4 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-end sm:justify-between">
              <div><p className="text-[8px] uppercase tracking-[.22em] text-white/30">Service Interest</p><p className="mt-1 text-xs text-[#526cff]">{service.title}</p></div>
              <button type="submit" className="rounded-md bg-[#3048ff] px-7 py-4 text-[9px] font-semibold uppercase tracking-[.2em] transition hover:bg-[#526cff]">Start The Conversation →</button>
            </div>
          </form>
        </div>
      </section>

      <section className="border-t border-white/[0.06] px-8 py-20 lg:px-14">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[.34em] text-[#526cff]">Keep Expanding</p>
              <h2 className="mt-4 text-3xl font-light">More {service.categoryTitle} services.</h2>
            </div>
            <Link href={`/expand/${service.categorySlug}`} className="text-[10px] uppercase tracking-[.2em] text-[#526cff]">View Category →</Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {service.related.map((related) => (
              <Link key={related.href} href={related.href} className="group border border-white/[0.08] bg-[#07111f] p-6 transition hover:border-[#526cff]/50">
                <p className="text-lg font-light group-hover:text-[#526cff]">{related.title}</p>
                <p className="mt-2 text-xs font-light leading-5 text-white/35">Explore this capability.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

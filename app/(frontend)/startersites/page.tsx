"use client";
import Hero from "@/components/hero/hero";
import BlueprintCarousel from "@/components/blueprints/BlueprintCarousel";
import { blueprintFeed } from "@/data/blueprintFeed";
import { useState, type FormEvent } from "react";
const benefits = [
  { symbol: "↗", title: "FAST LAUNCH", description: "Get online in days, not months." },
  { symbol: "◇", title: "PROFESSIONAL LOOK", description: "Modern design built for your business." },
  { symbol: "▯", title: "MOBILE OPTIMIZED", description: "Looks great on every device." },
  { symbol: "▥", title: "BUILT FOR RESULTS", description: "Designed to attract and convert customers." },
  { symbol: "◎", title: "FULL SUPPORT", description: "We handle the technical details." },
];
const included = ["Professional one-page design", "Mobile optimized", "Contact form", "Map & directions", "Basic SEO setup", "2 rounds of revisions", "Launch support"];

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }
  return <main className="bg-[#030914] text-white">
    <Hero
      heroFeed="startersites"
      title={<>If you have a <span className="text-[#526cff]">real business.</span><br />And you want <span className="text-[#526cff]">real customers.</span><br />Then you need to get a <span className="text-[#526cff]">real site.</span></>}
      description={<>Realsite<sup>®</sup> puts your website to work where every visit and every click moves people closer to a decision, a transaction, and your brand.</>}
      primaryCTA={{ label: "About Us", href: "/about" }}
      secondaryCTA={{ label: "View Our Work", href: "/work" }}
    />
    <section className="flex min-h-[100dvh] flex-col justify-center border-t border-white/10 px-8 py-24 sm:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-[900px] text-center"><p className="mb-5 text-xs tracking-[0.28em] text-[#526fff]">WHY STARTERSITES</p><h2 className="text-4xl font-light leading-tight sm:text-6xl">Everything you need.<br />Nothing you don’t.</h2><p className="mx-auto mt-7 max-w-[640px] text-base leading-8 text-[#9faabb]">A complete, professional one-page website designed to help your business look credible, attract customers, and get online without the complexity of a larger site.</p></div>
      <div className="mx-auto mt-20 grid w-full max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">{benefits.map(b=><div key={b.title} className="text-center"><div className="mb-5 text-4xl text-[#4168ff]">{b.symbol}</div><h3 className="text-xs font-semibold tracking-[0.08em]">{b.title}</h3><p className="mt-3 text-sm leading-6 text-[#98a4b6]">{b.description}</p></div>)}</div>
    </section>
    <section className="border-t border-white/10 bg-[#030914] px-5 py-24 sm:px-8 lg:px-12"><BlueprintCarousel feed={blueprintFeed} /></section>
    <section className="border-t border-white/10 px-8 py-24 sm:px-16 lg:px-24"><div className="mx-auto max-w-[1200px]"><div className="mb-14 text-center"><p className="text-xs tracking-[0.25em] text-[#526fff]">SIMPLE PRICING</p><h2 className="mt-4 text-4xl font-light sm:text-5xl">One great option.<br />Everything included.</h2><p className="mt-5 text-sm text-[#9faabb]">A professional one-page website to help you get online and start getting customers.</p></div><div className="grid gap-6 lg:grid-cols-2"><div className="rounded-lg border border-[#203d66] bg-[#071324] p-8 sm:p-10"><h3 className="text-xl text-[#9bbaff]">StarterSite</h3><div className="mt-4 text-6xl font-light text-[#4168ff]">$799 <span className="text-sm text-white/70">one-time</span></div><p className="mt-2 text-xl text-[#d5dfef]">or $79/month</p><ul className="mt-10 space-y-3">{included.map(item=><li key={item} className="flex gap-3 text-sm text-[#c3ccda]"><span className="text-[#4168ff]">✓</span>{item}</li>)}</ul></div><form onSubmit={handleSubmit} className="rounded-lg border border-[#203d66] bg-[#071324] p-8 sm:p-10"><h3 className="text-2xl text-[#9bbaff]">Get Started</h3><p className="mb-6 mt-2 text-sm text-[#9faabb]">Tell us about your business and we’ll get back to you with next steps.</p><div className="grid gap-3 sm:grid-cols-2"><input required name="name" placeholder="Name" className="w-full rounded border border-[#28446a] bg-[#06101f] p-3 text-sm text-white placeholder:text-[#7c8ca4]" /><input required name="email" type="email" placeholder="Email" className="w-full rounded border border-[#28446a] bg-[#06101f] p-3 text-sm text-white placeholder:text-[#7c8ca4]" /></div><input required name="business" placeholder="Business Name" className="mt-3 w-full rounded border border-[#28446a] bg-[#06101f] p-3 text-sm text-white placeholder:text-[#7c8ca4]" /><textarea required name="message" rows={5} placeholder="Tell us about your business..." className="mt-3 w-full rounded border border-[#28446a] bg-[#06101f] p-3 text-sm text-white placeholder:text-[#7c8ca4]" /><button type="submit" className="mt-4 w-full rounded bg-[#315bff] px-6 py-4 text-xs font-semibold uppercase tracking-widest">Get Started →</button>{submitted && <p className="mt-3 text-sm text-[#9faabb]">Form submission is not connected yet; your information has not been sent.</p>}</form></div></div></section>
  </main>;
}

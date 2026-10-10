"use client";

import { FormEvent, useState } from "react";
import Header from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";

const benefits = [
  { title: "Build Recognition", text: "Stand out with a distinctive and memorable identity.", icon: "target" },
  { title: "Create Consistency", text: "A unified look across all of your platforms and materials.", icon: "layers" },
  { title: "Look Established", text: "A professional brand builds credibility and trust.", icon: "bars" },
];

const faqs = [
  ["What is included in a brand identity?", "A brand identity can include your primary logo, supporting marks, color palette, typography, visual direction, iconography, and practical guidance for using the system consistently."],
  ["What files will I receive?", "Final deliverables are prepared for practical use across web, social, print, and other agreed applications, with the exact file package based on the identity we create."],
  ["Do I need a new logo?", "Not necessarily. We can evaluate what you already have and determine whether the right move is refinement, expansion into a fuller identity system, or a new direction."],
  ["How long does branding take?", "Timing depends on the scope and feedback cycle. We establish the project scope and expected timeline before creative work begins."],
  ["Can you work with my existing brand?", "Yes. We can build around an existing identity, strengthen an incomplete system, or help create consistency across assets that have evolved over time."],
  ["Can you also create the website and marketing materials?", "Yes. Brand identity can become the visual foundation for the website and for creative materials produced through the rest of RealSite."],
];

function Arrow() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 12h13" /><path d="m13 7 5 5-5 5" /></svg>;
}

function Check() {
  return <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1467ff] text-white"><svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.3"><path d="m6 12 4 4 8-9" /></svg></span>;
}

function BenefitIcon({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      {type === "target" && <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M22 12h-3" /></>}
      {type === "layers" && <><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="m4 12 8 4 8-4M4 17l8 4 8-4" /></>}
      {type === "bars" && <><path d="M5 20V12h3v8M10.5 20V8h3v12M16 20V4h3v16" /></>}
    </svg>
  );
}

function BrandSystemVisual() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#07111e] p-6 shadow-[0_30px_90px_rgba(0,0,0,.28)] sm:p-8">
      <p className="text-[8px] font-semibold uppercase tracking-[.28em] text-[#526cff]">Brand System Example</p>
      <div className="mt-7 grid gap-7 sm:grid-cols-[1.05fr_.95fr]">
        <div className="border-b border-white/10 pb-7 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-7">
          <div className="flex min-h-[150px] flex-col items-center justify-center">
            <svg viewBox="0 0 120 82" className="h-20 w-28 text-[#2670ff]" fill="none"><path d="M13 69 51 9l12 21L76 9l32 60-33-27-14 25-13-24-35 26Z" fill="currentColor" /><path d="m46 69 15-26 14 26" stroke="white" strokeWidth="3" opacity=".7" /></svg>
            <p className="mt-2 text-xl font-semibold tracking-[.3em]">ALTITUDE</p>
            <p className="mt-1 text-[7px] uppercase tracking-[.45em] text-[#526cff]">Outdoor Supply</p>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-3">
            {["#0867ff", "#0b2e58", "#a9b8ca", "#f1f4f8"].map((color) => <span key={color} className="h-10 rounded-sm border border-white/10" style={{ backgroundColor: color }} />)}
          </div>
          <div className="mt-7"><p className="text-4xl font-light tracking-[-.05em]">AaBbCc</p><p className="mt-2 text-xs text-white/50">Inter · Regular · SemiBold</p></div>
        </div>
        <div>
          <div className="space-y-2 text-[8px] font-semibold uppercase tracking-[.2em] text-[#5f91ff]">
            {["Primary Logo","Color Palette","Typography","Iconography","Visual Style","Real-World Applications"].map(x => <p key={x}>{x}</p>)}
          </div>
          <div className="mt-7 grid grid-cols-2 gap-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85" alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[#06101d]/25" /><p className="absolute bottom-3 left-3 text-sm font-semibold leading-4">GEAR<br />HIGHER<br />GROUND</p>
            </div>
            <div className="grid gap-2">
              <img src="https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=600&q=85" alt="" className="h-full w-full rounded-md object-cover" />
              <div className="flex items-center justify-center rounded-md border border-white/10 bg-[#0a1728]"><svg viewBox="0 0 80 60" className="h-10 w-14 text-[#2670ff]" fill="currentColor"><path d="M5 52 31 8l9 16L51 8l24 44-25-20-10 19-10-18L5 52Z" /></svg></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[690px] overflow-hidden border-b border-white/10 bg-[#030811] lg:min-h-[100dvh]">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=90" alt="" className="absolute inset-y-0 right-0 h-full w-full object-cover object-center lg:w-[66%]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030811_0%,#030811_34%,rgba(3,8,17,.93)_46%,rgba(3,8,17,.45)_72%,rgba(3,8,17,.25)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#030811] via-[#030811]/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030811] via-[#030811]/40 to-transparent" />
      </div>
      <div className="relative z-20 mx-auto flex min-h-[690px] max-w-[1800px] items-center px-7 pb-20 pt-32 sm:px-10 lg:min-h-[100dvh] lg:px-14 xl:px-24">
        <div className="max-w-[650px]">
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[.34em] text-[#526cff]">Create</p>
          <h1 className="text-[clamp(4rem,6vw,7.4rem)] font-light leading-[.88] tracking-[-.06em]">Brand<br /><span className="text-[#2670ff]">Identity</span></h1>
          <h2 className="mt-7 text-[clamp(1.35rem,2vw,2rem)] font-light tracking-[-.03em]">Build a brand people recognize.</h2>
          <p className="mt-5 max-w-[570px] text-sm font-light leading-7 text-white/60">We create cohesive, professional brand identities that give your business a clear voice, a distinctive look, and a consistent presence across everything you do.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => document.getElementById("brand-contact")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex h-12 items-center gap-5 rounded-md bg-[#1467ff] px-7 text-[9px] font-semibold uppercase tracking-[.22em] text-white transition hover:bg-[#347cff]">Get Started <Arrow /></button>
            <button type="button" onClick={() => document.getElementById("why-branding")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex h-12 items-center gap-4 rounded-md border border-white/20 bg-black/25 px-7 text-[9px] font-semibold uppercase tracking-[.22em] text-white/80 backdrop-blur-sm transition hover:border-white/40 hover:text-white"><span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2670ff] text-[#2670ff]">▶</span>See Examples</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyBranding() {
  return (
    <section id="why-branding" className="border-b border-white/10 bg-[#030811]">
      <div className="mx-auto grid max-w-[1800px] gap-14 px-7 py-24 sm:px-10 lg:grid-cols-[1.08fr_.92fr] lg:px-14 lg:py-28 xl:px-24">
        <div>
          <p className="mb-4 text-[9px] font-semibold uppercase tracking-[.34em] text-[#526cff]">Why It Matters</p>
          <h2 className="max-w-[760px] text-[clamp(2.7rem,4.3vw,5rem)] font-light leading-[.98] tracking-[-.055em]">Your brand should look<br />like it <span className="text-[#2670ff]">belongs to you.</span></h2>
          <p className="mt-6 max-w-[760px] text-sm font-light leading-7 text-white/55">A strong brand creates recognition, builds trust, and gives your business a consistent, professional presence. We help you define and design a visual identity that communicates who you are and sets you apart in a crowded market.</p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {benefits.map((b) => <article key={b.title} className="rounded-lg border border-white/10 bg-[#07101b] p-5"><span className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2670ff]/30 bg-[#2670ff]/10 text-[#2670ff]"><BenefitIcon type={b.icon} /></span><h3 className="mt-5 text-sm font-medium">{b.title}</h3><p className="mt-2 text-[11px] leading-5 text-white/45">{b.text}</p></article>)}
          </div>
        </div>
        <div className="self-center"><BrandSystemVisual /></div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="border-b border-white/10 bg-[#020811]">
      <div className="mx-auto max-w-[1800px] px-7 py-24 sm:px-10 lg:px-14 xl:px-24">
        <p className="text-[9px] font-semibold uppercase tracking-[.34em] text-[#526cff]">Brand Identity FAQ</p>
        <h2 className="mt-4 text-[clamp(2.4rem,3.5vw,4rem)] font-light tracking-[-.05em]">Questions about branding? Start here.</h2>
        <p className="mt-3 text-sm text-white/45">Get clear answers about our branding process, timeline, and what&apos;s included.</p>
        <div className="mt-9 grid gap-3 lg:grid-cols-2">
          {faqs.map(([q,a], index) => {
            const isOpen = open === index;
            return <div key={q} className="overflow-hidden rounded-lg border border-white/10 bg-[#07101b]">
              <button type="button" onClick={() => setOpen(isOpen ? null : index)} className="flex min-h-[58px] w-full items-center justify-between gap-5 px-5 text-left text-[12px] text-white/80"><span>{q}</span><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#2670ff]/60 text-[#2670ff]"><span className={`transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span></span></button>
              <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="border-t border-white/10 px-5 py-5 text-[11px] leading-6 text-white/50">{a}</p></div></div>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type="text", placeholder, required=false }: { label:string; name:string; type?:string; placeholder?:string; required?:boolean }) {
  return <label className="block"><span className="text-[8px] font-semibold uppercase tracking-[.18em] text-white/65">{label} {required && <span className="text-[#2670ff]">*</span>}</span><input name={name} type={type} required={required} placeholder={placeholder} className="mt-2 h-11 w-full rounded-md border border-white/10 bg-[#081625] px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#2670ff]" /></label>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }
  return (
    <section id="brand-contact" className="relative overflow-hidden border-b border-white/10 bg-[#030811]">
      <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90" alt="" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,17,.55)_0%,rgba(3,8,17,.70)_45%,rgba(3,8,17,.92)_100%)]" /><div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020811] to-transparent" /></div>
      <div className="relative z-10 mx-auto grid max-w-[1800px] items-center gap-12 px-7 py-24 sm:px-10 lg:grid-cols-[38%_62%] lg:px-14 xl:px-24">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[.34em] text-[#5f91ff]">Talk To A RealSite</p>
          <h2 className="mt-5 text-[clamp(3rem,4.7vw,5.5rem)] font-light leading-[.96] tracking-[-.055em]">Let&apos;s talk about<br />your <span className="text-[#2670ff]">brand.</span></h2>
          <p className="mt-6 max-w-[470px] text-sm font-light leading-7 text-white/65">Tell us about your business and what you want your brand to communicate. We&apos;ll get back to you with next steps.</p>
          <div className="mt-7 space-y-3">{["No obligation strategy conversation","Your information is kept confidential","We'll help you find the right solution"].map(x => <div key={x} className="flex items-center gap-3 text-xs text-white/75"><Check />{x}</div>)}</div>
        </div>
        <form onSubmit={submit} className="rounded-xl border border-white/10 bg-[#06101d]/95 p-5 shadow-[0_30px_90px_rgba(0,0,0,.35)] backdrop-blur-xl sm:p-7">
          {submitted ? <div className="flex min-h-[420px] flex-col items-center justify-center text-center"><Check /><h3 className="mt-6 text-3xl font-light">Conversation started.</h3><p className="mt-3 max-w-[430px] text-sm text-white/45">The form is ready to connect to your existing RealSite inquiry endpoint or CRM.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-7 text-[9px] font-semibold uppercase tracking-[.24em] text-[#5f91ff]">Send another inquiry</button></div> :
          <>
            <div className="grid gap-4 sm:grid-cols-2"><Field label="Name" name="name" placeholder="Your name" required /><Field label="Email" name="email" type="email" placeholder="you@company.com" required /><Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" /><Field label="Company" name="company" placeholder="Business name" /></div>
            <div className="mt-4"><Field label="Website" name="website" placeholder="https://" /></div>
            <label className="mt-4 block"><span className="text-[8px] font-semibold uppercase tracking-[.18em] text-white/65">Tell us about your business and what you want your brand to communicate.</span><textarea required name="message" rows={5} placeholder="Share a few details..." className="mt-2 w-full resize-none rounded-md border border-white/10 bg-[#081625] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#2670ff]" /></label>
            <div className="mt-5 grid items-end gap-4 sm:grid-cols-[1fr_auto]">
              <label><span className="text-[8px] font-semibold uppercase tracking-[.18em] text-white/65">How did you hear about us?</span><select name="source" defaultValue="" className="mt-2 h-11 w-full rounded-md border border-white/10 bg-[#081625] px-4 text-xs text-white/60 outline-none focus:border-[#2670ff]"><option value="" disabled>Select an option</option><option>Search</option><option>Referral</option><option>Social Media</option><option>Existing Client</option><option>Other</option></select></label>
              <button type="submit" className="flex h-11 items-center justify-center gap-5 rounded-md bg-[#1467ff] px-7 text-[8px] font-semibold uppercase tracking-[.2em] text-white transition hover:bg-[#347cff]">Start the Conversation <Arrow /></button>
            </div>
          </>}
        </form>
      </div>
    </section>
  );
}

export default function BrandingPage() {
  return (
    <main className="relative bg-[#030811] text-white">
      <div className="absolute inset-x-0 top-0 z-[1000]"><Header /></div>
      <Hero />
      <WhyBranding />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

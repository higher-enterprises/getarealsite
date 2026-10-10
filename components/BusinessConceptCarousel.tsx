"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
type Concept = { id: string; name: string; category: string; image?: string };
const concepts: Concept[] = [
  { id: "coffee", name: "REAL COFFEE CO.", category: "Coffee shop" },
  { id: "barbershop", name: "REAL BARBERSHOP", category: "Barbershop" },
  { id: "office", name: "REAL OFFICE", category: "Professional services" },
  { id: "home-office", name: "REAL HOME OFFICE", category: "Home-based business" },
  { id: "garage", name: "REAL GARAGE", category: "Automotive services" },
];
const INTERVAL = 6000;
export default function BusinessConceptCarousel() {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
    if (paused || transitioning) return;
    const timer = window.setInterval(() => change(1), INTERVAL);
    return () => window.clearInterval(timer);
  }, [paused, transitioning, active]);
  useEffect(() => {
    if (!transitioning) return;
    const timer = window.setTimeout(() => { setPrevious(null); setTransitioning(false); }, 900);
    return () => window.clearTimeout(timer);
  }, [transitioning]);
  function change(direction: number) {
    if (transitioning) return;
    setPrevious(active);
    setActive((active + direction + concepts.length) % concepts.length);
    setTransitioning(true);
  }
  return (
    <section aria-label="Built around your business" className="relative isolate flex min-h-[100dvh] items-center overflow-hidden border-b border-white/10 bg-[#030811] text-white" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="grid w-full items-center gap-12 py-20 lg:min-h-[100dvh] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-8 lg:py-0">
        <div className="relative h-[360px] min-w-0 overflow-hidden sm:h-[480px] lg:h-[80dvh]">
          {concepts.map((concept, index) => {
            const visible = index === active || index === previous;
            if (!visible) return null;
            return (
              <div key={concept.id} aria-hidden="true" className={`absolute inset-0 transition-[transform,opacity] duration-[900ms] ease-in-out ${index === active ? "translate-x-0 opacity-100" : "-translate-x-[18%] opacity-0"}`} style={{ background: "radial-gradient(ellipse at 35% 55%,rgba(48,72,255,.15),transparent 68%)" }}>
                {concept.image ? <img src={concept.image} alt="" className="h-full w-full object-cover object-center [mask-image:linear-gradient(to_right,black_0%,black_65%,transparent_100%)]" /> : (
                  <div className="absolute inset-[12%_8%_12%_3%] flex items-center justify-center [mask-image:linear-gradient(to_right,black_0%,black_75%,transparent_100%)]">
                    <div className="relative flex h-[75%] w-[85%] flex-col rounded-xl border border-[#526cff]/60 bg-[#071629]/60 shadow-[0_0_70px_rgba(48,72,255,.12)]">
                      <div className="flex h-9 items-center gap-2 border-b border-[#526cff]/40 px-4"><span className="h-2 w-2 rounded-full border border-[#526cff]"/><span className="h-2 w-2 rounded-full border border-[#526cff]"/><span className="h-2 w-2 rounded-full border border-[#526cff]"/><span className="ml-auto text-[9px] tracking-widest text-[#8ca0ff]">WEBSITE BLUEPRINT</span></div>
                      <div className="grid flex-1 grid-cols-2 items-center gap-5 p-7"><div><p className="text-[10px] uppercase tracking-[.24em] text-[#526cff]">CONCEPT {String(index+1).padStart(2,"0")}</p><h3 className="mt-4 text-2xl font-light sm:text-3xl">{concept.name}</h3><div className="mt-5 h-1 w-full bg-[#526cff]/30"/><div className="mt-2 h-1 w-3/4 bg-[#526cff]/20"/><div className="mt-6 h-8 w-24 border border-[#526cff]/70"/></div><div className="h-3/4 border border-[#526cff]/60 bg-[linear-gradient(135deg,transparent_49.7%,rgba(82,108,255,.5)_50%,transparent_50.3%),linear-gradient(45deg,transparent_49.7%,rgba(82,108,255,.5)_50%,transparent_50.3%)]"/></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#030811]" />
        </div>
        <div className="relative z-10 px-7 sm:px-10 lg:pr-14 xl:pr-20">
          <p className="text-[11px] font-semibold uppercase tracking-[.3em] text-[#526cff]">BUILT AROUND YOUR BUSINESS</p>
          <h2 className="mt-7 max-w-[730px] text-[clamp(2.4rem,4vw,4.6rem)] font-light leading-[1.08] tracking-[-.04em]">Your business is unique.<br/>Your website <span className="text-[#526cff]">should be, too.</span></h2>
          <p className="mt-7 max-w-[620px] text-base font-light leading-8 text-white/55">We don&apos;t start with a template and make your business fit. We start with your goals, your customers, and your brand — then build a website around what makes you different.</p>
          <a href="#build-packages" className="mt-9 inline-flex items-center gap-3 border-b border-[#526cff] pb-3 text-[11px] font-semibold uppercase tracking-[.2em] text-[#526cff]">DESIGNED FOR YOUR BUSINESS <ArrowUpRight size={16}/></a>
          <div className="mt-14 flex items-center gap-5">
            <button type="button" aria-label="Previous concept" onClick={() => change(-1)} disabled={transitioning} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/70 transition hover:border-[#526cff] hover:text-white disabled:opacity-40"><ChevronLeft size={20}/></button>
            <span className="text-xs tracking-[.2em] text-white/60">{String(active+1).padStart(2,"0")} / {String(concepts.length).padStart(2,"0")}</span>
            <div className="flex w-28 gap-1">{concepts.map((concept,index) => <button key={concept.id} type="button" aria-label={`Show ${concept.name}`} disabled={transitioning} onClick={() => { if (index !== active) { setPrevious(active); setActive(index); setTransitioning(true); } }} className={`h-[3px] flex-1 transition-colors ${index === active ? "bg-[#526cff]" : "bg-white/20"}`}/>)}</div>
            <button type="button" aria-label="Next concept" onClick={() => change(1)} disabled={transitioning} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/70 transition hover:border-[#526cff] hover:text-white disabled:opacity-40"><ChevronRight size={20}/></button>
          </div>
        </div>
      </div>
    </section>
  );
}

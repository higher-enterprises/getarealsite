"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { temporaryProcessSteps } from "@/data/temporaryHomeFeed";
const steps = [...temporaryProcessSteps, ...temporaryProcessSteps];
export default function ProcessScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0); const loopWidth = useRef(0); const paused = useRef(false); const [active,setActive] = useState(0);
  useEffect(() => {
    const track = trackRef.current; if (!track) return;
    const measure = () => { const cards = track.querySelectorAll<HTMLElement>("[data-process-card]"); if (cards.length > temporaryProcessSteps.length) loopWidth.current = cards[temporaryProcessSteps.length].offsetLeft - cards[0].offsetLeft; };
    measure(); const observer = new ResizeObserver(measure); observer.observe(track);
    let frame = 0, last = 0;
    const tick = (time: number) => { const delta = Math.min(time-last,50); last=time; if (!paused.current && loopWidth.current) { offset.current=(offset.current+delta*.026)%loopWidth.current; track.style.transform=`translate3d(${-offset.current}px,0,0)`; const cards=track.querySelectorAll<HTMLElement>("[data-process-card]"); let closest=0,dist=Infinity; for(let i=0;i<temporaryProcessSteps.length;i++){const d=Math.min(Math.abs(cards[i].offsetLeft-offset.current),Math.abs(cards[i].offsetLeft+loopWidth.current-offset.current));if(d<dist){dist=d;closest=i;}} setActive(v=>v===closest?v:closest); } frame=requestAnimationFrame(tick); };
    frame=requestAnimationFrame(tick); return () => { cancelAnimationFrame(frame);observer.disconnect(); };
  },[]);
  const move = (dir:number) => { const track=trackRef.current;if(!track)return;const next=(active+dir+temporaryProcessSteps.length)%temporaryProcessSteps.length; const cards=track.querySelectorAll<HTMLElement>("[data-process-card]"); offset.current=cards[next].offsetLeft; track.style.transform=`translate3d(${-offset.current}px,0,0)`;setActive(next); };
  return <div className="relative z-30 w-full px-0" onMouseEnter={()=>paused.current=true} onMouseLeave={()=>paused.current=false}>
    <div className="relative overflow-hidden border-y border-[#1b56b3]/40 bg-[#020b18]/85 px-8 py-6 sm:px-12 shadow-[0_18px_80px_rgba(0,0,0,.5)] backdrop-blur-lg">
      <div className="overflow-hidden"><div ref={trackRef} className="flex w-max gap-4 will-change-transform">{steps.map((step,index)=><article data-process-card key={`${step.title}-${index}`} className={`flex min-h-[218px] w-[265px] shrink-0 flex-col rounded-xl border p-5 transition-colors duration-500 sm:w-[295px] ${index%temporaryProcessSteps.length===active?"border-[#327cff] bg-[#071c38] shadow-[inset_0_0_20px_rgba(35,110,255,.12)]":"border-[#24538c]/40 bg-[#041122]"}`}><p className="text-xs tracking-widest text-[#438cff]">{String(index%temporaryProcessSteps.length+1).padStart(2,"0")}</p><h3 className="mt-4 text-xl font-light">{step.title}</h3><p className="mt-2 text-xs leading-5 text-white/65">{step.description}</p><div className="mt-auto flex flex-wrap gap-1.5 pt-4">{step.details.map(d=><span key={d} className="rounded border border-white/10 px-2 py-1 text-[10px] text-white/50">{d}</span>)}</div></article>)}</div></div>
      <button type="button" aria-label="Previous process step" onClick={()=>move(-1)} className="absolute left-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#327cff] bg-[#041122]"><ChevronLeft size={18}/></button><button type="button" aria-label="Next process step" onClick={()=>move(1)} className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#327cff] bg-[#041122]"><ChevronRight size={18}/></button>
    </div>
  </div>;
}

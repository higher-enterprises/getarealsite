"use client";
import { useEffect, useState } from "react";
import { temporaryBlueprints } from "@/data/temporaryHomeFeed";
export default function BlueprintStage() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive(n => (n + 1) % temporaryBlueprints.length), 9000); return () => window.clearInterval(timer); }, []);
  const total = temporaryBlueprints.length;
  return <div className="relative h-[340px] w-full sm:h-[470px] xl:h-[610px] [perspective:1400px]" aria-label="Rotating website blueprint designs">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,77,197,.24),transparent_67%)]" />
    {temporaryBlueprints.map((design, i) => {
      const offset = (i - active + total) % total;
      const position = offset === 0 ? 0 : offset === 1 ? 1 : offset === total - 1 ? -1 : 2;
      const transform = position === 0 ? "translate3d(-50%,0,90px) rotateY(0deg) scale(1)" : position === 1 ? "translate3d(7%,12px,-130px) rotateY(-38deg) scale(.83)" : position === -1 ? "translate3d(-110%,12px,-130px) rotateY(38deg) scale(.83)" : "translate3d(-50%,26px,-250px) rotateY(0deg) scale(.68)";
      return <div key={design.id} className="absolute left-1/2 top-1/2 w-[48%] max-w-[410px] -translate-y-1/2 transition-[transform,opacity,filter] duration-[2200ms] ease-in-out" style={{ transform, zIndex: position === 0 ? 20 : position === 2 ? 1 : 8, opacity: position === 0 ? 1 : position === 2 ? .25 : .65, filter: position === 0 ? "drop-shadow(0 0 24px rgba(33,99,255,.27))" : "brightness(.55)" }}>
        <img src={design.image} alt={`${design.name} website blueprint`} className="w-full border border-[#2777ed]/50 bg-[#03132b] shadow-[0_18px_60px_rgba(0,0,0,.55)]" />
      </div>;
    })}
    <div className="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 gap-2" aria-label="Blueprint carousel position">{temporaryBlueprints.map((item,i)=><span key={item.id} className={`h-1.5 rounded-full transition-all duration-700 ${i === active ? "w-6 bg-[#3186ff]" : "w-1.5 bg-white/20"}`} />)}</div>
  </div>;
}


    
  
import BlueprintStage from "@/components/temporary/BlueprintStage";
import ProcessScroller from "@/components/temporary/ProcessScroller";
import SolutionVisual from "@/components/temporary/SolutionVisual";
import ContactForm from "@/components/temporary/ContactForm";
import { temporarySolutions } from "@/data/temporaryHomeFeed";
export default function HomePage() {
  return <main className="min-h-screen overflow-hidden bg-[#030811] font-sans text-white">
    <section className="relative bg-[radial-gradient(ellipse_at_75%_35%,#092145_0%,#030811_65%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#030811_0%,transparent_85%)]" />
      <div className="relative mx-auto grid min-h-[580px] max-w-[1650px] items-center gap-0 px-6 pb-32 pt-16 sm:px-10 lg:grid-cols-[.33fr_.67fr] lg:pb-44 lg:pt-12">
        <div className="relative z-30 flex flex-col items-start justify-center lg:pr-2">
          <img src="/assets/temporary/realsite-logo.png" alt="RealSite" className="mb-6 h-auto w-[115px] object-contain sm:w-[135px]" />
          <h1 className="text-[42px] font-light leading-[1.08] tracking-[-.045em] sm:text-[55px] xl:text-[67px]">Real sites for<br/><span className="text-[#3186ff]">real businesses.</span></h1>
          <div className="mt-7 h-[2px] w-20 bg-[#3186ff]" />
          <p className="mt-7 max-w-[420px] text-base font-light leading-[1.75] text-white/70 sm:text-lg">Real tools. Real solutions. Real impact. We&apos;re building a platform to help businesses, organizations, and communities establish their online presence and grow what matters.</p>
          <div className="mt-7 flex flex-wrap items-center gap-5"><a href="/contact" className="rounded-md bg-[#1769ff] px-6 py-3 text-[11px] font-semibold uppercase tracking-[.14em] text-white transition-colors hover:bg-[#3186ff]">Learn more →</a><a href="#solutions" className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#65a6ff] underline decoration-[#3186ff]/50 underline-offset-8 transition-colors hover:text-white">Explore our solutions ↓</a></div>
        </div>
        <div className="relative z-10 mt-10 min-w-0 lg:mt-0">
          <div className="relative ml-[18%] sm:ml-[22%] lg:ml-[25%]"><BlueprintStage /></div>
          <img src="/assets/temporary/employee-atmospheric.png" alt="RealSite team member" className="pointer-events-none absolute bottom-[-95px] left-[-7%] z-20 h-[340px] w-auto max-w-none object-contain object-bottom sm:bottom-[-110px] sm:h-[470px] lg:bottom-[-115px] lg:left-[-9%] lg:h-[560px] xl:h-[650px]" />
        </div>
      </div>
      <div className="relative z-30 -mt-20 pb-10 lg:-mt-28"><ProcessScroller /></div>
    </section>
    <section id="solutions" className="relative mx-auto max-w-[1650px] scroll-mt-8 px-5 pb-20 pt-12 sm:px-10 lg:px-12 lg:pt-16">
      <div className="mx-auto mb-12 max-w-[1100px] text-center"><p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#388aff]">Our solutions</p><h2 className="text-[36px] font-light leading-[1.12] tracking-[-.04em] sm:text-[48px] xl:text-[56px]">Five powerful ways to build <span className="text-[#3186ff]">your online presence.</span></h2><div className="mx-auto mt-6 h-[2px] w-14 bg-[#3186ff]"/><p className="mx-auto mt-6 max-w-[750px] text-sm leading-7 text-white/70 sm:text-base">Whether you need a domain, a simple site, a fully custom website, a complete platform, or a digital foundation for your next venture, RealSite has a solution designed for your goals.</p></div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">{temporarySolutions.map(solution=><article key={solution.title} className="flex min-h-[465px] flex-col overflow-hidden rounded-xl border border-[#2059a2]/50 bg-[#04101e]"><SolutionVisual kind={solution.title}/><div className="flex flex-1 flex-col p-5"><h2 className="text-[13px] font-semibold tracking-[.2em] text-white">{solution.title}</h2><div className="mt-4 h-px w-10 bg-[#3186ff]"/><p className="mt-5 text-sm leading-6 text-white/65">{solution.description}</p><ul className="mt-6 space-y-3">{solution.features.map(feature=><li key={feature} className="flex gap-3 text-xs text-white/65"><span className="text-[#3186ff]">✓</span>{feature}</li>)}</ul><div className="mt-auto pt-7"><a href="/contact" className="block border border-[#3186ff]/75 py-3 text-center text-[10px] font-semibold tracking-[.2em] text-[#79aeff] transition-colors hover:bg-[#3186ff]/15 hover:text-white">LEARN MORE →</a></div></div></article>)}</div>
    </section>
    <section className="relative mx-auto grid max-w-[1500px] items-center gap-12 px-6 pb-24 pt-8 sm:px-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#388aff]">Get in touch</p><h2 className="text-[48px] font-light leading-[1.05] tracking-[-.04em] sm:text-[65px]">Let&apos;s build<br/><span className="text-[#3186ff]">what&apos;s next.</span></h2><p className="mt-6 max-w-[410px] text-base leading-7 text-white/65">Tell us about your business, your goals, or the project you have in mind. We&apos;ll be in touch to explore how RealSite can help.</p></div><ContactForm /></section>
    <footer className="border-t border-[#18427b]/40 py-8 text-center text-xs text-white/40">© 2026 RealSite. All rights reserved.</footer>
  </main>;
}


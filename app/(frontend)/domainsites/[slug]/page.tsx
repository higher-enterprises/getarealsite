"use client";
import Header from "@/components/navigation/navigation";
import { domains } from "../../../../data/domainsites-data";
import { useParams } from "next/navigation";
export default function DomainSiteDetailPage() {
  const params = useParams();
  const domainSite = domains.find((item) => item.slug === params.slug);
  if (!domainSite) return <main className="min-h-screen bg-[#030811] text-white"><Header /><p className="p-14">DomainSite not found.</p></main>;
  const externalUrl = `https://${domainSite.domain}`;
  return (
    <main className="min-h-screen bg-[#030811] text-white">
      <div className="border-b border-white/[.06]"><Header /></div>
      <section className="border-b border-white/[.06]">
        <div className="mx-auto grid w-full max-w-none grid-cols-1 gap-12 px-7 py-14 sm:px-10 lg:grid-cols-2 lg:px-14">
          <div className="flex flex-col justify-center">
            <a href="/domainsites/all" className="text-xs text-white/45 hover:text-white">← Back to DomainSites</a>
            <p className="mt-12 text-[9px] font-semibold uppercase tracking-[.28em] text-white/50">DOMAIN / BRAND / PLAN</p>
            <a href={externalUrl} target="_blank" rel="noreferrer" className="mt-4 text-[clamp(3rem,5vw,5.5rem)] font-light tracking-[-.055em] hover:text-[#526cff]">{domainSite.domain} ↗</a>
            <p className="mt-5 max-w-[580px] text-lg font-light leading-8 text-white/55">{domainSite.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-emerald-400/30 px-4 py-1.5 text-[8px] font-semibold uppercase tracking-[.15em] text-emerald-300">DOMAIN</span>
              {domainSite.brand && <span className="rounded-full border border-amber-300/30 px-4 py-1.5 text-[8px] font-semibold uppercase tracking-[.15em] text-amber-200">BRAND</span>}
              {domainSite.plans.map((plan) => <span key={plan} className="rounded-full border border-[#526cff]/50 px-4 py-1.5 text-[8px] font-semibold uppercase tracking-[.15em] text-[#7d8eff]">{plan === "venture" ? "VENTURESITE PLAN" : `${plan.toUpperCase()} PLAN`}</span>)}
            </div>
          </div>
          <div className="flex items-center justify-center"><img src={domainSite.image} alt="" className="aspect-[16/10] w-full rounded-xl border border-white/10 object-cover grayscale" /></div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-none px-7 py-14 sm:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <h2 className="text-2xl font-medium">The Concept</h2>
            <p className="mt-4 max-w-[700px] text-base font-light leading-8 text-white/55">{domainSite.concept}</p>
            <h2 className="mt-12 text-2xl font-medium">What&apos;s Available</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                ["DOMAIN", "Acquire the premium domain name."],
                ["DOMAIN + BRAND", "Domain plus complete brand identity and assets."],
                ["DOMAIN + BRAND + PLAN", "Domain, brand and your choice of development plan."],
              ].map(([title, copy]) => <div key={title} className="rounded-lg border border-white/10 bg-white/[.02] p-6"><h3 className="text-xs font-semibold tracking-[.08em]">{title}</h3><p className="mt-4 text-sm font-light leading-6 text-white/45">{copy}</p></div>)}
            </div>
            <h2 className="mt-12 text-2xl font-medium">Brand Preview</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {domainSite.brandImages.map((image, index) => <img key={image} src={image} alt="" className={`${index === 0 ? "col-span-2 aspect-[16/8]" : "aspect-[4/3]"} w-full rounded-lg border border-white/10 object-cover grayscale`} />)}
            </div>
          </div>
          <div className="lg:border-l lg:border-white/[.08] lg:pl-10">
            <h2 className="text-2xl font-medium">Interested in {domainSite.domain}?</h2>
            <form className="mt-6 space-y-3">
              {["Name *", "Email *", "Phone", "Company"].map((field) => <input key={field} placeholder={field} className="w-full rounded-md border border-white/15 bg-white/[.025] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#526cff]" />)}
              <select className="w-full rounded-md border border-white/15 bg-[#050b14] px-4 py-3 text-sm text-white/70 outline-none focus:border-[#526cff]" defaultValue="">
                <option value="" disabled>I&apos;m interested in</option>
                <option>Domain</option>
                {domainSite.brand && <option>Domain + Brand</option>}
                {domainSite.plans.includes("website") && <option>Domain + Brand + Website Plan</option>}
                {domainSite.plans.includes("realsite") && <option>Domain + Brand + RealSite Plan</option>}
                {domainSite.plans.includes("venture") && <option>Domain + Brand + VentureSite Plan</option>}
              </select>
              <textarea rows={6} placeholder="Message" className="w-full resize-none rounded-md border border-white/15 bg-white/[.025] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#526cff]" />
              <button type="submit" className="w-full rounded-md bg-[#526cff] px-6 py-4 text-[10px] font-semibold uppercase tracking-[.17em] transition hover:bg-[#6479ff]">MAKE AN INQUIRY →</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

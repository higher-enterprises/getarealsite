"use client";
import { useMemo, useState } from "react";
import Header from "@/components/navigation/navigation";
import { domains, type Plan } from "../../../../data/domainsites-data";
const filters = ["all", "domain", "brand", "website", "realsite", "venture", "plan"] as const;
export default function DomainSitesCatalogPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>(() => {
    if (typeof window === "undefined") return "all";
    const type = new URLSearchParams(window.location.search).get("type");
    return filters.find((item) => item === type) ?? "all";
  });
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => domains.filter((item) => {
    const matchesQuery = `${item.domain} ${item.description}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "all" || filter === "domain" || (filter === "brand" && item.brand) || (filter === "plan" ? item.plans.length > 0 : item.plans.includes(filter as Plan));
    return matchesQuery && matchesFilter;
  }), [filter, query]);
  return (
    <main className="min-h-screen bg-[#030811] text-white">
      <div className="border-b border-white/[.06]"><Header /></div>
      <section className="mx-auto w-full max-w-none px-7 pb-24 pt-14 sm:px-10 lg:px-14">
        <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-[#526cff]">DOMAINSITES</p>
        <h1 className="mt-3 text-5xl font-light tracking-[-.05em] sm:text-6xl">DomainSites</h1>
        <p className="mt-4 text-base font-light text-white/55">Premium domains. Real concepts. Ready to build.</p>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search domains, concepts, or industries..." className="mt-8 w-full rounded-md border border-white/15 bg-white/[.025] px-5 py-4 text-sm outline-none placeholder:text-white/30 focus:border-[#526cff]" />
        <div className="mt-5 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`rounded-full border px-5 py-2 text-[9px] font-semibold uppercase tracking-[.15em] ${filter === item ? "border-[#526cff] bg-[#526cff]" : "border-white/15 text-white/70"}`}>
              {item === "website" ? "Website Plan" : item === "realsite" ? "RealSite Plan" : item === "venture" ? "VentureSite Plan" : item}
            </button>
          ))}
        </div>
        <p className="mt-8 text-xs text-white/40">{filtered.length} DomainSites</p>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <article key={item.slug} className="overflow-hidden rounded-lg border border-white/[.09] bg-white/[.02]">
              <div className="aspect-[16/9] bg-[#0a101a]"><img src={item.image} alt="" className="h-full w-full object-cover grayscale" /></div>
              <div className="p-5">
                <a href={`https://${item.domain}`} target="_blank" rel="noreferrer" className="text-xl font-medium hover:text-[#526cff]">{item.domain} ↗</a>
                <p className="mt-2 min-h-[48px] text-sm font-light leading-6 text-white/50">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-emerald-400/30 px-3 py-1 text-[8px] font-semibold uppercase tracking-[.14em] text-emerald-300">Domain</span>
                  {item.brand && <span className="rounded-full border border-amber-300/30 px-3 py-1 text-[8px] font-semibold uppercase tracking-[.14em] text-amber-200">Brand</span>}
                  {item.plans.map((plan) => <span key={plan} className="rounded-full border border-[#526cff]/50 px-3 py-1 text-[8px] font-semibold uppercase tracking-[.14em] text-[#7d8eff]">{plan === "venture" ? "VentureSite Plan" : `${plan} Plan`}</span>)}
                </div>
                <a href={`/domainsites/${item.slug}`} className="mt-6 inline-flex text-[10px] font-semibold uppercase tracking-[.15em] text-[#526cff]">VIEW DOMAINSITE →</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

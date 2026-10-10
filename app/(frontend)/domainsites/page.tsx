"use client";
import Header from "@/components/navigation/navigation";
const sections = [
  {
    number: "01",
    eyebrow: "DOMAIN",
    title: <>Start with the <span className="text-[#526cff]">name.</span></>,
    body: "Acquire premium domains selected for their brandability, market potential, and ability to become something real.",
    href: "/domainsites/all?type=domain",
    cta: "VIEW DOMAINSITES",
    visual: (
      <div className="relative flex h-full items-center justify-center">
        <div className="relative flex aspect-[1.45/1] w-[72%] items-center justify-center rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(82,108,255,.18),transparent_48%),linear-gradient(145deg,#111827,#05080e)] shadow-[0_50px_120px_rgba(0,0,0,.65)]">
          <div className="absolute inset-[12%] rounded-[22px] border border-[#526cff]/25" />
          <div className="text-[clamp(3rem,7vw,8rem)] font-extralight tracking-[-.08em] text-white/90">www.</div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    eyebrow: "DOMAIN + BRAND",
    title: <>Don&apos;t just buy the name. Buy the <span className="text-[#526cff]">brand.</span></>,
    body: "Select DomainSites include the identity, positioning, and visual direction we've already developed around the domain.",
    href: "/domainsites/all?type=brand",
    cta: "VIEW BRANDED DOMAINSITES",
    visual: (
      <div className="relative flex h-full items-center justify-center">
        <div className="grid w-[72%] grid-cols-2 gap-4 [transform:rotate(-4deg)]">
          <div className="aspect-[4/3] rounded-xl border border-white/10 bg-[#11151d] shadow-2xl" />
          <div className="aspect-[4/3] rounded-xl border border-white/10 bg-[#0b0f16] shadow-2xl" />
          <div className="col-span-2 mx-auto flex aspect-[2.4/1] w-[68%] items-center justify-center rounded-xl border border-white/10 bg-[#151922] text-xs uppercase tracking-[.4em] text-white/35 shadow-2xl">BRAND</div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    eyebrow: "DOMAIN + BRAND + PLAN",
    title: <>Start with more than an <span className="text-[#526cff]">idea.</span></>,
    body: "Acquire the domain and brand, plus a development plan so you know exactly what to build and how to launch it.",
    href: "/domainsites/all?type=plan",
    cta: "VIEW PLANNED DOMAINSITES",
    visual: (
      <div className="grid w-full max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          ["▣", "WEBSITE PLAN", "Plan the presence."],
          ["◇", "REALSITE PLAN", "Plan the business system."],
          ["↗", "VENTURESITE PLAN", "Plan the venture."],
        ].map(([icon, title, copy]) => (
          <div key={title} className="flex min-h-[230px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[.025] p-7 text-center">
            <div className="mb-7 text-3xl text-[#526cff]">{icon}</div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[.17em]">{title}</h3>
            <p className="mt-4 text-sm font-light leading-6 text-white/50">{copy}</p>
          </div>
        ))}
      </div>
    ),
  },
];
export default function DomainSitesPage() {
  return (
    <main className="bg-[#030811] text-white">
      <section className="relative min-h-[100dvh] overflow-hidden border-b border-white/[.06]">
        <div className="absolute inset-x-0 top-0 z-50"><Header /></div>
        <div className="mx-auto grid min-h-[100dvh] max-w-[1800px] grid-cols-1 items-center px-7 pb-16 pt-28 sm:px-10 lg:grid-cols-2 lg:px-14">
          <div className="relative min-h-[440px] lg:h-[70vh]">
            <div className="absolute inset-[8%] rounded-full bg-[#526cff]/10 blur-[100px]" />
            <div className="relative flex h-full min-h-[440px] items-center justify-center">
              <div className="relative aspect-[1.5/1] w-[84%] overflow-hidden rounded-[28px] border border-[#526cff]/30 bg-[#070d18] shadow-[0_50px_120px_rgba(0,0,0,.7)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(82,108,255,.25),transparent_52%)]" />
                <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 rounded-xl border border-[#526cff]/70 bg-[#07101d]/90 px-7 py-5 text-xl font-light shadow-[0_0_40px_rgba(82,108,255,.18)]">https://youridea.com</div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[620px] lg:pl-12">
            <p className="text-[10px] font-semibold uppercase tracking-[.32em] text-white/65">DOMAINSITES</p>
            <h1 className="mt-5 text-[clamp(3rem,5vw,6rem)] font-light leading-[.98] tracking-[-.055em]">A great business starts with a <span className="text-[#526cff]">great address.</span></h1>
            <p className="mt-7 max-w-[560px] text-lg font-light leading-8 text-white/60">Premium domains with real concepts. Brand identity. And plans to build what&apos;s next.</p>
            <a href="/domainsites/all" className="mt-8 inline-flex rounded-md border border-white/30 px-6 py-3 text-[10px] font-semibold uppercase tracking-[.17em] transition hover:border-[#526cff] hover:bg-[#526cff]">VIEW DOMAINSITES →</a>
          </div>
        </div>
      </section>
      {sections.map((section, index) => (
        <section key={section.number} className="min-h-[100dvh] border-b border-white/[.06]">
          <div className="mx-auto grid min-h-[100dvh] max-w-[1800px] grid-cols-1 items-center px-7 py-20 sm:px-10 lg:grid-cols-2 lg:px-14">
            <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>{section.visual}</div>
            <div className={`max-w-[620px] ${index % 2 === 0 ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16"}`}>
              <div className="text-5xl font-light text-[#526cff]">{section.number}</div>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[.3em] text-white/50">{section.eyebrow}</p>
              <h2 className="mt-6 text-[clamp(2.8rem,4.5vw,5.5rem)] font-light leading-[.98] tracking-[-.055em]">{section.title}</h2>
              <p className="mt-7 max-w-[560px] text-lg font-light leading-8 text-white/55">{section.body}</p>
              <a href={section.href} className="mt-8 inline-flex rounded-md border border-white/30 px-6 py-3 text-[10px] font-semibold uppercase tracking-[.17em] transition hover:border-[#526cff] hover:bg-[#526cff]">{section.cta} →</a>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}

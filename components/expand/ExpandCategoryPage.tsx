import Link from "next/link";
import Header from "@/components/navigation/navigation";
import type { ExpandCategory } from "./expand-data";
import { expandCategories } from "./expand-data";

export default function ExpandCategoryPage({
  category,
}: {
  category: ExpandCategory;
}) {
  const otherCategories = expandCategories
    .filter((item) => item.slug !== category.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030811] text-white">
      <section className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[#030811]" />
        <div className="absolute right-[-12%] top-[10%] h-[850px] w-[850px] rounded-full bg-[#3048ff]/10 blur-[170px]" />
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute -left-[22%] top-[10%] h-[900px] w-[900px] rotate-45 border border-white" />
          <div className="absolute right-[-18%] top-[12%] h-[900px] w-[900px] -rotate-45 border border-white" />
        </div>

        <div className="absolute inset-x-0 top-0 z-50">
          <Header />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-14 px-7 pb-20 pt-36 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-14">
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#526cff]">
              Expand / {category.title}
            </p>
            <h1 className="mt-7 text-5xl font-light tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Make your site
              <br />
              <span className="text-[#526cff]">do more.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base font-light leading-8 text-white/50 sm:text-lg">
              {category.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#capabilities"
                className="rounded-sm bg-[#3048ff] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#526cff]"
              >
                Explore Capabilities
              </a>
              <Link
                href="/expand"
                className="rounded-sm border border-white/15 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:border-white/35 hover:text-white"
              >
                All Expand Services
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[720px]">
            <div className="absolute -inset-12 rounded-full bg-[#3048ff]/10 blur-[110px]" />
            <div className="relative overflow-hidden border border-white/[0.08] bg-[#050b15] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <img
                src={category.image}
                alt=""
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="absolute inset-4 bg-gradient-to-t from-[#030811]/65 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="relative bg-[#030811] px-7 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1380px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#526cff]">
              {category.title}
            </p>
            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] sm:text-5xl">
              Expand the capability.
              <br />
              <span className="text-white/45">Keep the experience connected.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-7 text-white/45 sm:text-base">
              Each capability can stand on its own or connect with the rest of your RealSite.
              The links below are already routed for the future dedicated service pages.
            </p>
          </div>

          <div className="mt-20 space-y-8">
            {category.sections.map((section, index) => (
              <article
                key={section.slug}
                id={section.slug}
                className="grid min-h-[430px] scroll-mt-28 grid-cols-1 overflow-hidden border border-white/[0.08] bg-[#050b15] lg:grid-cols-2"
              >
                <div className={`relative flex items-center ${index % 2 ? "lg:order-2" : ""}`}>
                  <div className="absolute inset-0 bg-[#02060c]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(48,72,255,0.14),transparent_60%)]" />
                  <div className="relative z-10 w-full p-8 sm:p-12">
                    <div className="border border-white/[0.08] bg-[#030811]/80 p-6 sm:p-8">
                      <p className="text-[9px] uppercase tracking-[0.35em] text-[#526cff]">
                        Capability {String(index + 1).padStart(2, "0")}
                      </p>
                      <div className="mt-7 grid grid-cols-2 gap-3">
                        {section.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="min-h-[92px] border border-white/[0.07] bg-white/[0.015] p-4"
                          >
                            <span className="mb-4 block h-1.5 w-1.5 rounded-full bg-[#526cff]" />
                            <p className="text-xs font-light leading-5 text-white/60">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`flex items-center p-8 sm:p-12 lg:p-16 ${index % 2 ? "lg:order-1" : ""}`}>
                  <div className="max-w-xl">
                    <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#526cff]">
                      {section.eyebrow}
                    </p>
                    <h3 className="mt-5 text-3xl font-light tracking-[-0.035em] sm:text-4xl">
                      {section.title}
                    </h3>
                    <p className="mt-5 text-base font-light leading-7 text-white/60">
                      {section.summary}
                    </p>
                    <p className="mt-5 text-sm font-light leading-7 text-white/40">
                      {section.description}
                    </p>
                    <Link
                      href={section.futureHref}
                      className="mt-8 inline-flex items-center gap-3 border-b border-[#526cff]/50 pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white transition hover:border-[#526cff] hover:text-[#526cff]"
                    >
                      Explore {section.title}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#050b15] px-7 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.42em] text-[#526cff]">Connected Expansion</p>
              <h2 className="mt-5 text-4xl font-light tracking-[-0.04em]">
                Need more than one capability?
              </h2>
              <p className="mt-5 max-w-xl text-sm font-light leading-7 text-white/45">
                Combine services across categories so commerce, content, operations,
                communication, data, and intelligence work as one system.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {otherCategories.map((item) => (
                <Link
                  key={item.slug}
                  href={`/expand/${item.slug}`}
                  className="group border border-white/[0.08] bg-[#030811] p-6 transition hover:border-[#526cff]/60"
                >
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">Expand</p>
                  <p className="mt-3 text-lg font-light text-white group-hover:text-[#526cff]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs font-light leading-5 text-white/35">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-7 py-28 text-center sm:px-10 lg:px-14">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3048ff]/10 blur-[150px]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.42em] text-[#526cff]">Expand Your RealSite</p>
          <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] sm:text-5xl">
            Add what your business
            <br />
            <span className="text-[#526cff]">needs next.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-7 text-white/45">
            Start with one capability or connect several into a larger expansion.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-sm bg-[#3048ff] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#526cff]"
          >
            Talk With RealSite
          </Link>
        </div>
      </section>
    </main>
  );
}

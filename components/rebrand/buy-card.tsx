import type { BuySite } from "./types";

type BuyCardProps = {
  site: BuySite;
};

export default function BuyCard({ site }: BuyCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#526cff]/70 bg-[#060914] shadow-2xl shadow-[#3048ff]/20">
      {/* Image */}
      <div className="relative h-[360px] overflow-hidden">
        <img
          src={site.image}
          alt={site.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#060914] via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-[.25em] text-[#6f83ff]">
            {site.category}
          </p>

          <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/70">
            {site.year}
          </span>
        </div>

        <h3 className="mt-3 text-3xl font-light tracking-tight text-white">
          {site.title}
        </h3>

        {/* Features */}
        <div className="mt-6 flex flex-wrap gap-5 border-b border-white/10 pb-6">
          {site.features.map((feature) => (
            <span
              key={feature}
              className="text-sm text-white/70"
            >
              ✓ {feature}
            </span>
          ))}
        </div>

        {/* Action */}
        <div className="mt-6 flex items-center justify-end">
          <button
            type="button"
            className="text-sm text-[#6f83ff] transition hover:text-[#8b9aff]"
          >
            Use as-is or rebrand
          </button>
        </div>
      </div>
    </article>
  );
}
import type { BuySite } from "./types";

type BuySideCardProps = {
  site: BuySite;
  side: "left" | "right";
  onClick: () => void;
};

export default function BuySideCard({
  site,
  side,
  onClick,
}: BuySideCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-[420px] overflow-hidden rounded-xl border border-white/10 bg-[#060914] text-left transition duration-500 hover:border-[#526cff] ${
        side === "left"
          ? "-rotate-2 opacity-50 hover:opacity-80"
          : "rotate-2 opacity-50 hover:opacity-80"
      }`}
    >
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={site.image}
          alt={site.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#060914] via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs uppercase tracking-[.25em] text-[#6f83ff]">
          {site.category}
        </p>

        <h3 className="mt-2 text-3xl font-light tracking-tight text-white">
          {site.title}
        </h3>

        <div className="mt-5 flex items-center justify-end">
          <span className="text-sm text-[#6f83ff]">
            Use as-is
          </span>
        </div>
      </div>
    </button>
  );
}
"use client";

import Link from "next/link";

type HeroHeight = "full" | "half" | "quarter";
type HeroAlignment = "left" | "center";

interface PageHeroProps {
  eyebrow?: string;

  title: string;
  highlight?: string;
  description?: string;

  primaryButtonText?: string;
  primaryButtonHref?: string;

  secondaryButtonText?: string;
  secondaryButtonHref?: string;

  backgroundType?: "image" | "video" | "gradient";

  backgroundImage?: string;
  backgroundVideo?: string;

  height?: HeroHeight;
  align?: HeroAlignment;

  overlay?: boolean;
}

export default function PageHero({
  eyebrow,

  title,
  highlight,
  description,

  primaryButtonText,
  primaryButtonHref,

  secondaryButtonText,
  secondaryButtonHref,

  backgroundType = "image",

  backgroundImage,

  backgroundVideo,

  height = "half",

  align = "left",

  overlay = true,
}: PageHeroProps) {
  const heights = {
    full: "min-h-screen",
    half: "min-h-[72vh]",
    quarter: "min-h-[48vh]",
  };

  return (
    <section
      className={`relative flex items-center overflow-hidden ${heights[height]}`}
    >
      {/* Background Image */}

      {backgroundType === "image" && backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}

      {/* Background Video */}

      {backgroundType === "video" && backgroundVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={backgroundVideo} />
        </video>
      )}

      {/* Gradient */}

      {backgroundType === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#091226] via-[#071426] to-[#03050d]" />
      )}

      {/* Dark Overlay */}

      {overlay && (
        <>
          <div className="absolute inset-0 bg-[#050918]/60" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#050918]/20 via-[#050918]/50 to-[#050918]" />
        </>
      )}

      {/* Content */}

      <div className="relative z-20 mx-auto w-full max-w-7xl px-8">

        <div
          className={`max-w-4xl ${
            align === "center"
              ? "mx-auto text-center"
              : ""
          }`}
        >
          {eyebrow && (
            <p className="text-sm uppercase tracking-[.4em] text-indigo-300">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-6 text-6xl font-light leading-[1.05] tracking-tight text-white lg:text-7xl">
            {title}

            {highlight && (
              <>
                {" "}
                <span className="text-indigo-400">
                  {highlight}
                </span>
              </>
            )}
          </h1>

          {description && (
            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75">
              {description}
            </p>
          )}

          {(primaryButtonText || secondaryButtonText) && (
            <div
              className={`mt-12 flex flex-wrap gap-5 ${
                align === "center"
                  ? "justify-center"
                  : ""
              }`}
            >
              {primaryButtonText && primaryButtonHref && (
                <Link
                  href={primaryButtonHref}
                  className="btn-primary"
                >
                  {primaryButtonText}
                </Link>
              )}

              {secondaryButtonText &&
                secondaryButtonHref && (
                  <Link
                    href={secondaryButtonHref}
                    className="rounded-xl border border-white/20 px-8 py-4 text-sm font-medium uppercase tracking-[.22em] text-white transition hover:border-white/40 hover:bg-white/5"
                  >
                    {secondaryButtonText}
                  </Link>
                )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
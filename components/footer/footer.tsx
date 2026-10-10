"use client";
import Image from "next/image";
import Link from "next/link";
const footerColumns = [
  {
    title: "SOLUTIONS",
    links: [
      { label: "DomainSites", href: "/domainsites" },
      { label: "StarterSites", href: "/startersites" },
      { label: "Websites", href: "/websites" },
      { label: "RealSites", href: "/realsites" },
      { label: "VentureSites", href: "/venturesites" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "Strategic Planning", href: "/plan" },
      { label: "Website Development", href: "/websites" },
      { label: "Platform Integration", href: "/expand/operations" },
      { label: "Content Creation", href: "/create/branding" },
      { label: "Hosting", href: "/launch/web-hosting" },
      { label: "Management", href: "/manage/manage" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "Locations", href: "/locations" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "LOCATIONS",
    links: [
      { label: "Local agencies. One RealSite network.", href: "/locations" },
      { label: "Explore Locations ↗", href: "/locations" },
    ],
  },
];
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030811] text-white">
      <section className="relative border-t border-white/[0.07]">
        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[#030811]" />
          <div className="absolute left-1/2 top-[55%] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#3048ff]/[0.035] blur-[180px]" />
          <div className="footer-atmosphere absolute inset-0" />
          <svg
            viewBox="0 0 1600 500"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              className="footer-network-line"
              d="
                M100 420
                C260 320 380 320 520 380
                C660 450 760 300 910 345
                C1080 400 1120 280 1320 350
              "
            />
            <path
              className="footer-network-line footer-network-line-delay"
              d="
                M300 450
                C430 360 570 350 700 405
                C850 470 930 330 1080 380
                C1200 420 1340 350 1500 400
              "
            />
            <circle
              className="footer-network-node"
              cx="520"
              cy="380"
              r="4"
            />
            <circle
              className="footer-network-node footer-node-delay"
              cx="910"
              cy="345"
              r="4"
            />
            <circle
              className="footer-network-node footer-node-delay-two"
              cx="1320"
              cy="350"
              r="4"
            />
          </svg>
        </div>
        {/* CONTENT */}
        <div className="relative z-20 mx-auto max-w-[1800px] px-7 py-20 sm:px-10 lg:px-14 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[330px_1fr] xl:grid-cols-[370px_1fr]">
            {/* BRAND */}
            <div className="border-white/10 lg:border-r lg:pr-12">
              <Link
                href="/"
                aria-label="RealSite home"
                className="inline-flex"
              >
                <Image
                  src="/images/branding/realsite-signature-logo.png"
                  alt="RealSite"
                  width={280}
                  height={106}
                  className="h-auto w-[230px] object-contain object-left"
                />
              </Link>
              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/40">A <a href="https://www.higher.enterprises">HIGHER</a>Venture</p>
                <div className="mt-7 flex items-center gap-3">
                <SocialLinks />
              </div>
            </div>
            {/* NAVIGATION */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 lg:grid-cols-4">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#526cff]">
                    {column.title}
                  </h3>
                  <nav className="mt-6 flex flex-col gap-4">
                    {column.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-[14px] font-light text-white/67 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* LEGAL */}
      <section className="relative z-30 border-t border-white/10 bg-[#030811]/95">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-5 px-7 py-6 text-[11px] font-light text-white/42 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14">
          <p>
            © {new Date().getFullYear()} RealSite. All rights reserved. A GreenwoodLabs company.
          </p>
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
            <Link
              href="/accessibility"
              className="transition hover:text-white"
            >
              Accessibility
            </Link>
          </nav>
        </div>
      </section>
      <style jsx global>{`
        @keyframes footer-atmosphere {
          0% {
            transform: translateX(-2%);
          }
          100% {
            transform: translateX(2%);
          }
        }
        .footer-atmosphere {
          background:
            radial-gradient(
              ellipse at 62% 61%,
              rgba(65, 95, 190, 0.06),
              transparent 38%
            ),
            radial-gradient(
              ellipse at 35% 50%,
              rgba(255, 255, 255, 0.025),
              transparent 35%
            );
          animation: footer-atmosphere 20s ease-in-out infinite alternate;
        }
        @keyframes footer-network {
          0% {
            stroke-dashoffset: 450;
            opacity: 0;
          }
          18% {
            opacity: 0.35;
          }
          75% {
            opacity: 0.35;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
        .footer-network-line {
          fill: none;
          stroke: rgba(65, 100, 255, 0.48);
          stroke-width: 1;
          stroke-dasharray: 5 13;
          stroke-dashoffset: 450;
          animation: footer-network 10s linear infinite;
        }
        .footer-network-line-delay {
          animation-delay: 4s;
        }
        @keyframes footer-node {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(2);
          }
        }
        .footer-network-node {
          fill: #526cff;
          transform-box: fill-box;
          transform-origin: center;
          animation: footer-node 4s ease-in-out infinite;
        }
        .footer-node-delay {
          animation-delay: 1.5s;
        }
        .footer-node-delay-two {
          animation-delay: 2.8s;
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-atmosphere,
          .footer-network-line,
          .footer-network-node {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
}
function SocialLinks() {
  return (
    <>
      <SocialLink href="#" label="LinkedIn">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </SocialLink>
      <SocialLink href="#" label="X">
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      </SocialLink>
      <SocialLink href="#" label="Instagram">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </SocialLink>
      <SocialLink href="#" label="YouTube">
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12s0-4-1-6c-.6-1.1-1.3-1.4-2.4-1.5C16.8 4.2 12 4.2 12 4.2s-4.8 0-6.6.3C4.3 4.6 3.6 4.9 3 6c-1 2-1 6-1 6s0 4 1 6c.6 1.1 1.3 1.4 2.4 1.5 1.8.3 6.6.3 6.6.3s4.8 0 6.6-.3c1.1-.1 1.8-.4 2.4-1.5 1-2 1-6 1-6Z" />
          <path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none" />
        </svg>
      </SocialLink>
    </>
  );
}
function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/60 transition-all duration-300 hover:border-[#526cff]/50 hover:bg-[#526cff]/5 hover:text-white"
    >
      {children}
    </a>
  );
}

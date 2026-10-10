"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight, BarChart3, Handshake, Search, X, Mountain,
  CalendarDays, GraduationCap, Sprout, Cog, Shirt,
  Heart, Gamepad2, Sun, MapPin, Drone, ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import styles from "./VenturePortfolio.module.css";

export type VentureCategory =
  | "Community" | "School" | "Marketplace" | "Portals"
  | "Events" | "Fundraising" | "Custom" | "Industries" | "Media";

export type Venture = {
  id: string;
  name: string;
  category: VentureCategory;
  description: string;
  image?: string;
  href?: string;
  stage?: string;
  studio?: string;
  impact?: string;
  /** Featured venture receives the largest card. Only the first featured venture is enlarged. */
  featured?: boolean;
  /** Used for the non-featured mosaic. */
  shape?: "wide" | "tall" | "standard";
  /** Show actions only when appropriate for the specific venture. */
  investHref?: string;
  acquireHref?: string;
  icon?: LucideIcon;
  accent?: string;
};

export type VenturePortfolioProps = {
  ventures?: Venture[];
  /** Controls the entire filter/sort/search toolbar. Default true. */
  showFilters?: boolean;
  /** Maximum cards shown. Omit or set null to show all. */
  limit?: number | null;
  /** Shows bottom See All link; default true when limited, false otherwise. */
  showSeeAll?: boolean;
  seeAllHref?: string;
  title?: string;
  description?: string;
  className?: string;
};

// Replace image paths with actual assets in /public/images/ventures/.
// Missing assets use a deliberate dark gradient fallback, not a broken image icon.
export const DEFAULT_VENTURES: Venture[] = [
  { id: "kamp", name: "Kamp", category: "Marketplace", description: "Smart campsites, reservations, and outdoor gear.", image: "/images/ventures/kamp.jpg", shape: "tall", icon: Mountain, stage: "Concept", studio: "RealSite Ventures", impact: "Outdoors" },
  { id: "scheddy", name: "Scheddy", category: "Marketplace", description: "Scheduling and sites for tattoo artists.", image: "/images/ventures/scheddy.jpg", shape: "wide", icon: CalendarDays, stage: "Development", studio: "RealSite Ventures", impact: "Small Business" },
  { id: "k12", name: "K12", category: "School", description: "Entrepreneurship and innovation for the next generation.", image: "/images/ventures/k12.jpg", shape: "tall", icon: GraduationCap, stage: "Concept", impact: "Youth" },
  { id: "wiley", name: "Wiley Drones", category: "Industries", description: "Autonomous delivery solutions for a more connected world.", image: "/images/ventures/wiley-drones.jpg", featured: true, icon: Drone, stage: "Concept", impact: "Technology" },
  { id: "eventsy", name: "Eventsy", category: "Events", description: "Events, conferences, and experiences.", image: "/images/ventures/eventsy.jpg", shape: "standard", icon: CalendarDays, stage: "Concept", impact: "Culture" },
  { id: "cropgap", name: "CropGap", category: "Community", description: "Close the gap between food, people, and purpose.", image: "/images/ventures/cropgap.jpg", shape: "standard", icon: Sprout, stage: "Concept", impact: "Food" },
  { id: "partsy", name: "Partsy", category: "Marketplace", description: "Find the right parts from trusted providers.", image: "/images/ventures/partsy.jpg", shape: "tall", icon: Cog, stage: "Development", impact: "Automotive" },
  { id: "adopt-a-meal", name: "Adopt-A-Meal", category: "Community", description: "Feed people. Strengthen communities.", image: "/images/ventures/adopt-a-meal.jpg", shape: "standard", icon: Heart, stage: "Concept", impact: "Food" },
  { id: "opencloset", name: "OpenCloset", category: "Community", description: "Give, receive, and keep communities clothed.", image: "/images/ventures/opencloset.jpg", shape: "standard", icon: Shirt, stage: "Concept", impact: "Community" },
  { id: "meronothite", name: "Meronothite", category: "Media", description: "Games and stories that inspire.", image: "/images/ventures/meronothite.jpg", shape: "standard", icon: Gamepad2, stage: "Concept", impact: "Entertainment" },
  { id: "kalombay", name: "KalombaySolar", category: "Industries", description: "Clean energy for stronger communities.", image: "/images/ventures/kalombay-solar.jpg", shape: "wide", icon: Sun, stage: "Concept", impact: "Energy" },
  { id: "locataria", name: "Locataria", category: "Portals", description: "Discover local businesses, services, and experiences.", image: "/images/ventures/locataria.jpg", shape: "standard", icon: MapPin, stage: "Concept", impact: "Local" },
  { id: "thankworthy", name: "ThankWorthy", category: "Fundraising", description: "Support and celebrate missionaries.", image: "/images/ventures/thankworthy.jpg", shape: "wide", icon: Heart, stage: "Concept", impact: "Community" },
  { id: "dwelll", name: "Dwelll", category: "Custom", description: "Build around your idea.", image: "/images/ventures/dwelll.jpg", shape: "standard", icon: ShoppingBag, stage: "Concept", impact: "Housing" },
];

const CATEGORY_FILTERS = ["All", "Community", "School", "Marketplace", "Portals", "Events", "Fundraising", "Custom"] as const;

function VentureCard({ venture, featured, index }: { venture: Venture; featured: boolean; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = venture.icon ?? ShoppingBag;
  const shape = featured ? "featured" : venture.shape ?? (index % 4 === 0 ? "tall" : index % 4 === 1 ? "wide" : "standard");
  return (
    <article className={`${styles.card} ${styles[shape]}`} style={{ "--card-accent": venture.accent ?? "#236bff" } as React.CSSProperties}>
      {venture.image && !imageFailed && (
        // Native img lets this work without configuring Next.js image domains.
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.photo} src={venture.image} alt="" loading="lazy" onError={() => setImageFailed(true)} />
      )}
      <div className={styles.photoShade} />
      <div className={styles.cardContent}>
        <span className={styles.categoryTag}>{venture.category}</span>
        <div className={styles.ventureName}><Icon size={featured ? 30 : 23} strokeWidth={1.8} /><h3>{venture.name}</h3></div>
        <p>{venture.description}</p>
        <div className={styles.cardActions}>
          {venture.href ? <a className={styles.roundAction} href={venture.href} aria-label={`Explore ${venture.name}`} title={`Explore ${venture.name}`}><ArrowRight size={17} /></a> : <span />}
          <div className={styles.commercialActions}>
            {venture.investHref && <a href={venture.investHref} className={styles.iconAction} aria-label={`Invest in ${venture.name}`} title={`Invest in ${venture.name}`}><BarChart3 size={19} /><span>Invest</span></a>}
            {venture.acquireHref && <a href={venture.acquireHref} className={styles.iconAction} aria-label={`Inquire about acquiring ${venture.name}`} title={`Acquire ${venture.name}`}><Handshake size={19} /><span>Acquire</span></a>}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function VenturePortfolio({
  ventures = DEFAULT_VENTURES,
  showFilters = true,
  limit = null,
  showSeeAll,
  seeAllHref = "/ventures",
  title = "Featured Ventures.",
  description = "A growing portfolio of ventures across communities, industries, and generations — from early ideas to market-ready platforms.",
  className = "",
}: VenturePortfolioProps) {
  const [category, setCategory] = useState<string>("All");
  const [stage, setStage] = useState("");
  const [studio, setStudio] = useState("");
  const [impact, setImpact] = useState("");
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const stages = useMemo(() => [...new Set(ventures.map(v => v.stage).filter((v): v is string => !!v))].sort(), [ventures]);
  const studios = useMemo(() => [...new Set(ventures.map(v => v.studio).filter((v): v is string => !!v))].sort(), [ventures]);
  const impacts = useMemo(() => [...new Set(ventures.map(v => v.impact).filter((v): v is string => !!v))].sort(), [ventures]);

  const filtered = useMemo(() => ventures.filter(v => {
    if (!showFilters) return true;
    return (category === "All" || v.category === category)
      && (!stage || v.stage === stage)
      && (!studio || v.studio === studio)
      && (!impact || v.impact === impact)
      && (!search || `${v.name} ${v.category} ${v.description}`.toLowerCase().includes(search.toLowerCase()));
  }), [ventures, showFilters, category, stage, studio, impact, search]);

  const visible = limit == null ? filtered : filtered.slice(0, Math.max(0, Math.floor(limit)));
  const featuredId = visible.find(v => v.featured)?.id;
  const displaySeeAll = showSeeAll ?? limit != null;

  return (
    <section className={`${styles.section} ${className}`} aria-label="Venture portfolio">
      <div className={styles.container}>
        <div className={styles.intro}>
          <div><div className={styles.eyebrow}><span>PORTFOLIO</span><i /></div><h2>{title.startsWith("Featured ") ? <>Featured <em>{title.slice(9)}</em></> : title}</h2></div>
          <p>{description}</p>
        </div>
        {showFilters && <div className={styles.toolbar}>
          <div className={styles.categories} role="group" aria-label="Filter by venture type">
            {CATEGORY_FILTERS.map(item => <button key={item} type="button" aria-pressed={category === item} className={`${styles.filterChip} ${category === item ? styles.selected : ""}`} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
          <div className={styles.sortControls}>
            <label className={styles.selectWrap}><span className={styles.srOnly}>Stage</span><select value={stage} onChange={e => setStage(e.target.value)}><option value="">Stage</option>{stages.map(x => <option key={x}>{x}</option>)}</select></label>
            <label className={styles.selectWrap}><span className={styles.srOnly}>Studio</span><select value={studio} onChange={e => setStudio(e.target.value)}><option value="">Studio</option>{studios.map(x => <option key={x}>{x}</option>)}</select></label>
            <label className={styles.selectWrap}><span className={styles.srOnly}>Impact</span><select value={impact} onChange={e => setImpact(e.target.value)}><option value="">Impact</option>{impacts.map(x => <option key={x}>{x}</option>)}</select></label>
            <button type="button" className={styles.searchToggle} onClick={() => { setSearchOpen(!searchOpen); setSearch(""); }} aria-label={searchOpen ? "Close search" : "Search ventures"}>{searchOpen ? <X size={18} /> : <Search size={18} />}</button>
          </div>
          {searchOpen && <input className={styles.searchInput} value={search} onChange={e => setSearch(e.target.value)} placeholder="Search ventures..." aria-label="Search ventures" />}
        </div>}
        <div className={styles.mosaic}>
          {visible.map((venture, index) => <VentureCard key={venture.id} venture={venture} featured={venture.id === featuredId} index={index} />)}
        </div>
        {visible.length === 0 && <p className={styles.empty}>No ventures match these filters.</p>}
        {displaySeeAll && <a className={styles.seeAll} href={seeAllHref}><span />See All Ventures<span /><ArrowRight size={19} /></a>}
      </div>
    </section>
  );
}

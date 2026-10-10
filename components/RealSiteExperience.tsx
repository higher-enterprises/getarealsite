"use client";

import { useEffect, useState } from "react";
import {
  BriefcaseBusiness, ChevronLeft, ChevronRight, Globe2, MessageCircle,
  ShoppingCart, Workflow, Megaphone, ExternalLink,
} from "lucide-react";
import styles from "./RealSiteExperience.module.css";

type Feature = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: typeof Globe2;
  kind: "included" | "optional";
  className: string;
};

const features: Feature[] = [
  { id: "website", title: "Website", subtitle: "Your digital storefront", description: "A professionally built website that turns visitors into opportunities.", image: "/images/realsites/features/website.jpg", icon: Globe2, kind: "included", className: "website" },
  { id: "client", title: "Client Experience", subtitle: "Every conversation matters", description: "Capture inquiries, respond to customers, and keep relationships moving forward.", image: "/images/realsites/features/client-experience.jpg", icon: MessageCircle, kind: "included", className: "client" },
  { id: "operations", title: "Asana Operations", subtitle: "Work organized from day one", description: "Turn incoming requests into actionable work with a configured Asana foundation.", image: "/images/realsites/features/asana-operations.jpg", icon: Workflow, kind: "included", className: "operations" },
  { id: "service", title: "Service Delivery", subtitle: "From request to completion", description: "Add booking, quotes, proposals, invoicing, and industry-specific delivery tools.", image: "/images/realsites/features/service-delivery.jpg", icon: BriefcaseBusiness, kind: "optional", className: "service" },
  { id: "sales", title: "Product Sales", subtitle: "Make every transaction count", description: "Add products, checkout, payments, subscriptions, and memberships.", image: "/images/realsites/features/product-sales.jpg", icon: ShoppingCart, kind: "optional", className: "sales" },
];

export default function RealSiteExperience() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % features.length);
      setRevealed(true);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const choose = (index: number) => {
    setActive(index);
    setRevealed(true);
    setPaused(true);
  };

  const selected = features[active];
  const SelectedIcon = selected.icon;

  return (
    <section className={styles.section} aria-label="What's inside your RealSite">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>MORE THAN A WEBSITE</p>
          <h2>Everything <span>your business</span> needs.</h2>
          <p>A connected website, customer experience, and operational foundation — with more when you need it.</p>
        </header>

        <div className={styles.stage}>
          <div className={styles.orbit} aria-hidden="true" />
          <div className={styles.orbitInner} aria-hidden="true" />

          <div className={styles.laptop}>
            <div className={styles.laptopScreen}>
              {/* Replace with your real website screenshot. */}
              <img src="/images/realsites/website-preview.jpg" alt="Example RealSite website" />
              <div className={styles.screenFallback} aria-hidden="true">
                <span>REAL<span className={styles.blue}>SITE</span></span>
                <small>YOUR BUSINESS. CONNECTED.</small>
              </div>
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  className={`${styles.hotspot} ${styles[`hotspot${index}`]} ${active === index ? styles.hotspotActive : ""}`}
                  aria-label={`Explore ${feature.title}`}
                  aria-pressed={active === index}
                  onMouseEnter={() => choose(index)}
                  onFocus={() => choose(index)}
                  onClick={() => choose(index)}
                  type="button"
                ><span /></button>
              ))}
            </div>
            <div className={styles.laptopBase} />
          </div>

          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = active === index;
            return (
              <div key={feature.id} className={`${styles.satellite} ${styles[feature.className]} ${isActive ? styles.satelliteActive : ""}`}>
                <button
                  type="button"
                  className={styles.satelliteTrigger}
                  aria-label={`Show ${feature.title}`}
                  aria-pressed={isActive}
                  onMouseEnter={() => choose(index)}
                  onFocus={() => choose(index)}
                  onClick={() => choose(index)}
                >
                  <span className={styles.satelliteIcon}><Icon size={20} strokeWidth={1.55} /></span>
                  <span className={styles.satelliteTitle}>{feature.title}</span>
                  <span className={styles.satelliteType}>{feature.kind === "included" ? "INCLUDED" : "OPTIONAL"}</span>
                </button>
                <div className={styles.connector} aria-hidden="true" />
                <div className={styles.featureImage}>
                  <img src={feature.image} alt="" loading="lazy" />
                  <div className={styles.imageFallback}><Icon size={38} strokeWidth={1} /></div>
                </div>
              </div>
            );
          })}

          <div className={`${styles.detail} ${revealed ? styles.detailRevealed : ""}`} aria-live="polite">
            <div className={styles.detailTop}>
              <span>{String(active + 1).padStart(2, "0")} / 05</span>
              <span>{selected.kind === "included" ? "REAL SITE FOUNDATION" : "OPTIONAL SOLUTION"}</span>
            </div>
            <div className={styles.detailBody}>
              <SelectedIcon size={21} strokeWidth={1.5} />
              <div>
                <h3>{selected.title}</h3>
                <p className={styles.detailSubtitle}>{selected.subtitle}</p>
                <p>{selected.description}</p>
              </div>
            </div>
            <div className={styles.controls}>
              <button type="button" aria-label="Previous feature" onClick={() => choose((active - 1 + features.length) % features.length)}><ChevronLeft size={18}/></button>
              <button type="button" aria-label="Next feature" onClick={() => choose((active + 1) % features.length)}><ChevronRight size={18}/></button>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.legend}><span className={styles.legendDot} /> Included: Website + Asana + Client Experience <span className={styles.legendDivider} /> <span className={styles.legendDotOptional} /> Optional: Service Delivery + Product Sales</div>
          <p>One RealSite. Configured around your business.</p>
        </footer>
      </div>
    </section>
  );
}

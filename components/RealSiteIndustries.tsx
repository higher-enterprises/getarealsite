"use client";

import { useState } from "react";
import styles from "./RealSiteIndustries.module.css";

type Industry = {
  id: string;
  label: string;
  name: string;
  headline: string;
  description: string;
  services: string[];
  additions: string[];
  image?: string;
  websiteImage?: string;
  href: string;
};

const industries: Industry[] = [
  { id: "barbershop", label: "Barbershops", name: "The Modern Barber", headline: "More appointments. Less back-and-forth.", description: "Turn visitors into booked clients, then organize every inquiry and follow-up behind the scenes.", services: ["Client inquiries", "Asana operations", "Customer follow-up"], additions: ["Appointment booking", "Deposits & payments", "Product sales"], image: "/images/realsites/industries/barbershop.jpg", websiteImage: "/images/realsites/industries/barbershop-site.jpg", href: "/realsites/barbershops" },
  { id: "restaurant", label: "Restaurants & Cafés", name: "The Daily Bean", headline: "More than a menu. A better way to serve.", description: "A connected online presence for attracting regulars and managing customer requests.", services: ["Customer inquiries", "Asana operations", "Customer experience"], additions: ["Online ordering", "Reservations", "Gift cards & loyalty"], image: "/images/realsites/industries/cafe.jpg", websiteImage: "/images/realsites/industries/cafe-site.jpg", href: "/realsites/restaurants" },
  { id: "contractor", label: "Home Services", name: "Built to Deliver", headline: "Turn the next inquiry into the next job.", description: "Give homeowners a direct path to your team, with organized requests and work behind every lead.", services: ["Quote request forms", "Asana operations", "Client updates"], additions: ["Estimates & proposals", "Job scheduling", "Invoices & payments"], image: "/images/realsites/industries/contractor.jpg", websiteImage: "/images/realsites/industries/contractor-site.jpg", href: "/realsites/home-services" },
  { id: "retail", label: "Retail", name: "The Local Edit", headline: "Your storefront doesn't end at the door.", description: "A branded destination connected to the people and processes that keep your store running.", services: ["Customer inquiries", "Asana operations", "Customer support"], additions: ["Online catalog", "Checkout & payments", "Subscriptions"], image: "/images/realsites/industries/retail.jpg", websiteImage: "/images/realsites/industries/retail-site.jpg", href: "/realsites/retail" },
  { id: "professional", label: "Professional Services", name: "Practice & Partners", headline: "Make a strong first impression. Then deliver.", description: "Capture qualified inquiries and coordinate the work that follows, all from one connected foundation.", services: ["Client intake", "Asana operations", "Client experience"], additions: ["Consultation booking", "Proposals", "Project delivery"], image: "/images/realsites/industries/professional.jpg", websiteImage: "/images/realsites/industries/professional-site.jpg", href: "/realsites/professional-services" },
  { id: "fitness", label: "Fitness & Wellness", name: "Move Together", headline: "Build a community that keeps coming back.", description: "Make it easy for members to connect with your business and keep the team organized.", services: ["Member inquiries", "Asana operations", "Customer support"], additions: ["Class booking", "Membership payments", "Merchandise"], image: "/images/realsites/industries/fitness.jpg", websiteImage: "/images/realsites/industries/fitness-site.jpg", href: "/realsites/fitness" },
];

const Check = () => <span className={styles.check} aria-hidden="true">✓</span>;

export default function RealSiteIndustries() {
  const [selected, setSelected] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const active = industries[selected];
  const change = (index: number) => setSelected((index + industries.length) % industries.length);
  const failed = (key: string) => !!imageErrors[key];
  const markFailed = (key: string) => setImageErrors((previous) => ({ ...previous, [key]: true }));

  return (
      <section className={styles.industries} id="realsite-industries" aria-labelledby="realsite-industries-title">
        <div className={styles.industryBackdrop} aria-hidden="true" />
        {active.image && !failed(`${active.id}-bg`) && <img key={`${active.id}-bg`} className={styles.industryBackgroundPhoto} src={active.image} alt="" onError={() => markFailed(`${active.id}-bg`)} />}
        <div className={styles.container}>
          <p className={styles.eyebrow}>BUILT FOR REAL BUSINESSES</p>
          <h2 id="realsite-industries-title">A RealSite for <span>your kind of business.</span></h2>
          <p className={styles.industryIntro}>Select a business type to explore a RealSite configured around its customers, work, and sales.</p>
          <div className={styles.industryTabs} role="tablist" aria-label="Business types">
            {industries.map((industry, index) => <button key={industry.id} type="button" role="tab" aria-selected={index === selected} aria-controls="industry-showcase" id={`industry-tab-${industry.id}`} className={`${styles.industryTab} ${index === selected ? styles.activeTab : ""}`} onClick={() => change(index)}>{industry.label}</button>)}
          </div>
          <div className={styles.showcase} id="industry-showcase" role="tabpanel" aria-labelledby={`industry-tab-${active.id}`} key={active.id}>
            <div className={styles.showcaseCopy}>
              <span className={styles.counter}>{String(selected + 1).padStart(2, "0")} / {String(industries.length).padStart(2, "0")}</span>
              <p className={styles.showcaseLabel}>{active.label.toUpperCase()}</p>
              <h3>{active.headline}</h3>
              <p className={styles.showcaseDescription}>{active.description}</p>
              <div className={styles.solutionLists}>
                <div><h4>EVERY REALSITE</h4>{active.services.map((feature) => <span key={feature}><Check />{feature}</span>)}</div>
                <div><h4>OPTIONAL SOLUTIONS</h4>{active.additions.map((feature) => <span key={feature}><span className={styles.optionalBullet}>+</span>{feature}</span>)}</div>
              </div>
              <a className={styles.showcaseLink} href={active.href}>EXPLORE {active.label.toUpperCase()} REALSITES <span aria-hidden="true">↗</span></a>
            </div>
            <div className={styles.showcaseVisual}>
              <div className={styles.device}>
                <div className={styles.deviceBar}><i /><i /><i /><span>{active.name.toLowerCase().replaceAll(" ", "")}.example</span></div>
                <div className={styles.deviceScreen}>
                  {active.websiteImage && !failed(`${active.id}-site`) ? <img src={active.websiteImage} alt={`${active.label} example website preview`} onError={() => markFailed(`${active.id}-site`)} /> : <div className={styles.deviceFallback}><span>{active.name}</span><strong>{active.headline}</strong><span className={styles.fakeCta}>EXPLORE SERVICES ↗</span></div>}
                </div>
              </div>
              <div className={styles.visualCaption}>REAL BUSINESS. REAL SITE. <span>REAL POSSIBILITIES.</span></div>
            </div>
          </div>
          <div className={styles.carouselFooter}>
            <span>{active.label} <span className={styles.footerSeparator}>/</span> RealSite solutions</span>
            <div className={styles.carouselButtons}><button type="button" onClick={() => change(selected - 1)} aria-label="Previous business type">←</button><button type="button" onClick={() => change(selected + 1)} aria-label="Next business type">→</button></div>
          </div>
        </div>
      </section>
  );
}

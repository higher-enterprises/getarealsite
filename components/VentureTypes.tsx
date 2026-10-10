"use client";

import { useState } from "react";
import {
  UsersRound, GraduationCap, ShoppingCart, LayoutGrid, CalendarDays,
  Heart, Box, Check, type LucideIcon,
} from "lucide-react";
import styles from "./VentureTypes.module.css";

type Venture = {
  id: string;
  name: string;
  subtitle: string;
  headline: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  brand: string;
  previewTitle: string;
  previewSubtitle: string;
  image?: string;
};

const ventures: Venture[] = [
  {
    id: "community", name: "CommunityVenture", subtitle: "Connect people",
    headline: "CommunityVenture",
    description: "Bring people together around a shared interest, mission, or movement. Build membership, engagement, and a real community online with features designed for connection, collaboration, and growth.",
    features: ["Member profiles and networking", "Groups and discussions", "Events and meetups", "Content sharing and media", "Memberships and subscriptions", "Custom features for your community"],
    icon: UsersRound, brand: "HeyFam", previewTitle: "A community for real life.", previewSubtitle: "People. Purpose. Progress.",
    image: "/images/ventures/community.jpg",
  },
  {
    id: "school", name: "SchoolVenture", subtitle: "Educate and train",
    headline: "SchoolVenture",
    description: "Create an educational platform built around how you teach. Bring courses, students, instructors, and learning experiences together in one place.",
    features: ["Courses and learning paths", "Student and instructor profiles", "Enrollment and payments", "Assignments and assessments", "Certificates and progress", "Classroom communities"],
    icon: GraduationCap, brand: "SchoolVenture", previewTitle: "Learning without limits.", previewSubtitle: "Your academy. Your experience.",
    image: "/images/ventures/school.jpg",
  },
  {
    id: "marketplace", name: "MarketplaceVenture", subtitle: "Products, services, bookings",
    headline: "MarketplaceVenture",
    description: "Connect buyers with sellers, customers with providers, or people with opportunities. Support transactions, bookings, and marketplace operations on your terms.",
    features: ["Buyer and provider accounts", "Products and service listings", "Booking and scheduling", "Payments and commissions", "Search and discovery", "Vendor management"],
    icon: ShoppingCart, brand: "Scheddy", previewTitle: "Find your artist. Book with ease.", previewSubtitle: "Discover. Schedule. Connect.",
    image: "/images/ventures/marketplace.jpg",
  },
  {
    id: "portals", name: "PortalsVenture", subtitle: "Customer, employee, partner",
    headline: "PortalsVenture",
    description: "Give customers, teams, partners, and vendors a secure place to access the information, resources, and services they need.",
    features: ["Secure accounts and permissions", "Customer and employee dashboards", "Document and resource libraries", "Requests and approvals", "System integrations", "Personalized access"],
    icon: LayoutGrid, brand: "PortalsVenture", previewTitle: "Everything in one place.", previewSubtitle: "A workspace for every relationship.",
    image: "/images/ventures/portals.jpg",
  },
  {
    id: "events", name: "EventsVenture", subtitle: "Festivals and conferences",
    headline: "EventsVenture",
    description: "Build the digital home for a complete event experience, from discovery and ticketing to schedules, exhibitors, and attendee engagement.",
    features: ["Event and festival websites", "Tickets and registration", "Lineups and schedules", "Venues and interactive maps", "Sponsors and exhibitors", "Attendee experiences"],
    icon: CalendarDays, brand: "EventsVenture", previewTitle: "Make every moment count.", previewSubtitle: "One destination. The whole experience.",
    image: "/images/ventures/events.jpg",
  },
  {
    id: "fundraising", name: "FundraisingVenture", subtitle: "Campaigns and impact",
    headline: "FundraisingVenture",
    description: "Launch an end-to-end fundraising destination for campaigns, causes, capital initiatives, and communities of supporters.",
    features: ["Campaign landing pages", "Donations and recurring giving", "Fundraising teams", "Goals and progress tracking", "Sponsor and donor experiences", "Impact reporting"],
    icon: Heart, brand: "FundraisingVenture", previewTitle: "Turn support into impact.", previewSubtitle: "Every contribution moves us forward.",
    image: "/images/ventures/fundraising.jpg",
  },
  {
    id: "custom", name: "CustomVenture", subtitle: "Build around your idea",
    headline: "CustomVenture",
    description: "When your idea doesn't fit a template, build a platform around the experience, business model, and functionality that make it original.",
    features: ["Discovery and platform planning", "Custom interface and experience", "Accounts and access controls", "Specialized business logic", "Third-party integrations", "Scalable product architecture"],
    icon: Box, brand: "CustomVenture", previewTitle: "Something entirely new.", previewSubtitle: "Built for your vision.",
    image: "/images/ventures/custom.jpg",
  },
];

function VenturePreview({ venture }: { venture: Venture }) {
  const [broken, setBroken] = useState(false);
  return (
    <div className={styles.devices} key={venture.id}>
      <div className={styles.laptop}>
        <div className={styles.laptopScreen}>
          <div className={styles.browserBar}><span /><span /><span /><i /></div>
          <div className={styles.previewHeader}><strong>{venture.brand}</strong><span>Discover &nbsp; Explore &nbsp; Connect</span></div>
          <div className={styles.previewHero}>
            {venture.image && !broken && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={venture.image} alt="" onError={() => setBroken(true)} />
            )}
            <div className={styles.previewCopy}>
              <h3>{venture.previewTitle}</h3><p>{venture.previewSubtitle}</p>
              <span className={styles.fakeButton}>Explore</span>
            </div>
          </div>
          <div className={styles.previewTiles}><span /><span /><span /><span /></div>
        </div>
        <div className={styles.laptopBase} />
      </div>
      <div className={styles.phone}>
        <div className={styles.phoneNotch} />
        <div className={styles.phoneBrand}>{venture.brand}</div>
        <div className={styles.phoneHero}>{venture.previewTitle}</div>
        <div className={styles.phoneCard} /><div className={styles.phoneCardSmall} />
        <div className={styles.phoneNav}>⌂ &nbsp; ◇ &nbsp; ◎ &nbsp; ☰</div>
      </div>
    </div>
  );
}

export default function VentureTypes() {
  const [selected, setSelected] = useState(0);
  const venture = ventures[selected];

  return (
    <section className={styles.section} id="venture-types" aria-labelledby="venture-types-heading">
      <div className={styles.container}>
        <div className={styles.intro}>
          <div><div className={styles.eyebrow}>VENTURE TYPES <span /></div>
            <h2 id="venture-types-heading">Explore our <em>ventures.</em></h2>
          </div>
          <p>Each VentureSite is tailored with the right features, structure, and growth path for your idea. Select a venture type to explore details and see examples.</p>
        </div>
        <div className={styles.experience} style={{ "--active-index": selected } as React.CSSProperties}>
          <nav className={styles.nav} aria-label="Venture types">
            {ventures.map((item, index) => {
              const Icon = item.icon;
              return (
                <button key={item.id} type="button"
                  className={`${styles.tab} ${index === selected ? styles.active : ""}`}
                  aria-pressed={index === selected}
                  onClick={() => setSelected(index)}>
                  <Icon className={styles.tabIcon} strokeWidth={1.65} aria-hidden="true" />
                  <span><strong>{item.name}</strong><small>{item.subtitle}</small></span>
                </button>
              );
            })}
          </nav>
          <div className={styles.detail} role="region" aria-live="polite" aria-label={`${venture.name} details`}>
            <div className={styles.detailInner}>
              <VenturePreview venture={venture} />
              <div className={styles.copy}>
                <div className={styles.eyebrow}>VENTURE TYPE</div>
                <h3>{venture.headline.replace("Venture", "")}<em>Venture</em></h3>
                <p>{venture.description}</p>
                <ul>{venture.features.map(feature => <li key={feature}><span className={styles.check}><Check size={14} strokeWidth={2.5}/></span>{feature}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

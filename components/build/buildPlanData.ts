import type { BuildFeature, OtherPlan } from "./BuildPlanPage";

export const planCatalog = [
  { name: "Starter", pages: "1 PAGE REALSITE", description: "A focused professional presence for businesses that need one strong page to get started.", price: "$799", href: "/build/starter" },
  { name: "Complete", pages: "UP TO 7 PAGES", description: "Everything your business needs to turn visitors into customers.", price: "$2,999", href: "/build/complete" },
  { name: "Professional", pages: "UP TO 15 PAGES", description: "A larger digital presence for established businesses with more content, integrations, and conversion paths.", price: "$4,999", href: "/build/professional" },
  { name: "Enterprise", pages: "UP TO 25 PAGES", description: "An expansive RealSite for organizations with multiple audiences, complex architecture, and advanced requirements.", price: "$9,999", href: "/build/enterprise" },
] satisfies OtherPlan[];

const featureDefinitions = [
  ["Custom Page Design", "Purpose-built layouts designed around your business."],
  ["Mobile Responsive", "A polished experience across phones, tablets, and desktops."],
  ["SEO Foundation", "Technical and on-page foundations for search visibility."],
  ["Contact & Lead Capture", "Forms and conversion paths that turn visits into inquiries."],
  ["Service / Product Pages", "Dedicated pages that explain and sell what you offer."],
  ["Image & Media Integration", "Professional presentation of supplied or sourced media."],
  ["Blog / News Capability", "Publish useful content, updates, and resources."],
  ["Analytics & Reporting", "Measure traffic, behavior, and meaningful conversions."],
  ["Social Media Integration", "Connect your website to the channels where customers engage."],
  ["Maps & Location", "Location information, maps, and local customer pathways."],
  ["Security & Performance", "SSL, optimization, and launch-ready technical practices."],
  ["Launch Support", "Final testing, launch assistance, and post-launch support."],
] as const;

export function featuresFor(count: number): BuildFeature[] {
  return featureDefinitions.map(([title, description], index) => ({ title, description, included: index < count }));
}
export function otherPlans(current: string): OtherPlan[] { return planCatalog.filter((p) => p.name !== current); }

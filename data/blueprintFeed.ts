import type { BlueprintFeed, BlueprintDesign, BlueprintSection } from "@/components/blueprints/BlueprintCarousel";
const section = (id: string, label: string, heightPx: number, kind: BlueprintSection["kind"], description: string): BlueprintSection => ({ id, label, heightPx, kind, description });
const header = section("header", "Header", 80, "header", "Logo, navigation, and primary call to action.");
const footer = section("footer", "Footer", 220, "footer", "Navigation links, social channels, business details, and copyright.");
const designs: BlueprintDesign[] = [
  { id: "classic", name: "The Classic", subtitle: "A balanced, complete business introduction.", widthPx: 1440, layout: "classic", sections: [
    header,
    section("hero", "Hero", 560, "hero", "A balanced headline, supporting message, CTA, and image."),
    section("services", "Services", 320, "services", "Four clear offerings presented in an even row."),
    section("about", "About", 420, "about", "Business story beside a supporting photograph."),
    section("differentiation", "Testimonials", 380, "testimonials", "One differentiation feature: customer testimonials."),
    section("contact", "Contact", 480, "contact", "Contact form alongside a location map."), footer
  ] },
  { id: "showcase", name: "The Showcase", subtitle: "An image-first layout for visual work.", widthPx: 1440, layout: "showcase", sections: [
    header,
    section("hero", "Portfolio Hero", 650, "hero", "Large feature imagery takes priority, with concise messaging and a CTA."),
    section("gallery", "Featured Projects", 540, "gallery", "A prominent asymmetric gallery of selected projects."),
    section("services", "Capabilities", 300, "services", "A compact summary of creative services."),
    section("about", "Studio Story", 380, "about", "Introduce the studio and its creative approach."),
    section("contact", "Project Inquiry", 460, "contact", "An inquiry form for new projects."), footer
  ] },
  { id: "professional", name: "The Professional", subtitle: "Expertise, trust, and appointments.", widthPx: 1440, layout: "professional", sections: [
    header,
    section("hero", "Expertise Hero", 560, "hero", "Lead with credentials, an expert portrait, and an appointment CTA."),
    section("about", "Professional Profile", 440, "about", "An in-depth introduction and professional qualifications."),
    section("services", "Areas of Expertise", 370, "services", "Organized service areas and specialties."),
    section("differentiation", "Meet the Expert", 390, "owner", "One differentiation feature: owner or practitioner profile."),
    section("contact", "Book a Consultation", 500, "contact", "Consultation inquiry with contact information."), footer
  ] },
  { id: "local", name: "The Local", subtitle: "Help nearby customers find and contact you.", widthPx: 1440, layout: "local", sections: [
    header,
    section("hero", "Local Hero", 520, "hero", "Show what the business does and how to reach it quickly."),
    section("services", "Popular Services", 370, "services", "Show the most requested local services."),
    section("contact", "Find Us", 540, "contact", "Prominent map, location details, hours, and inquiry form."),
    section("about", "Our Neighborhood Story", 350, "about", "Connect the business to its community."),
    section("differentiation", "Customer Reviews", 360, "testimonials", "One differentiation feature: local customer reviews."), footer
  ] },
];
export const blueprintFeed = {
  eyebrow: "ONE-PAGE BLUEPRINTS",
  title: "Designed for real businesses.",
  highlight: "Built to get real results.",
  description: "Explore four distinct one-page website arrangements, each built around the needs of a different kind of business.",
  intervalMs: 6500,
  gridAsset: "/assets/blueprints/drafting-grid.svg",
  designs,
} satisfies BlueprintFeed;

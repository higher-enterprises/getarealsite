export type WorkProject = {
  slug: string;
  name: string;
  industry: string;
  location: string;
  industryGroup: string;
  platform: string;
  expertise: string[];
  tags: string[];

  cardImage: string;
  heroImage?: string;
  logo?: string;
  owner?: string;
  desktop?: string;
  tablet?: string;
  mobile?: string;

  eyebrow?: string;
  headline?: string;
  intro?: string;
  challengeHeadline?: string;
  challenge?: string;
  solutionHeadline?: string;
  solution?: string;
  services?: string[];
};

export const workProjects: WorkProject[] = [
  {
    slug: "courage-pools",
    name: "Courage Pools",
    industry: "Custom Pool Builder",
    location: "Newcastle, CA",
    industryGroup: "Home & Construction",
    platform: "Next.js",
    expertise: ["Lead Generation", "Local Search"],
    tags: ["Website", "Lead Generation", "Local Search"],
    cardImage: "/projects/courage-pools/background.png",
    heroImage: "/projects/courage-pools/background.png",
    logo: "/projects/courage-pools/logo.png",
    owner: "/projects/courage-pools/owner.png",
    desktop: "/projects/courage-pools/desktop.png",
    tablet: "/projects/courage-pools/tablet.png",
    mobile: "/projects/courage-pools/mobile.png",
    eyebrow: "WEBSITE · LOCAL BUSINESS · LEAD GENERATION",
    headline: "Building a digital home for a custom pool builder.",
    intro:
      "Courage Pools needed a digital presence that could reflect the quality of its work, establish credibility with prospective customers, and give the business a stronger platform for generating local opportunities.",
    challengeHeadline: "The site has to earn confidence.",
    challenge:
      "For a high-consideration service like a custom pool, the website has to do more than look good. It has to help a prospective customer understand the company, see the quality of the work, and feel confident enough to take the next step.",
    solutionHeadline: "Turn attention into action.",
    solution:
      "Realsite created a modern, visual-first website experience built around Courage Pools' work and local presence. The experience is designed to make the company feel established, capable, and easy to engage across desktop, tablet, and mobile.",
    services: [
      "Website Strategy",
      "UX / UI Design",
      "Responsive Development",
      "Lead Generation",
      "Local Search",
      "Brand Presentation",
    ],
  },
  {
    slug: "core-momentum-pilates",
    name: "Core Momentum Pilates",
    industry: "Wellness Studio",
    location: "Newcastle, CA",
    industryGroup: "Health & Wellness",
    platform: "Next.js",
    expertise: ["Booking", "Local Search"],
    tags: ["Website", "Booking", "Local Search"],
    cardImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "mb-concrete",
    name: "MB Concrete",
    industry: "Construction",
    location: "Sacramento, CA",
    industryGroup: "Home & Construction",
    platform: "Next.js",
    expertise: ["Lead Generation", "Brand"],
    tags: ["Website", "Lead Generation", "Brand"],
    cardImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "junk-punk",
    name: "Junk Punk",
    industry: "Home Services",
    location: "Northern CA",
    industryGroup: "Home Services",
    platform: "Next.js",
    expertise: ["Commerce", "Brand"],
    tags: ["Website", "Commerce", "Brand"],
    cardImage:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "total-derma-care",
    name: "Total Derma Care",
    industry: "Medical Aesthetics",
    location: "Roseville, CA",
    industryGroup: "Health & Wellness",
    platform: "Next.js",
    expertise: ["Booking", "Growth"],
    tags: ["Website", "Booking", "Brand"],
    cardImage:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "imagine-builders",
    name: "Imagine Builders",
    industry: "Home Builder",
    location: "Northern CA",
    industryGroup: "Home & Construction",
    platform: "Next.js",
    expertise: ["Lead Generation", "Brand"],
    tags: ["Website", "Lead Generation", "Brand"],
    cardImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "portillos",
    name: "Portillo’s",
    industry: "Restaurants",
    location: "Multiple Locations",
    industryGroup: "Food & Beverage",
    platform: "Custom",
    expertise: ["Commerce", "Brand"],
    tags: ["Website", "Commerce", "Brand"],
    cardImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "mecum-auctions",
    name: "Mecum Auctions",
    industry: "Automotive",
    location: "Nationwide",
    industryGroup: "Automotive",
    platform: "Custom",
    expertise: ["Platform", "Brand"],
    tags: ["Website", "Auctions", "Brand"],
    cardImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "spraying-systems",
    name: "Spraying Systems",
    industry: "Industrial Services",
    location: "Multiple Locations",
    industryGroup: "Industrial",
    platform: "Next.js",
    expertise: ["Lead Generation", "Brand"],
    tags: ["Website", "Lead Generation", "Brand"],
    cardImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "homeserve-usa",
    name: "HomeServe USA",
    industry: "Professional Services",
    location: "Nationwide",
    industryGroup: "Professional Services",
    platform: "Next.js",
    expertise: ["Growth", "Brand"],
    tags: ["Website", "Brand", "Growth"],
    cardImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85",
  },
];

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}

export function getNextWorkProject(slug: string) {
  const index = workProjects.findIndex((project) => project.slug === slug);
  if (index < 0 || workProjects.length < 2) return undefined;
  return workProjects[(index + 1) % workProjects.length];
}

export function getProjectHeroImage(project: WorkProject) {
  return project.heroImage || project.cardImage;
}

export function getProjectEyebrow(project: WorkProject) {
  return project.eyebrow || project.tags.join(" · ").toUpperCase();
}

export function getProjectHeadline(project: WorkProject) {
  return project.headline || `${project.name}. A real business with a real site.`;
}

export function getProjectIntro(project: WorkProject) {
  return (
    project.intro ||
    `${project.name} is a ${project.industry.toLowerCase()} based in ${project.location}. Explore the digital work, capabilities, and experience behind the project.`
  );
}

export function getProjectServices(project: WorkProject) {
  return project.services?.length
    ? project.services
    : Array.from(new Set(["Website", ...project.expertise, ...project.tags]));
}

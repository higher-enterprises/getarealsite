export interface HeroProject {
  id: string;
  name: string;
  category: string;
  location: string;
  logo: string;
  background: string;
  ownerImage?: string;
  desktopPreview?: string;
  tabletPreview?: string;
  mobilePreview?: string;
}

export const heroProjects: HeroProject[] = [
  {
    id: "north-harbor",
    name: "North & Harbor",
    category: "Architecture Studio",
    location: "Seattle, WA",
    logo: "/projects/north-harbor/logo.png",
    background: "/projects/north-harbor/background.jpg",
    ownerImage: "/projects/north-harbor/owner.png",
    desktopPreview: "/projects/north-harbor/desktop.png",
    tabletPreview: "/projects/north-harbor/tablet.png",
    mobilePreview: "/projects/north-harbor/mobile.png",
  },
  {
    id: "glow-skincare",
    name: "Glow Skincare",
    category: "Skincare Brand",
    location: "Miami, FL",
    logo: "/projects/glow-skincare/logo.png",
    background: "/projects/glow-skincare/background.jpg",
    ownerImage: "/projects/glow-skincare/owner.png",
    desktopPreview: "/projects/glow-skincare/desktop.png",
    tabletPreview: "/projects/glow-skincare/tablet.png",
    mobilePreview: "/projects/glow-skincare/mobile.png",
  },
  {
    id: "modern-living",
    name: "Modern Living",
    category: "Home Furnishings Store",
    location: "Austin, TX",
    logo: "/projects/modern-living/logo.png",
    background: "/projects/modern-living/background.jpg",
    ownerImage: "/projects/modern-living/owner.png",
    desktopPreview: "/projects/modern-living/desktop.png",
    tabletPreview: "/projects/modern-living/tablet.png",
    mobilePreview: "/projects/modern-living/mobile.png",
  },
  {
    id: "trail-timber",
    name: "Trail & Timber",
    category: "Outdoor Apparel",
    location: "Portland, OR",
    logo: "/projects/trail-timber/logo.png",
    background: "/projects/trail-timber/background.jpg",
    ownerImage: "/projects/trail-timber/owner.png",
    desktopPreview: "/projects/trail-timber/desktop.png",
    tabletPreview: "/projects/trail-timber/tablet.png",
    mobilePreview: "/projects/trail-timber/mobile.png",
  },
  {
    id: "jackson-legal",
    name: "Jackson Legal",
    category: "Law Firm",
    location: "Chicago, IL",
    logo: "/projects/jackson-legal/logo.png",
    background: "/projects/jackson-legal/background.jpg",
    ownerImage: "/projects/jackson-legal/owner.png",
    desktopPreview: "/projects/jackson-legal/desktop.png",
    tabletPreview: "/projects/jackson-legal/tablet.png",
    mobilePreview: "/projects/jackson-legal/mobile.png",
  },
];
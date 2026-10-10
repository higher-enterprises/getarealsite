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
  projectLink?: string;
}

const homeHeroData: HeroProject[] = [
  {
    id: "junk-punk",
    name: "Junk Punk",
    category: "Junk Hauling",
    location: "Rocklin, CA",
    logo: "/projects/junk-punk/logo.png",
    background: "/projects/junk-punk/background.png",
    ownerImage: "/projects/junk-punk/owner.png",
    desktopPreview: "/projects/junk-punk/desktop.png",
    tabletPreview: "/projects/junk-punk/tablet.png",
    mobilePreview: "/projects/junk-punk/mobile.png",
  },
  {
    id: "total-dermacare",
    name: "Total Dermacare",
    category: "Esthetician",
    location: "Rocklin, CA",
    logo: "/projects/total-dermacare/logo.png",
    background: "/projects/total-dermacare/background.png",
    ownerImage: "/projects/total-dermacare/owner.png",
    desktopPreview: "/projects/total-dermacare/desktop.png",
    tabletPreview: "/projects/total-dermacare/tablet.png",
    mobilePreview: "/projects/total-dermacare/mobile.png",
  },
  {
    id: "courage-pools",
    name: "Courage Pools",
    category: "Custom Pool Builder",
    location: "Newcastle, CA",
    logo: "/projects/courage-pools/logo.png",
    background: "/projects/courage-pools/background.png",
    ownerImage: "/projects/courage-pools/owner.png",
    desktopPreview: "/projects/courage-pools/desktop.png",
    tabletPreview: "/projects/courage-pools/tablet.png",
    mobilePreview: "/projects/courage-pools/mobile.png",
  },
  {
    id: "core-momentum",
    name: "Core Momentum Studio",
    category: "Pilates and Fascia",
    location: "Newcastle, CA",
    logo: "/projects/core-momentum/logo.png",
    background: "/projects/core-momentum/background.jpg",
    ownerImage: "/projects/core-momentum/owner.png",
    desktopPreview: "/projects/core-momentum/desktop.png",
    tabletPreview: "/projects/core-momentum/tablet.png",
    mobilePreview: "/projects/core-momentum/mobile.png",
  },
  {
    id: "mbj-concrete",
    name: "MBJ Concrete",
    category: "Concrete Construction",
    location: "Lincoln, CA",
    logo: "/projects/mbj-concrete/logo.png",
    background: "/projects/mbj-concrete/background.jpg",
    ownerImage: "/projects/mbj-concrete/owner.png",
    desktopPreview: "/projects/mbj-concrete/desktop.png",
    tabletPreview: "/projects/mbj-concrete/tablet.png",
    mobilePreview: "/projects/mbj-concrete/mobile.png",
  },
  {
    id: "scheddy",
    name: "Scheddy",
    category: "Scheduling Platform",
    location: "",
    logo: "/projects/scheddy/logo.png",
    background: "/projects/scheddy/background.png",
    ownerImage: "/projects/scheddy/owner.png",
    desktopPreview: "/projects/scheddy/desktop.png",
    tabletPreview: "/projects/scheddy/tablet.png",
    mobilePreview: "/projects/scheddy/mobile.png",
  }
];

export default homeHeroData;

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

const startersitesHeroData: HeroProject[] = [
  {
    id: "core-momentum",
    name: "Core Momentum Studio",
    category: "Pilates and Fascia",
    location: "Newcastle, CA",
    logo: "/projects/core-momentum/logo.png",
    background: "/projects/core-momentum/background.png",
    ownerImage: "/projects/core-momentum/owner.png",
    desktopPreview: "/projects/core-momentum/desktop.png",
    tabletPreview: "/projects/core-momentum/tablet.png",
    mobilePreview: "/projects/core-momentum/mobile.png",
    projectLink: "/work/core-momentum-pilates/",
  }
];

export default startersitesHeroData;

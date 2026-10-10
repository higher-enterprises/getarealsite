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

const websitesHeroData: HeroProject[] = [
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
  }
];

export default websitesHeroData;

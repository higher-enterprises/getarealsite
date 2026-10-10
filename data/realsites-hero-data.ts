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

const realsitesHeroData: HeroProject[] = [
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
  }
];

export default realsitesHeroData;

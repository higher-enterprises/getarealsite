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

const venturesitesHeroData: HeroProject[] = [
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

export default venturesitesHeroData;

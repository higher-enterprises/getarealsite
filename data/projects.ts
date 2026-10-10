export type ProjectServiceIcon =
  | "strategy"
  | "design"
  | "development"
  | "ecommerce"
  | "seo"
  | "integrations";

export type ProjectImpactIcon =
  | "growth"
  | "cart"
  | "users"
  | "time";

export type ProjectService = {
  title: string;
  description: string;
  icon: ProjectServiceIcon;
};

export type ProjectImpact = {
  value: string;
  label: string;
  icon: ProjectImpactIcon;
};

export type Project = {
  id: string;
  slug: string;

  title: string;
  eyebrow?: string;

  /* Agency relationship */
  agencyId: string;

  /* Basic project information */
  industry: string;
  location: string;
  launchYear: string;

  summary: string;

  /* Images */
  thumbnail: string;
  backgroundImage: string;
  ownerImage: string;
  desktopMockup: string;
  mobileMockup: string;

  /* Case study */
  overview: string[];
  challenges: string[];
  solutions: string[];

  /* Website carousel */
  showcaseImages: string[];

  /* Services */
  services: ProjectService[];

  /* Results */
  impacts?: ProjectImpact[];

  /* Website availability */
  available: boolean;

  startingPrice?: string;
  availableFor?: string;

  detailsHref?: string;
  purchaseHref?: string;
};

/* ============================================================
   PROJECTS
============================================================ */

export const projects: Project[] = [
  {
    id: "tates-bake-shop",
    slug: "tates-bake-shop",

    title: "Tate's Bake Shop",
    eyebrow: "Website Development",

    agencyId: "us-ca-rocklin",

    industry: "Food & Beverage",
    location: "Southampton, New York",
    launchYear: "2024",

    summary:
      "A modern e-commerce experience that preserves the handmade heritage of an iconic brand while driving growth online.",

    /* ========================================================
       IMAGES
    ======================================================== */

    thumbnail:
      "/projects/tates-bake-shop/thumbnail.jpg",

    backgroundImage:
      "/projects/tates-bake-shop/background.jpg",

    ownerImage:
      "/projects/tates-bake-shop/owner.png",

    desktopMockup:
      "/projects/tates-bake-shop/desktop.png",

    mobileMockup:
      "/projects/tates-bake-shop/mobile.png",

    /* ========================================================
       PROJECT OVERVIEW
    ======================================================== */

    overview: [
      "Tate's Bake Shop is a beloved cookie brand known for its thin, crispy cookies and simple, high-quality ingredients.",

      "They needed a digital experience that reflected their heritage, told their story, and made it easier for customers to shop, discover, and connect with the brand.",

      "We created a clean, conversion-focused e-commerce site with rich storytelling, a seamless shopping experience, and a flexible platform built for long-term growth.",
    ],

    /* ========================================================
       CHALLENGE
    ======================================================== */

    challenges: [
      "Outdated website that didn't reflect the quality of the brand.",

      "Difficult product discovery and purchasing experience.",

      "Limited storytelling and poor mobile experience.",

      "Needed a scalable platform to support growth.",
    ],

    /* ========================================================
       SOLUTION
    ======================================================== */

    solutions: [
      "Modern, premium design that honors the brand's heritage.",

      "Streamlined e-commerce flow built for conversions.",

      "Story-driven content that builds trust and connection.",

      "Scalable platform with custom features and integrations.",
    ],

    /* ========================================================
       WEBSITE SHOWCASE
    ======================================================== */

    showcaseImages: [
      "/projects/tates-bake-shop/showcase-01.jpg",
      "/projects/tates-bake-shop/showcase-02.jpg",
      "/projects/tates-bake-shop/showcase-03.jpg",
      "/projects/tates-bake-shop/showcase-04.jpg",
      "/projects/tates-bake-shop/showcase-05.jpg",
    ],

    /* ========================================================
       SERVICES
    ======================================================== */

    services: [
      {
        title: "Strategy",
        description:
          "Brand strategy, user research, and competitive analysis to shape the right digital experience.",
        icon: "strategy",
      },

      {
        title: "UX / UI Design",
        description:
          "Clean, intuitive interface and engaging storytelling that reflects the brand's identity.",
        icon: "design",
      },

      {
        title: "Website Development",
        description:
          "Custom development with a flexible, scalable architecture.",
        icon: "development",
      },

      {
        title: "E-Commerce",
        description:
          "Seamless shopping experience with optimized product discovery and checkout.",
        icon: "ecommerce",
      },

      {
        title: "SEO Foundation",
        description:
          "Technical SEO setup and best practices to improve visibility and organic growth.",
        icon: "seo",
      },

      {
        title: "Custom Integrations",
        description:
          "Third-party integrations and custom features to streamline operations.",
        icon: "integrations",
      },
    ],

    /* ========================================================
       IMPACT
    ======================================================== */

    impacts: [
      {
        value: "+42%",
        label: "Increase in Online Sales",
        icon: "growth",
      },

      {
        value: "+35%",
        label: "Increase in Conversion Rate",
        icon: "cart",
      },

      {
        value: "-18%",
        label: "Decrease in Bounce Rate",
        icon: "users",
      },

      {
        value: "2.4x",
        label: "Increase in Time on Site",
        icon: "time",
      },
    ],

    /* ========================================================
       AVAILABILITY
    ======================================================== */

    available: true,

    startingPrice: "$4,950",

    availableFor:
      "Food & Beverage, Bakeries, Specialty Food",

    detailsHref:
      "/websites/tates-bake-shop",

    purchaseHref:
      "/websites/tates-bake-shop/purchase",
  },
];

/* ============================================================
   FIND PROJECT
============================================================ */

export function findProject(value: string) {
  const normalized = value.toLowerCase().trim();

  return projects.find(
    (project) =>
      project.id.toLowerCase() === normalized ||
      project.slug.toLowerCase() === normalized ||
      project.title.toLowerCase() === normalized
  );
}

/* ============================================================
   FIND PROJECT BY ID
============================================================ */

export function findProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

/* ============================================================
   FIND PROJECT BY SLUG
============================================================ */

export function findProjectBySlug(slug: string) {
  return projects.find(
    (project) =>
      project.slug.toLowerCase() === slug.toLowerCase()
  );
}

/* ============================================================
   GET PROJECTS FOR AGENCY
============================================================ */

export function getProjectsByAgency(agencyId: string) {
  return projects.filter(
    (project) => project.agencyId === agencyId
  );
}

/* ============================================================
   GET AVAILABLE PROJECTS
============================================================ */

export function getAvailableProjects() {
  return projects.filter(
    (project) => project.available
  );
}
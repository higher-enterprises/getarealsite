import type {
  ManagePlanPageProps,
  ManagePlanSummary,
  ManageServiceCategory,
} from "./ManagePlanPage";

/* =========================================================
   PLAN SLUG
========================================================= */

export type ManagePlanSlug =
  | "support"
  | "care"
  | "maintain"
  | "manage";

/* =========================================================
   INTERNAL TYPES
========================================================= */

type ServiceDefinition = Omit<
  ManageServiceCategory,
  "enabled" | "description"
> & {
  descriptions: Record<ManagePlanSlug, string>;
  enabledFrom: ManagePlanSlug;
};

/* =========================================================
   PLAN ORDER
========================================================= */

const planOrder: ManagePlanSlug[] = [
  "support",
  "care",
  "maintain",
  "manage",
];

function enabledAt(
  current: ManagePlanSlug,
  enabledFrom: ManagePlanSlug
) {
  return (
    planOrder.indexOf(current) >=
    planOrder.indexOf(enabledFrom)
  );
}

/* =========================================================
   SERVICE DEFINITIONS

   IMPORTANT:
   Icons are string identifiers only.
   No React components/functions are stored in this data.
========================================================= */

const serviceDefinitions: ServiceDefinition[] = [
  {
    id: "security",
    title: "Security",
    icon: "security",
    enabledFrom: "support",

    descriptions: {
      support:
        "SSL, uptime, and foundational security monitoring.",

      care:
        "Continuous security monitoring with regular site health checks.",

      maintain:
        "Security monitoring plus hands-on fixes during maintenance.",

      manage:
        "Proactive security monitoring, response, and optimization.",
    },
  },

  {
    id: "updates",
    title: "Updates",
    icon: "updates",
    enabledFrom: "support",

    descriptions: {
      support:
        "Core platform and essential system updates.",

      care:
        "Core, plugin, and system updates with functionality checks.",

      maintain:
        "Platform, plugin, page, content, and service updates.",

      manage:
        "Proactive technical and website updates managed continuously.",
    },
  },

  {
    id: "performance",
    title: "Performance",
    icon: "performance",
    enabledFrom: "care",

    descriptions: {
      support:
        "Performance optimization is available beginning with Care.",

      care:
        "Website health checks and ongoing performance monitoring.",

      maintain:
        "Performance monitoring with hands-on maintenance improvements.",

      manage:
        "Continuous performance monitoring and active optimization.",
    },
  },

  {
    id: "backups",
    title: "Backups",
    icon: "backups",
    enabledFrom: "support",

    descriptions: {
      support:
        "Daily backups and foundational recovery protection.",

      care:
        "Daily backups monitored as part of ongoing website care.",

      maintain:
        "Backup monitoring plus recovery support during maintenance.",

      manage:
        "Managed backups, monitoring, recovery, and operational support.",
    },
  },

  {
    id: "content",
    title: "Content",
    icon: "content",
    enabledFrom: "maintain",

    descriptions: {
      support:
        "Content changes are available beginning with Maintain.",

      care:
        "Hands-on content updates are available beginning with Maintain.",

      maintain:
        "Text, image, page, staff, product, and service updates.",

      manage:
        "Ongoing content management and optimization.",
    },
  },

  {
    id: "seo",
    title: "SEO",
    icon: "seo",
    enabledFrom: "care",

    descriptions: {
      support:
        "SEO monitoring is available beginning with Care.",

      care:
        "SEO health monitoring to identify technical visibility issues.",

      maintain:
        "SEO health monitoring alongside regular website maintenance.",

      manage:
        "SEO monitoring with ongoing optimization recommendations.",
    },
  },

  {
    id: "analytics",
    title: "Analytics",
    icon: "analytics",
    enabledFrom: "care",

    descriptions: {
      support:
        "Analytics review is available beginning with Care.",

      care:
        "Monthly site reporting and website health visibility.",

      maintain:
        "Monthly reporting tied to ongoing website updates.",

      manage:
        "Analytics review, conversion monitoring, and growth insights.",
    },
  },

  {
    id: "integrations",
    title: "Integrations",
    icon: "integrations",
    enabledFrom: "manage",

    descriptions: {
      support:
        "Integration management is available with Manage.",

      care:
        "Integration management is available with Manage.",

      maintain:
        "Integration management is available with Manage.",

      manage:
        "Forms, CRM, booking tools, automations, and connected systems.",
    },
  },

  {
    id: "support",
    title: "Support",
    icon: "support",
    enabledFrom: "support",

    descriptions: {
      support:
        "Email support for foundational website issues.",

      care:
        "Ongoing support alongside proactive website care.",

      maintain:
        "Hands-on support for maintenance and update requests.",

      manage:
        "Priority access to our team for active website management.",
    },
  },

  {
    id: "strategy",
    title: "Strategy",
    icon: "strategy",
    enabledFrom: "manage",

    descriptions: {
      support:
        "Strategy reviews are available with Manage.",

      care:
        "Strategy reviews are available with Manage.",

      maintain:
        "Strategy reviews are available with Manage.",

      manage:
        "Monthly strategy review and website growth recommendations.",
    },
  },

  {
    id: "development",
    title: "Development",
    icon: "development",
    enabledFrom: "manage",

    descriptions: {
      support:
        "Custom development is outside foundational support.",

      care:
        "Custom development is outside the Care plan.",

      maintain:
        "Maintenance covers updates rather than custom development.",

      manage:
        "Management hours can support approved website enhancements.",
    },
  },

  {
    id: "paid-media",
    title: "Paid Media",
    icon: "paid-media",
    enabledFrom: "manage",

    descriptions: {
      support:
        "Advertising management is not included in Support.",

      care:
        "Advertising management is not included in Care.",

      maintain:
        "Advertising management is not included in Maintain.",

      manage:
        "Campaign support and coordination within available management time.",
    },
  },
];

/* =========================================================
   SERVICE GENERATOR
========================================================= */

function servicesFor(
  plan: ManagePlanSlug
): ManageServiceCategory[] {
  return serviceDefinitions.map((service) => ({
    id: service.id,
    title: service.title,
    icon: service.icon,
    description: service.descriptions[plan],
    enabled: enabledAt(plan, service.enabledFrom),
  }));
}

/* =========================================================
   PLAN SUMMARIES
========================================================= */

export const managePlanSummaries: Record<
  ManagePlanSlug,
  ManagePlanSummary
> = {
  support: {
    slug: "support",
    number: "01",
    name: "Support",
    eyebrow: "FOUNDATIONAL SUPPORT",

    description:
      "Essential technical support that keeps your website protected, available, updated, and supported.",

    price: "$99/mo",
  },

  care: {
    slug: "care",
    number: "02",
    name: "Care",
    eyebrow: "2 MANAGEMENT HOURS / MONTH",

    description:
      "Proactive care with hands-on management time each month to keep your website healthy, current, tested, and performing reliably.",

    price: "$299/mo",
  },

  maintain: {
    slug: "maintain",
    number: "03",
    name: "Maintain",
    eyebrow: "4 MANAGEMENT HOURS / MONTH",

    description:
      "Ongoing hands-on maintenance for businesses that regularly need content, page, product, service, image, and website updates.",

    price: "$499/mo",
  },

  manage: {
    slug: "manage",
    number: "04",
    name: "Manage",
    eyebrow: "8 MANAGEMENT HOURS / MONTH",

    description:
      "Active website management and optimization for businesses that rely on their site as an important operating, marketing, and growth asset.",

    price: "$999/mo",
  },
};

/* =========================================================
   OTHER PLANS

   Automatically removes the plan currently being viewed.
========================================================= */

function otherPlans(
  current: ManagePlanSlug
): ManagePlanSummary[] {
  return planOrder
    .filter((slug) => slug !== current)
    .map((slug) => managePlanSummaries[slug]);
}

/* =========================================================
   SUPPORT
========================================================= */

export const supportPlan: ManagePlanPageProps["plan"] = {
  ...managePlanSummaries.support,

  hero: {
    label: "SUPPORT SERVICES",

    headline: "Essential support for a",
    highlightedText: "worry-free website.",

    description:
      "Foundational technical support that keeps your website protected, available, updated, backed up, and supported.",

    image: "/images/manage/support/hero.png",

    imageAlt:
      "Website support dashboard displayed on a computer with monitoring overlays",

    stats: [
      {
        value: "99.9%",
        label: "UPTIME MONITORING",
      },
      {
        value: "24/7",
        label: "WEBSITE MONITORING",
      },
      {
        value: "DAILY",
        label: "WEBSITE BACKUPS",
      },
    ],
  },

  servicesSection: {
    eyebrow: "MORE THAN SUPPORT",

    title:
      "The essentials that keep your website running.",

    description:
      "See exactly which website management categories are included with Support and which become available as you move into higher management levels.",
  },

  services: servicesFor("support"),

  contact: {
    eyebrow: "LET'S TALK",

    title: "Ready to get started?",

    description:
      "Tell us about your website and we'll show you how Support can keep the technical foundation protected and dependable.",

    price: "$99/mo",

    bullets: [
      "No obligation",
      "Ask questions",
      "Get expert recommendations",
      "Keep your website protected",
    ],

    formTitle: "Start the conversation.",

    submitLabel: "Get My Recommendation",
  },

  otherPlans: otherPlans("support"),
};

/* =========================================================
   CARE
========================================================= */

export const carePlan: ManagePlanPageProps["plan"] = {
  ...managePlanSummaries.care,

  hero: {
    label: "CARE SERVICES",

    headline: "Proactive care for a",
    highlightedText: "healthier website.",

    description:
      "Ongoing website care, monitoring, testing, and management time that keeps your site healthy, current, and performing reliably.",

    image: "/images/manage/care/hero.png",

    imageAlt:
      "Website care dashboard displayed on a computer with health monitoring overlays",

    stats: [
      {
        value: "2 HRS",
        label: "MANAGEMENT TIME EACH MONTH",
      },
      {
        value: "24/7",
        label: "HEALTH MONITORING",
      },
      {
        value: "MONTHLY",
        label: "WEBSITE REPORTING",
      },
    ],
  },

  servicesSection: {
    eyebrow: "MORE THAN MAINTENANCE",

    title:
      "Proactive care across your website.",

    description:
      "Care expands foundational Support with monitoring, testing, reporting, SEO health visibility, and hands-on management time.",
  },

  services: servicesFor("care"),

  contact: {
    eyebrow: "LET'S TALK",

    title: "Ready to get started?",

    description:
      "Tell us about your business and website and we'll show you how Care can keep it healthy, current, and performing reliably.",

    price: "$299/mo",

    bullets: [
      "No obligation",
      "Ask questions",
      "2 management hours each month",
      "Get expert recommendations",
    ],

    formTitle: "Start the conversation.",

    submitLabel: "Get My Recommendation",
  },

  otherPlans: otherPlans("care"),
};

/* =========================================================
   MAINTAIN
========================================================= */

export const maintainPlan: ManagePlanPageProps["plan"] = {
  ...managePlanSummaries.maintain,

  hero: {
    label: "MAINTAIN SERVICES",

    headline: "Ongoing maintenance for",
    highlightedText: "lasting performance.",

    description:
      "Hands-on website maintenance for businesses that regularly need content, page, product, image, staff, and service updates.",

    image: "/images/manage/maintain/hero.png",

    imageAlt:
      "Website maintenance dashboard displayed on a computer with update overlays",

    stats: [
      {
        value: "4 HRS",
        label: "MANAGEMENT TIME EACH MONTH",
      },
      {
        value: "ONGOING",
        label: "CONTENT AND PAGE UPDATES",
      },
      {
        value: "MONTHLY",
        label: "MAINTENANCE REPORTING",
      },
    ],
  },

  servicesSection: {
    eyebrow: "MORE THAN MAINTENANCE",

    title:
      "Keep your website current as your business changes.",

    description:
      "Maintain adds hands-on content and website updates to proactive monitoring, reporting, support, and technical care.",
  },

  services: servicesFor("maintain"),

  contact: {
    eyebrow: "LET'S TALK",

    title: "Ready to get started?",

    description:
      "Tell us what changes most often on your website and we'll show you how Maintain can keep it current without adding another task to your team.",

    price: "$499/mo",

    bullets: [
      "No obligation",
      "Ask questions",
      "4 management hours each month",
      "Regular hands-on website updates",
    ],

    formTitle: "Start the conversation.",

    submitLabel: "Get My Recommendation",
  },

  otherPlans: otherPlans("maintain"),
};

/* =========================================================
   MANAGE
========================================================= */

export const managePlan: ManagePlanPageProps["plan"] = {
  ...managePlanSummaries.manage,

  hero: {
    label: "MANAGE SERVICES",

    headline: "A faster, stronger,",
    highlightedText: "more effective website.",

    description:
      "Active website management that keeps your site secure, updated, optimized, and performing at its best — so you can focus on your business.",

    image: "/images/manage/manage/hero.png",

    imageAlt:
      "Website management dashboard displayed on a computer with performance overlays",

    stats: [
      {
        value: "8 HRS",
        label: "MANAGEMENT TIME EACH MONTH",
      },
      {
        value: "ACTIVE",
        label: "PERFORMANCE OPTIMIZATION",
      },
      {
        value: "MONTHLY",
        label: "STRATEGY REVIEW",
      },
    ],
  },

  servicesSection: {
    eyebrow: "MORE THAN MAINTENANCE",

    title:
      "We manage every part of your website.",

    description:
      "From protection and updates to content, performance, analytics, integrations, and support — Manage keeps your website healthy and helps it grow.",
  },

  services: servicesFor("manage"),

  contact: {
    eyebrow: "LET'S TALK",

    title: "Ready to get started?",

    description:
      "Tell us about your business and we'll show you how the Manage plan can help you achieve your goals.",

    price: "$999/mo",

    bullets: [
      "No obligation",
      "Ask questions",
      "8 management hours each month",
      "Monthly strategy review",
    ],

    formTitle: "Start the conversation.",

    submitLabel: "Get My Recommendation",
  },

  otherPlans: otherPlans("manage"),
};
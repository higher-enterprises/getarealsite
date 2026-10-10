import BuildPlanPage from "@/components/build/BuildPlanPage";

import {
  featuresFor,
  otherPlans,
} from "@/components/build/buildPlanData";

export default function Page() {
  return (
    <BuildPlanPage
      plan="Enterprise"
      hero={{
        eyebrow: "Build › Enterprise",
        planLabel: "Enterprise RealSite · Up To 25 Pages",
        headline: "Built for scale. Ready for what’s next.",
        description:
          "An expansive RealSite for organizations with multiple audiences, complex architecture, advanced functionality, and a digital presence that needs to support serious operations and long-term growth.",
        paidInFull: "$9,999",
        monthly: "$999/month × 12",
        paymentNote: "First two monthly payments due at kickoff.",
        backgroundImage: "/images/build/plans/enterprise/hero.png",
        websiteImage:
          "/images/build/plans/enterprise/website-homepage.png",
        websiteImageAlt:
          "Enterprise RealSite electrical services website homepage example",
      }}
      featuresEyebrow="What You Get"
      featuresTitle="Enterprise ready. Without limits."
      featuresDescription="A substantial digital foundation for organizations that need scale, flexibility, advanced integrations, and room to evolve."
      features={featuresFor(12)}
      inquiry={{
        eyebrow: "Let's Plan Your Enterprise RealSite",
        title: "Tell us what your organization needs to accomplish.",
        description:
          "Tell us about your organization, the audiences you serve, the systems you rely on, and what your digital presence needs to support. We’ll use that information to understand the scope, architecture, functionality, and integrations your Enterprise RealSite requires.",
        benefits: [
          "Plan complex architecture around multiple audiences and objectives",
          "Identify advanced functionality, systems, and integrations",
          "Build a scalable digital foundation designed to evolve with your organization",
        ],
        formTitle: "Start the conversation.",
        submitLabel: "Get My Recommendation",
      }}
      otherPlansSection={{
        eyebrow: "Other Plans To Consider",
        title: "Compare the RealSite built for your next stage.",
        description:
          "Need a smaller digital footprint or less complexity? Compare the other RealSite build plans based on the size, functionality, and requirements of your organization.",
      }}
      otherPlans={otherPlans("Enterprise")}
      cta={{
        eyebrow: "Ready To Build?",
        title: "Build a digital presence ready for what’s next.",
        description:
          "Tell us about your project and we’ll help you determine the right next step.",
        buttonLabel: "Go Back To The Form",
      }}
    />
  );
}
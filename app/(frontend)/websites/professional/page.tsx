import BuildPlanPage from "@/components/build/BuildPlanPage";

import {
  featuresFor,
  otherPlans,
} from "@/components/build/buildPlanData";

export default function Page() {
  return (
    <BuildPlanPage
      plan="Professional"
      hero={{
        eyebrow: "Build › Professional",
        planLabel: "Professional RealSite · Up To 15 Pages",
        headline: "A larger digital presence for greater growth.",
        description:
          "Built for established businesses that need more content, deeper customer journeys, stronger search visibility, and more sophisticated integrations across their digital presence.",
        paidInFull: "$4,999",
        monthly: "$499/month × 12",
        paymentNote: "First two monthly payments due at kickoff.",
        backgroundImage: "/images/build/plans/professional/hero.png",
        websiteImage:
          "/images/build/plans/professional/website-homepage.png",
        websiteImageAlt:
          "Professional RealSite retail website homepage example",
      }}
      featuresEyebrow="What You Get"
      featuresTitle="More capability. More opportunities."
      featuresDescription="A robust RealSite designed to support more services, more content, more customer pathways, and more ambitious growth."
      features={featuresFor(12)}
      inquiry={{
        eyebrow: "Let's Plan Your Professional RealSite",
        title: "Tell us where your business is ready to grow.",
        description:
          "Tell us about your business, your customers, and what your current digital presence needs to do better. We’ll use that information to understand your growth goals and determine how your Professional RealSite should be structured.",
        benefits: [
          "Plan deeper customer journeys across more pages and content",
          "Identify advanced features, integrations, and functionality",
          "Build a stronger foundation for search, conversion, and growth",
        ],
        formTitle: "Start the conversation.",
        submitLabel: "Get My Recommendation",
      }}
      otherPlansSection={{
        eyebrow: "Other Plans To Consider",
        title: "Compare the RealSite built for your next stage.",
        description:
          "Need something more streamlined or require greater scale and complexity? Compare the other RealSite build plans based on the size, functionality, and requirements of your business.",
      }}
      otherPlans={otherPlans("Professional")}
      cta={{
        eyebrow: "Ready To Build?",
        title: "Build a digital presence ready for greater growth.",
        description:
          "Tell us about your project and we’ll help you determine the right next step.",
        buttonLabel: "Go Back To The Form",
      }}
    />
  );
}
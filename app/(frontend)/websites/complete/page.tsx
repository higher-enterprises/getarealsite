import BuildPlanPage from "@/components/build/BuildPlanPage";

import {
  featuresFor,
  otherPlans,
} from "@/components/build/buildPlanData";

export default function Page() {
  return (
    <BuildPlanPage
      plan="Complete"
      hero={{
        eyebrow: "Build › Complete",
        planLabel: "Complete RealSite · Up To 7 Pages",
        headline:
          "Everything your business needs to turn visitors into customers.",
        description:
          "A complete professional website built around your business, your customers, and the actions you want them to take. From strategy and design through development and launch, we’ll build the core digital presence your business needs to compete and grow.",
        paidInFull: "$2,999",
        monthly: "$299/month × 12",
        paymentNote: "First two monthly payments due at kickoff.",
        backgroundImage: "/images/build/plans/complete/hero.png",
        websiteImage:
          "/images/build/plans/complete/website-homepage.png",
        websiteImageAlt:
          "Complete RealSite website homepage example",
      }}
      featuresEyebrow="What You Get"
      featuresTitle="A complete solution. Built to perform."
      featuresDescription="Everything you need to establish credibility, attract customers, and grow your business online."
      features={featuresFor(10)}
      inquiry={{
        eyebrow: "Let's Plan Your Complete RealSite",
        title: "Tell us about your business and your website.",
        description:
          "Tell us where your business is today, what your customers need, and what you want your website to accomplish. We’ll use that information to understand your goals and determine how your Complete RealSite should be structured.",
        benefits: [
          "Plan the right pages around your customer journey",
          "Identify the features your business actually needs",
          "Create clear paths from visitor interest to customer action",
        ],
        formTitle: "Start the conversation.",
        submitLabel: "Get My Recommendation",
      }}
      otherPlansSection={{
        eyebrow: "Other Plans To Consider",
        title: "Compare the RealSite built for your next stage.",
        description:
          "Need something simpler or more advanced? Compare the other RealSite build plans based on the size, functionality, and complexity your business requires.",
      }}
      otherPlans={otherPlans("Complete")}
      cta={{
        eyebrow: "Ready To Build?",
        title: "Build the website your business is ready for.",
        description:
          "Tell us about your project and we’ll help you determine the right next step.",
        buttonLabel: "Go Back To The Form",
      }}
    />
  );
}
import ReachServicePage from "@/components/reach/ReachServicePage";

export default function Page() {
  return (
    <ReachServicePage
      title="Marketing Automation"
      eyebrow="MARKETING AUTOMATION"
      headline="Save time. Nurture leads. Grow automatically."
      description="Build automated marketing journeys that respond to customer behavior, follow up consistently, and keep opportunities moving without adding repetitive work."
      icon="Cog"
      image="/images/reach/marketing-automation/composite.jpg"
      serviceSlug="marketing-automation"
      heroBackgroundImage="/images/reach/marketing-automation/composite.jpg"
      heroCustomerImage="/images/reach/marketing-automation/owner.png"
      journeyCustomerImage="/images/reach/marketing-automation/owner.png"
      whyItMatters={{
        eyebrow: "Why It Matters",
        title: "The right follow-up should not depend on remembering it.",
        paragraphs: ["Marketing automation allows your business to respond consistently as prospects and customers move through different stages of their relationship with you. Triggers can initiate reminders, follow-ups, educational sequences, offers, internal notifications, and other actions at the right time.", "We design automation around real customer journeys and operational needs, connecting forms, CRM data, email, scheduling, segmentation, and other systems so automation improves the experience rather than making it feel mechanical."],
        outcomes: ["Follow up more consistently", "Nurture leads automatically", "Reduce repetitive marketing work"],
        benchmarkEyebrow: "Service / Illustrative Benchmark",
        metric: "24/7",
        metricLabel: "automated journeys can keep working beyond business hours",
      }}
      customerJourney={{
        title: "The Real Customer Journey",
        info: "The customer journey represents the stages people move through as they become aware of a need, consider their options, become a customer, return, and ultimately recommend a business to others.",
        stageLabel: "Journey Stage",
        keyMomentsLabel: "Key Moments",
        influenceLabel: "Marketing Automation Influence",
        stages: [
          {
            number: "01", title: "Awareness", subtitle: "Becoming Aware",
            actions: ["Recognizing a need", "Discovering options", "Beginning research"],
            touchpoints: ["Search", "Advertising", "Social discovery", "Referrals"],
            channels: ["Search engines", "Social media", "Websites", "Local discovery"],
            moment: "Discovers your business", influence: "primary",
          },
          {
            number: "02", title: "Consideration", subtitle: "Exploring Options",
            actions: ["Comparing providers", "Reviewing information", "Evaluating fit"],
            touchpoints: ["Website", "Service pages", "Reviews", "Educational content"],
            channels: ["Website", "Search", "Email", "Social media"],
            moment: "Decides your business deserves consideration", influence: "primary",
          },
          {
            number: "03", title: "Conversion", subtitle: "Choosing & Buying",
            actions: ["Choosing a provider", "Taking the next step", "Becoming a customer"],
            touchpoints: ["Forms", "Calls", "Booking or checkout", "Sales conversation"],
            channels: ["Website", "Phone", "Mobile", "In-person"],
            moment: "Takes a measurable action", influence: "supporting",
          },
          {
            number: "04", title: "Loyalty", subtitle: "Using & Returning",
            actions: ["Using the service", "Returning", "Responding to follow-up"],
            touchpoints: ["Email", "Account experience", "Support", "Remarketing"],
            channels: ["Email", "Website", "Messaging", "Support channels"],
            moment: "Returns for additional value", influence: "subtle",
          },
          {
            number: "05", title: "Advocacy", subtitle: "Sharing & Recommending",
            actions: ["Recommending", "Reviewing", "Sharing", "Referring"],
            touchpoints: ["Reviews", "Social sharing", "Word of mouth", "Community"],
            channels: ["Review platforms", "Social media", "Referrals", "Branded search"],
            moment: "Recommends your business", influence: "subtle",
          }
        ],
      }}
      faq={{
        eyebrow: "Marketing Automation FAQ",
        title: "Questions about marketing automation? Start here.",
        description: "Understand what marketing automation does, how it fits into your website and marketing strategy, and what you should expect from an ongoing program.",
        items: [
          { question: "What is marketing automation?", answer: "Marketing Automation is a coordinated approach to using the relevant channels, experiences, and measurement methods to create business results. RealSite connects the service to the rest of your website and customer journey so activity has a defined purpose." },
          { question: "How does marketing automation fit into my website?", answer: "Your website is usually the place where interest becomes measurable action. We connect marketing automation to the pages, offers, forms, booking paths, content, and tracking needed to move customers forward." },
          { question: "What does RealSite manage for marketing automation?", answer: "We define the strategy, configure the necessary systems, develop or coordinate campaign assets, connect the experience to your website, and measure performance so the program can be refined over time." },
          { question: "How long does marketing automation take to produce results?", answer: "Timing depends on your starting point, market, offer, audience, budget, and the maturity of your existing marketing. We establish measurable milestones so progress can be evaluated against the business objective rather than an arbitrary timeline." },
          { question: "How do we measure marketing automation?", answer: "We select measurements that connect activity to meaningful customer behavior, such as qualified visits, engagement, leads, calls, bookings, purchases, repeat activity, or revenue depending on the role this service plays in your customer journey." },
          { question: "Can marketing automation work with my other marketing?", answer: "Yes. The strongest approach is usually integrated. We design marketing automation to work with your website, analytics, content, advertising, email, automation, and other relevant channels rather than treating it as an isolated tactic." }
        ],
      }}
    />
  );
}

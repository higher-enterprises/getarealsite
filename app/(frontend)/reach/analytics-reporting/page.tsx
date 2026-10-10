import ReachServicePage from "@/components/reach/ReachServicePage";

export default function Page() {
  return (
    <ReachServicePage
      title="Analytics & Reporting"
      eyebrow="ANALYTICS & REPORTING"
      headline="See what's working. Do more of it."
      description="Connect marketing and website activity to clear reporting so you can understand customer behavior, measure performance, and make better decisions."
      icon="BarChart3"
      image="/images/reach/analytics-and-reporting/composite.jpg"
      serviceSlug="analytics-and-reporting"
      heroBackgroundImage="/images/reach/analytics-and-reporting/composite.jpg"
      heroCustomerImage="/images/reach/analytics-and-reporting/owner.png"
      journeyCustomerImage="/images/reach/analytics-and-reporting/owner.png"
      whyItMatters={{
        eyebrow: "Why It Matters",
        title: "Good decisions require a clear view of performance.",
        paragraphs: ["Analytics turns digital activity into evidence. It helps show where visitors come from, what they do, which campaigns influence them, where they leave, and which interactions ultimately contribute to leads, appointments, sales, or other business outcomes.", "We organize measurement around the questions the business actually needs answered, connecting website analytics, conversion events, campaign data, location performance, and reporting into a more useful decision-making system."],
        outcomes: ["Understand customer behavior", "Connect marketing to outcomes", "Identify opportunities for improvement"],
        benchmarkEyebrow: "Service / Illustrative Benchmark",
        metric: "360°",
        metricLabel: "a unified view connects channels, journeys, and business outcomes",
      }}
      customerJourney={{
        title: "The Real Customer Journey",
        info: "The customer journey represents the stages people move through as they become aware of a need, consider their options, become a customer, return, and ultimately recommend a business to others.",
        stageLabel: "Journey Stage",
        keyMomentsLabel: "Key Moments",
        influenceLabel: "Analytics & Reporting Influence",
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
        eyebrow: "Analytics & Reporting FAQ",
        title: "Questions about analytics and reporting? Start here.",
        description: "Understand what analytics & reporting does, how it fits into your website and marketing strategy, and what you should expect from an ongoing program.",
        items: [
          { question: "What is analytics & reporting?", answer: "Analytics & Reporting is a coordinated approach to using the relevant channels, experiences, and measurement methods to create business results. RealSite connects the service to the rest of your website and customer journey so activity has a defined purpose." },
          { question: "How does analytics & reporting fit into my website?", answer: "Your website is usually the place where interest becomes measurable action. We connect analytics & reporting to the pages, offers, forms, booking paths, content, and tracking needed to move customers forward." },
          { question: "What does RealSite manage for analytics & reporting?", answer: "We define the strategy, configure the necessary systems, develop or coordinate campaign assets, connect the experience to your website, and measure performance so the program can be refined over time." },
          { question: "How long does analytics & reporting take to produce results?", answer: "Timing depends on your starting point, market, offer, audience, budget, and the maturity of your existing marketing. We establish measurable milestones so progress can be evaluated against the business objective rather than an arbitrary timeline." },
          { question: "How do we measure analytics & reporting?", answer: "We select measurements that connect activity to meaningful customer behavior, such as qualified visits, engagement, leads, calls, bookings, purchases, repeat activity, or revenue depending on the role this service plays in your customer journey." },
          { question: "Can analytics & reporting work with my other marketing?", answer: "Yes. The strongest approach is usually integrated. We design analytics & reporting to work with your website, analytics, content, advertising, email, automation, and other relevant channels rather than treating it as an isolated tactic." }
        ],
      }}
    />
  );
}

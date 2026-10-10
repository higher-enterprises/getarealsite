import ReachServicePage from "@/components/reach/ReachServicePage";

export default function Page() {
  return (
    <ReachServicePage
      title="Conversion Rate Optimization"
      eyebrow="CONVERSION RATE OPTIMIZATION"
      headline="Turn more visitors into paying customers."
      description="Improve the pages, paths, messages, and interactions that determine whether website visitors take the next meaningful step with your business."
      icon="TrendingUp"
      image="/images/reach/conversion-rate-optimization/composite.jpg"
      serviceSlug="conversion-rate-optimization"
      heroBackgroundImage="/images/reach/conversion-rate-optimization/composite.jpg"
      heroCustomerImage="/images/reach/conversion-rate-optimization/owner.png"
      journeyCustomerImage="/images/reach/conversion-rate-optimization/owner.png"
      whyItMatters={{
        eyebrow: "Why It Matters",
        title: "More traffic matters less if visitors do not act.",
        paragraphs: ["Conversion rate optimization focuses on what happens after someone arrives. It examines whether visitors understand the offer, trust the business, find what they need, and can move toward a quote, booking, purchase, signup, or other valuable action without unnecessary friction.", "We use behavioral evidence, analytics, page structure, messaging, calls to action, forms, testing, and customer-journey analysis to identify where opportunities are being lost and improve the experience systematically."],
        outcomes: ["Increase qualified conversions", "Reduce friction in key journeys", "Create more value from existing traffic"],
        benchmarkEyebrow: "Service / Illustrative Benchmark",
        metric: "1%",
        metricLabel: "small conversion improvements can materially affect high-value businesses",
      }}
      customerJourney={{
        title: "The Real Customer Journey",
        info: "The customer journey represents the stages people move through as they become aware of a need, consider their options, become a customer, return, and ultimately recommend a business to others.",
        stageLabel: "Journey Stage",
        keyMomentsLabel: "Key Moments",
        influenceLabel: "Conversion Rate Optimization Influence",
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
        eyebrow: "Conversion Rate Optimization FAQ",
        title: "Questions about conversion optimization? Start here.",
        description: "Understand what conversion rate optimization does, how it fits into your website and marketing strategy, and what you should expect from an ongoing program.",
        items: [
          { question: "What is conversion rate optimization?", answer: "Conversion Rate Optimization is a coordinated approach to using the relevant channels, experiences, and measurement methods to create business results. RealSite connects the service to the rest of your website and customer journey so activity has a defined purpose." },
          { question: "How does conversion rate optimization fit into my website?", answer: "Your website is usually the place where interest becomes measurable action. We connect conversion rate optimization to the pages, offers, forms, booking paths, content, and tracking needed to move customers forward." },
          { question: "What does RealSite manage for conversion rate optimization?", answer: "We define the strategy, configure the necessary systems, develop or coordinate campaign assets, connect the experience to your website, and measure performance so the program can be refined over time." },
          { question: "How long does conversion rate optimization take to produce results?", answer: "Timing depends on your starting point, market, offer, audience, budget, and the maturity of your existing marketing. We establish measurable milestones so progress can be evaluated against the business objective rather than an arbitrary timeline." },
          { question: "How do we measure conversion rate optimization?", answer: "We select measurements that connect activity to meaningful customer behavior, such as qualified visits, engagement, leads, calls, bookings, purchases, repeat activity, or revenue depending on the role this service plays in your customer journey." },
          { question: "Can conversion rate optimization work with my other marketing?", answer: "Yes. The strongest approach is usually integrated. We design conversion rate optimization to work with your website, analytics, content, advertising, email, automation, and other relevant channels rather than treating it as an isolated tactic." }
        ],
      }}
    />
  );
}

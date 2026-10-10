import ReachServicePage from "@/components/reach/ReachServicePage";

export default function Page() {
  return (
    <ReachServicePage
      title="Content Marketing"
      eyebrow="CONTENT MARKETING"
      headline="Educate. Build trust. Drive long-term growth."
      description="Create useful content that answers customer questions, demonstrates expertise, supports discovery, and gives people reasons to return to your business."
      icon="FileText"
      image="/images/reach/content-marketing/composite.jpg"
      serviceSlug="content-marketing"
      heroBackgroundImage="/images/reach/content-marketing/composite.jpg"
      heroCustomerImage="/images/reach/content-marketing/owner.png"
      journeyCustomerImage="/images/reach/content-marketing/owner.png"
      whyItMatters={{
        eyebrow: "Why It Matters",
        title: "Useful information can become a durable business asset.",
        paragraphs: ["Content marketing gives your business a way to answer the questions customers ask before, during, and after a buying decision. Strong content can support search visibility, sales conversations, email, social media, customer education, and long-term brand authority.", "We develop content around customer needs and business goals, organizing topics, formats, distribution, internal linking, calls to action, and measurement so each piece has a defined role in the larger marketing system."],
        outcomes: ["Build subject-matter authority", "Support search and sales journeys", "Create reusable marketing assets"],
        benchmarkEyebrow: "Service / Illustrative Benchmark",
        metric: "Evergreen",
        metricLabel: "strong content can continue creating value long after publication",
      }}
      customerJourney={{
        title: "The Real Customer Journey",
        info: "The customer journey represents the stages people move through as they become aware of a need, consider their options, become a customer, return, and ultimately recommend a business to others.",
        stageLabel: "Journey Stage",
        keyMomentsLabel: "Key Moments",
        influenceLabel: "Content Marketing Influence",
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
        eyebrow: "Content Marketing FAQ",
        title: "Questions about content marketing? Start here.",
        description: "Understand what content marketing does, how it fits into your website and marketing strategy, and what you should expect from an ongoing program.",
        items: [
          { question: "What is content marketing?", answer: "Content Marketing is a coordinated approach to using the relevant channels, experiences, and measurement methods to create business results. RealSite connects the service to the rest of your website and customer journey so activity has a defined purpose." },
          { question: "How does content marketing fit into my website?", answer: "Your website is usually the place where interest becomes measurable action. We connect content marketing to the pages, offers, forms, booking paths, content, and tracking needed to move customers forward." },
          { question: "What does RealSite manage for content marketing?", answer: "We define the strategy, configure the necessary systems, develop or coordinate campaign assets, connect the experience to your website, and measure performance so the program can be refined over time." },
          { question: "How long does content marketing take to produce results?", answer: "Timing depends on your starting point, market, offer, audience, budget, and the maturity of your existing marketing. We establish measurable milestones so progress can be evaluated against the business objective rather than an arbitrary timeline." },
          { question: "How do we measure content marketing?", answer: "We select measurements that connect activity to meaningful customer behavior, such as qualified visits, engagement, leads, calls, bookings, purchases, repeat activity, or revenue depending on the role this service plays in your customer journey." },
          { question: "Can content marketing work with my other marketing?", answer: "Yes. The strongest approach is usually integrated. We design content marketing to work with your website, analytics, content, advertising, email, automation, and other relevant channels rather than treating it as an isolated tactic." }
        ],
      }}
    />
  );
}

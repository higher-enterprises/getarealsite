import ReachServicePage from "@/components/reach/ReachServicePage";

export default function Page() {
  return (
    <ReachServicePage
      title="Email Marketing"
      eyebrow="EMAIL MARKETING"
      headline="Stay top of mind. Drive repeat business."
      description="Use timely, relevant email campaigns to nurture prospects, strengthen customer relationships, and create more opportunities for repeat revenue."
      icon="Mail"
      image="/images/reach/email-marketing/composite.jpg"
      serviceSlug="email-marketing"
      heroBackgroundImage="/images/reach/email-marketing/composite.jpg"
      heroCustomerImage="/images/reach/email-marketing/owner.png"
      journeyCustomerImage="/images/reach/email-marketing/owner.png"
      whyItMatters={{
        eyebrow: "Why It Matters",
        title: "The relationship should continue after the first visit.",
        paragraphs: ["Email marketing creates a direct line between your business and people who have already shown interest. That makes it useful for nurturing prospects, educating customers, announcing offers, recovering abandoned activity, and encouraging repeat purchases.", "We build email programs around segmentation, useful content, lifecycle timing, automation, testing, and measurement so messages become part of a coordinated customer experience rather than occasional blasts."],
        outcomes: ["Nurture prospects over time", "Increase repeat customer activity", "Create measurable lifecycle revenue"],
        benchmarkEyebrow: "Service / Illustrative Benchmark",
        metric: "36:1",
        metricLabel: "illustrative industry return often cited for email marketing",
      }}
      customerJourney={{
        title: "The Real Customer Journey",
        info: "The customer journey represents the stages people move through as they become aware of a need, consider their options, become a customer, return, and ultimately recommend a business to others.",
        stageLabel: "Journey Stage",
        keyMomentsLabel: "Key Moments",
        influenceLabel: "Email Marketing Influence",
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
        eyebrow: "Email Marketing FAQ",
        title: "Questions about email marketing? Start here.",
        description: "Understand what email marketing does, how it fits into your website and marketing strategy, and what you should expect from an ongoing program.",
        items: [
          { question: "What is email marketing?", answer: "Email Marketing is a coordinated approach to using the relevant channels, experiences, and measurement methods to create business results. RealSite connects the service to the rest of your website and customer journey so activity has a defined purpose." },
          { question: "How does email marketing fit into my website?", answer: "Your website is usually the place where interest becomes measurable action. We connect email marketing to the pages, offers, forms, booking paths, content, and tracking needed to move customers forward." },
          { question: "What does RealSite manage for email marketing?", answer: "We define the strategy, configure the necessary systems, develop or coordinate campaign assets, connect the experience to your website, and measure performance so the program can be refined over time." },
          { question: "How long does email marketing take to produce results?", answer: "Timing depends on your starting point, market, offer, audience, budget, and the maturity of your existing marketing. We establish measurable milestones so progress can be evaluated against the business objective rather than an arbitrary timeline." },
          { question: "How do we measure email marketing?", answer: "We select measurements that connect activity to meaningful customer behavior, such as qualified visits, engagement, leads, calls, bookings, purchases, repeat activity, or revenue depending on the role this service plays in your customer journey." },
          { question: "Can email marketing work with my other marketing?", answer: "Yes. The strongest approach is usually integrated. We design email marketing to work with your website, analytics, content, advertising, email, automation, and other relevant channels rather than treating it as an isolated tactic." }
        ],
      }}
    />
  );
}

import ReachServicePage from "@/components/reach/ReachServicePage";

export default function Page() {
  return (
    <ReachServicePage
      title="Mobile Marketing"
      eyebrow="MOBILE MARKETING"
      headline="Meet your customers where they are."
      description="Create mobile-first customer experiences that make it easier to discover, engage, book, buy, return, and respond from the device customers use most."
      icon="Smartphone"
      image="/images/reach/mobile-marketing/composite.jpg"
      serviceSlug="mobile-marketing"
      heroBackgroundImage="/images/reach/mobile-marketing/composite.jpg"
      heroCustomerImage="/images/reach/mobile-marketing/owner.png"
      journeyCustomerImage="/images/reach/mobile-marketing/owner.png"
      whyItMatters={{
        eyebrow: "Why It Matters",
        title: "The customer journey increasingly happens in the palm of a hand.",
        paragraphs: ["Mobile marketing considers the entire experience customers have on phones: discovering the business, visiting the website, responding to messages, booking appointments, receiving reminders, using offers, making purchases, and returning later.", "We connect mobile-friendly experiences with messaging, automation, local discovery, forms, booking, offers, loyalty, and measurement so mobile becomes a practical customer channel rather than simply a smaller version of desktop marketing."],
        outcomes: ["Improve mobile customer experience", "Increase bookings and responses", "Strengthen repeat engagement"],
        benchmarkEyebrow: "Service / Illustrative Benchmark",
        metric: "Mobile-first",
        metricLabel: "customer journeys should work naturally on the device customers carry every day",
      }}
      customerJourney={{
        title: "The Real Customer Journey",
        info: "The customer journey represents the stages people move through as they become aware of a need, consider their options, become a customer, return, and ultimately recommend a business to others.",
        stageLabel: "Journey Stage",
        keyMomentsLabel: "Key Moments",
        influenceLabel: "Mobile Marketing Influence",
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
        eyebrow: "Mobile Marketing FAQ",
        title: "Questions about mobile marketing? Start here.",
        description: "Understand what mobile marketing does, how it fits into your website and marketing strategy, and what you should expect from an ongoing program.",
        items: [
          { question: "What is mobile marketing?", answer: "Mobile Marketing is a coordinated approach to using the relevant channels, experiences, and measurement methods to create business results. RealSite connects the service to the rest of your website and customer journey so activity has a defined purpose." },
          { question: "How does mobile marketing fit into my website?", answer: "Your website is usually the place where interest becomes measurable action. We connect mobile marketing to the pages, offers, forms, booking paths, content, and tracking needed to move customers forward." },
          { question: "What does RealSite manage for mobile marketing?", answer: "We define the strategy, configure the necessary systems, develop or coordinate campaign assets, connect the experience to your website, and measure performance so the program can be refined over time." },
          { question: "How long does mobile marketing take to produce results?", answer: "Timing depends on your starting point, market, offer, audience, budget, and the maturity of your existing marketing. We establish measurable milestones so progress can be evaluated against the business objective rather than an arbitrary timeline." },
          { question: "How do we measure mobile marketing?", answer: "We select measurements that connect activity to meaningful customer behavior, such as qualified visits, engagement, leads, calls, bookings, purchases, repeat activity, or revenue depending on the role this service plays in your customer journey." },
          { question: "Can mobile marketing work with my other marketing?", answer: "Yes. The strongest approach is usually integrated. We design mobile marketing to work with your website, analytics, content, advertising, email, automation, and other relevant channels rather than treating it as an isolated tactic." }
        ],
      }}
    />
  );
}

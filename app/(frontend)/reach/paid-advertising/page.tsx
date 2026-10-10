import ReachServicePage from "@/components/reach/ReachServicePage";

export default function Page() {
  return (
    <ReachServicePage
      title="Paid Advertising"
      eyebrow="PAID ADVERTISING"
      headline="Put your business in front of the right people."
      description="Reach high-intent prospects with paid campaigns built around precise targeting, persuasive landing experiences, and measurable lead generation."
      icon="Target"
      image="/images/reach/paid-advertising/composite.jpg"
      serviceSlug="paid-advertising"
      heroBackgroundImage="/images/reach/paid-advertising/composite.jpg"
      heroCustomerImage="/images/reach/paid-advertising/owner.png"
      journeyCustomerImage="/images/reach/paid-advertising/owner.png"
      whyItMatters={{
        eyebrow: "Why It Matters",
        title: "Turn advertising spend into measurable opportunity.",
        paragraphs: ["Paid advertising gives your business immediate access to people who are actively searching, browsing, comparing, or showing signals that align with what you sell. The opportunity is not simply to buy traffic, but to put the right message in front of the right prospect at the right moment.", "We connect campaign strategy, audience targeting, creative, landing pages, conversion tracking, and ongoing optimization so your advertising is accountable to business outcomes rather than clicks alone."],
        outcomes: ["Reach qualified prospects faster", "Generate measurable leads and sales", "Improve return on advertising spend"],
        benchmarkEyebrow: "Service / Illustrative Benchmark",
        metric: "200%",
        metricLabel: "illustrative return when campaigns convert efficiently",
      }}
      customerJourney={{
        title: "The Real Customer Journey",
        info: "The customer journey represents the stages people move through as they become aware of a need, consider their options, become a customer, return, and ultimately recommend a business to others.",
        stageLabel: "Journey Stage",
        keyMomentsLabel: "Key Moments",
        influenceLabel: "Paid Advertising Influence",
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
        eyebrow: "Paid Advertising FAQ",
        title: "Questions about paid advertising? Start here.",
        description: "Understand what paid advertising does, how it fits into your website and marketing strategy, and what you should expect from an ongoing program.",
        items: [
          { question: "What is paid advertising?", answer: "Paid Advertising is a coordinated approach to using the relevant channels, experiences, and measurement methods to create business results. RealSite connects the service to the rest of your website and customer journey so activity has a defined purpose." },
          { question: "How does paid advertising fit into my website?", answer: "Your website is usually the place where interest becomes measurable action. We connect paid advertising to the pages, offers, forms, booking paths, content, and tracking needed to move customers forward." },
          { question: "What does RealSite manage for paid advertising?", answer: "We define the strategy, configure the necessary systems, develop or coordinate campaign assets, connect the experience to your website, and measure performance so the program can be refined over time." },
          { question: "How long does paid advertising take to produce results?", answer: "Timing depends on your starting point, market, offer, audience, budget, and the maturity of your existing marketing. We establish measurable milestones so progress can be evaluated against the business objective rather than an arbitrary timeline." },
          { question: "How do we measure paid advertising?", answer: "We select measurements that connect activity to meaningful customer behavior, such as qualified visits, engagement, leads, calls, bookings, purchases, repeat activity, or revenue depending on the role this service plays in your customer journey." },
          { question: "Can paid advertising work with my other marketing?", answer: "Yes. The strongest approach is usually integrated. We design paid advertising to work with your website, analytics, content, advertising, email, automation, and other relevant channels rather than treating it as an isolated tactic." }
        ],
      }}
    />
  );
}

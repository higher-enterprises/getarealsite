import ReachServicePage from "@/components/reach/ReachServicePage";

export default function Page() {
  return (
    <ReachServicePage
      title="Display Advertising"
      eyebrow="DISPLAY ADVERTISING"
      headline="Increase brand awareness. Keep your business visible."
      description="Use visual advertising across relevant websites and digital environments to build recognition, reinforce offers, and reconnect with interested prospects."
      icon="Monitor"
      image="/images/reach/display-advertising/composite.jpg"
      serviceSlug="display-advertising"
      heroBackgroundImage="/images/reach/display-advertising/composite.jpg"
      heroCustomerImage="/images/reach/display-advertising/owner.png"
      journeyCustomerImage="/images/reach/display-advertising/owner.png"
      whyItMatters={{
        eyebrow: "Why It Matters",
        title: "Visibility compounds when the right audience sees you repeatedly.",
        paragraphs: ["Display advertising helps businesses stay visible beyond search results and social feeds. Visual placements can introduce the brand to new audiences, reinforce a campaign, promote specific inventory or offers, and reconnect with people who previously visited the website.", "We coordinate audiences, placements, creative, landing destinations, frequency, retargeting, and measurement so display campaigns support awareness and consideration without becoming disconnected impressions."],
        outcomes: ["Increase targeted brand visibility", "Reconnect with interested visitors", "Support campaigns across the funnel"],
        benchmarkEyebrow: "Service / Illustrative Benchmark",
        metric: "Multi-touch",
        metricLabel: "display can reinforce awareness across repeated customer interactions",
      }}
      customerJourney={{
        title: "The Real Customer Journey",
        info: "The customer journey represents the stages people move through as they become aware of a need, consider their options, become a customer, return, and ultimately recommend a business to others.",
        stageLabel: "Journey Stage",
        keyMomentsLabel: "Key Moments",
        influenceLabel: "Display Advertising Influence",
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
        eyebrow: "Display Advertising FAQ",
        title: "Questions about display advertising? Start here.",
        description: "Understand what display advertising does, how it fits into your website and marketing strategy, and what you should expect from an ongoing program.",
        items: [
          { question: "What is display advertising?", answer: "Display Advertising is a coordinated approach to using the relevant channels, experiences, and measurement methods to create business results. RealSite connects the service to the rest of your website and customer journey so activity has a defined purpose." },
          { question: "How does display advertising fit into my website?", answer: "Your website is usually the place where interest becomes measurable action. We connect display advertising to the pages, offers, forms, booking paths, content, and tracking needed to move customers forward." },
          { question: "What does RealSite manage for display advertising?", answer: "We define the strategy, configure the necessary systems, develop or coordinate campaign assets, connect the experience to your website, and measure performance so the program can be refined over time." },
          { question: "How long does display advertising take to produce results?", answer: "Timing depends on your starting point, market, offer, audience, budget, and the maturity of your existing marketing. We establish measurable milestones so progress can be evaluated against the business objective rather than an arbitrary timeline." },
          { question: "How do we measure display advertising?", answer: "We select measurements that connect activity to meaningful customer behavior, such as qualified visits, engagement, leads, calls, bookings, purchases, repeat activity, or revenue depending on the role this service plays in your customer journey." },
          { question: "Can display advertising work with my other marketing?", answer: "Yes. The strongest approach is usually integrated. We design display advertising to work with your website, analytics, content, advertising, email, automation, and other relevant channels rather than treating it as an isolated tactic." }
        ],
      }}
    />
  );
}

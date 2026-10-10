import ReachServicePage from "@/components/reach/ReachServicePage";

export default function Page() {
  return (
    <ReachServicePage
      title="Video Marketing"
      eyebrow="VIDEO MARKETING"
      headline="Tell your story. Show what's possible."
      description="Use video to demonstrate value, build trust, explain complex ideas, and help customers experience your business before they ever contact you."
      icon="Clapperboard"
      image="/images/reach/video-marketing/composite.jpg"
      serviceSlug="video-marketing"
      heroBackgroundImage="/images/reach/video-marketing/composite.jpg"
      heroCustomerImage="/images/reach/video-marketing/owner.png"
      journeyCustomerImage="/images/reach/video-marketing/owner.png"
      whyItMatters={{
        eyebrow: "Why It Matters",
        title: "Some stories are understood faster when people can see them.",
        paragraphs: ["Video combines demonstration, personality, environment, proof, and explanation in a format that can communicate quickly. It can help customers understand a service, tour a property, meet a team, see a product in use, or hear directly from other customers.", "We plan video around the customer journey, identifying what should be shown, where it should live, how it should be distributed, and what action it should encourage across websites, social platforms, advertising, email, and sales."],
        outcomes: ["Explain offers more clearly", "Build trust through visual proof", "Create adaptable multi-channel content"],
        benchmarkEyebrow: "Service / Illustrative Benchmark",
        metric: "1→Many",
        metricLabel: "one production can create assets for multiple channels and formats",
      }}
      customerJourney={{
        title: "The Real Customer Journey",
        info: "The customer journey represents the stages people move through as they become aware of a need, consider their options, become a customer, return, and ultimately recommend a business to others.",
        stageLabel: "Journey Stage",
        keyMomentsLabel: "Key Moments",
        influenceLabel: "Video Marketing Influence",
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
        eyebrow: "Video Marketing FAQ",
        title: "Questions about video marketing? Start here.",
        description: "Understand what video marketing does, how it fits into your website and marketing strategy, and what you should expect from an ongoing program.",
        items: [
          { question: "What is video marketing?", answer: "Video Marketing is a coordinated approach to using the relevant channels, experiences, and measurement methods to create business results. RealSite connects the service to the rest of your website and customer journey so activity has a defined purpose." },
          { question: "How does video marketing fit into my website?", answer: "Your website is usually the place where interest becomes measurable action. We connect video marketing to the pages, offers, forms, booking paths, content, and tracking needed to move customers forward." },
          { question: "What does RealSite manage for video marketing?", answer: "We define the strategy, configure the necessary systems, develop or coordinate campaign assets, connect the experience to your website, and measure performance so the program can be refined over time." },
          { question: "How long does video marketing take to produce results?", answer: "Timing depends on your starting point, market, offer, audience, budget, and the maturity of your existing marketing. We establish measurable milestones so progress can be evaluated against the business objective rather than an arbitrary timeline." },
          { question: "How do we measure video marketing?", answer: "We select measurements that connect activity to meaningful customer behavior, such as qualified visits, engagement, leads, calls, bookings, purchases, repeat activity, or revenue depending on the role this service plays in your customer journey." },
          { question: "Can video marketing work with my other marketing?", answer: "Yes. The strongest approach is usually integrated. We design video marketing to work with your website, analytics, content, advertising, email, automation, and other relevant channels rather than treating it as an isolated tactic." }
        ],
      }}
    />
  );
}

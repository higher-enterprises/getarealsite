import ReachServicePage from "@/components/reach/ReachServicePage";

export default function Page() {
  return (
    <ReachServicePage
      title="Search Engine Optimization"
      eyebrow="SEO"
      headline="Search Engine Optimization (SEO)"
      description="Improve your visibility across search engines with a strategy built around technical performance, useful content, and the searches that matter most to your business."
      icon="Search"
      image="/images/reach/services/seo-hero.svg"
      serviceSlug="search-engine-optimization"
      heroBackgroundImage="/images/reach/seo/seo-plumber-composite-faded-1920x1080.jpg"
      heroCustomerImage="/images/reach/seo/plumber-cutout-1200x1800.png"
      journeyCustomerImage="/images/reach/seo/plumber-headshot-smile-1200x1200.png"
      whyItMatters={{
        eyebrow: "Why It Matters",
        title: "Marketing should create measurable movement.",
        paragraphs: [
          "Search engine optimization helps your business appear when people are actively looking for the products, services, information, or solutions you provide. Instead of relying entirely on advertising to create demand, SEO positions your website to capture demand that already exists.",
          "Effective SEO is about more than rankings. It connects the language your customers use when they search with the pages, content, locations, products, and services on your website. The result is greater visibility at the moments when potential customers are researching their options and deciding which businesses deserve their attention.",
        ],
        outcomes: [
          "Increase qualified organic traffic",
          "Improve local and national visibility",
          "Build long-term search authority",
        ],
        benchmarkEyebrow: "Industry / Illustrative Benchmark",
        metric: "53%",
        metricLabel: "of website traffic can come from organic search",
      }}
      customerJourney={{
        title: "The Real Customer Journey",
        info: "The customer journey represents the stages people move through as they become aware of a need, consider their options, become a customer, return, and ultimately recommend a business to others.",
        stageLabel: "Journey Stage",
        keyMomentsLabel: "Key Moments",
        influenceLabel: "SEO Influence",
        stages: [
          {
            number: "01",
            title: "Awareness",
            subtitle: "Becoming Aware",
            actions: ["Discovering options", "Identifying needs", "Researching solutions"],
            touchpoints: ["Search engines", "Social media", "Online advertising", "Referrals"],
            channels: ["Organic search", "Paid search", "Social media", "Referral sites"],
            moment: "Finds your business while searching",
            influence: "primary",
          },
          {
            number: "02",
            title: "Consideration",
            subtitle: "Exploring Options",
            actions: ["Comparing businesses", "Exploring services", "Reading reviews", "Looking for information"],
            touchpoints: ["Website", "Service pages", "Reviews & testimonials", "Educational content"],
            channels: ["Website", "Search engines", "Email", "Social media"],
            moment: "Reads your content and compares options",
            influence: "primary",
          },
          {
            number: "03",
            title: "Conversion",
            subtitle: "Choosing & Buying",
            actions: ["Choosing a provider", "Requesting a quote", "Booking or purchasing", "Becoming a customer"],
            touchpoints: ["Contact forms", "Phone calls", "Booking / checkout", "Sales conversations"],
            channels: ["Website", "Phone", "In-person", "E-commerce"],
            moment: "Takes action and becomes a customer",
            influence: "supporting",
          },
          {
            number: "04",
            title: "Loyalty",
            subtitle: "Using & Returning",
            actions: ["Using the product or service", "Returning for additional needs", "Engaging with your brand", "Providing feedback"],
            touchpoints: ["Email communications", "Account experience", "Customer support", "Remarketing"],
            channels: ["Email", "Website / customer portal", "Support channels", "Social media"],
            moment: "Returns for more value",
            influence: "subtle",
          },
          {
            number: "05",
            title: "Advocacy",
            subtitle: "Sharing & Recommending",
            actions: ["Recommending to others", "Leaving a review", "Sharing on social media", "Becoming an advocate"],
            touchpoints: ["Online reviews", "Social sharing", "Word of mouth", "Community engagement"],
            channels: ["Review platforms", "Social media", "Referrals", "Branded search"],
            moment: "Recommends your business",
            influence: "subtle",
          },
        ],
      }}
      faq={{
        eyebrow: "Search Engine Optimization FAQ",
        title: "Questions about SEO? Start here.",
        description: "Understand what search engine optimization does, how it fits into your website and marketing strategy, and what you should expect from an ongoing SEO program.",
        items: [
          {
            question: "What is search engine optimization?",
            answer: "Search engine optimization improves how your website is understood, indexed, and positioned by search engines so people can find your business when they search for relevant products, services, information, or solutions. It brings together technical improvements, website structure, content, search intent, authority, and performance measurement to increase meaningful organic visibility.",
          },
          {
            question: "How long does SEO take to work?",
            answer: "SEO builds over time. Technical fixes and improvements to existing pages can sometimes create relatively quick movement, while competitive rankings and meaningful organic traffic growth generally develop as search engines recrawl your website and its relevance, content, and authority improve. The timeline depends on your market, competition, website history, and starting position.",
          },
          {
            question: "What does RealSite optimize?",
            answer: "We look across your website's technical foundation, structure, content, keywords, service pages, location pages, internal linking, search appearance, local visibility, and performance data. The objective is to identify and remove barriers to visibility while creating stronger connections between what potential customers search for and what your business provides.",
          },
          {
            question: "Do I need SEO if I already have a website?",
            answer: "Having a website makes your business available online; SEO helps make that website discoverable. A well-designed website can still receive very little organic search traffic if search engines cannot clearly understand what the business offers, who it serves, where it operates, or which searches its individual pages should appear for.",
          },
          {
            question: "What is the difference between local SEO and SEO?",
            answer: "SEO improves organic search visibility more broadly, while local SEO focuses on searches connected to a particular geographic market. Local SEO can include location-specific website content, business listings, map visibility, reviews, local relevance signals, and other factors that help customers find businesses serving their area.",
          },
          {
            question: "How do we measure whether SEO is working?",
            answer: "We look beyond rankings alone. Organic visibility, qualified search traffic, search queries, engagement, leads, calls, bookings, purchases, and other meaningful conversions help show whether increased search visibility is creating value. The most useful SEO measurement connects what happens in search to what happens after a customer reaches your website.",
          },
        ],
      }}
    />
  );
}

"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly is a RealSite?",
    answer:
      "A RealSite is more than a website. It’s a digital destination built around your business, brand, customers, and the way you actually operate. We combine strategy, design, and technology to create sites that look incredible and drive real results.",
  },
  {
    question: "How is RealSite different from a traditional web design agency?",
    answer:
      "RealSite brings strategy, branding, web development, ecommerce, automation, AI, and ongoing digital growth together in one platform. The goal isn't simply to launch a website. It's to build a digital place where your business can actually operate and grow.",
  },
  {
    question: "What does it cost to build a RealSite?",
    answer:
      "The cost depends on the size, complexity, functionality, and goals of your RealSite. We offer different paths depending on what your business needs, from building a new site to rebranding an existing one or acquiring a site that is already performing.",
  },
  {
    question: "How long does it take to build a RealSite?",
    answer:
      "Every project is different. A straightforward RealSite can move quickly, while larger projects involving custom functionality, integrations, ecommerce, or automation require more time. We'll establish the scope and timeline before development begins.",
  },
  {
    question: "Can I use RealSite if I already have a website?",
    answer:
      "Absolutely. If your existing website is holding your business back, we can evaluate what you already have and determine whether it makes more sense to rebuild, redesign, or rebrand it.",
  },
  {
    question: "What does Rebrand mean?",
    answer:
      "Rebrand is for businesses that already have an established identity but need a stronger digital presence. We take what makes your business recognizable and build a modern RealSite around your existing brand.",
  },
  {
    question: "What does it mean to Acquire a RealSite?",
    answer:
      "Acquire is for businesses looking to purchase a complete website that is already built and generating revenue. Instead of starting from zero, you can acquire an established digital property and take it forward.",
  },
  {
    question: "Do you provide hosting and ongoing support?",
    answer:
      "Yes. A RealSite can include the infrastructure, maintenance, updates, support, and ongoing improvements needed to keep your digital presence operating properly.",
  },
  {
    question: "Can RealSite integrate with the tools my business already uses?",
    answer:
      "Yes. RealSite can be built around the systems your business already relies on, including ecommerce platforms, scheduling systems, CRMs, payment systems, communication tools, automation, and other business software.",
  },
  {
    question: "What happens after my RealSite launches?",
    answer:
      "Launch is only the beginning. Your RealSite can continue to evolve as your business grows, adding new functionality, integrations, content, automation, ecommerce capabilities, and other digital tools over time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-[#02050d] px-6 py-32 md:px-10 lg:px-16">
      <div className="relative mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-16 text-center text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl">
          Frequently asked questions.
        </h2>

        {/* FAQ */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  overflow-hidden rounded-sm border
                  transition-all duration-500
                  ${
                    isOpen
                      ? "border-indigo-500/70 bg-indigo-500/[0.035] shadow-[0_0_40px_rgba(79,70,229,0.06)]"
                      : "border-white/10 bg-transparent hover:border-white/20"
                  }
                `}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex w-full items-center justify-between
                    gap-8 px-7 py-7
                    text-left
                    md:px-10 md:py-8
                  "
                >
                  <span
                    className={`
                      text-xl font-light leading-tight
                      tracking-tight
                      transition-colors duration-300
                      md:text-2xl
                      lg:text-[1.65rem]
                      ${
                        isOpen
                          ? "text-white"
                          : "text-white/90 group-hover:text-white"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex h-8 w-8 shrink-0 items-center justify-center
                      text-2xl font-light leading-none
                      text-indigo-400
                      transition-transform duration-300
                      ${isOpen ? "rotate-0" : "rotate-0"}
                    `}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`
                    grid transition-all duration-500 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-7 pb-8 md:px-10 md:pb-9">
                      <p className="max-w-4xl text-base font-light leading-8 text-white/55 md:text-lg md:leading-9">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
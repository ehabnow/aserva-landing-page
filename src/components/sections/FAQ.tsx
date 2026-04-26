"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FadeUp, StaggerContainer, StaggerItem, motion } from "@/components/animations"

const faqItems = [
  {
    question: "How quickly can we launch?",
    answer:
      "Most teams connect their storefront, upload knowledge, and launch the widget in under 30 minutes with a guided path. There's no services dependency or consultant-heavy onboarding.",
  },
  {
    question: "Will the AI stay grounded in our content?",
    answer:
      "Yes. Aserva uses your product catalog, knowledge base, and support history to keep responses grounded, measurable, and easy to trust. It won't make things up — if confidence is low, it escalates.",
  },
  {
    question: "What happens when the AI doesn't know the answer?",
    answer:
      "The system escalates gracefully, preserves the entire conversation context for your team, and keeps SLA visibility high in the live operator inbox. Your customers never know AI was involved.",
  },
  {
    question: "Does it work with both Shopify and WordPress?",
    answer:
      "Yes. Aserva has native integrations for Shopify, WordPress, and WooCommerce — all within a unified inbox. Commerce actions like refunds, exchanges, and discount codes work across both platforms.",
  },
  {
    question: "Can smaller teams use it without a services contract?",
    answer:
      "Absolutely. The product is designed so teams of any size can launch quickly without outside help. Guided setup, safe defaults, and assist-first automation let you prove value before scaling.",
  },
  {
    question: "How is Aserva different from Intercom or Gorgias?",
    answer:
      "Aserva is purpose-built for e-commerce merchants on WordPress and Shopify. It's easier to try, more affordable to start, and safer to trust — grounding, handoff behavior, and activation visibility are built into the product from day one.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative z-10 py-24 md:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Questions answered
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-7 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 md:text-[3.5rem] md:leading-[1.08]">
              A simple product still needs{" "}
              <span className="text-slate-400">clear answers.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Everything you need to understand setup speed, safety, and fit
              before you commit.
            </p>
          </FadeUp>
        </div>

        {/* FAQ items */}
        <div className="mx-auto mt-14 max-w-3xl">
          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
            {faqItems.map((item, i) => (
              <StaggerItem key={item.question}>
                <div
                  className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                  id={`faq-${i}`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                    className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                    aria-expanded={openIndex === i}
                  >
                    <span className="text-base font-semibold text-slate-950 pr-4">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    </motion.div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === i ? "max-h-56" : "max-h-0"
                    }`}
                  >
                    <div className="px-7 pb-6 text-sm leading-7 text-slate-600">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

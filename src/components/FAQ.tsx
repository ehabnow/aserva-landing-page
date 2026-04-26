"use client";

import { useState } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Does the AI actually execute actions — or just suggest them?",
    answer: "It executes them. aserva connects directly to the Shopify Admin API and WooCommerce REST API with read-write access. When a customer requests a refund, the AI doesn't draft a reply for your agent to review — it processes the refund, updates the order, and confirms with the customer. No human required, unless you want one.",
  },
  {
    question: "What happens when the AI can't fully resolve a ticket?",
    answer: "When the AI's confidence score drops below your configured threshold, it escalates the ticket to a human agent — but not empty-handed. The agent receives a pre-written response draft based on the full ticket context, so they're not starting from scratch. Resolution time stays low even on escalations.",
  },
  {
    question: "Will the AI actually understand my store's specific policies?",
    answer: "Yes. During setup, aserva's crawler indexes your entire storefront: product pages, return and exchange policies, FAQs, shipping rules, and past order history. Works with both Shopify and WooCommerce stores. The AI builds a knowledge model specific to your store — not a generic e-commerce template. You can also upload custom knowledge base articles to fill any gaps.",
  },
  {
    question: "How does this compare to what I'm paying for now?",
    answer: "The average Shopify store on a legacy helpdesk with 3 agents is spending $2,800–$4,500/month in direct costs plus hidden LTV losses from slow resolution. aserva's Growth plan is $79/month and autonomously resolves 82% of tickets. The math is uncomfortable for legacy vendors — which is why they don't show it to you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="max-w-[800px] mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.05] text-white">
              Cut through the noise.
            </h2>
            <p className="text-[18px] text-gray-400 mt-6 max-w-[600px] mx-auto leading-relaxed tracking-wide">
              Real answers to the questions operators ask before they realize they've already waited too long to switch.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <StaggerItem key={index}>
                <div
                  className={`rounded-[20px] transition-all duration-300 overflow-hidden border ${
                    isOpen
                      ? "border-violet-500/30 bg-white/10 shadow-[0_0_30px_rgba(139,92,246,0.1)]"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-7 text-left focus:outline-none"
                  >
                    <span className="text-[17px] font-bold text-white tracking-wide pr-8">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`shrink-0 ${isOpen ? 'text-violet-400' : 'text-gray-500'}`}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <div className="px-7 pb-7 text-[15px] text-gray-400 leading-[1.7] tracking-wide">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

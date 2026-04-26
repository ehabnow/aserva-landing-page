"use client";

import { FadeUp, StaggerContainer, StaggerItem, TiltCard } from "./motion";

const features = [
  {
    title: "Executes store actions — not suggestions",
    description: "Refunds processed. Exchanges created. Discount codes applied. Order cancellations handled. Works natively with Shopify and WooCommerce. aserva doesn't draft a reply for your agent. It completes the action, closes the ticket, and notifies the customer — in under 90 seconds.",
    colSpan: "col-span-1 md:col-span-2",
    accent: "bg-violet-900/10 border-violet-500/20",
  },
  {
    title: "Remembers every customer",
    description: "Order history, past complaints, sentiment, product preferences. When your customer comes back, aserva already knows them. No repeated explanations. No cold starts. Loyalty built on memory.",
    colSpan: "col-span-1",
    accent: "bg-emerald-900/10 border-emerald-500/20",
  },
  {
    title: "Auto-drafts for every escalation",
    description: "When a ticket genuinely needs a human, your agent opens it to a ready-to-send draft — not a blank page. Response time drops 70%. Agent exhaustion drops with it.",
    colSpan: "col-span-1",
    accent: "bg-orange-900/10 border-orange-500/20",
  },
  {
    title: "Sees what your customer sees",
    description: "Customer uploads a photo of a damaged delivery. aserva classifies the damage, matches it to your policy, and initiates the right resolution — hands-free. No back-and-forth. No manual review.",
    colSpan: "col-span-1",
    accent: "bg-sky-900/10 border-sky-500/20",
  },
  {
    title: "Turns support data into product intelligence",
    description: "'127 customers reported the same seam issue on SKU-4421 in 30 days.' aserva surfaces these patterns before they become crises — turning your ticket queue into a product roadmap signal.",
    colSpan: "col-span-1",
    accent: "bg-white/5 border-white/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="mb-16 md:w-2/3">
            <h2 className="text-[32px] md:text-[56px] font-extrabold tracking-[-0.04em] leading-[1.05] text-white">
              Stop answering tickets. <br className="hidden md:block"/> Start closing revenue loops.
            </h2>
            <p className="text-[18px] text-gray-400 mt-6 leading-relaxed tracking-wide max-w-[600px]">
              Every other helpdesk AI tells your agents what to type. aserva executes the action, updates the record, and retains the customer — before your agent finishes their coffee.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.08}>
          {features.map((feature) => (
            <StaggerItem key={feature.title} className={feature.colSpan}>
              <TiltCard className={`h-full min-h-[280px] p-10 flex flex-col justify-end ${feature.accent} hover:bg-white/[0.08] transition-colors duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_24px_rgba(0,0,0,0.4)]`}>
                <div className="relative z-10">
                  <h3 className="text-[20px] font-bold tracking-tight text-white mb-4 drop-shadow-md">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-slate-300 leading-relaxed tracking-wide">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

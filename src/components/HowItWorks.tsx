"use client";

import { FadeUp, StaggerContainer, StaggerItem, TiltCard } from "./motion";

const steps = [
  { num: "01", title: "Install in under 30 minutes", desc: "One click from the Shopify App Store or WooCommerce plugin directory. The aserva widget auto-injects into your store. No developer required. No configuration marathon." },
  { num: "02", title: "AI ingests your entire store", desc: "Policies, products, order history, FAQs. aserva reads everything and builds a complete operational model of your business. Instantly." },
  { num: "03", title: "Set your resolution rules", desc: "Define what the AI can execute autonomously. Full refunds, exchanges, discount codes. Set your confidence thresholds and guardrails in minutes." },
  { num: "04", title: "Go live. Stop losing tickets.", desc: "aserva starts resolving contacts immediately. Your agents handle only the cases that genuinely need them — everything else is handled, closed, and logged." },
];

export function HowItWorks() {
  return (
    <section id="proof" className="py-24 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.05] text-white">
              From install to resolution. <br/>Under 30 minutes.
            </h2>
            <p className="text-[18px] text-gray-400 mt-4 max-w-[560px] mx-auto leading-relaxed">
              No lengthy onboarding. No professional services invoice. No waiting for IT. If you can install a Shopify app, you're ready.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.08}>
          {steps.map((step) => (
            <StaggerItem key={step.num}>
              <TiltCard className="p-8 h-full flex flex-col bg-white/5 border-white/10 hover:border-violet-500/30 transition-colors">
                <div className="text-[48px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-500 to-gray-600 mb-6 tracking-tighter opacity-80">
                  {step.num}
                </div>
                <h3 className="text-[18px] font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-[14px] text-gray-400 leading-[1.6] tracking-wide">
                  {step.desc}
                </p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

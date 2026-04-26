"use client";

import { FadeUp, TiltCard } from "./motion";

const plans = [
  {
    name: "Starter",
    description: "For growing stores that want to stop losing tickets and start retaining customers automatically.",
    price: "$29",
    period: "/mo",
    features: [
      "Up to 500 AI-executed interactions/mo",
      "Chat, email, and social support channels",
      "Full Shopify Admin API execution",
      "Web widget + knowledge base indexing",
    ],
    cta: "Start recovering revenue",
    popular: false,
  },
  {
    name: "Growth",
    description: "For brands scaling past $500K GMV that need deep automation and real operational insight.",
    price: "$79",
    period: "/mo",
    features: [
      "Up to 2,000 AI-executed interactions/mo",
      "Advanced analytics and resolution reporting",
      "Slack escalation integration + full API access",
      "Up to 10 team members",
    ],
    cta: "Start recovering revenue",
    popular: true,
  },
  {
    name: "Scale",
    description: "For high-volume operations that need white-glove configuration, SLA guarantees, and dedicated support.",
    price: "$149",
    period: "/mo",
    features: [
      "Up to 5,000 AI-executed interactions/mo",
      "Dedicated 1-on-1 Slack support line",
      "White-glove onboarding and custom workflows",
      "SLA guarantee + unlimited seats",
    ],
    cta: "Talk to us",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative z-10 overflow-hidden">
      {/* ── Pricing section glows ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Violet orb — behind center/Growth card */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(109,40,217,0.18) 0%, transparent 65%)" }} />
        {/* Emerald orb — bottom left */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(16,185,129,0.12) 0%, transparent 65%)" }} />
        {/* Indigo orb — top right */}
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(79,70,229,0.12) 0%, transparent 65%)" }} />
      </div>
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-20">
            <h2 className="text-[32px] md:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.05] text-white mb-6">
              Priced for ROI. Not for overhead.
            </h2>
            <p className="text-[18px] text-gray-400 max-w-[600px] mx-auto leading-relaxed tracking-wide">
              No per-ticket fees. No contracts. No feature paywalls. A flat monthly cost that stays predictable while your revenue grows.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.1}>
              <TiltCard
                className={`relative p-10 h-full flex flex-col ${
                  plan.popular
                    ? "border-violet-500/50 bg-[#0a0a0a]/90 shadow-[0_0_50px_rgba(139,92,246,0.15)] z-10 scale-100 md:scale-105"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-violet-600 text-white text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-1.5 shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                      Most Active
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-[24px] font-bold text-white mb-2 tracking-tight">{plan.name}</h3>
                  <p className="text-[14px] text-gray-400 leading-relaxed min-h-[42px] tracking-wide">{plan.description}</p>
                </div>

                <div className="mb-8 pb-8 border-b border-white/10">
                  <span className="text-[48px] font-extrabold tracking-[-0.04em] text-white">
                    {plan.price}
                  </span>
                  <span className="text-[14px] font-bold tracking-widest text-gray-500 uppercase ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-5 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-[2px]">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#34d399">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-[14px] text-gray-300 font-medium leading-[1.5] tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`text-center text-[13px] font-bold py-4 rounded-full transition-all uppercase tracking-widest ${
                    plan.popular
                      ? "bg-white text-[#050505] hover:bg-gray-200 shadow-xl"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { FadeUp, TiltCard } from "./motion";

const testimonials = [
  {
    quote: "We processed 340 exchanges last month without a single agent touching them. aserva executes inside Shopify directly. Our team now handles less than 20% of what they used to — and our CSAT went up, not down.",
    name: "Sarah K.",
    role: "Head of Support, WooCommerce",
  },
  {
    quote: "Our refund-to-retention rate jumped 31% in the first 45 days. Customers who used to demand refunds are now accepting exchanges because the AI offers them instantly, before they even finish typing.",
    name: "Marcus T.",
    role: "E-commerce Director",
  },
  {
    quote: "I was spending $3,200/month on a helpdesk that needed 3 agents to run. aserva costs $79, handles 82% of tickets autonomously, and the 18% escalations arrive with a pre-written draft. It is not a fair comparison.",
    name: "Priya M.",
    role: "Founder, DTC brand",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-16">
        <FadeUp>
          <div className="text-center">
            <h2 className="text-[32px] md:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.05] text-white">
              Revenue recovered. In their words.
            </h2>
            <p className="text-[18px] text-gray-400 mt-4 max-w-[560px] mx-auto leading-relaxed">
              Operators who switched aren't measuring in satisfaction scores. They're measuring in dollars retained.
            </p>
          </div>
        </FadeUp>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <TiltCard className="p-10 h-full flex flex-col bg-white/5 border-white/10 hover:border-emerald-500/30 transition-colors">
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#34d399"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-[16px] text-gray-300 leading-[1.7] flex-1 font-medium tracking-wide">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[14px] font-bold text-white shadow-inner">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-white tracking-wide">{t.name}</p>
                    <p className="text-[13px] text-gray-400 mt-0.5 tracking-wider uppercase">{t.role}</p>
                  </div>
                </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

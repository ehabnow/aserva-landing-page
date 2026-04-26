"use client";

import { FadeUp } from "./motion";

const logos = [
  { name: "Shopify", icon: "🛍️" },
  { name: "WhatsApp", icon: "💬" },
  { name: "Slack", icon: "⚡" },
  { name: "WordPress", icon: "🌐" },
  { name: "WooCommerce", icon: "🛒" },
  { name: "Instagram", icon: "📸" },
];

const stats = [
  { value: "97%", label: "faster setup than alternatives" },
  { value: "70%", label: "less time writing responses" },
  { value: "15", label: "languages supported" },
  { value: "$49", label: "/mo — flat, no per-ticket fees" },
];

export function TrustBar() {
  return (
    <section className="py-16 border-y border-[#2a2a2a]/50">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Integration logos */}
        <FadeUp>
          <p className="text-center text-[13px] text-[#71717a] uppercase tracking-[0.08em] mb-6">
            Works with your stack
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 text-[#71717a] hover:text-[#a1a1aa] transition-colors"
              >
                <span className="text-lg">{logo.icon}</span>
                <span className="text-[14px]">{logo.name}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[32px] md:text-[36px] font-bold tracking-[-0.02em] bg-gradient-to-r from-white to-[#a1a1aa] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-[13px] text-[#71717a] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

"use client";

import { FadeUp } from "./motion";
import { motion } from "motion/react";

const rows = [
  { feature: "Setup time", aserva: "2 minutes", others: "2–3 hours", highlight: true },
  { feature: "AI executes real actions", aserva: "✓ built-in", others: "✗ answers only", highlight: true },
  { feature: "Auto-draft for agents", aserva: "✓ pre-loaded", others: "✗ agent writes", highlight: false },
  { feature: "Cross-conversation memory", aserva: "✓ full history", others: "✗ session only", highlight: false },
  { feature: "Vision / image analysis", aserva: "✓ GPT-4o vision", others: "✗ not available", highlight: true },
  { feature: "Product intelligence", aserva: "✓ automated", others: "✗ manual reports", highlight: false },
  { feature: "Languages", aserva: "15", others: "2–3", highlight: false },
  { feature: "Real-time inbox", aserva: "SSE streaming (3s)", others: "Polling (30s)", highlight: false },
  { feature: "GDPR compliance", aserva: "✓ automated", others: "manual", highlight: false },
  { feature: "Pricing", aserva: "$49/mo flat", others: "$300+ or per-ticket", highlight: true },
];

export function Comparison() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[900px] mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-[13px] text-[#6366f1] font-medium uppercase tracking-[0.08em] mb-4">
              Why Aserva
            </p>
            <h2 className="text-[32px] md:text-[44px] font-bold tracking-[-0.03em] leading-[1.1]">
              More depth.
              <br />
              <span className="text-[#a1a1aa]">Less cost. No gimmicks.</span>
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-[#2a2a2a] bg-[#050505]">
              <div className="text-[13px] text-[#71717a] font-medium">Feature</div>
              <div className="text-[13px] font-semibold text-[#6366f1] text-center">Aserva</div>
              <div className="text-[13px] text-[#71717a] font-medium text-center">Others</div>
            </div>
            {/* Rows */}
            {rows.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`grid grid-cols-3 gap-4 px-6 py-3.5 border-b border-[#1e1e1e] last:border-0 ${
                  row.highlight ? "bg-[#6366f1]/[0.03]" : ""
                }`}
              >
                <div className="text-[14px] text-[#e4e4e7]">{row.feature}</div>
                <div className="text-[14px] text-[#22c55e] font-medium text-center">
                  {row.aserva}
                </div>
                <div className="text-[14px] text-[#71717a] text-center">{row.others}</div>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

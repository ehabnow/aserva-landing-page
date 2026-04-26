"use client"

import { FadeIn } from "@/components/animations"

const integrations = [
  "Shopify",
  "WooCommerce",
  "WordPress",
  "Stripe",
  "Slack",
  "WhatsApp",
  "Instagram",
  "Facebook",
]

export function TrustBar() {
  return (
    <section className="relative z-10 py-10" id="trust-bar">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="glass-card rounded-[2rem] px-8 py-7">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">
                Trusted by modern commerce teams
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:justify-end">
                {integrations.map((name) => (
                  <span
                    key={name}
                    className="text-sm font-semibold text-slate-400 transition-colors hover:text-slate-600"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

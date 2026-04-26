"use client"

import { Check, ArrowRight } from "lucide-react"
import { FadeUp, StaggerContainer, StaggerItem, motion } from "@/components/animations"

const steps = [
  {
    number: "01",
    title: "Connect your store",
    description:
      "Link Shopify or WooCommerce in one click. Customer data, order history, and product catalog sync automatically.",
    details: [
      "One-click Shopify install",
      "WordPress plugin setup in 5 minutes",
      "Automatic data sync",
    ],
  },
  {
    number: "02",
    title: "Train the AI",
    description:
      "Import your knowledge base, FAQs, and brand voice. The AI indexes everything and learns your escalation rules.",
    details: [
      "Bulk import from any source",
      "Auto-generate from your site",
      "Custom tone and guardrails",
    ],
  },
  {
    number: "03",
    title: "Go live safely",
    description:
      "Launch in assist mode first. Watch the AI handle real tickets, review its work, then gradually increase automation.",
    details: [
      "Safe preview testing",
      "Confidence-based escalation",
      "Gradually expand automation",
    ],
  },
]

export function HowItWorks() {
  return (
    <section className="relative z-10 py-24 md:py-32" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Getting started
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-7 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 md:text-[3.5rem] md:leading-[1.08]">
              From zero to live support{" "}
              <span className="text-slate-400">in three steps.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Most teams connect their storefront, upload knowledge, and launch
              the widget in under 30 minutes.
            </p>
          </FadeUp>
        </div>

        {/* Steps */}
        <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-3" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div
                className="relative glass-card rounded-[2rem] p-8 h-full"
                id={`step-${step.number}`}
              >
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex items-center absolute right-[-1.5rem] top-10 z-20">
                      <ArrowRight className="h-5 w-5 text-slate-300" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                {/* Checklist */}
                <div className="mt-6 space-y-3">
                  {step.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-3 rounded-xl bg-slate-50/80 px-4 py-3 border border-slate-100"
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

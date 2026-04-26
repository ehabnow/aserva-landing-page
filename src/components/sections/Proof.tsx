"use client"

import { Clock3, Shield, Globe } from "lucide-react"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations"

const comparisonRows = [
  {
    label: "Time to first live launch",
    aserva: "< 30 min",
    legacy: "2–5 days",
    agency: "1–2 weeks",
  },
  {
    label: "Operator inbox for real takeover",
    aserva: "Native",
    legacy: "Basic",
    agency: "Custom build",
  },
  {
    label: "Grounded AI on your own knowledge",
    aserva: "Built in",
    legacy: "Extra setup",
    agency: "Manual tuning",
  },
  {
    label: "Shopify + WordPress readiness",
    aserva: "Native",
    legacy: "Partial",
    agency: "Services-led",
  },
  {
    label: "Trust, QA, and revenue visibility",
    aserva: "Unified",
    legacy: "Fragmented",
    agency: "Spreadsheet-led",
  },
]

const narrativeRows = [
  {
    icon: Clock3,
    title: "Faster time to value",
    description:
      "Launch the widget, connect data, and validate the AI without living in setup screens for days.",
  },
  {
    icon: Shield,
    title: "Trust built into the workflow",
    description:
      "Confidence, escalation, and quality measurement are part of the experience — not buried in docs.",
  },
  {
    icon: Globe,
    title: "Commerce-native coverage",
    description:
      "Built for WordPress, WooCommerce, and Shopify teams that need both setup speed and workflow depth.",
  },
]

export function Proof() {
  return (
    <section className="relative z-10 py-24 md:py-32" id="proof">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Narrative card (dark) */}
          <FadeUp>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-8 md:p-10 text-white shadow-[0_30px_100px_-50px_rgba(15,23,42,0.95)] h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Why buyers switch
              </p>
              <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.03em] md:text-3xl leading-tight">
                The product feels simple to start and safer to trust in daily
                operation.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Compared with older helpdesks or stitched-together agency
                solutions, Aserva is one coherent experience for launch speed,
                trust, and operator control.
              </p>

              <div className="mt-8 space-y-4">
                {narrativeRows.map((row) => {
                  const Icon = row.icon
                  return (
                    <div
                      key={row.title}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">
                          {row.title}
                        </p>
                        <p className="mt-1 text-sm leading-7 text-slate-300">
                          {row.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </FadeUp>

          {/* Comparison table */}
          <FadeUp delay={0.15}>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_-50px_rgba(15,23,42,0.4)] h-full">
              <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 px-6 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Competitive position
                </p>
                <h4 className="mt-3 text-lg font-bold tracking-[-0.02em] text-slate-950 md:text-xl">
                  A cleaner operating model than legacy helpdesks or
                  services-heavy setups.
                </h4>
              </div>

              {/* Table header */}
              <div className="grid grid-cols-[1.15fr_0.95fr_0.95fr_0.95fr] border-b border-slate-200 bg-slate-50/80 text-xs font-semibold uppercase tracking-wider">
                <div className="px-5 py-3.5 text-slate-950">Capability</div>
                <div className="px-5 py-3.5 text-center text-slate-950">
                  Aserva
                </div>
                <div className="px-5 py-3.5 text-center text-slate-500">
                  Legacy
                </div>
                <div className="px-5 py-3.5 text-center text-slate-500">
                  Services
                </div>
              </div>

              {/* Table rows */}
              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1.15fr_0.95fr_0.95fr_0.95fr] border-b border-slate-100 text-sm last:border-b-0"
                >
                  <div className="px-5 py-4 font-medium text-slate-900">
                    {row.label}
                  </div>
                  <div className="px-5 py-4 text-center">
                    <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                      {row.aserva}
                    </span>
                  </div>
                  <div className="px-5 py-4 text-center text-slate-500">
                    {row.legacy}
                  </div>
                  <div className="px-5 py-4 text-center text-slate-500">
                    {row.agency}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

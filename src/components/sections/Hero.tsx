"use client"

import { ArrowRight, Sparkles, Play } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { FadeUp, StaggerContainer, StaggerItem, motion } from "@/components/animations"
import { EngineeredBackground } from "./EngineeredBackground"
import { TerminalSimulation } from "./TerminalSimulation"

const metrics = [
  { label: "Resolution rate", value: "82%" },
  { label: "Teams live", value: "1,200+" },
  { label: "Avg setup time", value: "27 min" },
  { label: "Revenue recovered", value: "$12M+" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32" id="hero">
      <EngineeredBackground />
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-12rem] left-[10%] h-[36rem] w-[36rem] rounded-full bg-orange-200/30 blur-[140px]" />
        <div className="absolute top-[8rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-violet-200/25 blur-[140px]" />
        <div className="absolute bottom-[-6rem] left-[40%] h-[24rem] w-[24rem] rounded-full bg-indigo-200/20 blur-[120px]" />
      </div>

      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute left-[5%] top-[15%] h-24 w-24 animate-float">
          <div className="h-full w-full rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-[0_25px_70px_-40px_rgba(0,0,0,0.5)] backdrop-blur-md" />
        </div>
        <div className="absolute right-[8%] top-[22%] h-20 w-20 animate-float-slow">
          <div className="h-full w-full rounded-full border border-slate-600/30 bg-gradient-to-br from-white/5 to-transparent shadow-[0_20px_60px_-35px_rgba(0,0,0,0.5)] backdrop-blur-md" />
        </div>
        <div className="absolute left-[15%] bottom-[25%] h-16 w-16 animate-float-slow" style={{ animationDelay: "-5s" }}>
          <div className="h-full w-full rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent shadow-[0_18px_50px_-30px_rgba(249,115,22,0.1)] backdrop-blur-md rotate-12" />
        </div>
        <div className="absolute right-[18%] bottom-[18%] h-28 w-28 animate-float" style={{ animationDelay: "-8s" }}>
          <div className="h-full w-full rounded-[2rem] border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent shadow-[0_30px_80px_-45px_rgba(139,92,246,0.1)] backdrop-blur-md -rotate-6" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Built for fast-moving support teams
            </div>
          </FadeUp>

          {/* Headline */}
          <FadeUp delay={0.1}>
            <h1 className="mt-8 text-5xl font-extrabold leading-[1.04] tracking-tight text-white md:tracking-tighter md:text-7xl lg:text-[5.5rem]">
              AI that actually{" "}
              <span className="shimmer-text">resolves</span>{" "}
              tickets — not just answers them.
            </h1>
          </FadeUp>

          {/* Subheadline */}
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl md:leading-9">
              Autonomous commerce operations embedded in Shopify &amp; WordPress.
              Handle refunds, exchanges, and cart recovery natively inside your admin panel.
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/signup" size="lg" id="hero-cta-primary">
                Start guided setup
                <ArrowRight className="h-4 w-4 text-slate-950" />
              </Button>
              <Button href="#proof" variant="secondary" size="lg" id="hero-cta-secondary">
                <Play className="h-4 w-4 fill-white text-white" />
                See the product
              </Button>
            </div>
          </FadeUp>

          {/* Interactive Proof */}
          <FadeUp delay={0.35}>
            <TerminalSimulation />
          </FadeUp>

          {/* Stat pills */}
          <FadeUp delay={0.4}>
            <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="glass-card rounded-2xl px-5 py-5 border border-slate-800"
                  id={`metric-${metric.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {metric.label}
                  </p>
                  <p className="mt-2.5 text-2xl font-bold tracking-[-0.03em] text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

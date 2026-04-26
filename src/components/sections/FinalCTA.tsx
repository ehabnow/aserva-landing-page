"use client"

import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { FadeUp } from "@/components/animations"

export function FinalCTA() {
  return (
    <section className="relative z-10 px-6 py-24 md:py-32" id="final-cta">
      {/* Dark background with rounded corners */}
      <div className="absolute inset-x-6 inset-y-0 rounded-[2.5rem] bg-slate-950 overflow-hidden">
        {/* Ambient glow orbs */}
        <div className="pointer-events-none absolute right-10 top-10 h-52 w-52 rounded-full bg-orange-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-52 w-52 rounded-full bg-violet-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
        <FadeUp>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur">
            <Shield className="h-3.5 w-3.5" />
            Safe first launch
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="mt-8 text-4xl font-extrabold tracking-[-0.04em] md:text-6xl lg:text-7xl leading-[1.04]">
            Launch assist mode quickly, then earn the right to automate more.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Aserva is built to feel easy to try, safe to trust, and worth keeping
            once the team sees real value. No credit card required.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/signup"
              variant="secondary"
              size="lg"
              id="final-cta-primary"
            >
              Start guided setup
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="/pricing"
              variant="ghost"
              size="lg"
              className="text-slate-300 hover:text-white hover:bg-white/10"
              id="final-cta-secondary"
            >
              See pricing
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

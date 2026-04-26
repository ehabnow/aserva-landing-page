"use client"

import { Star } from "lucide-react"
import { FadeUp, StaggerContainer, StaggerItem, HoverLift } from "@/components/animations"

const testimonials = [
  {
    quote:
      "We went from 20% AI resolution to 74% in the first week. The knowledge crawler indexed our entire site in minutes.",
    author: "Sarah K.",
    role: "Head of Support",
    company: "WooCommerce store",
    metric: "74% AI resolution",
    metricColor: "bg-emerald-50 text-emerald-700",
  },
  {
    quote:
      "Switched from Gorgias. Aserva handles our WordPress + Shopify stores in one place. The commerce context cards are a game-changer for agents.",
    author: "Marcus T.",
    role: "E-commerce Director",
    company: "Multi-brand retailer",
    metric: "2 platforms, 1 inbox",
    metricColor: "bg-indigo-50 text-indigo-700",
  },
  {
    quote:
      "Setup took 8 minutes. The guided WordPress installer is genuinely the easiest integration I've ever done. We were live the same day.",
    author: "Priya M.",
    role: "Founder",
    company: "DTC beauty brand",
    metric: "8-minute setup",
    metricColor: "bg-orange-50 text-orange-700",
  },
]

export function Testimonials() {
  return (
    <section className="relative z-10 py-24 md:py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
              Social proof
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-7 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 md:text-[3.5rem] md:leading-[1.08]">
              Trusted by e-commerce teams{" "}
              <span className="text-slate-400">who measure what matters.</span>
            </h2>
          </FadeUp>
        </div>

        {/* Testimonial cards */}
        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" staggerDelay={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <HoverLift>
                <div
                  className="glass-card rounded-[2rem] p-8 h-full flex flex-col"
                  id={`testimonial-${t.author.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-1 text-base leading-7 text-slate-700 font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author + metric */}
                  <div className="mt-8 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-bold text-sm text-slate-950">
                        {t.author}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {t.role}, {t.company}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-bold whitespace-nowrap ${t.metricColor}`}
                    >
                      {t.metric}
                    </span>
                  </div>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

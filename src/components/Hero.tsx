"use client";

import { FadeUp, CountUp, TiltCard } from "./motion";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* ── Hero in-section glows ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Primary violet orb — behind dashboard mockup */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(109,40,217,0.20) 0%, rgba(109,40,217,0.05) 50%, transparent 75%)" }} />
        {/* Emerald right accent */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(16,185,129,0.11) 0%, transparent 65%)" }} />
        {/* Orange warm left */}
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.07) 0%, transparent 65%)" }} />
        {/* Soft headline glow — behind wordmark */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />
      </div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 pt-10">

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8 pointer-events-none"
        >
          <h1 className="text-[80px] sm:text-[120px] md:text-[180px] font-extrabold tracking-[-0.07em] leading-none text-white opacity-90 drop-shadow-[0_0_80px_rgba(139,92,246,0.3)]">
            aserva
          </h1>
        </motion.div>

        {/* Headline */}
        <FadeUp delay={0.2} className="text-center">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold tracking-[-0.03em] max-w-[800px] mx-auto text-white">
            <span className="text-gray-400">Your customers don&apos;t want tickets.</span> <br />
            They want answers. <span className="text-gradient">In 90 seconds.</span>
          </h2>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] text-slate-300 leading-relaxed max-w-[600px] mx-auto mt-6 tracking-wide px-2">
            aserva is the AI layer that lives inside your Shopify and WooCommerce operations. It resolves refunds, executes exchanges, and retains revenue — autonomously, around the clock, without a human in the loop.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a href="https://aserva.io/signup" className="neon-sweep-button px-10 py-4 w-full sm:w-auto text-center">
            <span className="relative z-10 text-[15px] font-bold text-white uppercase tracking-widest">Stop losing revenue</span>
          </a>
          <a href="#proof" className="px-10 py-4 w-full sm:w-auto text-center border border-white/10 glass-panel rounded-full text-[15px] font-bold text-white uppercase tracking-widest hover:bg-white/5 transition-colors">
            See it execute live
          </a>
        </FadeUp>

        {/* Hero video — desktop + mobile */}
        <FadeUp delay={0.55}>
          <div className="mt-14 mb-2 mx-auto max-w-[920px] aspect-video relative rounded-[1.5rem] border border-white/[0.1] overflow-hidden shadow-[0_0_100px_rgba(109,40,217,0.12),0_40px_100px_rgba(0,0,0,0.8)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover block"
            >
              <source src="/aserva-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </FadeUp>

        {/* Stats row */}
        <FadeUp delay={0.7} className="mt-8 max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: 82, suffix: "%", label: "Tickets resolved autonomously", color: "text-violet-400" },
            { value: 70, suffix: "%", label: "Agent time reclaimed",          color: "text-emerald-400" },
            { value: 27, suffix: "m", label: "Time to first resolution",      color: "text-orange-400" },
            { value: 24, suffix: "/7", label: "Always on, never queued",      color: "text-white" },
          ].map((stat) => (
            <TiltCard
              key={stat.label}
              className="p-6 text-center border border-white/[0.08] bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
            >
              <div className={`text-[32px] md:text-[40px] font-extrabold tracking-[-0.04em] ${stat.color} drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]`}>
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[12px] text-slate-400 font-semibold uppercase tracking-[0.15em] mt-2 leading-snug">
                {stat.label}
              </p>
            </TiltCard>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}

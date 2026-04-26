"use client"

import {
  Bot,
  MessageSquare,
  Plug,
  BarChart3,
  CheckCircle2,
  AlertTriangle
} from "lucide-react"
import { FadeUp, StaggerContainer, StaggerItem, HoverLift, motion } from "@/components/animations"

export function Features() {
  return (
    <section className="relative z-10 py-24 md:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
              Focused launch workflows
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-7 text-4xl font-extrabold tracking-tight text-white md:tracking-tighter md:text-[3.5rem] md:leading-[1.08]">
              Designed to get teams live fast{" "}
              <span className="text-slate-500">without enterprise drag.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Every surface is built to make the next action obvious — whether
              you&apos;re importing answers, testing safely, or proving ROI
              after launch.
            </p>
          </FadeUp>
        </div>

        {/* Bento Box Grid */}
        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
          
          {/* Card 1: Inbox (Span 2) */}
          <StaggerItem className="md:col-span-2">
            <HoverLift className="h-full">
              <div className="glass-card rounded-[2.5rem] p-8 md:p-10 h-full flex flex-col justify-between border border-slate-800 bg-[#0a0f1c]/80 overflow-hidden relative group">
                <div className="relative z-10 max-w-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] mb-6">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Live operator inbox
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-400">
                    Step in when needed with a real-time inbox, keyboard shortcuts, and complete conversation context on every handoff.
                  </p>
                </div>
                
                {/* Visual Mockup inside card */}
                <div className="mt-10 rounded-xl border border-slate-800 bg-slate-950/80 p-4 shadow-2xl relative translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                   <div className="flex gap-4 items-end">
                      <div className="h-8 w-8 rounded-full bg-slate-800 shrink-0" />
                      <div className="bg-slate-800 text-slate-300 text-xs p-3 rounded-2xl rounded-bl-sm">
                         I need help exchanging this sweater.
                      </div>
                   </div>
                   <div className="flex gap-4 items-end justify-end mt-4">
                      <div className="bg-indigo-600 text-white text-xs p-3 rounded-2xl rounded-br-sm shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                         No problem! Looking at order #4492, you ordered the Medium. What size do you need?
                      </div>
                      <div className="text-[9px] font-bold tracking-wider text-indigo-400 mb-1">AGENT</div>
                   </div>
                </div>
              </div>
            </HoverLift>
          </StaggerItem>

          {/* Card 2: Grounded AI (Span 1) */}
          <StaggerItem>
            <HoverLift className="h-full">
              <div className="glass-card rounded-[2.5rem] p-8 md:p-10 h-full flex flex-col justify-between border border-slate-800 bg-[#0a0f1c]/80 overflow-hidden relative group">
                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] mb-6">
                    <Bot className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Grounded AI
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-400">
                    Confidence-aware escalation. No risky auto-response guesses.
                  </p>
                </div>

                <div className="mt-10 flex flex-col gap-3 group-hover:scale-105 transition-transform duration-500 origin-bottom">
                   <div className="flex justify-between items-center bg-slate-900 border border-emerald-500/20 p-3 rounded-xl">
                      <span className="text-xs text-slate-400">Confidence Match</span>
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> 98%</span>
                   </div>
                   <div className="flex justify-between items-center bg-slate-900 border border-rose-500/20 p-3 rounded-xl">
                      <span className="text-xs text-slate-400">Ambiguity Check</span>
                      <span className="text-xs font-bold text-rose-400 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> ESCALATE</span>
                   </div>
                </div>
              </div>
            </HoverLift>
          </StaggerItem>

          {/* Card 3: Setup (Span 1) */}
          <StaggerItem>
            <HoverLift className="h-full">
              <div className="glass-card rounded-[2.5rem] p-8 md:p-10 h-full flex flex-col justify-between border border-slate-800 bg-[#0a0f1c]/80 overflow-hidden relative group">
                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] mb-6">
                    <Plug className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Fast setup
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-400">
                    WordPress and Shopify-first onboarding in under 30 minutes.
                  </p>
                </div>
                
                <div className="mt-10 flex justify-center items-center gap-4 group-hover:rotate-3 transition-transform duration-500">
                    <div className="h-16 w-16 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                       <span className="font-bold text-xl text-white">S</span>
                    </div>
                    <div className="h-[2px] w-8 bg-slate-700" />
                    <div className="h-16 w-16 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                       <span className="font-bold text-xl text-white">W</span>
                    </div>
                </div>
              </div>
            </HoverLift>
          </StaggerItem>

          {/* Card 4: ROI Analytics (Span 2) */}
          <StaggerItem className="md:col-span-2">
            <HoverLift className="h-full">
              <div className="glass-card rounded-[2.5rem] p-8 md:p-10 h-full flex flex-col md:flex-row items-center gap-8 border border-slate-800 bg-[#0a0f1c]/80 overflow-hidden relative group">
                <div className="relative z-10 flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] mb-6">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Clear ROI visibility
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-400">
                    See activation progress, recovered revenue, and which repetitive intents the AI is handling autonomously.
                  </p>
                </div>
                
                <div className="flex-1 w-full bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-inner group-hover:scale-105 transition-transform duration-500">
                    <div className="flex justify-between mb-4">
                       <div className="text-xs text-slate-500">Recovered Revenue</div>
                       <div className="text-xs text-emerald-400 font-mono">+$12,450</div>
                    </div>
                    {/* Mock Graph Bars */}
                    <div className="flex items-end gap-2 h-24">
                        {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                           <motion.div 
                              key={i} 
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              transition={{ duration: 0.8, delay: i * 0.1 }}
                              className="flex-1 bg-gradient-to-t from-emerald-900/50 to-emerald-400 rounded-t-sm"
                           />
                        ))}
                    </div>
                </div>
              </div>
            </HoverLift>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  )
}

"use client";

import { FadeUp, CountUp, TiltCard } from "./motion";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";

// ─── Mobile resolve feed (single-column, fits 375px+) ────────────────────────
function MobileResolveFeed() {
  const [items, setItems] = useState([
    CONVERSATIONS[3], CONVERSATIONS[2], CONVERSATIONS[1],
  ]);
  const [resolving, setResolving] = useState<string | null>(null);
  const idxRef = useRef(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const cycle = () => {
      if (!mountedRef.current) return;
      const next = CONVERSATIONS[idxRef.current % CONVERSATIONS.length];
      idxRef.current += 1;
      setResolving(next.name);
      setTimeout(() => {
        if (!mountedRef.current) return;
        setResolving(null);
        setItems((prev) => [next, ...prev].slice(0, 3));
      }, 1200);
    };
    const t = setInterval(cycle, 3000);
    return () => { mountedRef.current = false; clearInterval(t); };
  }, []);

  return (
    <div className="relative rounded-2xl border border-white/[0.1] bg-[#0d0d10] overflow-hidden shadow-[0_0_60px_rgba(109,40,217,0.12)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#111115] flex items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/aserva-icon.png" alt="aserva" className="w-full h-full object-contain invert" />
          </div>
          <span className="text-[13px] font-bold text-white">aserva</span>
          <span className="text-[10px] text-violet-400 bg-violet-500/15 border border-violet-500/30 rounded-full px-1.5 py-0.5 font-bold">Inbox</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-emerald-400 font-bold">AI Active</span>
        </div>
      </div>

      {/* Resolve feed */}
      <div className="px-4 py-3 space-y-2">
        <AnimatePresence initial={false}>
          {resolving && (
            <motion.div
              key="proc"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-gray-700 border-t-violet-400 rounded-full shrink-0"
              />
              <span className="text-[11px] text-gray-400">Resolving <span className="font-bold text-white">{resolving}</span> · AI working…</span>
            </motion.div>
          )}
        </AnimatePresence>
        {items.map((c) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-950/10 px-3 py-2"
          >
            <span className="text-emerald-400 text-[13px] font-bold shrink-0">✓</span>
            <span className="text-[12px] font-bold text-white flex-1">{c.name}</span>
            <span className="text-[9px] font-bold text-gray-500 border border-gray-700/50 rounded px-1.5 py-0.5">{c.tag}</span>
            <span className="text-[10px] text-emerald-400 font-bold shrink-0">AI resolved</span>
          </motion.div>
        ))}
      </div>

      {/* Meter */}
      <div className="px-4 pb-4">
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
          <div className="flex justify-between mb-1.5">
            <span className="text-[10px] text-gray-500">AI Resolutions today</span>
            <span className="text-[10px] font-bold text-emerald-400">247 / 500</span>
          </div>
          <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <div className="h-full w-[49%] bg-gradient-to-r from-violet-500 to-emerald-400 rounded-full" />
          </div>
        </div>
      </div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </div>
  );
}

// ─── Real aserva UI Mockup ────────────────────────────────────────────────────

// Based on the actual dashboard: sidebar nav + inbox list + conversation detail

const CONVERSATIONS = [
  { id: 1, name: "Emma R.",    subject: "Package arrived damaged — need refund", tag: "REFUND",   priority: true,  time: "just now",  avatar: "E", status: "ai" },
  { id: 2, name: "James M.",   subject: "Wrong size delivered, need exchange",   tag: "EXCHANGE", priority: true,  time: "1 min ago", avatar: "J", status: "ai" },
  { id: 3, name: "Layla K.",   subject: "Order hasn't shipped after 10 days",    tag: "SHIPPING", priority: false, time: "3 min ago", avatar: "L", status: "open" },
  { id: 4, name: "Sven T.",    subject: "Charged twice for the same item",       tag: "BILLING",  priority: true,  time: "5 min ago", avatar: "S", status: "ai" },
  { id: 5, name: "Maya P.",    subject: "Item not as described, want to return", tag: "RETURN",   priority: false, time: "8 min ago", avatar: "M", status: "open" },
];

const AI_ACTIONS = [
  { action: "Refund processed",     detail: "$94.00 returned to original card",        icon: "✓", color: "text-emerald-400" },
  { action: "Exchange created",     detail: "Medium dispatched · Return label emailed", icon: "✓", color: "text-violet-400"  },
  { action: "Shipment investigated",detail: "Carrier notified · ETA updated to Tue",   icon: "✓", color: "text-emerald-400" },
  { action: "Duplicate voided",     detail: "Second charge reversed · Card credited",  icon: "✓", color: "text-violet-400"  },
];

const NAV_ITEMS = [
  { icon: "⊞", label: "Dashboard" },
  { icon: "⚡", label: "Launch" },
  { icon: "✉", label: "Inbox", active: true },
  { icon: "📖", label: "Knowledge" },
  { icon: "◎", label: "Supervision" },
  { icon: "⚙", label: "Automations" },
  { icon: "📊", label: "Analytics" },
];

function DashboardMockup() {
  const [activeConv, setActiveConv] = useState(0);
  const [resolvedIds, setResolvedIds] = useState<number[]>([]);
  const [processingId, setProcessingId] = useState<number | null>(null);
  const [aiLog, setAiLog] = useState<typeof AI_ACTIONS>([]);
  const [totalResolved, setTotalResolved] = useState(247);
  const tickRef = useRef(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const cycle = () => {
      if (!mountedRef.current) return;
      const convIdx = tickRef.current % CONVERSATIONS.length;
      const conv = CONVERSATIONS[convIdx];
      const actionIdx = tickRef.current % AI_ACTIONS.length;

      // 1. Highlight active conversation
      setActiveConv(convIdx);
      setProcessingId(conv.id);

      // 2. After 1.3s: mark resolved, add to AI log
      setTimeout(() => {
        if (!mountedRef.current) return;
        setProcessingId(null);
        setResolvedIds((prev) => [...prev, conv.id]);
        setAiLog((prev) => [AI_ACTIONS[actionIdx], ...prev].slice(0, 4));
        setTotalResolved((n) => n + 1);
        tickRef.current += 1;

        // 3. After another 1.5s: unmark resolved (conversation "disappears" from queue)
        setTimeout(() => {
          if (!mountedRef.current) return;
          setResolvedIds((prev) => prev.filter((id) => id !== conv.id));
        }, 1500);
      }, 1300);
    };

    const t = setInterval(cycle, 3500);
    return () => {
      mountedRef.current = false;
      clearInterval(t);
    };
  }, []);

  const activeConvData = CONVERSATIONS[activeConv];

  return (
    <div className="relative w-full max-w-[920px] mx-auto mt-14 mb-2">
      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />

      {/* Dashboard frame */}
      <div className="relative rounded-[1.5rem] border border-white/[0.1] bg-[#0d0d10] shadow-[0_0_100px_rgba(109,40,217,0.12),0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex h-[460px]">

        {/* ── Sidebar ── */}
        <div className="w-[200px] shrink-0 border-r border-white/[0.06] bg-[#0a0a0d] flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-2.5 px-4 py-4 border-b border-white/[0.05]">
            <div className="w-7 h-7 rounded-lg bg-[#111115] flex items-center justify-center overflow-hidden shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/aserva-icon.png" alt="aserva" className="w-full h-full object-contain invert" />
            </div>
            <span className="text-[15px] font-bold text-white tracking-tight">aserva</span>
          </div>

          {/* Nav items */}
          <nav className="flex-1 px-2 py-3 space-y-0.5">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] font-medium transition-colors ${
                  item.active
                    ? "bg-violet-600/20 text-violet-300 border border-violet-500/20"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                <span className="text-[13px] shrink-0">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </nav>

          {/* AI Resolutions meter */}
          <div className="px-3 pb-4">
            <div className="bg-[#111115] border border-white/[0.06] rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-gray-500 font-medium">AI Resolutions</span>
                <motion.span
                  key={totalResolved}
                  initial={{ opacity: 0.6, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] font-bold text-emerald-400 tabular-nums"
                >
                  {totalResolved} / 500
                </motion.span>
              </div>
              <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${(totalResolved / 500) * 100}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-violet-500 to-emerald-400 rounded-full"
                />
              </div>
              <p className="text-[9px] text-gray-600 mt-1.5">Resets in 12 days</p>
            </div>
          </div>
        </div>

        {/* ── Conversation List ── */}
        <div className="w-[260px] shrink-0 border-r border-white/[0.06] flex flex-col">
          {/* Header */}
          <div className="px-4 py-3 border-b border-white/[0.05]">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-bold text-white">Support Inbox</span>
                <span className="text-[10px] font-bold text-violet-400 bg-violet-500/15 border border-violet-500/30 rounded-full px-1.5 py-0.5 tabular-nums">
                  {CONVERSATIONS.length - resolvedIds.length} open
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] text-emerald-400 font-bold">LIVE</span>
              </div>
            </div>
            {/* Tabs */}
            <div className="flex gap-1">
              {["Priorities", "All", "Escalated"].map((tab) => (
                <span
                  key={tab}
                  className={`text-[9px] font-bold px-2 py-1 rounded-md ${
                    tab === "Priorities"
                      ? "bg-violet-600/20 text-violet-300 border border-violet-500/20"
                      : "text-gray-600"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>

          {/* Conversation rows */}
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#0d0d10] to-transparent z-10 pointer-events-none" />
            <div className="flex flex-col divide-y divide-white/[0.04]">
              {CONVERSATIONS.map((conv, i) => {
                const isActive = i === activeConv;
                const isResolved = resolvedIds.includes(conv.id);
                const isProcessing = processingId === conv.id;

                return (
                  <motion.div
                    key={conv.id}
                    animate={{
                      opacity: isResolved ? 0.3 : 1,
                      backgroundColor: isActive ? "rgba(109,40,217,0.08)" : "transparent",
                    }}
                    transition={{ duration: 0.4 }}
                    className="px-3 py-2.5 cursor-pointer hover:bg-white/[0.02] border-l-2 transition-colors"
                    style={{ borderLeftColor: isActive ? "rgb(139,92,246)" : "transparent" }}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${conv.priority ? "bg-violet-800/60 text-violet-200" : "bg-gray-800/60 text-gray-400"}`}>
                        {conv.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[11px] font-bold text-white truncate">{conv.name}</span>
                          <span className="text-[9px] text-gray-600 shrink-0 ml-1">{conv.time}</span>
                        </div>
                        <p className="text-[10px] text-gray-500 truncate leading-snug">{conv.subject}</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-[8px] font-bold text-gray-600 border border-gray-700/50 rounded px-1 py-0.5">{conv.tag}</span>
                          {isProcessing && (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-[8px] font-bold text-violet-400 animate-pulse"
                            >
                              AI resolving…
                            </motion.span>
                          )}
                          {isResolved && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-[8px] font-bold text-emerald-400"
                            >
                              ✓ Resolved
                            </motion.span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Conversation Detail / AI Action Log ── */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-5 py-3 border-b border-white/[0.05] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-violet-800/50 flex items-center justify-center text-[12px] font-bold text-violet-200">
                {activeConvData.avatar}
              </div>
              <div>
                <p className="text-[13px] font-bold text-white">{activeConvData.name}</p>
                <p className="text-[10px] text-gray-500 truncate max-w-[240px]">{activeConvData.subject}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.span
                key={processingId}
                animate={{ opacity: processingId ? [1, 0.5, 1] : 1 }}
                transition={{ duration: 0.8, repeat: processingId ? Infinity : 0 }}
                className={`text-[9px] font-bold px-2 py-1 rounded-full border ${processingId ? "text-violet-400 border-violet-500/30 bg-violet-500/10" : "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"}`}
              >
                {processingId ? "AI Working…" : "AI Resolved"}
              </motion.span>
            </div>
          </div>

          {/* AI action feed — fixed height */}
          <div className="flex-1 px-5 py-4 overflow-hidden relative">
            <p className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-3">AI Action Log</p>
            <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#0d0d10] to-transparent z-10 pointer-events-none" />
            <div className="space-y-2">
              {/* Processing indicator */}
              <AnimatePresence mode="wait">
                {processingId && (
                  <motion.div
                    key="processing"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-gray-700 border-t-violet-400 rounded-full shrink-0"
                    />
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">Reading order context for {activeConvData.name}…</p>
                      <p className="text-[9px] text-gray-600">Checking order history · policy match · executing action</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Resolved actions */}
              <AnimatePresence initial={false}>
                {aiLog.map((entry, i) => (
                  <motion.div
                    key={`${entry.action}-${i}`}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-950/10 px-3 py-2.5"
                  >
                    <span className={`text-[13px] font-bold shrink-0 mt-0.5 ${entry.color}`}>{entry.icon}</span>
                    <div className="min-w-0">
                      <p className={`text-[11px] font-bold ${entry.color}`}>{entry.action}</p>
                      <p className="text-[10px] text-gray-500 truncate">{entry.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {aiLog.length === 0 && !processingId && (
                <p className="text-[11px] text-gray-700 italic">AI standing by…</p>
              )}
            </div>
          </div>

          {/* Bottom: reply area stub */}
          <div className="shrink-0 px-5 py-3 border-t border-white/[0.05]">
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 py-2 flex items-center justify-between">
              <span className="text-[11px] text-gray-600 italic">AI draft ready — review or send</span>
              <div className="flex items-center gap-2">
                <div className="text-[10px] font-bold text-gray-600 border border-gray-700/50 rounded-md px-2 py-0.5">Review</div>
                <div className="text-[10px] font-bold text-violet-400 border border-violet-500/30 bg-violet-500/10 rounded-md px-2 py-0.5">Send ↗</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
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
          <div className="mt-14 mb-2 mx-auto max-w-[920px] relative rounded-[1.5rem] border border-white/[0.1] overflow-hidden shadow-[0_0_100px_rgba(109,40,217,0.12),0_40px_100px_rgba(0,0,0,0.8)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto block"
              poster="/aserva-logo.png"
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

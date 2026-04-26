"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { FadeUp, CountUp } from "./motion";
import { motion, AnimatePresence } from "motion/react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Ticket {
  id: number;
  name: string;
  avatar: string;
  message: string;
  tag: string;
  tagColor: string;
  waitMins: number;
  urgent: boolean;
}

// ─── Data pools ───────────────────────────────────────────────────────────────
const TICKET_POOL: Omit<Ticket, "id" | "waitMins">[] = [
  { name: "Emma R.",  avatar: "E", message: "Where is my order?! 12 days and no update at all", tag: "SHIPPING", tagColor: "text-orange-400 border-orange-500/30 bg-orange-950/20", urgent: true  },
  { name: "James M.", avatar: "J", message: "Wrong size delivered. Need medium not large ASAP",  tag: "EXCHANGE", tagColor: "text-yellow-400 border-yellow-500/30 bg-yellow-950/20", urgent: false },
  { name: "Layla K.", avatar: "L", message: "Package arrived completely crushed. Refund now",   tag: "REFUND",   tagColor: "text-red-400 border-red-500/30 bg-red-950/20",       urgent: true  },
  { name: "Sven T.",  avatar: "S", message: "Charged twice for the same item — please check",    tag: "BILLING",  tagColor: "text-red-400 border-red-500/30 bg-red-950/20",       urgent: true  },
  { name: "Maya P.",  avatar: "M", message: "Item not as described in photos. How do I return?", tag: "RETURN",   tagColor: "text-yellow-400 border-yellow-500/30 bg-yellow-950/20", urgent: false },
  { name: "Omar D.",  avatar: "O", message: "My discount code didn't apply — order placed",       tag: "DISCOUNT", tagColor: "text-orange-400 border-orange-500/30 bg-orange-950/20", urgent: false },
  { name: "Chen W.",  avatar: "C", message: "Refund promised 2 weeks ago still not received",    tag: "REFUND",   tagColor: "text-red-400 border-red-500/30 bg-red-950/20",       urgent: true  },
  { name: "Anya V.",  avatar: "A", message: "Need to cancel my order before it ships today",     tag: "CANCEL",   tagColor: "text-yellow-400 border-yellow-500/30 bg-yellow-950/20", urgent: false },
  { name: "Raj S.",   avatar: "R", message: "Tracking says delivered but nothing at my door",    tag: "SHIPPING", tagColor: "text-orange-400 border-orange-500/30 bg-orange-950/20", urgent: true  },
];

// ─── Live backlog (Legacy tab) ─────────────────────────────────────────────────
function LiveInbox() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [totalCount, setTotalCount] = useState(7);
  const [waitingMinutes, setWaitingMinutes] = useState<Record<number, number>>({});
  const counterRef = useRef(0);
  const poolIndex = useRef(0);
  const mountedRef = useRef(true);

  const addTicket = useCallback(() => {
    if (!mountedRef.current) return;
    const pool = TICKET_POOL[poolIndex.current % TICKET_POOL.length];
    poolIndex.current += 1;
    const id = ++counterRef.current;
    setTickets((prev) => [{ ...pool, id, waitMins: 1 }, ...prev].slice(0, 4));
    setTotalCount((c) => c + 1);
    setWaitingMinutes((prev) => ({ ...prev, [id]: 1 }));
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    // Seed with 4 existing backlog items
    const seeds = [0, 1, 2, 3].map((i) => {
      const pool = TICKET_POOL[(i + 4) % TICKET_POOL.length];
      const id = ++counterRef.current;
      setWaitingMinutes((prev) => ({ ...prev, [id]: (i + 1) * 18 }));
      return { ...pool, id, waitMins: (i + 1) * 18 };
    });
    setTickets(seeds);

    const addTimer = setInterval(addTicket, 3200);
    const tickTimer = setInterval(() => {
      if (!mountedRef.current) return;
      setWaitingMinutes((prev) => {
        const next: Record<number, number> = {};
        for (const k in prev) next[k] = prev[k] + 1;
        return next;
      });
    }, 5000);

    return () => {
      mountedRef.current = false;
      clearInterval(addTimer);
      clearInterval(tickTimer);
    };
  }, [addTicket]);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 shrink-0">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Support Queue</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <motion.span
            key={totalCount}
            initial={{ scale: 1.4, color: "#f87171" }}
            animate={{ scale: 1, color: "#f87171" }}
            transition={{ duration: 0.3 }}
            className="text-[13px] font-extrabold text-red-400 tabular-nums"
          >
            {totalCount} unresolved
          </motion.span>
        </div>
      </div>

      {/* Fixed-height ticket list — clips overflow, no resize */}
      <div className="flex-1 overflow-hidden relative">
        {/* Fade mask top */}
        <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-[#070707] to-transparent z-10 pointer-events-none" />
        {/* Fade mask bottom */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#070707] to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-2 h-full">
          <AnimatePresence initial={false}>
            {tickets.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: -28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-xl border ${t.urgent ? "border-red-600/40 bg-red-950/20" : "border-gray-700/30 bg-white/[0.02]"} px-3 py-2.5 flex items-start gap-3 shrink-0`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 ${t.urgent ? "bg-red-800/50 text-red-300" : "bg-gray-800/60 text-gray-300"}`}>
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[13px] font-bold text-white">{t.name}</span>
                    <span className={`text-[8px] font-bold uppercase tracking-wider border rounded px-1.5 py-0.5 ${t.tagColor}`}>{t.tag}</span>
                    {t.urgent && <span className="text-[8px] font-bold text-red-400 animate-pulse">● URGENT</span>}
                  </div>
                  <p className="text-[11px] text-gray-400 leading-snug truncate">{t.message}</p>
                </div>
                <div className="shrink-0 text-right">
                  <span className={`text-[11px] font-bold tabular-nums ${(waitingMinutes[t.id] ?? t.waitMins) > 30 ? "text-red-400" : "text-gray-500"}`}>
                    {waitingMinutes[t.id] ?? t.waitMins}m
                  </span>
                  <p className="text-[8px] text-gray-600 uppercase">waiting</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer — agent eternally typing */}
      <div className="shrink-0 pt-2.5 border-t border-white/[0.05] flex items-center gap-2">
        <div className="flex gap-1 items-center">
          {[0, 150, 300].map((d) => (
            <span key={d} className="w-1.5 h-1.5 rounded-full bg-gray-600 animate-bounce" style={{ animationDelay: `${d}ms` }} />
          ))}
        </div>
        <span className="text-[10px] text-gray-600 italic">Agent is typing a response to ticket #1...</span>
      </div>
    </div>
  );
}

// ─── aserva live resolve feed ─────────────────────────────────────────────────
const legacyStats = [
  { value: "72h",   label: "Avg. first response",  sub: "while customer waits" },
  { value: "4×",    label: "More refunds",          sub: "from slow resolution" },
  { value: "$3.2k", label: "Monthly agent cost",    sub: "per 3 FTE agents" },
  { value: "0",     label: "Actions auto-executed", sub: "everything is manual" },
];

// ─── Main ─────────────────────────────────────────────────────────────────────
export function WhySwitch() {
  const [activeTab, setActiveTab] = useState<"aserva" | "legacy">("aserva");

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.05] text-white">
              Two types of support. <br />One outcome is obvious.
            </h2>
            <p className="text-[15px] md:text-[18px] text-gray-400 mt-4 max-w-[560px] mx-auto leading-relaxed">
              Legacy helpdesks cost more per ticket as you grow. aserva costs the same whether you handle 500 tickets or 50,000.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2} className="max-w-[1000px] mx-auto">
          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="flex p-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <button
                onClick={() => setActiveTab("legacy")}
                className={`px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-[12px] sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "legacy" ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Legacy Helpdesk
              </button>
              <button
                onClick={() => setActiveTab("aserva")}
                className={`px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-[12px] sm:text-[14px] font-bold lowercase tracking-wider transition-all duration-300 ${
                  activeTab === "aserva" ? "bg-violet-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.3)]" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                aserva
              </button>
            </div>
          </div>

          {/* Visualizer card — FIXED HEIGHT, never resizes */}
          <div className="relative glass-panel rounded-[2.5rem] overflow-hidden">
            {/* Glows */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${activeTab === "aserva" ? "opacity-100" : "opacity-0"}`}>
              <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-violet-600/10 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[150%] bg-emerald-600/10 blur-[120px] rounded-full" />
            </div>
            <div className={`absolute inset-0 transition-opacity duration-700 ${activeTab === "legacy" ? "opacity-100" : "opacity-0"}`}>
              <div className="absolute top-[-30%] left-[-10%] w-[60%] h-[120%] bg-red-900/10 blur-[120px] rounded-full" />
            </div>

            {/* Content grid — fixed height */}
            <div className="relative z-10 p-6 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 md:h-[440px]">

              {/* LEFT */}
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-[22px] font-bold text-white mb-7 tracking-tight">
                  {activeTab === "aserva" ? "Deep Automation" : "Manual Operations"}
                </h3>
                <AnimatePresence mode="wait">
                  {activeTab === "legacy" ? (
                    <motion.div
                      key="legacy-stats"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.35 }}
                      className="grid grid-cols-2 gap-3"
                    >
                      {legacyStats.map((s, i) => (
                        <motion.div
                          key={s.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.07, duration: 0.35 }}
                          className="border border-red-500/20 bg-red-950/10 rounded-2xl p-4 flex flex-col gap-1"
                        >
                          <span className="text-[28px] font-extrabold text-red-400 tracking-tighter leading-none">{s.value}</span>
                          <span className="text-[13px] font-bold text-white leading-tight">{s.label}</span>
                          <span className="text-[10px] text-gray-500 uppercase tracking-wider">{s.sub}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="aserva-stats"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-7"
                    >
                      <div>
                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Setup Time</p>
                        <div className="text-[32px] font-extrabold text-white tracking-[-0.03em] flex items-center gap-3">
                          <span className="text-emerald-400">&lt; <CountUp end={30} duration={1} /></span> Mins
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">What it actually does</p>
                        <p className="text-[18px] font-semibold text-gray-300 tracking-tight leading-snug">
                          Executes refunds, exchanges, and order actions via the Shopify and WooCommerce API. Autonomously.
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Revenue impact</p>
                        <p className="text-[18px] font-semibold text-gray-300 tracking-tight leading-snug">
                          Flat monthly pricing. Zero per-ticket fees. Scales with you, not against you.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* RIGHT — fixed height panel, clips its own overflow */}
              <div className="hidden md:block relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#070707] p-4 h-full">
                <AnimatePresence mode="wait">
                  {activeTab === "legacy" ? (
                    <motion.div
                      key="inbox"
                      className="absolute inset-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <LiveInbox />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="hero-video"
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                      >
                        <source src="/aserva-hero.mp4" type="video/mp4" />
                      </video>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

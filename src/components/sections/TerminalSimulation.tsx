"use client"

import { motion } from "motion/react"
import { CheckCircle2, RotateCw } from "lucide-react"

export function TerminalSimulation() {
  return (
    <div className="mx-auto w-full max-w-3xl mt-16 rounded-[2rem] border border-slate-800 bg-[#0a0a0a] shadow-2xl overflow-hidden glass-card">
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950/50">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-slate-700" />
          <div className="h-3 w-3 rounded-full bg-slate-700" />
          <div className="h-3 w-3 rounded-full bg-slate-700" />
        </div>
        <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
          <RotateCw className="h-3 w-3 animate-spin text-indigo-400" />
          <span>aserva_agent processing ticket #8942</span>
        </div>
      </div>
      <div className="p-6 md:p-8 space-y-6 font-mono text-sm">
        {/* Step 1: Ingestion */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-start gap-4"
        >
          <div className="mt-1 text-slate-600">&gt;</div>
          <div>
            <div className="text-slate-300 font-medium">Customer: "My order #12004 hasn't arrived. I want a refund."</div>
            <div className="text-slate-500 text-xs mt-1">Received via Shopify Webhook</div>
          </div>
        </motion.div>

        {/* Step 2: Reasoning */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div className="flex gap-3 pl-6 border-l-2 border-slate-800 ml-1.5 py-2">
            <div className="text-slate-500">
              <span className="text-indigo-400">agent_reasoning</span>: Order #12004 state is "delayed_in_transit". Delivery guaranteed by yesterday. Policy allows immediate refund to original payment method.
            </div>
          </div>
        </motion.div>

        {/* Step 3: Action Execution */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
          className="flex items-start gap-4"
        >
          <div className="mt-1 text-slate-600">&gt;</div>
          <div>
            <div className="text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Executed: Shopify GraphQL mutation refundCreate</span>
            </div>
            <div className="text-slate-500 text-xs mt-1">Amount: $124.00 to Visa ending in 4242</div>
          </div>
        </motion.div>
        
        {/* Step 4: Resolution */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 4.5 }}
           className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 p-4 rounded-xl mt-4 text-xs font-sans flex justify-between items-center"
        >
           <span className="font-semibold uppercase tracking-wider">Ticket Resolved Autonomously</span>
           <span className="text-emerald-300/60 font-mono">2.4s</span>
        </motion.div>
      </div>
    </div>
  )
}

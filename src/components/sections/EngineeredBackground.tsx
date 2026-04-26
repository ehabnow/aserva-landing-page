"use client"

import { motion } from "motion/react"

export function EngineeredBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
      {/* Blueprint faint grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"
      />

      {/* Outer slow-spinning dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] h-[50rem] w-[50rem] rounded-full border border-dashed border-slate-300/60"
      />
      
      {/* Inner counter-spinning solid ring with nodes */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
        className="absolute top-[5%] left-[5%] h-[30rem] w-[30rem] rounded-full border border-slate-300/40"
      >
        <div className="absolute top-0 left-1/2 h-6 w-1 -translate-x-1/2 bg-orange-400/60" />
        <div className="absolute bottom-0 left-1/2 h-6 w-1 -translate-x-1/2 bg-indigo-400/60" />
        <div className="absolute left-0 top-1/2 h-1 w-6 -translate-y-1/2 bg-violet-400/60" />
        <div className="absolute right-0 top-1/2 h-1 w-6 -translate-y-1/2 bg-sky-400/60" />
      </motion.div>

      {/* Floating data nodes tracking across the screen */}
      <motion.div
        animate={{ x: [0, 200, 0], y: [0, -50, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[25%] flex items-center gap-2"
      >
        <div className="h-2 w-2 rounded-full bg-slate-400" />
        <div className="h-[1px] w-12 bg-slate-400/40" />
        <div className="text-[9px] font-mono tracking-widest text-slate-500">SYNC_OK</div>
      </motion.div>

      {/* Targeting / crosshair element */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[20%] top-[30%] h-12 w-12"
      >
        <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-slate-300/80" />
        <div className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-slate-300/80" />
        <div className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300/60" />
      </motion.div>

      {/* Orbiting element mimicking AI processing */}
      <motion.div
        className="absolute top-1/2 right-1/4 h-24 w-24"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
      </motion.div>

      {/* Scanning laser line moving vertically over the whole background */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
      />
    </div>
  )
}

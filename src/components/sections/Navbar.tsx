"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { motion } from "motion/react"

const navLinks = [
  { label: "Platform", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Proof", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(15,23,42,0.04)]"
          : "bg-transparent"
      }`}
      id="navbar"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group" id="nav-logo">
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <span className="text-white font-bold text-lg tracking-tight">A</span>
            <div className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-orange-500 ring-2 ring-white" />
          </div>
          <div>
            <p className="text-base font-bold tracking-tight text-slate-950">
              Aserva
            </p>
            <p className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">
              AI Customer Service
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
              id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/login"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
            id="nav-signin"
          >
            Sign in
          </a>
          <Button href="/signup" size="default" id="nav-cta">
            Start free trial
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-slate-700 md:hidden"
          aria-label="Toggle navigation menu"
          id="nav-menu-toggle"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-slate-100 bg-white/95 backdrop-blur-xl px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-slate-950 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-slate-600 hover:text-slate-950 py-2"
            >
              Sign in
            </a>
            <Button href="/signup" className="w-full mt-2" id="mobile-cta">
              Start free trial
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

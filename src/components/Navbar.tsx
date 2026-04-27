"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Platform", href: "#features" },
  { label: "Proof", href: "#proof" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/55 backdrop-blur-2xl border-b border-white/[0.05]"
          : "bg-transparent"
      }`}
    >
      <div className={`max-w-[1200px] mx-auto px-6 flex items-center justify-between transition-[height] duration-500 ${
        scrolled ? "h-16" : "h-20"
      }`}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src="/aserva-logo.png" alt="aserva logo" className="w-8 h-8 rounded-md" />
          <span className="text-[17px] font-bold tracking-tight text-white group-hover:text-gray-200 transition-colors">
            aserva
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 border border-white/[0.08] bg-white/[0.02] px-6 py-2.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://aserva.io/login"
            className="text-[14px] font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
          >
            Sign in
          </a>
          <a
            href="https://aserva.io/signup"
            className="neon-sweep-button px-6 py-2.5 text-[13px] font-bold text-white uppercase tracking-wider"
          >
            <span className="relative z-10">Get started free</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 rounded-md outline-none transition-colors focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        >
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15px] font-medium text-gray-400 hover:text-white py-2 uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://aserva.io/signup"
                className="neon-sweep-button mt-4 text-[14px] font-bold text-white py-3 text-center uppercase tracking-wider"
              >
                <span className="relative z-10">Start guided setup</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

import { type ReactNode } from "react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "#trust-bar" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Help Center", href: "/help" },
    { label: "API Reference", href: "/api" },
    { label: "Status", href: "/status" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "GDPR", href: "/gdpr" },
  ],
}

export function Footer(): ReactNode {
  return (
    <footer className="relative z-10 border-t border-slate-100" id="footer">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg tracking-tight">
                  A
                </span>
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
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">
              Autonomous AI customer service platform for Shopify and WordPress
              merchants. Go from zero to live support in under 30 minutes.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {category}
              </h4>
              <ul className="mt-5 space-y-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-950"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 md:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Aserva AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/aserva"
              className="text-sm text-slate-400 transition-colors hover:text-slate-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/aserva"
              className="text-sm text-slate-400 transition-colors hover:text-slate-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aserva"
              className="text-sm text-slate-400 transition-colors hover:text-slate-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

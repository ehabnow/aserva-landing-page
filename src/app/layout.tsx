import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aserva - Enterprise AI Customer Service",
  description:
    "Enterprise-grade AI customer service automation. Don't just answer tickets. Let AI handle photo-refunds, cart recovery, and order edits natively inside your existing admin panel.",
  keywords: [
    "AI customer service",
    "Shopify helpdesk",
    "WordPress customer service",
    "WooCommerce support",
    "AI chatbot",
    "automated support",
    "Aserva",
  ],
  openGraph: {
    title: "aserva - Enterprise AI Customer Service",
    description:
      "Autonomous Commerce Operations embedded in Shopify & WordPress.",
    type: "website",
    url: "https://aserva.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "aserva - Enterprise AI Customer Service",
    description:
      "Don't just answer tickets. Let AI handle photo-refunds, cart recovery, and order edits.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* ── SCENE BACKGROUND — remove this div to fully revert ── */}
        <div
          aria-hidden="true"
          style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}
        >
          {/* Violet orb — top left */}
          <div style={{
            position: "absolute", top: "-20%", left: "-10%",
            width: "65vw", height: "65vw", borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(109,40,217,0.22) 0%, transparent 70%)",
          }} />
          {/* Emerald orb — mid right */}
          <div style={{
            position: "absolute", top: "25%", right: "-15%",
            width: "60vw", height: "60vw", borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(16,185,129,0.15) 0%, transparent 70%)",
          }} />
          {/* Indigo orb — bottom center */}
          <div style={{
            position: "absolute", bottom: "-10%", left: "20%",
            width: "75vw", height: "55vw", borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(79,70,229,0.14) 0%, transparent 65%)",
          }} />
          {/* Warm orange accent — lower left */}
          <div style={{
            position: "absolute", bottom: "15%", left: "-5%",
            width: "40vw", height: "40vw", borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(249,115,22,0.09) 0%, transparent 70%)",
          }} />
          {/* Deep blue — upper right */}
          <div style={{
            position: "absolute", top: "5%", right: "5%",
            width: "45vw", height: "45vw", borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)",
          }} />
          {/* Noise grain overlay */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
            mixBlendMode: "overlay",
          }} />
        </div>
        {/* ── END SCENE BACKGROUND ── */}

        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}

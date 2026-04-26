import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "aserva blog — AI commerce operations, support automation for Shopify and WooCommerce",
  description:
    "Deep-dive guides and strategic research on how AI is eliminating manual customer support work, reducing refund losses, and compounding revenue at scale — for Shopify and WooCommerce stores.",
};

const posts = [
  {
    slug: "true-cost-of-ecommerce-refunds",
    category: "Revenue Intelligence",
    title: "Refunds Are Not Your Real Problem. Preventable Refunds Are.",
    excerpt:
      "Every Shopify store owner knows the pain of a refund. But the industry has been measuring the wrong metric. The true cost of a refund isn't the product — it's the lifetime value, the repeat purchase, and the five-star review you just buried. Here's how autonomous AI support changes the math entirely.",
    readTime: "9 min read",
    date: "April 15, 2026",
    accentColor: "from-violet-500/20 to-transparent",
    borderColor: "border-violet-500/30",
  },
  {
    slug: "shopify-ai-customer-service-automation",
    category: "Shopify Operations",
    title: "The Shopify Store That Never Sleeps: How AI Agents Handle Returns, Exchanges, and Angry Customers at 3am",
    excerpt:
      "Your customers don't follow business hours. Their frustration doesn't pause for the weekend. This is the operational blueprint for how high-growth DTC brands are deploying AI agents that execute — not just suggest — inside Shopify, compressing 72-hour ticket resolution cycles into 90 seconds.",
    readTime: "11 min read",
    date: "April 12, 2026",
    accentColor: "from-emerald-500/20 to-transparent",
    borderColor: "border-emerald-500/30",
  },
  {
    slug: "ai-helpdesk-vs-legacy-helpdesk-roi",
    category: "ROI Analysis",
    title: "We Audited 50 Shopify Brands. The Ones Still Using Legacy Helpdesks Are Losing $2,300/month They Can't See.",
    excerpt:
      "It's not in the refund line. It's not in the churn figure. The revenue loss from slow, manual, ticket-based support is buried across five different budget lines — and most operators only discover it when they model what a resolution-first AI stack would have earned them instead.",
    readTime: "13 min read",
    date: "April 8, 2026",
    accentColor: "from-orange-500/20 to-transparent",
    borderColor: "border-orange-500/30",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="mb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-gray-500 hover:text-white transition-colors mb-10 font-medium tracking-widest"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            back to aserva
          </Link>
          <span className="text-[12px] font-bold tracking-[0.3em] text-violet-400 mb-4 block">
            aserva blog
          </span>
          <h1 className="text-[48px] md:text-[72px] font-extrabold tracking-[-0.04em] leading-[1.0] text-white mb-6">
            The operations edge.
          </h1>
          <p className="text-[20px] text-gray-400 max-w-[600px] leading-relaxed">
            Deep research on AI commerce operations, Shopify automation, and the exact mechanisms that compound revenue over time.
          </p>
        </div>

        {/* Articles */}
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group relative rounded-[2rem] border ${post.borderColor} bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 overflow-hidden p-10 md:p-14 flex flex-col md:flex-row gap-8 md:gap-16 items-start`}
            >
              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${post.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-400 border border-violet-500/30 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-[12px] text-gray-600">{post.date}</span>
                  <span className="text-[12px] text-gray-600">{post.readTime}</span>
                </div>
                <h2 className="text-[22px] md:text-[28px] font-bold text-white tracking-tight leading-[1.2] mb-5 group-hover:text-gray-100 transition-colors">
                  {post.title}
                </h2>
                <p className="text-[15px] text-gray-400 leading-[1.8] max-w-[680px]">
                  {post.excerpt}
                </p>
              </div>

              <div className="relative z-10 shrink-0 flex items-center self-center md:self-auto">
                <span className="text-[13px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors flex items-center gap-3">
                  Read
                  <svg
                    className="group-hover:translate-x-2 transition-transform duration-300"
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

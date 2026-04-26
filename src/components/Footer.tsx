export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.05] pt-20 pb-10 relative z-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent blur-[2px]" />
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-[300px]">
          <div className="flex items-center gap-3 mb-6">
            <img src="/aserva-logo.png" alt="aserva logo" className="w-8 h-8 rounded-md" />
            <span className="text-[20px] font-bold tracking-tight text-white">
              aserva
            </span>
          </div>
          <p className="text-[14px] text-gray-400 leading-relaxed tracking-wide">
            Stop losing revenue to slow support. aserva executes real Shopify and WooCommerce store actions — refunds, exchanges, updates — autonomously, around the clock.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-[12px]">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-[14px] text-gray-500 hover:text-white transition-colors tracking-wide">Platform</a></li>
              <li><a href="#pricing" className="text-[14px] text-gray-500 hover:text-white transition-colors tracking-wide">Pricing</a></li>
              <li><a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors tracking-wide">Shopify App</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-[12px]">Company</h4>
            <ul className="space-y-4">
              <li><a href="/blog" className="text-[14px] text-gray-500 hover:text-white transition-colors tracking-wide">Blog</a></li>
              <li><a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors tracking-wide">Documentation</a></li>
              <li><a href="mailto:support@aserva.io" className="text-[14px] text-gray-500 hover:text-white transition-colors tracking-wide">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-[12px]">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors tracking-wide">Privacy Policy</a></li>
              <li><a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors tracking-wide">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 mt-20 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[13px] text-gray-600 tracking-wide">
          © {new Date().getFullYear()} aserva. All rights reserved.
        </p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[13px] text-emerald-500 font-medium tracking-wide">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

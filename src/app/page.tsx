import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { WhySwitch } from "@/components/WhySwitch";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FluidBackground } from "@/components/motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-violet-500 selection:text-white pb-0 font-sans relative">
      <FluidBackground />
      <Navbar />
      
      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
        <Features />
        <WhySwitch />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
      </div>
      
      <Footer />
    </main>
  );
}

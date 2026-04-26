"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, useScroll, useInView } from "motion/react";
import { ReactNode, useRef, MouseEvent, useEffect, useState } from "react";

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }: { children: ReactNode; className?: string; staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Complex 3D Tilt Component for Bento Grid
const ROTATION_RANGE = 18.5; // degrees

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rX = ((mouseY / height) - 0.5) * ROTATION_RANGE * -1;
    const rY = ((mouseX / width) - 0.5) * ROTATION_RANGE;
    
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.04, y: -8, boxShadow: "0 25px 50px -12px rgba(139,92,246,0.25)" }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      style={{ transform, transformStyle: "preserve-3d" }}
      className={`glass-panel rounded-3xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Background dynamic fluid layer (simulated webGL via highly layered blur nodes)
export function FluidBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050505]">
      {/* Dynamic orbs */}
      <motion.div 
        animate={{ 
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-900/20 blur-[120px]"
      />
      <motion.div 
        animate={{ 
          x: [0, -150, 100, 0],
          y: [0, 150, -50, 0],
          scale: [0.8, 1.1, 1, 0.8],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-900/10 blur-[130px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-orange-900/10 blur-[100px]"
      />
      {/* Noise overlay comes from globals.css on the body */}
    </div>
  );
}

// Number Counter for Data Visualization
export function CountUp({ end, suffix = "", duration = 2.5 }: { end: number, suffix?: string, duration?: number }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  useEffect(() => {
    if (isInView) motionValue.set(end);
  }, [isInView, end, motionValue]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

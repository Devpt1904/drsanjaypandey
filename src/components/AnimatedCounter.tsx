"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export function AnimatedCounter({ value, label, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  const displayValue = useTransform(springValue, (current) => 
    Math.floor(current).toString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <div ref={ref} className="flex flex-col items-start">
      <div className="flex items-baseline text-navy font-serif">
        <motion.span className="text-4xl md:text-5xl">{displayValue}</motion.span>
        {suffix && <span className="text-3xl md:text-4xl ml-1">{suffix}</span>}
      </div>
      <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-2 font-semibold">
        {label}
      </span>
    </div>
  );
}

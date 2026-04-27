"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col-reverse items-center justify-between gap-16 px-8 py-24 md:flex-row md:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-1 flex-col items-start gap-8"
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
          Director of Urology • MBBS, MS, MCh, DNB, FEBU
        </span>
        <h1 className="font-serif text-5xl leading-[1.1] text-navy md:text-6xl lg:text-7xl">
          Precision in Surgery.<br />Compassion in Care.
        </h1>
        <p className="max-w-md text-lg text-slate-500 leading-relaxed">
          Pioneering Gender Reassignment and Reconstructive Urology in India with an uncompromising standard of excellence.
        </p>
        <button className="bg-navy text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-navy/90 transition-colors">
          Request Appointment
        </button>
        
        <div className="flex gap-12 mt-8 pt-8 border-t border-gray-100 w-full max-w-md">
          <AnimatedCounter value={25} label="Years Experience" suffix="+" />
          <AnimatedCounter value={500} label="Complex Procedures" suffix="+" />
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 w-full"
      >
        <div className="aspect-[3/4] w-full max-w-md mx-auto bg-slate-50 overflow-hidden border border-gray-200 relative group">
          {/* PLACEHOLDER: Client to provide high-res professional portrait */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 flex items-center justify-center">
             <span className="text-gray-400 font-serif italic text-xl">Dr. Sanjay Pandey</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

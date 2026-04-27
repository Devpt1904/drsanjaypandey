"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

export function Hero() {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[85vh]">
      {/* Left Column: Text Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-5/12 bg-navy text-white px-8 py-20 lg:p-20 xl:p-28 flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-6 block"
          >
            Director of Urology • MBBS, MS, MCh, DNB, FEBU
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-5xl lg:text-6xl xl:text-7xl text-white mb-8 leading-[1.1]"
          >
            Precision in Surgery.<br />Compassion in Care.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 mb-12 max-w-md leading-relaxed font-light"
          >
            Pioneering Gender Reassignment and Reconstructive Urology in India with an uncompromising standard of excellence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="/contact" className="inline-block border border-white/20 text-white px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-navy transition-all">
              Request Appointment
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-12 mt-16 pt-12 border-t border-white/10 w-full max-w-md"
          >
            <AnimatedCounter value={25} label="Years Experience" suffix="+" dark />
            <AnimatedCounter value={500} label="Complex Procedures" suffix="+" dark />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Column: Imagery */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full lg:w-7/12 bg-slate-50 relative flex items-center justify-center p-8 lg:p-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="aspect-[3/4] w-full max-w-md mx-auto bg-white overflow-hidden border border-slate-200 relative group shadow-2xl shadow-navy/5">
          {/* PLACEHOLDER: Client to provide high-res professional portrait */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white flex items-center justify-center">
             <span className="text-slate-400 font-serif italic text-xl">Dr. Sanjay Pandey</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

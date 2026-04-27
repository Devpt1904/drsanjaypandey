"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";
import { AnimatedCounter } from "./AnimatedCounter";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = anime.timeline({
      easing: 'spring(1, 80, 10, 0)'
    });

    tl.add({
      targets: '.hero-left',
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear'
    })
    .add({
      targets: '.hero-stagger-item',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(150)
    }, '-=800')
    .add({
      targets: '.hero-right',
      opacity: [0, 1],
      scale: [0.98, 1],
      duration: 1500,
      easing: 'easeOutQuart'
    }, '-=1500');

  }, []);

  return (
    <section ref={containerRef} className="w-full flex flex-col lg:flex-row min-h-[85vh]">
      {/* Left Column: Text Content */}
      <div 
        className="hero-left opacity-0 w-full lg:w-5/12 bg-navy text-white px-6 py-16 md:p-12 lg:p-20 xl:p-28 flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="relative z-10">
          <span 
            className="hero-stagger-item opacity-0 text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-6 block"
          >
            Director of Urology • MBBS, MS, MCh, DNB, FEBU
          </span>
          
          <h1 
            className="hero-stagger-item opacity-0 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 leading-[1.1]"
          >
            Precision in Surgery.<br />Compassion in Care.
          </h1>
          
          <p 
            className="hero-stagger-item opacity-0 text-base md:text-lg text-white/70 mb-12 max-w-md leading-relaxed font-light"
          >
            Pioneering Gender Reassignment and Reconstructive Urology in India with an uncompromising standard of excellence.
          </p>
          
          <div className="hero-stagger-item opacity-0">
            <a href="/contact" className="inline-block border border-white/20 text-white px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-navy transition-all">
              Request Appointment
            </a>
          </div>
          
          <div 
            className="hero-stagger-item opacity-0 flex flex-wrap gap-8 md:gap-12 mt-12 md:mt-16 pt-12 border-t border-white/10 w-full max-w-md"
          >
            <AnimatedCounter value={25} label="Years Experience" suffix="+" dark />
            <AnimatedCounter value={500} label="Complex Procedures" suffix="+" dark />
          </div>
        </div>
      </div>

      {/* Right Column: Imagery */}
      <div 
        className="hero-right opacity-0 w-full lg:w-7/12 bg-slate-50 relative flex items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="aspect-[3/4] w-full max-w-md mx-auto bg-white overflow-hidden border border-slate-200 relative group shadow-2xl shadow-navy/5">
          {/* PLACEHOLDER: Client to provide high-res professional portrait */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white flex items-center justify-center">
             <span className="text-slate-400 font-serif italic text-xl">Dr. Sanjay Pandey</span>
          </div>
        </div>
      </div>
    </section>
  );
}

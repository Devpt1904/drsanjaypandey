"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Globe, Award, BookOpen } from "lucide-react";
import anime from "animejs";
import { useEffect, useRef } from "react";
import { useAnimeInView } from "@/hooks/useAnimeInView";

export default function GlobalFootprintPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { ref: gridRef, isInView: gridInView } = useAnimeInView<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    // Header Entrance
    anime.timeline({ easing: 'spring(1, 80, 10, 0)' })
      .add({
        targets: '.footprint-header-stagger',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(150),
        duration: 800
      });
  }, []);

  useEffect(() => {
    // Grid scroll entrance
    if (gridInView) {
      anime({
        targets: '.footprint-col-stagger',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(150),
        easing: 'easeOutQuart',
        duration: 800
      });
    }
  }, [gridInView]);

  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-navy min-h-screen pt-24 pb-16 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          
          <div ref={headerRef} className="mb-16 md:mb-32 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end justify-between border-b border-white/10 pb-12">
            <div>
              <span className="footprint-header-stagger opacity-0 block text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400/80 mb-4 md:mb-6">
                Legacy & Recognition
              </span>
              <h1 className="footprint-header-stagger opacity-0 font-serif text-4xl md:text-5xl lg:text-7xl text-white">Global Footprint</h1>
            </div>
            <p className="footprint-header-stagger opacity-0 text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-md font-light">
              Shaping the future of complex surgical care through international collaboration, academic leadership, and peer-reviewed research.
            </p>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            
            {/* Awards */}
            <div className="footprint-col-stagger opacity-0 flex flex-col bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-colors pointer-events-none" />
              <Award className="h-8 w-8 text-amber-400 mb-8 stroke-[1.5]" />
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-white font-semibold mb-8 border-b border-white/10 pb-4">
                Awards & Honors
              </h3>
              <ul className="space-y-6 text-slate-300 font-light text-sm leading-relaxed relative z-10">
                <li className="pb-6 border-b border-white/5">First MIUC Travelling Fellowship of the Urology Society of India (IMORU, Hamburg, Germany)</li>
                <li className="pb-6 border-b border-white/5">Krishnamurthy Gold medal for "Watchful Waiting in Cancer Prostate" (SZUSICON)</li>
                <li className="pb-6 border-b border-white/5 border-none">N.P. Krishnaswamy Gold medal for "Faulty Urology Accessories" (TAPASUCON)</li>
              </ul>
            </div>

            {/* Associations */}
            <div className="footprint-col-stagger opacity-0 flex flex-col bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-colors pointer-events-none" />
              <Globe className="h-8 w-8 text-amber-400 mb-8 stroke-[1.5]" />
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-white font-semibold mb-8 border-b border-white/10 pb-4">
                Associations
              </h3>
              <ul className="space-y-6 text-slate-300 font-light text-sm leading-relaxed relative z-10">
                <li className="pb-6 border-b border-white/5">Urology Society of India (USI) & Societe Internationale de Urologie (SIU)</li>
                <li className="pb-6 border-b border-white/5">World Professional Association of Transgender Health (WPATH)</li>
                <li className="pb-6 border-b border-white/5 border-none">8 Member Asia Pacific Overactive Bladder Board (Since 2009)</li>
              </ul>
            </div>

            {/* Publications */}
            <div className="footprint-col-stagger opacity-0 flex flex-col bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-colors pointer-events-none" />
              <BookOpen className="h-8 w-8 text-amber-400 mb-8 stroke-[1.5]" />
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-white font-semibold mb-8 border-b border-white/10 pb-4">
                Publications & Speaking
              </h3>
              <ul className="space-y-6 text-slate-300 font-light text-sm leading-relaxed relative z-10">
                <li className="pb-6 border-b border-white/5">Author, First book chapter on Botulinum Toxin in Urology</li>
                <li className="pb-6 border-b border-white/5">Invited Speaker at National and International Urology Meets</li>
                <li className="pb-6 border-b border-white/5 border-none">Pioneer in Botulinum toxin therapy for refractory vaginismus</li>
              </ul>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

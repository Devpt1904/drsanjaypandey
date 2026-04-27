"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import { useAnimeInView } from "@/hooks/useAnimeInView";

const areasOfInterest = [
  "Genito-Urinary Reconstructions",
  "Andrology",
  "Female Urology",
  "Endourology",
  "Gender Reassignment Surgery",
  "Botulinum Toxin in Urology",
];

const treatmentsOffered = [
  {
    title: "Reconstructive Urology",
    description: "Advanced surgical techniques to restore normal function to the urinary tract following injury, disease, or anatomical defect."
  },
  {
    title: "Andrology",
    description: "Comprehensive care for male reproductive system conditions, including infertility, sexual dysfunction, and hormonal imbalances."
  },
  {
    title: "Female Urology",
    description: "Specialized diagnostics and treatments for female pelvic floor disorders, incontinence, and voiding dysfunctions."
  },
  {
    title: "Gender Reassignment Surgery",
    description: "Expert surgical care focusing on functional and aesthetic outcomes for transgender and gender-diverse individuals."
  },
  {
    title: "Endourology",
    description: "Minimally invasive endoscopic techniques to diagnose and treat conditions of the urinary tract, including kidney stones."
  },
  {
    title: "Penile Prosthesis",
    description: "State-of-the-art surgical implants for the management of severe erectile dysfunction, restoring quality of life."
  },
  {
    title: "Phalloplasty",
    description: "Complex reconstructive procedure to construct a phallus, employing microsurgical and tissue-transfer techniques."
  },
  {
    title: "Vaginoplasty",
    description: "Reconstructive or aesthetic surgical creation or repair of the vagina, utilizing advanced mucosal and skin grafting."
  },
  {
    title: "Botulinum Toxin in Urology",
    description: "Pioneering therapeutic injections for overactive bladder, neurogenic bladder, and refractory pelvic floor conditions."
  },
  {
    title: "Renal Stone Disease",
    description: "Comprehensive management of kidney stones using lithotripsy, ureteroscopy, and percutaneous nephrolithotomy."
  },
  {
    title: "Enuresis & Nocturia",
    description: "Targeted medical and behavioral therapies for the effective management of nocturnal bedwetting and excessive nighttime urination."
  },
  {
    title: "Robotic Urology",
    description: "Precision robot-assisted surgeries including radical prostatectomy, nephrectomy, and pyeloplasty for optimal recovery."
  }
];

export default function ExpertisePage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { ref: listRef, isInView: listInView } = useAnimeInView<HTMLDivElement>({ threshold: 0.1 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    // Header Entrance
    anime.timeline({ easing: 'spring(1, 80, 10, 0)' })
      .add({
        targets: '.expertise-header-stagger',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(150),
        duration: 800
      });
  }, []);

  useEffect(() => {
    // Content scroll entrance
    if (listInView) {
      anime({
        targets: '.expertise-list-stagger',
        opacity: [0, 1],
        translateX: [-20, 0],
        delay: anime.stagger(100),
        easing: 'easeOutQuart',
        duration: 800
      });
    }
  }, [listInView]);

  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-slate-50 min-h-screen pt-24 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          
          <div ref={headerRef} className="mb-24 md:mb-32 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end justify-between border-b border-slate-100 pb-12">
            <div>
              <span className="expertise-header-stagger opacity-0 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6">
                Specializations
              </span>
              <h1 className="expertise-header-stagger opacity-0 font-serif text-4xl md:text-5xl lg:text-7xl text-navy">Clinical Expertise</h1>
            </div>
            <p className="expertise-header-stagger opacity-0 text-lg md:text-xl text-slate-500 leading-relaxed max-w-md font-light">
              Delivering uncompromising surgical excellence across advanced reconstructive, robotic, and endourological disciplines.
            </p>
          </div>

          <div ref={listRef} className="flex flex-col gap-24">
            
            {/* Areas of Interest */}
            <div>
              <div className="expertise-list-stagger opacity-0 flex items-center gap-6 mb-12">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-navy">
                  Core Domains
                </span>
                <div className="h-[1px] flex-1 bg-slate-200" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {areasOfInterest.map((area, idx) => (
                  <div 
                    key={idx} 
                    className="expertise-list-stagger opacity-0 group relative bg-slate-100 rounded-xl min-h-[120px] md:min-h-[160px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                  >
                    {/* Border gradient that shifts on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 group-hover:from-navy/30 group-hover:via-slate-200 group-hover:to-navy/30 transition-colors duration-700" />
                    
                    {/* Inner Content Box */}
                    <div className="absolute inset-[1.5px] bg-white/90 backdrop-blur-xl rounded-[10px] z-10 p-6 md:p-8 flex flex-col justify-center items-center overflow-hidden">
                      
                      {/* Background Number */}
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[60px] md:text-[120px] font-bold text-slate-50 group-hover:text-slate-100 group-hover:scale-110 transition-all duration-700 select-none z-0 pointer-events-none">
                        0{idx + 1}
                      </span>

                      {/* Content */}
                      <span className="relative z-20 text-slate-700 font-serif text-lg md:text-2xl text-center tracking-wide group-hover:text-navy group-hover:-translate-y-1 transition-all duration-500">
                        {area}
                      </span>
                      
                      {/* Subtle accent line that appears */}
                      <div className="relative z-20 w-8 h-[2px] bg-navy mt-4 transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 delay-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatments / Procedures Offered */}
            <div>
              <div className="expertise-list-stagger opacity-0 flex items-center gap-6 mb-12">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-navy">
                  Surgical & Medical Interventions
                </span>
                <div className="h-[1px] flex-1 bg-slate-200" />
              </div>
              
              <style dangerouslySetInnerHTML={{__html: `
                .animated-gradient-bg {
                  background: linear-gradient(#1e293b, #f8fafc);
                  animation: spin 4s linear infinite;
                  animation-play-state: paused;
                }
                .group:hover .animated-gradient-bg, .is-active .animated-gradient-bg {
                  animation-play-state: running;
                }
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {treatmentsOffered.map((treatment, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                    className={`expertise-list-stagger opacity-0 group relative bg-white border border-slate-100 rounded-xl min-h-[160px] flex justify-center items-center overflow-hidden shadow-sm transition-all duration-500 cursor-pointer ${activeCard === idx ? 'is-active shadow-xl' : 'hover:shadow-xl'}`}
                  >
                    {/* Rotating gradient */}
                    <div className={`animated-gradient-bg absolute w-[200%] h-[200%] transition-opacity duration-700 ${activeCard === idx ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}`} />
                    
                    {/* Blur overlay */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[20px]" />
                    
                    {/* Inner Content Box (leaves 1.5px for the animated border) */}
                    <div className="absolute inset-[1.5px] bg-white rounded-lg z-10 p-6 flex flex-col justify-center text-center">
                      
                      {/* The internal glow */}
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-slate-100 blur-[30px] transition-opacity duration-500 pointer-events-none ${activeCard === idx ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}`} />

                      {/* Content */}
                      <div className="relative z-20 flex flex-col w-full items-center">
                        <h4 className={`font-serif text-lg md:text-xl tracking-wide leading-tight transition-colors duration-300 ${activeCard === idx ? 'text-navy' : 'text-slate-800 lg:group-hover:text-navy'}`}>
                          {treatment.title}
                        </h4>
                        
                        {/* Mobile 'Learn More' hint */}
                        <div className={`lg:hidden transition-all duration-500 w-full grid ${activeCard === idx ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'}`}>
                          <div className="overflow-hidden">
                            <span className="block text-[10px] uppercase tracking-[0.1em] text-slate-400 font-semibold pt-3">
                              Tap to learn more
                            </span>
                          </div>
                        </div>
                        
                        {/* Smooth height expansion for description */}
                        <div className={`transition-all duration-500 w-full grid ${activeCard === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]'}`}>
                          <div className="overflow-hidden">
                            <p className={`text-xs text-slate-500 leading-relaxed pt-3 transition-opacity duration-500 delay-[50ms] ${activeCard === idx ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}`}>
                              {treatment.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

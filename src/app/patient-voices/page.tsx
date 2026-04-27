"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlayCircle } from "lucide-react";
import anime from "animejs";
import { useEffect, useRef } from "react";
import { useAnimeInView } from "@/hooks/useAnimeInView";

const testimonials = [
  { id: 1, type: "written", name: "Sunil Soni", procedure: "Urology", quote: "Thank you so much Dr. Sanjay Pandey And special thanks to Dr. Gaurav Mehta." },
  { id: 2, type: "written", name: "Haji Ussi", procedure: "Reconstructive Surgery", quote: "Thanks to Dr Sanjay pandey and his team for the support and the nurses too on 9th floor it was very good, and to my cordinator Mario." },
  { id: 3, type: "written", name: "Vihaan N. Doshi", procedure: "Pediatric Urology", quote: "Can think of none other hospital than this as the services provided are excellent regarding any type of ailments." },
  { id: 4, type: "written", name: "Manjeet Singh T Anand", procedure: "General Urology", quote: "Everything was perfect like always... Above all Dr. Sanjay Pandey and Dr... hope all the very best to the entire teams." },
  { id: 5, type: "written", name: "Chhaya K. Menon", procedure: "Female Urology", quote: "Dr Sanjay Pandey is the best doctor. Your staff is amazing." },
  { id: 6, type: "written", name: "Sully A. Mringo", procedure: "Reconstructive Surgery", quote: "Everything was good thanks to Dr Pandey and team for all help the nurses on the floor and my cordinator Mario." },
  { id: 7, type: "written", name: "Malinga H. M. Sharon", procedure: "Andrology", quote: "My husband had been suffering from an enlarged prostate gland for over a decade... Kokilaben Hospital turned out to be a beacon of hope." },
  { id: 8, type: "written", name: "Laura Korevar", procedure: "General Urology", quote: "Once again, thank you for all your help and assistance whilst we were in India and especially for everything you did to help us whilst Sarah was at Kokilaben Hospital." },
];

export default function PatientVoicesPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { ref: gridRef, isInView: gridInView } = useAnimeInView<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    // Header Entrance
    anime.timeline({ easing: 'spring(1, 80, 10, 0)' })
      .add({
        targets: '.voices-header-stagger',
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
        targets: '.voices-card-stagger',
        opacity: [0, 1],
        scale: [0.95, 1],
        delay: anime.stagger(100, { grid: [3, Math.ceil(testimonials.length / 3)], from: 'center' }),
        easing: 'easeOutQuart',
        duration: 800
      });
    }
  }, [gridInView]);

  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-white min-h-screen py-16 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div ref={headerRef} className="text-center mb-12 md:mb-16">
            <h1 className="voices-header-stagger opacity-0 font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-4 md:mb-6">Patient Voices</h1>
            <p className="voices-header-stagger opacity-0 text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
              Testimonials and success stories from those who have experienced our uncompromising standard of care.
            </p>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((item) => (
              <div key={item.id} className="voices-card-stagger opacity-0 bg-slate-50 border border-slate-100 border-l-4 border-l-navy hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col relative group">
                {item.type === "video" && (
                  <div className="relative aspect-video bg-slate-200 flex-shrink-0 flex items-center justify-center">
                    <PlayCircle className="h-12 w-12 text-navy/50 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                  </div>
                )}
                <div className="p-6 md:p-10 flex flex-col flex-1 relative z-10">
                  <div className="absolute -top-4 -left-2 text-8xl md:text-9xl font-serif text-navy/5 group-hover:text-navy/10 transition-colors pointer-events-none select-none">"</div>
                  <span className="relative text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-6 border-b border-slate-200 pb-2 inline-block">
                    {item.procedure}
                  </span>
                  <p className="relative font-serif text-base md:text-lg text-slate-700 italic mb-8 flex-1 leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div className="relative mt-auto flex items-center gap-4">
                    <div className="h-[1px] w-8 bg-navy/30" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

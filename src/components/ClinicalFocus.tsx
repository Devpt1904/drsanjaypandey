"use client";

import anime from "animejs";
import Link from "next/link";
import { useEffect } from "react";
import { useAnimeInView } from "../hooks/useAnimeInView";

const focuses = [
  { num: "01", title: "Reconstructive Urology", slug: "reconstructive-urology", desc: "Complex urethral strictures, pelvic trauma reconstruction, and revision surgeries with precision." },
  { num: "02", title: "Gender Reassignment", slug: "gender-reassignment", desc: "Compassionate, world-class surgical care for gender affirmation including Vaginoplasty and Phalloplasty." },
  { num: "03", title: "Andrology", slug: "andrology", desc: "Advanced interventions for male fertility including Micro-TESE and complex varicocelectomy." },
];

export function ClinicalFocus() {
  const { ref, isInView } = useAnimeInView<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      const tl = anime.timeline({
        easing: 'spring(1, 80, 10, 0)'
      });

      tl.add({
        targets: '.clinical-header',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800
      })
      .add({
        targets: '.clinical-card',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(150)
      }, '-=600');
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 md:py-32" id="excellence">
      <div className="mx-auto max-w-[1200px] px-8">
        <div 
          className="clinical-header opacity-0 mb-20 flex flex-col items-start border-b border-slate-100 pb-8"
        >
          <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Specializations
          </span>
          <h2 className="font-serif text-4xl text-navy md:text-5xl">Clinical Focus</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {focuses.map((item, index) => (
            <div
              key={index}
              className="clinical-card opacity-0 group flex flex-col border border-slate-100 bg-white p-12 transition-all duration-300 hover:border-navy hover:shadow-2xl hover:shadow-navy/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="font-serif text-6xl italic text-slate-50 transition-colors duration-500 group-hover:text-navy/5">
                  {item.num}
                </span>
              </div>
              <div className="relative z-10 mt-12 flex flex-col h-full">
                <h3 className="mb-6 font-serif text-2xl text-navy leading-tight">{item.title}</h3>
                <p className="mb-10 flex-1 text-slate-500 leading-relaxed font-light text-sm">
                  {item.desc}
                </p>
                <Link href={`/expertise`} className="group/btn inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-navy mt-auto">
                  Learn More 
                  <span className="h-[1px] w-4 bg-navy transition-all group-hover/btn:w-8" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

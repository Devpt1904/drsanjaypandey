"use client";

import { Award, ShieldCheck, Stethoscope, BookOpen } from "lucide-react";
import anime from "animejs";
import { useEffect } from "react";
import { useAnimeInView } from "../hooks/useAnimeInView";

const authorities = [
  { icon: ShieldCheck, text: "Board Certified Surgeon" },
  { icon: Award, text: "Fellow of the ACS" },
  { icon: Stethoscope, text: "20+ Years Experience" },
  { icon: BookOpen, text: "50+ Peer-Reviewed Publications" },
];

export function AuthorityStrip() {
  const { ref, isInView } = useAnimeInView<HTMLDivElement>({ threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      anime({
        targets: '.authority-item',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(150),
        easing: 'easeOutQuad',
        duration: 800
      });
    }
  }, [isInView]);

  return (
    <div className="w-full bg-white border-y border-slate-100 py-16">
      <div ref={ref} className="mx-auto grid max-w-[1200px] grid-cols-2 gap-12 px-8 md:grid-cols-4 divide-x divide-slate-100/50">
        {authorities.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index}
              className="authority-item opacity-0 flex flex-col items-center justify-center gap-6 text-center"
            >
              <Icon className="h-6 w-6 text-navy/40 stroke-[1.5]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

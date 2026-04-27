"use client";

import anime from "animejs";
import { useEffect, useState } from "react";
import { useAnimeInView } from "../hooks/useAnimeInView";

interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
  dark?: boolean;
}

export function AnimatedCounter({ value, label, suffix = "", dark = false }: AnimatedCounterProps) {
  const { ref, isInView } = useAnimeInView<HTMLDivElement>({ threshold: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const obj = { val: 0 };
      anime({
        targets: obj,
        val: value,
        round: 1,
        easing: 'easeOutExpo',
        duration: 2000,
        update: () => {
          setDisplayValue(obj.val.toString());
        }
      });
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-start">
      <div className={`flex items-baseline font-serif ${dark ? 'text-white' : 'text-navy'}`}>
        <span className="text-4xl md:text-5xl">{displayValue}</span>
        {suffix && <span className="text-3xl md:text-4xl ml-1">{suffix}</span>}
      </div>
      <span className={`text-[10px] uppercase tracking-widest mt-2 font-semibold ${dark ? 'text-white/50' : 'text-slate-400'}`}>
        {label}
      </span>
    </div>
  );
}

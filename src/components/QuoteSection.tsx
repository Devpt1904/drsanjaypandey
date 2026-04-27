"use client";

import anime from "animejs";
import { useEffect } from "react";
import { useAnimeInView } from "../hooks/useAnimeInView";

export function QuoteSection() {
  const { ref, isInView } = useAnimeInView<HTMLElement>({ threshold: 0.5 });

  useEffect(() => {
    if (isInView) {
      const tl = anime.timeline({ easing: 'spring(1, 80, 10, 0)' });
      tl.add({
        targets: '.quote-text',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800
      })
      .add({
        targets: '.quote-cite',
        opacity: [0, 1],
        duration: 800
      }, '-=400');
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-32">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center px-8 text-center">
        <blockquote 
          className="quote-text opacity-0 mb-10 font-serif text-4xl italic leading-tight text-navy md:text-5xl lg:text-6xl"
        >
          &quot;Mastery is not simply the absence of error, but the presence of absolute intention.&quot;
        </blockquote>
        <cite 
          className="quote-cite opacity-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 not-italic"
        >
          Dr. Sanjay Pandey
        </cite>
      </div>
    </section>
  );
}

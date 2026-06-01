"use client";

import anime from "animejs";
import { useEffect } from "react";
import { useAnimeInView } from "../hooks/useAnimeInView";

const QUOTE = "Mastery is not simply the absence of error, but the presence of absolute intention.";

// Split into words once at module level — stable reference, no re-render cost
const words = QUOTE.split(" ");

export function QuoteSection() {
  const { ref, isInView } = useAnimeInView<HTMLElement>({ threshold: 0.4 });

  useEffect(() => {
    if (isInView) {
      // Word-by-word stagger reveal (reactbits text animation pattern)
      anime({
        targets: ".quote-word",
        opacity: [0, 1],
        translateY: [10, 0],
        delay: anime.stagger(55),
        easing: "easeOutQuart",
        duration: 500,
      });

      anime({
        targets: ".quote-cite",
        opacity: [0, 1],
        translateY: [8, 0],
        delay: words.length * 55 - 100,
        easing: "easeOutQuart",
        duration: 600,
      });
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="mx-auto flex max-w-[960px] flex-col items-center px-8 text-center">
        {/* Opening mark */}
        <span
          className="quote-cite opacity-0 font-serif text-7xl text-navy/10 leading-none mb-0 -mb-6 select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <blockquote className="mb-10 font-serif text-3xl italic leading-[1.35] text-navy md:text-4xl lg:text-5xl">
          {words.map((word, i) => (
            <span
              key={i}
              className="quote-word opacity-0 inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </span>
          ))}
        </blockquote>

        <cite className="quote-cite opacity-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 not-italic">
          Dr. Sanjay Pandey
        </cite>
      </div>
    </section>
  );
}

"use client";

import anime from "animejs";
import { useEffect } from "react";
import { useAnimeInView } from "../hooks/useAnimeInView";
import { ArrowUpRight, PlayCircle } from "lucide-react";

export function StorySection() {
  const { ref, isInView } = useAnimeInView<HTMLElement>({ threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      anime({
        targets: ".story-stagger",
        opacity: [0, 1],
        translateY: [24, 0],
        delay: anime.stagger(120),
        duration: 900,
        easing: "easeOutQuart",
      });
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 md:py-40 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">

        {/* Section header */}
        <div className="story-stagger opacity-0 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-100 pb-10">
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">
              Voice &amp; Pen
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
              Beyond the<br className="hidden md:block" /> Operating Theatre
            </h2>
          </div>
          <p className="text-base text-slate-500 leading-relaxed max-w-sm font-light">
            Dr. Pandey's work extends from the surgical field into advocacy, storytelling, and public discourse on medicine and humanity.
          </p>
        </div>

        {/* Two-column editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-stretch">

          {/* TEDx Card — wide left column */}
          <a
            href="https://youtu.be/F58O1bizrSY?si=KARSLRl78YvJ3rZt"
            target="_blank"
            rel="noopener noreferrer"
            className="story-stagger opacity-0 lg:col-span-3 group relative bg-navy overflow-hidden flex flex-col min-h-[520px] md:min-h-[600px] shine-host"
          >
            {/* Shine sweep on hover — pure CSS, triggers via group-hover */}
            <span
              className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-20 opacity-0 group-hover:animate-shine"
              aria-hidden="true"
            />
            {/* Speaker photo */}
            <div className="absolute inset-0">
              <img
                src="/pic 5.jpeg"
                alt="Dr. Sanjay Pandey delivering a TEDx talk on gender dysphoria"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105 transform"
                style={{ objectPosition: "22% 15%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/10" />
            </div>

            {/* Play button */}
            <div className="relative z-10 flex-1 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-black/20 backdrop-blur-sm">
                <PlayCircle className="h-6 w-6 text-white ml-0.5" strokeWidth={1} />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-white/50 border border-white/20 px-3 py-1">
                  TEDx Talk
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-white/40">
                  Mumbai
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-5 group-hover:text-white/90 transition-colors">
                From Dysphoria<br />to Euphoria
              </h3>

              <p className="text-sm text-white/60 leading-relaxed font-light max-w-sm mb-8">
                A landmark talk on gender dysphoria — arguing that surgery is not elective, but life-saving, life-changing, and life-extending. Every life matters.
              </p>

              <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Watch on YouTube</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </a>

          {/* Reader's Digest Card — narrow right column */}
          <div className="story-stagger opacity-0 lg:col-span-2 flex flex-col gap-6">

            {/* Main story card */}
            <div className="flex-1 bg-slate-50 border border-slate-100 p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-slate-200 transition-colors">
              <div className="absolute top-0 right-0 w-40 h-40 bg-navy/3 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-slate-400 border border-slate-200 px-3 py-1">
                    Reader's Digest
                  </span>
                  <span className="text-[9px] text-slate-400 uppercase tracking-[0.2em]">Aug 2022</span>
                </div>

                <div className="mb-6">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-semibold mb-2">My Story</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-navy leading-tight">
                    Banudhar's<br />Sack of Rice
                  </h3>
                  <p className="text-xs text-slate-400 font-light mt-2 italic">
                    How a decades-long friendship began with a life-saving act and a humble gift
                  </p>
                </div>

                <blockquote className="border-l-2 border-navy pl-5 my-6 flex-1">
                  <p className="font-serif text-lg md:text-xl text-navy leading-relaxed italic">
                    "If gratitude and love were packed in that sack of rice 26 years ago, there was also a bond for life."
                  </p>
                </blockquote>

                <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                  A candid account of a 23-year-old surgery student's first emergency night, a terrified patient named Banudhar, and a friendship spanning two decades — published in Reader's Digest India.
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-semibold">By Dr. Sanjay Pandey</p>
                </div>
              </div>
            </div>

            {/* Recognition badge */}
            <div className="bg-navy p-6 md:p-8 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                <img
                  src="/pic 1.jpeg"
                  alt="Dr. Sanjay Pandey receiving recognition"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "18% 5%" }}
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-1">
                  Recognised by
                </p>
                <p className="font-serif text-white text-sm leading-snug">
                  Mumbai Urology Society &<br />National Surgical Societies
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

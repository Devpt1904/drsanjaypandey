"use client";

import { AlertTriangle, PlayCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import anime from "animejs";
import { useAnimeInView } from "../hooks/useAnimeInView";

export function EducationalTheatre() {
  const [acknowledged, setAcknowledged] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { ref, isInView } = useAnimeInView<HTMLElement>({ threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      anime({
        targets: '.theatre-content',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'spring(1, 80, 10, 0)'
      });
    }
  }, [isInView]);

  const handleAcknowledge = () => {
    if (overlayRef.current) {
      anime({
        targets: overlayRef.current,
        opacity: [1, 0],
        scale: [1, 0.95],
        duration: 400,
        easing: 'easeInOutQuad',
        complete: () => {
          setAcknowledged(true);
        }
      });
    } else {
      setAcknowledged(true);
    }
  };

  return (
    <section ref={ref} className="bg-slate-50 py-24 md:py-32" id="insights">
      <div className="theatre-content opacity-0 mx-auto max-w-[1200px] px-8 text-center">
        <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
          Surgical Archives
        </span>
        <h2 className="mb-16 font-serif text-4xl text-navy md:text-5xl">Educational Theatre</h2>
        
        <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden bg-gray-900 shadow-sm border border-gray-200">
          {/* Video Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <PlayCircle className="h-20 w-20 text-white/50" strokeWidth={1} />
          </div>

          {!acknowledged && (
            <div 
              ref={overlayRef}
              className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-md bg-navy/80 p-6"
            >
              <div className="flex max-w-md flex-col items-center gap-6 bg-white p-10 text-center shadow-lg">
                <AlertTriangle className="h-10 w-10 text-red-600 stroke-[1.5]" />
                <h3 className="font-serif text-2xl text-navy">Clinical Content Warning</h3>
                <p className="text-sm text-slate-600">
                  The following video contains actual surgical footage intended for medical professionals and educational purposes. Viewer discretion is advised.
                </p>
                <button 
                  onClick={handleAcknowledge}
                  className="mt-2 bg-navy px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-navy/90"
                >
                  I Acknowledge & Enter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

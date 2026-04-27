"use client";

import anime from "animejs";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useAnimeInView } from "../hooks/useAnimeInView";

const cases = [
  {
    id: 1,
    title: "Recurrent Haematospermia In A Young Male",
    background: "A 34-year-old married male presented with recurrent episodes of fresh bleeding in semen over three years, previously treated with antibiotics. No history of trauma or infections. He was anxious about these episodes interspersed with coffee-coloured semen.",
    management: "Clinical examination and urine evaluation were normal. TRUS (Transrectal Ultrasonography) revealed seminal vesiculitis. Treated with a combination of Quinolone antibiotics and Finasteride to eradicate inflammation. Patient completely recovered with no fresh episodes after one year.",
    discussion: "Haematospermia is distressing but often caused by non-specific inflammation of the prostate and seminal vesicles. It requires proper evaluation (TRUS or MRI) by a Uro-Andrologist to rule out hidden malignancies or tuberculosis."
  },
  {
    id: 2,
    title: "Torsion of the Spermatic Cord",
    background: "Torsion is a true surgical emergency. Sudden onset orchialgia (pain in scrotum) in a young male can lead to complete loss of blood supply and necrosis of the testes if not treated in the golden hour.",
    management: "An 18-year-old male presented with progressive pain for two days. Examination revealed a hard, discoloured hemi-scrotum with absent blood supply. Emergency exploration showed an infarcted testes beyond recovery. Left orchidectomy and right orchidopexy were performed.",
    discussion: "Timely referral is critical to prevent loss of the testes. Torsion should not be confused with Epididymitis. Early intervention saves the testes, preserving fertility and self-esteem."
  }
];

function AccordionItem({ c, isOpen, onClick }: { c: any, isOpen: boolean, onClick: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    if (contentRef.current) {
      if (isOpen) {
        anime({
          targets: contentRef.current,
          height: [0, contentRef.current.scrollHeight],
          opacity: [0, 1],
          duration: 400,
          easing: 'easeOutQuart'
        });
      } else {
        anime({
          targets: contentRef.current,
          height: [contentRef.current.scrollHeight, 0],
          opacity: [1, 0],
          duration: 300,
          easing: 'easeInQuart'
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="case-item opacity-0 border border-white/10 bg-navy overflow-hidden transition-colors hover:border-white/30">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-8 md:p-12 text-left group"
      >
        <h3 className="font-serif text-2xl text-white pr-8 group-hover:text-white/80 transition-colors">{c.title}</h3>
        <ChevronDown 
          className={`h-5 w-5 text-white/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      
      <div 
        ref={contentRef} 
        style={{ height: 0, opacity: 0, overflow: 'hidden' }}
      >
        <div className="p-8 md:p-12 pt-0 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">Background</h4>
              <p className="text-sm text-white/70 leading-relaxed font-light">{c.background}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">Management</h4>
              <p className="text-sm text-white/70 leading-relaxed font-light">{c.management}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">Discussion</h4>
              <p className="text-sm text-white/70 leading-relaxed font-light">{c.discussion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BreakthroughCases() {
  const [openId, setOpenId] = useState<number | null>(null);
  const { ref, isInView } = useAnimeInView<HTMLDivElement>({ threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      const tl = anime.timeline({ easing: 'spring(1, 80, 10, 0)' });
      tl.add({
        targets: '.cases-header',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800
      })
      .add({
        targets: '.case-item',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(150)
      }, '-=600');
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-navy text-white">
      <div className="mx-auto max-w-[1000px] px-8">
        <div 
          className="cases-header opacity-0 mb-20 flex flex-col items-start border-b border-white/10 pb-8"
        >
          <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
            Clinical Milestones
          </span>
          <h2 className="font-serif text-4xl text-white md:text-5xl">Breakthrough Cases</h2>
        </div>

        <div className="space-y-4">
          {cases.map((c) => (
            <AccordionItem 
              key={c.id} 
              c={c} 
              isOpen={openId === c.id} 
              onClick={() => setOpenId(openId === c.id ? null : c.id)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

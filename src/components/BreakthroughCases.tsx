"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

export function BreakthroughCases() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-[1000px] px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
            Clinical Milestones
          </span>
          <h2 className="font-serif text-4xl text-navy md:text-5xl">Breakthrough Cases</h2>
        </motion.div>

        <div className="space-y-4">
          {cases.map((c, i) => (
            <motion.div 
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-gray-200 bg-white overflow-hidden"
            >
              <button 
                onClick={() => setOpenId(openId === c.id ? null : c.id)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-serif text-2xl text-navy pr-8">{c.title}</h3>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${openId === c.id ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openId === c.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 border-t border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-navy mb-4">Background</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{c.background}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-navy mb-4">Management</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{c.management}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-navy mb-4">Discussion</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{c.discussion}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

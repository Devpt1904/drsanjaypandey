"use client";

import { AlertTriangle, PlayCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EducationalTheatre() {
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <section className="bg-slate-50 py-24 md:py-32" id="insights">
      <div className="mx-auto max-w-[1200px] px-8 text-center">
        <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
          Surgical Archives
        </span>
        <h2 className="mb-16 font-serif text-4xl text-navy md:text-5xl">Educational Theatre</h2>
        
        <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden bg-gray-900 shadow-sm border border-gray-200">
          {/* Video Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <PlayCircle className="h-20 w-20 text-white/50" strokeWidth={1} />
          </div>

          <AnimatePresence>
            {!acknowledged && (
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-md bg-navy/80 p-6"
              >
                <div className="flex max-w-md flex-col items-center gap-6 bg-white p-10 text-center shadow-lg">
                  <AlertTriangle className="h-10 w-10 text-red-600 stroke-[1.5]" />
                  <h3 className="font-serif text-2xl text-navy">Clinical Content Warning</h3>
                  <p className="text-sm text-slate-600">
                    The following video contains actual surgical footage intended for medical professionals and educational purposes. Viewer discretion is advised.
                  </p>
                  <button 
                    onClick={() => setAcknowledged(true)}
                    className="mt-2 bg-navy px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-navy/90"
                  >
                    I Acknowledge & Enter
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

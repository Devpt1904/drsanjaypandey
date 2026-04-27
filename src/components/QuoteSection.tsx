"use client";

import { motion } from "framer-motion";

export function QuoteSection() {
  return (
    <section className="py-32">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center px-8 text-center">
        <motion.blockquote 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 font-serif text-4xl italic leading-tight text-navy md:text-5xl lg:text-6xl"
        >
          &quot;Mastery is not simply the absence of error, but the presence of absolute intention.&quot;
        </motion.blockquote>
        <motion.cite 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 not-italic"
        >
          Dr. Alexander Sterling
        </motion.cite>
      </div>
    </section>
  );
}

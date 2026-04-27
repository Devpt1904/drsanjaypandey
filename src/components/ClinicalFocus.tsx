"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const focuses = [
  { num: "01", title: "Reconstructive Urology", slug: "reconstructive-urology", desc: "Complex urethral strictures, pelvic trauma reconstruction, and revision surgeries with precision." },
  { num: "02", title: "Gender Reassignment", slug: "gender-reassignment", desc: "Compassionate, world-class surgical care for gender affirmation including Vaginoplasty and Phalloplasty." },
  { num: "03", title: "Andrology", slug: "andrology", desc: "Advanced interventions for male fertility including Micro-TESE and complex varicocelectomy." },
];

export function ClinicalFocus() {
  return (
    <section className="py-24 md:py-32" id="excellence">
      <div className="mx-auto max-w-[1200px] px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-start border-b border-slate-100 pb-8"
        >
          <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Specializations
          </span>
          <h2 className="font-serif text-4xl text-navy md:text-5xl">Clinical Focus</h2>
        </motion.div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {focuses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group flex flex-col border border-slate-100 bg-white p-12 transition-all duration-300 hover:border-navy hover:shadow-2xl hover:shadow-navy/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="font-serif text-6xl italic text-slate-50 transition-colors duration-500 group-hover:text-navy/5">
                  {item.num}
                </span>
              </div>
              <div className="relative z-10 mt-12 flex flex-col h-full">
                <h3 className="mb-6 font-serif text-2xl text-navy leading-tight">{item.title}</h3>
                <p className="mb-10 flex-1 text-slate-500 leading-relaxed font-light text-sm">
                  {item.desc}
                </p>
                <Link href={`/expertise`} className="group/btn inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-navy mt-auto">
                  Learn More 
                  <span className="h-[1px] w-4 bg-navy transition-all group-hover/btn:w-8" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

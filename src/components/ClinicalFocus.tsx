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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
            Specializations
          </span>
          <h2 className="font-serif text-4xl text-navy md:text-5xl">Clinical Focus</h2>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {focuses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group flex flex-col border border-gray-100 bg-white p-10 transition-all hover:border-gray-200 hover:shadow-sm"
            >
              <span className="mb-8 font-serif text-3xl italic text-gray-200 transition-colors group-hover:text-navy/20">
                {item.num}
              </span>
              <h3 className="mb-4 font-serif text-2xl text-navy">{item.title}</h3>
              <p className="mb-8 flex-1 text-slate-500 leading-relaxed">
                {item.desc}
              </p>
              <Link href={`/specialties/${item.slug}`} className="group/btn flex items-center gap-2 text-sm font-medium text-navy">
                Learn More 
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

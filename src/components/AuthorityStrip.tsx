"use client";

import { Award, ShieldCheck, Stethoscope, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const authorities = [
  { icon: ShieldCheck, text: "Board Certified Surgeon" },
  { icon: Award, text: "Fellow of the ACS" },
  { icon: Stethoscope, text: "20+ Years Experience" },
  { icon: BookOpen, text: "50+ Peer-Reviewed Publications" },
];

export function AuthorityStrip() {
  return (
    <div className="w-full bg-white border-y border-slate-100 py-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-12 px-8 md:grid-cols-4 divide-x divide-slate-100/50">
        {authorities.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center gap-6 text-center"
            >
              <Icon className="h-6 w-6 text-navy/40 stroke-[1.5]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.text}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

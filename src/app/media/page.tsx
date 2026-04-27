"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, PlayCircle } from "lucide-react";

const videos = [
  { id: 1, title: "Robotic Prostatectomy", category: "Robotic" },
  { id: 2, title: "Urethroplasty Technique", category: "Reconstructive" },
  { id: 3, title: "Complex Gender Reassignment", category: "Reconstructive" },
  { id: 4, title: "Laser Lithotripsy", category: "Endourology" },
  { id: 5, title: "Micro-TESE", category: "Andrology" },
  { id: 6, title: "Female Pelvic Floor Repair", category: "Female Urology" },
];

const categories = ["All", "Reconstructive", "Robotic", "Endourology", "Andrology", "Female Urology"];

export default function MediaPage() {
  const [filter, setFilter] = useState("All");

  const filteredVideos = filter === "All" 
    ? videos 
    : videos.filter(v => v.category === filter);

  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-slate-50 min-h-screen py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl text-navy mb-6">Media Suite</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
              An archive of surgical masterclasses, educational procedure content, and categorized media presentations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  filter === cat ? "bg-navy text-white" : "bg-white border border-gray-200 text-slate-500 hover:border-navy hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredVideos.map((video) => (
                <motion.div
                  layout
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-video bg-gray-900 border-b border-gray-100 flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center opacity-40">
                      <PlayCircle className="h-12 w-12 text-white/50" strokeWidth={1} />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-2">{video.category}</span>
                    <h3 className="font-serif text-xl text-navy">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

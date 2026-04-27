"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import anime from "animejs";
import { PlayCircle } from "lucide-react";

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
  const [displayedVideos, setDisplayedVideos] = useState(videos);
  const gridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      
      anime({
        targets: '.page-header-anim',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: anime.stagger(200),
        easing: 'spring(1, 80, 10, 0)'
      });
      
      anime({
        targets: '.video-card',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100, { start: 400 }),
        duration: 800,
        easing: 'spring(1, 80, 10, 0)'
      });
      return;
    }

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.video-card');
      if (cards.length > 0) {
        anime({
          targets: cards,
          opacity: [1, 0],
          scale: [1, 0.95],
          duration: 300,
          easing: 'easeInQuad',
          complete: () => {
            const nextVideos = filter === "All" ? videos : videos.filter(v => v.category === filter);
            setDisplayedVideos(nextVideos);
            
            setTimeout(() => {
              anime({
                targets: '.video-card',
                opacity: [0, 1],
                scale: [0.95, 1],
                translateY: [20, 0],
                delay: anime.stagger(100),
                duration: 600,
                easing: 'spring(1, 80, 10, 0)'
              });
            }, 50);
          }
        });
      } else {
        const nextVideos = filter === "All" ? videos : videos.filter(v => v.category === filter);
        setDisplayedVideos(nextVideos);
        
        setTimeout(() => {
          anime({
            targets: '.video-card',
            opacity: [0, 1],
            scale: [0.95, 1],
            translateY: [20, 0],
            delay: anime.stagger(100),
            duration: 600,
            easing: 'spring(1, 80, 10, 0)'
          });
        }, 50);
      }
    }
  }, [filter]);

  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-white min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-8">
          
          <div className="mb-24 md:mb-32 flex flex-col md:flex-row gap-12 items-end justify-between border-b border-slate-100 pb-12">
            <div className="page-header-anim opacity-0">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6">
                Curated Video Archives
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-navy">Media Suite</h1>
            </div>
            <p className="page-header-anim opacity-0 text-xl text-slate-500 leading-relaxed max-w-md font-light">
              An archive of surgical masterclasses, educational procedure content, and categorized media presentations.
            </p>
          </div>

          <div className="page-header-anim opacity-0 flex flex-wrap items-center gap-6 mb-16 border-b border-slate-100/50 pb-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-navy font-semibold mr-4">Filter By:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  if (filter !== cat) setFilter(cat);
                }}
                className={`text-[10px] uppercase tracking-[0.2em] transition-all pb-1 border-b ${
                  filter === cat 
                    ? "text-navy border-navy font-semibold" 
                    : "text-slate-400 border-transparent hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {displayedVideos.map((video) => (
              <div
                key={video.id}
                className="video-card opacity-0 group flex flex-col"
              >
                <div className="relative aspect-video bg-navy overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-black/10 backdrop-blur-sm">
                      <PlayCircle className="h-6 w-6 text-white ml-1" strokeWidth={1} />
                    </div>
                  </div>
                </div>
                <div className="pt-6 flex flex-col flex-1 border-b border-slate-100 pb-6 group-hover:border-navy/20 transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold mb-3">{video.category}</span>
                  <h3 className="font-serif text-2xl text-navy group-hover:text-slate-600 transition-colors">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

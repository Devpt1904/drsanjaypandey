import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Globe, Award, BookOpen } from "lucide-react";

export default function GlobalFootprintPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-white min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-8">
          
          <div className="mb-24 md:mb-32 flex flex-col md:flex-row gap-12 items-end justify-between border-b border-slate-100 pb-12">
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6">
                Legacy & Recognition
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-navy">Global Footprint</h1>
            </div>
            <p className="text-xl text-slate-500 leading-relaxed max-w-md font-light">
              Shaping the future of complex surgical care through international collaboration, academic leadership, and peer-reviewed research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            
            {/* Awards */}
            <div className="flex flex-col">
              <Award className="h-6 w-6 text-navy/40 mb-8 stroke-[1.5]" />
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-navy font-semibold mb-8 border-b border-slate-100 pb-4">
                Awards & Honors
              </h3>
              <ul className="space-y-6 text-slate-500 font-light text-sm leading-relaxed">
                <li className="pb-6 border-b border-slate-100/50">First MIUC Travelling Fellowship of the Urology Society of India (IMORU, Hamburg, Germany)</li>
                <li className="pb-6 border-b border-slate-100/50">Krishnamurthy Gold medal for "Watchful Waiting in Cancer Prostate" (SZUSICON)</li>
                <li className="pb-6 border-b border-slate-100/50">N.P. Krishnaswamy Gold medal for "Faulty Urology Accessories" (TAPASUCON)</li>
              </ul>
            </div>

            {/* Associations */}
            <div className="flex flex-col">
              <Globe className="h-6 w-6 text-navy/40 mb-8 stroke-[1.5]" />
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-navy font-semibold mb-8 border-b border-slate-100 pb-4">
                Associations
              </h3>
              <ul className="space-y-6 text-slate-500 font-light text-sm leading-relaxed">
                <li className="pb-6 border-b border-slate-100/50">Urology Society of India (USI) & Societe Internationale de Urologie (SIU)</li>
                <li className="pb-6 border-b border-slate-100/50">World Professional Association of Transgender Health (WPATH)</li>
                <li className="pb-6 border-b border-slate-100/50">8 Member Asia Pacific Overactive Bladder Board (Since 2009)</li>
              </ul>
            </div>

            {/* Publications */}
            <div className="flex flex-col">
              <BookOpen className="h-6 w-6 text-navy/40 mb-8 stroke-[1.5]" />
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-navy font-semibold mb-8 border-b border-slate-100 pb-4">
                Publications & Speaking
              </h3>
              <ul className="space-y-6 text-slate-500 font-light text-sm leading-relaxed">
                <li className="pb-6 border-b border-slate-100/50">Author, First book chapter on Botulinum Toxin in Urology</li>
                <li className="pb-6 border-b border-slate-100/50">Invited Speaker at National and International Urology Meets</li>
                <li className="pb-6 border-b border-slate-100/50">Pioneer in Botulinum toxin therapy for refractory vaginismus</li>
              </ul>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

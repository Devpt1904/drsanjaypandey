import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-white">
        {/* Editorial Hero */}
        <section className="bg-navy text-white py-32 md:py-48 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="mx-auto max-w-[1200px] px-8 relative z-10 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-6 block">
                The Surgeon
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-[1.1]">
                Mastery Through <br className="hidden md:block"/> Relentless Pursuit.
              </h1>
            </div>
            <div className="flex-1 md:pl-16 md:border-l border-white/10">
              <p className="text-xl text-white/80 leading-relaxed font-light">
                With over 25 years of experience spanning leading academic institutions and global fellowships, Dr. Pandey offers a sovereign approach to complex medical care.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy & Timeline */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[1200px] px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Philosophy */}
            <div className="lg:col-span-7 pr-0 md:pr-12">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold mb-6 block">
                Professional Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mb-8 leading-tight">
                "Mastery in surgery is an ongoing pursuit of precision. We view each patient as an individual with unique physiological architecture."
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed font-light">
                <p>
                  Having completed over 250 Complex Reconstructive procedures and pioneering Gender Reassignment surgery in India, my philosophy is rooted in restoring dignity and function through meticulous surgical craft.
                </p>
                <p>
                  By combining state-of-the-art robotic assistance with decades of tactile experience across Andrology, Endourology, and Reconstructive Urology, we offer a pathway to recovery that prioritizes long-term success and minimal intervention.
                </p>
              </div>
            </div>
            
            {/* Right Column: Experience */}
            <div className="lg:col-span-5 space-y-12">
              <div className="bg-slate-50 p-12 border border-slate-100">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold mb-10">
                  Career Trajectory
                </h3>
                <div className="space-y-10">
                  <div className="relative pl-8 border-l border-navy/10">
                    <div className="absolute w-2 h-2 bg-navy rounded-full -left-[4.5px] top-2" />
                    <h4 className="font-serif text-2xl text-navy">Kokilaben Hospital</h4>
                    <p className="text-sm text-slate-500 mt-2 font-light leading-relaxed">Joined in 2008. Currently Director of Urology, Head of Andrology & Reconstructive Urology.</p>
                  </div>
                  <div className="relative pl-8 border-l border-slate-200">
                    <div className="absolute w-2 h-2 bg-slate-300 rounded-full -left-[4.5px] top-2" />
                    <h4 className="font-serif text-2xl text-slate-700">CMC Vellore & JIPMER</h4>
                    <p className="text-sm text-slate-500 mt-2 font-light leading-relaxed">Foundational surgical excellence and rigorous academic discipline.</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy p-12 text-white">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-10">
                  Global Fellowships
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-serif text-lg text-white">Urethral Recon</h4>
                    <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mt-2">Arezzo, Italy</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-serif text-lg text-white">Gender Reassign</h4>
                    <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mt-2">Belgrade, Serbia</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-serif text-lg text-white">Genital Recon</h4>
                    <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mt-2">Munich, Germany</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-serif text-lg text-white">Robotic Urology</h4>
                    <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mt-2">Seoul, South Korea</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

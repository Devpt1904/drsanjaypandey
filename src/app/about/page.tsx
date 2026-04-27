import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-white">
        <section className="py-24 md:py-32 border-b border-gray-100">
          <div className="mx-auto max-w-[800px] px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-navy mb-8">About Dr. Sanjay Pandey</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              With over 25 years of experience spanning leading academic institutions and global fellowships, Dr. Pandey offers a sovereign approach to complex medical care.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[1000px] px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl text-navy mb-6">Professional Philosophy</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Mastery in surgery is an ongoing pursuit of precision. Having completed over 250 Complex Reconstructive procedures and pioneering Gender Reassignment surgery in India, my philosophy is rooted in viewing each patient as an individual with unique physiological architecture. 
              </p>
              <p className="text-slate-600 leading-relaxed">
                By combining state-of-the-art robotic assistance with decades of tactile experience across Andrology, Endourology, and Reconstructive Urology, we offer a pathway to recovery that prioritizes long-term success, dignity, and minimal intervention.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="bg-slate-50 p-10 border border-gray-100">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">Experience & Journey</h3>
                <div className="space-y-8">
                  <div className="relative pl-6 border-l border-gray-200">
                    <div className="absolute w-2 h-2 bg-navy rounded-full -left-[5px] top-1.5" />
                    <h4 className="font-serif text-xl text-navy">Kokilaben Hospital</h4>
                    <p className="text-sm text-slate-500 mt-1">Joined in 2008. Currently Director of Urology, Head of Andrology & Reconstructive Urology.</p>
                  </div>
                  <div className="relative pl-6 border-l border-gray-200">
                    <div className="absolute w-2 h-2 bg-gray-300 rounded-full -left-[5px] top-1.5" />
                    <h4 className="font-serif text-xl text-navy">CMC Vellore & JIPMER</h4>
                    <p className="text-sm text-slate-500 mt-1">Foundational surgical excellence and rigorous academic discipline.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 border border-gray-100 shadow-sm">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">International Training & Fellowships</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-serif text-lg text-navy">Urethral Reconstruction</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Arezzo, Italy</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-navy">Gender Reassignment</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Belgrade, Serbia</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-navy">Genital Reconstruction</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Munich, Germany</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-navy">Robotic Urology</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Seoul, South Korea</p>
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

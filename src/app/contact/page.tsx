import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TriageForm } from "@/components/booking/TriageForm";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 w-full flex flex-col lg:flex-row">
        
        {/* Left Column: Information (Deep Navy) */}
        <section className="w-full lg:w-5/12 bg-navy text-white px-8 py-20 lg:p-20 xl:p-28 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative z-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-6 block">
              Consultation & Triage
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl text-white mb-8 leading-tight">
              Exceptional care <br />begins here.
            </h1>
            <p className="text-lg text-white/70 mb-16 max-w-md leading-relaxed font-light">
              Our smart triage system ensures your inquiry is routed directly to the appropriate surgical queue for an expedited review by Dr. Sanjay Pandey's team.
            </p>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-4 flex items-center gap-2">
                  <MapPin className="h-3 w-3" /> Clinical Practice
                </h3>
                <p className="font-serif text-2xl text-white mb-2">Kokilaben Dhirubhai Ambani Hospital</p>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  Rao Saheb, Achutrao Patwardhan Marg,<br />
                  Four Bungalows, Andheri West,<br />
                  Mumbai, Maharashtra 400053
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-3 flex items-center gap-2">
                    <Mail className="h-3 w-3" /> Digital Inquiry
                  </h3>
                  <a href="mailto:inquiry@praversetech.com" className="text-sm text-white font-light hover:text-white/80 transition-colors inline-flex items-center gap-2 group">
                    inquiry@praversetech.com
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-20 pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white/50">
              <Clock className="h-4 w-4" />
              <span className="text-xs tracking-wider uppercase font-semibold">Priority Triage Active</span>
            </div>
          </div>
        </section>

        {/* Right Column: Triage Form */}
        <section className="w-full lg:w-7/12 bg-slate-50 flex items-center justify-center p-8 py-20 lg:p-20 relative">
          {/* Subtle grid background for the form side */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="w-full max-w-xl relative z-10">
            <TriageForm />
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}

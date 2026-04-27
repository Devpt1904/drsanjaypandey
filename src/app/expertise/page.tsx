import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const areasOfInterest = [
  "Genito-Urinary Reconstructions",
  "Andrology",
  "Female Urology",
  "Endourology",
  "Gender Reassignment Surgery",
  "Botulinum Toxin in Urology",
];

const treatmentsOffered = [
  "Reconstructive Urology",
  "Andrology",
  "Endourology, Female Urology",
  "Urinary Incontinence Gender Reassignment Surgery",
  "Endourology",
  "Penile Prosthesis",
  "Phalloplasty",
  "Vaginoplasty",
  "Botulinum toxin in Urology",
  "Renal stone disease",
  "Enuresis",
  "Nocturia",
  "Neuro-urology, Botulinum toxin in refractory vaginismus",
  "Robotic urology: Radical and simple nephrectomy, Robotic radical prostatectomy, Robotic Ureteric reimplantations, Robotic pyeloplasty",
];

export default function ExpertisePage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-white min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-8">
          
          <div className="mb-24 md:mb-32 flex flex-col md:flex-row gap-12 items-end justify-between border-b border-slate-100 pb-12">
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6">
                Specializations
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-navy">Clinical Expertise</h1>
            </div>
            <p className="text-xl text-slate-500 leading-relaxed max-w-md font-light">
              Delivering uncompromising surgical excellence across advanced reconstructive, robotic, and endourological disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Areas of Interest */}
            <div>
              <div className="flex items-center gap-6 mb-12">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-navy">
                  Core Domains
                </span>
                <div className="h-[1px] flex-1 bg-slate-100" />
              </div>
              
              <ul className="space-y-0">
                {areasOfInterest.map((area, idx) => (
                  <li key={idx} className="flex items-center gap-6 py-6 border-b border-slate-100/50 group">
                    <span className="font-serif text-slate-300 text-xl transition-colors group-hover:text-navy/20">0{idx + 1}</span>
                    <span className="text-slate-600 text-lg md:text-xl font-light group-hover:text-navy transition-colors">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments / Procedures Offered */}
            <div>
              <div className="flex items-center gap-6 mb-12">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-navy">
                  Surgical & Medical Interventions
                </span>
                <div className="h-[1px] flex-1 bg-slate-100" />
              </div>
              
              <ul className="space-y-0">
                {treatmentsOffered.map((treatment, idx) => (
                  <li key={idx} className="py-4 border-b border-slate-100/50 group flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2.5 transition-colors group-hover:bg-navy" />
                    <span className="text-slate-500 leading-relaxed font-light group-hover:text-navy transition-colors">{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

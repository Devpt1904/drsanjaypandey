import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Mock database
const specialties = {
  "reconstructive-urology": {
    title: "Reconstructive Urology & Urethroplasty",
    desc: "Over 318 Complex Reconstructive Urology cases and 120+ Complex Urethroplasties.",
    details: "Specializing in Inflammatory Pan Urethral Strictures repaired by Buccal Mucosal Graft Urethroplasty and Posterior Urethral Distraction Defect Strictures resulting from high velocity road traffic accidents repaired by Perineal Anastomotic Urethroplasty."
  },
  "gender-reassignment": {
    title: "Gender Reassignment Surgery",
    desc: "The only trained Indian Gender Reassignment Surgeon offering single-stage procedures.",
    details: "Over 27 comprehensive gender reassignment surgeries (18 MtF and 9 FtM). Offering the Single Stage Penile Skin Tube-Urethral Inlay Inversion Vaginoplasty and Metoidioplasty as a Single Stage Female to Male Reassignment."
  },
  "andrology": {
    title: "Andrology & Male Infertility",
    desc: "Advanced microsurgical interventions including No scalpel vasectomy and Micro-TESE.",
    details: "Precision treatments aimed at restoring fertility including Microsurgical Vasectomy Reversals, Microsurgical Varicocelectomy, and Sperm Retrieval Procedures for IVF including microdissection testicular and sperm extraction."
  },
  "female-urology": {
    title: "Female Urology & Incontinence",
    desc: "Specialized care for incontinence and Vesico-Vaginal fistula repair.",
    details: "Over 45 Minimally Invasive Trans Obturator Tape (TOT) surgeries for Stress Urinary Incontinence and 21+ complex referrals of Vesico-Vaginal fistula repaired with One Stage Complete Repair with lasting success. Pioneering Botulinum toxin therapy for refractory vaginismus."
  },
  "endourology": {
    title: "Endourology & Robotic Surgery",
    desc: "Minimally invasive management of complex kidney stones and urologic oncology.",
    details: "Pyeloplasties for PUJ obstruction, Augmentation Cystoplasty, Boari Flap Ureteroneocystotomies, Robotic radical prostatectomy, Robotic Ureteric reimplantations, and complete clearance of stones through the One Stop Stone Clinic."
  }
};

export function generateStaticParams() {
  return Object.keys(specialties).map((slug) => ({ slug }));
}

export default async function SpecialtyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = specialties[slug as keyof typeof specialties];

  if (!data) return notFound();

  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-white min-h-screen">
        <section className="py-24 md:py-32 border-b border-gray-100">
          <div className="mx-auto max-w-[1000px] px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-navy transition-colors mb-12">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-navy mb-4">
              Clinical Focus
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-navy mb-8 leading-tight">{data.title}</h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              {data.desc}
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-slate-50">
          <div className="mx-auto max-w-[1000px] px-8">
            <div className="bg-white p-12 border border-gray-100 shadow-sm">
              <h2 className="font-serif text-3xl text-navy mb-6">Procedure Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                {data.details}
              </p>
              
              <Link 
                href="/contact"
                className="inline-block bg-navy text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-navy/90 transition-colors"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Globe, Award, BookOpen } from "lucide-react";

export default function GlobalFootprintPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-white min-h-screen py-24 md:py-32">
        <div className="mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-24">
            <h1 className="font-serif text-5xl text-navy mb-6">Awards & Associations</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Shaping the future of complex surgical care through international collaboration, academic leadership, and peer-reviewed research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <Award className="h-10 w-10 text-navy mb-6 stroke-[1.5]" />
              <h3 className="font-serif text-2xl text-navy mb-4">Awards</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="pb-4 border-b border-gray-100">First MIUC Travelling Fellowship of the Urology Society of India (IMORU, Hamburg, Germany)</li>
                <li className="pb-4 border-b border-gray-100">Krishnamurthy Gold medal for "Watchful Waiting in Cancer Prostate" (SZUSICON)</li>
                <li className="pb-4 border-b border-gray-100">N.P. Krishnaswamy Gold medal for "Faulty Urology Accessories" (TAPASUCON)</li>
              </ul>
            </div>

            <div className="flex flex-col items-center text-center">
              <Globe className="h-10 w-10 text-navy mb-6 stroke-[1.5]" />
              <h3 className="font-serif text-2xl text-navy mb-4">Associations</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="pb-4 border-b border-gray-100">Urology Society of India (USI) & Societe Internationale de Urologie (SIU)</li>
                <li className="pb-4 border-b border-gray-100">World Professional Association of Transgender Health (WPATH)</li>
                <li className="pb-4 border-b border-gray-100">8 Member Asia Pacific Overactive Bladder Board (Since 2009)</li>
              </ul>
            </div>

            <div className="flex flex-col items-center text-center">
              <BookOpen className="h-10 w-10 text-navy mb-6 stroke-[1.5]" />
              <h3 className="font-serif text-2xl text-navy mb-4">Publications & Speaking</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="pb-4 border-b border-gray-100">Author, First book chapter on Botulinum Toxin in Urology</li>
                <li className="pb-4 border-b border-gray-100">Invited Speaker at National and International Urology Meets</li>
                <li className="pb-4 border-b border-gray-100">Pioneer in Botulinum toxin therapy for refractory vaginismus</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

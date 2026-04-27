import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TriageForm } from "@/components/booking/TriageForm";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-slate-50 min-h-screen">
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[1200px] px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400 mb-4 block">
                Contact & Triage
              </span>
              <h1 className="font-serif text-5xl text-navy mb-8">Request a Consultation</h1>
              <p className="text-lg text-slate-500 mb-12 max-w-md leading-relaxed">
                Our smart triage system ensures your inquiry is routed directly to the appropriate surgical queue for expedited review.
              </p>
              
              <div className="space-y-8 mt-12 bg-white p-8 border border-gray-100 shadow-sm">
                <h3 className="font-serif text-xl text-navy border-b border-gray-100 pb-4 mb-6">Clinic Location</h3>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-navy mt-1" />
                  <div>
                    <p className="font-medium text-slate-700">The Sovereign Suite</p>
                    <p className="text-sm text-slate-500 mt-1">Global Health City, 432 Medical District<br />Mumbai, MH 400001</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-navy" />
                  <p className="text-sm text-slate-600">+91 (22) 555-0198</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-navy" />
                  <p className="text-sm text-slate-600">consultations@drsterling.com</p>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-center">
              <TriageForm />
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

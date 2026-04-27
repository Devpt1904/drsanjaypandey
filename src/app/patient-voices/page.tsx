"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlayCircle } from "lucide-react";

const testimonials = [
  { id: 1, type: "written", name: "Sunil Soni", procedure: "Urology", quote: "Thank you so much Dr. Sanjay Pandey And special thanks to Dr. Gaurav Mehta." },
  { id: 2, type: "written", name: "Haji Ussi", procedure: "Reconstructive Surgery", quote: "Thanks to Dr Sanjay pandey and his team for the support and the nurses too on 9th floor it was very good, and to my cordinator Mario." },
  { id: 3, type: "written", name: "Vihaan N. Doshi", procedure: "Pediatric Urology", quote: "Can think of none other hospital than this as the services provided are excellent regarding any type of ailments." },
  { id: 4, type: "written", name: "Manjeet Singh T Anand", procedure: "General Urology", quote: "Everything was perfect like always... Above all Dr. Sanjay Pandey and Dr... hope all the very best to the entire teams." },
  { id: 5, type: "written", name: "Chhaya K. Menon", procedure: "Female Urology", quote: "Dr Sanjay Pandey is the best doctor. Your staff is amazing." },
  { id: 6, type: "written", name: "Sully A. Mringo", procedure: "Reconstructive Surgery", quote: "Everything was good thanks to Dr Pandey and team for all help the nurses on the floor and my cordinator Mario." },
  { id: 7, type: "written", name: "Malinga H. M. Sharon", procedure: "Andrology", quote: "My husband had been suffering from an enlarged prostate gland for over a decade... Kokilaben Hospital turned out to be a beacon of hope." },
  { id: 8, type: "written", name: "Laura Korevar", procedure: "General Urology", quote: "Once again, thank you for all your help and assistance whilst we were in India and especially for everything you did to help us whilst Sarah was at Kokilaben Hospital." },
];

export default function PatientVoicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-slate-50 min-h-screen py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl text-navy mb-6">Patient Voices</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Testimonials and success stories from those who have experienced our uncompromising standard of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                {item.type === "video" && (
                  <div className="relative aspect-video bg-gray-200 flex-shrink-0 flex items-center justify-center">
                    <PlayCircle className="h-12 w-12 text-navy/50" strokeWidth={1} />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-4 border-b border-gray-100 pb-2">
                    {item.procedure}
                  </span>
                  <p className="font-serif text-lg text-slate-700 italic mb-6 flex-1">
                    "{item.quote}"
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-navy">— {item.name}</p>
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

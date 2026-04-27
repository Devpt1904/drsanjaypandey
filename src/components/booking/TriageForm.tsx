"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, UploadCloud, CheckCircle2 } from "lucide-react";

type PatientStatus = "New" | "Returning" | null;
type Mode = "In-person" | "Telehealth" | null;
type Intent = "Routine" | "Second Opinion" | "Post-Op" | "Peer Referral" | null;

export function TriageForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<PatientStatus>(null);
  const [mode, setMode] = useState<Mode>(null);
  const [intent, setIntent] = useState<Intent>(null);

  const handleNext = () => setStep((s) => s + 1);

  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-gray-100 p-8 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-serif text-2xl text-navy">Consultation Request</h3>
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Step {step} of 4</span>
      </div>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-gray-50 mb-10 overflow-hidden">
        <motion.div 
          className="h-full bg-navy"
          initial={{ width: "25%" }}
          animate={{ width: `${(step / 4) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-4"
            >
              <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Patient Status</h4>
              {["New", "Returning"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setStatus(opt as PatientStatus)}
                  className={`p-4 border text-left transition-colors ${status === opt ? 'border-navy bg-slate-50 text-navy' : 'border-gray-100 hover:border-gray-200 text-slate-600'}`}
                >
                  <span className="font-medium">{opt} Patient</span>
                </button>
              ))}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-4"
            >
              <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Consultation Mode</h4>
              {["In-person", "Telehealth"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setMode(opt as Mode)}
                  className={`p-4 border text-left transition-colors ${mode === opt ? 'border-navy bg-slate-50 text-navy' : 'border-gray-100 hover:border-gray-200 text-slate-600'}`}
                >
                  <span className="font-medium">{opt}</span>
                </button>
              ))}
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-4"
            >
              <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Primary Intent</h4>
              {["Routine", "Second Opinion", "Post-Op", "Peer Referral"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setIntent(opt as Intent)}
                  className={`p-4 border text-left transition-colors ${intent === opt ? 'border-navy bg-slate-50 text-navy' : 'border-gray-100 hover:border-gray-200 text-slate-600'}`}
                >
                  <span className="font-medium">{opt}</span>
                </button>
              ))}
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-6"
            >
              <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">Final Details</h4>
              
              {intent === "Second Opinion" && (
                <div className="border border-dashed border-gray-300 bg-slate-50 p-8 flex flex-col items-center justify-center text-center gap-4">
                  <UploadCloud className="h-8 w-8 text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-navy">Secure File Upload</p>
                    <p className="text-xs text-slate-500 mt-1">Please attach previous MRI/CT scans or medical records for review.</p>
                  </div>
                  <button className="bg-white border border-gray-200 px-4 py-2 text-xs font-semibold uppercase tracking-widest hover:bg-gray-50 text-navy">
                    Select Files
                  </button>
                </div>
              )}

              <div className="grid gap-4">
                <input type="text" placeholder="Full Name" className="border border-gray-100 p-4 focus:outline-none focus:border-navy text-sm" />
                <input type="email" placeholder="Email Address" className="border border-gray-100 p-4 focus:outline-none focus:border-navy text-sm" />
                <button className="bg-navy text-white p-4 font-semibold uppercase tracking-widest text-xs hover:bg-navy/90 flex justify-center items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Complete Request
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step < 4 && (
        <div className="mt-8 flex justify-end border-t border-gray-100 pt-6">
          <button 
            onClick={handleNext}
            disabled={(step === 1 && !status) || (step === 2 && !mode) || (step === 3 && !intent)}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-navy disabled:opacity-50 hover:gap-3 transition-all"
          >
            Continue <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

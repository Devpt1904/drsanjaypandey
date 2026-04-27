"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, UploadCloud, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type PatientStatus = "New" | "Returning" | null;
type Mode = "In-person" | "Telehealth" | null;
type Intent = "Routine" | "Second Opinion" | "Post-Op" | "Peer Referral" | null;

export function TriageForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<PatientStatus>(null);
  const [mode, setMode] = useState<Mode>(null);
  const [intent, setIntent] = useState<Intent>(null);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => Math.max(1, s - 1));

  const selectAndAdvance = (setter: Function, value: any) => {
    setter(value);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setStep((s) => s + 1);
    }, 300);
  };

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) {
      setError("Please provide your name and email address.");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, mode, intent, name, email })
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || "Failed to send request. Please try again.");
      }
      
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-xl mx-auto bg-white p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100/50 rounded-sm text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="h-16 w-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="h-8 w-8 text-navy" />
        </motion.div>
        <motion.h3 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl text-navy mb-4"
        >
          Request Received
        </motion.h3>
        <motion.p 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 leading-relaxed mb-8"
        >
          Thank you, {name}. Your consultation request has been successfully routed to our triage team. You will be contacted shortly at {email}.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => window.location.reload()}
          className="text-[10px] uppercase tracking-[0.2em] text-navy font-semibold hover:text-navy/70 transition-colors"
        >
          Return to Home
        </motion.button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100/50 rounded-sm">
      <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-6">
        <h3 className="font-serif text-2xl text-navy">Consultation Request</h3>
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold bg-slate-50 px-3 py-1 rounded-full">Step {step} of 4</span>
      </div>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-slate-50 mb-10 overflow-hidden">
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
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">Patient Status</h4>
              {["New", "Returning"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => selectAndAdvance(setStatus, opt)}
                  className={`group relative p-6 border text-left transition-all overflow-hidden ${status === opt ? 'border-navy bg-navy/5 text-navy' : 'border-slate-200 hover:border-navy/30 text-slate-600'}`}
                >
                  <span className="relative z-10 font-medium tracking-wide">{opt} Patient</span>
                  {status === opt && (
                    <motion.div layoutId="activeStep1" className="absolute left-0 top-0 bottom-0 w-1 bg-navy" />
                  )}
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
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">Consultation Mode</h4>
              {["In-person", "Telehealth"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => selectAndAdvance(setMode, opt)}
                  className={`group relative p-6 border text-left transition-all overflow-hidden ${mode === opt ? 'border-navy bg-navy/5 text-navy' : 'border-slate-200 hover:border-navy/30 text-slate-600'}`}
                >
                  <span className="relative z-10 font-medium tracking-wide">{opt}</span>
                  {mode === opt && (
                    <motion.div layoutId="activeStep2" className="absolute left-0 top-0 bottom-0 w-1 bg-navy" />
                  )}
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
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">Primary Intent</h4>
              {["Routine", "Second Opinion", "Post-Op", "Peer Referral"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => selectAndAdvance(setIntent, opt)}
                  className={`group relative p-5 border text-left transition-all overflow-hidden ${intent === opt ? 'border-navy bg-navy/5 text-navy' : 'border-slate-200 hover:border-navy/30 text-slate-600'}`}
                >
                  <span className="relative z-10 font-medium tracking-wide">{opt}</span>
                  {intent === opt && (
                    <motion.div layoutId="activeStep3" className="absolute left-0 top-0 bottom-0 w-1 bg-navy" />
                  )}
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
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">Final Details</h4>
              
              {intent === "Second Opinion" && (
                <div className="border border-dashed border-slate-300 bg-slate-50/50 p-10 flex flex-col items-center justify-center text-center gap-4 group hover:bg-slate-50 transition-colors cursor-pointer">
                  <UploadCloud className="h-8 w-8 text-slate-400 group-hover:text-navy transition-colors" />
                  <div>
                    <p className="text-sm font-medium text-navy">Secure File Upload</p>
                    <p className="text-xs text-slate-500 mt-2 max-w-[250px] mx-auto leading-relaxed">Please attach previous MRI/CT scans or medical records for review.</p>
                  </div>
                  <button className="mt-2 bg-white border border-slate-200 px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] hover:border-navy hover:text-navy transition-colors text-slate-600">
                    Select Files
                  </button>
                </div>
              )}

              {error && (
                <div className="bg-red-50 text-red-600 p-4 text-xs font-medium flex items-center gap-2 border border-red-100">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {error}
                </div>
              )}

              <div className="grid gap-4">
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name" 
                  className="border border-slate-200 p-5 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all text-sm font-medium placeholder:text-slate-400 placeholder:font-normal" 
                />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address" 
                  className="border border-slate-200 p-5 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all text-sm font-medium placeholder:text-slate-400 placeholder:font-normal" 
                />
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting || !name || !email}
                  className="bg-navy text-white p-5 font-semibold uppercase tracking-[0.2em] text-[10px] hover:bg-navy/90 flex justify-center items-center gap-3 mt-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Processing...</>
                  ) : (
                    <><CheckCircle2 className="h-4 w-4" /> Complete Request</>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 min-h-[40px]">
        {step > 1 && !isSubmitting ? (
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 hover:text-navy transition-colors group"
          >
            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back
          </button>
        ) : <div />}

        {step < 4 && !isSubmitting && (
          <button 
            onClick={handleNext}
            disabled={(step === 1 && !status) || (step === 2 && !mode) || (step === 3 && !intent)}
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy disabled:opacity-50 hover:gap-3 transition-all"
          >
            Continue <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

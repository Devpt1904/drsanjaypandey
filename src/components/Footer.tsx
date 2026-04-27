export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12 md:py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 md:gap-8 px-6 md:px-8">
        <div className="font-serif text-xl md:text-2xl text-navy">Dr. Sanjay Pandey</div>
        <div className="mt-6 md:mt-8 max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-2">Medical Disclaimer</p>
          <p className="text-[10px] md:text-[11px] leading-relaxed text-slate-400">
            The content provided on this website is intended for general educational and informational purposes only and does not constitute professional medical advice, diagnosis, or treatment. All surgical case studies and testimonials have been de-identified and shared with explicit patient consent in accordance with HIPAA regulations. Individual results may vary.
          </p>
        </div>

        <div className="mt-4 text-[9px] md:text-[10px] tracking-wider uppercase text-slate-300 text-center">
          &copy; {new Date().getFullYear()} Dr. Sanjay Pandey. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

"use client";

import anime from "animejs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Expertise", href: "/expertise" },
  { name: "Awards & Associations", href: "/global-footprint" },
  { name: "Media Suite", href: "/media" },
  { name: "Patient Voices", href: "/patient-voices" },
];

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const tl = anime.timeline({
      easing: 'spring(1, 80, 10, 0)'
    });

    tl.add({
      targets: '.header-logo',
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 800
    })
    .add({
      targets: '.header-nav-item',
      opacity: [0, 1],
      translateY: [-10, 0],
      delay: anime.stagger(50)
    }, '-=600')
    .add({
      targets: '.header-btn',
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: 600
    }, '-=600');
  }, []);

  // Prevent scrolling when mobile menu is open and handle animations
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      anime({
        targets: '.mobile-nav-item',
        translateX: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(50, { start: 200 }),
        easing: 'easeOutQuart',
        duration: 600
      });
      
      anime({
        targets: '.mobile-nav-divider',
        scaleX: [0, 1],
        opacity: [0, 1],
        delay: 400,
        easing: 'easeOutQuart',
        duration: 800
      });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="mx-auto flex h-28 max-w-[1200px] items-center justify-between px-6 md:px-8">
          <Link href="/" className="header-logo opacity-0 relative z-50 text-xl md:text-2xl font-serif text-navy hover:opacity-80 transition-opacity">
            Dr. Sanjay Pandey
          </Link>
          
          <nav className="hidden lg:flex gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith("/expertise") && link.href.includes("expertise"));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-nav-item opacity-0 relative text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${isActive ? 'text-navy' : 'text-slate-400 hover:text-navy'}`}
                >
                  {link.name}
                  {isActive && (
                    <div
                      className="absolute -bottom-2 left-0 right-0 h-[1px] bg-navy"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link 
            href="/contact"
            className="header-btn opacity-0 hidden lg:flex bg-navy text-white px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] hover:bg-navy/90 transition-colors"
          >
            Book Consultation
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="header-btn opacity-0 lg:hidden relative z-[60] flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-[1.5px] bg-navy transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-navy transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-navy transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-navy/40 backdrop-blur-sm z-[45] lg:hidden transition-opacity duration-500 ease-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-[400px] bg-white z-[50] lg:hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex-1 overflow-y-auto px-8 pt-32 pb-12 flex flex-col justify-between">
          <nav className="flex flex-col gap-8 mt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith("/expertise") && link.href.includes("expertise"));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`mobile-nav-item opacity-0 text-xl font-serif tracking-wide transition-colors ${isActive ? 'text-navy' : 'text-slate-500'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="mt-12">
            <div className="mobile-nav-divider opacity-0 w-full h-[1px] bg-slate-100 mb-8 origin-left" />
            
            <div className="mobile-nav-item opacity-0">
              <Link 
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex justify-center w-full bg-navy text-white px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-navy/90 transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

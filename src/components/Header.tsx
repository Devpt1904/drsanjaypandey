"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-slate-100">
      <div className="mx-auto flex h-28 max-w-[1200px] items-center justify-between px-8">
        <Link href="/" className="text-2xl font-serif text-navy hover:opacity-80 transition-opacity">
          Dr. Sanjay Pandey
        </Link>
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith("/expertise") && link.href.includes("expertise"));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${isActive ? 'text-navy' : 'text-slate-400 hover:text-navy'}`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-navy"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <Link 
          href="/contact"
          className="bg-navy text-white px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] hover:bg-navy/90 transition-colors"
        >
          Book Consultation
        </Link>
      </div>
    </header>
  );
}

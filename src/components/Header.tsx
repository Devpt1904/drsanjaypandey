"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Expertise", href: "/specialties/reconstructive-urology" },
  { name: "Awards & Associations", href: "/global-footprint" },
  { name: "Media Suite", href: "/media" },
  { name: "Patient Voices", href: "/patient-voices" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto flex h-24 max-w-[1200px] items-center justify-between px-8">
        <Link href="/" className="text-2xl font-serif text-navy">
          Dr. Sanjay Pandey
        </Link>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith("/specialties") && link.href.includes("specialties"));
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-slate-600 hover:text-navy transition-colors"
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-navy"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <Link 
          href="/contact"
          className="bg-navy text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-navy/90 transition-colors"
        >
          Book Consultation
        </Link>
      </div>
    </header>
  );
}

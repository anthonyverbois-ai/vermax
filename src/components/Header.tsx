"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { label: "Tarifs", href: "#tarifs" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-secondary shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
        <a href="#" aria-label="Retour en haut de page">
          <Image
            src="/images/newlogo.png"
            alt={`Logo ${BUSINESS.name}`}
            width={192}
            height={77}
            className="h-[4.2rem] w-auto object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-dark hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-text-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-secondary border-t border-secondary-dark px-4 py-3 flex flex-col gap-4"
          aria-label="Navigation mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-dark hover:text-primary font-medium py-1 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

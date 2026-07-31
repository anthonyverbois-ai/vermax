"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const navLinks = [
  { label: "Tarifs", href: "#tarifs" },
  { label: "Services", href: "#services" },
  { label: "Nos Locaux", href: "#galerie" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contact", href: "#contact" },
  { label: "Accueil & PMR", href: "#permanence-pmr" },
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
            width={173}
            height={69}
            className="h-[3.8rem] w-auto object-contain"
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
          <a
            href={BUSINESS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-1.5 text-sm font-semibold"
            aria-label="Rejoindre La Pause Laverie sur Instagram"
            title="S'abonner sur Instagram"
          >
            <InstagramIcon size={20} />
          </a>
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
          <a
            href={BUSINESS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rose-600 font-semibold py-1"
            onClick={() => setMenuOpen(false)}
          >
            <InstagramIcon size={20} />
            <span>Suivez-nous sur Instagram</span>
          </a>
        </nav>
      )}
    </header>
  );
}

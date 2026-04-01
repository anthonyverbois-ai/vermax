import { BUSINESS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p>
          © {year} {BUSINESS.name} — Tous droits réservés
        </p>
        <a
          href="/mentions-legales"
          className="text-white/70 hover:text-white transition-colors underline underline-offset-2"
          aria-label="Lire les mentions légales"
        >
          Mentions légales
        </a>
      </div>
    </footer>
  );
}

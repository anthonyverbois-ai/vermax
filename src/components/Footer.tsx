import { BUSINESS } from "@/lib/constants";

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p>
          © {year} {BUSINESS.name} — Tous droits réservés
        </p>
        <div className="flex items-center gap-6">
          <a
            href={BUSINESS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5"
            aria-label="Voir notre profil Instagram"
          >
            <InstagramIcon size={16} className="text-rose-400" />
            <span>{BUSINESS.instagram.handle}</span>
          </a>
          <a
            href="/mentions-legales"
            className="text-white/70 hover:text-white transition-colors underline underline-offset-2"
            aria-label="Lire les mentions légales"
          >
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}

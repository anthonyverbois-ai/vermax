"use client";

import Image from "next/image";
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

export default function InstagramFeed() {
  const hasWidget = Boolean(BUSINESS.instagram.widgetIframeUrl);

  return (
    <section id="instagram" className="py-16 bg-white border-t border-secondary-dark/40">
      <div className="max-w-5xl mx-auto px-4">
        {/* Titre de section parfaitement aligné sur la charte globale du site */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-text-dark mb-2">
            Suivez-nous sur Instagram
          </h2>
          <p className="text-text-light text-base max-w-xl mx-auto">
            Plongez dans les coulisses de La Pause Laverie !
          </p>
        </div>

        {/* Carte Profil Instagram reprenant le style des cartes du site (Tarifs / PMR) */}
        <div className="bg-secondary rounded-xl p-6 sm:p-8 shadow-sm border border-secondary-dark/50 max-w-xl mx-auto text-center space-y-5">
          {/* Avatar avec cercle d'accentuation */}
          <div className="relative inline-block p-1 rounded-full bg-primary/10 border border-primary/20">
            <div className="bg-white p-1 rounded-full">
              <Image
                src="/images/newlogo.png"
                alt={BUSINESS.name}
                width={72}
                height={72}
                className="rounded-full object-cover h-18 w-18 bg-white"
              />
            </div>
          </div>

          {/* Nom & Infos */}
          <div className="space-y-1">
            <h3 className="font-semibold text-text-dark text-xl sm:text-2xl">{BUSINESS.instagram.name}</h3>
            <p className="text-sm font-medium text-primary">{BUSINESS.instagram.handle}</p>
            <p className="text-xs text-text-light pt-1">Laverie libre-service &amp; Blanchisserie • Compiègne</p>
          </div>

          {/* Bouton S'abonner respectant le style bouton principal (Primary) du site */}
          <div className="pt-2">
            <a
              href={BUSINESS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium text-sm px-6 py-3 rounded-xl transition-colors shadow-xs w-full sm:w-auto"
              aria-label="S'abonner à La Pause Laverie sur Instagram"
            >
              <InstagramIcon size={18} />
              <span>S&apos;abonner sur Instagram</span>
            </a>
          </div>
        </div>

        {/* Affichage optionnel du Widget iFrame uniquement s'il est configuré */}
        {hasWidget && (
          <div className="mt-10 w-full rounded-xl overflow-hidden shadow-sm border border-secondary-dark/50 bg-white p-2">
            <iframe
              src={BUSINESS.instagram.widgetIframeUrl}
              className="w-full min-h-[450px] border-0 rounded-lg"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Feed Instagram La Pause Laverie en direct"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}

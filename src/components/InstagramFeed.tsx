"use client";

import { Sparkles } from "lucide-react";
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
    <section id="instagram" className="py-16 md:py-20 bg-white border-t border-secondary-dark/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* En-tête de section (sans le badge "Feed Instagram en direct") */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl font-extrabold text-text-dark sm:text-4xl tracking-tight">
            Suivez-nous sur Instagram
          </h2>

          <p className="text-text-light text-base sm:text-lg font-medium">
            Plongez dans les coulisses de La Pause Laverie !
          </p>
        </div>

        {/* Carte Profil Instagram avec l'identité visuelle propre à Instagram (Gradient & Style moderne) */}
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-500/10 border border-slate-200/80 max-w-lg mx-auto text-center space-y-6 transition-all hover:shadow-2xl hover:shadow-rose-500/15">
          {/* Avatar avec anneau dégradé Instagram */}
          <div className="relative inline-block p-1.5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-md shadow-rose-500/20">
            <div className="bg-white p-1 rounded-full">
              <Image
                src="/images/newlogo.png"
                alt={BUSINESS.name}
                width={80}
                height={80}
                className="rounded-full object-cover h-20 w-20 bg-secondary"
              />
            </div>
          </div>

          {/* Informations du compte */}
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5">
              <h3 className="font-extrabold text-text-dark text-xl sm:text-2xl tracking-tight">
                {BUSINESS.instagram.name}
              </h3>
              <Sparkles size={18} className="text-amber-500 fill-amber-500" />
            </div>
            <p className="text-sm font-semibold text-rose-600">{BUSINESS.instagram.handle}</p>
            <p className="text-xs text-text-light/80 pt-1 font-medium">
              Laverie libre-service &amp; Blanchisserie • Compiègne
            </p>
          </div>

          {/* Bouton S'abonner aux couleurs dégradées Instagram */}
          <div className="pt-2">
            <a
              href={BUSINESS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-95 transition-all shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 active:scale-98"
              aria-label="S'abonner à La Pause Laverie sur Instagram"
            >
              <InstagramIcon size={20} />
              <span>S&apos;abonner</span>
            </a>
          </div>
        </div>

        {/* Affichage optionnel du Widget iFrame uniquement s'il est configuré */}
        {hasWidget && (
          <div className="mt-10 w-full rounded-2xl overflow-hidden shadow-sm border border-secondary-dark/30 bg-white p-2">
            <iframe
              src={BUSINESS.instagram.widgetIframeUrl}
              className="w-full min-h-[450px] border-0 rounded-xl"
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

"use client";

import { Clock, Phone, Info } from "lucide-react";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function PermanencePMR() {
  const whatsappPmrUrl = `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(
    BUSINESS.whatsapp.pmrMessage
  )}`;

  return (
    <section id="permanence-pmr" className="py-16 md:py-20 bg-secondary border-t border-secondary-dark/30">
      <div className="max-w-5xl mx-auto px-4">
        {/* Titre de section aligné avec le reste du site */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-text-dark mb-2">
            Accueil &amp; Accessibilité PMR
          </h2>
          <p className="text-text-light text-base max-w-xl mx-auto">
            Permanence d&apos;accueil à la laverie et rampe d&apos;accès amovible sur demande
          </p>
        </div>

        {/* Carte principale reprenant exactement le style des cartes 'Tarifs' et 'Blanchisserie' */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-secondary-dark/40">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Colonne Gauche : Logo Officiel PMR */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-4 bg-secondary rounded-xl border border-secondary-dark/30 shadow-xs">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-3">
                <Image
                  src="/images/logo-pmr.png"
                  alt="Rampe d'accès PMR - Amovible sur demande"
                  fill
                  sizes="(max-width: 768px) 144px, 176px"
                  className="object-contain rounded-lg"
                />
              </div>
              <span className="inline-block bg-primary/10 text-primary font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                Rampe d&apos;accès PMR
              </span>
              <span className="text-xs text-text-light mt-1 font-medium">
                Amovible sur demande
              </span>
            </div>

            {/* Colonne Droite : Informations pratiques */}
            <div className="md:col-span-8 space-y-6">
              
              {/* Horaires de présence */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-2.5 rounded-lg shrink-0 mt-0.5">
                  <Clock size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark text-base mb-1">
                    Permanence d&apos;accueil
                  </h3>
                  <p className="text-text-light text-sm">
                    Je suis présente à la laverie :
                  </p>
                  <p className="text-text-dark font-medium text-sm sm:text-base mt-1">
                    <strong className="text-text-dark font-semibold">Lundi, Mardi, Jeudi, Vendredi</strong> —{" "}
                    <span className="inline-block bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-md ml-1">
                      14h00 à 16h00
                    </span>
                  </p>
                </div>
              </div>

              {/* Téléphone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-2.5 rounded-lg shrink-0 mt-0.5">
                  <Phone size={22} aria-hidden="true" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-text-dark text-base mb-1">
                      Contact direct
                    </h3>
                    <p className="text-text-light text-sm">
                      En dehors de ces horaires, vous pouvez me joindre par téléphone :
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium text-sm px-4 py-2 rounded-xl transition-colors shadow-xs"
                    >
                      <Phone size={16} />
                      <span>{BUSINESS.phoneDisplay}</span>
                    </a>
                    <a
                      href={whatsappPmrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium text-sm px-4 py-2 rounded-xl transition-colors shadow-xs"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Information collecte & livraison */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/60 border border-secondary-dark/30">
                <div className="bg-primary/10 text-primary p-2 rounded-lg shrink-0 mt-0.5">
                  <Info size={18} aria-hidden="true" />
                </div>
                <p className="text-text-light text-sm leading-relaxed">
                  Je suis souvent en tournée pour les collectes et les livraisons de linge. N&apos;hésitez pas à m&apos;appeler ou à m&apos;envoyer un message WhatsApp, je vous recontacterai dès que possible.
                </p>
              </div>

              {/* Message de politesse */}
              <p className="text-sm text-text-light italic text-right pt-1">
                Merci pour votre compréhension !
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

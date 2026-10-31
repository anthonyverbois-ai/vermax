import Image from "next/image";
import { Droplet, Gift } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const TAMPONS = 10;

// Format carte bancaire (85,6 × 54 mm). Les tailles internes sont en cqw
// (% de la largeur de la carte) pour que tout le contenu suive la taille de la carte.
export default function CarteFidelite() {
  return (
    <article
      aria-labelledby="carte-fidelite-titre"
      className="@container relative overflow-hidden mx-auto mt-12 w-full max-w-[400px] aspect-[85.6/53.98] rounded-2xl bg-secondary border border-secondary-dark shadow-md"
    >
      <div className="relative z-10 h-full flex flex-col gap-[4cqw] p-[5.5cqw]">
        <div className="flex items-center gap-[3cqw]">
          <Image
            src="/images/newlogo.png"
            alt={`Logo ${BUSINESS.name}`}
            width={64}
            height={64}
            className="w-[12cqw] h-[12cqw]"
          />
          <h3
            id="carte-fidelite-titre"
            className="text-[6.5cqw] leading-tight font-semibold text-text-dark"
          >
            Carte de fidélité
          </h3>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center gap-[3.5cqw]">
          <ul className="flex flex-col gap-[2cqw] text-[3.5cqw] leading-snug text-text-dark">
            <li className="flex items-start gap-[1.5cqw]">
              <Droplet className="text-primary shrink-0 w-[4.4cqw] h-[4.4cqw]" aria-hidden="true" />
              <span>
                1 lavage = <strong className="font-semibold whitespace-nowrap">1 tampon</strong>
              </span>
            </li>
            <li className="flex items-start gap-[1.5cqw]">
              <Gift className="text-primary shrink-0 w-[4.4cqw] h-[4.4cqw]" aria-hidden="true" />
              <span>
                10 tampons = <strong className="font-semibold whitespace-nowrap">1 lavage offert</strong>
              </span>
            </li>
          </ul>

          <ol
            className="grid grid-cols-5 gap-[1.4cqw]"
            aria-label={`${TAMPONS} cases à tamponner, la dixième donne un lavage offert`}
          >
            {Array.from({ length: TAMPONS }, (_, i) => {
              const offert = i === TAMPONS - 1;
              return (
                <li
                  key={i}
                  className={
                    offert
                      ? "w-[7.2cqw] h-[7.2cqw] rounded-[1.6cqw] bg-primary text-white flex items-center justify-center"
                      : "w-[7.2cqw] h-[7.2cqw] rounded-[1.6cqw] border-2 border-primary/30 bg-white/70"
                  }
                >
                  {offert && <Gift className="w-[4.2cqw] h-[4.2cqw]" aria-hidden="true" />}
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* Vague décorative en bas de carte, reprise de la carte papier */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-[19cqw] text-primary"
        viewBox="0 0 600 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 34 C120 6 220 56 340 30 S520 4 600 26 V80 H0 Z"
          fill="currentColor"
          opacity="0.12"
        />
        <path
          d="M0 50 C140 28 260 68 380 46 S540 28 600 44 V80 H0 Z"
          fill="currentColor"
          opacity="0.2"
        />
      </svg>
      <p className="absolute inset-x-0 bottom-[3.5cqw] z-10 text-center text-[3.8cqw] font-medium text-primary-dark">
        Merci pour votre fidélité !
      </p>
    </article>
  );
}

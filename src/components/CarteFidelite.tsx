import Image from "next/image";
import { Droplet, Gift } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const TAMPONS = 10;

export default function CarteFidelite() {
  return (
    <div className="max-w-2xl mx-auto mt-12">
      <article
        aria-labelledby="carte-fidelite-titre"
        className="relative overflow-hidden rounded-2xl bg-secondary border border-secondary-dark shadow-sm"
      >
        <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6 md:gap-8 p-6 md:p-8 pb-20 md:pb-20">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/newlogo.png"
                alt={`Logo ${BUSINESS.name}`}
                width={56}
                height={56}
                className="w-14 h-14"
              />
              <h3
                id="carte-fidelite-titre"
                className="text-2xl font-semibold text-text-dark"
              >
                Carte de fidélité
              </h3>
            </div>

            <ul className="flex flex-col gap-2 text-text-dark">
              <li className="flex items-center gap-2">
                <Droplet className="text-primary shrink-0" size={20} aria-hidden="true" />
                <span>
                  1 lavage = <strong className="font-semibold">1 tampon</strong>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Gift className="text-primary shrink-0" size={20} aria-hidden="true" />
                <span>
                  10 tampons = <strong className="font-semibold">1 lavage offert</strong>
                </span>
              </li>
            </ul>
          </div>

          <ol
            className="grid grid-cols-5 gap-2 self-center justify-self-center"
            aria-label={`${TAMPONS} cases à tamponner, la dixième donne un lavage offert`}
          >
            {Array.from({ length: TAMPONS }, (_, i) => {
              const offert = i === TAMPONS - 1;
              return (
                <li
                  key={i}
                  className={
                    offert
                      ? "w-11 h-11 md:w-12 md:h-12 rounded-lg bg-primary text-white flex items-center justify-center"
                      : "w-11 h-11 md:w-12 md:h-12 rounded-lg border-2 border-primary/30 bg-white/70"
                  }
                >
                  {offert && <Gift size={22} aria-hidden="true" />}
                </li>
              );
            })}
          </ol>
        </div>

        {/* Vague décorative en bas de carte, reprise de la carte papier */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-20 text-primary"
          viewBox="0 0 600 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 38 C120 10 220 60 340 34 S520 8 600 30 V80 H0 Z"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M0 52 C140 30 260 70 380 48 S540 30 600 46 V80 H0 Z"
            fill="currentColor"
            opacity="0.2"
          />
        </svg>
        <p className="absolute inset-x-0 bottom-4 z-10 text-center font-medium text-primary-dark">
          Merci pour votre fidélité !
        </p>
      </article>
    </div>
  );
}

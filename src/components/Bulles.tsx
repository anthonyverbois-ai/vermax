// Bulles de savon décoratives en arrière-plan des sections.
// Elles occupent le « cadre » autour du contenu, jamais la zone de texte :
// - marges gauche et droite (à côté de la colonne de contenu de 1024 px),
// - bande vide au-dessus du titre et sous le contenu de la section,
// - frontière avec la section précédente (bulles à cheval sur les deux).
// Le calque n'est pas rogné : une bulle peut déborder sur la section voisine.
// Il passe au-dessus des fonds de section (z-[1]) et sous le contenu (z-10).

import type { CSSProperties } from "react";

type Zone = "gauche" | "droite" | "haut" | "bas" | "frontiere";

type Bulle = {
  zone: Zone;
  size: number; // px
  u: number; // position 0–1 le long de la zone
  v: number; // position 0–1 en travers de la zone
  delay: number; // s
  duration: number; // s
  mobile: boolean; // affichée aussi sur mobile
};

// Largeur de la marge latérale : espace hors colonne de contenu + padding (16 px)
const GOUTTIERE = "((100% - min(1024px, 100%)) / 2 + 16px)";
// Hauteur des bandes vides en haut et en bas de section (py-16 = 64 px)
const BANDE = 56;

// [zone, nombre sur ordinateur, dont nombre sur mobile, taille min, taille max]
const REPARTITION: [Zone, number, number, number, number][] = [
  ["gauche", 7, 4, 14, 110],
  ["droite", 7, 4, 14, 110],
  ["haut", 4, 3, 12, 50],
  ["bas", 4, 3, 12, 50],
  ["frontiere", 7, 5, 16, 80],
];

// Générateur pseudo-aléatoire déterministe : même disposition à chaque rendu.
function aleatoire(graine: number) {
  let a = graine;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const arrondi = (n: number) => Math.round(n * 100) / 100;

function disposition(graine: number): Bulle[] {
  const r = aleatoire(graine);
  return REPARTITION.flatMap(([zone, nombre, nbMobile, min, max]) =>
    Array.from({ length: nombre }, (_, i) => {
      // Bulles affichées sur mobile réparties régulièrement le long de la zone
      const mobile = Math.floor(((i + 1) * nbMobile) / nombre) > Math.floor((i * nbMobile) / nombre);
      const cote = zone === "gauche" || zone === "droite";
      const t = r();
      // Sur mobile, bulles latérales moyennes, à moitié hors de l'écran (marge de 16 px)
      const size = mobile && cote ? 30 + t * 26 : min + (max - min) * (t < 0.6 ? t * 0.5 : t);
      const v = r();
      return {
        zone,
        size: Math.round(size),
        u: arrondi((i + 0.15 + r() * 0.7) / nombre),
        v: arrondi(mobile && cote ? v * 0.25 : v),
        delay: arrondi(r() * 8),
        duration: arrondi(7 + r() * 6),
        mobile,
      };
    })
  );
}

function position(b: Bulle): CSSProperties {
  const demi = b.size / 2;
  switch (b.zone) {
    case "gauche":
      return { top: `${b.u * 100}%`, left: `calc(${GOUTTIERE} * ${b.v} - ${demi}px)` };
    case "droite":
      return { top: `${b.u * 100}%`, right: `calc(${GOUTTIERE} * ${b.v} - ${demi}px)` };
    case "haut":
      return { top: `${Math.max(0, BANDE - b.size) * b.v}px`, left: `calc(${b.u * 100}% - ${demi}px)` };
    case "frontiere":
      // Centrée sur la limite haute de la section, dans les marges vides des deux sections
      return {
        top: `${Math.round(-demi + (b.v - 0.5) * 24)}px`,
        left: `calc(${b.u * 100}% - ${demi}px)`,
      };
    case "bas":
      return {
        top: `calc(100% - ${BANDE}px + ${Math.max(0, BANDE - b.size) * b.v}px)`,
        left: `calc(${b.u * 100}% - ${demi}px)`,
      };
  }
}

const DISPOSITIONS = [11, 23, 37, 41, 59, 67].map(disposition);

// variante 0 = première section sous l'en-tête : pas de bulles à cheval sur la photo
export default function Bulles({ variante = 0 }: { variante?: number }) {
  const bulles = DISPOSITIONS[variante % DISPOSITIONS.length].filter(
    (b) => variante > 0 || b.zone !== "frontiere"
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
      {bulles.map((b, i) => (
        <span
          key={i}
          className={`bulle${b.mobile ? "" : " hidden md:block"}`}
          style={{
            ["--taille" as string]: `${b.size}px`,
            ...position(b),
            animationDelay: `-${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

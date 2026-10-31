// Bulles de savon décoratives en arrière-plan des sections.
// Placées surtout sur les bords, derrière le contenu : les cartes (fond plein) les masquent.

type Bulle = {
  size: number; // px
  top: string;
  left?: string;
  right?: string;
  delay: number; // s
  duration: number; // s
  desktopOnly?: boolean;
};

const DISPOSITIONS: Bulle[][] = [
  [
    { size: 90, top: "8%", left: "-28px", delay: 0, duration: 9 },
    { size: 34, top: "30%", left: "4%", delay: 1.5, duration: 7, desktopOnly: true },
    { size: 18, top: "44%", left: "9%", delay: 3, duration: 6, desktopOnly: true },
    { size: 60, top: "62%", right: "-18px", delay: 0.8, duration: 10 },
    { size: 26, top: "14%", right: "6%", delay: 2.2, duration: 8, desktopOnly: true },
    { size: 120, top: "72%", left: "3%", delay: 4, duration: 12, desktopOnly: true },
  ],
  [
    { size: 70, top: "10%", right: "-22px", delay: 0.5, duration: 9 },
    { size: 22, top: "26%", right: "7%", delay: 2, duration: 6.5, desktopOnly: true },
    { size: 110, top: "50%", right: "2%", delay: 3.5, duration: 12, desktopOnly: true },
    { size: 48, top: "70%", left: "-14px", delay: 1, duration: 8 },
    { size: 30, top: "20%", left: "5%", delay: 2.8, duration: 7.5, desktopOnly: true },
    { size: 16, top: "84%", left: "10%", delay: 0.3, duration: 6, desktopOnly: true },
  ],
  [
    { size: 54, top: "6%", left: "6%", delay: 1.2, duration: 8.5, desktopOnly: true },
    { size: 100, top: "34%", left: "-36px", delay: 0, duration: 11 },
    { size: 20, top: "58%", left: "8%", delay: 2.5, duration: 6, desktopOnly: true },
    { size: 80, top: "18%", right: "3%", delay: 3, duration: 10, desktopOnly: true },
    { size: 36, top: "78%", right: "-10px", delay: 1.8, duration: 7.5 },
  ],
];

export default function Bulles({ variante = 0 }: { variante?: number }) {
  const bulles = DISPOSITIONS[variante % DISPOSITIONS.length];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {bulles.map((b, i) => (
        <span
          key={i}
          className={`bulle${b.desktopOnly ? " hidden md:block" : ""}`}
          style={{
            ["--taille" as string]: `${b.size}px`,
            top: b.top,
            left: b.left,
            right: b.right,
            animationDelay: `-${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

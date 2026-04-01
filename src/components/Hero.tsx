import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] md:min-h-[80vh]">
      {/* Background image */}
      <Image
        src="/images/devanture.jpeg"
        alt="Devanture de La Pause Laverie à Compiègne"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-primary-dark/75" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
          {BUSINESS.name}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          {BUSINESS.tagline}
        </p>
        <a
          href="#tarifs"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-sm"
          aria-label="Voir nos tarifs"
        >
          Voir nos tarifs
        </a>
      </div>
    </section>
  );
}

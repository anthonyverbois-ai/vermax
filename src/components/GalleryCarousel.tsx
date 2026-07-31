"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X, Pause, Play } from "lucide-react";

const IMAGES = [
  {
    src: "/images/main.jpg",
    alt: "Devanture de La Pause Laverie",
  },
  {
    src: "/images/secondary1.jpg",
    alt: "Rangée de machines à laver modernes",
  },
  {
    src: "/images/secondary2.jpg",
    alt: "Centrale de paiement et accès PMR",
  },
  {
    src: "/images/secondary3.jpg",
    alt: "Vue panoramique intérieure de la laverie",
  },
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Touch swipe states
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying || isLightboxOpen) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, isLightboxOpen, nextSlide]);

  // Keyboard navigation for lightbox & carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "Escape" && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isLightboxOpen]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="galerie" className="py-16 md:py-20 bg-secondary border-t border-secondary-dark/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-text-dark mb-3">
            Nos Locaux
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Main Carousel Frame */}
        <div
          className="relative group rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 aspect-[4/3] md:aspect-[16/9] max-h-[580px]"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Image Slider */}
          <div className="relative w-full h-full">
            {IMAGES.map((img, index) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={index === 0}
                  className="object-cover cursor-pointer select-none"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  onClick={() => setIsLightboxOpen(true)}
                />
              </div>
            ))}
          </div>

          {/* Action Overlay Controls */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/20 opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 md:p-6">
            {/* Top Bar (Fullscreen Zoom & Autoplay Toggle) */}
            <div className="flex justify-end gap-3 pointer-events-auto">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white transition-all transform hover:scale-105"
                aria-label={isPlaying ? "Mettre en pause le défilement" : "Lancer le défilement"}
                title={isPlaying ? "Pause" : "Lecture"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white transition-all transform hover:scale-105"
                aria-label="Agrandir l'image"
                title="Plein écran"
              >
                <Maximize2 size={18} />
              </button>
            </div>

            {/* Middle Nav Buttons (Desktop & Mobile) */}
            <div className="flex justify-between items-center w-full pointer-events-auto">
              <button
                type="button"
                onClick={prevSlide}
                className="p-3 rounded-full bg-black/40 hover:bg-primary backdrop-blur-md text-white transition-all transform hover:scale-110 shadow-lg"
                aria-label="Image précédente"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-3 rounded-full bg-black/40 hover:bg-primary backdrop-blur-md text-white transition-all transform hover:scale-110 shadow-lg"
                aria-label="Image suivante"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Dots Indicator */}
            <div className="flex justify-center items-center gap-2 pointer-events-auto pb-2">
              {IMAGES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Aller à la diapositive ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Row */}
        <div className="grid grid-cols-4 gap-3 md:gap-4 mt-6">
          {IMAGES.map((img, index) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-[16/10] rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? "ring-4 ring-primary scale-[1.02] shadow-lg"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 200px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Fullscreen Preview) */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fermer la vue plein écran"
          >
            <X size={28} />
          </button>

          {/* Previous image button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/10 hover:bg-primary text-white transition-all transform hover:scale-110"
            aria-label="Image précédente"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Fullscreen Image Container */}
          <div
            className="relative w-full max-w-6xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMAGES[currentIndex].src}
              alt={IMAGES[currentIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next image button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/10 hover:bg-primary text-white transition-all transform hover:scale-110"
            aria-label="Image suivante"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}

"use client";

import { Heart, MessageCircle, ExternalLink, Sparkles } from "lucide-react";
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

// Exemples de publications Instagram représentatives de La Pause Laverie
const instagramPosts = [
  {
    id: "post-1",
    imageUrl: "/images/devanture.jpeg",
    caption: "Bienvenue à La Pause Laverie à Compiègne ! Un espace propre, moderne et chaleureux pour votre linge 🧺✨",
    likes: "48",
    comments: "5",
    link: BUSINESS.instagram.url,
    tag: "Actualité",
  },
  {
    id: "post-2",
    imageUrl: "/images/devanture.jpeg",
    caption: "Nouveau service blanchisserie & ramassage de couettes ! Profitez de vos week-ends, on s'occupe de tout 💙",
    likes: "62",
    comments: "8",
    link: BUSINESS.instagram.url,
    tag: "Services",
  },
  {
    id: "post-3",
    imageUrl: "/images/devanture.jpeg",
    caption: "Accès PMR & permanence assurée tous les mardis et jeudis matins. À votre service ! ♿🤝",
    likes: "39",
    comments: "3",
    link: BUSINESS.instagram.url,
    tag: "Inclusivité",
  },
  {
    id: "post-4",
    imageUrl: "/images/devanture.jpeg",
    caption: "Nos machines de 10kg, 15kg et 20kg sont prêtes pour vos couettes et linge de maison ! 🚀🧼",
    likes: "55",
    comments: "6",
    link: BUSINESS.instagram.url,
    tag: "Équipements",
  },
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-16 bg-gradient-to-b from-white to-secondary/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-purple-600/10 border border-rose-500/20 text-rose-600 text-xs font-semibold uppercase tracking-wider">
            <InstagramIcon size={14} className="animate-pulse" />
            <span>Feed Instagram</span>
          </div>

          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">
            Suivez-nous sur Instagram
          </h2>

          <p className="text-text-light text-base">
            Plongez dans les coulisses de <strong>{BUSINESS.name}</strong>, découvrez nos astuces entretien du linge et restez informé des actualités à Compiègne.
          </p>
        </div>

        {/* Carte Profil Instagram */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-dark/40 mb-10 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 transition-all hover:shadow-md">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shrink-0">
              <div className="bg-white p-0.5 rounded-full">
                <Image
                  src="/images/newlogo.png"
                  alt={BUSINESS.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover h-14 w-14 bg-secondary"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5">
                <h3 className="font-bold text-text-dark text-lg">{BUSINESS.instagram.name}</h3>
                <Sparkles size={16} className="text-amber-500 fill-amber-500" />
              </div>
              <p className="text-sm text-text-light font-medium">{BUSINESS.instagram.handle}</p>
              <p className="text-xs text-text-light/80 mt-0.5">Laverie libre-service & Blanchisserie • Compiègne</p>
            </div>
          </div>

          <a
            href={BUSINESS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-95 transition-all shadow-md shadow-rose-500/20 active:scale-95"
            aria-label="S'abonner à La Pause Laverie sur Instagram"
          >
            <InstagramIcon size={18} />
            <span>S'abonner</span>
          </a>
        </div>

        {/* Grille dynamique des publications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl overflow-hidden border border-secondary-dark/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
              aria-label={`Voir la publication Instagram : ${post.caption}`}
            >
              {/* Photo avec Overlay au survol */}
              <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge Tag */}
                <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                  {post.tag}
                </div>

                {/* Overlay survol style Instagram */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  <div className="flex justify-end">
                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-6 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <Heart size={20} className="fill-white text-white" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle size={20} className="fill-white text-white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenu de la publication */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <p className="text-xs text-text-dark line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-rose-600 font-semibold group-hover:text-purple-600 transition-colors">
                  <span>Voir sur Instagram</span>
                  <InstagramIcon size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pied de section avec CTA */}
        <div className="mt-10 text-center">
          <a
            href={BUSINESS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-rose-500/30 text-rose-600 font-semibold text-sm hover:bg-rose-50 hover:border-rose-500/50 transition-all shadow-sm group"
          >
            <InstagramIcon size={18} className="group-hover:rotate-12 transition-transform" />
            <span>Rejoindre <strong>{BUSINESS.instagram.handle}</strong> sur Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}

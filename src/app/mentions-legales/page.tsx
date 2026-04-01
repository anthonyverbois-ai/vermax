import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales — La Pause Laverie",
  description: "Mentions légales de La Pause Laverie, laverie automatique à Compiègne.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-secondary">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold text-text-dark mb-8">Mentions légales</h1>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 space-y-6 text-text-dark">
          <div>
            <h2 className="font-semibold text-lg mb-1">Raison sociale</h2>
            <p>{BUSINESS.name}</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1">SIRET</h2>
            <p>{BUSINESS.siret}</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1">Adresse</h2>
            <p>
              {BUSINESS.address.street}, {BUSINESS.address.postalCode}{" "}
              {BUSINESS.address.city}
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1">
              Responsable de la publication
            </h2>
            <p>{BUSINESS.owner}</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1">Contact</h2>
            <p>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-primary hover:text-primary-dark transition-colors"
              >
                {BUSINESS.email}
              </a>{" "}
              —{" "}
              <a
                href={`tel:+${BUSINESS.whatsapp.number}`}
                className="text-primary hover:text-primary-dark transition-colors"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1">Hébergeur</h2>
            <p>
              Netlify, Inc. — 44 Montgomery Street, Suite 300, San Francisco, CA 94104,
              USA
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-primary hover:text-primary-dark font-medium transition-colors"
            aria-label="Retour à l'accueil"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

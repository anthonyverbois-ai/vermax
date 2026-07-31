import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Map from "./Map";
import { BUSINESS } from "@/lib/constants";

function InstagramIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
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

export default function Infos() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white border-t border-secondary-dark/30">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-text-dark text-center mb-10">
          Nous trouver
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Infos pratiques */}
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1 shrink-0" size={22} aria-hidden="true" />
              <div>
                <p className="font-semibold text-text-dark">Adresse</p>
                <p className="text-text-light">
                  {BUSINESS.address.street},<br />
                  {BUSINESS.address.postalCode} {BUSINESS.address.city},<br />
                  {BUSINESS.address.region}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-primary mt-1 shrink-0" size={22} aria-hidden="true" />
              <div>
                <p className="font-semibold text-text-dark">Téléphone</p>
                <a
                  href={`tel:+${BUSINESS.whatsapp.number}`}
                  className="text-primary hover:text-primary-dark transition-colors"
                  aria-label={`Appeler le ${BUSINESS.phoneDisplay}`}
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-primary mt-1 shrink-0" size={22} aria-hidden="true" />
              <div>
                <p className="font-semibold text-text-dark">Email</p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-primary hover:text-primary-dark transition-colors break-all"
                  aria-label={`Envoyer un email à ${BUSINESS.email}`}
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <InstagramIcon className="text-rose-600 mt-1 shrink-0" size={22} aria-hidden="true" />
              <div>
                <p className="font-semibold text-text-dark">Instagram</p>
                <a
                  href={BUSINESS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:text-rose-700 font-medium transition-colors"
                  aria-label={`Visiter le compte Instagram ${BUSINESS.instagram.handle}`}
                >
                  {BUSINESS.instagram.handle}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-primary mt-1 shrink-0" size={22} aria-hidden="true" />
              <div>
                <p className="font-semibold text-text-dark">Horaires</p>
                <p className="text-text-light">Ouvert tous les jours</p>
                <p className="text-text-light">{BUSINESS.hours}</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <Map />
        </div>
      </div>
    </section>
  );
}

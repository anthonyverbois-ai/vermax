import { WashingMachine, Truck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

function TarifRow({ label, price }: { label: string; price: string }) {
  return (
    <li className="flex justify-between items-center py-3 border-b border-secondary-dark last:border-0">
      <span className="text-text-dark">{label}</span>
      <span className="font-semibold text-primary">{price}</span>
    </li>
  );
}

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-16 bg-secondary">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-text-dark text-center mb-10">
          Nos tarifs
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bloc A — Laverie automatique */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <WashingMachine className="text-primary" size={28} aria-hidden="true" />
              <h3 className="text-xl font-semibold text-text-dark">
                Laverie automatique
              </h3>
            </div>
            <p className="text-text-light text-sm mb-4">
              Machines grande capacité · Lessive incluse
            </p>
            <ul className="flex-1">
              {BUSINESS.pricing.laverie.map((item) => (
                <TarifRow key={item.label} label={item.label} price={item.price} />
              ))}
            </ul>
            <p className="mt-4 text-sm text-text-light italic">
              Rapide et facile d&apos;utilisation · Linge propre et qui sent bon
            </p>
          </div>

          {/* Bloc B — Blanchisserie & Livraison */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <Truck className="text-primary" size={28} aria-hidden="true" />
              <h3 className="text-xl font-semibold text-text-dark">
                Blanchisserie &amp; Livraison
              </h3>
            </div>
            <p className="text-text-light text-sm mb-4">
              Draps · Serviettes · Linge de maison · Couettes
            </p>
            <ul className="flex-1">
              {BUSINESS.pricing.blanchisserie.map((item) => (
                <TarifRow key={item.label} label={item.label} price={item.price} />
              ))}
            </ul>
            <p className="mt-4 text-sm text-text-light italic">
              Ramassage et livraison inclus dans un rayon de 10 km
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

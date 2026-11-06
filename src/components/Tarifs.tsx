import type { ReactNode } from "react";
import { WashingMachine, Truck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import Bulles from "./Bulles";

type ArticleDouble = { label: string; plie: string; repasse: string | null };

function TarifRow({ label, price }: { label: string; price: string }) {
  return (
    <li className="flex justify-between items-center py-3 border-b border-secondary-dark last:border-0">
      <span className="text-text-dark">{label}</span>
      <span className="font-semibold text-primary">{price}</span>
    </li>
  );
}

/* Étiquettes de colonnes « Plié » (vert) / « Repassé » (beige) */
function EnteteColonnes() {
  return (
    <thead>
      <tr>
        <th scope="col" className="sr-only">Article</th>
        <th scope="col" className="w-16 sm:w-20 pb-2 text-right">
          <span className="inline-block rounded-md bg-primary-light px-2 py-1 text-xs font-semibold text-primary">
            Plié
          </span>
        </th>
        <th scope="col" className="w-16 sm:w-20 pb-2 text-right">
          <span className="inline-block rounded-md bg-accent-light px-2 py-1 text-xs font-semibold text-accent">
            Repassé
          </span>
        </th>
      </tr>
    </thead>
  );
}

function TableauDouble({ articles }: { articles: readonly ArticleDouble[] }) {
  return (
    <table className="w-full text-sm">
      <EnteteColonnes />
      <tbody>
        {articles.map((a) => (
          <tr key={a.label} className="border-b border-secondary-dark last:border-0">
            <th scope="row" className="py-2 pr-2 text-left font-normal text-text-dark">
              {a.label}
            </th>
            <td className="py-2 text-right font-semibold text-primary whitespace-nowrap">
              {a.plie}
            </td>
            <td className="py-2 text-right font-semibold text-accent whitespace-nowrap">
              {a.repasse ?? (
                <span className="text-text-light font-normal" aria-label="Non proposé">
                  —
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Carte({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col">
      <h4 className="text-base font-bold uppercase tracking-wide text-text-dark pb-3 mb-2 border-b border-secondary-dark">
        {titre}
      </h4>
      {children}
    </div>
  );
}

export default function Tarifs() {
  const { laverie, literie, lingeMaison, vetements, forfaits } = BUSINESS.pricing;

  return (
    <section id="tarifs" className="py-16 md:py-20 bg-secondary relative">
      <Bulles variante={0} />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-text-dark text-center mb-10">
          Nos tarifs
        </h2>

        {/* Bloc A — Laverie automatique (centré) */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-6 flex flex-col">
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
            {laverie.map((item) => (
              <TarifRow key={item.label} label={item.label} price={item.price} />
            ))}
          </ul>
          <p className="mt-4 text-sm text-text-light italic">
            Rapide et facile d&apos;utilisation · Linge propre et qui sent bon
          </p>
        </div>

        {/* Bloc B — Blanchisserie : tarifs à la pièce */}
        <div className="mt-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Truck className="text-primary" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-semibold text-text-dark">
              Blanchisserie &amp; Livraison
            </h3>
          </div>
          <p className="text-text-light text-sm text-center mb-6">
            Linge de maison · Literie · Vêtements
          </p>

          <div className="grid gap-5 max-w-xl mx-auto lg:max-w-none lg:grid-cols-[0.8fr_1.15fr_1fr] lg:items-start">
            <Carte titre="Literie">
              <ul>
                {literie.map((item) => (
                  <li
                    key={item.label}
                    className="flex justify-between items-center py-2.5 text-sm border-b border-secondary-dark last:border-0"
                  >
                    <span className="text-text-dark">{item.label}</span>
                    <span className="font-semibold text-primary whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </Carte>

            <Carte titre="Linge de maison">
              <TableauDouble articles={lingeMaison} />
            </Carte>

            <Carte titre="Vêtements">
              <TableauDouble articles={vetements} />
              <p className="mt-2 text-xs text-text-light">* Lavable en machine uniquement</p>
              <p className="mt-3 rounded-lg bg-primary-light px-4 py-3 text-center text-sm font-semibold text-text-dark">
                Pour toute autre demande, sur devis.
              </p>
            </Carte>
          </div>

          <div className="mt-5 bg-white rounded-xl shadow-sm px-5 py-4 text-center">
            <p className="font-semibold text-text-dark">
              Ramassage et livraison inclus dans un rayon de 10 km
            </p>
            <p className="text-xs text-text-light mt-1">
              Tarifs à la pièce · Pour les articles particuliers, contactez-nous
            </p>
          </div>
        </div>

        {/* Bloc C — Forfaits panières */}
        <div className="mt-14">
          <h3 className="text-2xl font-bold uppercase tracking-wide text-text-dark text-center">
            Forfaits panières
          </h3>
          <p className="text-text-light text-center mt-1">
            Votre linge du quotidien, pris en charge de A à Z
          </p>
          <p className="text-primary text-sm text-center mt-1 mb-6">
            Lavage · Séchage · Pliage ou repassage
          </p>

          {/* Ordinateur / tablette : 3 cartes */}
          <ul className="hidden sm:grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {forfaits.map((f) => (
              <li key={f.name} className="bg-white rounded-xl shadow-sm p-5 text-center">
                <p className="font-bold uppercase tracking-wide text-text-dark">{f.name}</p>
                <p className="text-primary mt-1 pb-3 border-b border-secondary-dark">{f.poids}</p>
                <div className="mt-4 rounded-lg bg-primary-light py-2">
                  <p className="text-xs text-text-dark">Plié</p>
                  <p className="text-2xl font-bold text-primary">{f.plie}</p>
                </div>
                <div className="mt-3 rounded-lg bg-accent-light py-2">
                  <p className="text-xs text-text-dark">Repassé</p>
                  <p className="text-2xl font-bold text-accent">{f.repasse}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Téléphone : tableau compact */}
          <div className="sm:hidden bg-white rounded-xl shadow-sm p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs uppercase">
                  <th scope="col" className="pb-2 text-left font-semibold text-text-dark">Formule</th>
                  <th scope="col" className="pb-2 text-right font-semibold text-primary">Plié</th>
                  <th scope="col" className="pb-2 text-right font-semibold text-accent">Repassé</th>
                </tr>
              </thead>
              <tbody>
                {forfaits.map((f) => (
                  <tr key={f.name} className="border-t border-secondary-dark">
                    <th scope="row" className="py-2 text-left font-normal text-text-dark">
                      {f.court}
                      <span className="text-text-light"> · {f.poids.toLowerCase()}</span>
                    </th>
                    <td className="py-2 text-right font-semibold text-primary">{f.plie}</td>
                    <td className="py-2 text-right font-semibold text-accent">{f.repasse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 max-w-4xl mx-auto bg-white rounded-xl shadow-sm px-5 py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-text-dark">Comment ça fonctionne ?</p>
              <p className="text-sm text-text-light">
                Le linge est pesé à la prise en charge. Les forfaits concernent le linge courant.
              </p>
            </div>
            <p className="text-sm font-semibold text-primary sm:text-right">
              Articles délicats ou particuliers : sur devis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

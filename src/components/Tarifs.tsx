import type { ReactNode } from "react";
import {
  WashingMachine,
  Truck,
  BedDouble,
  Bath,
  Shirt,
  ShoppingBasket,
  type LucideIcon,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import Bulles from "./Bulles";

type ArticleDouble = { label: string; plie: string; repasse: string | null };

function TarifRow({ label, price }: { label: string; price: string }) {
  return (
    <li className="flex justify-between items-center gap-4 py-3 border-b border-secondary-dark last:border-0">
      <span className="text-text-dark">{label}</span>
      <span className="font-semibold text-primary whitespace-nowrap">{price}</span>
    </li>
  );
}

/* Carte au même format que « Laverie automatique » : icône + titre, sous-titre, lignes, note. */
function CarteTarif({
  icon: Icon,
  titre,
  sousTitre,
  note,
  className = "",
  children,
}: {
  icon: LucideIcon;
  titre: string;
  sousTitre?: string;
  note?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 flex flex-col ${className}`}>
      <div className="flex items-center gap-3 mb-2">
        <Icon className="text-primary" size={28} aria-hidden="true" />
        <h3 className="text-xl font-semibold text-text-dark">{titre}</h3>
      </div>
      {sousTitre && <p className="text-text-light text-sm mb-4">{sousTitre}</p>}
      <div className="flex-1">{children}</div>
      {note && <p className="mt-4 text-sm text-text-light italic">{note}</p>}
    </div>
  );
}

/* Tableau à deux prix (plié / repassé), lignes identiques aux TarifRow. */
function TableauPlieRepasse({
  premiereColonne = "Article",
  lignes,
}: {
  premiereColonne?: string;
  lignes: readonly { key: string; label: ReactNode; plie: string; repasse: string | null }[];
}) {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-sm text-text-light">
          <th scope="col" className="pb-2 text-left font-normal">
            <span className="sr-only">{premiereColonne}</span>
          </th>
          <th scope="col" className="pb-2 pl-3 text-right font-normal">Plié</th>
          <th scope="col" className="pb-2 pl-3 text-right font-normal">Repassé</th>
        </tr>
      </thead>
      <tbody>
        {lignes.map((l) => (
          <tr key={l.key} className="border-t border-secondary-dark">
            <th scope="row" className="py-3 text-left font-normal text-text-dark">
              {l.label}
            </th>
            <td className="py-3 pl-3 text-right font-semibold text-primary whitespace-nowrap">
              {l.plie}
            </td>
            <td className="py-3 pl-3 text-right font-semibold text-primary whitespace-nowrap">
              {l.repasse ?? (
                <span className="font-normal text-text-light" aria-label="Non proposé">
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

const versLignes = (articles: readonly ArticleDouble[]) =>
  articles.map((a) => ({ key: a.label, label: a.label, plie: a.plie, repasse: a.repasse }));

export default function Tarifs() {
  const { laverie, literie, lingeMaison, vetements, forfaits } = BUSINESS.pricing;

  return (
    <section id="tarifs" className="py-16 md:py-20 bg-secondary relative">
      <Bulles variante={0} />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-text-dark text-center mb-10">
          Nos tarifs
        </h2>

        {/* Laverie automatique */}
        <CarteTarif
          icon={WashingMachine}
          titre="Laverie automatique"
          sousTitre="Machines grande capacité · Lessive incluse"
          note={<>Rapide et facile d&apos;utilisation · Linge propre et qui sent bon</>}
          className="max-w-md mx-auto"
        >
          <ul>
            {laverie.map((item) => (
              <TarifRow key={item.label} label={item.label} price={item.price} />
            ))}
          </ul>
        </CarteTarif>

        {/* Blanchisserie — tarifs à la pièce */}
        <div className="mt-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Truck className="text-primary" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-semibold text-text-dark">
              Blanchisserie &amp; Livraison
            </h3>
          </div>
          <p className="text-text-light text-sm text-center mb-8">
            Tarifs à la pièce · Ramassage et livraison inclus dans un rayon de 10 km
          </p>

          <div className="grid gap-6 max-w-xl mx-auto lg:max-w-none lg:grid-cols-3 lg:items-start">
            <CarteTarif icon={BedDouble} titre="Literie">
              <ul>
                {literie.map((item) => (
                  <TarifRow key={item.label} label={item.label} price={item.price} />
                ))}
              </ul>
            </CarteTarif>

            <CarteTarif icon={Bath} titre="Linge de maison">
              <TableauPlieRepasse lignes={versLignes(lingeMaison)} />
            </CarteTarif>

            <CarteTarif
              icon={Shirt}
              titre="Vêtements"
              note={
                <>
                  * Lavable en machine uniquement
                  <br />
                  Pour toute autre demande, sur devis.
                </>
              }
            >
              <TableauPlieRepasse lignes={versLignes(vetements)} />
            </CarteTarif>
          </div>
        </div>

        {/* Forfaits panières — une seule mise en page, ordinateur et téléphone */}
        <CarteTarif
          icon={ShoppingBasket}
          titre="Forfaits panières"
          sousTitre="Votre linge du quotidien, pris en charge de A à Z · Lavage, séchage, pliage ou repassage"
          note={
            <>
              Le linge est pesé à la prise en charge. Les forfaits concernent le linge courant.
              Articles délicats ou particuliers : sur devis.
            </>
          }
          className="max-w-xl mx-auto mt-10"
        >
          <TableauPlieRepasse
            premiereColonne="Formule"
            lignes={forfaits.map((f) => ({
              key: f.name,
              label: (
                <>
                  {f.name}
                  <span className="block text-sm text-text-light">{f.poids}</span>
                </>
              ),
              plie: f.plie,
              repasse: f.repasse,
            }))}
          />
        </CarteTarif>
      </div>
    </section>
  );
}

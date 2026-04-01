export const BUSINESS = {
  name: "La Pause Laverie",
  tagline: "Votre laverie automatique à Compiègne",
  address: {
    street: "77 Rue du Bataillon de France",
    city: "Compiègne",
    region: "Hauts-de-France",
    postalCode: "60200",
  },
  phone: "0647428949",
  phoneDisplay: "06 47 42 89 49",
  email: "sophiebuchaille@gmail.com",
  owner: "Sophie Buchaille",
  siret: "123 456 789 00012",
  hours: "7h00 – 23h00, 7j/7",
  whatsapp: {
    number: "33647428949",
    defaultMessage: "Bonjour, je souhaite des informations sur vos services.",
    pickupMessage: "Bonjour, je souhaite réserver un ramassage de linge.",
  },
  pricing: {
    laverie: [
      { label: "Lavage 10 kg", price: "6 €" },
      { label: "Lavage 15 kg", price: "8 €" },
      { label: "Lavage 20 kg", price: "12 €" },
      { label: "Séchage", price: "2,50 € / 10 min" },
    ],
    blanchisserie: [
      { label: "Couette 2 personnes", price: "25 €" },
      { label: "Oreillers ×2", price: "15 €" },
      { label: "Draps / literie coton", price: "16 €" },
      { label: "Serviettes de bain ×4", price: "12 €" },
    ],
  },
} as const;

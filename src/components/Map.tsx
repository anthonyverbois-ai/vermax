export default function Map() {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-sm">
      <iframe
        src="https://www.google.com/maps?q=75+Rue+du+Bataillon+de+France,+60200+Compi%C3%A8gne,+France&output=embed"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation La Pause Laverie — 75 Rue du Bataillon de France, Compiègne"
      />
    </div>
  );
}

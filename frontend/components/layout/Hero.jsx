// components/layout/Hero.jsx
export default function Hero() {
  return (
    <section className="py-20 text-center px-4">
      <div className="animate-fade-up">
        <span className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          ⚡ Audit énergétique gratuit
        </span>
      </div>
      <h1 className="animate-fade-up2 font-serif text-5xl md:text-6xl text-gray-900 leading-tight mb-5">
        Réduisez votre facture<br/>
        <em className="text-orange-500">ENEO MT</em> dès ce mois
      </h1>
      <p className="animate-fade-up3 text-lg text-gray-500 max-w-xl mx-auto mb-10 font-light">
        Importez votre facture Moyenne Tension. Notre IA l'analyse en 2 minutes
        et vous révèle toutes vos économies cachées.
      </p>
      <div className="animate-fade-up4 flex justify-center gap-12 mb-4">
        {[['2 min','Durée de l\'analyse'],['100%','Gratuit & confidentiel'],['15–30%','Économies moyennes']].map(([n,l]) => (
          <div key={l} className="text-center">
            <div className="font-serif text-3xl text-gray-900">{n}</div>
            <div className="text-xs text-gray-400 mt-1">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

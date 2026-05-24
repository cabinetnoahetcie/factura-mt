'use client';
// app/references/page.jsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite démarrer un audit de ma facture ENEO MT.")}`;

const REFS = [
  {
    image:   '/images/ref-hotel.jpg',
    alt:     'Hôtel audité par Cabinet Global Enerdy',
    secteur: 'Hôtellerie',
    lieu:    'Douala, Cameroun',
    desc:    "Hôtel raccordé en Moyenne Tension. Audit complet de la facturation ENEO MT. Identification d'une puissance souscrite surdimensionnée et d'un cos φ non corrigé entraînant des pénalités mensuelles non justifiées.",
    anomalies: [
      'Puissance souscrite surévaluée de 35%',
      'Cos φ = 0,74 — pénalité active chaque mois',
      'Prime fixe au-dessus du tarif réglementaire ARSEL',
    ],
    color:  'blue',
  },
  {
    image:   '/images/ref-usine.jpg',
    alt:     'Usine industrielle auditée par Cabinet Global Enerdy',
    secteur: 'Industrie',
    lieu:    'Zone industrielle, Douala',
    desc:    "Site industriel raccordé en Moyenne Tension. Analyse des 6 dernières factures ENEO MT. Détection de dépassements de puissance non signalés et d'erreurs de comptage sur deux mois consécutifs.",
    anomalies: [
      'Dépassements de puissance sur 4 mois consécutifs',
      'Erreur de comptage sur 2 mois — index mal reporté',
      'Énergie réactive facturée sans justification technique',
    ],
    color: 'green',
  },
  {
    image:   '/images/ref-ecole.jpg',
    alt:     'Bâtiment public audité par Cabinet Global Enerdy',
    secteur: 'Bâtiment public',
    lieu:    'Douala, Cameroun',
    desc:    "Établissement public raccordé en Moyenne Tension. Mission d'audit sur facture unique. Identification d'une base de calcul mauvais facteur de puissance appliquée à tort malgré un cos φ conforme au seuil réglementaire.",
    anomalies: [
      'Pénalité mauvais F.P. appliquée à tort',
      'Puissance atteinte très inférieure à la puissance souscrite',
      "Heures d'utilisation faibles non prises en compte dans la facturation",
    ],
    color: 'amber',
  },
];

const COLORS = {
  blue:  { badge:'bg-blue-600',  border:'border-blue-200',  dot:'bg-blue-500',  tag:'bg-blue-50 text-blue-700'   },
  green: { badge:'bg-green-600', border:'border-green-200', dot:'bg-green-500', tag:'bg-green-50 text-green-700' },
  amber: { badge:'bg-amber-500', border:'border-amber-200', dot:'bg-amber-500', tag:'bg-amber-50 text-amber-700' },
};

export default function References() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar onAudit={() => {}} />

      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20 px-6 text-center">
        <span className="inline-block bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Nos missions
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
          Ce que nous avons accompli<br/>
          <span className="text-blue-400">pour nos clients</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          Trois missions réalisées depuis 2022 — un hôtel, une industrie
          et un bâtiment public — pour des structures de Douala.
        </p>
      </section>

      {/* Note confidentialité */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-2">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 text-sm text-amber-800 leading-relaxed">
          <strong>Confidentialité :</strong> Conformément à notre engagement de discrétion professionnelle,
          les noms de nos clients ne sont pas divulgués sans leur accord explicite.
          Les données ci-dessous sont réelles et vérifiables sur demande.
        </div>
      </div>

      {/* Références */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {REFS.map((ref, i) => {
            const c = COLORS[ref.color];
            const reverse = i % 2 === 1;
            return (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border ${c.border}`}
              >
                {/* Image */}
                <div className={`relative h-72 lg:h-auto ${reverse ? 'lg:order-2' : ''}`}>
                  <img
                    src={ref.image}
                    alt={ref.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white ${c.badge}`}>
                      {ref.secteur}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className={`bg-white p-8 flex flex-col justify-center ${reverse ? 'lg:order-1' : ''}`}>
                  <div className="text-xs text-slate-400 font-semibold mb-2">{ref.lieu}</div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-4">{ref.secteur}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{ref.desc}</p>

                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Anomalies identifiées
                  </div>
                  <ul className="space-y-2.5">
                    {ref.anomalies.map((a, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className={`w-2 h-2 rounded-full ${c.dot} mt-1.5 flex-shrink-0`}/>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Ce que nos clients retiennent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                txt:    '"Nous ne savions pas que ces lignes de facture étaient contestables. L\'équipe nous a expliqué chaque point avec des chiffres clairs."',
                auteur: 'Directeur Administratif — Hôtellerie, Douala',
              },
              {
                txt:    '"L\'audit est gratuit, sans engagement. On n\'avait aucune raison de ne pas essayer. Le rapport reçu était très détaillé et les recommandations concrètes."',
                auteur: 'Responsable technique — Industrie, Douala',
              },
            ].map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <p className="text-slate-300 text-sm leading-relaxed italic mb-5">{t.txt}</p>
                <div className="text-blue-400 text-xs font-bold">{t.auteur}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
          Votre structure est raccordée en MT ?
        </h2>
        <p className="text-slate-500 mb-8 max-w-lg mx-auto leading-relaxed">
          Industrie, hôtel, université, grand bâtiment — déposez votre facture.
          L'analyse est gratuite et sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-sm">
            Déposer ma facture →
          </Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="bg-slate-100 text-slate-800 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all text-sm">
            Nous contacter sur WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

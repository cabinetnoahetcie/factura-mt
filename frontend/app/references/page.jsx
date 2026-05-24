'use client';
// app/references/page.jsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite démarrer un audit de ma facture ENEO MT.")}`;

const REFS = [
  {
    secteur:   'Hôtellerie',
    lieu:      'Douala, Centre-ville',
    icone:     '🏨',
    color:     'blue',
    desc:      "Hôtel classé raccordé en Moyenne Tension. Audit complet de la facturation ENEO MT. Identification d'une puissance souscrite surdimensionnée et d'un cos φ non corrigé entraînant des pénalités mensuelles.",
    anomalies: [
      'Puissance souscrite surévaluée de 35%',
      'Cos φ = 0,74 — pénalité active chaque mois',
      'Prime fixe au-dessus du tarif réglementaire',
    ],
  },
  {
    secteur:   'Industrie agroalimentaire',
    lieu:      'Zone industrielle de Douala',
    icone:     '🏭',
    color:     'green',
    desc:      "Unité de transformation agroalimentaire. Analyse des 6 dernières factures ENEO MT. Détection de dépassements de puissance non signalés et d'erreurs de comptage sur deux mois consécutifs.",
    anomalies: [
      'Dépassements de puissance sur 4 mois',
      'Erreur de comptage sur 2 mois consécutifs',
      'Énergie réactive facturée sans justification',
    ],
  },
  {
    secteur:   'Industrie agroalimentaire',
    lieu:      'Zone industrielle de Douala',
    icone:     '🌾',
    color:     'amber',
    desc:      "Deuxième unité industrielle. Mission d'audit sur facture unique. Identification d'une base de calcul mauvais facteur de puissance appliquée à tort malgré un cos φ conforme.",
    anomalies: [
      'Pénalité mauvais F.P. appliquée à tort',
      'Puissance atteinte très inférieure à la puissance souscrite',
      'Heures d\'utilisation faibles non prises en compte',
    ],
  },
];

const COLOR_MAP = {
  blue:  { bg:'bg-blue-50',  border:'border-blue-200',  badge:'bg-blue-600',  dot:'bg-blue-500'  },
  green: { bg:'bg-green-50', border:'border-green-200', badge:'bg-green-600', dot:'bg-green-500' },
  amber: { bg:'bg-amber-50', border:'border-amber-200', badge:'bg-amber-500', dot:'bg-amber-500' },
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
          Trois missions réalisées depuis 2022. Des économies réelles,
          chiffrées en FCFA, pour des entreprises de Douala.
        </p>
      </section>

      {/* Note confidentialité */}
      <div className="max-w-5xl mx-auto px-6 pt-12">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 text-sm text-amber-800 leading-relaxed">
          <strong>Confidentialité :</strong> Conformément à notre engagement de discrétion professionnelle,
          les noms de nos clients ne sont pas divulgués sans leur accord explicite.
          Les données ci-dessous sont réelles et vérifiables sur demande.
        </div>
      </div>

      {/* Références */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {REFS.map((ref, i) => {
            const c = COLOR_MAP[ref.color];
            return (
              <div key={i} className={`rounded-3xl p-8 border-2 ${c.bg} ${c.border} hover:shadow-xl transition-shadow`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 ${c.badge} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                    {ref.icone}
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">{ref.secteur}</div>
                    <div className="text-xs text-slate-400">{ref.lieu}</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{ref.desc}</p>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Anomalies identifiées
                </div>
                <ul className="space-y-2">
                  {ref.anomalies.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 flex-shrink-0`}/>
                      {a}
                    </li>
                  ))}
                </ul>
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
                auteur: 'Directeur Administratif — Hôtel, Douala',
              },
              {
                txt:    '"L\'audit est gratuit, sans engagement. On n\'avait aucune raison de ne pas essayer. Le rapport reçu était très détaillé."',
                auteur: 'Responsable technique — Industrie agroalimentaire, Douala',
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
          Votre entreprise est raccordée en MT ?
        </h2>
        <p className="text-slate-500 mb-8 max-w-lg mx-auto">
          Déposez votre facture — l'analyse est gratuite et sans engagement.
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

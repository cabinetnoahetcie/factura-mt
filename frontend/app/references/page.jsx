'use client';
// app/references/page.jsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

const REFS = [
  {
    image:   '/images/ref-hotel.jpg',
    alt:     'Hôtel audité par Cabinet Global Enerdy',
    secteur: 'Secteur hôtelier',
    sous:    'Réduction des charges opérationnelles',
    lieu:    'Douala, Cameroun',
    contexte: "Un hôtel majeur de Douala, confronté à des factures ENEO élevées, a sollicité notre expertise. L'audit a révélé des inefficacités importantes dans sa consommation énergétique.",
    anomalies: [
      { titre:'Abonnement électrique excessif',  desc:"Une puissance souscrite 35% supérieure aux besoins réels, générant des coûts fixes inutiles chaque mois." },
      { titre:'Pénalités récurrentes',           desc:"Des amendes mensuelles dues à un facteur de puissance non optimisé, impactant directement la rentabilité." },
      { titre:'Surfacturation',                  desc:"Une prime fixe appliquée au-delà des tarifs réglementaires en vigueur." },
    ],
    resultat: "Grâce à nos interventions, l'hôtel a pu significativement réduire ses charges énergétiques, améliorant ainsi sa marge opérationnelle.",
    color: 'blue',
  },
  {
    image:   '/images/ref-usine.jpg',
    alt:     'Usine industrielle auditée par Cabinet Global Enerdy',
    secteur: 'Secteur industriel',
    sous:    'Optimisation des coûts de production',
    lieu:    'Zone industrielle, Douala',
    contexte: "Une usine industrielle de la zone de Douala nous a confié l'analyse de ses factures ENEO. L'objectif était d'identifier les sources de surcoûts impactant sa production.",
    anomalies: [
      { titre:'Dépassements non signalés',   desc:"Des pénalités pour dépassement de puissance appliquées sur 4 mois consécutifs, sans que l'entreprise n'en soit informée." },
      { titre:'Erreurs de comptage',         desc:"Des index de consommation incorrectement reportés sur deux mois, entraînant une surfacturation directe." },
      { titre:'Frais d\'énergie injustifiés', desc:"Des coûts liés à l'énergie réactive facturés sans fondement technique." },
    ],
    resultat: "Notre intervention a permis à l'entreprise de récupérer les sommes indûment payées et de mettre en place des mesures pour éviter de futurs surcoûts, sécurisant ainsi son budget de production.",
    color: 'green',
  },
  {
    image:   '/images/ref-ecole.jpg',
    alt:     'Bâtiment public audité par Cabinet Global Enerdy',
    secteur: 'Secteur public',
    sous:    'Maîtrise budgétaire et conformité',
    lieu:    'Douala, Cameroun',
    contexte: "Un établissement public de Douala souhaitait s'assurer de la justesse de sa facturation ENEO. Une analyse approfondie d'une facture unique a été réalisée.",
    anomalies: [
      { titre:'Pénalités indues',      desc:"Une pénalité pour mauvais facteur de puissance appliquée à tort, alors que l'installation était conforme aux normes." },
      { titre:'Contrat inadapté',      desc:"Une puissance souscrite largement supérieure à la puissance réellement utilisée, générant des coûts fixes excessifs." },
      { titre:'Facturation incorrecte', desc:"Les spécificités des heures d'utilisation faibles n'étaient pas prises en compte, entraînant une facturation désavantageuse." },
    ],
    resultat: "L'audit a permis de corriger ces anomalies, garantissant une facturation juste et conforme, et libérant des ressources budgétaires pour l'établissement.",
    color: 'amber',
  },
];

const COLORS = {
  blue:  { top:'border-blue-500',  dot:'bg-blue-500',  badge:'bg-blue-600'  },
  green: { top:'border-green-500', dot:'bg-green-500', badge:'bg-green-600' },
  amber: { top:'border-amber-500', dot:'bg-amber-500', badge:'bg-amber-500' },
};

export default function References() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Nos missions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Des résultats concrets :{' '}
            <span className="text-blue-400">l'impact de notre expertise sur vos coûts</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Depuis 2022, Global Enerdy a accompagné avec succès diverses entreprises à Douala,
            transformant leurs défis énergétiques en opportunités d'économies significatives.
          </p>
        </div>
      </section>

      {/* Note confidentialité */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-2">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 text-sm text-amber-800 leading-relaxed">
          <strong>Confidentialité :</strong> Par respect pour la confidentialité de nos partenaires,
          les noms spécifiques ne sont pas divulgués sans leur accord, mais les données présentées
          sont réelles et attestent de notre efficacité.
        </div>
      </div>

      {/* Références */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {REFS.map((ref, i) => {
            const c = COLORS[ref.color];
            const reverse = i % 2 === 1;
            return (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-slate-100`}>
                <div className={`relative h-72 lg:h-auto ${reverse ? 'lg:order-2' : ''}`}>
                  <img src={ref.image} alt={ref.alt} className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white ${c.badge}`}>
                      {ref.secteur}
                    </span>
                  </div>
                </div>
                <div className={`bg-white p-8 flex flex-col justify-center ${reverse ? 'lg:order-1' : ''}`}>
                  <div className="text-xs text-slate-400 font-semibold mb-1">{ref.lieu}</div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">{ref.secteur}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-4">{ref.sous}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{ref.contexte}</p>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Nos découvertes</div>
                  <ul className="space-y-3 mb-5">
                    {ref.anomalies.map((a, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${c.dot} mt-1.5 flex-shrink-0`}/>
                        <div>
                          <span className="text-sm font-bold text-slate-800">{a.titre} — </span>
                          <span className="text-sm text-slate-500">{a.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-sm text-green-800 italic">
                    <strong>Résultats :</strong> {ref.resultat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Le témoignage de nos partenaires
          </h2>
          <p className="text-slate-400 text-center mb-12">La valeur de notre accompagnement</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                txt:    '"Nous ignorions que de telles économies étaient possibles. L\'équipe de Global Enerdy a su nous éclairer avec une clarté remarquable, chiffres à l\'appui, sur chaque opportunité d\'optimisation."',
                auteur: 'Directeur Administratif, Secteur Hôtelier, Douala',
              },
              {
                txt:    '"L\'approche sans engagement de Global Enerdy a été décisive. Le rapport d\'audit, d\'une précision exemplaire, nous a fourni des recommandations concrètes et immédiatement applicables."',
                auteur: 'Responsable Technique, Secteur Industriel, Douala',
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
          Votre prochaine référence : lancez votre audit gratuit
        </h2>
        <p className="text-slate-500 mb-8 max-w-lg mx-auto leading-relaxed">
          Que vous soyez une industrie, un hôtel, une université ou un grand bâtiment,
          si votre structure est raccordée en Moyenne Tension, des économies vous attendent.
        </p>
        <Link href="/" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-all text-sm">
          Déposer ma facture ENEO →
        </Link>
      </section>

      <Footer />
    </div>
  );
}

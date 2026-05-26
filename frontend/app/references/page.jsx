'use client';
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
    contexte: "Un hôtel majeur de Douala, confronté à des factures ENEO élevées, a sollicité notre expertise.",
    decouvertes: [
      "Abonnement électrique 35% supérieur aux besoins réels — des coûts fixes inutiles chaque mois.",
      "Amendes mensuelles dues à une gestion d'énergie non optimisée, impactant directement la rentabilité.",
      "Prime fixe appliquée au-delà des tarifs réglementaires en vigueur.",
    ],
    resultat: "L'hôtel a significativement réduit ses charges énergétiques, améliorant sa marge opérationnelle.",
    color: 'blue',
  },
  {
    image:   '/images/ref-usine.jpg',
    alt:     'Usine industrielle auditée par Cabinet Global Enerdy',
    secteur: 'Secteur industriel',
    sous:    'Optimisation des coûts de production',
    lieu:    'Zone industrielle, Douala',
    contexte: "Une usine industrielle de Douala nous a confié l'analyse de ses factures ENEO pour identifier les sources de surcoûts.",
    decouvertes: [
      "Pénalités de dépassement appliquées sur 4 mois consécutifs, sans que l'entreprise n'en soit informée.",
      "Index de consommation incorrectement reportés sur deux mois — surfacturation directe.",
      "Frais d'énergie facturés sans fondement technique.",
    ],
    resultat: "L'entreprise a récupéré les sommes indûment payées et sécurisé son budget de production.",
    color: 'green',
  },
  {
    image:   '/images/ref-ecole.jpg',
    alt:     'Bâtiment public audité par Cabinet Global Enerdy',
    secteur: 'Secteur public',
    sous:    'Maîtrise budgétaire et conformité',
    lieu:    'Douala, Cameroun',
    contexte: "Un établissement public de Douala souhaitait s'assurer de la justesse de sa facturation ENEO.",
    decouvertes: [
      "Pénalité appliquée à tort, alors que l'installation était conforme aux normes.",
      "Puissance souscrite largement supérieure à la puissance réellement utilisée.",
      "Spécificités des heures d'utilisation non prises en compte dans la facturation.",
    ],
    resultat: "L'audit a permis de corriger les anomalies et libérer des ressources budgétaires.",
    color: 'amber',
  },
];

const BADGE = { blue:'bg-blue-600', green:'bg-green-600', amber:'bg-amber-500' };
const DOT   = { blue:'bg-blue-500', green:'bg-green-500', amber:'bg-amber-500' };

export default function References() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Nos missions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Des résultats concrets pour nos clients
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Depuis 2022, Global Enerdy a accompagné des entreprises de Douala dans la réduction
            de leurs charges énergétiques.
          </p>
        </div>
      </section>

      {/* Note confidentialité */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-2">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 text-sm text-amber-800">
          <strong>Confidentialité :</strong> Les noms de nos clients ne sont pas divulgués
          sans leur accord. Les données présentées sont réelles et vérifiables sur demande.
        </div>
      </div>

      {/* Cas clients */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {REFS.map((ref, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <div className={`relative h-72 lg:h-auto ${reverse ? 'lg:order-2' : ''}`}>
                  <img src={ref.image} alt={ref.alt} className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white ${BADGE[ref.color]}`}>
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
                  <ul className="space-y-2.5 mb-5">
                    {ref.decouvertes.map((d, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className={`w-2 h-2 rounded-full ${DOT[ref.color]} mt-1.5 flex-shrink-0`}/>
                        {d}
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Ce que nos clients retiennent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { txt:'"Nous ignorions que de telles économies étaient possibles. L\'équipe de Global Enerdy a su nous éclairer avec une clarté remarquable, chiffres à l\'appui."', auteur:'Directeur Administratif, Secteur Hôtelier, Douala' },
              { txt:'"L\'approche sans engagement a été décisive. Le rapport d\'audit était d\'une précision exemplaire, avec des recommandations concrètes et immédiatement applicables."', auteur:'Responsable Technique, Secteur Industriel, Douala' },
            ].map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <p className="text-slate-300 text-sm leading-relaxed italic mb-5">{t.txt}</p>
                <div className="text-blue-400 text-xs font-bold">{t.auteur}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

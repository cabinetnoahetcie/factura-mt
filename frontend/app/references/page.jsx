'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

const REFS = [
  {
    image:    '/images/ref-hotel.jpg',
    alt:      'Établissement hôtelier audité par le Cabinet Global Energy',
    secteur:  'Secteur hôtelier',
    sous:     'Réduction des charges d\'exploitation',
    lieu:     'Douala, Cameroun',
    contexte: "Un établissement hôtelier de Douala, confronté à des charges énergétiques disproportionnées, a mandaté le Cabinet Global Energy pour l'audit de sa facturation d'électricité Moyenne Tension.",
    decouvertes: [
      "Puissance souscrite excédant de 35 % la puissance effectivement atteinte, générant une prime fixe mensuelle injustifiée.",
      "Pénalités contractuelles récurrentes résultant d'un facteur de puissance non conforme aux seuils réglementaires.",
      "Application d'une prime fixe supérieure aux tarifs homologués par l'ARSEL.",
    ],
    resultat: "L'audit a permis à l'établissement de réduire significativement ses charges énergétiques et d'améliorer sa marge d'exploitation.",
    color: 'blue',
  },
  {
    image:    '/images/ref-usine.jpg',
    alt:      'Site industriel audité par le Cabinet Global Energy',
    secteur:  'Secteur industriel',
    sous:     'Optimisation des coûts de production',
    lieu:     'Zone industrielle, Douala',
    contexte: "Une unité de production industrielle de la zone de Douala a sollicité le Cabinet Global Energy pour l'analyse de ses factures d'électricité Moyenne Tension, dans un contexte de maîtrise des coûts opérationnels.",
    decouvertes: [
      "Pénalités de dépassement de puissance appliquées sur quatre mois consécutifs, sans notification préalable de la part d'ENEO.",
      "Relevés d'index incorrectement reportés sur deux périodes de facturation, entraînant une surfacturation directe.",
      "Charges liées à l'énergie réactive facturées en l'absence de fondement technique justifié.",
    ],
    resultat: "Le Cabinet a permis la récupération des sommes indûment facturées et la mise en place de mesures préventives sécurisant le budget de production.",
    color: 'green',
  },
  {
    image:    '/images/ref-ecole.jpg',
    alt:      'Établissement public audité par le Cabinet Global Energy',
    secteur:  'Secteur institutionnel',
    sous:     'Maîtrise budgétaire et conformité réglementaire',
    lieu:     'Douala, Cameroun',
    contexte: "Un établissement public de Douala a sollicité le Cabinet Global Energy afin de s'assurer de la régularité de sa facturation d'électricité Moyenne Tension.",
    decouvertes: [
      "Pénalité appliquée à tort sur le facteur de puissance, alors que l'installation satisfaisait aux normes réglementaires en vigueur.",
      "Puissance souscrite sensiblement supérieure à la puissance réellement utilisée, générant des charges fixes excessives.",
      "Non-prise en compte des spécificités d'utilisation de l'établissement dans l'application de la grille tarifaire.",
    ],
    resultat: "La correction des anomalies a rétabli une facturation conforme et libéré des ressources budgétaires au bénéfice de l'établissement.",
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
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Références</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Missions conduites et résultats obtenus
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Depuis sa création en 2022, le Cabinet Global Energy a accompagné des entreprises
            et établissements de Douala dans la réduction de leurs charges électriques Moyenne Tension.
          </p>
        </div>
      </section>

      {/* Note */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-2">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 text-sm text-amber-800 leading-relaxed">
          <strong>Clause de confidentialité :</strong> Conformément à nos engagements professionnels,
          les dénominations de nos clients ne sont pas divulguées sans leur accord préalable.
          Les données ci-après sont authentiques et communicables sur demande motivée.
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
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Anomalies constatées</div>
                  <ul className="space-y-2.5 mb-5">
                    {ref.decouvertes.map((d, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className={`w-2 h-2 rounded-full ${DOT[ref.color]} mt-1.5 flex-shrink-0`}/>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-sm text-green-800">
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
            Appréciations de nos clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                txt:    '"Nous n\'avions pas conscience que de telles économies étaient réalisables. Le Cabinet Global Energy nous a présenté, avec une clarté et une rigueur remarquables, l\'ensemble des opportunités d\'optimisation identifiées."',
                auteur: 'Directeur Administratif et Financier — Secteur hôtelier, Douala',
              },
              {
                txt:    '"La démarche sans engagement préalable a été déterminante dans notre décision de recourir à leurs services. Le rapport d\'audit, d\'une précision exemplaire, nous a fourni des recommandations immédiatement opérationnelles."',
                auteur: 'Directeur Technique — Secteur industriel, Douala',
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

      <Footer />
    </div>
  );
}

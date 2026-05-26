'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

export default function APropos() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Qui sommes-nous</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Global Enerdy : l'expertise humaine{' '}
            <span className="text-blue-400">au service de vos économies</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Fondé en 2022 à Douala, Global Enerdy est un cabinet dédié à l'optimisation
            des dépenses énergétiques des entreprises camerounaises.
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-white py-16 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val:'2022', lbl:'Année de création'          },
            { val:'3',    lbl:'Clients accompagnés'        },
            { val:'48h',  lbl:'Délai de nos premières conclusions' },
            { val:'0 FCFA', lbl:'Pour l\'étude initiale'  },
          ].map(({ val, lbl }) => (
            <div key={val} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-slate-900 mb-2">{val}</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider leading-snug">{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Notre mission */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Notre mission</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
              Transformer vos coûts en opportunités
            </h2>
            <div className="space-y-5 text-slate-600 text-[15px] leading-relaxed">
              <p>
                Global Enerdy a vu le jour en 2022, motivé par une observation simple :
                de nombreuses entreprises au Cameroun subissent des surcoûts énergétiques
                évitables, sans que personne ne leur explique leur facture.
              </p>
              <p>
                Nous avons créé FacturaMT pour démystifier les factures ENEO et fournir
                une analyse professionnelle, gratuite et rapide, permettant à tout
                directeur financier de visualiser précisément les économies réalisables.
              </p>
              <p>
                Pour le détail de notre processus et de notre modèle économique, consultez
                nos pages{' '}
                <Link href="/missions" className="text-blue-600 font-semibold hover:underline">Missions</Link>
                {' '}et{' '}
                <Link href="/engagements" className="text-blue-600 font-semibold hover:underline">Engagements</Link>.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img src="/images/engineer.webp" alt="Expert Cabinet Global Enerdy"
              className="w-full h-[420px] object-cover"/>
          </div>
        </div>
      </section>

      {/* L'équipe — unique à cette page */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">L'équipe</p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Des experts dévoués à votre performance
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-[15px]">
              Derrière chaque audit FacturaMT, il y a une équipe d'experts engagés
              à maximiser vos économies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                init:  'NK',
                nom:   'Noah Kevyn Sorel',
                titre: 'Co-fondateur & Directeur Technique',
                desc:  "Expert spécialisé en maîtrise de l'énergie, il pilote nos stratégies d'optimisation et assure l'excellence technique de nos analyses.",
              },
              {
                init:  'AE',
                nom:   'Assoua Effon Cédric',
                titre: 'Expert Électricien & Audit Terrain',
                desc:  "Spécialiste de la facturation Moyenne Tension et des audits sur site, il garantit la précision de nos diagnostics et la pertinence de nos recommandations.",
              },
            ].map((m, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-5">
                  {m.init}
                </div>
                <div className="text-xl font-extrabold text-slate-900 mb-1">{m.nom}</div>
                <div className="text-sm font-semibold text-blue-600 mb-3">{m.titre}</div>
                <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

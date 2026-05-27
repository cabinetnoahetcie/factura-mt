'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

export default function Remuneration() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Missions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Rémunération
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Le Cabinet Global Energy se rémunère exclusivement au résultat,
            sur les économies que valident ses clients.
          </p>
        </div>
      </section>

      {/* Principe */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Le principe</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6 max-w-2xl leading-tight">
            Vous ne payez pas une mission à l'issue incertaine
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-16 max-w-2xl">
            Notre modèle de rémunération est conçu pour éliminer tout risque financier
            pour le client. L'étude initiale est gratuite. Les honoraires du Cabinet
            ne s'appliquent qu'en cas d'économies effectivement réalisées,
            sur la base d'un accord formalisé préalablement à la remise du rapport.
          </p>

          {/* 3 cas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: '◎',
                titre: 'Nous réalisons un audit gratuit',
                desc:  "Nous analysons votre facturation d'électricité Moyenne Tension sans contrepartie financière. Vous prenez connaissance de l'existence d'anomalies et de l'ordre de grandeur des économies potentielles.",
                color: 'border-slate-200',
              },
              {
                icon: '○',
                titre: 'Si aucun levier identifié',
                desc:  "En l'absence d'anomalie détectée, vous êtes confortés dans la régularité de votre facturation et dans vos choix contractuels. Aucun honoraire n'est dû. Aucun engagement n'a été contracté.",
                color: 'border-slate-200',
              },
              {
                icon: '●',
                titre: 'Si des économies sont identifiées',
                desc:  "Nous formalisons un accord de partenariat avant de vous remettre le rapport détaillé. Nos honoraires représentent un pourcentage des économies effectivement constatées sur vos factures réelles.",
                color: 'border-blue-600',
              },
            ].map((item, i) => (
              <div key={i} className={`border-t-4 ${item.color} pt-6`}>
                <div className="text-3xl text-slate-300 mb-5">{item.icon}</div>
                <h3 className="font-extrabold text-slate-900 text-base mb-3">{item.titre}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Comment est calculée la rémunération */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Modalités de calcul</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">
                Comment sont calculés nos honoraires ?
              </h3>
              <div className="space-y-5 text-slate-600 text-[15px] leading-relaxed">
                <p>
                  Nos honoraires sont calculés sur la base des économies réellement constatées
                  sur les factures d'électricité Moyenne Tension du client, après correction
                  des anomalies identifiées.
                </p>
                <p>
                  Le taux appliqué — compris entre <strong className="text-slate-800">30 % et 40 %</strong> des économies — est défini
                  contractuellement en fonction des spécificités du dossier. La durée de
                  l'accord est convenue ensemble, généralement entre 6 et 12 mois.
                </p>
                <p>
                  La méthode de calcul est transparente : comparaison des factures réelles
                  avant et après correction, sur la base des index de consommation et des
                  tarifs appliqués. Aucune estimation, aucun forfait.
                </p>
              </div>
            </div>

            {/* Exemple chiffré */}
            <div className="bg-slate-900 rounded-3xl p-8">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">
                Illustration chiffrée
              </p>
              <div className="space-y-4 text-sm border-b border-white/10 pb-6 mb-6">
                {[
                  { label:'Surcoût mensuel identifié',   val:'500 000 FCFA'    },
                  { label:'Durée de l\'accord',          val:'12 mois'         },
                  { label:'Économies totales réalisées', val:'6 000 000 FCFA'  },
                  { label:'Taux d\'honoraires',          val:'35 %'            },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-slate-400">{row.label}</span>
                    <span className="text-white font-bold">{row.val}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Honoraires du Cabinet</span>
                  <span className="text-blue-400 font-bold">2 100 000 FCFA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300 font-semibold text-sm">Bénéfice net client</span>
                  <span className="text-green-400 font-black text-lg">3 900 000 FCFA</span>
                </div>
              </div>
              <p className="text-slate-500 text-xs mt-6 italic leading-relaxed">
                À titre indicatif. Les paramètres sont définis contractuellement
                en fonction de chaque dossier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">
            Ce que ce modèle garantit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                titre: 'Aucun risque financier pour le client',
                desc:  "L'étude initiale est gratuite. En l'absence d'économies, aucun honoraire n'est facturé. Le client ne peut que gagner à solliciter une analyse.",
              },
              {
                titre: 'Un accord formalisé avant tout engagement',
                desc:  "Le rapport détaillé n'est remis qu'après signature de l'accord de partenariat. Le client connaît exactement les termes avant de s'engager.",
              },
              {
                titre: 'Des intérêts alignés',
                desc:  "Plus les économies réalisées sont importantes, plus nos honoraires sont élevés. Nos intérêts sont naturellement alignés sur les vôtres.",
              },
              {
                titre: 'Une base de calcul vérifiable',
                desc:  "Les économies sont calculées sur la base de vos factures réelles, avant et après correction. Chaque centime est traçable et vérifiable.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base mb-2">{item.titre}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Initier une mission sans frais ni engagement
        </h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Transmettez votre facture d'électricité Moyenne Tension.
          L'étude est gratuite et sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-sm">
            Transmettre ma facture →
          </Link>
          <Link href="/missions" className="bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-sm">
            Voir le déroulement →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

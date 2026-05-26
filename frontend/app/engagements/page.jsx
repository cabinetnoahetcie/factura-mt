'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

export default function Engagements() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Missions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Nos engagements
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Le Cabinet Global Energy fonde sa relation client sur la transparence, la rigueur
            professionnelle et un modèle de rémunération aligné sur les intérêts de chaque mandant.
          </p>
        </div>
      </section>

      {/* Modèle économique */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Modèle de rémunération</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 max-w-2xl leading-tight">
            Une rémunération strictement conditionnée aux résultats obtenus
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-12 max-w-2xl">
            L'étude initiale est conduite sans contrepartie financière. En cas d'anomalies
            identifiées, un accord de partenariat est formalisé avant la restitution du rapport
            détaillé. Les honoraires du Cabinet sont calculés sur les économies effectivement
            constatées sur les factures d'électricité Moyenne Tension du client.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              {[
                {
                  titre: 'Étude initiale gratuite',
                  desc:  "Le Cabinet conduit l'analyse préliminaire de la facturation sans contrepartie. Le client prend connaissance de l'existence d'anomalies et de l'ordre de grandeur des économies potentielles.",
                  color: 'border-green-500 bg-green-50',
                },
                {
                  titre: 'Absence d\'anomalie',
                  desc:  "En l'absence d'anomalie identifiée, le client est conforté dans la régularité de sa facturation. Aucun honoraire n'est dû. Aucun engagement n'est contracté.",
                  color: 'border-slate-300 bg-slate-50',
                },
                {
                  titre: 'Accord préalable à la restitution',
                  desc:  "En cas d'anomalies constatées, un accord de partenariat est signé avant la communication du rapport chiffré. Le client dispose d'une visibilité complète sur les modalités avant tout engagement.",
                  color: 'border-blue-600 bg-blue-50',
                },
              ].map((item, i) => (
                <div key={i} className={`border-l-4 ${item.color} rounded-r-2xl p-5`}>
                  <h3 className="font-extrabold text-slate-900 text-sm mb-2">{item.titre}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Exemple chiffré */}
            <div className="bg-slate-900 rounded-3xl p-8">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">
                Illustration chiffrée
              </p>
              <div className="space-y-4 text-sm">
                {[
                  { label:'Surcoût mensuel identifié',    val:'500 000 FCFA',   color:'text-white'      },
                  { label:'Durée de l\'accord',           val:'6 mois',         color:'text-white'      },
                  { label:'Économies totales réalisées',  val:'3 000 000 FCFA', color:'text-white'      },
                  { label:'Honoraires du Cabinet (40 %)', val:'1 200 000 FCFA', color:'text-blue-400'   },
                  { label:'Bénéfice net client (60 %)',   val:'1 800 000 FCFA', color:'text-green-400', big:true },
                ].map((row, i) => (
                  <div key={i} className={`flex justify-between ${i < 4 ? 'border-b border-white/10 pb-4' : 'pt-1'}`}>
                    <span className="text-slate-400">{row.label}</span>
                    <span className={`font-bold ${row.color} ${row.big ? 'text-base' : ''}`}>{row.val}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-6 italic">
                À titre indicatif. Les paramètres (taux, durée) sont définis contractuellement
                en fonction des spécificités de chaque dossier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 engagements */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 text-center">
            Engagements du Cabinet envers ses mandants
          </h2>
          <p className="text-slate-500 text-center mb-14 max-w-xl mx-auto text-[15px]">
            Ces engagements constituent le cadre déontologique dans lequel s'inscrit
            chaque mission conduite par le Cabinet Global Energy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num:   '01',
                titre: 'Confidentialité des informations',
                desc:  "Les données de facturation transmises au Cabinet sont traitées comme des informations stratégiques confidentielles. Elles ne font l'objet d'aucune divulgation, cession ou exploitation commerciale. Seul l'expert en charge du dossier y a accès.",
              },
              {
                num:   '02',
                titre: 'Restitution chiffrée et documentée',
                desc:  "Le rapport remis au client détaille, ligne par ligne et en FCFA, les anomalies identifiées et les montants récupérables. Chaque donnée est établie sur la base de la facturation réelle et vérifiable.",
              },
              {
                num:   '03',
                titre: 'Analyse humaine et personnalisée',
                desc:  "Chaque dossier est instruit personnellement par un expert qualifié du Cabinet. Aucun dispositif automatisé ne se substitue au jugement professionnel dans l'établissement des conclusions.",
              },
              {
                num:   '04',
                titre: 'Accord préalable à toute restitution détaillée',
                desc:  "Le rapport chiffré n'est communiqué qu'après formalisation de l'accord de partenariat. Le client dispose ainsi d'une connaissance complète des termes avant de contracter.",
              },
              {
                num:   '05',
                titre: 'Suppression des données après restitution',
                desc:  "Les factures d'électricité Moyenne Tension transmises au Cabinet sont définitivement supprimées de nos systèmes dans les 48 heures suivant la remise du rapport d'audit.",
              },
              {
                num:   '06',
                titre: 'Conformité à la réglementation camerounaise',
                desc:  "L'ensemble des missions du Cabinet est conduit dans le respect des directives de l'ARSEL et des dispositions de la loi camerounaise n°2010/012 relative à la cybersécurité et à la cybercriminalité.",
              },
            ].map(item => (
              <div key={item.num} className="bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <p className="text-blue-500 font-black text-xs tracking-widest mb-3">{item.num}</p>
                <h3 className="font-extrabold text-slate-900 text-base mb-3">{item.titre}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Solliciter une mission d'audit
        </h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto text-[15px]">
          Transmettez votre facture d'électricité Moyenne Tension au Cabinet Global Energy.
          L'étude est gratuite et sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-sm">
            Transmettre ma facture →
          </Link>
          <Link href="/contact" className="bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-sm">
            Contacter le Cabinet →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

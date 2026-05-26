'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

export default function Missions() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Missions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Déroulement d'une mission
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Un processus transparent en 6 étapes — de la réception de votre facture
            à la concrétisation de vos économies.
          </p>
        </div>
      </section>

      {/* 6 étapes */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {[
            {
              num:   '01',
              titre: 'Vous déposez votre facture ENEO',
              desc:  "Téléchargez votre dernière facture ENEO sur notre plateforme FacturaMT, ou envoyez-la directement via WhatsApp. Pas d'application à installer. La démarche prend moins de deux minutes.",
              note:  "L'étude est gratuite et sans engagement.",
              highlight: false,
            },
            {
              num:   '02',
              titre: 'Un expert analyse votre dossier',
              desc:  "Sous 48 heures ouvrables, un expert du cabinet examine votre facture. Il identifie chaque source de surcoût et évalue les économies potentielles. Chaque dossier est traité par un expert humain, pas un algorithme.",
              note:  "Une analyse rigoureuse, personnalisée pour votre situation.",
              highlight: false,
            },
            {
              num:   '03',
              titre: 'Nous vous appelons avec nos conclusions',
              desc:  "Nous vous contactons par téléphone pour vous présenter ce que nous avons trouvé. Vous savez qu'il y a des anomalies et l'ordre de grandeur des économies possibles — sans le rapport détaillé à ce stade.",
              note:  "C'est à cette étape que vous décidez si vous souhaitez aller plus loin.",
              highlight: true,
            },
            {
              num:   '04',
              titre: "Signature d'un accord de partenariat",
              desc:  "Si vous souhaitez le rapport complet et notre accompagnement, nous formalisons un accord simple. Il précise notre rémunération — un pourcentage des économies effectivement réalisées sur une période définie.",
              note:  "Si vous n'économisez pas, vous ne payez rien.",
              highlight: true,
            },
            {
              num:   '05',
              titre: 'Remise du rapport complet chiffré en FCFA',
              desc:  "Vous recevez le rapport détaillé indiquant ligne par ligne les anomalies identifiées, les montants récupérables en FCFA, et les démarches précises à engager auprès d'ENEO.",
              note:  "Des chiffres concrets et vérifiables, pas des estimations.",
              highlight: false,
            },
            {
              num:   '06',
              titre: "Accompagnement auprès d'ENEO",
              desc:  "Nous vous assistons dans les démarches de correction — modification de contrat, contestation de facture, demande de remboursement. Nous suivons que les corrections sont bien appliquées sur vos prochaines factures.",
              note:  "Nous restons à vos côtés jusqu'à ce que vos économies soient concrétisées.",
              highlight: false,
            },
          ].map((step, i) => (
            <div key={i} className="flex gap-8 pb-12 relative">
              {i < 5 && <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-blue-100"/>}
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-black text-sm z-10 relative ${step.highlight ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-900'}`}>
                  {i + 1}
                </div>
              </div>
              <div className="flex-1 pb-4">
                <p className="text-blue-600 font-black text-xs tracking-widest mb-2">{step.num}</p>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{step.titre}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-3">{step.desc}</p>
                <div className={`border rounded-xl px-5 py-3 text-sm italic ${step.highlight ? 'bg-blue-600 border-blue-600 text-white font-semibold' : 'bg-blue-50 border-blue-100 text-blue-800'}`}>
                  {step.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modèle économique */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Notre modèle économique</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
            Vous ne payez que si vous économisez
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { etape:'Étude',      label:'Gratuite',            desc:"L'analyse de votre facture et l'identification des anomalies ne vous coûtent rien.", color:'border-green-500 bg-green-50' },
              { etape:'Accord',     label:'Avant le rapport',    desc:"Vous signez un accord avant de recevoir les chiffres détaillés. Vous savez exactement à quoi vous vous engagez.", color:'border-blue-600 bg-blue-50' },
              { etape:'Honoraires', label:'% des économies réelles', desc:"Notre rémunération est un pourcentage des économies effectivement constatées sur vos factures ENEO.", color:'border-slate-900 bg-slate-100' },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-6 border-t-4 ${item.color}`}>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{item.etape}</p>
                <p className="text-lg font-extrabold text-slate-900 mb-3">{item.label}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Prêt à démarrer ?</h2>
        <p className="text-slate-400 mb-8">L'étude est gratuite et sans engagement.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-sm">
            Déposer ma facture →
          </Link>
          <Link href="/engagements" className="bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-sm">
            Nos engagements →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

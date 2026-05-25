'use client';
// app/missions/page.jsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

export default function Missions() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      {/* Hero */}
      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Missions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Déroulement d'une mission
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            De la prise de contact à la remise du rapport, voici comment
            le Cabinet Global Enerdy accompagne ses clients pas à pas.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {[
              {
                num: '01',
                titre: 'Prise de contact et dépôt de la facture',
                desc: 'Vous déposez votre facture ENEO MT sur notre plateforme FacturaMT, ou vous nous l\'envoyez directement sur WhatsApp. Pas d\'application à installer, pas de compte à créer. La démarche prend moins de deux minutes.',
                note: 'Formats acceptés : JPG, PNG. Jusqu\'à 6 factures simultanément.',
              },
              {
                num: '02',
                titre: 'Analyse manuelle par un ingénieur',
                desc: 'Sous 48 heures ouvrables, un ingénieur du cabinet ouvre votre dossier. Il calcule votre cos φ réel, vérifie l\'adéquation de votre puissance souscrite, et contrôle chaque ligne de votre facture par rapport à la grille tarifaire ARSEL en vigueur.',
                note: 'Ce n\'est pas un algorithme. C\'est un ingénieur avec vos chiffres et la réglementation ENEO en main.',
              },
              {
                num: '03',
                titre: 'Chiffrage des anomalies et des économies',
                desc: 'Chaque anomalie identifiée est quantifiée précisément en FCFA. Vous recevez un rapport clair indiquant le montant exact des surcoûts évitables et les économies mensuelles réalisables si les corrections sont mises en œuvre.',
                note: 'Pas d\'estimation vague. Des chiffres précis, ligne par ligne.',
              },
              {
                num: '04',
                titre: 'Présentation des résultats',
                desc: 'Nous vous appelons pour vous présenter les résultats. Vous pouvez poser toutes vos questions. Vous décidez librement de la suite à donner — aucun engagement n\'est requis à cette étape.',
                note: 'Vous n\'êtes jamais engagé à quoi que ce soit.',
              },
              {
                num: '05',
                titre: 'Accompagnement auprès d\'ENEO (si souhaité)',
                desc: 'Si vous souhaitez mettre en œuvre les recommandations, notre équipe vous accompagne dans les démarches de modification de contrat, de contestation de facture ou de demande de correction auprès d\'ENEO Cameroun.',
                note: 'Nous vous assistons jusqu\'à l\'application effective des corrections sur vos factures.',
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-8 pb-12 relative">
                {i < 4 && (
                  <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-blue-100"/>
                )}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm z-10 relative">
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-blue-600 font-black text-xs tracking-widest mb-2">{step.num}</p>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{step.titre}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-3">{step.desc}</p>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-3 text-sm text-blue-800 italic">
                    {step.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Prêt à démarrer ?</h2>
        <p className="text-slate-400 mb-8">Gratuit · Sans engagement · Réponse sous 48h</p>
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

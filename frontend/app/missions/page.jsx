'use client';
// app/missions/page.jsx
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
            Notre processus est conçu pour vous offrir une optimisation énergétique sans contrainte —
            simple, précis, et axé sur vos résultats financiers.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {[
              {
                num: '01',
                titre: 'Vous déposez votre facture ENEO',
                desc: 'Téléchargez simplement votre dernière facture ENEO sur notre plateforme FacturaMT, ou envoyez-la directement via WhatsApp. Pas d\'application à installer, pas de compte à créer. La démarche prend moins de deux minutes.',
                note: 'C\'est simple, rapide et sans engagement.',
              },
              {
                num: '02',
                titre: 'Audit personnalisé par nos ingénieurs',
                desc: 'Sous 48 heures ouvrables, un ingénieur du cabinet réalise une analyse approfondie de votre facture. Il identifie chaque source de surcoût — abonnement inadapté, pénalités évitables, erreurs de facturation — et quantifie précisément les économies réalisables.',
                note: 'Loin des solutions automatisées, chaque audit est réalisé par nos ingénieurs qualifiés.',
              },
              {
                num: '03',
                titre: 'Validation expert et chiffrage en FCFA',
                desc: 'Chaque anomalie détectée est vérifiée manuellement et les économies potentielles sont chiffrées avec exactitude en FCFA, ligne par ligne. Vous recevez un rapport clair et détaillé, sans jargon technique.',
                note: 'Une visibilité totale sur les sommes que vous pourriez récupérer.',
              },
              {
                num: '04',
                titre: 'Présentation des résultats',
                desc: 'Nous vous contactons pour vous présenter les résultats de l\'audit. Vous pouvez poser toutes vos questions. Vous décidez librement de la suite — aucun engagement n\'est requis à cette étape.',
                note: 'Vous restez maître de votre décision.',
              },
              {
                num: '05',
                titre: 'Soutien complet auprès d\'ENEO (si souhaité)',
                desc: 'Si vous décidez de mettre en œuvre nos recommandations, nous vous accompagnons dans toutes les démarches auprès d\'ENEO — modification de contrat, contestation de factures, demandes de correction — jusqu\'à la concrétisation de vos économies.',
                note: 'Nous gérons les démarches pour que vous vous concentriez sur votre cœur de métier.',
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-8 pb-12 relative">
                {i < 4 && <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-blue-100"/>}
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

      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Passez à l'action : votre audit gratuit vous attend
        </h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          N'attendez plus pour optimiser vos coûts énergétiques. Déposez votre facture ENEO
          dès aujourd'hui. Notre audit est gratuit, confidentiel et vous recevrez une réponse
          détaillée sous 48 heures.
        </p>
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

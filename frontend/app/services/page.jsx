'use client';
// app/services/page.jsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Frais généraux</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Optimisation Stratégique de{' '}
            <span className="text-blue-400">Vos Coûts Énergétiques ENEO</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Pour les entreprises à forte consommation, la facture ENEO représente une dépense majeure.
            Chez Global Enerdy, nous transformons cette charge en levier d'économies substantielles.
            Nous détectons les surcoûts cachés dans vos factures pour garantir une gestion énergétique
            plus rentable et efficiente.
          </p>
        </div>
      </section>

      {/* Le Contexte */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Le contexte</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
              Comprendre et maîtriser vos dépenses énergétiques
            </h2>
            <div className="space-y-5 text-slate-600 text-[15px] leading-relaxed">
              <p>
                La complexité des tarifs ENEO peut masquer des inefficacités coûteuses. De l'abonnement
                à la consommation réelle, en passant par les pénalités pour une énergie mal gérée,
                chaque ligne de votre facture est une opportunité d'optimisation.
              </p>
              <p>Nous vous aidons à répondre à des questions cruciales :</p>
              <ul className="space-y-3">
                {[
                  'Votre contrat est-il aligné avec votre consommation réelle ?',
                  'Payez-vous des frais supplémentaires évitables chaque mois ?',
                  'Votre installation respecte-t-elle les normes pour éviter les pénalités ?',
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">?</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl px-6 py-4">
              <p className="text-slate-800 font-semibold text-[15px] leading-relaxed">
                Le constat est clair : la plupart des entreprises paient entre{' '}
                <span className="text-blue-600 font-bold">200 000 et 1 500 000 FCFA de trop</span>{' '}
                chaque mois. Notre mission est de vous faire récupérer ces sommes.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/factory.jpg" alt="Entreprise camerounaise" className="w-full h-[420px] object-cover"/>
          </div>
        </div>
      </section>

      {/* Nos Solutions */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Nos solutions</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
            Notre approche : des solutions concrètes pour des résultats mesurables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { num:'01', titre:'Analyse financière approfondie',  desc:"Nous examinons vos 12 à 24 derniers mois de facturation pour identifier les tendances et les anomalies récurrentes." },
              { num:'02', titre:'Alignement contractuel',          desc:"Nous vérifions que votre contrat ENEO correspond précisément à vos besoins réels, évitant les surcoûts liés à une puissance souscrite inadaptée." },
              { num:'03', titre:'Détection des surfacturations',   desc:"Nous identifions toutes les pénalités injustifiées, les erreurs de facturation et les primes fixes excessives." },
              { num:'04', titre:"Projection d'économies en FCFA",  desc:"Nous chiffrons avec précision les économies potentielles en FCFA, ligne par ligne, pour vous offrir une visibilité totale." },
              { num:'05', titre:'Gestion des démarches ENEO',      desc:"Nous vous accompagnons activement auprès d'ENEO pour toute modification contractuelle ou contestation de facture." },
              { num:'06', titre:'Suivi post-optimisation',         desc:"Nous nous assurons que les corrections sont bien appliquées et que vos économies se concrétisent sur le long terme." },
            ].map(item => (
              <div key={item.num} className="bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <p className="text-blue-500 font-black text-xs tracking-widest mb-3">{item.num}</p>
                <h3 className="font-extrabold text-slate-900 text-base mb-3">{item.titre}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 4 anomalies */}
          <div className="bg-slate-900 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-white mb-8">
              Les principales sources de surcoûts que nous corrigeons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { titre:'Frais pour énergie inefficace',    desc:"Des pénalités récurrentes lorsque votre installation ne gère pas l'énergie de manière optimale, entraînant des coûts inutiles chaque mois." },
                { titre:'Abonnement électrique excessif',   desc:"Vous payez pour une capacité que vous n'utilisez pas — une prime fixe surdimensionnée et renégociable auprès d'ENEO." },
                { titre:'Pénalités de dépassement',        desc:"Des tarifs majorés appliqués sans avertissement lorsque votre consommation dépasse la puissance souscrite." },
                { titre:'Erreurs de comptage',             desc:"Des relevés incorrects qui vous facturent une consommation supérieure à votre usage réel — récupérable auprès d'ENEO." },
              ].map((a, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 flex-shrink-0 bg-blue-500 rounded-full mt-1"/>
                  <div>
                    <p className="font-bold text-white text-sm mb-1">{a.titre}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Votre audit gratuit</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Identifiez vos économies potentielles
            </h2>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
              Curieux de savoir combien vous pourriez économiser ? Bénéficiez d'une analyse gratuite
              et sans engagement de votre facture ENEO. Il vous suffit de la déposer. Un de nos experts
              vous contactera sous 48 heures avec un rapport détaillé et chiffré en FCFA.
              C'est une démarche simple, confidentielle et sans risque.
            </p>
            <Link href="/" className="block bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all text-sm text-center mb-3">
              Déposer ma facture pour analyse →
            </Link>
            <p className="text-xs text-slate-400 text-center">Gratuit · Confidentiel · Rapport sous 48h · Aucun engagement</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src="/images/meter.jpg" alt="Compteur ENEO" className="w-full h-[360px] object-cover"/>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

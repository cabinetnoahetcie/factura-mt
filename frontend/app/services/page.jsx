'use client';
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
            Optimisation stratégique de{' '}
            <span className="text-blue-400">vos coûts énergétiques ENEO</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Pour les entreprises à forte consommation, la facture ENEO représente une dépense majeure.
            Nous détectons les surcoûts cachés dans vos factures et vous aidons à les récupérer.
          </p>
        </div>
      </section>

      {/* Contexte */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Le contexte</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
              Comprendre et maîtriser vos dépenses énergétiques
            </h2>
            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
              <p>La complexité des tarifs ENEO peut masquer des inefficacités coûteuses. Chaque ligne de votre facture est une opportunité d'optimisation.</p>
              <p>Nous vous aidons à répondre à ces questions cruciales :</p>
              <ul className="space-y-2">
                {[
                  'Votre contrat est-il aligné avec votre consommation réelle ?',
                  'Payez-vous des frais supplémentaires évitables chaque mois ?',
                  'Votre installation respecte-t-elle les normes pour éviter les pénalités ?',
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">?</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl px-6 py-4">
              <p className="text-slate-800 font-semibold text-[15px] leading-relaxed">
                La plupart des entreprises paient entre{' '}
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

      {/* Les 4 anomalies — unique à cette page */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Les principales sources de surcoûts que nous corrigeons
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            Nos audits révèlent fréquemment ces quatre types d'anomalies sur les factures ENEO MT.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num:'01', titre:'Amendes pour énergie inefficace',   desc:"Des pénalités récurrentes qui gonflent votre facture de 5% à 12% — de l'argent dépensé sans aucune valeur ajoutée." },
              { num:'02', titre:'Abonnement électrique excessif',    desc:"Vous payez pour une capacité que vous n'utilisez pas. C'est comme payer un loyer pour un espace vide — chaque mois." },
              { num:'03', titre:'Pénalités de dépassement',         desc:"Des tarifs majorés appliqués sans avertissement lorsque votre consommation dépasse la puissance souscrite." },
              { num:'04', titre:'Erreurs de comptage',              desc:"Des relevés incorrects qui vous facturent une consommation supérieure à votre usage réel — récupérable auprès d'ENEO." },
            ].map((a, i) => (
              <div key={i} className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-blue-400 font-black text-sm tracking-widest flex-shrink-0 mt-1">{a.num}</div>
                <div>
                  <p className="font-bold text-white text-sm mb-2">{a.titre}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les 6 solutions — unique à cette page */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Notre approche</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
            Des solutions concrètes pour des résultats mesurables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num:'01', titre:'Analyse financière approfondie',  desc:"Nous examinons vos 12 à 24 derniers mois de facturation pour identifier les tendances et anomalies récurrentes." },
              { num:'02', titre:'Alignement contractuel',          desc:"Nous vérifions que votre contrat ENEO correspond à vos besoins réels, évitant les surcoûts liés à une puissance inadaptée." },
              { num:'03', titre:'Détection des surfacturations',   desc:"Nous identifions toutes les pénalités injustifiées, erreurs de facturation et primes fixes excessives." },
              { num:'04', titre:"Projection d'économies en FCFA", desc:"Nous chiffrons avec précision les économies potentielles en FCFA, ligne par ligne." },
              { num:'05', titre:"Gestion des démarches ENEO",     desc:"Nous vous accompagnons auprès d'ENEO pour toute modification contractuelle ou contestation de facture." },
              { num:'06', titre:'Suivi post-optimisation',        desc:"Nous vérifions que les corrections sont appliquées et que vos économies se concrétisent sur le long terme." },
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
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
          Identifiez vos économies potentielles
        </h2>
        <p className="text-slate-500 mb-6 max-w-lg mx-auto">
          Déposez votre facture ENEO. Un expert vous contacte sous 48h.
          L'étude est gratuite et sans engagement.
        </p>
        <Link href="/" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-all text-sm">
          Déposer ma facture →
        </Link>
      </section>

      <Footer />
    </div>
  );
}

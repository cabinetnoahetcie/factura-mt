'use client';
// app/services/page.jsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite en savoir plus sur votre service d'audit ENEO MT.")}`;

export default function Services() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      {/* Hero */}
      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Frais généraux
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
            Électricité ENEO<br/>
            <span className="text-blue-400">Moyenne Tension</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Le Cabinet Global Enerdy accompagne ses clients professionnels dans l'optimisation
            de cette dépense incontournable. Votre facture ENEO MT contient des anomalies
            que vous payez chaque mois sans le savoir.
          </p>
        </div>
      </section>

      {/* Le contexte */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">
              Le contexte
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
              Optimiser sa facture ENEO MT
            </h2>
            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
              <p>
                La grille tarifaire ENEO Moyenne Tension est complexe. Elle intègre une prime fixe
                sur la puissance souscrite, une facturation de l'énergie active en heures pleines
                et heures creuses, et des pénalités sur l'énergie réactive lorsque le cos φ
                est inférieur au seuil réglementaire fixé par l'ARSEL.
              </p>
              <p>
                Votre puissance souscrite est-elle adaptée à votre consommation réelle ?
                Payez-vous des pénalités de dépassement chaque mois sans le savoir ?
                Votre facteur de puissance est-il conforme au seuil imposé par l'ARSEL ?
              </p>
              <p>
                Dans la majorité des cas que nous traitons, la réponse à au moins l'une de ces
                questions génère un surcoût mensuel évitable — entre 150 000 et
                1 500 000 FCFA selon la taille du site.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/factory.jpg" alt="Site industriel ENEO MT"
              className="w-full h-[420px] object-cover"/>
          </div>
        </div>
      </section>

      {/* Nos solutions */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Nos solutions
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
            Nous analysons tous les paramètres de votre facture ENEO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { num:'01', titre:"Analyse de l'historique de facturation",   desc:"Suivi des consommations et données de facturation sur les 12 à 24 derniers mois disponibles." },
              { num:'02', titre:'Contrôle de l\'adéquation contractuelle',  desc:"Vérification de votre puissance souscrite par rapport à votre puissance atteinte réelle." },
              { num:'03', titre:'Identification des anomalies tarifaires',  desc:"Détection des pénalités injustifiées : cos φ, dépassements, erreurs de comptage, prime fixe surfacturée." },
              { num:'04', titre:'Chiffrage précis des économies en FCFA',   desc:"Simulation des pistes d'optimisation et mesure des enjeux financiers précis, ligne par ligne." },
              { num:'05', titre:"Accompagnement auprès d'ENEO",             desc:"Assistance dans vos démarches de modification de contrat ou de contestation de facture." },
              { num:'06', titre:'Suivi post-audit',                         desc:"Vérification que les corrections sont bien appliquées sur vos factures suivantes." },
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
              Les 4 anomalies que nous traitons le plus fréquemment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { titre:'Pénalité énergie réactive',          desc:"Cos φ non corrigé — facturé chaque mois dès que le facteur de puissance passe sous le seuil de 0,85 fixé par l'ARSEL." },
                { titre:'Puissance souscrite surdimensionnée', desc:"Prime fixe excessive sur une puissance que vos équipements n'atteignent jamais. Renégociable auprès d'ENEO." },
                { titre:'Dépassement de puissance appelée',   desc:"Tarif pénalisé appliqué dès que la puissance atteinte dépasse la souscrite — souvent non signalé par ENEO." },
                { titre:'Erreur de lecture de compteur',       desc:"Index incorrectement reporté — vous êtes facturé pour une consommation que vous n'avez pas faite." },
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

      {/* Vérifier */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">
              Nos solutions
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Vérifier — gratuitement et sans engagement
            </h2>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
              Nous procédons à une étude gratuite et sans engagement de votre facturation ENEO MT.
              Déposez votre facture — un ingénieur l'analyse manuellement et vous contacte
              sous 48 heures avec les résultats chiffrés en FCFA.
            </p>
            <Link href="/"
              className="block bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all text-sm text-center mb-3">
              Déposer ma facture pour analyse →
            </Link>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="block bg-slate-100 text-slate-800 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all text-sm text-center mb-4">
              Nous contacter sur WhatsApp
            </a>
            <p className="text-xs text-slate-400 text-center">
              Gratuit · Confidentiel · Réponse sous 48h · Aucun engagement
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src="/images/meter.jpg" alt="Compteur ENEO MT"
              className="w-full h-[360px] object-cover"/>
          </div>
        </div>
      </section>

      {/* CTA bas */}
      <section className="bg-slate-50 py-16 px-6 text-center border-t border-slate-100">
        <p className="text-slate-600 text-base mb-6">
          Comment pouvons-nous vous aider à optimiser votre facture ENEO ?
        </p>
        <Link href="/contact"
          className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-all text-sm">
          Prendre rendez-vous →
        </Link>
      </section>

      <Footer />
    </div>
  );
}

'use client';
// components/layout/Sections.jsx
// Contient toutes les sections marketing de la page d'accueil

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite déposer ma facture ENEO MT pour une analyse gratuite.")}`;

export function HeroSection({ onAudit }) {
  return (
    <section className="relative bg-white pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"/>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-3xl opacity-50"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"/>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"/>
            </span>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Audit Gratuit · Douala &amp; Yaoundé
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Vos factures ENEO contiennent des erreurs{' '}
            <span className="text-blue-600">que vous payez chaque mois.</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
            Le Cabinet Global Enerdy analyse manuellement vos factures Moyenne Tension —
            pénalités de puissance, énergie réactive, dépassements de cos&nbsp;φ —
            et vous remet un rapport chiffré en FCFA sous 48 heures.
            Sans engagement. Sans automatisation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={onAudit}
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all text-sm shadow-lg">
              Déposer ma facture pour analyse →
            </button>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-300 transition-all text-sm">
              WhatsApp : +237 697 252 071
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
            {[
              { val:'8 / 10', lbl:'factures MT contiennent une anomalie' },
              { val:'48h',    lbl:'délai de remise du rapport'            },
              { val:'100%',   lbl:'analyse manuelle par un ingénieur'    },
            ].map(({ val, lbl }) => (
              <div key={val} className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-900">{val}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-tight mt-1">{lbl}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50 border-8 border-white">
            <img src="/images/factory.jpg" alt="Site industriel MT"
              className="w-full h-[500px] object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"/>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div className="text-xs font-bold text-slate-900">Expertise de terrain</div>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Nos ingénieurs interviennent sur les sites industriels de Bassa et Bonabéri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MarketingSections({ onAudit }) {
  return (
    <div className="space-y-0">

      {/* Problème */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Le Problème</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Ce que vous payez chaque mois sans le savoir
            </h2>
            <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
              <p>Ouvrez votre dernière facture ENEO MT. Sur cette page, plusieurs lignes coûtent de l'argent à votre entreprise sans que vous ayez consommé un seul kilowattheure de plus.</p>
              <p>La pénalité pour mauvais facteur de puissance (cos&nbsp;φ inférieur à 0,85) peut représenter entre 5 % et 12 % de votre facture totale.</p>
              <blockquote className="border-l-4 border-blue-600 pl-6 py-2 italic text-slate-800 font-medium">
                "Ces anomalies représentent souvent entre 200 000 et 1 500 000 FCFA de surcoût mensuel pour les usines de Bassa, Bonabéri et les grands bâtiments de Douala et Yaoundé."
              </blockquote>
            </div>
            <div className="mt-8 space-y-3">
              {[
                'Pénalité énergie réactive — cos φ non corrigé',
                'Puissance souscrite surévaluée — prime fixe excessive',
                'Dépassement de puissance — tarif pénalisé appliqué',
                'Erreur de lecture de compteur — index mal reporté',
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {String(i+1).padStart(2,'0')}
                  </span>
                  {a}
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="/images/meter.jpg" alt="Compteur ENEO MT" className="w-full h-[400px] object-cover"/>
            </div>
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg font-bold text-sm">
              Jusqu'à -12% sur vos factures
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-blue-600 py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-blue-500/30">
              <img src="/images/engineer.webp" alt="Ingénieur Cabinet Global Enerdy" className="w-full h-[450px] object-cover"/>
            </div>
          </div>
          <div className="text-white">
            <span className="text-blue-200 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Notre expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Une expertise technique au service de votre rentabilité
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Nos ingénieurs comprennent les contraintes techniques des installations industrielles camerounaises et la réglementation ARSEL dans ses moindres détails.
            </p>
            <ul className="space-y-4">
              {[
                'Vérification du facteur de puissance (cos φ)',
                'Optimisation de la puissance souscrite',
                'Détection des erreurs de comptage',
                "Accompagnement auprès d'ENEO pour les corrections",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="font-semibold text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700/20 -skew-x-12 translate-x-1/4"/>
      </section>

      {/* Sécurité */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Sécurité &amp; Confidentialité</span>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Vos données de facturation ne sortiront jamais de notre cabinet
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num:'01', titre:'Transmission chiffrée', desc:'Connexion HTTPS TLS 1.3. Aucune donnée ne circule en clair.' },
              { num:'02', titre:'Accès restreint',       desc:"Seul l'ingénieur assigné à votre dossier a accès à vos fichiers." },
              { num:'03', titre:'Suppression sous 48h',  desc:'Vos factures sont définitivement supprimées après livraison du rapport.' },
              { num:'04', titre:'Loi n°2010/012',        desc:'Conformité à la loi camerounaise sur la cybersécurité.' },
            ].map(item => (
              <div key={item.num} className="border-l-2 border-blue-500 pl-5">
                <div className="text-blue-400 font-black text-xs tracking-widest mb-2">{item.num}</div>
                <div className="font-bold text-white text-sm mb-2">{item.titre}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Prêt à réduire vos coûts énergétiques ?
          </h2>
          <p className="text-slate-500 mb-8">Gratuit · Sans engagement · Réponse sous 48h · Analyse humaine</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onAudit}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-sm shadow-lg shadow-blue-200">
              Déposer ma facture maintenant →
            </button>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="bg-slate-100 text-slate-800 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all text-sm">
              Nous contacter sur WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

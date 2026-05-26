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
            Optimisation des coûts énergétiques{' '}
            <span className="text-blue-400">Moyenne Tension</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Pour les entreprises à forte consommation électrique, la maîtrise de la facturation
            Moyenne Tension constitue un levier stratégique d'optimisation budgétaire.
            Le Cabinet Global Energy met son expertise au service de votre performance financière.
          </p>
        </div>
      </section>

      {/* Contexte */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Contexte</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
              La complexité tarifaire ENEO comme source de surcoûts récurrents
            </h2>
            <div className="space-y-5 text-slate-600 text-[15px] leading-relaxed">
              <p>
                La structure tarifaire applicable aux abonnements Moyenne Tension comprend
                une prime fixe sur la puissance souscrite, une facturation différenciée
                de l'énergie active selon les plages horaires, ainsi que des pénalités
                contractuelles en cas de dépassement ou de non-conformité réglementaire.
              </p>
              <p>
                Cette complexité génère, dans la grande majorité des cas que nous traitons,
                des charges injustifiées que nos audits permettent d'identifier et de récupérer.
                Trois questions méritent d'être posées à tout responsable financier :
              </p>
              <ul className="space-y-3">
                {[
                  'Votre puissance souscrite est-elle calibrée sur votre consommation réelle ?',
                  'Votre établissement supporte-t-il des pénalités contractuelles évitables ?',
                  'Votre facturation est-elle exempte d\'erreurs de relevé ou d\'application tarifaire ?',
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">—</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl px-6 py-4">
              <p className="text-slate-800 font-semibold text-[15px] leading-relaxed">
                Dans la grande majorité des dossiers traités, au moins l'une de ces situations
                génère un surcoût mensuel récupérable compris entre{' '}
                <span className="text-blue-600 font-bold">200 000 et 1 500 000 FCFA.</span>
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/factory.jpg" alt="Site industriel Moyenne Tension" className="w-full h-[420px] object-cover"/>
          </div>
        </div>
      </section>

      {/* 4 anomalies */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Les principales sources d'anomalies identifiées
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl text-[15px] leading-relaxed">
            Nos audits révèlent de manière récurrente quatre catégories d'anomalies
            tarifaires sur les factures d'électricité Moyenne Tension.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num:   '01',
                titre: 'Pénalités liées à l\'efficacité énergétique',
                desc:  "Des sanctions contractuelles appliquées lorsque le facteur de puissance de l'installation ne satisfait pas aux seuils réglementaires fixés par l'ARSEL, pouvant majorer la facture de 5 % à 12 %.",
              },
              {
                num:   '02',
                titre: 'Prime fixe sur puissance souscrite inadaptée',
                desc:  "Une puissance souscrite supérieure à la puissance effectivement atteinte génère une prime fixe mensuelle injustifiée, directement renégociable auprès d'ENEO.",
              },
              {
                num:   '03',
                titre: 'Pénalités de dépassement de puissance',
                desc:  "Des tarifs majorés appliqués sans notification préalable dès lors que la puissance appelée excède la puissance souscrite, impactant directement le budget opérationnel.",
              },
              {
                num:   '04',
                titre: 'Erreurs de relevé et d\'application tarifaire',
                desc:  "Des inexactitudes dans le reportage des index de consommation ou dans l'application des grilles tarifaires, entraînant une surfacturation susceptible de faire l'objet d'un recours.",
              },
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

      {/* 6 solutions */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Notre méthodologie</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
            Une approche structurée pour des résultats mesurables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num:'01', titre:'Analyse de l\'historique de facturation', desc:"Examen approfondi de vos factures d'électricité Moyenne Tension sur 12 à 24 mois afin d'identifier les tendances et anomalies récurrentes." },
              { num:'02', titre:'Vérification de l\'adéquation contractuelle', desc:"Contrôle de la cohérence entre la puissance souscrite et la puissance effectivement atteinte, en vue d'une renégociation contractuelle si nécessaire." },
              { num:'03', titre:'Identification des surcoûts tarifaires', desc:"Détection exhaustive des pénalités injustifiées, des erreurs d'application tarifaire et des primes fixes excessives au regard de la réglementation ARSEL." },
              { num:'04', titre:'Projection financière des économies réalisables', desc:"Chiffrage précis, ligne par ligne et en FCFA, des économies potentielles résultant de la correction des anomalies identifiées." },
              { num:'05', titre:'Accompagnement auprès d\'ENEO', desc:"Assistance dans les démarches de modification contractuelle, de contestation de facturation et de demande de régularisation auprès d'ENEO Cameroun." },
              { num:'06', titre:'Suivi post-optimisation', desc:"Vérification de la bonne application des corrections sur les factures d'électricité Moyenne Tension subséquentes et confirmation de la concrétisation des économies." },
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
      <section className="py-20 px-6 bg-white text-center border-t border-slate-100">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
          Sollicitez une évaluation gratuite de votre facturation
        </h2>
        <p className="text-slate-500 mb-6 max-w-lg mx-auto text-[15px]">
          Transmettez votre facture d'électricité Moyenne Tension. Un expert du cabinet
          vous restituera ses premières conclusions sous 48 heures.
          L'étude est gratuite et sans engagement.
        </p>
        <Link href="/" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-all text-sm">
          Transmettre ma facture →
        </Link>
      </section>

      <Footer />
    </div>
  );
}

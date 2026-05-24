'use client';
// app/a-propos/page.jsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite en savoir plus sur vos services.")}`;

export default function APropos() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar onAudit={() => {}} />

      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20 px-6 text-center">
        <span className="inline-block bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Qui sommes-nous
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
          Des ingénieurs camerounais.<br/>
          <span className="text-blue-400">Pas un chatbot.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          Cabinet d'ingénierie énergétique basé à Douala depuis 2022,
          spécialisé dans l'audit des factures ENEO Moyenne Tension.
        </p>
      </section>

      {/* Chiffres clés */}
      <section className="bg-white py-16 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val:'2022', lbl:'Année de création'              },
            { val:'3',    lbl:'Clients accompagnés'            },
            { val:'48h',  lbl:'Délai de remise du rapport'     },
            { val:'100%', lbl:'Audit gratuit & sans engagement' },
          ].map(({ val, lbl }) => (
            <div key={val} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-slate-900 mb-2">{val}</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider leading-snug">{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              Notre histoire
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
              Pourquoi nous avons créé FacturaMT
            </h2>
            <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
              <p>
                Créé en 2022, le Cabinet Global Enerdy est né d'un constat simple :
                la quasi-totalité des entreprises camerounaises raccordées en Moyenne Tension
                paient des pénalités évitables chaque mois — pénalités sur l'énergie réactive,
                puissance souscrite surdimensionnée, dépassements non détectés.
              </p>
              <p>
                Personne ne leur expliquait leur facture. Personne ne leur montrait les chiffres.
                Nous avons décidé de changer ça en mettant notre expertise technique au service
                des industries, hôtels et grands bâtiments de Douala et Yaoundé.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-6 py-2 italic text-slate-800 font-medium">
                FacturaMT permet à tout directeur financier camerounais d'obtenir gratuitement
                et en 48 heures une première lecture de sa facture par un vrai professionnel.
              </blockquote>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/images/engineer.webp"
              alt="Ingénieur Cabinet Global Enerdy"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              L'équipe
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Les ingénieurs qui analysent vos dossiers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                nom:   'Noah Kevyn Sorel',
                titre: "Ingénieur en maîtrise de l'énergie",
                role:  'Co-fondateur & Directeur technique',
                init:  'NK',
              },
              {
                nom:   'Assoua Effon Cédric',
                titre: 'Ingénieur électricien',
                role:  'Expert en facturation MT & audit terrain',
                init:  'AE',
              },
            ].map((m, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-5">
                  {m.init}
                </div>
                <div className="text-xl font-extrabold text-slate-900 mb-1">{m.nom}</div>
                <div className="text-sm font-semibold text-blue-600 mb-1">{m.titre}</div>
                <div className="text-sm text-slate-500">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre démarche */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
            Notre démarche en 3 étapes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num:'01', titre:'Analyse digitale',    desc:"Diagnostic de votre facture par nos ingénieurs via la plateforme FacturaMT."              },
              { num:'02', titre:'Contre-expertise',    desc:"Validation manuelle des anomalies et chiffrage précis des économies réalisables en FCFA." },
              { num:'03', titre:'Accompagnement ENEO', desc:"Assistance dans vos démarches de modification de contrat ou de contestation de facture."  },
            ].map(item => (
              <div key={item.num} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="text-blue-400 font-black text-sm tracking-widest mb-4">{item.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.titre}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
          Prêt à analyser votre facture ?
        </h2>
        <p className="text-slate-500 mb-8">Gratuit · Confidentiel · Réponse sous 48h</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-sm">
            Déposer ma facture →
          </Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="bg-slate-100 text-slate-800 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all text-sm">
            Nous contacter sur WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

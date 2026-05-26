'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

export default function APropos() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Le Cabinet</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Cabinet Global Energy :{' '}
            <span className="text-blue-400">une expertise technique au service de votre performance financière</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Établi à Douala depuis 2022, le Cabinet Global Energy est spécialisé dans l'audit
            et l'optimisation des factures d'électricité Moyenne Tension pour les entreprises,
            industries et établissements institutionnels du Cameroun.
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-white py-16 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val:'2022',   lbl:'Année de création du cabinet'              },
            { val:'3',      lbl:'Missions conduites à ce jour'              },
            { val:'48h',    lbl:'Délai de restitution des premières conclusions' },
            { val:'0 FCFA', lbl:'Aucun frais pour l\'étude initiale'       },
          ].map(({ val, lbl }) => (
            <div key={val} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-slate-900 mb-2">{val}</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider leading-snug">{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Notre mission</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
              Transformer vos charges énergétiques en opportunités d'optimisation
            </h2>
            <div className="space-y-5 text-slate-600 text-[15px] leading-relaxed">
              <p>
                Le Cabinet Global Energy a été fondé en 2022 à partir d'un constat établi
                sur le terrain : la quasi-totalité des entreprises camerounaises raccordées
                en Moyenne Tension acquittent mensuellement des charges injustifiées,
                faute d'une expertise dédiée à l'analyse de leur facturation électrique.
              </p>
              <p>
                La plateforme FacturaMT constitue notre outil de démocratisation de l'audit
                énergétique. Elle permet à tout Directeur Financier ou Chef d'Entreprise
                d'obtenir, sans frais et dans un délai de 48 heures, une première lecture
                professionnelle de sa facturation d'électricité Moyenne Tension.
              </p>
              <p className="text-sm text-slate-500">
                Pour le détail de notre processus d'intervention et de notre modèle de rémunération,
                nous vous invitons à consulter nos pages{' '}
                <Link href="/missions" className="text-blue-600 font-semibold hover:underline">Missions</Link>
                {' '}et{' '}
                <Link href="/engagements" className="text-blue-600 font-semibold hover:underline">Engagements</Link>.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img src="/images/engineer.webp" alt="Expert du Cabinet Global Energy"
              className="w-full h-[420px] object-cover"/>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">L'équipe dirigeante</p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Des experts qualifiés au service de votre dossier
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-[15px]">
              Chaque dossier transmis au Cabinet Global Energy est instruit personnellement
              par l'un de nos experts. Aucun traitement automatisé ne se substitue
              au jugement professionnel de notre équipe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                init:  'NK',
                nom:   'Noah Kevyn Sorel',
                titre: 'Co-fondateur — Directeur Technique',
                desc:  "Expert en maîtrise de l'énergie, il supervise l'ensemble des stratégies d'optimisation du Cabinet et garantit la rigueur technique de chaque analyse conduite.",
              },
              {
                init:  'AE',
                nom:   'Assoua Effon Cédric',
                titre: 'Expert en facturation MT &amp; Audit terrain',
                desc:  "Spécialiste de la facturation Moyenne Tension et des interventions sur site industriel, il assure la précision des diagnostics et la pertinence opérationnelle des recommandations formulées.",
              },
            ].map((m, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-5">
                  {m.init}
                </div>
                <div className="text-xl font-extrabold text-slate-900 mb-1">{m.nom}</div>
                <div className="text-sm font-semibold text-blue-600 mb-3" dangerouslySetInnerHTML={{__html: m.titre}}/>
                <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

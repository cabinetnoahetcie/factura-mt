'use client';
// app/page.jsx
import { useState, useRef } from 'react';
import Navbar      from '@/components/layout/Navbar';
import Footer      from '@/components/layout/Footer';
import Stepper     from '@/components/ui/Stepper';
import StepUpload  from '@/components/forms/StepUpload';
import StepInfos   from '@/components/forms/StepInfos';
import StepConfirm from '@/components/forms/StepConfirm';

export default function HomePage() {
  const [step,       setStep]       = useState(0);
  const [uploadData, setUploadData] = useState(null);
  const [result,     setResult]     = useState(null);
  const tunnelRef = useRef(null);

  const scrollToTunnel = () =>
    tunnelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const next  = () => setStep(s => s + 1);
  const prev  = () => setStep(s => s - 1);
  const reset = () => { setStep(0); setUploadData(null); setResult(null); };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar onAudit={scrollToTunnel} />

      {/* HERO — titre + sous-titre + stats + image. Zéro bouton. */}
      {step === 0 && (
        <section className="relative bg-white pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"/>
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-3xl opacity-50"/>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
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
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-10">
                Le Cabinet Global Enerdy analyse manuellement vos factures Moyenne Tension —
                pénalités de puissance, énergie réactive, dépassements de cos&nbsp;φ —
                et vous remet un rapport chiffré en FCFA sous 48 heures.
                Sans engagement. Sans automatisation.
              </p>
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
      )}

      {/* TUNNEL */}
      <main ref={tunnelRef} className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12">
          <Stepper current={step} />
          <div className="mt-12">
            {step === 0 && (
              <StepUpload
                onSuccess={data => { setUploadData(data); next(); scrollToTunnel(); }}
              />
            )}
            {step === 1 && (
              <StepInfos
                uploadData={uploadData}
                onSuccess={data => { setResult(data); next(); scrollToTunnel(); }}
                onBack={prev}
              />
            )}
            {step === 2 && result && (
              <StepConfirm
                dossier={result.dossier}
                client={result.client}
                onNewSubmission={reset}
              />
            )}
          </div>
        </div>
      </main>

      {/* SECTIONS MARKETING — étape 0 uniquement */}
      {step === 0 && (
        <>
          {/* Le Problème */}
          <section className="bg-slate-50 py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Le Problème</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                  Ce que vous payez chaque mois sans le savoir
                </h2>
                <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
                  <p>
                    Ouvrez votre dernière facture ENEO MT. Sur cette page, plusieurs lignes
                    coûtent de l'argent à votre entreprise sans que vous ayez consommé
                    un seul kilowattheure de plus.
                  </p>
                  <p>
                    La pénalité pour mauvais facteur de puissance (cos&nbsp;φ inférieur à 0,85)
                    peut représenter entre 5&nbsp;% et 12&nbsp;% de votre facture totale.
                    La prime fixe sur puissance souscrite surdimensionnée vous fait payer
                    pour une capacité que vos machines n'atteignent jamais.
                  </p>
                  <blockquote className="border-l-4 border-blue-600 pl-6 py-2 italic text-slate-800 font-medium">
                    "Ces anomalies représentent souvent entre 200&nbsp;000 et 1&nbsp;500&nbsp;000&nbsp;FCFA
                    de surcoût mensuel pour les usines de Bassa, Bonabéri et les grands
                    bâtiments de Douala et Yaoundé."
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
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img src="/images/meter.jpg" alt="Compteur ENEO MT"
                    className="w-full h-[400px] object-cover"/>
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
                  <img src="/images/engineer.webp" alt="Ingénieur Cabinet Global Enerdy"
                    className="w-full h-[450px] object-cover"/>
                </div>
              </div>
              <div className="text-white">
                <span className="text-blue-200 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Notre expertise</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Une expertise technique au service de votre rentabilité
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Nos ingénieurs comprennent les contraintes techniques des installations
                  industrielles camerounaises et la réglementation ARSEL dans ses moindres détails.
                </p>
                <ul className="space-y-4">
                  {[
                    'Vérification du facteur de puissance (cos φ)',
                    'Optimisation de la puissance souscrite',
                    'Détection des erreurs de comptage',
                    "Accompagnement auprès d'ENEO pour les corrections",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-300 flex-shrink-0" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
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
        </>
      )}

      <Footer />
    </div>
  );
}

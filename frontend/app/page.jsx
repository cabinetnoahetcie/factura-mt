'use client';
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

      {/* HERO */}
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
                  Cabinet Global Energy · Douala &amp; Yaoundé
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Vos factures d'électricité Moyenne Tension recèlent des{' '}
                <span className="text-blue-600">surcoûts que votre entreprise supporte chaque mois.</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-10">
                Le Cabinet Global Energy conduit des audits experts de vos factures d'électricité
                Moyenne Tension afin d'identifier les anomalies tarifaires et de vous restituer,
                sous 48 heures, une évaluation précise des économies réalisables.
                L'étude est gratuite et sans engagement.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                {[
                  { val:'8 / 10', lbl:'des structures analysées présentent au moins une anomalie tarifaire' },
                  { val:'48h',    lbl:'délai de restitution de nos premières conclusions'                    },
                  { val:'0 FCFA', lbl:'aucun frais pour l\'étude initiale'                                  },
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
                <img src="/images/factory.jpg" alt="Site industriel raccordé en Moyenne Tension"
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
                  <div className="text-xs font-bold text-slate-900">Expertise camerounaise</div>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Nos experts accompagnent les industries, hôtels et grands établissements
                  de Douala et Yaoundé.
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
              <StepUpload onSuccess={data => { setUploadData(data); next(); scrollToTunnel(); }}/>
            )}
            {step === 1 && (
              <StepInfos uploadData={uploadData}
                onSuccess={data => { setResult(data); next(); scrollToTunnel(); }}
                onBack={prev}/>
            )}
            {step === 2 && result && (
              <StepConfirm dossier={result.dossier} client={result.client} onNewSubmission={reset}/>
            )}
          </div>
        </div>
      </main>

      {/* PROBLÈME */}
      {step === 0 && (
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                Enjeu financier
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Des charges énergétiques injustifiées qui affectent votre résultat
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                Les factures d'électricité Moyenne Tension intègrent des postes de charges
                complexes — pénalités contractuelles, primes de puissance, corrections tarifaires —
                dont l'anomalie échappe aux équipes financières faute d'expertise sectorielle.
                Ces surcoûts, pourtant récupérables, grèvent chaque mois votre compte de résultat.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-6 py-3 bg-blue-50 rounded-r-xl">
                <p className="text-slate-800 font-semibold text-[15px] leading-relaxed">
                  Pour les établissements industriels, hôteliers et institutionnels de Douala
                  et Yaoundé, ces anomalies représentent un surcoût mensuel compris entre{' '}
                  <span className="text-blue-600 font-bold">200 000 et 1 500 000 FCFA.</span>
                </p>
              </blockquote>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="/images/meter.jpg" alt="Compteur électrique Moyenne Tension"
                  className="w-full h-[380px] object-cover"/>
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg font-bold text-sm text-center leading-tight">
                Jusqu'à<br/><span className="text-2xl">-12%</span><br/>sur vos charges
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

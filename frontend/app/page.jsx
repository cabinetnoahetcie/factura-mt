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

      {/* ── HERO ── */}
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

              {/* TITRE RÉÉCRIT */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Optimisez votre trésorerie :{' '}
                <span className="text-blue-600">des économies cachées dans vos factures ENEO.</span>
              </h1>

              {/* SOUS-TITRE RÉÉCRIT */}
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-10">
                Saviez-vous que vos factures d'électricité ENEO pourraient contenir des surcoûts
                significatifs ? Chez Global Enerdy, nous identifions ces anomalies pour transformer
                vos dépenses énergétiques en opportunités d'économies. Notre audit expert vous
                révèle en 48 heures les montants précis que vous pourriez récupérer,
                sans aucun engagement de votre part.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                {[
                  { val:'8 / 10', lbl:'factures contiennent des surcoûts évitables' },
                  { val:'48h',    lbl:'pour recevoir votre rapport chiffré'          },
                  { val:'100%',   lbl:'gratuit et sans engagement'                   },
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
                <img src="/images/factory.jpg" alt="Entreprise camerounaise raccordée ENEO"
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
                  <div className="text-xs font-bold text-slate-900">Expertise locale</div>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Nos experts interviennent auprès des industries et grands comptes de Douala et Yaoundé.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── TUNNEL ── */}
      <main ref={tunnelRef} className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12">
          <Stepper current={step} />
          <div className="mt-12">

            {/* APPEL À L'ACTION RÉÉCRIT */}
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

      {step === 0 && (
        <>
          {/* ── SECTION PROBLÈME RÉÉCRITE ── */}
          <section className="bg-slate-50 py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                  Le Problème
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                  Ces coûts inattendus qui pèsent sur votre rentabilité
                </h2>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
                  Chaque mois, votre entreprise pourrait payer des frais inutiles sur ses factures ENEO.
                  Ces surcoûts, souvent méconnus, passent sous le radar de la plupart des équipes financières.
                </p>

                <div className="space-y-5 mb-8">
                  {[
                    {
                      titre: 'Amendes pour énergie inefficace',
                      desc:  "Des pénalités liées à une mauvaise utilisation de l'énergie peuvent gonfler votre facture de 5 % à 12 %. C'est de l'argent dépensé sans aucune valeur ajoutée pour votre entreprise.",
                    },
                    {
                      titre: 'Abonnement surdimensionné',
                      desc:  "Vous payez peut-être pour une puissance électrique que vous n'utilisez jamais. C'est comme payer un loyer pour un espace vide — chaque mois.",
                    },
                    {
                      titre: 'Erreurs de facturation',
                      desc:  "Des erreurs de relevé ou d'application tarifaire peuvent passer inaperçues pendant des années et vous coûter des sommes considérables.",
                    },
                    {
                      titre: 'Dépassements non signalés',
                      desc:  "Des pénalités de dépassement sont appliquées silencieusement par ENEO sans que votre équipe en soit informée.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {String(i+1).padStart(2,'0')}
                      </span>
                      <div>
                        <div className="font-bold text-slate-900 text-sm mb-1">{item.titre}</div>
                        <div className="text-slate-500 text-sm leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-blue-600 pl-6 py-3 bg-blue-50 rounded-r-xl">
                  <p className="text-slate-800 font-semibold text-[15px] leading-relaxed">
                    Concrètement : pour de nombreuses entreprises à Douala et Yaoundé, ces anomalies
                    représentent un surcoût mensuel de{' '}
                    <span className="text-blue-600">200 000 à 1 500 000 FCFA.</span>{' '}
                    Imaginez l'impact sur votre trésorerie annuelle.
                  </p>
                </blockquote>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img src="/images/meter.jpg" alt="Compteur ENEO"
                    className="w-full h-[400px] object-cover"/>
                </div>
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg font-bold text-sm text-center leading-tight">
                  Jusqu'à<br/>
                  <span className="text-2xl">-12%</span><br/>
                  sur vos factures
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION EXPERTISE RÉÉCRITE ── */}
          <section className="bg-blue-600 py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-blue-500/30">
                  <img src="/images/engineer.webp" alt="Expert Cabinet Global Enerdy"
                    className="w-full h-[450px] object-cover"/>
                </div>
              </div>
              <div className="text-white">
                <span className="text-blue-200 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                  Notre expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Une expertise stratégique au service de vos résultats financiers
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Notre équipe d'experts ne se contente pas d'analyser — elle vous apporte
                  des solutions concrètes pour améliorer votre rentabilité, en maîtrisant
                  parfaitement les spécificités des installations camerounaises et la
                  réglementation ARSEL.
                </p>
                <ul className="space-y-4">
                  {[
                    { titre:'Des économies concrètes',      desc:"Identification et récupération des sommes indûment facturées sur vos relevés ENEO."          },
                    { titre:'Une optimisation durable',     desc:"Ajustement de vos contrats pour une adéquation parfaite avec vos besoins réels."             },
                    { titre:'Une conformité assurée',       desc:"Vos factures seront en parfaite adéquation avec les normes en vigueur."                      },
                    { titre:'Un accompagnement complet',    desc:"Nous gérons les démarches auprès d'ENEO pour que vous vous concentriez sur votre activité."  },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                      </svg>
                      <div>
                        <span className="font-bold text-sm">{item.titre} — </span>
                        <span className="text-blue-100 text-sm">{item.desc}</span>
                      </div>
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

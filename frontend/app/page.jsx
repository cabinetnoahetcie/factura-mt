'use client';
// app/page.jsx
import { useState, useRef } from 'react';
import Navbar      from '@/components/layout/Navbar';
import Hero        from '@/components/layout/Hero';
import Footer      from '@/components/layout/Footer';
import Stepper     from '@/components/ui/Stepper';
import StepUpload  from '@/components/forms/StepUpload';
import StepInfos   from '@/components/forms/StepInfos';
import StepConfirm from '@/components/forms/StepConfirm';

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite déposer ma facture ENEO MT pour une analyse gratuite.")}`;

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

      {step === 0 && <Hero />}

      {/* Tunnel d'analyse */}
      <main ref={tunnelRef} className="max-w-3xl mx-auto px-6 py-12 md:py-24">
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

      {/* Sections marketing */}
      {step === 0 && (
        <div className="space-y-0">
          {/* Section Problème */}
          <section className="bg-slate-50 py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Le Problème</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                  Ce que vous payez chaque mois sans le savoir
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    Ouvrez votre dernière facture ENEO MT. Plusieurs lignes coûtent de l'argent à votre entreprise sans que vous ayez consommé un seul kilowattheure de plus.
                  </p>
                  <p>
                    La pénalité pour mauvais facteur de puissance (cos φ) peut représenter jusqu'à 12% de votre facture totale. La prime fixe sur puissance souscrite surdimensionnée vous fait payer pour une capacité inutilisée.
                  </p>
                  <blockquote className="border-l-4 border-blue-600 pl-6 py-2 italic text-slate-800 font-medium">
                    "Ces anomalies représentent souvent entre 200 000 et 1 500 000 FCFA de surcoût mensuel pour les entreprises de Douala et Yaoundé."
                  </blockquote>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img src="/images/meter.jpg" alt="Industrial Meter" className="w-full h-[400px] object-cover" />
                </div>
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg font-bold text-sm">
                  -12% sur vos factures
                </div>
              </div>
            </div>
          </section>

          {/* Section Processus */}
          <section className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Processus</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Comment ça fonctionne</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Pas d'application à installer. Pas de compte à créer. Une analyse humaine par des experts du terrain.
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: 'Dépôt de facture', d: 'Photographiez ou scannez votre facture ENEO MT. JPG ou PNG acceptés.' },
                { t: 'Analyse experte', d: 'Un ingénieur vérifie manuellement chaque ligne de votre facture sous 48h.' },
                { t: 'Rapport chiffré', d: 'Recevez un document clair indiquant les économies réalisables en FCFA.' },
              ].map((item, i) => (
                <div key={i} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center group hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg shadow-blue-200">
                    {i+1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.t}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section Expertise avec Image */}
          <section className="bg-blue-600 py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-blue-500/30">
                  <img src="/images/engineer.webp" alt="Electrical Engineer" className="w-full h-[450px] object-cover" />
                </div>
              </div>
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  Une expertise technique au service de votre rentabilité
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Nos ingénieurs ne se contentent pas de lire des chiffres. Ils comprennent les contraintes techniques des installations industrielles camerounaises.
                </p>
                <ul className="space-y-4">
                  {['Vérification du Cos φ', 'Optimisation de la puissance souscrite', 'Détection des erreurs de comptage'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700/20 -skew-x-12 translate-x-1/4" />
          </section>

          {/* CTA Final */}
          <section className="bg-slate-900 py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Prêt à réduire vos coûts énergétiques ?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={scrollToTunnel} className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all">
                  Analyser ma facture maintenant
                </button>
                <a href={WA_URL} target="_blank" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                  Nous contacter sur WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      <Footer />
    </div>
  );
}

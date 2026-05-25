'use client';
// app/page.jsx
import { useState, useRef } from 'react';
import Navbar      from '@/components/layout/Navbar';
import Footer      from '@/components/layout/Footer';
import Stepper     from '@/components/ui/Stepper';
import StepUpload  from '@/components/forms/StepUpload';
import StepInfos   from '@/components/forms/StepInfos';'use client';
// app/page.jsx
import { useState, useRef } from 'react';
import Navbar      from '@/components/layout/Navbar';
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

      {/* ── HERO ── visible uniquement à l'étape 0 */}
      {step === 0 && (
        <section className="relative bg-white pt-32 pb-24 overflow-hidden">
          {/* Décorations de fond */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"/>
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-3xl opacity-50"/>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"/>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"/>
                </span>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Audit Gratuit · Douala &amp; Yaoundé
                </span>
              </div>

              {/* Titre */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Vos factures ENEO contiennent des erreurs{' '}
                <span className="text-blue-600">que vous payez chaque mois.</span>
              </h1>

              {/* Sous-titre */}
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
                Le Cabinet Global Enerdy analyse manuellement vos factures Moyenne Tension —
                pénalités de puissance, énergie réactive, dépassements de cos&nbsp;φ —
                et vous remet un rapport chiffré en FCFA sous 48 heures.
                Sans engagement. Sans automatisation.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={scrollToTunnel}
                  className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all text-sm shadow-lg"
                >
                  Déposer ma facture pour analyse →
                </button>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-300 transition-all text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp : +237 697 252 071
                </a>
              </div>

              {/* Stats — chiffres réels */}
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

            {/* Image hero */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50 border-8 border-white">
                <img
                  src="/images/factory.jpg"
                  alt="Site industriel raccordé en Moyenne Tension"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"/>
              </div>
              {/* Floating card */}
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

      {/* ── TUNNEL ── toujours présent */}
      <main
        ref={tunnelRef}
        className="max-w-3xl mx-auto px-6 py-12 md:py-24"
      >
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

      {/* ── SECTIONS MARKETING ── uniquement à l'étape 0 */}
      {step === 0 && (
        <div className="space-y-0">

          {/* Le Problème */}
          <section className="bg-slate-50 py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                  Le Problème
                </span>
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
                    peut représenter entre 5 % et 12 % de votre facture totale. La prime fixe
                    sur puissance souscrite surdimensionnée vous fait payer pour une capacité
                    que vos machines n'atteignent jamais.
                  </p>
                  <blockquote className="border-l-4 border-blue-600 pl-6 py-2 italic text-slate-800 font-medium">
                    "Ces anomalies représentent souvent entre 200 000 et 1 500 000 FCFA
                    de surcoût mensuel pour les usines de Bassa, Bonabéri, Magzi
                    et les grands bâtiments de Douala et Yaoundé."
                  </blockquote>
                </div>

                {/* 4 anomalies */}
                <div className="mt-8 space-y-3">
                  {[
                    'Pénalité énergie réactive — cos φ non corrigé',
                    'Puissance souscrite surévaluée — prime fixe excessive',
                    'Dépassement de puissance — tarif pénalisé appliqué',
                    'Erreur de lecture de compteur — index mal reporté',
                  ].map((a, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/meter.jpg"
                    alt="Compteur ENEO Moyenne Tension"
                    className="w-full h-[400px] object-cover"
                  />
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
                  <img
                    src="/images/engineer.webp"
                    alt="Ingénieur Cabinet Global Enerdy"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
              </div>
              <div className="text-white">
                <span className="text-blue-200 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                  Notre expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Une expertise technique au service de votre rentabilité
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Nos ingénieurs ne se contentent pas de lire des chiffres. Ils comprennent
                  les contraintes techniques des installations industrielles camerounaises
                  et la réglementation ARSEL dans ses moindres détails.
                </p>
                <ul className="space-y-4">
                  {[
                    'Vérification du facteur de puissance (cos φ)',
                    'Optimisation de la puissance souscrite',
                    'Détection des erreurs de comptage',
                    'Accompagnement auprès d\'ENEO pour les corrections',
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

          {/* Sécurité & Confidentialité */}
          <section className="bg-slate-900 py-24">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-14">
                <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                  Sécurité & Confidentialité
                </span>
                <h2 className="text-3xl font-extrabold text-white mb-4">
                  Vos données de facturation ne sortiront jamais de notre cabinet
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-[15px] leading-relaxed">
                  Une facture ENEO MT contient des informations stratégiques sur votre entreprise.
                  Nous prenons cela au sérieux.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { num:'01', titre:'Transmission chiffrée',       desc:'Connexion HTTPS avec chiffrement TLS 1.3. Aucune donnée ne circule en clair.'                                },
                  { num:'02', titre:'Accès restreint',             desc:'Seul l\'ingénieur assigné à votre dossier a accès à vos fichiers.'                                          },
                  { num:'03', titre:'Suppression sous 48h',        desc:'Vos factures sont définitivement supprimées après livraison de votre rapport.'                               },
                  { num:'04', titre:'Loi n°2010/012',              desc:'Conformité à la loi camerounaise sur la cybersécurité et au secret professionnel.'                           },
                ].map(item => (
                  <div key={item.num} className="border-l-2 border-blue-500 pl-5">
                    <div className="text-blue-400 font-black text-xs tracking-widest mb-2">{item.num}</div>
                    <div className="font-bold text-white text-sm mb-2">{item.titre}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center text-slate-500 text-sm">
                Questions sur la protection de vos données avant de déposer votre dossier ?{' '}
                <a href="tel:+237697252071" className="text-blue-400 font-semibold hover:text-blue-300">
                  Appelez-nous au +237 697 252 071
                </a>
              </div>
            </div>
          </section>

          {/* CTA final */}
          <section className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Prêt à réduire vos coûts énergétiques ?
              </h2>
              <p className="text-slate-500 mb-8 max-w-xl mx-auto">
                Gratuit · Sans engagement · Réponse sous 48h · Analyse humaine
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToTunnel}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-sm shadow-lg shadow-blue-200"
                >
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
      )}

      <Footer />
    </div>
  );
}

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

      {/* ── HERO ── visible uniquement à l'étape 0 */}
      {step === 0 && (
        <section className="relative bg-white pt-32 pb-24 overflow-hidden">
          {/* Décorations de fond */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"/>
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-3xl opacity-50"/>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"/>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"/>
                </span>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Audit Gratuit · Douala &amp; Yaoundé
                </span>
              </div>

              {/* Titre */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Vos factures ENEO contiennent des erreurs{' '}
                <span className="text-blue-600">que vous payez chaque mois.</span>
              </h1>

              {/* Sous-titre */}
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
                Le Cabinet Global Enerdy analyse manuellement vos factures Moyenne Tension —
                pénalités de puissance, énergie réactive, dépassements de cos&nbsp;φ —
                et vous remet un rapport chiffré en FCFA sous 48 heures.
                Sans engagement. Sans automatisation.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={scrollToTunnel}
                  className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all text-sm shadow-lg"
                >
                  Déposer ma facture pour analyse →
                </button>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-300 transition-all text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp : +237 697 252 071
                </a>
              </div>

              {/* Stats — chiffres réels */}
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

            {/* Image hero */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50 border-8 border-white">
                <img
                  src="/images/factory.jpg"
                  alt="Site industriel raccordé en Moyenne Tension"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"/>
              </div>
              {/* Floating card */}
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

      {/* ── TUNNEL ── toujours présent */}
      <main
        ref={tunnelRef}
        className="max-w-3xl mx-auto px-6 py-12 md:py-24"
      >
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

      {/* ── SECTIONS MARKETING ── uniquement à l'étape 0 */}
      {step === 0 && (
        <div className="space-y-0">

          {/* Le Problème */}
          <section className="bg-slate-50 py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                  Le Problème
                </span>
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
                    peut représenter entre 5 % et 12 % de votre facture totale. La prime fixe
                    sur puissance souscrite surdimensionnée vous fait payer pour une capacité
                    que vos machines n'atteignent jamais.
                  </p>
                  <blockquote className="border-l-4 border-blue-600 pl-6 py-2 italic text-slate-800 font-medium">
                    "Ces anomalies représentent souvent entre 200 000 et 1 500 000 FCFA
                    de surcoût mensuel pour les usines de Bassa, Bonabéri, Magzi
                    et les grands bâtiments de Douala et Yaoundé."
                  </blockquote>
                </div>

                {/* 4 anomalies */}
                <div className="mt-8 space-y-3">
                  {[
                    'Pénalité énergie réactive — cos φ non corrigé',
                    'Puissance souscrite surévaluée — prime fixe excessive',
                    'Dépassement de puissance — tarif pénalisé appliqué',
                    'Erreur de lecture de compteur — index mal reporté',
                  ].map((a, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/meter.jpg"
                    alt="Compteur ENEO Moyenne Tension"
                    className="w-full h-[400px] object-cover"
                  />
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
                  <img
                    src="/images/engineer.webp"
                    alt="Ingénieur Cabinet Global Enerdy"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
              </div>
              <div className="text-white">
                <span className="text-blue-200 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                  Notre expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Une expertise technique au service de votre rentabilité
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Nos ingénieurs ne se contentent pas de lire des chiffres. Ils comprennent
                  les contraintes techniques des installations industrielles camerounaises
                  et la réglementation ARSEL dans ses moindres détails.
                </p>
                <ul className="space-y-4">
                  {[
                    'Vérification du facteur de puissance (cos φ)',
                    'Optimisation de la puissance souscrite',
                    'Détection des erreurs de comptage',
                    'Accompagnement auprès d\'ENEO pour les corrections',
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

          {/* Sécurité & Confidentialité */}
          <section className="bg-slate-900 py-24">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-14">
                <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                  Sécurité & Confidentialité
                </span>
                <h2 className="text-3xl font-extrabold text-white mb-4">
                  Vos données de facturation ne sortiront jamais de notre cabinet
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-[15px] leading-relaxed">
                  Une facture ENEO MT contient des informations stratégiques sur votre entreprise.
                  Nous prenons cela au sérieux.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { num:'01', titre:'Transmission chiffrée',       desc:'Connexion HTTPS avec chiffrement TLS 1.3. Aucune donnée ne circule en clair.'                                },
                  { num:'02', titre:'Accès restreint',             desc:'Seul l\'ingénieur assigné à votre dossier a accès à vos fichiers.'                                          },
                  { num:'03', titre:'Suppression sous 48h',        desc:'Vos factures sont définitivement supprimées après livraison de votre rapport.'                               },
                  { num:'04', titre:'Loi n°2010/012',              desc:'Conformité à la loi camerounaise sur la cybersécurité et au secret professionnel.'                           },
                ].map(item => (
                  <div key={item.num} className="border-l-2 border-blue-500 pl-5">
                    <div className="text-blue-400 font-black text-xs tracking-widest mb-2">{item.num}</div>
                    <div className="font-bold text-white text-sm mb-2">{item.titre}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center text-slate-500 text-sm">
                Questions sur la protection de vos données avant de déposer votre dossier ?{' '}
                <a href="tel:+237697252071" className="text-blue-400 font-semibold hover:text-blue-300">
                  Appelez-nous au +237 697 252 071
                </a>
              </div>
            </div>
          </section>

          {/* CTA final */}
          <section className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Prêt à réduire vos coûts énergétiques ?
              </h2>
              <p className="text-slate-500 mb-8 max-w-xl mx-auto">
                Gratuit · Sans engagement · Réponse sous 48h · Analyse humaine
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToTunnel}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-sm shadow-lg shadow-blue-200"
                >
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
      )}

      <Footer />
    </div>
  );
}

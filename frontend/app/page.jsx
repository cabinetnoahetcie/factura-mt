'use client';
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

      {step === 0 && (
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
                <button onClick={scrollToTunnel}
                  className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all text-sm shadow-lg">
                  Déposer ma facture pour analyse →
                </button

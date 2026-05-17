'use client';
// app/page.jsx
import { useState } from 'react';
import Navbar       from '@/components/layout/Navbar';
import Hero         from '@/components/layout/Hero';
import Stepper      from '@/components/ui/Stepper';
import StepInfos    from '@/components/forms/StepInfos';
import StepUpload   from '@/components/forms/StepUpload';
import StepConfirm  from '@/components/forms/StepConfirm';

const STEPS = ['Votre entreprise', 'Vos factures', 'Confirmation'];

export default function HomePage() {
  const [step,    setStep]    = useState(0);
  const [client,  setClient]  = useState(null);
  const [dossier, setDossier] = useState(null);

  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => s - 1);

  const reset = () => { setStep(0); setClient(null); setDossier(null); };

  return (
    <>
      <Navbar onAudit={() => document.getElementById('tunnel')?.scrollIntoView({ behavior:'smooth' })} />

      {step === 0 && <Hero />}

      <main id="tunnel" className="max-w-4xl mx-auto px-4 py-10">
        <Stepper steps={STEPS} current={step} />

        {step === 0 && (
          <StepInfos
            onSuccess={(clientData) => { setClient(clientData); next(); }}
          />
        )}

        {step === 1 && (
          <StepUpload
            client={client}
            onSuccess={(dossierData) => { setDossier(dossierData); next(); }}
            onBack={prev}
          />
        )}

        {step === 2 && (
          <StepConfirm
            dossier={dossier}
            client={client}
            onNewSubmission={reset}
          />
        )}
      </main>

      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-400 mt-20">
        © 2025 FacturaMT · Audit de factures ENEO Cameroun · Confidentiel &amp; gratuit
      </footer>
    </>
  );
}

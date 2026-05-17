'use client';
// app/page.jsx
import { useState } from 'react';
import Navbar       from '@/components/layout/Navbar';
import Hero         from '@/components/layout/Hero';
import Stepper      from '@/components/ui/Stepper';
import StepInfos    from '@/components/forms/StepInfos';
import StepUpload   from '@/components/forms/StepUpload';
import StepConfirm  from '@/components/forms/StepConfirm';'use client';
// app/page.jsx
import { useState, useRef } from 'react';
import Navbar      from '@/components/layout/Navbar';
import Hero        from '@/components/layout/Hero';
import Stepper     from '@/components/ui/Stepper';
import StepUpload  from '@/components/forms/StepUpload';
import StepInfos   from '@/components/forms/StepInfos';
import StepConfirm from '@/components/forms/StepConfirm';

export default function HomePage() {
  const [step,       setStep]       = useState(0);
  const [uploadData, setUploadData] = useState(null); // { files, mois }
  const [result,     setResult]     = useState(null); // { dossier, client }
  const tunnelRef = useRef(null);

  const scrollToTunnel = () =>
    tunnelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => s - 1);
  const reset = () => { setStep(0); setUploadData(null); setResult(null); };

  return (
    <div style={{ minHeight:'100vh', background:'#faf9f5', fontFamily:"'DM Sans',sans-serif" }}>
      <Navbar onAudit={() => { scrollToTunnel(); }} />

      {/* Hero — visible uniquement à l'étape 0 */}
      {step === 0 && <Hero />}

      {/* Tunnel */}
      <main
        ref={tunnelRef}
        style={{
          maxWidth: 680,
          margin: '0 auto',
          padding: 'clamp(16px, 3vw, 32px) clamp(14px, 3vw, 24px)',
          paddingBottom: 80,
        }}
      >
        <Stepper current={step} />

        {/* Étape 0 — Upload facture */}
        {step === 0 && (
          <StepUpload
            onSuccess={(data) => { setUploadData(data); next(); }}
          />
        )}

        {/* Étape 1 — Coordonnées */}
        {step === 1 && (
          <StepInfos
            uploadData={uploadData}
            onSuccess={(data) => { setResult(data); next(); }}
            onBack={prev}
          />
        )}

        {/* Étape 2 — Confirmation */}
        {step === 2 && result && (
          <StepConfirm
            dossier={result.dossier}
            client={result.client}
            onNewSubmission={reset}
          />
        )}
      </main>

      {/* Section confiance */}
      {step === 0 && (
        <section style={{
          borderTop: '1px solid #e2e0d8',
          background: 'white',
          padding: 'clamp(40px, 6vw, 72px) 20px',
        }}>
          <div style={{ maxWidth:960, margin:'0 auto' }}>
            <h2 style={{
              fontFamily:"'DM Serif Display',serif",
              fontSize:'clamp(24px, 3.5vw, 36px)',
              textAlign:'center', color:'#0a0a0a',
              marginBottom:12,
            }}>
              Comment ça fonctionne ?
            </h2>
            <p style={{ textAlign:'center', color:'#888', fontSize:15, marginBottom:48 }}>
              Un processus simple et transparent, de l'upload à l'appel expert.
            </p>

            <div style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',
              gap:24,
            }}>
              {[
                { icon:'🧾', step:'01', title:'Importez votre facture', desc:"Déposez une ou plusieurs factures ENEO MT. Scan, photo ou PDF." },
                { icon:'📋', step:'02', title:'Saisie de vos coordonnées', desc:"Votre nom d'entreprise et téléphone. Rapide et sans engagement." },
                { icon:'🔍', step:'03', title:'Analyse par nos auditeurs', desc:"Nos experts analysent manuellement chaque ligne de votre facture." },
                { icon:'📞', step:'04', title:'Appel avec les résultats', desc:"Nous vous présentons les économies identifiées et les actions à mener." },
              ].map(item => (
                <div key={item.step} style={{
                  background:'#faf9f5', border:'1px solid #e2e0d8',
                  borderRadius:14, padding:24,
                }}>
                  <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
                    <span style={{ fontSize:28 }}>{item.icon}</span>
                    <span style={{
                      fontSize:10, fontWeight:700, letterSpacing:'0.15em',
                      color:'#e8622a', textTransform:'uppercase',
                    }}>{item.step}</span>
                  </div>
                  <h3 style={{
                    fontFamily:"'DM Serif Display',serif",
                    fontSize:18, color:'#0a0a0a', marginBottom:8,
                  }}>{item.title}</h3>
                  <p style={{ fontSize:13, color:'#888', lineHeight:1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section confidentialité */}
      {step === 0 && (
        <section style={{
          background:'#0a0a0a', color:'white',
          padding:'clamp(40px, 5vw, 60px) 20px',
          textAlign:'center',
        }}>
          <div style={{ maxWidth:640, margin:'0 auto' }}>
            <div style={{ fontSize:32, marginBottom:16 }}>🔒</div>
            <h2 style={{
              fontFamily:"'DM Serif Display',serif",
              fontSize:'clamp(22px, 3vw, 28px)',
              marginBottom:12,
            }}>
              Vos données sont protégées
            </h2>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.6)', lineHeight:1.8, marginBottom:32 }}>
              Vos factures sont transmises via une connexion sécurisée (HTTPS) et stockées
              sur des serveurs certifiés. Elles ne sont jamais partagées avec des tiers.
              Seuls nos auditeurs y ont accès, uniquement pour votre analyse.
            </p>
            <div style={{ display:'flex', justifyContent:'center', gap:32, flexWrap:'wrap' }}>
              {[
                ['🔐','Connexion HTTPS'],
                ['🗄','Stockage sécurisé'],
                ['🚫','Zéro partage tiers'],
              ].map(([icon, txt]) => (
                <div key={txt} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'rgba(255,255,255,0.7)' }}>
                  <span style={{ fontSize:18 }}>{icon}</span>{txt}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer style={{
        borderTop:'1px solid #e2e0d8', background:'#faf9f5',
        padding:'28px 20px', textAlign:'center',
        fontSize:12, color:'#bbb', lineHeight:1.8,
      }}>
        <div style={{ maxWidth:960, margin:'0 auto' }}>
          © 2025 FacturaMT · Audit de factures ENEO Cameroun · Confidentiel &amp; gratuit
          <span style={{ margin:'0 12px', color:'#e2e0d8' }}>|</span>
          <a href="/admin" style={{ color:'#ccc', textDecoration:'none', fontSize:11 }}>
            Espace administrateur
          </a>
        </div>
      </footer>
    </div>
  );
}


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

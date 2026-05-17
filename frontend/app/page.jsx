'use client';
import { useState, useRef } from 'react';
import Navbar      from '@/components/layout/Navbar';
import Hero        from '@/components/layout/Hero';
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
    tunnelRef.current?.scrollIntoView({ behavior:'smooth', block:'start' });

  const next  = () => setStep(s => s + 1);
  const prev  = () => setStep(s => s - 1);
  const reset = () => { setStep(0); setUploadData(null); setResult(null); };

  return (
    <div style={{ minHeight:'100vh', background:'#f8fafc', fontFamily:"'DM Sans',sans-serif" }}>

      <Navbar onAudit={scrollToTunnel} />

      {step === 0 && <Hero />}

      <main ref={tunnelRef} style={{
        maxWidth:660, margin:'0 auto',
        padding:'clamp(20px, 3vw, 36px) clamp(14px, 3vw, 20px)',
        paddingBottom:72,
      }}>
        <Stepper current={step} />

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
      </main>

      {step === 0 && (
        <>
          {/* Comment ça fonctionne */}
          <section style={{
            background:'white',
            borderTop:'1px solid #e2e8f0',
            padding:'clamp(48px, 7vw, 80px) 20px',
          }}>
            <div style={{ maxWidth:1100, margin:'0 auto' }}>
              <div style={{ textAlign:'center', marginBottom:48 }}>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#10B981', marginBottom:10 }}>
                  Notre démarche
                </div>
                <h2 style={{
                  fontFamily:"'DM Serif Display',serif",
                  fontSize:'clamp(24px, 3.5vw, 38px)',
                  color:'#0f172a', marginBottom:12,
                }}>
                  Un processus rigoureux en 4 étapes
                </h2>
                <p style={{ fontSize:15, color:'#64748b', maxWidth:560, margin:'0 auto' }}>
                  De la réception de votre facture à la remise du rapport d'optimisation,
                  nos ingénieurs supervisent chaque étape.
                </p>
              </div>

              <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',
                gap:20,
              }}>
                {[
                  {
                    num:'01',
                    icon:(
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                      </svg>
                    ),
                    titre:'Dépôt de la facture',
                    desc:'Importez votre facture ENEO MT (scan ou photo). Vos données sont chiffrées et sécurisées dès la transmission.',
                  },
                  {
                    num:'02',
                    icon:(
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/>
                        <line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                    ),
                    titre:'Analyse technique',
                    desc:"Nos ingénieurs examinent les dépassements de puissance, l'énergie réactive (cos φ), les erreurs de comptage et les anomalies tarifaires.",
                  },
                  {
                    num:'03',
                    icon:(
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                      </svg>
                    ),
                    titre:'Chiffrage des économies',
                    desc:'Quantification précise des économies réalisables et identification des leviers d\'optimisation prioritaires.',
                  },
                  {
                    num:'04',
                    icon:(
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.63 19.79 19.79 0 01.22 1a2 2 0 012-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8 6a16 16 0 006 6l.44-.44a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14z"/>
                      </svg>
                    ),
                    titre:'Restitution & accompagnement',
                    desc:"Présentation des résultats et assistance dans vos démarches de modification de contrat auprès d'ENEO.",
                  },
                ].map(item => (
                  <div key={item.num} style={{
                    background:'#f8fafc',
                    border:'1px solid #e2e8f0',
                    borderRadius:14, padding:24,
                    borderTop:'3px solid #10B981',
                  }}>
                    <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
                      <div style={{
                        width:40, height:40, borderRadius:10,
                        background:'white', border:'1px solid #e2e8f0',
                        display:'flex', alignItems:'center', justifyContent:'center',
                        boxShadow:'0 1px 4px rgba(0,0,0,0.06)',
                      }}>{item.icon}</div>
                      <span style={{ fontSize:11, fontWeight:800, color:'#10B981', letterSpacing:'0.15em' }}>
                        {item.num}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily:"'DM Serif Display',serif",
                      fontSize:18, color:'#0f172a', marginBottom:8,
                    }}>{item.titre}</h3>
                    <p style={{ fontSize:13, color:'#64748b', lineHeight:1.65 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pourquoi nous */}
          <section style={{
            background:'#0f172a',
            padding:'clamp(48px, 7vw, 80px) 20px',
          }}>
            <div style={{ maxWidth:960, margin:'0 auto' }}>
              <div style={{ textAlign:'center', marginBottom:48 }}>
                <h2 style={{
                  fontFamily:"'DM Serif Display',serif",
                  fontSize:'clamp(24px, 3.5vw, 36px)',
                  color:'white', marginBottom:12,
                }}>
                  Pourquoi confier votre facture au Cabinet Global Enerdy ?
                </h2>
                <p style={{ fontSize:14, color:'rgba(255,255,255,0.55)', maxWidth:560, margin:'0 auto' }}>
                  Une expertise technique au service de votre rentabilité industrielle et commerciale.
                </p>
              </div>

              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:16 }}>
                {[
                  { titre:'Expertise MT',        desc:"Maîtrise approfondie de la tarification Moyenne Tension ENEO et de la réglementation ARSEL au Cameroun." },
                  { titre:'Ingénieurs certifiés', desc:"Une équipe d'experts en maîtrise de l'énergie avec une expérience terrain dans les industries camerounaises." },
                  { titre:'Résultats chiffrés',   desc:"Chaque recommandation est accompagnée d'une estimation précise des économies réalisables en FCFA." },
                  { titre:'Accompagnement ENEO',  desc:"Assistance dans vos démarches administratives de modification de contrat ou de contestation de facture." },
                ].map(item => (
                  <div key={item.titre} style={{
                    background:'rgba(255,255,255,0.05)',
                    border:'1px solid rgba(255,255,255,0.08)',
                    borderRadius:12, padding:22,
                  }}>
                    <div style={{
                      width:8, height:8, borderRadius:'50%',
                      background:'#10B981', marginBottom:14,
                    }}/>
                    <h3 style={{
                      fontFamily:"'DM Serif Display',serif",
                      fontSize:17, color:'white', marginBottom:8,
                    }}>{item.titre}</h3>
                    <p style={{ fontSize:12, color:'rgba(255,255,255,0.5)', lineHeight:1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA WhatsApp */}
              <div style={{ textAlign:'center', marginTop:48 }}>
                <a
                  href={`https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite démarrer un audit de ma facture ENEO MT.")}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:10,
                    background:'#10B981', color:'white',
                    textDecoration:'none', borderRadius:10,
                    padding:'14px 28px', fontSize:15, fontWeight:700,
                    fontFamily:"'DM Sans',sans-serif",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Nous contacter sur WhatsApp
                </a>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)', marginTop:12 }}>
                  +237 697 252 071 · globalenergysarl@gmail.com
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}

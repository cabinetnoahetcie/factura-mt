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
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'DM Sans', sans-serif" }}>

      <Navbar onAudit={scrollToTunnel} />

      {step === 0 && <Hero />}

      {/* Tunnel */}
      <main ref={tunnelRef} style={{
        maxWidth: 680, margin: '0 auto',
        padding: 'clamp(20px, 3vw, 36px) clamp(14px, 3vw, 20px)',
        paddingBottom: 72,
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

      {/* Sections marketing — visibles uniquement à l'étape 0 */}
      {step === 0 && (
        <>

          {/* ── BLOC PROBLÈME ── */}
          <section style={{
            background: 'white',
            borderTop: '1px solid #e2e8f0',
            padding: 'clamp(56px, 8vw, 96px) 24px',
          }}>
            <div style={{
              maxWidth: 1100, margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 56, alignItems: 'center',
            }}>
              {/* Texte */}
              <div>
                <div style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: '#10B981', marginBottom: 12,
                }}>
                  Le problème
                </div>
                <h2 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  color: '#0f172a', marginBottom: 20, lineHeight: 1.2,
                }}>
                  Ce que vous payez chaque mois sans le savoir
                </h2>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.85, marginBottom: 20 }}>
                  Ouvrez votre dernière facture ENEO MT. Sur cette page, plusieurs lignes
                  coûtent de l'argent à votre entreprise sans que vous ayez consommé
                  un seul kilowattheure de plus.
                </p>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.85, marginBottom: 28 }}>
                  La pénalité pour mauvais facteur de puissance (cos&nbsp;φ inférieur à 0,8)
                  peut représenter entre 5&nbsp;% et 12&nbsp;% de votre facture totale.
                  La prime fixe sur puissance souscrite surdimensionnée vous fait payer
                  pour une capacité que vos machines n'atteignent jamais. Les dépassements
                  de puissance sont facturés au tarif pénalisé sans que personne
                  dans votre équipe ne l'ait vu venir.
                </p>
                <p style={{
                  fontSize: 13, color: '#64748b',
                  fontStyle: 'italic', lineHeight: 1.7,
                  borderLeft: '3px solid #10B981', paddingLeft: 14,
                }}>
                  Ces trois postes représentent souvent entre 200&nbsp;000 et
                  1&nbsp;500&nbsp;000&nbsp;FCFA de surcoût mensuel dans les usines de Bassa,
                  Bonabéri, Magzi et dans les grands immeubles de Douala et Yaoundé.
                  Personne chez ENEO ne viendra vous le signaler.
                </p>
              </div>

              {/* Les 4 anomalies */}
              <div>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: '#64748b',
                  textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16,
                }}>
                  Les 4 anomalies les plus fréquentes
                </div>
                {[
                  {
                    num: '01',
                    titre: 'Pénalité énergie réactive',
                    desc: 'Cos φ non corrigé — facturé chaque mois sans justification technique.',
                  },
                  {
                    num: '02',
                    titre: 'Puissance souscrite surévaluée',
                    desc: 'Prime fixe excessive sur une puissance que vos équipements n\'atteignent jamais.',
                  },
                  {
                    num: '03',
                    titre: 'Dépassement de puissance appelée',
                    desc: 'Tarif pénalisé appliqué dès que la puissance atteinte dépasse la puissance souscrite.',
                  },
                  {
                    num: '04',
                    titre: 'Erreur de lecture de compteur',
                    desc: 'Index incorrectement reporté — vous êtes facturé pour une consommation que vous n\'avez pas faite.',
                  },
                ].map(item => (
                  <div key={item.num} style={{
                    display: 'flex', gap: 14, marginBottom: 18,
                    paddingBottom: 18, borderBottom: '1px solid #f1f5f9',
                  }}>
                    <div style={{
                      fontSize: 11, fontWeight: 800, color: '#10B981',
                      letterSpacing: '0.1em', flexShrink: 0, marginTop: 2,
                      minWidth: 28,
                    }}>{item.num}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>
                        {item.titre}
                      </div>
                      <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── PROCESSUS ── */}
          <section style={{
            background: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            padding: 'clamp(56px, 8vw, 96px) 24px',
          }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <div style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: '#10B981', marginBottom: 12,
                }}>
                  Comment ça fonctionne
                </div>
                <h2 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  color: '#0f172a', marginBottom: 14,
                }}>
                  Concrètement, voici ce qui se passe
                </h2>
                <p style={{
                  fontSize: 15, color: '#64748b',
                  maxWidth: 560, margin: '0 auto', lineHeight: 1.7,
                }}>
                  Pas d'application à installer. Pas de compte à créer.
                  Vous déposez votre facture, un ingénieur du cabinet l'ouvre,
                  la lit, et vous rappelle.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 20,
              }}>
                {[
                  {
                    num: '01',
                    titre: 'Vous déposez votre facture',
                    desc: 'Photographiez ou scannez votre facture ENEO MT du dernier mois (ou des 6 derniers mois si vous les avez). Formats acceptés : JPG, PNG. Si vous préférez nous l\'envoyer directement sur WhatsApp, c\'est aussi possible.',
                  },
                  {
                    num: '02',
                    titre: 'Un ingénieur analyse votre dossier',
                    desc: 'Sous 48 heures ouvrables, un membre de notre équipe ouvre votre dossier. Il calcule manuellement votre cos φ réel, vérifie votre puissance souscrite par rapport à votre puissance atteinte, et identifie chaque ligne anormale de votre facture. Ce n\'est pas un algorithme.',
                  },
                  {
                    num: '03',
                    titre: 'Vous recevez un rapport en FCFA',
                    desc: 'Nous vous appelons pour vous présenter les résultats. Vous recevez un document clair indiquant le montant exact des anomalies détectées, les économies mensuelles réalisables en FCFA, et les démarches à engager auprès d\'ENEO. Vous n\'êtes jamais engagé à quoi que ce soit.',
                  },
                ].map(item => (
                  <div key={item.num} style={{
                    background: 'white', border: '1px solid #e2e8f0',
                    borderRadius: 14, padding: 28,
                    borderTop: '3px solid #10B981',
                  }}>
                    <div style={{
                      fontSize: 13, fontWeight: 800, color: '#10B981',
                      letterSpacing: '0.12em', marginBottom: 14,
                    }}>{item.num}</div>
                    <h3 style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: 20, color: '#0f172a', marginBottom: 12,
                    }}>{item.titre}</h3>
                    <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.75 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA secondaire */}
              <div style={{ textAlign: 'center', marginTop: 40 }}>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 9,
                    background: 'white', color: '#0f172a',
                    border: '1.5px solid #e2e8f0',
                    textDecoration: 'none', borderRadius: 9,
                    padding: '13px 24px', fontSize: 14, fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Nous envoyer la facture sur WhatsApp
                </a>
                <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 8 }}>
                  Si vous préférez le contact direct : +237 697 252 071
                </div>
              </div>
            </div>
          </section>

          {/* ── SÉCURITÉ ── */}
          <section style={{
            background: '#0f172a',
            padding: 'clamp(56px, 8vw, 96px) 24px',
          }}>
            <div style={{ maxWidth: 960, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 52 }}>
                <h2 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  color: 'white', marginBottom: 14,
                }}>
                  Vos données de facturation ne sortiront jamais de notre cabinet
                </h2>
                <p style={{
                  fontSize: 14, color: 'rgba(255,255,255,0.55)',
                  maxWidth: 600, margin: '0 auto', lineHeight: 1.8,
                }}>
                  Une facture ENEO MT n'est pas un document anodin. Elle contient vos données
                  de consommation horaire, votre puissance souscrite, et des informations
                  qui permettraient à un concurrent d'estimer votre niveau de production.
                  Nous le savons. Et nous prenons cela au sérieux.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 16, marginBottom: 48,
              }}>
                {[
                  {
                    num: '01',
                    titre: 'Transmission chiffrée',
                    desc: 'Tous les fichiers que vous déposez transitent via une connexion HTTPS avec chiffrement TLS 1.3. Aucune donnée ne circule en clair sur le réseau.',
                  },
                  {
                    num: '02',
                    titre: 'Accès restreint',
                    desc: "Seul l'ingénieur assigné à votre dossier a accès à vos fichiers. Aucun accès tiers. Aucun partage commercial.",
                  },
                  {
                    num: '03',
                    titre: 'Suppression garantie sous 48h',
                    desc: "Dès la livraison de votre rapport, vos fichiers sont définitivement supprimés de nos serveurs. Nous ne constituons pas de base de données à partir de vos factures.",
                  },
                  {
                    num: '04',
                    titre: 'Cadre légal camerounais',
                    desc: "Notre engagement est formalisé dans le respect de la loi n°2010/012 du 21 décembre 2010 relative à la cybersécurité et à la cybercriminalité au Cameroun.",
                  },
                ].map(item => (
                  <div key={item.num} style={{
                    borderLeft: '3px solid #10B981',
                    paddingLeft: 20, paddingTop: 4,
                  }}>
                    <div style={{
                      fontSize: 11, fontWeight: 800, color: '#10B981',
                      letterSpacing: '0.12em', marginBottom: 8,
                    }}>{item.num}</div>
                    <div style={{
                      fontSize: 14, fontWeight: 700, color: 'white', marginBottom: 8,
                    }}>{item.titre}</div>
                    <div style={{
                      fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75,
                    }}>{item.desc}</div>
                  </div>
                ))}
              </div>

              <div style={{
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.2)',
                borderRadius: 12, padding: '20px 24px',
                textAlign: 'center',
                fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7,
              }}>
                Si vous avez des questions spécifiques sur la protection de vos données
                avant de déposer votre dossier, appelez-nous directement au{' '}
                <a href="tel:+237697252071"
                  style={{ color: '#10B981', textDecoration: 'none', fontWeight: 700 }}>
                  +237 697 252 071
                </a>.
                Nous répondrons à chaque question sans détour.
              </div>
            </div>
          </section>

          {/* ── QUI SOMMES-NOUS ── */}
          <section style={{
            background: 'white',
            borderTop: '1px solid #e2e8f0',
            padding: 'clamp(56px, 8vw, 96px) 24px',
          }}>
            <div style={{
              maxWidth: 1100, margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 56, alignItems: 'center',
            }}>
              <div>
                <div style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: '#10B981', marginBottom: 12,
                }}>
                  Qui sommes-nous
                </div>
                <h2 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  color: '#0f172a', marginBottom: 20, lineHeight: 1.2,
                }}>
                  Des ingénieurs camerounais. Pas un chatbot.
                </h2>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.85, marginBottom: 18 }}>
                  Le Cabinet Global Enerdy est composé d'ingénieurs et de techniciens
                  spécialisés dans la maîtrise de l'énergie électrique, basés à Douala.
                  Nous travaillons sur le terrain — dans les usines de Bassa, les hôtels
                  du centre-ville, les campus universitaires et les sites industriels
                  de Bonabéri.
                </p>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.85, marginBottom: 18 }}>
                  Nous avons créé FacturaMT parce que nous constations, lors de nos audits
                  physiques, que la quasi-totalité de nos clients payaient des pénalités
                  évitables depuis des années. Personne ne leur avait expliqué leur facture.
                  Personne ne leur avait montré les chiffres.
                </p>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.85, marginBottom: 28 }}>
                  Cette plateforme ne remplace pas un audit physique complet. Elle permet
                  à n'importe quel directeur financier ou chef d'entreprise camerounais
                  d'obtenir, gratuitement et en 48 heures, une première lecture de sa
                  facture par un vrai professionnel. Si votre site nécessite une intervention
                  sur place, notre équipe se déplace.
                </p>

                <div style={{
                  background: '#f8fafc', border: '1px solid #e2e8f0',
                  borderLeft: '3px solid #10B981',
                  borderRadius: 9, padding: '16px 18px',
                }}>
                  <div style={{
                    fontSize: 12, fontWeight: 700, color: '#0f172a', marginBottom: 10,
                  }}>
                    Contact direct
                  </div>
                  <div style={{ fontSize: 13, color: '#475569', lineHeight: 2.2 }}>
                    <div>
                      <a href="tel:+237697252071"
                        style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 600 }}>
                        +237 697 252 071
                      </a>
                      {' '}— WhatsApp &amp; appel direct
                    </div>
                    <div>
                      <a href="mailto:globalenergysarl@gmail.com"
                        style={{ color: '#64748b', textDecoration: 'none' }}>
                        globalenergysarl@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Placeholder photo équipe */}
              <div>
                <div style={{
                  background: '#f1f5f9',
                  border: '2px dashed #cbd5e1',
                  borderRadius: 14,
                  aspectRatio: '4/3',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: 32, textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: 11, fontWeight: 700, color: '#94a3b8',
                    textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12,
                  }}>
                    Photo de l'équipe à intégrer
                  </div>
                  <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.7 }}>
                    Recommandé : photo réelle de l'équipe sur un site industriel
                    (usine de Bassa ou Bonabéri), tenue professionnelle,
                    matériel d'audit visible — pince ampèremétrique,
                    analyseur de réseau.
                  </div>
                </div>
                <div style={{
                  fontSize: 11, color: '#94a3b8',
                  textAlign: 'center', marginTop: 10, fontStyle: 'italic',
                }}>
                  Remplacez ce bloc par votre photo d'équipe réelle
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

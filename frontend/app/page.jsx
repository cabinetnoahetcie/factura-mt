'use client';
// app/page.jsx
import { useState, useRef } from 'react';
import Navbar      from '@/components/layout/Navbar';
import Footer      from '@/components/layout/Footer';
import Stepper     from '@/components/ui/Stepper';
import StepUpload  from '@/components/forms/StepUpload';
import StepInfos   from '@/components/forms/StepInfos';
import StepConfirm from '@/components/forms/StepConfirm';

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Energy, je souhaite obtenir des informations sur vos missions d'audit.")}`;

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

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO + FORMULAIRE
      ═══════════════════════════════════════════ */}
      <section id="accueil" className="relative bg-white pt-32 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60"/>
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-3xl opacity-60"/>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Hero text — centré */}
          <div className="max-w-3xl mx-auto text-center mb-14">
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Le Cabinet Global Energy conduit des audits experts de vos factures d'électricité
              Moyenne Tension afin d'identifier les anomalies tarifaires et de vous restituer,
              sous 48 heures, une évaluation précise des économies réalisables.
              L'étude est gratuite et sans engagement.
            </p>
          </div>

          {/* Deux colonnes : formulaire + image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-20">

            {/* Colonne gauche — formulaire */}
            <div ref={tunnelRef}>
              {/* Chiffres clés */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { val:'8 / 10', lbl:'structures présentent une anomalie tarifaire' },
                  { val:'48h',    lbl:'délai de restitution des conclusions'          },
                  { val:'0 FCFA', lbl:'aucun frais pour l\'étude initiale'           },
                ].map(({ val, lbl }) => (
                  <div key={val} className="text-center bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <div className="text-xl font-extrabold text-slate-900">{val}</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-tight mt-1">{lbl}</div>
                  </div>
                ))}
              </div>
              {/* Tunnel */}
              <div className="bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/50 p-8">
                <Stepper current={step} />
                <div className="mt-10">
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
            </div>

            {/* Colonne droite — image hero */}
            <div className="relative hidden lg:block sticky top-24">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/40 border-8 border-white">
                <img
                  src="/images/engineer-blue.jpg"
                  alt="Expert Cabinet Global Energy sur site industriel"
                  className="w-full h-[580px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-3xl"/>
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[220px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-900">Expertise de terrain</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Nos experts interviennent auprès des industries et grands comptes de Douala et Yaoundé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — EXPERTISE & BÉNÉFICES
      ═══════════════════════════════════════════ */}
      <section id="expertise" className="bg-slate-50 py-28 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              Notre expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Transformez vos charges énergétiques injustifiées en opportunités d'optimisation.
            </h2>
            <div className="space-y-5 text-slate-600 text-[15px] leading-relaxed mb-8">
              <p>
                Les factures d'électricité Moyenne Tension intègrent des postes de charges complexes —
                pénalités contractuelles, primes de puissance, corrections tarifaires — dont l'anomalie
                échappe aux équipes financières faute d'expertise sectorielle. Ces surcoûts, pourtant
                récupérables, grèvent chaque mois votre compte de résultat.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-6 py-3 bg-blue-50 rounded-r-xl">
                <p className="text-slate-800 font-semibold">
                  Pour les établissements industriels, hôteliers et institutionnels de Douala
                  et Yaoundé, ces anomalies représentent un surcoût mensuel compris entre{' '}
                  <span className="text-blue-600 font-bold">200 000 et 1 500 000 FCFA.</span>
                </p>
              </blockquote>
            </div>

            {/* 4 bénéfices */}
            <div className="space-y-4">
              {[
                { titre:'Économies concrètes',       desc:"Identification et récupération des sommes indûment facturées." },
                { titre:'Optimisation durable',      desc:"Ajustement de vos contrats pour une adéquation parfaite avec vos besoins réels." },
                { titre:'Conformité assurée',        desc:"Vos factures en parfaite adéquation avec les normes ARSEL en vigueur." },
                { titre:'Accompagnement complet',    desc:"Nous gérons les démarches auprès d'ENEO pour que vous vous concentriez sur votre activité." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                  <div>
                    <span className="font-bold text-slate-900 text-sm">{item.titre} — </span>
                    <span className="text-slate-500 text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="/images/office-screens.jpg" alt="Bureau d'ingénierie Cabinet Global Energy"
                className="w-full h-[420px] object-cover"/>
            </div>
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg font-bold text-sm text-center leading-tight">
              Jusqu'à<br/><span className="text-2xl">-12%</span><br/>sur vos charges
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — PROCESSUS
      ═══════════════════════════════════════════ */}
      <section id="processus" className="bg-white py-28 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white order-2 lg:order-1">
              <img
                src="/images/team-audit.jpg"
                alt="Experts Cabinet Global Energy en mission d'audit"
                className="w-full h-[320px] object-cover"
              />
            </div>
            {/* Titre + intro */}
            <div className="order-1 lg:order-2">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                Comment ça marche
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Un processus simple et transparent pour des économies garanties.
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                De la réception de votre facture à la concrétisation des économies,
                chaque étape est conduite par nos experts avec rigueur et transparence.
                Aucun automatisme — uniquement une analyse humaine et personnalisée.
              </p>
            </div>
          </div>

          {/* 4 étapes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                num:   '01',
                titre: 'Transmission de la facture',
                desc:  "Déposez votre facture d'électricité Moyenne Tension via notre plateforme sécurisée. Simple, rapide et sans engagement.",
              },
              {
                num:   '02',
                titre: 'Analyse experte',
                desc:  "Sous 48 heures, un expert qualifié du Cabinet examine votre facturation pour identifier les anomalies. Aucun traitement automatisé.",
              },
              {
                num:   '03',
                titre: 'Restitution des conclusions',
                desc:  "Nous vous contactons par téléphone. Vous décidez, en toute autonomie, de la suite à donner. Aucun engagement à ce stade.",
              },
              {
                num:   '04',
                titre: 'Accompagnement et suivi',
                desc:  "Si vous souhaitez concrétiser les économies, nous vous assistons auprès d'ENEO jusqu'à l'application effective des corrections.",
              },
            ].map((item, i) => (
              <div key={item.num} className="relative">
                {/* Connecteur */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-100 z-0" style={{width:'calc(100% - 2rem)', left:'calc(50% + 1.5rem)'}}/>
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-lg mx-auto mb-5 shadow-lg shadow-blue-200">
                    {item.num}
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-3">{item.titre}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modèle de rémunération */}
          <div className="bg-slate-900 rounded-3xl p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                  Modèle de rémunération
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Vous ne payez pas une mission à l'issue incertaine.
                </h3>
                <p className="text-slate-400 text-[15px] leading-relaxed">
                  Notre rémunération est exclusivement indexée sur les économies effectivement
                  réalisées par votre entreprise. En l'absence d'économies constatées,
                  aucun honoraire n'est facturé. L'étude initiale est gratuite et sans engagement.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon:'◎', titre:'Étude gratuite',              desc:"Analyse sans contrepartie financière." },
                  { icon:'○', titre:'Si aucun levier identifié',   desc:"Aucun honoraire. Aucun engagement." },
                  { icon:'●', titre:'Si des économies identifiées', desc:"Accord formalisé. Honoraires sur résultats uniquement." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                    <span className="text-blue-400 text-lg flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-bold text-white text-sm">{item.titre}</p>
                      <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — LE CABINET
      ═══════════════════════════════════════════ */}
      <section id="cabinet" className="bg-slate-50 py-28 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              Le Cabinet
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Cabinet Global Energy :<br/>votre partenaire en ingénierie énergétique.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              {/* Image technicien */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white mb-8">
                <img
                  src="/images/engineer-yellow.jpg"
                  alt="Expert Cabinet Global Energy sur tableau électrique"
                  className="w-full h-[260px] object-cover"
                />
              </div>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                Établi à Douala depuis 2022, le Cabinet Global Energy est spécialisé dans l'audit
                et l'optimisation des factures d'électricité Moyenne Tension pour les entreprises,
                industries et établissements institutionnels du Cameroun. Notre mission est de
                transformer vos charges énergétiques en opportunités d'optimisation.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-900">Réglementation — </span>
                Nos analyses sont conformes aux directives de l'ARSEL et à la loi camerounaise
                n°2010/012 relative à la cybersécurité et à la cybercriminalité.
              </div>
            </div>

            {/* Équipe */}
            <div className="space-y-4">
              {[
                {
                  init:  'NK',
                  nom:   'Noah Kevyn Sorel',
                  titre: 'Co-fondateur — Directeur Technique',
                  desc:  "Expert en maîtrise de l'énergie, il supervise l'ensemble des stratégies d'optimisation et garantit la rigueur technique de chaque analyse.",
                },
                {
                  init:  'AE',
                  nom:   'Assoua Effon Cédric',
                  titre: 'Expert en facturation MT & Audit terrain',
                  desc:  "Spécialiste de la facturation Moyenne Tension et des audits sur site, il assure la précision des diagnostics et la pertinence des recommandations.",
                },
              ].map((m, i) => (
                <div key={i} className="flex items-start gap-5 bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0">
                    {m.init}
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-base">{m.nom}</div>
                    <div className="text-xs font-semibold text-blue-600 mb-2">{m.titre}</div>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — CONTACT
      ═══════════════════════════════════════════ */}
      <section id="contact" className="bg-slate-900 py-28 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Contactez le Cabinet Global Energy.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                ),
                bg:    'bg-green-600',
                titre: 'WhatsApp & Appel',
                val:   '+237 697 252 071',
                sub:   'Réponse sous 2h ouvrables',
                href:  WA_URL,
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                bg:    'bg-blue-600',
                titre: 'Email',
                val:   'globalenergysarl@gmail.com',
                sub:   'Réponse sous 24h ouvrables',
                href:  'mailto:globalenergysarl@gmail.com',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                bg:    'bg-slate-600',
                titre: 'Siège social',
                val:   'Douala, Akwa — Immeuble PMUC',
                sub:   'Cameroun · Sur rendez-vous',
                href:  null,
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                bg:    'bg-slate-600',
                titre: 'Horaires',
                val:   'Lun – Ven · 08h – 16h',
                sub:   '5 jours sur 7',
                href:  null,
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{item.titre}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="font-bold text-white text-sm block mb-1 hover:text-blue-400 transition-colors break-all">
                    {item.val}
                  </a>
                ) : (
                  <p className="font-bold text-white text-sm mb-1">{item.val}</p>
                )}
                <p className="text-slate-500 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

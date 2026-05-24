// app/a-propos/page.jsx
'use client';
import Link from 'next/link';

export const metadata = {
  title: 'À propos — Cabinet Global Enerdy SARL · Douala',
  description: 'Cabinet d\'ingénierie énergétique basé à Douala depuis 2022. Audit et optimisation des factures ENEO Moyenne Tension pour les industries et grands comptes au Cameroun.',
};

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite en savoir plus sur vos services.")}`;

const NAV = [
  { href:'/',            label:'Accueil'    },
  { href:'/a-propos',   label:'À propos'   },
  { href:'/references', label:'Références' },
  { href:'/contact',    label:'Contact'    },
];

function Navbar() {
  return (
    <nav style={{
      background:'#0f172a', borderBottom:'1px solid rgba(255,255,255,0.07)',
      padding:'0 24px', height:64,
      display:'flex', alignItems:'center', justifyContent:'space-between',
      position:'sticky', top:0, zIndex:100,
    }}>
      <Link href="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
          <rect width="36" height="36" rx="8" fill="#10B981"/>
          <polyline points="6,27 12,14 18,21 23,13 30,27" fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
          <circle cx="23" cy="11" r="2.5" fill="#F59E0B"/>
        </svg>
        <div>
          <div style={{ fontSize:14, fontWeight:700, color:'white' }}>Cabinet Global Enerdy</div>
          <div style={{ fontSize:9, color:'#10B981', letterSpacing:'0.15em', textTransform:'uppercase' }}>SARL · Douala</div>
        </div>
      </Link>
      <div style={{ display:'flex', gap:20, alignItems:'center' }}>
        {NAV.map(({ href, label }) => (
          <Link key={href} href={href} style={{ fontSize:13, fontWeight:500, color:'rgba(255,255,255,0.65)', textDecoration:'none' }}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default function APropos() {
  return (
    <div style={{ background:'#f8fafc', minHeight:'100vh', fontFamily:"'DM Sans',sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <div style={{
        background:'linear-gradient(135deg,#0f172a,#1e293b)',
        padding:'64px 24px', textAlign:'center',
      }}>
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#10B981', marginBottom:12 }}>
          Qui sommes-nous
        </div>
        <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:'clamp(28px,5vw,48px)', color:'white', marginBottom:16, lineHeight:1.2 }}>
          Des ingénieurs camerounais.<br/>Pas un chatbot.
        </h1>
        <p style={{ fontSize:16, color:'rgba(255,255,255,0.55)', maxWidth:560, margin:'0 auto', lineHeight:1.8 }}>
          Cabinet d'ingénierie énergétique basé à Douala depuis 2022,
          spécialisé dans l'audit des factures ENEO Moyenne Tension.
        </p>
      </div>

      <div style={{ maxWidth:960, margin:'0 auto', padding:'56px 24px 80px' }}>

        {/* Chiffres clés */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:16, marginBottom:56 }}>
          {[
            { val:'2022', lbl:'Année de création'           },
            { val:'3',    lbl:'Clients accompagnés'         },
            { val:'48h',  lbl:'Délai de remise du rapport'  },
            { val:'100%', lbl:'Audit gratuit & sans engagement' },
          ].map(({ val, lbl }) => (
            <div key={val} style={{
              background:'white', border:'1px solid #e2e8f0',
              borderRadius:12, padding:'24px 20px', textAlign:'center',
              borderTop:'3px solid #10B981',
              boxShadow:'0 2px 12px rgba(0,0,0,0.04)',
            }}>
              <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:36, color:'#0f172a', lineHeight:1 }}>{val}</div>
              <div style={{ fontSize:12, color:'#64748b', marginTop:8, lineHeight:1.5 }}>{lbl}</div>
            </div>
          ))}
        </div>

        {/* Notre histoire */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:40, marginBottom:56, alignItems:'center' }}>
          <div>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#10B981', marginBottom:12 }}>
              Notre histoire
            </div>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:'clamp(22px,3vw,32px)', color:'#0f172a', marginBottom:20, lineHeight:1.2 }}>
              Pourquoi nous avons créé FacturaMT
            </h2>
            <p style={{ fontSize:14, color:'#475569', lineHeight:1.85, marginBottom:16 }}>
              Créé en 2022, le Cabinet Global Enerdy est né d'un constat simple :
              la quasi-totalité des entreprises camerounaises raccordées en Moyenne Tension
              paient des pénalités évitables chaque mois — pénalités sur l'énergie réactive,
              puissance souscrite surdimensionnée, dépassements non détectés.
            </p>
            <p style={{ fontSize:14, color:'#475569', lineHeight:1.85, marginBottom:16 }}>
              Personne ne leur expliquait leur facture. Personne ne leur montrait les chiffres.
              Nous avons décidé de changer ça en mettant notre expertise technique
              au service des industries, hôtels et grands bâtiments de Douala et Yaoundé.
            </p>
            <p style={{ fontSize:14, color:'#475569', lineHeight:1.85 }}>
              FacturaMT est notre outil numérique pour démocratiser l'accès à l'audit
              énergétique. Il ne remplace pas un audit physique complet — il permet
              à tout directeur financier camerounais d'obtenir gratuitement et en 48 heures
              une première lecture de sa facture par un vrai professionnel.
            </p>
          </div>

          {/* Photo équipe */}
          <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 8px 32px rgba(0,0,0,0.12)', border:'4px solid white' }}>
            <img
              src="/images/team.jpg"
              alt="Équipe Cabinet Global Enerdy"
              style={{ width:'100%', height:320, objectFit:'cover', display:'block' }}
              onError={e => { e.target.style.display='none'; }}
            />
            <div style={{
              background:'#ecfdf5', padding:'32px 24px', textAlign:'center',
              display:'flex', flexDirection:'column', alignItems:'center', gap:8,
            }}>
              <div style={{ fontSize:13, fontWeight:700, color:'#065f46' }}>
                L'équipe Cabinet Global Enerdy
              </div>
              <div style={{ fontSize:12, color:'#047857' }}>Douala, Cameroun · Depuis 2022</div>
            </div>
          </div>
        </div>

        {/* L'équipe */}
        <div style={{ marginBottom:56 }}>
          <div style={{ textAlign:'center', marginBottom:40 }}>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#10B981', marginBottom:10 }}>
              L'équipe
            </div>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:'clamp(22px,3vw,32px)', color:'#0f172a' }}>
              Les ingénieurs qui analysent vos dossiers
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:20 }}>
            {[
              { nom:'Noah Kevyn Sorel',     titre:"Ingénieur en maîtrise de l'énergie",   role:'Co-fondateur & Directeur technique'          },
              { nom:'Assoua Effon Cédric',  titre:'Ingénieur électricien',                role:'Expert en facturation MT & audit terrain'    },
            ].map((m, i) => (
              <div key={i} style={{
                background:'white', border:'1px solid #e2e8f0',
                borderRadius:14, padding:28,
                boxShadow:'0 2px 12px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  width:52, height:52, borderRadius:'50%',
                  background:'#ecfdf5', border:'2px solid #10B981',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:18, fontWeight:700, color:'#065f46', marginBottom:14,
                }}>
                  {m.nom.split(' ').map(n=>n[0]).slice(0,2).join('')}
                </div>
                <div style={{ fontSize:16, fontWeight:700, color:'#0f172a', fontFamily:"'DM Serif Display',serif", marginBottom:4 }}>{m.nom}</div>
                <div style={{ fontSize:12, color:'#10B981', fontWeight:600, marginBottom:4 }}>{m.titre}</div>
                <div style={{ fontSize:12, color:'#64748b' }}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Notre démarche */}
        <div style={{ background:'#0f172a', borderRadius:16, padding:'clamp(32px,4vw,48px)', marginBottom:40 }}>
          <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:'clamp(20px,3vw,28px)', color:'white', marginBottom:28, textAlign:'center' }}>
            Notre démarche en 3 étapes
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:24 }}>
            {[
              { num:'01', titre:'Analyse digitale',       desc:'Diagnostic de votre facture par nos ingénieurs via la plateforme FacturaMT.'              },
              { num:'02', titre:'Contre-expertise',       desc:'Validation manuelle des anomalies et chiffrage précis des économies réalisables en FCFA.' },
              { num:'03', titre:'Accompagnement ENEO',    desc:'Assistance dans vos démarches de modification de contrat ou de contestation de facture.'  },
            ].map(item => (
              <div key={item.num} style={{ borderLeft:'3px solid #10B981', paddingLeft:20 }}>
                <div style={{ fontSize:11, fontWeight:800, color:'#10B981', letterSpacing:'0.12em', marginBottom:8 }}>{item.num}</div>
                <div style={{ fontSize:15, fontWeight:700, color:'white', marginBottom:8 }}>{item.titre}</div>
                <div style={{ fontSize:13, color:'rgba(255,255,255,0.5)', lineHeight:1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign:'center' }}>
          <Link href="/" style={{
            display:'inline-block', background:'#10B981', color:'white',
            textDecoration:'none', borderRadius:9, padding:'14px 32px',
            fontSize:14, fontWeight:700, fontFamily:"'DM Sans',sans-serif", marginRight:12,
          }}>
            Déposer ma facture →
          </Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{
            display:'inline-block', background:'white', color:'#0f172a',
            border:'1.5px solid #e2e8f0', textDecoration:'none', borderRadius:9,
            padding:'13px 24px', fontSize:14, fontWeight:600, fontFamily:"'DM Sans',sans-serif",
          }}>
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
}

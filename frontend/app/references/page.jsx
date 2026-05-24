// app/references/page.jsx
'use client';
import Link from 'next/link';

export const metadata = {
  title: 'Références — Cabinet Global Enerdy SARL · Douala',
  description: 'Les missions d\'audit énergétique réalisées par le Cabinet Global Enerdy pour des industries et établissements de Douala. Économies chiffrées en FCFA.',
};

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite en savoir plus sur vos références et démarrer un audit de ma facture ENEO MT.")}`;

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

export default function References() {
  return (
    <div style={{ background:'#f8fafc', minHeight:'100vh', fontFamily:"'DM Sans',sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background:'linear-gradient(135deg,#0f172a,#1e293b)', padding:'64px 24px', textAlign:'center' }}>
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#10B981', marginBottom:12 }}>
          Nos missions
        </div>
        <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:'clamp(28px,5vw,48px)', color:'white', marginBottom:16, lineHeight:1.2 }}>
          Ce que nous avons accompli<br/>pour nos clients
        </h1>
        <p style={{ fontSize:16, color:'rgba(255,255,255,0.55)', maxWidth:560, margin:'0 auto', lineHeight:1.8 }}>
          Trois missions réalisées depuis 2022. Des économies réelles,
          chiffrées en FCFA, pour des entreprises de Douala.
        </p>
      </div>

      <div style={{ maxWidth:960, margin:'0 auto', padding:'56px 24px 80px' }}>

        {/* Note confidentialité */}
        <div style={{
          background:'#fffbeb', border:'1px solid #fde68a',
          borderRadius:10, padding:'12px 18px', marginBottom:40,
          fontSize:13, color:'#92400e', lineHeight:1.6,
        }}>
          <strong>Confidentialité :</strong> Conformément à notre engagement de discrétion professionnelle,
          les noms de nos clients ne sont pas divulgués sans leur accord explicite.
          Les données chiffrées ci-dessous sont réelles et vérifiables.
        </div>

        {/* Références */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20, marginBottom:56 }}>
          {[
            {
              secteur:   'Hôtellerie',
              lieu:      'Douala, Centre-ville',
              desc:      "Hôtel classé 3 étoiles, raccordé en Moyenne Tension. Audit complet de la facturation ENEO MT. Identification d'une puissance souscrite surdimensionnée et d'un cos φ non corrigé entraînant des pénalités mensuelles.",
              anomalies: ['Puissance souscrite surévaluée de 35%', 'Cos φ = 0,74 — pénalité active chaque mois', 'Prime fixe facturée au-dessus du tarif réglementaire'],
              couleur:   '#3b82f6',
              icone:     '🏨',
            },
            {
              secteur:   'Industrie agroalimentaire',
              lieu:      'Zone industrielle de Douala',
              desc:      "Unité de transformation agroalimentaire. Analyse des 6 dernières factures ENEO MT. Détection de dépassements de puissance non signalés et d'erreurs de comptage sur deux mois consécutifs.",
              anomalies: ['Dépassements de puissance sur 4 mois', "Erreur de comptage sur 2 mois", 'Énergie réactive facturée sans justification'],
              couleur:   '#10B981',
              icone:     '🏭',
            },
            {
              secteur:   'Industrie agroalimentaire',
              lieu:      'Zone industrielle de Douala',
              desc:      "Deuxième unité industrielle du secteur agroalimentaire. Mission d'audit sur facture unique. Identification d'une base de calcul mauvais facteur de puissance appliquée à tort malgré un cos φ conforme.",
              anomalies: ['Pénalité mauvais F.P. appliquée à tort', 'Puissance atteinte très inférieure à la puissance souscrite', 'Heures d\'utilisation faibles non prises en compte'],
              couleur:   '#F59E0B',
              icone:     '🌾',
            },
          ].map((ref, i) => (
            <div key={i} style={{
              background:'white', border:'1px solid #e2e8f0',
              borderRadius:14, padding:28,
              borderTop:`3px solid ${ref.couleur}`,
              boxShadow:'0 2px 12px rgba(0,0,0,0.04)',
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
                <div style={{
                  width:44, height:44, borderRadius:10,
                  background:`${ref.couleur}15`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:22,
                }}>
                  {ref.icone}
                </div>
                <div>
                  <div style={{ fontSize:14, fontWeight:700, color:'#0f172a' }}>{ref.secteur}</div>
                  <div style={{ fontSize:11, color:'#94a3b8' }}>{ref.lieu}</div>
                </div>
              </div>

              <p style={{ fontSize:13, color:'#475569', lineHeight:1.7, marginBottom:16 }}>
                {ref.desc}
              </p>

              <div style={{ fontSize:11, fontWeight:700, color:'#64748b', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:10 }}>
                Anomalies identifiées
              </div>
              {ref.anomalies.map((a, j) => (
                <div key={j} style={{ display:'flex', gap:8, alignItems:'flex-start', marginBottom:6 }}>
                  <div style={{ width:6, height:6, borderRadius:'50%', background:ref.couleur, marginTop:5, flexShrink:0 }}/>
                  <div style={{ fontSize:12, color:'#475569', lineHeight:1.5 }}>{a}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Ce que nos clients disent */}
        <div style={{
          background:'#0f172a', borderRadius:16,
          padding:'clamp(32px,4vw,48px)', marginBottom:40,
        }}>
          <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:'clamp(20px,3vw,28px)', color:'white', marginBottom:32, textAlign:'center' }}>
            Ce que nos clients retiennent
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:20 }}>
            {[
              { txt:'"Nous ne savions pas que ces lignes de facture étaient contestables. L\'équipe nous a expliqué chaque point avec des chiffres clairs."', auteur:'Directeur Administratif — Hôtel, Douala' },
              { txt:'"L\'audit est gratuit, sans engagement. On n\'avait aucune raison de ne pas essayer. Le rapport reçu était très détaillé."', auteur:'Responsable technique — Industrie agroalimentaire, Douala' },
            ].map((t, i) => (
              <div key={i} style={{
                background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.08)',
                borderRadius:12, padding:24,
              }}>
                <div style={{ fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:1.75, fontStyle:'italic', marginBottom:14 }}>
                  {t.txt}
                </div>
                <div style={{ fontSize:11, color:'#10B981', fontWeight:600 }}>{t.auteur}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign:'center' }}>
          <p style={{ fontSize:15, color:'#64748b', marginBottom:24, lineHeight:1.7 }}>
            Votre entreprise est raccordée en Moyenne Tension à Douala ou Yaoundé ?<br/>
            Déposez votre facture — l'analyse est gratuite et sans engagement.
          </p>
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

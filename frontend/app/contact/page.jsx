// app/contact/page.jsx
import Link from 'next/link';

export const metadata = {
  title: 'Contact — Cabinet Global Enerdy SARL · Douala Akwa',
  description: 'Contactez le Cabinet Global Enerdy pour un audit gratuit de votre facture ENEO MT. Douala Akwa, Immeuble PMUC. WhatsApp : +237 697 252 071.',
};

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite démarrer un audit de ma facture ENEO MT.")}`;

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

export default function Contact() {
  return (
    <div style={{ background:'#f8fafc', minHeight:'100vh', fontFamily:"'DM Sans',sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background:'linear-gradient(135deg,#0f172a,#1e293b)', padding:'64px 24px', textAlign:'center' }}>
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#10B981', marginBottom:12 }}>
          Nous joindre
        </div>
        <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:'clamp(28px,5vw,48px)', color:'white', marginBottom:16, lineHeight:1.2 }}>
          Contactez-nous
        </h1>
        <p style={{ fontSize:16, color:'rgba(255,255,255,0.55)', maxWidth:520, margin:'0 auto', lineHeight:1.8 }}>
          Une question avant de déposer votre facture ?
          Notre équipe répond du lundi au vendredi, de 8h à 16h.
        </p>
      </div>

      <div style={{ maxWidth:880, margin:'0 auto', padding:'56px 24px 80px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:32 }}>

          {/* Coordonnées */}
          <div>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:'clamp(20px,3vw,26px)', color:'#0f172a', marginBottom:28 }}>
              Nos coordonnées
            </h2>

            {/* WhatsApp */}
            <div style={{
              background:'#ecfdf5', border:'1px solid #d1fae5',
              borderRadius:12, padding:20, marginBottom:16,
              display:'flex', gap:14, alignItems:'flex-start',
            }}>
              <div style={{
                width:40, height:40, borderRadius:10,
                background:'#10B981', flexShrink:0,
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize:12, fontWeight:700, color:'#065f46', marginBottom:4 }}>WhatsApp & Appel direct</div>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize:18, fontWeight:700, color:'#10B981', textDecoration:'none', display:'block', marginBottom:4 }}>
                  +237 697 252 071
                </a>
                <div style={{ fontSize:12, color:'#047857' }}>Réponse sous 2h en jours ouvrables</div>
              </div>
            </div>

            {/* Email */}
            <div style={{
              background:'white', border:'1px solid #e2e8f0',
              borderRadius:12, padding:20, marginBottom:16,
              display:'flex', gap:14, alignItems:'flex-start',
            }}>
              <div style={{
                width:40, height:40, borderRadius:10,
                background:'#f1f5f9', flexShrink:0,
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize:12, fontWeight:700, color:'#374151', marginBottom:4 }}>Email professionnel</div>
                <a href="mailto:globalenergysarl@gmail.com"
                  style={{ fontSize:15, fontWeight:600, color:'#0f172a', textDecoration:'none', display:'block', marginBottom:4 }}>
                  globalenergysarl@gmail.com
                </a>
                <div style={{ fontSize:12, color:'#64748b' }}>Réponse sous 24h ouvrables</div>
              </div>
            </div>

            {/* Adresse */}
            <div style={{
              background:'white', border:'1px solid #e2e8f0',
              borderRadius:12, padding:20, marginBottom:16,
              display:'flex', gap:14, alignItems:'flex-start',
            }}>
              <div style={{
                width:40, height:40, borderRadius:10,
                background:'#f1f5f9', flexShrink:0,
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize:12, fontWeight:700, color:'#374151', marginBottom:4 }}>Adresse physique</div>
                <div style={{ fontSize:15, fontWeight:600, color:'#0f172a', marginBottom:4 }}>
                  Douala, Akwa<br/>Immeuble PMUC
                </div>
                <div style={{ fontSize:12, color:'#64748b' }}>Cameroun</div>
              </div>
            </div>

            {/* Horaires */}
            <div style={{
              background:'white', border:'1px solid #e2e8f0',
              borderRadius:12, padding:20,
              display:'flex', gap:14, alignItems:'flex-start',
            }}>
              <div style={{
                width:40, height:40, borderRadius:10,
                background:'#f1f5f9', flexShrink:0,
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize:12, fontWeight:700, color:'#374151', marginBottom:4 }}>Horaires d'ouverture</div>
                <div style={{ fontSize:15, fontWeight:600, color:'#0f172a', marginBottom:4 }}>
                  Lundi – Vendredi<br/>08h00 – 16h00
                </div>
                <div style={{ fontSize:12, color:'#64748b' }}>5 jours sur 7</div>
              </div>
            </div>
          </div>

          {/* Droite - CTA et info */}
          <div>
            {/* CTA principal */}
            <div style={{
              background:'#0f172a', borderRadius:16,
              padding:32, marginBottom:20, textAlign:'center',
            }}>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#10B981', marginBottom:12 }}>
                La voie la plus rapide
              </div>
              <h3 style={{ fontFamily:"'DM Serif Display',serif", fontSize:22, color:'white', marginBottom:12 }}>
                Déposez directement votre facture
              </h3>
              <p style={{ fontSize:13, color:'rgba(255,255,255,0.55)', lineHeight:1.7, marginBottom:24 }}>
                C'est gratuit, confidentiel, et vous recevez une réponse
                d'un ingénieur sous 48 heures ouvrables.
              </p>
              <Link href="/" style={{
                display:'block', background:'#10B981', color:'white',
                textDecoration:'none', borderRadius:9, padding:'14px 20px',
                fontSize:14, fontWeight:700, fontFamily:"'DM Sans',sans-serif",
                textAlign:'center', marginBottom:12,
              }}>
                Déposer ma facture ENEO →
              </Link>
              <div style={{ fontSize:11, color:'rgba(255,255,255,0.35)' }}>
                Gratuit · Confidentiel · Réponse sous 48h · Aucun engagement
              </div>
            </div>

            {/* WhatsApp direct */}
            <div style={{
              background:'#ecfdf5', border:'1px solid #d1fae5',
              borderRadius:16, padding:28, textAlign:'center',
            }}>
              <div style={{ fontSize:13, color:'#065f46', lineHeight:1.7, marginBottom:20 }}>
                Vous préférez nous parler directement avant de déposer votre dossier ?
                Notre équipe est disponible sur WhatsApp.
              </div>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{
                display:'flex', alignItems:'center', justifyContent:'center', gap:9,
                background:'#10B981', color:'white',
                textDecoration:'none', borderRadius:9,
                padding:'13px 20px', fontSize:14, fontWeight:700,
                fontFamily:"'DM Sans',sans-serif",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Écrire sur WhatsApp
              </a>
              <div style={{ fontSize:11, color:'#047857', marginTop:10 }}>
                +237 697 252 071 · Réponse sous 2h en jours ouvrables
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

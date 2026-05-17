import Link from 'next/link';

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite en savoir plus sur vos services d'audit énergétique.")}`;

export default function Footer() {
  return (
    <footer style={{
      background:'#0f172a',
      color:'#94a3b8',
      borderTop:'1px solid rgba(255,255,255,0.06)',
    }}>
      {/* Corps du footer */}
      <div style={{
        maxWidth:1140, margin:'0 auto',
        padding:'56px 20px 40px',
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',
        gap:40,
      }}>

        {/* Colonne 1 — Cabinet */}
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="#10B981"/>
              <polyline points="7,26 13,14 19,20 24,13 29,26" fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
              <circle cx="24" cy="11" r="2.5" fill="#F59E0B"/>
            </svg>
            <div>
              <div style={{ fontSize:14, fontWeight:700, color:'white', fontFamily:"'DM Sans',sans-serif" }}>
                Cabinet Global Enerdy
              </div>
              <div style={{ fontSize:9, color:'#10B981', letterSpacing:'0.15em', textTransform:'uppercase' }}>
                SARL · Douala, Cameroun
              </div>
            </div>
          </div>
          <p style={{ fontSize:12, lineHeight:1.75, maxWidth:260 }}>
            Solution numérique d'audit et d'optimisation des factures d'électricité
            Moyenne Tension (MT) pour les entreprises et industries au Cameroun.
          </p>
        </div>

        {/* Colonne 2 — Cadre réglementaire */}
        <div>
          <div style={{ fontSize:12, fontWeight:700, color:'white', marginBottom:14, letterSpacing:'0.05em' }}>
            Réglementation &amp; Cadre
          </div>
          <p style={{ fontSize:12, lineHeight:1.75 }}>
            Analyses conformes aux directives de l'ARSEL (Agence de Régulation
            du Secteur de l'Électricité). Traitement des données selon la loi
            camerounaise n°2010/012 sur la cybersécurité.
          </p>
          <div style={{ marginTop:14, fontSize:11, color:'#64748b' }}>
            RCCM &amp; NIU en cours d'immatriculation
          </div>
        </div>

        {/* Colonne 3 — Contact */}
        <div>
          <div style={{ fontSize:12, fontWeight:700, color:'white', marginBottom:14, letterSpacing:'0.05em' }}>
            Contact &amp; Coordonnées
          </div>
          <div style={{ fontSize:12, lineHeight:2.2 }}>
            <div>📍 Douala, Cameroun</div>
            <div>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                style={{ color:'#10B981', textDecoration:'none' }}>
                💬 WhatsApp : +237 697 252 071
              </a>
            </div>
            <div>
              <a href="mailto:globalenergysarl@gmail.com"
                style={{ color:'#94a3b8', textDecoration:'none' }}>
                ✉ globalenergysarl@gmail.com
              </a>
            </div>
          </div>
          <Link href="/mentions-legales"
            style={{ display:'inline-block', marginTop:14, fontSize:11, color:'#64748b', textDecoration:'underline' }}>
            Mentions légales &amp; confidentialité
          </Link>
        </div>
      </div>

      {/* Barre inférieure */}
      <div style={{
        borderTop:'1px solid rgba(255,255,255,0.06)',
        padding:'18px 20px',
        textAlign:'center', fontSize:11, color:'#475569',
      }}>
        © {new Date().getFullYear()} Cabinet Global Enerdy SARL · Tous droits réservés ·
        Propulsé par Vercel (Cloud sécurisé) ·
        <Link href="/mentions-legales" style={{ color:'#64748b', textDecoration:'none', marginLeft:8 }}>
          Politique de confidentialité
        </Link>
      </div>
    </footer>
  );
}

// components/layout/Footer.jsx
import Link from 'next/link';

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite en savoir plus sur vos services d'audit énergétique.")}`;

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto',
        padding: '56px 24px 40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 40,
      }}>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="#10B981"/>
              <polyline points="6,27 12,14 18,21 23,13 30,27"
                fill="none" stroke="white" strokeWidth="2.2"
                strokeLinejoin="round" strokeLinecap="round"/>
              <circle cx="23" cy="11" r="2.5" fill="#F59E0B"/>
            </svg>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'white', fontFamily: "'DM Sans', sans-serif" }}>
                Cabinet Global Enerdy
              </div>
              <div style={{ fontSize: 9, color: '#10B981', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                SARL · Douala, Cameroun
              </div>
            </div>
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.8, maxWidth: 260 }}>
            Cabinet d'ingénierie énergétique spécialisé dans l'audit et l'optimisation
            des factures d'électricité Moyenne Tension pour les industries et grands
            comptes au Cameroun.
          </p>
        </div>

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'white', marginBottom: 14 }}>
            Cadre réglementaire
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.8 }}>
            Analyses conformes aux directives de l'ARSEL (Agence de Régulation
            du Secteur de l'Électricité). Traitement des données selon la loi
            camerounaise n°2010/012 relative à la cybersécurité et à la cybercriminalité.
          </p>
          <div style={{ marginTop: 12, fontSize: 11, color: '#64748b' }}>
            RCCM &amp; NIU en cours d'immatriculation
          </div>
        </div>

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'white', marginBottom: 14 }}>
            Contact direct
          </div>
          <div style={{ fontSize: 13, lineHeight: 2.4 }}>
            <div style={{ color: '#cbd5e1' }}>Douala, Cameroun</div>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              style={{ color: '#10B981', textDecoration: 'none', display: 'block' }}>
              WhatsApp : +237 697 252 071
            </a>
            <a href="tel:+237697252071"
              style={{ color: '#94a3b8', textDecoration: 'none', display: 'block' }}>
              Appel direct : +237 697 252 071
            </a>
            <a href="mailto:globalenergysarl@gmail.com"
              style={{ color: '#94a3b8', textDecoration: 'none', display: 'block' }}>
              globalenergysarl@gmail.com
            </a>
          </div>
          <Link href="/mentions-legales"
            style={{ display: 'inline-block', marginTop: 14, fontSize: 11, color: '#64748b', textDecoration: 'underline' }}>
            Mentions légales &amp; politique de confidentialité
          </Link>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '18px 24px',
        textAlign: 'center', fontSize: 11, color: '#475569',
      }}>
        © {new Date().getFullYear()} Cabinet Global Enerdy SARL · Tous droits réservés ·
        Hébergé sur Vercel (infrastructure cloud sécurisée) ·
        <Link href="/mentions-legales"
          style={{ color: '#64748b', textDecoration: 'none', marginLeft: 8 }}>
          Confidentialité
        </Link>
      </div>
    </footer>
  );
}

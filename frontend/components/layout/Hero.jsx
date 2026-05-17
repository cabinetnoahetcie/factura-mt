// components/layout/Hero.jsx
export default function Hero() {
  return (
    <section style={{
      padding:'72px 20px 60px',
      textAlign:'center',
      background:'linear-gradient(to bottom, #faf9f5, #fff)',
    }}>
      {/* Badge */}
      <div style={{
        display:'inline-flex', alignItems:'center', gap:8,
        background:'#e8622a', color:'white',
        borderRadius:100, padding:'7px 18px',
        fontSize:12, fontWeight:700, letterSpacing:'0.08em',
        textTransform:'uppercase', marginBottom:28,
      }}>
        ⚡ Audit énergétique gratuit
      </div>

      {/* Titre */}
      <h1 style={{
        fontFamily:"'DM Serif Display',serif",
        fontSize:'clamp(32px, 5.5vw, 58px)',
        color:'#0a0a0a', lineHeight:1.12,
        letterSpacing:'-0.02em', marginBottom:20,
        maxWidth:700, margin:'0 auto 20px',
      }}>
        Réduisez votre facture<br/>
        <em style={{ color:'#e8622a', fontStyle:'italic' }}>ENEO MT</em> dès ce mois
      </h1>

      {/* Sous-titre */}
      <p style={{
        fontSize:'clamp(15px, 2vw, 18px)',
        color:'#888', maxWidth:520, margin:'0 auto 44px',
        fontWeight:300, lineHeight:1.7,
      }}>
        Importez votre facture Moyenne Tension et recevez une analyse
        détaillée par nos auditeurs sous 24 à 48h.
      </p>

      {/* Stats */}
      <div style={{
        display:'flex', justifyContent:'center',
        gap:'clamp(24px, 5vw, 64px)',
        flexWrap:'wrap', marginBottom:16,
      }}>
        {[
          ['24–48h', "Délai d'analyse"],
          ['100%',   'Gratuit & confidentiel'],
          ['15–30%', 'Économies moyennes'],
        ].map(([n, l]) => (
          <div key={l} style={{ textAlign:'center', minWidth:80 }}>
            <div style={{
              fontFamily:"'DM Serif Display',serif",
              fontSize:'clamp(26px, 4vw, 36px)',
              color:'#0a0a0a', lineHeight:1,
            }}>{n}</div>
            <div style={{ fontSize:12, color:'#aaa', marginTop:5, lineHeight:1.4 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

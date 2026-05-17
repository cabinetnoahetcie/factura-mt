// components/layout/Hero.jsx
export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1a2744 50%, #0f2a1f 100%)',
      padding: '80px 24px 72px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grille de fond subtile */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.035,
        backgroundImage: 'linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Bandeau accroche */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(16,185,129,0.12)',
          border: '1px solid rgba(16,185,129,0.3)',
          borderRadius: 6, padding: '6px 14px',
          fontSize: 11, fontWeight: 700, color: '#10B981',
          letterSpacing: '0.14em', textTransform: 'uppercase',
          marginBottom: 28,
        }}>
          Audit gratuit · Factures ENEO Moyenne Tension · Douala &amp; Yaoundé
        </div>

        {/* Titre principal */}
        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(28px, 5vw, 52px)',
          color: 'white', lineHeight: 1.15,
          letterSpacing: '-0.02em',
          marginBottom: 24, maxWidth: 820,
        }}>
          Vos factures ENEO contiennent des erreurs{' '}
          <span style={{ color: '#10B981' }}>que vous payez chaque mois.</span>
          <br/>
          <span style={{
            fontStyle: 'italic', color: '#F59E0B',
            fontSize: 'clamp(24px, 4vw, 44px)',
          }}>
            Nous les trouvons. Nous les chiffrons. Vous décidez.
          </span>
        </h1>

        {/* Sous-titre */}
        <p style={{
          fontSize: 'clamp(14px, 2vw, 17px)',
          color: 'rgba(255,255,255,0.65)',
          maxWidth: 680, marginBottom: 40,
          lineHeight: 1.8,
        }}>
          Le Cabinet Global Enerdy analyse manuellement vos factures Moyenne Tension —
          pénalités de puissance, énergie réactive, dépassements de cos&nbsp;φ — et vous remet
          un rapport chiffré en FCFA sous 48 heures.
          Sans engagement. Sans automatisation.
        </p>

        {/* 3 faits chiffrés */}
        <div style={{
          display: 'flex',
          gap: 'clamp(24px, 5vw, 56px)',
          flexWrap: 'wrap', marginBottom: 8,
        }}>
          {[
            { val: '8 / 10', lbl: 'factures MT analysées contiennent au moins une anomalie tarifaire' },
            { val: '48h',    lbl: 'délai de remise du rapport chiffré en FCFA' },
            { val: '100%',   lbl: 'des analyses réalisées par un ingénieur humain, pas un algorithme' },
          ].map(({ val, lbl }) => (
            <div key={val} style={{ maxWidth: 220 }}>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(26px, 4vw, 38px)',
                color: '#10B981', lineHeight: 1,
              }}>{val}</div>
              <div style={{
                fontSize: 12, color: 'rgba(255,255,255,0.45)',
                marginTop: 6, lineHeight: 1.5,
              }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

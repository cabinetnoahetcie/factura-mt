// components/forms/StepConfirm.jsx
export default function StepConfirm({ dossier, client, onNewSubmission }) {
  return (
    <div style={{
      background:'white', border:'1px solid #e2e0d8',
      borderRadius:16, padding:'clamp(32px, 5vw, 56px) clamp(24px, 4vw, 40px)',
      boxShadow:'0 4px 24px rgba(0,0,0,0.07)',
      textAlign:'center', maxWidth:560, margin:'0 auto',
    }}>
      {/* Icône */}
      <div style={{
        width:80, height:80, borderRadius:'50%',
        background:'#f0fdf4', border:'2px solid #bbf7d0',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontSize:36, margin:'0 auto 24px',
      }}>✅</div>

      <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#1a8a4a', marginBottom:10 }}>
        Dossier bien reçu
      </div>

      <h2 style={{
        fontFamily:"'DM Serif Display',serif",
        fontSize:'clamp(24px, 4vw, 32px)',
        color:'#0a0a0a', marginBottom:12, lineHeight:1.2,
      }}>
        Merci !
      </h2>

      <p style={{ fontSize:15, color:'#666', marginBottom:28, lineHeight:1.7, maxWidth:400, margin:'0 auto 28px' }}>
        Votre dossier a été transmis à nos auditeurs. Nous analyserons
        votre facture et vous contacterons sous{' '}
        <strong style={{ color:'#2d2d2d' }}>24 à 48 heures</strong>{' '}
        au <strong style={{ color:'#2d2d2d' }}>{client?.telephone}</strong>.
      </p>

      {/* Référence */}
      <div style={{
        background:'#faf9f5', border:'1px solid #e2e0d8',
        borderRadius:12, padding:'18px 20px', marginBottom:28, textAlign:'left',
      }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
          {[
            ['Référence',        dossier?.id?.slice(0, 8).toUpperCase() + '…'],
            ['Factures reçues',  `${dossier?.nbFactures} fichier(s)`],
            ['Entreprise',       client?.nom],
            ['Statut',           '⏳ En attente d\'analyse'],
          ].map(([l, v]) => (
            <div key={l}>
              <div style={{ fontSize:10, color:'#aaa', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:4 }}>{l}</div>
              <div style={{ fontSize:13, fontWeight:600, color:'#2d2d2d', wordBreak:'break-all' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Prochaines étapes */}
      <div style={{
        background:'#eff6ff', border:'1px solid #dbeafe',
        borderRadius:12, padding:'18px 20px', marginBottom:28, textAlign:'left',
      }}>
        <p style={{ fontSize:12, fontWeight:700, color:'#1e40af', marginBottom:12, textTransform:'uppercase', letterSpacing:'0.08em' }}>
          Prochaines étapes
        </p>
        {[
          'Nos auditeurs téléchargent et lisent votre facture',
          'Analyse des postes de coût et anomalies tarifaires',
          'Chiffrage des économies potentielles',
          'Appel pour vous présenter les résultats',
        ].map((txt, i) => (
          <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, marginBottom:i < 3 ? 10 : 0 }}>
            <div style={{
              width:22, height:22, borderRadius:'50%',
              background:'#dbeafe', color:'#1e40af',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:11, fontWeight:700, flexShrink:0, marginTop:1,
            }}>{i + 1}</div>
            <span style={{ fontSize:13, color:'#1e40af', lineHeight:1.5 }}>{txt}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onNewSubmission}
        style={{
          background:'#e8622a', color:'white', border:'none',
          borderRadius:10, padding:'13px 28px',
          fontSize:14, fontWeight:600, cursor:'pointer',
          fontFamily:"'DM Sans',sans-serif",
          width:'100%',
        }}
      >
        Soumettre un autre dossier
      </button>

      <p style={{ fontSize:11, color:'#bbb', marginTop:16 }}>
        🔒 Vos factures sont conservées de manière sécurisée et confidentielle.
      </p>
    </div>
  );
}

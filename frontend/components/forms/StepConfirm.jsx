'use client';
// components/forms/StepConfirm.jsx
export default function StepConfirm({ dossier, client, onNewSubmission }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm animate-fade-up text-center max-w-xl mx-auto">

      {/* Icône succès */}
      <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
        ✅
      </div>

      <div className="text-xs font-bold text-green-600 uppercase tracking-widest mb-3">// components/forms/StepConfirm.jsx
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

        Dossier bien reçu
      </div>

      <h2 className="font-serif text-3xl text-gray-900 mb-3">
        Merci, {client?.contact} !
      </h2>

      <p className="text-gray-500 text-base mb-8 leading-relaxed">
        Votre dossier a été transmis à notre équipe d'auditeurs.
        Nous analyserons votre facture et vous contacterons sous{' '}
        <strong className="text-gray-700">24 à 48 heures</strong> au{' '}
        <strong className="text-gray-700">{client?.telephone}</strong>.
      </p>

      {/* Référence dossier */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8 text-left">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Référence</div>
            <div className="font-mono text-xs text-gray-700 break-all">{dossier?.id}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Factures reçues</div>
            <div className="font-semibold text-gray-900">{dossier?.nbFactures} fichier(s)</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Entreprise</div>
            <div className="font-semibold text-gray-900">{client?.nom}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Statut</div>
            <div className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"/>
              <span className="text-sm font-semibold text-orange-600">En attente d'analyse</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prochaines étapes */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8 text-left">
        <p className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-3">Prochaines étapes</p>
        <div className="space-y-3">
          {[
            ['1', 'Nos auditeurs téléchargent et lisent votre facture', 'text-blue-700'],
            ['2', 'Analyse des postes de coût et identification des anomalies', 'text-blue-700'],
            ['3', 'Chiffrage des économies potentielles', 'text-blue-700'],
            ['4', 'Contact pour vous présenter les résultats', 'text-blue-700'],
          ].map(([n, txt, c]) => (
            <div key={n} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-700 flex-shrink-0 mt-0.5">
                {n}
              </div>
              <p className={`text-sm ${c}`}>{txt}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onNewSubmission}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl text-sm transition">
          Soumettre un autre dossier
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        🔒 Vos factures sont conservées de manière confidentielle et sécurisée.
      </p>
    </div>
  );
}

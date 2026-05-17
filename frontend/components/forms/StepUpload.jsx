'use client';
// components/forms/StepUpload.jsx
// ÉTAPE 1 — Upload de la facture (tunnel inversé, upload en premier)
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';

const S = {
  card: {
    background:'white', border:'1px solid #e2e0d8',
    borderRadius:16, padding:'clamp(24px, 4vw, 40px)',
    boxShadow:'0 4px 24px rgba(0,0,0,0.07)',
  },
  tag: {
    fontSize:10, fontWeight:700, letterSpacing:'0.15em',
    textTransform:'uppercase', color:'#e8622a', marginBottom:8,
  },
  title: {
    fontFamily:"'DM Serif Display',serif",
    fontSize:'clamp(22px, 3vw, 28px)',
    color:'#0a0a0a', marginBottom:6, lineHeight:1.2,
  },
  desc: { fontSize:14, color:'#888', marginBottom:28, lineHeight:1.6 },
  btnPrimary: {
    background:'#e8622a', color:'white', border:'none',
    borderRadius:10, padding:'14px 28px',
    fontSize:14, fontWeight:600, cursor:'pointer',
    fontFamily:"'DM Sans',sans-serif", width:'100%',
    transition:'background 0.2s',
  },
};

export default function StepUpload({ onSuccess }) {
  const [files,   setFiles]   = useState([]);
  const [mois,    setMois]    = useState('');
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((accepted, rejected) => {
    if (rejected.length > 0) toast.error('Format non supporté ou fichier trop lourd (max 20 Mo).');
    setFiles(prev => {
      const noms    = new Set(prev.map(f => f.name));
      const nouveaux = accepted.filter(f => !noms.has(f.name));
      return [...prev, ...nouveaux].slice(0, 6);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept:   { 'image/jpeg':[], 'image/jpg':[], 'image/png':[], 'image/webp':[] },
    maxSize:  20 * 1024 * 1024,
    multiple: true,
    maxFiles: 6,
  });

  const removeFile = name => setFiles(prev => prev.filter(f => f.name !== name));

  const handleNext = () => {
    if (files.length === 0) { toast.error('Ajoutez au moins une facture.'); return; }
    // On passe les fichiers à l'étape suivante
    onSuccess({ files, mois });
  };

  return (
    <div style={S.card}>
      <div style={S.tag}>Étape 1 sur 3</div>
      <h2 style={S.title}>Importez votre facture ENEO</h2>
      <p style={S.desc}>
        Déposez une ou plusieurs factures Moyenne Tension. Nos auditeurs
        les analyseront manuellement et vous contacteront sous 24 à 48h.
      </p>

      {/* Zone de dépôt */}
      <div
        {...getRootProps()}
        style={{
          border:`2px dashed ${isDragActive ? '#e8622a' : '#e2e0d8'}`,
          borderRadius:14,
          padding:'clamp(32px, 5vw, 56px) 20px',
          textAlign:'center', cursor:'pointer',
          background: isDragActive ? 'rgba(232,98,42,0.04)' : '#faf9f5',
          transition:'all 0.2s', marginBottom:16,
        }}
      >
        <input {...getInputProps()} />
        <div style={{
          width:64, height:64, background:'white',
          border:'1px solid #e2e0d8', borderRadius:14,
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:28, margin:'0 auto 16px',
          boxShadow:'0 2px 8px rgba(0,0,0,0.06)',
        }}>🧾</div>
        <p style={{ fontSize:16, fontWeight:600, color:'#2d2d2d', marginBottom:6 }}>
          {isDragActive ? 'Déposez ici…' : 'Glissez votre facture ici'}
        </p>
        <p style={{ fontSize:13, color:'#aaa', marginBottom:14 }}>
          ou cliquez pour sélectionner un fichier
        </p>
        <div style={{ display:'flex', justifyContent:'center', gap:8, flexWrap:'wrap' }}>
          {['JPG · PNG · WEBP', 'Max 20 Mo / fichier', 'Jusqu\'à 6 factures'].map(t => (
            <span key={t} style={{
              background:'white', border:'1px solid #e2e0d8',
              borderRadius:100, padding:'4px 12px',
              fontSize:11, fontWeight:500, color:'#888',
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Liste fichiers */}
      {files.length > 0 && (
        <div style={{ marginBottom:16 }}>
          <div style={{ fontSize:11, fontWeight:700, color:'#888', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:10 }}>
            {files.length} fichier(s) sélectionné(s)
          </div>
          {files.map(f => (
            <div key={f.name} style={{
              display:'flex', alignItems:'center', gap:12,
              background:'#faf9f5', border:'1px solid #e2e0d8',
              borderRadius:10, padding:'12px 16px', marginBottom:8,
            }}>
              <span style={{ fontSize:20, flexShrink:0 }}>🧾</span>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontSize:13, fontWeight:600, color:'#2d2d2d', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                  {f.name}
                </div>
                <div style={{ fontSize:11, color:'#aaa' }}>
                  {(f.size / 1024).toFixed(0)} Ko
                </div>
              </div>
              <button onClick={() => removeFile(f.name)} style={{
                background:'none', border:'none', cursor:'pointer',
                color:'#ccc', fontSize:18, flexShrink:0, padding:4,
                lineHeight:1,
              }}>✕</button>
            </div>
          ))}
        </div>
      )}

      {/* Période optionnelle */}
      <div style={{ marginBottom:24 }}>
        <label style={{ display:'block', fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#888', marginBottom:8 }}>
          Période concernée (optionnel)
        </label>
        <input
          type="text"
          placeholder="Ex : Janvier 2024, ou Août 2023 – Janvier 2024"
          value={mois}
          onChange={e => setMois(e.target.value)}
          style={{
            width:'100%', border:'1.5px solid #e2e0d8', borderRadius:10,
            padding:'12px 16px', fontSize:14, outline:'none',
            fontFamily:"'DM Sans',sans-serif", color:'#2d2d2d',
            boxSizing:'border-box',
          }}
        />
      </div>

      {/* Conseils */}
      <div style={{
        background:'#eff6ff', border:'1px solid #dbeafe',
        borderRadius:12, padding:'14px 18px', marginBottom:24,
      }}>
        <p style={{ fontSize:12, fontWeight:700, color:'#1e40af', marginBottom:8 }}>
          📸 Conseils pour une bonne lisibilité
        </p>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))',
          gap:6,
        }}>
          {[
            ['🔦','Bonne luminosité, sans reflets'],
            ['📐','Facture à plat, bien cadrée'],
            ['🔎','Tous les chiffres lisibles'],
            ['📋','Facture complète visible'],
          ].map(([icon, txt]) => (
            <div key={txt} style={{ display:'flex', gap:6, alignItems:'flex-start', fontSize:12, color:'#1e40af' }}>
              <span style={{ flexShrink:0 }}>{icon}</span>{txt}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={files.length === 0 || loading}
        style={{
          ...S.btnPrimary,
          background: files.length === 0 ? '#e2e0d8' : '#e8622a',
          color:       files.length === 0 ? '#aaa' : 'white',
          cursor:      files.length === 0 ? 'not-allowed' : 'pointer',
        }}
      >
        {files.length > 0
          ? `Continuer avec ${files.length} facture(s) →`
          : 'Sélectionnez au moins une facture'}
      </button>
    </div>
  );
}

'use client';
// components/forms/StepUpload.jsx
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';

export default function StepUpload({ onSuccess }) {
  const [files,  setFiles]  = useState([]);
  const [mois,   setMois]   = useState('');

  const onDrop = useCallback((accepted, rejected) => {
    if (rejected.length > 0) toast.error('Format non supporté ou fichier supérieur à 20 Mo.');
    setFiles(prev => {
      const noms = new Set(prev.map(f => f.name));
      return [...prev, ...accepted.filter(f => !noms.has(f.name))].slice(0, 6);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept:   { 'image/jpeg':[], 'image/jpg':[], 'image/png':[], 'image/webp':[] },
    maxSize:  20 * 1024 * 1024,
    multiple: true, maxFiles: 6,
  });

  const removeFile = name => setFiles(prev => prev.filter(f => f.name !== name));

  const handleNext = () => {
    if (files.length === 0) {
      toast.error('Déposez au moins une facture pour continuer.');
      return;
    }
    onSuccess({ files, mois });
  };

  return (
    <div style={{
      background: 'white', border: '1px solid #e2e8f0',
      borderRadius: 14, padding: 'clamp(22px, 4vw, 40px)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    }}>
      <div style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
        textTransform: 'uppercase', color: '#10B981', marginBottom: 6,
      }}>
        Étape 1 sur 3
      </div>

      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 'clamp(20px, 3vw, 26px)',
        color: '#0f172a', marginBottom: 8,
      }}>
        Déposez votre facture ENEO
      </h2>

      <p style={{ fontSize: 14, color: '#64748b', marginBottom: 22, lineHeight: 1.7 }}>
        Pas d'application à installer. Pas de compte à créer. Vous déposez votre facture,
        un ingénieur du cabinet l'ouvre, la lit, et vous rappelle sous 48 heures.
      </p>

      {/* Note masquage numéro */}
      <div style={{
        background: '#fffbeb', border: '1px solid #fde68a',
        borderRadius: 9, padding: '11px 16px', marginBottom: 20,
        fontSize: 12, color: '#92400e', lineHeight: 1.65,
      }}>
        <strong>Note :</strong> Si vous le souhaitez, masquez votre numéro de client
        avant l'envoi. Seules les données de consommation (kWh, kW, kVARh) nous sont
        nécessaires pour l'analyse.
      </div>

      {/* Zone dépôt */}
      <div
        {...getRootProps()}
        style={{
          border: `2px dashed ${isDragActive ? '#10B981' : '#cbd5e1'}`,
          borderRadius: 12,
          padding: 'clamp(28px, 5vw, 52px) 20px',
          textAlign: 'center', cursor: 'pointer',
          background: isDragActive ? 'rgba(16,185,129,0.04)' : '#f8fafc',
          transition: 'all 0.2s', marginBottom: 16,
        }}
      >
        <input {...getInputProps()} />

        {/* Icône document */}
        <div style={{
          width: 56, height: 56, background: 'white',
          border: '1px solid #e2e8f0', borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 14px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
            stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>

        <p style={{ fontSize: 15, fontWeight: 600, color: '#1e293b', marginBottom: 5 }}>
          {isDragActive ? 'Déposez ici…' : 'Déposez votre facture ENEO ici'}
        </p>
        <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 14 }}>
          ou cliquez pour parcourir vos fichiers
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
          {['JPG · PNG · WEBP', 'Taille max : 20 Mo', "Jusqu'à 6 factures"].map(t => (
            <span key={t} style={{
              background: 'white', border: '1px solid #e2e8f0',
              borderRadius: 100, padding: '3px 11px',
              fontSize: 10, fontWeight: 600, color: '#64748b',
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Fichiers sélectionnés */}
      {files.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <div style={{
            fontSize: 10, fontWeight: 700, color: '#64748b',
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10,
          }}>
            {files.length} fichier(s) prêt(s) à l'envoi
          </div>
          {files.map(f => (
            <div key={f.name} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: '#f8fafc', border: '1px solid #e2e8f0',
              borderRadius: 9, padding: '10px 14px', marginBottom: 8,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 13, fontWeight: 600, color: '#1e293b',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>{f.name}</div>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>
                  {(f.size / 1024).toFixed(0)} Ko
                </div>
              </div>
              <button onClick={() => removeFile(f.name)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#cbd5e1', fontSize: 18, padding: 4, lineHeight: 1,
              }}>✕</button>
            </div>
          ))}
        </div>
      )}

      {/* Période */}
      <div style={{ marginBottom: 24 }}>
        <label style={{
          display: 'block', fontSize: 10, fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#64748b', marginBottom: 8,
        }}>
          Période concernée (optionnel)
        </label>
        <input
          type="text"
          placeholder="Ex : Janvier 2024, ou les 6 derniers mois"
          value={mois}
          onChange={e => setMois(e.target.value)}
          style={{
            width: '100%', border: '1.5px solid #e2e8f0', borderRadius: 9,
            padding: '12px 16px', fontSize: 14, outline: 'none',
            fontFamily: "'DM Sans', sans-serif", color: '#1e293b',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Garanties — puces carrées, zéro emoji */}
      <div style={{
        borderTop: '1px solid #e2e8f0', paddingTop: 20, marginBottom: 24,
      }}>
        <div style={{
          fontSize: 10, fontWeight: 700, color: '#64748b',
          textTransform: 'uppercase', letterSpacing: '0.1em',
          textAlign: 'center', marginBottom: 14,
        }}>
          Cadre sécurisé — Loi camerounaise n°2010/012
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12,
        }}>
          {[
            {
              titre: 'Conformité ARSEL',
              desc: "Analyses alignées sur le règlement du service de distribution d'électricité au Cameroun.",
            },
            {
              titre: 'Données protégées',
              desc: 'Vos informations commerciales ne sont jamais partagées ni revendues à des tiers.',
            },
            {
              titre: 'Suppression sous 48h',
              desc: 'Vos factures sont définitivement supprimées après livraison de votre rapport.',
            },
          ].map((b, i) => (
            <div key={i} style={{
              background: '#f0fdf4', border: '1px solid #d1fae5',
              borderRadius: 9, padding: '12px 14px',
              borderLeft: '3px solid #10B981',
            }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: '#064e3b',
                marginBottom: 4, fontFamily: "'DM Sans', sans-serif",
              }}>{b.titre}</div>
              <div style={{ fontSize: 11, color: '#065f46', lineHeight: 1.55 }}>
                {b.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bouton */}
      <button
        onClick={handleNext}
        disabled={files.length === 0}
        style={{
          width: '100%',
          background: files.length === 0 ? '#e2e8f0' : '#10B981',
          color: files.length === 0 ? '#94a3b8' : 'white',
          border: 'none', borderRadius: 9, padding: '14px 20px',
          fontSize: 14, fontWeight: 700, cursor: files.length === 0 ? 'not-allowed' : 'pointer',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {files.length > 0
          ? `Continuer avec ${files.length} facture(s) →`
          : 'Déposez au moins une facture pour continuer'}
      </button>

      <div style={{
        textAlign: 'center', fontSize: 11, color: '#94a3b8', marginTop: 10,
      }}>
        Gratuit · Confidentiel · Réponse sous 48h · Aucun engagement
      </div>
    </div>
  );
}

'use client';
// components/forms/StepInfos.jsx
import { useState } from 'react';
import toast from 'react-hot-toast';
import { clientsAPI, dossiersAPI } from '@/lib/api';

const SECTEURS = [
  { value: 'industrie',    label: 'Industrie manufacturière' },
  { value: 'btp',          label: 'BTP / Construction'       },
  { value: 'agroalim',     label: 'Agro-industrie'           },
  { value: 'enseignement', label: 'Enseignement'             },
  { value: 'sante',        label: 'Santé / Hôpital'          },
  { value: 'commerce',     label: 'Commerce / Hôtellerie'    },
  { value: 'telecom',      label: 'Télécommunications'       },
  { value: 'immobilier',   label: 'Immobilier / Grand bâtiment'},
  { value: 'autre',        label: 'Autre'                    },
];

const inputStyle = {
  width: '100%', border: '1.5px solid #e2e8f0', borderRadius: 9,
  padding: '12px 16px', fontSize: 14, outline: 'none',
  fontFamily: "'DM Sans', sans-serif", color: '#1e293b',
  boxSizing: 'border-box', background: 'white',
};

const labelStyle = {
  display: 'block', fontSize: 10, fontWeight: 700,
  letterSpacing: '0.1em', textTransform: 'uppercase',
  color: '#64748b', marginBottom: 7,
};

export default function StepInfos({ uploadData, onSuccess, onBack }) {
  const [secteur, setSecteur] = useState('industrie');
  const [nom,     setNom]     = useState('');
  const [tel,     setTel]     = useState('');
  const [email,   setEmail]   = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!nom.trim() || !tel.trim()) {
      toast.error("Le nom de l'entreprise et le numéro de téléphone sont requis.");
      return;
    }
    setLoading(true);
    try {
      const clientRes = await clientsAPI.createOrFind({
        nom:       nom.trim(),
        secteur,
        ville:     'Cameroun',
        telephone: tel.trim(),
        contact:   nom.trim(),
        email:     email.trim() || undefined,
      });
      const client = clientRes.data;

      const formData = new FormData();
      formData.append('clientId', client.id);
      if (uploadData.mois) formData.append('mois', uploadData.mois);
      uploadData.files.forEach(f => formData.append('factures', f));

      const dossierRes = await dossiersAPI.create(formData);
      toast.success('Dossier transmis avec succès !');
      onSuccess({ dossier: dossierRes.data, client });
    } catch (err) {
      toast.error(err.response?.data?.error || "Erreur lors de l'envoi. Réessayez ou contactez-nous au +237 697 252 071.");
    } finally {
      setLoading(false);
    }
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
        Étape 2 sur 3
      </div>

      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 'clamp(20px, 3vw, 26px)',
        color: '#0f172a', marginBottom: 8,
      }}>
        Vos coordonnées
      </h2>

      <p style={{ fontSize: 14, color: '#64748b', marginBottom: 22, lineHeight: 1.7 }}>
        Un ingénieur du cabinet vous appelera sur ce numéro sous 48 heures ouvrables
        pour vous présenter les résultats de l'analyse.
      </p>

      {/* Récap fichiers */}
      <div style={{
        background: '#f0fdf4', border: '1px solid #bbf7d0',
        borderRadius: 9, padding: '11px 16px', marginBottom: 24,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#166534' }}>
            {uploadData?.files?.length} facture(s) prête(s) à l'envoi
          </div>
          {uploadData?.mois && (
            <div style={{ fontSize: 11, color: '#16a34a' }}>{uploadData.mois}</div>
          )}
        </div>
      </div>

      {/* Secteur */}
      <div style={{ marginBottom: 18 }}>
        <label style={labelStyle}>Secteur d'activité</label>
        <select
          value={secteur}
          onChange={e => setSecteur(e.target.value)}
          style={{
            ...inputStyle, cursor: 'pointer',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 14px center',
            paddingRight: 38,
          }}
        >
          {SECTEURS.map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      {/* Champs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 14, marginBottom: 14,
      }}>
        <div>
          <label style={labelStyle}>Nom de votre entreprise ou organisation *</label>
          <input
            style={inputStyle} type="text"
            placeholder="Ex : HACC Unité Plastique, Hôtel Hilton Douala…"
            value={nom} onChange={e => setNom(e.target.value)}
          />
        </div>
        <div>
          <label style={labelStyle}>Numéro de téléphone *</label>
          <input
            style={inputStyle} type="tel"
            placeholder="Nous vous appellerons sur ce numéro"
            value={tel} onChange={e => setTel(e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle}>Email professionnel (pour recevoir le rapport)</label>
        <input
          style={inputStyle} type="email"
          placeholder="direction@entreprise.cm"
          value={email} onChange={e => setEmail(e.target.value)}
        />
      </div>

      {/* Engagement confidentialité */}
      <div style={{
        background: '#f8fafc', border: '1px solid #e2e8f0',
        borderLeft: '3px solid #10B981',
        borderRadius: 9, padding: '12px 16px', marginBottom: 24,
        fontSize: 12, color: '#475569', lineHeight: 1.7,
      }}>
        En transmettant ce dossier, vous acceptez que les membres du Cabinet Global Enerdy
        accèdent à votre facture dans le seul but d'en réaliser l'analyse énergétique.
        Vos données ne seront jamais revendues ni partagées.
        Suppression garantie sous 48h après livraison du rapport.
      </div>

      {/* Boutons */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button
          onClick={onBack}
          disabled={loading}
          style={{
            background: 'white', color: '#64748b',
            border: '1.5px solid #e2e8f0', borderRadius: 9,
            padding: '12px 20px', fontSize: 13, fontWeight: 500,
            cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            whiteSpace: 'nowrap',
          }}
        >
          ← Retour
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading || !nom.trim() || !tel.trim()}
          style={{
            flex: 1, minWidth: 180,
            background: (!nom.trim() || !tel.trim()) ? '#e2e8f0' : '#10B981',
            color:       (!nom.trim() || !tel.trim()) ? '#94a3b8' : 'white',
            border: 'none', borderRadius: 9, padding: '12px 20px',
            fontSize: 14, fontWeight: 700,
            cursor: (!nom.trim() || !tel.trim()) ? 'not-allowed' : 'pointer',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {loading ? 'Envoi en cours…' : 'Transmettre mon dossier au cabinet →'}
        </button>
      </div>
    </div>
  );
}

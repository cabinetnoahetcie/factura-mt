'use client';
// components/forms/StepInfos.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { clientsAPI } from '@/lib/api';

const SECTEURS = [
  { value:'industrie',   label:'🏭 Industrie'      },'use client';
// components/forms/StepInfos.jsx
// ÉTAPE 2 — Coordonnées allégées (après l'upload)
import { useState } from 'react';
import toast from 'react-hot-toast';
import { clientsAPI, dossiersAPI } from '@/lib/api';

const SECTEURS = [
  { value:'industrie',    label:'🏭 Industrie'       },
  { value:'btp',          label:'🏗 BTP'             },
  { value:'agroalim',     label:'🌾 Agro-industrie'  },
  { value:'enseignement', label:'🎓 Enseignement'    },
  { value:'sante',        label:'🏥 Santé'           },
  { value:'commerce',     label:'🛍 Commerce'        },
  { value:'telecom',      label:'📡 Télécoms'        },
  { value:'autre',        label:'💼 Autre'           },
];

const inputStyle = {
  width:'100%', border:'1.5px solid #e2e0d8', borderRadius:10,
  padding:'13px 16px', fontSize:15, outline:'none',
  fontFamily:"'DM Sans',sans-serif", color:'#2d2d2d',
  boxSizing:'border-box', background:'white',
  transition:'border-color 0.2s',
};

const labelStyle = {
  display:'block', fontSize:11, fontWeight:700,
  letterSpacing:'0.1em', textTransform:'uppercase',
  color:'#888', marginBottom:7,
};

export default function StepInfos({ uploadData, onSuccess, onBack }) {
  const [secteur,  setSecteur]  = useState('industrie');
  const [nom,      setNom]      = useState('');
  const [tel,      setTel]      = useState('');
  const [email,    setEmail]    = useState('');
  const [loading,  setLoading]  = useState(false);

  const handleSubmit = async () => {
    if (!nom.trim() || !tel.trim()) {
      toast.error('Le nom de l\'entreprise et le téléphone sont requis.');
      return;
    }

    setLoading(true);
    try {
      // 1. Créer ou retrouver le client
      const clientRes = await clientsAPI.createOrFind({
        nom:      nom.trim(),
        secteur,
        ville:    'Cameroun',
        telephone:tel.trim(),
        contact:  nom.trim(),
        email:    email.trim() || undefined,
      });
      const client = clientRes.data;

      // 2. Envoyer le dossier avec les fichiers
      const formData = new FormData();
      formData.append('clientId', client.id);
      if (uploadData.mois) formData.append('mois', uploadData.mois);
      uploadData.files.forEach(f => formData.append('factures', f));

      const dossierRes = await dossiersAPI.create(formData);
      toast.success('Dossier envoyé avec succès !');
      onSuccess({ dossier: dossierRes.data, client });

    } catch (err) {
      toast.error(err.response?.data?.error || 'Erreur lors de l\'envoi. Réessayez.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      background:'white', border:'1px solid #e2e0d8',
      borderRadius:16, padding:'clamp(24px, 4vw, 40px)',
      boxShadow:'0 4px 24px rgba(0,0,0,0.07)',
    }}>
      <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#e8622a', marginBottom:8 }}>
        Étape 2 sur 3
      </div>
      <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:'clamp(22px, 3vw, 28px)', color:'#0a0a0a', marginBottom:6 }}>
        Vos coordonnées
      </h2>
      <p style={{ fontSize:14, color:'#888', marginBottom:28, lineHeight:1.6 }}>
        Pour que nos auditeurs puissent vous contacter avec les résultats.
      </p>

      {/* Récap fichiers */}
      <div style={{
        background:'#f0fdf4', border:'1px solid #bbf7d0',
        borderRadius:10, padding:'12px 16px', marginBottom:24,
        display:'flex', alignItems:'center', gap:10,
      }}>
        <span style={{ fontSize:20 }}>✅</span>
        <div>
          <div style={{ fontSize:13, fontWeight:600, color:'#166534' }}>
            {uploadData?.files?.length} facture(s) prête(s)
          </div>
          {uploadData?.mois && (
            <div style={{ fontSize:12, color:'#16a34a' }}>{uploadData.mois}</div>
          )}
        </div>
      </div>

      {/* Secteur */}
      <div style={{ marginBottom:20 }}>
        <label style={labelStyle}>Secteur d'activité</label>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {SECTEURS.map(s => (
            <button
              key={s.value}
              type="button"
              onClick={() => setSecteur(s.value)}
              style={{
                padding:'8px 16px', borderRadius:100,
                border: `1.5px solid ${secteur === s.value ? '#e8622a' : '#e2e0d8'}`,
                background: secteur === s.value ? '#e8622a' : 'white',
                color:       secteur === s.value ? 'white'   : '#555',
                fontSize:13, fontWeight:500, cursor:'pointer',
                transition:'all 0.15s',
                fontFamily:"'DM Sans',sans-serif",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Champs */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:16, marginBottom:24 }}>
        <div>
          <label style={labelStyle}>Nom de l'entreprise *</label>
          <input
            style={inputStyle} type="text"
            placeholder="Ex : HACC Unité Plastique"
            value={nom} onChange={e => setNom(e.target.value)}
          />
        </div>
        <div>
          <label style={labelStyle}>Téléphone *</label>
          <input
            style={inputStyle} type="tel"
            placeholder="Ex : 699 XX XX XX"
            value={tel} onChange={e => setTel(e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginBottom:28 }}>
        <label style={labelStyle}>Email (pour recevoir le rapport)</label>
        <input
          style={inputStyle} type="email"
          placeholder="contact@entreprise.cm"
          value={email} onChange={e => setEmail(e.target.value)}
        />
      </div>

      {/* Confidentialité */}
      <div style={{
        background:'#faf9f5', border:'1px solid #e2e0d8',
        borderRadius:10, padding:'12px 16px', marginBottom:24,
        fontSize:12, color:'#888', lineHeight:1.6,
      }}>
        🔒 <strong style={{ color:'#555' }}>Vos données sont confidentielles.</strong>{' '}
        Votre facture est utilisée uniquement pour l'analyse énergétique.
        Elle n'est jamais transmise à des tiers.
      </div>

      {/* Boutons */}
      <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
        <button
          onClick={onBack}
          disabled={loading}
          style={{
            background:'white', color:'#555', border:'1.5px solid #e2e0d8',
            borderRadius:10, padding:'13px 22px',
            fontSize:14, fontWeight:500, cursor:'pointer',
            fontFamily:"'DM Sans',sans-serif",
            whiteSpace:'nowrap', flexShrink:0,
          }}
        >
          ← Retour
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading || !nom.trim() || !tel.trim()}
          style={{
            flex:1, minWidth:180,
            background: (!nom.trim() || !tel.trim()) ? '#e2e0d8' : '#e8622a',
            color:       (!nom.trim() || !tel.trim()) ? '#aaa'    : 'white',
            border:'none', borderRadius:10, padding:'13px 22px',
            fontSize:14, fontWeight:600,
            cursor: (!nom.trim() || !tel.trim()) ? 'not-allowed' : 'pointer',
            fontFamily:"'DM Sans',sans-serif",
            transition:'background 0.2s',
          }}
        >
          {loading ? 'Envoi en cours…' : 'Envoyer mon dossier →'}
        </button>
      </div>
    </div>
  );
}

  { value:'btp',         label:'🏗 BTP'            },
  { value:'agroalim',    label:'🌾 Agro-industrie' },
  { value:'enseignement',label:'🎓 Enseignement'   },
  { value:'sante',       label:'🏥 Santé'          },
  { value:'commerce',    label:'🛍 Commerce'       },
  { value:'telecom',     label:'📡 Télécoms'       },
  { value:'autre',       label:'💼 Autre'          },
];

export default function StepInfos({ onSuccess }) {
  const [secteur, setSecteur] = useState('industrie');
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await clientsAPI.createOrFind({ ...data, secteur });
      toast.success('Informations enregistrées !');
      onSuccess(res.data);
    } catch (err) {
      toast.error(err.response?.data?.error || 'Erreur serveur');
    } finally { setLoading(false); }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm animate-fade-up">
      <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">Étape 1 sur 4</div>
      <h2 className="font-serif text-2xl text-gray-900 mb-1">Votre entreprise</h2>
      <p className="text-gray-400 text-sm mb-8">Ces informations sont nécessaires pour votre rapport personnalisé.</p>

      {/* Secteur pills */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">Secteur d'activité</label>
        <div className="flex flex-wrap gap-2">
          {SECTEURS.map(s => (
            <button key={s.value} type="button"
              onClick={() => setSecteur(s.value)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                secteur === s.value
                  ? 'bg-orange-500 border-orange-500 text-white'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-500'
              }`}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Nom de l'entreprise *
            </label>
            <input
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
              placeholder="Ex : Université de Douala"
              {...register('nom', { required: 'Champ requis' })}
            />
            {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Ville *
            </label>
            <input
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
              placeholder="Ex : Douala"
              {...register('ville', { required: 'Champ requis' })}
            />
            {errors.ville && <p className="text-red-500 text-xs mt-1">{errors.ville.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Nom du responsable *
            </label>
            <input
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
              placeholder="Ex : Jean Dupont"
              {...register('contact', { required: 'Champ requis' })}
            />
            {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Téléphone *
            </label>
            <input
              type="tel"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
              placeholder="Ex : 699 XX XX XX"
              {...register('telephone', { required: 'Champ requis' })}
            />
            {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
            Email (pour recevoir le rapport)
          </label>
          <input
            type="email"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
            placeholder="contact@entreprise.cm"
            {...register('email')}
          />
        </div>

        <div className="flex justify-end pt-2">
          <button type="submit" disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition">
            {loading ? 'Enregistrement…' : 'Continuer → Importer ma facture'}
          </button>
        </div>
      </form>
    </div>
  );
}

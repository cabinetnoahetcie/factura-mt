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
    <div className="animate-fade-up">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
          Vos coordonnées
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Un ingénieur vous contactera sous 48h pour vous présenter les résultats de l'analyse.
        </p>
      </div>

      {/* Récap fichiers */}
      <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 p-4 rounded-2xl mb-8">
        <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-bold text-blue-900">
            {uploadData?.files?.length} facture(s) prête(s)
          </div>
          {uploadData?.mois && (
            <div className="text-[10px] text-blue-600 font-medium uppercase tracking-wider">{uploadData.mois}</div>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {/* Secteur */}
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Secteur d'activité</label>
          <select
            value={secteur}
            onChange={e => setSecteur(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 16px center',
            }}
          >
            {SECTEURS.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        {/* Entreprise */}
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Nom de l'entreprise *</label>
          <input
            type="text"
            placeholder="Ex : HACC Unité Plastique"
            value={nom}
            onChange={e => setNom(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Numéro de téléphone *</label>
          <input
            type="tel"
            placeholder="Ex : +237 6XX XXX XXX"
            value={tel}
            onChange={e => setTel(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Email professionnel</label>
          <input
            type="email"
            placeholder="direction@entreprise.cm"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Boutons */}
      <div className="flex gap-4 mt-10">
        <button
          onClick={onBack}
          disabled={loading}
          className="px-6 py-4 rounded-xl font-bold text-sm text-slate-400 border border-slate-200 hover:bg-slate-50 transition-all"
        >
          Retour
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading || !nom.trim() || !tel.trim()}
          className={`
            flex-1 py-4 rounded-xl font-bold text-sm transition-all active:scale-[0.98] shadow-lg
            ${loading || !nom.trim() || !tel.trim() ? 'bg-slate-100 text-slate-400 shadow-none cursor-not-allowed' : 'bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700'}
          `}
        >
          {loading ? 'Envoi en cours...' : 'Transmettre mon dossier'}
        </button>
      </div>
    </div>
  );
}

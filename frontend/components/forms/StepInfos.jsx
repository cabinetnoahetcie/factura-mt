'use client';
// components/forms/StepInfos.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { clientsAPI } from '@/lib/api';

const SECTEURS = [
  { value:'industrie',   label:'🏭 Industrie'      },
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

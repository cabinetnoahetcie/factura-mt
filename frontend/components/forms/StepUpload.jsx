'use client';
// components/forms/StepUpload.jsx
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import { dossiersAPI } from '@/lib/api';

export default function StepUpload({ client, onSuccess, onBack }) {
  const [files,   setFiles]   = useState([]);
  const [mois,    setMois]    = useState('');
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((accepted, rejected) => {
    if (rejected.length > 0) {
      toast.error('Certains fichiers ont été refusés. Format JPG/PNG/WEBP, max 20 Mo.');
    }
    // Ajouter sans doublons (par nom)
    setFiles(prev => {
      const noms = new Set(prev.map(f => f.name));
      const nouveaux = accepted.filter(f => !noms.has(f.name));
      if (nouveaux.length < accepted.length) toast('Certains fichiers déjà ajoutés.');
      return [...prev, ...nouveaux].slice(0, 6); // max 6 fichiers
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept:   { 'image/jpeg':[], 'image/jpg':[], 'image/png':[], 'image/webp':[] },
    maxSize:  20 * 1024 * 1024,
    multiple: true,
    maxFiles: 6,
  });

  const removeFile = (name) => setFiles(prev => prev.filter(f => f.name !== name));

  const submit = async () => {
    if (files.length === 0) {
      toast.error('Ajoutez au moins une facture.'); return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('clientId', client.id);
      if (mois) formData.append('mois', mois);
      files.forEach(f => formData.append('factures', f));

      const res = await dossiersAPI.create(formData);
      toast.success('Dossier envoyé avec succès !');
      onSuccess(res.data);
    } catch (err) {
      toast.error(err.response?.data?.error || 'Erreur lors de l\'envoi. Réessayez.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm animate-fade-up">
      <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">Étape 2 sur 3</div>
      <h2 className="font-serif text-2xl text-gray-900 mb-1">Importez vos factures ENEO</h2>
      <p className="text-gray-400 text-sm mb-8">
        Vous pouvez joindre jusqu'à <strong>6 factures</strong> (plusieurs mois si nécessaire).
        Notre équipe les analysera manuellement.
      </p>

      {/* Zone de dépôt */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition mb-5 ${
          isDragActive ? 'border-orange-400 bg-orange-50' : 'border-gray-200 bg-gray-50 hover:border-orange-300 hover:bg-orange-50/40'
        }`}
      >
        <input {...getInputProps()} />
        <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">
          🧾
        </div>
        <p className="text-base font-semibold text-gray-700 mb-1">
          {isDragActive ? 'Déposez vos factures ici…' : 'Glissez vos factures ici'}
        </p>
        <p className="text-sm text-gray-400 mb-3">ou cliquez pour sélectionner</p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-500">JPG · PNG · WEBP</span>
          <span className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-500">Max 20 Mo / fichier</span>
          <span className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-500">Jusqu'à 6 factures</span>
        </div>
      </div>

      {/* Liste des fichiers sélectionnés */}
      {files.length > 0 && (
        <div className="space-y-2 mb-5">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            {files.length} fichier(s) sélectionné(s)
          </div>
          {files.map((f, i) => (
            <div key={f.name} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
              <span className="text-lg">🧾</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">{f.name}</div>
                <div className="text-xs text-gray-400">{(f.size / 1024).toFixed(0)} Ko</div>
              </div>
              <button onClick={() => removeFile(f.name)}
                className="text-gray-300 hover:text-red-500 transition text-xl leading-none flex-shrink-0">
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Période optionnelle */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
          Période concernée (optionnel)
        </label>
        <input
          type="text"
          placeholder="Ex : Janvier 2024, ou Août 2023 – Janvier 2024"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
          value={mois}
          onChange={e => setMois(e.target.value)}
        />
      </div>

      {/* Conseils */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
        <p className="text-xs font-semibold text-blue-800 mb-2">📸 Conseils pour une bonne lisibilité</p>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            ['🔦','Bonne luminosité, sans reflets'],
            ['📐','Facture à plat, bien cadrée'],
            ['🔎','Tous les chiffres lisibles'],
            ['📋','Facture complète, toutes les lignes visibles'],
          ].map(([icon, txt]) => (
            <div key={txt} className="flex items-start gap-1.5 text-xs text-blue-700">
              <span className="flex-shrink-0">{icon}</span>{txt}
            </div>
          ))}
        </div>
      </div>

      {/* Chargement */}
      {loading && (
        <div className="flex items-center gap-3 bg-orange-50 border border-orange-100 rounded-xl p-4 mb-4">
          <div className="w-5 h-5 border-2 border-orange-300 border-t-orange-500 rounded-full animate-spin flex-shrink-0"/>
          <span className="text-sm text-orange-700">Envoi en cours… veuillez patienter</span>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <button onClick={onBack} disabled={loading}
          className="border border-gray-200 text-gray-600 hover:border-gray-400 font-medium px-6 py-3 rounded-xl text-sm transition disabled:opacity-40">
          ← Retour
        </button>
        <button onClick={submit} disabled={loading || files.length === 0}
          className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold py-3 rounded-xl text-sm transition">
          {loading ? 'Envoi…' : files.length > 0 ? `Envoyer ${files.length} facture(s) →` : 'Sélectionnez au moins une facture'}
        </button>
      </div>
    </div>
  );
}

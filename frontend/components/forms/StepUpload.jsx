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
    if (files.length === 0) { toast.error('Ajoutez au moins une facture pour continuer.'); return; }
    onSuccess({ files, mois });
  };

  return (
    <div>
      {/* Appel à l'action réécrit */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
        Passez à l'action : votre audit gratuit en quelques clics
      </h2>
      <p className="text-slate-500 leading-relaxed mb-8">
        Prêt à découvrir les économies que vous pourriez réaliser ? Téléchargez simplement
        votre dernière facture ENEO. Un de nos experts réalisera un audit détaillé et vous
        présentera un rapport chiffré sous 48 heures.
        <span className="font-semibold text-slate-700"> C'est simple, rapide et sans engagement.</span>
      </p>

      {/* Zone de dépôt */}
      <div {...getRootProps()} className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all mb-5 ${
        isDragActive ? 'border-blue-400 bg-blue-50' : 'border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/50'
      }`}>
        <input {...getInputProps()} />
        <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
        </div>
        <p className="text-base font-semibold text-slate-700 mb-1">
          {isDragActive ? 'Déposez votre facture ici…' : 'Déposez votre facture ENEO ici'}
        </p>
        <p className="text-sm text-slate-400 mb-4">ou cliquez pour parcourir vos fichiers</p>
        <div className="flex justify-center gap-2 flex-wrap">
          {['JPG · PNG · WEBP', 'Max 20 Mo', "Jusqu'à 6 factures"].map(t => (
            <span key={t} className="bg-white border border-slate-200 rounded-full px-3 py-1 text-xs font-semibold text-slate-500">{t}</span>
          ))}
        </div>
      </div>

      {/* Fichiers sélectionnés */}
      {files.length > 0 && (
        <div className="space-y-2 mb-5">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            {files.length} facture(s) prête(s) à l'envoi
          </p>
          {files.map(f => (
            <div key={f.name} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">{f.name}</p>
                <p className="text-xs text-slate-400">{(f.size/1024).toFixed(0)} Ko</p>
              </div>
              <button onClick={() => removeFile(f.name)}
                className="text-slate-300 hover:text-red-400 transition-colors text-lg leading-none">✕</button>
            </div>
          ))}
        </div>
      )}

      {/* Période optionnelle */}
      <div className="mb-7">
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
          Période concernée (optionnel)
        </label>
        <input type="text"
          placeholder="Ex : Janvier 2024, ou les 6 derniers mois"
          value={mois} onChange={e => setMois(e.target.value)}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
        />
      </div>

      {/* Bouton */}
      <button onClick={handleNext} disabled={files.length === 0}
        className={`w-full py-4 rounded-full font-bold text-sm transition-all ${
          files.length === 0
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
            : 'bg-slate-900 text-white hover:bg-blue-600 shadow-lg'
        }`}>
        {files.length > 0
          ? `Envoyer ma facture pour analyse gratuite →`
          : 'Sélectionnez au moins une facture'}
      </button>
      <p className="text-center text-xs text-slate-400 mt-3">
        Gratuit · Confidentiel · Rapport sous 48h · Aucun engagement
      </p>
    </div>
  );
}

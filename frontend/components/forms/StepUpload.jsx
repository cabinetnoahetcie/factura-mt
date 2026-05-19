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
    <div className="animate-fade-up">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
          Déposez votre facture ENEO
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Un ingénieur du cabinet analysera manuellement vos données de consommation pour identifier chaque anomalie.
        </p>
      </div>

      {/* Zone dépôt */}
      <div
        {...getRootProps()}
        className={`
          relative border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-300 mb-8
          ${isDragActive ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300'}
        `}
      >
        <input {...getInputProps()} />
        
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </div>

        <p className="text-slate-900 font-bold mb-1">
          {isDragActive ? 'Déposez ici...' : 'Glissez votre facture ici'}
        </p>
        <p className="text-slate-400 text-xs">
          JPG, PNG ou WEBP (Max 20 Mo)
        </p>
      </div>

      {/* Fichiers sélectionnés */}
      {files.length > 0 && (
        <div className="space-y-3 mb-8">
          {files.map(f => (
            <div key={f.name} className="flex items-center gap-3 bg-white border border-slate-100 p-3 rounded-xl shadow-sm">
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 02 2h12a2 2 0 0 02-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate">{f.name}</div>
                <div className="text-[10px] text-slate-400">{(f.size / 1024).toFixed(0)} Ko</div>
              </div>
              <button onClick={() => removeFile(f.name)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Période */}
      <div className="mb-8">
        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
          Période concernée (optionnel)
        </label>
        <input
          type="text"
          placeholder="Ex : Janvier 2024"
          value={mois}
          onChange={e => setMois(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      {/* Bouton */}
      <button
        onClick={handleNext}
        disabled={files.length === 0}
        className={`
          w-full py-4 rounded-xl font-bold text-sm transition-all active:scale-[0.98] shadow-lg
          ${files.length === 0 ? 'bg-slate-100 text-slate-400 shadow-none cursor-not-allowed' : 'bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700'}
        `}
      >
        {files.length > 0 ? `Continuer (${files.length} facture${files.length > 1 ? 's' : ''})` : 'Déposez une facture pour continuer'}
      </button>
    </div>
  );
}

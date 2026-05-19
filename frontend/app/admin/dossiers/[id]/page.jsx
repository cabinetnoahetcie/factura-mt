'use client';
// app/admin/dossiers/[id]/page.jsx
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { adminAPI } from '@/lib/api';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const money = n => n ? Math.round(n).toLocaleString('fr-FR') + ' F' : '—';

export default function DossierDetailPage() {
  const { id } = useParams();
  const router  = useRouter();
  const [dossier, setDossier] = useState(null);
  const [users,   setUsers]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);

  const [form, setForm] = useState({
    statut:'', priorite:'', assigneA:'', notes:'',
    noteAnalyste:'', economiesIdentifiees:'', recommandations:'', rapportUrl:'',
  });

  useEffect(() => {
    Promise.all([adminAPI.getDossier(id), adminAPI.getUsers()])
      .then(([d, u]) => {
        const dos = d.data;
        setDossier(dos);
        setUsers(u.data);
        setForm({
          statut:               dos.statut,
          priorite:             dos.priorite,
          assigneA:             dos.assigneA || '',
          notes:                dos.notes || '',
          noteAnalyste:         dos.noteAnalyste || '',
          economiesIdentifiees: dos.economiesIdentifiees || '',
          recommandations:      dos.recommandations || '',
          rapportUrl:           dos.rapportUrl || '',
        });
      })
      .catch(() => toast.error('Erreur de chargement'))
      .finally(() => setLoading(false));
  }, [id]);

  const save = async () => {
    setSaving(true);
    try {
      const res = await adminAPI.updateDossier(id, form);
      setDossier(res.data);
      toast.success('Dossier mis à jour !');
    } catch { toast.error('Erreur de sauvegarde'); }
    finally { setSaving(false); }
  };

  const setF = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-2 border-gray-200 border-t-orange-500 rounded-full animate-spin"/>
    </div>
  );

  const c = dossier?.client;

  return (
    <div>
      <button onClick={() => router.back()}
        className="text-sm text-gray-400 hover:text-gray-700 mb-6 flex items-center gap-2 transition">
        ← Retour aux dossiers
      </button>

      <div className="grid grid-cols-3 gap-6">

        {/* ── Colonne gauche : Info client + factures ── */}
        <div className="col-span-2 space-y-5">

          {/* Client */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-serif text-xl text-gray-900 mb-4">Client</h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
              {[
                ['Entreprise', c?.nom],
                ['Secteur',    c?.secteur],
                ['Ville',      c?.ville],
                ['Contact',    c?.contact],
                ['Téléphone',  c?.telephone],
                ['Email',      c?.email || '—'],
              ].map(([l,v]) => (
                <div key={l}>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{l}</div>
                  <div className="font-semibold text-gray-900">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Factures */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-serif text-xl text-gray-900 mb-4">
              Factures reçues ({dossier?.factures?.length || 0})
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {dossier?.factures?.map((f, i) => (
                <div key={f.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <a href={f.imageUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <img src={f.imageUrl} alt={f.nomFichier}
                      className="w-full h-48 object-contain bg-gray-50 hover:opacity-90 transition"/>
                  </a>
                  <div className="p-3">
                    <div className="text-xs font-semibold text-gray-700 truncate">{f.nomFichier}</div>
                    {f.mois && <div className="text-xs text-gray-400 mt-0.5">{f.mois}</div>}
                    <a href={f.imageUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-orange-500 hover:text-orange-600 font-medium mt-1 inline-block">
                      Voir en grand →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Zone de saisie des résultats d'analyse */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-serif text-xl text-gray-900 mb-1">Résultats de l'analyse</h2>
            <p className="text-sm text-gray-400 mb-6">Renseignez vos conclusions après avoir analysé les factures.</p>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Économies potentielles identifiées (FCFA / mois)
                </label>
                <input type="number"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition"
                  placeholder="Ex : 150000"
                  value={form.economiesIdentifiees}
                  onChange={e => setF('economiesIdentifiees', e.target.value)}
                />
                {form.economiesIdentifiees && (
                  <p className="text-xs text-green-600 mt-1">
                    ≈ {money(form.economiesIdentifiees * 12)} / an
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Recommandations principales
                </label>
                <textarea rows={5}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 resize-none transition"
                  placeholder="1. Corriger le facteur de puissance (Cos φ)&#10;2. Réduire la puissance souscrite de 130 à 110 kW&#10;3. Décaler les charges en heures creuses…"
                  value={form.recommandations}
                  onChange={e => setF('recommandations', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Note de l'auditeur
                </label>
                <textarea rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 resize-none transition"
                  placeholder="Observations générales, contexte, anomalies détectées, urgence…"
                  value={form.noteAnalyste}
                  onChange={e => setF('noteAnalyste', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Lien vers le rapport PDF (optionnel)
                </label>
                <input type="url"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition"
                  placeholder="https://…"
                  value={form.rapportUrl}
                  onChange={e => setF('rapportUrl', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Colonne droite : Gestion ── */}
        <div className="space-y-5">

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-serif text-xl text-gray-900 mb-5">Gestion</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Statut</label>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400"
                  value={form.statut} onChange={e => setF('statut', e.target.value)}>
                  <option value="RECU">Reçu</option>
                  <option value="EN_COURS">En cours</option>
                  <option value="TRAITE">Traité</option>
                  <option value="ANNULE">Annulé</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Priorité</label>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400"
                  value={form.priorite} onChange={e => setF('priorite', e.target.value)}>
                  <option value="URGENTE">Urgente</option>
                  <option value="HAUTE">Haute</option>
                  <option value="NORMALE">Normale</option>
                  <option value="BASSE">Basse</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Assigner à</label>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400"
                  value={form.assigneA} onChange={e => setF('assigneA', e.target.value)}>
                  <option value="">— Non assigné —</option>
                  {users.map(u => (
                    <option key={u.id} value={u.id}>{u.nom} ({u.role})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Notes internes</label>
                <textarea rows={3}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400 resize-none"
                  placeholder="Rappels, actions à faire…"
                  value={form.notes} onChange={e => setF('notes', e.target.value)}
                />
              </div>

              <button onClick={save} disabled={saving}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 text-white font-semibold py-3 rounded-xl text-sm transition">
                {saving ? 'Enregistrement…' : '✓ Enregistrer'}
              </button>
            </div>
          </div>

          {/* Métadonnées */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xs text-gray-500 space-y-2">
            <div>Reçu le <strong>{dossier?.createdAt && format(new Date(dossier.createdAt),'dd MMM yyyy à HH:mm',{locale:fr})}</strong></div>
            {dossier?.traiteAt && <div>Traité le <strong>{format(new Date(dossier.traiteAt),'dd MMM yyyy',{locale:fr})}</strong></div>}
            {form.economiesIdentifiees && (
              <div className="text-green-600 font-semibold">
                💰 {money(form.economiesIdentifiees)}/mois identifiés
              </div>
            )}
            <div className="pt-1">ID : <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs break-all">{id}</code></div>
          </div>
        </div>
      </div>
    </div>
  );
}

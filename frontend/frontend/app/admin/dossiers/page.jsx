'use client';
// app/admin/dossiers/page.jsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { adminAPI } from '@/lib/api';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const STATUT_STYLE = {
  RECU:     'bg-blue-100 text-blue-700',
  EN_COURS: 'bg-orange-100 text-orange-700',
  TRAITE:   'bg-green-100 text-green-700',
  ANNULE:   'bg-gray-100 text-gray-500',
};
const PRIORITE_STYLE = {
  URGENTE: 'bg-red-500 text-white',
  HAUTE:   'bg-orange-400 text-white',
  NORMALE: 'bg-gray-100 text-gray-600',
  BASSE:   'bg-gray-50 text-gray-400',
};

export default function DossiersPage() {
  const [dossiers, setDossiers] = useState([]);
  const [total, setTotal]       = useState(0);
  const [page, setPage]         = useState(1);
  const [pages, setPages]       = useState(1);
  const [filters, setFilters]   = useState({ statut:'', priorite:'', search:'' });
  const [loading, setLoading]   = useState(true);

  const fetch_ = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getDossiers({ ...filters, page, limit:20 });
      setDossiers(res.data.dossiers);
      setTotal(res.data.total);
      setPages(res.data.totalPages);
    } catch { toast.error('Erreur'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetch_(); }, [filters, page]);

  const exportCSV = async () => {
    try {
      const res = await adminAPI.exportDossiers();
      const url = URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement('a'); a.href=url; a.download='dossiers.csv'; a.click();
      URL.revokeObjectURL(url);
    } catch { toast.error('Erreur export'); }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-3xl text-gray-900 mb-1">Dossiers</h1>
          <p className="text-sm text-gray-400">{total} dossier{total>1?'s':''} au total</p>
        </div>
        <button onClick={exportCSV} className="bg-white border border-gray-200 text-gray-600 px-4 py-2.5 rounded-xl text-sm font-medium hover:border-gray-400 transition">
          ⬇ Exporter CSV
        </button>
      </div>

      {/* Filtres */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-5 flex gap-3 flex-wrap">
        <input type="text" placeholder="🔍 Rechercher…"
          className="flex-1 min-w-48 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400"
          value={filters.search} onChange={e => setFilters(f=>({...f, search:e.target.value}))} />
        <select className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none"
          value={filters.statut} onChange={e => setFilters(f=>({...f, statut:e.target.value}))}>
          <option value="">Tous statuts</option>
          <option value="RECU">Reçu</option>
          <option value="EN_COURS">En cours</option>
          <option value="TRAITE">Traité</option>
          <option value="ANNULE">Annulé</option>
        </select>
        <select className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none"
          value={filters.priorite} onChange={e => setFilters(f=>({...f, priorite:e.target.value}))}>
          <option value="">Toutes priorités</option>
          <option value="URGENTE">Urgente</option>
          <option value="HAUTE">Haute</option>
          <option value="NORMALE">Normale</option>
          <option value="BASSE">Basse</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-orange-500 rounded-full animate-spin"/>
          </div>
        ) : dossiers.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">Aucun dossier</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Client','Secteur / Ville','Factures','Priorité','Statut','Expert','Date',''].map(h=>(
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {dossiers.map(d => (
                <tr key={d.id} className="hover:bg-gray-50 transition">
                  <td className="px-5 py-4">
                    <div className="font-semibold text-gray-900">{d.client.nom}</div>
                    <div className="text-xs text-gray-400">{d.client.telephone}</div>
                    {d.client.email && <div className="text-xs text-gray-400">{d.client.email}</div>}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-600">
                    <div>{d.client.secteur}</div>
                    <div className="text-xs text-gray-400">{d.client.ville}</div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-semibold text-gray-900">{d.factures.length}</span>
                    <span className="text-xs text-gray-400 ml-1">fichier(s)</span>
                    {d.factures[0]?.mois && <div className="text-xs text-gray-400">{d.factures[0].mois}</div>}
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${PRIORITE_STYLE[d.priorite]}`}>{d.priorite}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${STATUT_STYLE[d.statut]}`}>
                      {d.statut.replace('_',' ')}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-xs text-gray-500">{d.expert?.nom || '—'}</td>
                  <td className="px-5 py-4 text-xs text-gray-400">
                    {format(new Date(d.createdAt),'dd MMM yyyy',{locale:fr})}
                  </td>
                  <td className="px-5 py-4">
                    <Link href={`/admin/dossiers/${d.id}`} className="text-orange-500 hover:text-orange-600 font-semibold text-xs">
                      Traiter →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {pages > 1 && (
          <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100">
            <button disabled={page===1} onClick={()=>setPage(p=>p-1)} className="text-sm text-gray-500 disabled:opacity-30 hover:text-gray-900">← Précédent</button>
            <span className="text-xs text-gray-400">Page {page} / {pages}</span>
            <button disabled={page===pages} onClick={()=>setPage(p=>p+1)} className="text-sm text-gray-500 disabled:opacity-30 hover:text-gray-900">Suivant →</button>
          </div>
        )}
      </div>
    </div>
  );
}

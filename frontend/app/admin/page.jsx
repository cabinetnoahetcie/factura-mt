'use client';
// app/admin/page.jsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { adminAPI } from '@/lib/api';

const money = n => n ? Math.round(n).toLocaleString('fr-FR') + ' F' : '0 F';

function KPI({ icon, label, value, sub, color = 'orange' }) {
  const colors = {
    orange: 'bg-orange-50 text-orange-600',
    green:  'bg-green-50  text-green-600',
    blue:   'bg-blue-50   text-blue-600',
    red:    'bg-red-50    text-red-600',
  };
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4 ${colors[color]}`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm font-semibold text-gray-600">{label}</div>
      {sub && <div className="text-xs text-gray-400 mt-1">{sub}</div>}
    </div>
  );
}

export default function AdminDashboard() {
  const [stats,   setStats]   = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    adminAPI.getStats()
      .then(r => { setStats(r.data); setLoading(false); })
      .catch(()=> setLoading(false));
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-2 border-gray-200 border-t-orange-500 rounded-full animate-spin"/>
    </div>
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-gray-900 mb-1">Dashboard</h1>
        <p className="text-sm text-gray-400">Vue d'ensemble de l'activité FacturaMT</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPI icon="🏢" label="Clients"         value={stats?.totalClients || 0} color="blue"/>
        <KPI icon="📂" label="Dossiers reçus"  value={stats?.totalDossiers || 0}
             sub={`${stats?.aujourdhui || 0} aujourd'hui`} color="orange"/>
        <KPI icon="⏳" label="En attente"       value={stats?.dossiers?.recu || 0} color="red"/>
        <KPI icon="💰" label="Économies identifiées" value={money(stats?.economiesTotal)}
             sub="Total cumulé (traités)" color="green"/>
      </div>

      {/* Statuts */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label:'Reçus',    val:stats?.dossiers?.recu    || 0, cls:'bg-blue-100 text-blue-700',   href:'/admin/dossiers?statut=RECU'     },
          { label:'En cours', val:stats?.dossiers?.enCours || 0, cls:'bg-orange-100 text-orange-700', href:'/admin/dossiers?statut=EN_COURS' },
          { label:'Traités',  val:stats?.dossiers?.traite  || 0, cls:'bg-green-100 text-green-700',  href:'/admin/dossiers?statut=TRAITE'   },
        ].map(d => (
          <Link href={d.href} key={d.label}
            className={`${d.cls} rounded-2xl p-5 text-center hover:opacity-80 transition block`}>
            <div className="text-3xl font-bold">{d.val}</div>
            <div className="text-sm font-semibold mt-1">{d.label}</div>
          </Link>
        ))}
      </div>

      {/* Accès rapide */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="font-serif text-xl text-gray-900 mb-4">Accès rapide</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link href="/admin/dossiers"
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition">
            <span className="text-2xl">📂</span>
            <div>
              <div className="font-semibold text-gray-900 text-sm">Voir tous les dossiers</div>
              <div className="text-xs text-gray-400">Analyser les factures reçues</div>
            </div>
          </Link>
          <Link href="/admin/clients"
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition">
            <span className="text-2xl">🏢</span>
            <div>
              <div className="font-semibold text-gray-900 text-sm">Base clients</div>
              <div className="text-xs text-gray-400">Historique des soumissions</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

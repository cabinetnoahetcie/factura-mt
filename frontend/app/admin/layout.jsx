'use client';
// app/admin/layout.jsx
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link    from 'next/link';
import Cookies from 'js-cookie';
import { authAPI } from '@/lib/api';

const NAV = [
  { href:'/admin',              icon:'📊', label:'Dashboard' },
  { href:'/admin/dossiers',     icon:'📂', label:'Dossiers'  },
  { href:'/admin/clients',      icon:'🏢', label:'Clients'   },
  { href:'/admin/utilisateurs', icon:'👥', label:'Équipe'    },
];

export default function AdminLayout({ children }) {
  const router   = useRouter();
  const pathname = usePathname();
  const [user,    setUser]    = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('factura_token');
    if (!token) { router.replace('/auth/login'); return; }
    authAPI.me()
      .then(r => { setUser(r.data); setLoading(false); })
      .catch(()=> { Cookies.remove('factura_token'); router.replace('/auth/login'); });
  }, []);

  const logout = () => { Cookies.remove('factura_token'); router.push('/auth/login'); };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-8 h-8 border-2 border-gray-200 border-t-orange-500 rounded-full animate-spin"/>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-56 bg-gray-900 text-white flex flex-col fixed inset-y-0 left-0 z-50 shadow-xl">
        <div className="p-5 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">⚡</div>
            <div>
              <div className="font-serif text-base">FacturaMT</div>
              <div className="text-[9px] text-gray-500 tracking-widest uppercase">Admin</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {NAV.map(item => {
            const active = pathname===item.href || (item.href!=='/admin' && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                  active ? 'bg-orange-500 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}>
                <span>{item.icon}</span>{item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">
              {user?.nom?.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="text-sm font-medium">{user?.nom}</div>
              <div className="text-xs text-gray-500">{user?.role}</div>
            </div>
          </div>
          <Link href="/" className="block text-xs text-gray-500 hover:text-white mb-2 transition">← Site public</Link>
          <button onClick={logout} className="text-xs text-gray-500 hover:text-red-400 transition">Déconnexion</button>
        </div>
      </aside>
      <main className="flex-1 ml-56 p-8">{children}</main>
    </div>
  );
}

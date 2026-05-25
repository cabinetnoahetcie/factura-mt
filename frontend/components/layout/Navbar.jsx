'use client';
// components/layout/Navbar.jsx
import Link from 'next/link';
import { useState } from 'react';

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite déposer ma facture ENEO MT pour une analyse gratuite.")}`;

const NAV = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Le Cabinet',
    children: [
      { label: 'Présentation', href: '/a-propos'   },
      { label: 'Références',   href: '/references' },
    ],
  },
  { label: 'Services', href: '/services' },
  {
    label: 'Missions',
    children: [
      { label: 'Déroulement', href: '/missions'    },
      { label: 'Engagements', href: '/engagements' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ onAudit }) {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">

        {/* Logo — identique à l'original */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M17 7h4v4" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-slate-900 leading-tight">
              Cabinet Global Enerdy
            </div>
            <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              Ingénierie Énergétique
            </div>
          </div>
        </Link>

        {/* Navigation centrale — nouveaux menus style Expensalys */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-2 text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button className="flex items-center gap-1 px-4 py-2 text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors bg-transparent border-none cursor-pointer">
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
              )}

              {/* Dropdown */}
              {item.children && openMenu === item.label && (
                <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[180px] z-50">
                  {item.children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-3 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions droite — identiques à l'original */}
        <div className="flex items-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-sm font-semibold"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            +237 697 252 071
          </a>
          <button
            onClick={onAudit}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-sm"
          >
            Déposer ma facture
          </button>
        </div>
      </div>
    </nav>
  );
}

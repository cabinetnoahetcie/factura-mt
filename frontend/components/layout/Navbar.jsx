'use client';
// components/layout/Navbar.jsx
import Link from 'next/link';
import { useState } from 'react';

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

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 17l6-6 4 4 8-8"/>
              <path d="M17 7h4v4"/>
            </svg>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-slate-900 leading-tight">Cabinet Global Enerdy</div>
            <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Ingénierie Énergétique</div>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.label} className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.href ? (
                <Link href={item.href}
                  className="flex items-center px-4 py-2 text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors">
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
                    <Link key={child.href} href={child.href}
                      className="block px-5 py-3 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </nav>
  );
}

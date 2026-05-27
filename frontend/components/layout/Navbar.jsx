'use client';
// components/layout/Navbar.jsx
import Link from 'next/link';
import { useState } from 'react';

const NAV = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Le Cabinet',
    children: [
      { label: 'Présentation',  href: '/a-propos'     },
      { label: "Raison d'être", href: '/raison-detre'  },
      { label: 'Références',    href: '/references'    },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Électricité MT', href: '/services' },
    ],
  },
  {
    label: 'Missions',
    children: [
      { label: 'Déroulement',   href: '/missions'      },
      { label: 'Engagements',   href: '/engagements'   },
      { label: 'Idées reçues',  href: '/idees-recues'  },
      { label: 'Rémunération',  href: '/remuneration'  },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ onAudit }) {
  const [openMenu,        setOpenMenu]        = useState(null);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [mobileExpanded,  setMobileExpanded]  = useState(null);

  const closeMobile = () => { setMobileOpen(false); setMobileExpanded(null); };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" onClick={closeMobile} className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l6-6 4 4 8-8"/>
                <path d="M17 7h4v4"/>
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 leading-tight">Cabinet Global Energy</div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Ingénierie Énergétique</div>
            </div>
          </Link>

          {/* Navigation desktop */}
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

                {/* Dropdown desktop */}
                {item.children && openMenu === item.label && (
                  <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[200px] z-50">
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

          {/* Hamburger mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors flex-shrink-0"
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-slate-700 my-1 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}/>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99]" onClick={closeMobile}>
          <div className="absolute inset-0 bg-black/40"/>
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]"
            onClick={e => e.stopPropagation()}>
            <div className="px-6 py-4 space-y-1">
              {NAV.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link href={item.href} onClick={closeMobile}
                      className="flex items-center w-full px-4 py-4 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors uppercase tracking-widest">
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-4 py-4 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors uppercase tracking-widest">
                        {item.label}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                          className={`transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}>
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="ml-4 mt-1 mb-2 border-l-2 border-blue-100 pl-4 space-y-1">
                          {item.children.map(child => (
                            <Link key={child.href} href={child.href} onClick={closeMobile}
                              className="block px-4 py-3 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <div className="border-t border-slate-100 my-3"/>
              <div className="px-4 py-3 bg-slate-50 rounded-xl">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Contact direct</p>
                <a href="https://wa.me/237697252071" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-green-600" onClick={closeMobile}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  +237 697 252 071
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

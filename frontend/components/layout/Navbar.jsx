'use client';
// components/layout/Navbar.jsx
import { useState } from 'react';

const NAV = [
  { label: 'Accueil',        href: '#accueil'   },
  { label: 'Notre Expertise', href: '#expertise' },
  { label: 'Processus',      href: '#processus' },
  { label: 'Le Cabinet',     href: '#cabinet'   },
  { label: 'Contact',        href: '#contact'   },
];

export default function Navbar({ onAudit }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">

          {/* Logo */}
          <button onClick={() => scrollTo('#accueil')} className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l6-6 4 4 8-8"/>
                <path d="M17 7h4v4"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-slate-900 leading-tight">Cabinet Global Energy</div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Ingénierie Énergétique</div>
            </div>
          </button>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <button key={item.label}
                onClick={() => scrollTo(item.href)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors">
                {item.label}
              </button>
            ))}
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors flex-shrink-0">
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-slate-700 my-1 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}/>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99]" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/40"/>
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-2xl"
            onClick={e => e.stopPropagation()}>
            <div className="px-6 py-4 space-y-1">
              {NAV.map((item) => (
                <button key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="flex items-center w-full px-4 py-4 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors uppercase tracking-widest">
                  {item.label}
                </button>
              ))}
              <div className="border-t border-slate-100 my-3"/>
              <div className="px-4 py-3 bg-slate-50 rounded-xl">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Contact direct</p>
                <a href="https://wa.me/237697252071" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-green-600"
                  onClick={() => setMobileOpen(false)}>
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

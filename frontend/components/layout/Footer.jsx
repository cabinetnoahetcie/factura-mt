// components/layout/Footer.jsx
import Link from 'next/link';

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Enerdy, je souhaite en savoir plus sur vos services d'audit énergétique.")}`;

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l6-6 4 4 8-8" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-white">Cabinet Global Enerdy</div>
              <div className="text-[9px] font-bold text-blue-500 uppercase tracking-widest">SARL · Douala</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Expertise en ingénierie énergétique et optimisation des coûts pour les industries au Cameroun.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Réglementation</h4>
          <p className="text-sm leading-relaxed">
            Analyses conformes aux directives de l'ARSEL et à la loi camerounaise n°2010/012 sur la cybersécurité.
          </p>
          <div className="text-[10px] text-slate-600 uppercase font-bold tracking-widest">
            RCCM & NIU en cours
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href={WA_URL} target="_blank" className="block text-blue-500 hover:text-blue-400 transition-colors font-semibold">
              WhatsApp : +237 697 252 071
            </a>
            <a href="mailto:globalenergysarl@gmail.com" className="block hover:text-white transition-colors">
              globalenergysarl@gmail.com
            </a>
            
            <Link href="/a-propos"   style={{ color:'#94a3b8', textDecoration:'none', display:'block' }}>À propos</Link>
            <Link href="/references" style={{ color:'#94a3b8', textDecoration:'none', display:'block' }}>Références</Link>
            <Link href="/contact"    style={{ color:'#94a3b8', textDecoration:'none', display:'block' }}>Contact</Link>
            <Link href="/mentions-legales" className="block text-xs hover:text-white transition-colors underline underline-offset-4">
              Mentions légales & Confidentialité
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-900 text-center text-[10px] uppercase tracking-[0.2em] text-slate-600">
        © {new Date().getFullYear()} Cabinet Global Enerdy SARL · Tous droits réservés
      </div>
    </footer>
  );
}

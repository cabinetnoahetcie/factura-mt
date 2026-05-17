// components/layout/Navbar.jsx
import Link from 'next/link';

export default function Navbar({ onAudit }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center text-white text-lg">⚡</div>
          <div>
            <div className="font-serif text-lg text-gray-900 leading-none">FacturaMT</div>
            <div className="text-[10px] text-gray-400 tracking-widest uppercase">ENEO Cameroun</div>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/admin" className="text-sm text-gray-500 hover:text-gray-800 transition hidden sm:block">
            Admin
          </Link>
          <button
            onClick={onAudit}
            className="bg-gray-900 hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition">
            Audit gratuit
          </button>
        </div>
      </div>
    </nav>
  );
}

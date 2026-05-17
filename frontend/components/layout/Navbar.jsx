// components/layout/Navbar.jsx
'use client';
import Link from 'next/link';

export default function Navbar({ onAudit }) {
  return (
    <nav style={{
      position:'sticky', top:0, zIndex:50,
      background:'rgba(250,249,245,0.96)',
      backdropFilter:'blur(12px)',
      borderBottom:'1px solid #e2e0d8',
    }}>
      <div style={{
        maxWidth:1100, margin:'0 auto', padding:'0 20px',
        height:64, display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <Link href="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
          <div style={{
            width:36, height:36, borderRadius:9, background:'#e8622a',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:18, flexShrink:0,
          }}>⚡</div>
          <div>
            <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:18, color:'#0a0a0a', lineHeight:1.1 }}>
              FacturaMT
            </div>
            <div style={{ fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase', color:'#aaa' }}>
              Audit ENEO Cameroun
            </div>
          </div>
        </Link>

        <button onClick={onAudit} style={{
          background:'#e8622a', color:'white', border:'none',
          borderRadius:9, padding:'10px 22px',
          fontSize:13, fontWeight:600, cursor:'pointer',
          fontFamily:"'DM Sans',sans-serif",
          whiteSpace:'nowrap', flexShrink:0,
        }}>
          Démarrer l'audit gratuit
        </button>
      </div>
    </nav>
  );
}

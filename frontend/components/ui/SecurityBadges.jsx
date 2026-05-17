// components/ui/SecurityBadges.jsx
// Badges de réassurance sécurité — conformité ART Cameroun

const badges = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9,12 11,14 15,10"/>
      </svg>
    ),
    title: 'Conformité ART',
    desc: 'Analyses alignées sur le règlement du service de distribution d\'électricité au Cameroun (ARSEL).',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    ),
    title: 'Données protégées',
    desc: 'Vos informations commerciales ne sont jamais partagées ni revendues à des tiers. Secret professionnel garanti.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    title: 'Suppression garantie',
    desc: 'Vos factures sont supprimées de nos serveurs 48h après la livraison de votre rapport d\'audit.',
  },
];

export default function SecurityBadges() {
  return (
    <div style={{
      marginTop:24,
      borderTop:'1px solid #e2e8f0',
      paddingTop:20,
    }}>
      <div style={{
        fontSize:11, fontWeight:700, color:'#64748b',
        textTransform:'uppercase', letterSpacing:'0.1em',
        textAlign:'center', marginBottom:16,
        fontFamily:"'DM Sans',sans-serif",
      }}>
        Cadre sécurisé &amp; confidentiel — Loi camerounaise n°2010/012
      </div>
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))',
        gap:14,
      }}>
        {badges.map((b, i) => (
          <div key={i} style={{
            display:'flex', alignItems:'flex-start', gap:10,
            background:'#f0fdf4', border:'1px solid #d1fae5',
            borderRadius:10, padding:'12px 14px',
          }}>
            <div style={{ flexShrink:0, marginTop:1 }}>{b.icon}</div>
            <div>
              <div style={{
                fontSize:12, fontWeight:700, color:'#064e3b',
                marginBottom:3, fontFamily:"'DM Sans',sans-serif",
              }}>{b.title}</div>
              <div style={{ fontSize:11, color:'#065f46', lineHeight:1.55 }}>{b.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

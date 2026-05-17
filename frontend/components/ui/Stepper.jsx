// components/ui/Stepper.jsx
export default function Stepper({ steps, current }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 mb-8 shadow-sm">
      <div className="flex items-center justify-center gap-0">
        {steps.map((label, i) => {
          const done   = i < current;
          const active = i === current;
          return (// components/ui/Stepper.jsx
const STEPS = ['Votre facture', 'Vos coordonnées', 'Confirmation'];

export default function Stepper({ current }) {
  return (
    <div style={{
      background:'white', border:'1px solid #e2e0d8',
      borderRadius:14, padding:'16px 24px',
      marginBottom:28, boxShadow:'0 2px 12px rgba(0,0,0,0.05)',
      overflowX:'auto',
    }}>
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'center',
        gap:4, minWidth:280,
      }}>
        {STEPS.map((label, i) => {
          const done   = i < current;
          const active = i === current;
          return (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:4 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                {/* Dot */}
                <div style={{
                  width:28, height:28, borderRadius:'50%', flexShrink:0,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:11, fontWeight:700,
                  background: done ? '#1a8a4a' : active ? '#e8622a' : '#f0efe9',
                  color:       done ? 'white'   : active ? 'white'   : '#bbb',
                  border:      active ? '2px solid #e8622a' : '2px solid transparent',
                  transition:  'all 0.3s',
                }}>
                  {done ? '✓' : i + 1}
                </div>
                {/* Label — masqué sur très petit écran */}
                <span style={{
                  fontSize:12, fontWeight:500,
                  color: active ? '#e8622a' : done ? '#1a8a4a' : '#bbb',
                  whiteSpace:'nowrap',
                  display: 'block',
                }}>
                  {label}
                </span>
              </div>
              {/* Séparateur */}
              {i < STEPS.length - 1 && (
                <div style={{
                  width: 32, height: 1, flexShrink: 0,
                  background: i < current ? '#1a8a4a' : '#e2e0d8',
                  margin:'0 4px',
                }}/>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

            <div key={i} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  done   ? 'bg-green-500 text-white' :
                  active ? 'bg-orange-500 text-white ring-4 ring-orange-100' :
                           'bg-gray-100 text-gray-400'
                }`}>
                  {done ? '✓' : i + 1}
                </div>
                <span className={`text-sm font-medium hidden sm:block ${
                  active ? 'text-orange-500' :
                  done   ? 'text-green-600' :
                           'text-gray-400'
                }`}>{label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-12 h-px mx-2 ${i < current ? 'bg-green-400' : 'bg-gray-200'}`}/>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

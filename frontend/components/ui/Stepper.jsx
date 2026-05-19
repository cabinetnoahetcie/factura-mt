// components/ui/Stepper.jsx
const STEPS = ['Votre facture', 'Vos coordonnées', 'Confirmation'];

export default function Stepper({ current }) {
  return (
    <div className="flex items-center justify-between max-w-md mx-auto mb-12 relative">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
      
      {STEPS.map((label, i) => {
        const done = i < current;
        const active = i === current;
        
        return (
          <div key={i} className="relative z-10 flex flex-col items-center gap-3">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500
              ${done ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 
                active ? 'bg-white border-2 border-blue-600 text-blue-600 shadow-xl scale-110' : 
                'bg-white border-2 border-slate-100 text-slate-300'}
            `}>
              {done ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : i + 1}
            </div>
            <span className={`
              text-[10px] font-bold uppercase tracking-widest transition-colors duration-500
              ${active ? 'text-blue-600' : done ? 'text-slate-900' : 'text-slate-300'}
            `}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

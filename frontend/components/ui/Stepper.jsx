// components/ui/Stepper.jsx
export default function Stepper({ steps, current }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 mb-8 shadow-sm">
      <div className="flex items-center justify-center gap-0">
        {steps.map((label, i) => {
          const done   = i < current;
          const active = i === current;
          return (
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

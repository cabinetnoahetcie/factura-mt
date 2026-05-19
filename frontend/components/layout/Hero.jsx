// components/layout/Hero.jsx
export default function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Audit Gratuit · Douala & Yaoundé
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8 animate-fade-up-delay-1">
            Optimisez vos factures <br />
            <span className="text-blue-600">ENEO Moyenne Tension</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-12 animate-fade-up-delay-2">
            Le Cabinet Global Enerdy analyse vos factures pour identifier les erreurs de tarification et les pénalités évitables. Un rapport chiffré en 48h, sans engagement.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100 animate-fade-up-delay-2">
            {[
              { val: '80%', lbl: 'Anomalies' },
              { val: '48h', lbl: 'Délai' },
              { val: '100%', lbl: 'Humain' },
            ].map(({ val, lbl }) => (
              <div key={val} className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">{val}</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-fade-up-delay-2 hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50 border-8 border-white">
            <img 
              src="/images/factory.jpg" 
              alt="Modern Industrial Facility" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="text-xs font-bold text-slate-900">Expertise Validée</div>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Nos ingénieurs interviennent sur les sites industriels de Bassa et Bonabéri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

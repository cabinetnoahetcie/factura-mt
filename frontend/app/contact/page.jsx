'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour Cabinet Global Energy, je souhaite obtenir des informations sur vos missions d'audit de facturation Moyenne Tension.")}`;

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Contacter le Cabinet
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Le Cabinet Global Energy est joignable du lundi au vendredi, de 8h à 16h,
            pour répondre à toute demande d'information ou de prise en charge d'une mission d'audit.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-7 flex items-start gap-5">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">Ligne directe &amp; WhatsApp</p>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="text-2xl font-extrabold text-green-700 block mb-2 hover:underline">
                +237 697 252 071
              </a>
              <p className="text-xs text-green-600 leading-relaxed">
                Canal privilégié pour toute prise de contact rapide.
                Réponse assurée sous 2 heures en jours ouvrables.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-7 flex items-start gap-5">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Adresse électronique</p>
              <a href="mailto:globalenergysarl@gmail.com"
                className="text-base font-bold text-slate-900 block mb-2 hover:text-blue-600">
                globalenergysarl@gmail.com
              </a>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pour toute demande nécessitant une réponse circonstanciée
                ou la transmission de documents. Délai de réponse : 24 heures ouvrables.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-7 flex items-start gap-5">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Siège social</p>
              <p className="text-base font-bold text-slate-900 mb-2">
                Douala, Akwa — Immeuble PMUC
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cameroun. Le Cabinet reçoit sur rendez-vous pour tout entretien
                préalable à une mission d'audit.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-7 flex items-start gap-5">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Horaires d'accueil</p>
              <p className="text-base font-bold text-slate-900 mb-2">
                Lundi – Vendredi · 08h00 – 16h00
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                5 jours sur 7. En dehors de ces horaires, vos messages
                WhatsApp sont traités en priorité dès la reprise.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

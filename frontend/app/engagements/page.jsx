'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

export default function Engagements() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Missions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Nos engagements
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Chez Global Enerdy, la transparence n'est pas un argument commercial.
            C'est notre mode de fonctionnement — y compris sur notre modèle de rémunération.
          </p>
        </div>
      </section>

      {/* Modèle économique avec exemple */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Notre modèle économique</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 max-w-2xl leading-tight">
            Vous ne payez que si vous économisez réellement
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-12 max-w-2xl">
            L'étude est gratuite et sans engagement. Si nous identifions des anomalies,
            nous vous proposons un accord de partenariat avant de vous communiquer les chiffres
            détaillés. Notre rémunération est un pourcentage des économies effectivement réalisées.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* 3 cas */}
            <div className="space-y-4">
              {[
                { titre:'L\'étude est gratuite',         desc:"Nous analysons votre facture sans contrepartie. Vous apprenez qu'il y a des anomalies et l'ordre de grandeur des économies possibles.", color:'border-green-500 bg-green-50' },
                { titre:'Si aucun levier trouvé',        desc:"Si nous ne décelons aucune anomalie, vous êtes confortés dans vos choix. Aucune facture, aucun engagement.", color:'border-slate-300 bg-slate-50' },
                { titre:'Si des économies sont identifiées', desc:"Nous formalisons un accord. Notre rémunération ne s'applique que sur les économies réellement constatées sur vos factures.", color:'border-blue-600 bg-blue-50' },
              ].map((item, i) => (
                <div key={i} className={`border-l-4 ${item.color} rounded-r-2xl p-5`}>
                  <h3 className="font-extrabold text-slate-900 text-sm mb-2">{item.titre}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Exemple chiffré */}
            <div className="bg-slate-900 rounded-3xl p-8">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">Exemple concret</p>
              <div className="space-y-4 text-sm">
                {[
                  { label:'Surcoût mensuel identifié', val:'500 000 FCFA', color:'text-white' },
                  { label:'Durée de l\'accord',         val:'6 mois',       color:'text-white' },
                  { label:'Total économisé',            val:'3 000 000 FCFA', color:'text-white' },
                  { label:'Notre part (40%)',           val:'1 200 000 FCFA', color:'text-blue-400' },
                  { label:'Vous conservez (60%)',       val:'1 800 000 FCFA', color:'text-green-400', big: true },
                ].map((row, i) => (
                  <div key={i} className={`flex justify-between ${i < 4 ? 'border-b border-white/10 pb-4' : 'pt-1'}`}>
                    <span className="text-slate-400">{row.label}</span>
                    <span className={`font-bold ${row.color} ${row.big ? 'text-base' : ''}`}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 engagements */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-14 text-center">
            Nos 6 engagements envers vous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num:'01', titre:'Confidentialité absolue',              desc:"Vos données de facturation ne sont jamais partagées, vendues ou louées à des tiers. Seul l'expert assigné à votre dossier y a accès." },
              { num:'02', titre:'Rapport chiffré en FCFA',              desc:"Le rapport que vous recevez après accord indique ligne par ligne les montants récupérables. Des chiffres vérifiables sur vos factures." },
              { num:'03', titre:'Analyse humaine par un expert',        desc:"Chaque dossier est traité personnellement par nos experts. Aucun algorithme ne remplace l'œil d'un professionnel sur votre facture." },
              { num:'04', titre:'Accord transparent avant livraison',   desc:"Vous signez l'accord avant de recevoir les chiffres détaillés. Vous connaissez exactement les termes avant de vous engager." },
              { num:'05', titre:'Suppression de vos données',           desc:"Vos factures sont définitivement supprimées de nos serveurs dans les 48 heures suivant la livraison de votre rapport." },
              { num:'06', titre:'Conformité réglementaire camerounaise', desc:"Toutes nos analyses respectent les directives de l'ARSEL et la loi camerounaise n°2010/012 sur la cybersécurité." },
            ].map(item => (
              <div key={item.num} className="bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <p className="text-blue-500 font-black text-xs tracking-widest mb-3">{item.num}</p>
                <h3 className="font-extrabold text-slate-900 text-base mb-3">{item.titre}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Prêt à transformer vos dépenses en bénéfices ?</h2>
        <p className="text-slate-400 mb-8">L'étude est gratuite et sans engagement.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-sm">
            Déposer ma facture →
          </Link>
          <Link href="/contact" className="bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-sm">
            Nous contacter →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

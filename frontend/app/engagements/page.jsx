'use client';
// app/engagements/page.jsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

export default function Engagements() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      {/* Hero */}
      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Missions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Nos engagements
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Ce que le Cabinet Global Enerdy s'engage à faire — et à ne pas faire —
            pour chaque client qui nous confie son dossier.
          </p>
        </div>
      </section>

      {/* Rémunération au résultat */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Rémunération au résultat
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 max-w-2xl leading-tight">
            Vous ne payez pas une mission à l'issue incertaine
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-12 max-w-2xl">
            Notre modèle est simple et transparent : nous réalisons un audit gratuit,
            et nos honoraires ne s'appliquent que sur les économies effectivement réalisées
            et validées par vous.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                titre: 'Audit gratuit',
                desc:  'Nous réalisons un audit gratuit et sans engagement de votre facturation ENEO MT. Vous ne payez rien pour cette première analyse.',
              },
              {
                titre: 'Si aucun levier trouvé',
                desc:  'Si nous ne décelons aucune anomalie dans votre facturation, vous êtes confortés dans vos choix. Aucune facture, aucun engagement.',
              },
              {
                titre: 'Si des économies sont identifiées',
                desc:  'Nous chiffrons les enjeux financiers précisément. Vous décidez librement. Nos honoraires ne s\'appliquent que sur les économies effectivement réalisées.',
              },
            ].map((item, i) => (
              <div key={i} className="border-t-4 border-blue-600 pt-6 bg-slate-50 rounded-b-2xl p-6">
                <h3 className="font-extrabold text-slate-900 text-base mb-3">{item.titre}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
              {
                num: '01',
                titre: 'Confidentialité absolue',
                desc:  'Vos données de facturation ne sont jamais partagées ni revendues à des tiers. Seul l\'ingénieur assigné à votre dossier y a accès.',
              },
              {
                num: '02',
                titre: 'Résultats chiffrés en FCFA',
                desc:  'Chaque recommandation est accompagnée d\'un chiffrage précis des économies mensuelles et annuelles réalisables. Pas d\'estimation vague.',
              },
              {
                num: '03',
                titre: 'Analyse manuelle par un ingénieur',
                desc:  'Aucun algorithme ne remplace l\'œil d\'un ingénieur sur votre facture. Chaque dossier est traité personnellement par notre équipe.',
              },
              {
                num: '04',
                titre: 'Réponse sous 48 heures',
                desc:  'Nous nous engageons à vous contacter sous 48 heures ouvrables après réception de votre dossier, quelle que soit la taille de votre facture.',
              },
              {
                num: '05',
                titre: 'Suppression des données après livraison',
                desc:  'Vos factures sont définitivement supprimées de nos serveurs dans les 48 heures suivant la livraison de votre rapport d\'audit.',
              },
              {
                num: '06',
                titre: 'Conformité à la réglementation camerounaise',
                desc:  'Toutes nos analyses sont réalisées conformément aux directives de l\'ARSEL et dans le respect de la loi n°2010/012 relative à la cybersécurité.',
              },
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
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ces engagements vous convainquent ?
        </h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Déposez votre facture ENEO MT — un ingénieur l'analyse gratuitement
          et vous contacte sous 48 heures.
        </p>
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

'use client';
// app/engagements/page.jsx
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
            Chez Global Enerdy, la confiance de nos clients est primordiale. Voici ce que nous
            nous engageons à faire — et à ne pas faire — pour chaque entreprise qui nous confie son dossier.
          </p>
        </div>
      </section>

      {/* Rémunération au résultat */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Rémunération au résultat</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 max-w-2xl leading-tight">
            Vous ne payez pas une mission à l'issue incertaine
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-12 max-w-2xl">
            Notre modèle est simple et transparent : nous réalisons un audit gratuit, et nos honoraires
            ne s'appliquent que sur les économies effectivement réalisées et validées par vous.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                titre: 'Audit gratuit',
                desc:  'Nous réalisons une analyse gratuite et sans engagement de votre facturation ENEO. Vous ne payez rien pour cette première étape.',
              },
              {
                titre: 'Si aucun levier trouvé',
                desc:  'Si nous ne décelons aucune anomalie dans votre facturation, vous êtes confortés dans vos choix. Aucune facture, aucun engagement.',
              },
              {
                titre: 'Si des économies sont identifiées',
                desc:  'Nous chiffrons précisément les enjeux financiers en FCFA. Vous décidez librement. Nos honoraires ne s\'appliquent que sur les économies concrètement réalisées.',
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
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 text-center">
            Nos engagements envers vous
          </h2>
          <p className="text-slate-500 text-center mb-14 max-w-xl mx-auto">
            Chez Global Enerdy, la transparence n'est pas un argument marketing — c'est notre mode de fonctionnement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                titre: 'Confidentialité absolue',
                desc:  'Vos données de facturation sont des informations stratégiques. Elles ne sont jamais partagées, vendues ou louées à des tiers. Seul l\'ingénieur assigné à votre dossier y a accès.',
              },
              {
                num: '02',
                titre: 'Résultats chiffrés en FCFA',
                desc:  'Chaque recommandation est accompagnée d\'un chiffrage précis des économies mensuelles et annuelles réalisables. Pas d\'estimation vague — des chiffres concrets, ligne par ligne.',
              },
              {
                num: '03',
                titre: 'Analyse humaine par un ingénieur',
                desc:  'Loin des solutions automatisées, chaque audit est réalisé personnellement par nos ingénieurs qualifiés, assurant une précision et une pertinence inégalées.',
              },
              {
                num: '04',
                titre: 'Réactivité sous 48 heures',
                desc:  'Nous nous engageons à vous contacter sous 48 heures ouvrables après réception de votre dossier, pour vous garantir une réponse rapide et efficace.',
              },
              {
                num: '05',
                titre: 'Suppression sécurisée de vos données',
                desc:  'Vos factures sont définitivement supprimées de nos serveurs dans les 48 heures suivant la livraison de votre rapport. Votre confidentialité est notre priorité.',
              },
              {
                num: '06',
                titre: 'Conformité réglementaire camerounaise',
                desc:  'Toutes nos analyses sont réalisées en conformité avec les directives de l\'ARSEL et la loi n°2010/012 relative à la cybersécurité et à la cybercriminalité au Cameroun.',
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

      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Prêt à transformer vos dépenses en bénéfices ?
        </h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Déposez votre facture ENEO dès aujourd'hui. Gratuit, confidentiel,
          réponse sous 48 heures.
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

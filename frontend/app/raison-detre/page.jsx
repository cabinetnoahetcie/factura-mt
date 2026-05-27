'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

export default function RaisonDetre() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Le Cabinet</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Raison d'être
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Pourquoi le Cabinet Global Energy existe et quelle injustice il s'est donné
            pour mission de corriger.
          </p>
        </div>
      </section>

      {/* Le constat */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Le constat</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
              La maîtrise des dépenses énergétiques, un levier sous-exploité
            </h2>
            <div className="space-y-5 text-slate-600 text-[15px] leading-relaxed">
              <p>
                La maîtrise des dépenses est un facteur-clé pour la compétitivité et la pérennité
                de toute entreprise. Elle permet de dégager de la trésorerie, d'améliorer la
                rentabilité et de libérer des ressources pour investir.
              </p>
              <p>
                Or, parmi toutes les charges d'exploitation, la facturation électrique Moyenne Tension
                est l'une des plus complexes et des plus mal contrôlées. Sa structure tarifaire —
                prime fixe, énergie active, pénalités contractuelles — échappe à la grande majorité
                des équipes financières, faute d'une expertise dédiée.
              </p>
              <p>
                Il en résulte une situation paradoxale : des entreprises qui paient scrupuleusement
                leurs factures chaque mois, sans jamais questionner leur exactitude, alors qu'une
                part significative de ces montants est injustifiée et récupérable.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img src="/images/factory.jpg" alt="Site industriel Cameroun"
              className="w-full h-[420px] object-cover"/>
          </div>
        </div>
      </section>

      {/* Notre réponse */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Notre réponse</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight max-w-2xl">
            Parce qu'il est plus simple d'améliorer sa rentabilité en optimisant ses dépenses
            qu'en développant de nouveaux marchés
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-12 max-w-2xl">
            Le Cabinet Global Energy a été fondé sur cette conviction. Nous avons imaginé
            des solutions permettant aux entreprises camerounaises de récupérer les sommes
            qu'elles paient injustement — sans effort de leur part, sans frais préalables,
            et avec la garantie que notre rémunération est conditionnée à leurs résultats.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num:   '01',
                titre: 'Démystifier la facturation MT',
                desc:  "Rendre accessible à tout Directeur Financier la lecture et la compréhension de sa facturation d'électricité Moyenne Tension, sans prérequis technique.",
              },
              {
                num:   '02',
                titre: 'Corriger les injustices tarifaires',
                desc:  "Identifier les anomalies, les quantifier en FCFA, et accompagner le client dans leur correction auprès d'ENEO Cameroun.",
              },
              {
                num:   '03',
                titre: 'Aligner nos intérêts sur les vôtres',
                desc:  "Ne percevoir d'honoraires que sur les économies effectivement réalisées. Si vous n'économisez pas, nous ne touchons rien.",
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

      {/* Citation */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
            "Chaque entreprise raccordée en Moyenne Tension au Cameroun mérite de savoir
            exactement ce qu'elle paie — et pourquoi."
          </blockquote>
          <p className="text-blue-400 font-semibold text-sm">
            Noah Kevyn Sorel — Co-fondateur, Cabinet Global Energy
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
          Découvrez ce que vos factures dissimulent
        </h2>
        <p className="text-slate-500 mb-6 max-w-lg mx-auto text-[15px]">
          L'étude est gratuite et sans engagement. Transmettez votre facture,
          un expert du Cabinet vous contacte sous 48 heures.
        </p>
        <Link href="/" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-all text-sm">
          Transmettre ma facture →
        </Link>
      </section>

      <Footer />
    </div>
  );
}

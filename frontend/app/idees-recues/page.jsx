'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

const IDEES = [
  {
    idee:    '"Mon comptable vérifie déjà mes factures ENEO."',
    realite: "Le rôle d'un comptable est de s'assurer que la facture est payée, non de vérifier si elle est correctement calculée. L'analyse tarifaire d'une facture d'électricité Moyenne Tension requiert une expertise sectorielle spécifique — connaissance de la grille tarifaire ENEO, des seuils réglementaires ARSEL, des mécanismes de pénalité contractuelle. Ce n'est pas une compétence comptable. C'est une compétence d'ingénierie énergétique.",
  },
  {
    idee:    '"ENEO ne fait pas d\'erreurs de facturation."',
    realite: "L'expérience terrain démontre le contraire. Des erreurs de relevé d'index, des pénalités appliquées à tort, des grilles tarifaires mal appliquées : ces situations sont documentées et récurrentes. ENEO est un opérateur qui gère des milliers de compteurs. Les erreurs existent, elles sont systématiques et souvent silencieuses. Notre rôle est précisément de les identifier et de les corriger.",
  },
  {
    idee:    '"Ce type de démarche prend trop de temps."',
    realite: "La transmission de votre facture prend moins de deux minutes sur notre plateforme FacturaMT. L'analyse est conduite par nos experts. Vous recevez nos conclusions sous 48 heures. L'ensemble des démarches de correction auprès d'ENEO est géré par notre équipe. Votre investissement en temps est minimal.",
  },
  {
    idee:    '"C\'est trop beau pour être vrai — aucun frais préalable."',
    realite: "Notre modèle est simple et transparent : nous nous rémunérons exclusivement sur les économies que vous réalisez effectivement. Si nous ne trouvons rien, vous ne payez rien. Si nous trouvons des anomalies, vous signez un accord avant de recevoir le rapport — vous savez exactement à quoi vous vous engagez. Ce modèle est pratiqué par les cabinets d'optimisation des achats en Europe depuis plusieurs décennies.",
  },
  {
    idee:    '"Mes factures ne sont pas si élevées pour que ça vaille le coup."',
    realite: "Un surcoût de 5 % sur une facture mensuelle de 2 000 000 FCFA représente 100 000 FCFA perdus chaque mois — soit 1 200 000 FCFA par an. Ces montants, multipliés sur plusieurs années et plusieurs postes d'anomalie, constituent des sommes considérables. Il n'y a aucun minimum de facturation requis pour bénéficier d'une analyse.",
  },
  {
    idee:    '"Je n\'ai pas confiance pour transmettre mes documents financiers."',
    realite: "Vos factures sont traitées comme des informations stratégiques confidentielles. Seul l'expert en charge de votre dossier y accède. Elles sont définitivement supprimées de nos systèmes dans les 48 heures suivant la remise du rapport. Nos engagements sont formalisés et respectent la loi camerounaise n°2010/012 relative à la cybersécurité.",
  },
];

export default function IdeesRecues() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Missions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Idées reçues
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Les objections les plus fréquentes que nous entendons — et les réponses
            que nous leur apportons.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {IDEES.map((item, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              {/* Idée reçue */}
              <div className="bg-slate-50 px-8 py-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">
                    ✕
                  </div>
                  <p className="text-base font-bold text-slate-700 italic leading-relaxed">
                    {item.idee}
                  </p>
                </div>
              </div>
              {/* Réalité */}
              <div className="bg-white px-8 py-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    {item.realite}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Une question sans réponse dans cette liste ?
        </h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Contactez directement le Cabinet Global Energy.
          Nous répondons à chaque interrogation sans détour.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-sm">
            Transmettre ma facture →
          </Link>
          <Link href="/contact" className="bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-sm">
            Contacter le Cabinet →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

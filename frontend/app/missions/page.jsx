'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link   from 'next/link';

export default function Missions() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar onAudit={() => {}} />

      <section className="bg-slate-900 pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Missions</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Déroulement d'une mission
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Le Cabinet Global Energy conduit ses missions selon un processus structuré en six étapes,
            garantissant transparence, rigueur et confidentialité à chaque stade de l'intervention.
          </p>
        </div>
      </section>

      {/* 6 étapes */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {[
            {
              num:   '01',
              titre: 'Transmission de la facture d\'électricité Moyenne Tension',
              desc:  "Le client transmet sa facture d'électricité Moyenne Tension via la plateforme sécurisée FacturaMT ou directement par voie électronique. La démarche ne requiert aucune installation préalable et s'effectue en moins de deux minutes.",
              note:  "L'étude est gratuite et sans engagement.",
              highlight: false,
            },
            {
              num:   '02',
              titre: 'Analyse technique par un expert du Cabinet',
              desc:  "Sous 48 heures ouvrables, un expert du Cabinet procède à l'examen détaillé de la facturation transmise. Il identifie les anomalies tarifaires, évalue les charges injustifiées et établit une première estimation des économies réalisables.",
              note:  "Chaque dossier est instruit par un expert qualifié. Aucun traitement automatisé ne se substitue à l'analyse humaine.",
              highlight: false,
            },
            {
              num:   '03',
              titre: 'Restitution orale des premières conclusions',
              desc:  "Le Cabinet contacte le client par téléphone pour lui présenter les conclusions préliminaires de l'audit : nature des anomalies constatées et ordre de grandeur des économies potentielles. Le rapport détaillé n'est pas communiqué à ce stade.",
              note:  "C'est à l'issue de cet entretien que le client décide, en toute autonomie, de la suite à donner.",
              highlight: true,
            },
            {
              num:   '04',
              titre: 'Formalisation d\'un accord de partenariat',
              desc:  "Si le client souhaite accéder au rapport complet et bénéficier de l'accompagnement du Cabinet, un accord de partenariat est établi. Ce document précise les modalités de rémunération du Cabinet — calculée sur les économies effectivement réalisées — ainsi que les droits et obligations de chaque partie.",
              note:  "La rémunération du Cabinet est strictement conditionnée aux économies concrètement constatées. En l'absence d'économies, aucun honoraire n'est dû.",
              highlight: true,
            },
            {
              num:   '05',
              titre: 'Remise du rapport d\'audit chiffré',
              desc:  "À la suite de la signature de l'accord, le Cabinet remet au client un rapport d'audit détaillé. Ce document présente, ligne par ligne et en FCFA, les anomalies identifiées, les montants récupérables et les démarches à engager auprès d'ENEO.",
              note:  "Des données précises et vérifiables — non des estimations.",
              highlight: false,
            },
            {
              num:   '06',
              titre: 'Accompagnement et suivi auprès d\'ENEO',
              desc:  "Le Cabinet assiste le client dans l'ensemble des démarches de régularisation auprès d'ENEO Cameroun : modification du contrat de fourniture, contestation de facturation, demande de remboursement. Il s'assure de la bonne application des corrections sur les factures d'électricité Moyenne Tension subséquentes.",
              note:  "Le Cabinet demeure aux côtés du client jusqu'à la concrétisation effective des économies identifiées.",
              highlight: false,
            },
          ].map((step, i) => (
            <div key={i} className="flex gap-8 pb-12 relative">
              {i < 5 && <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-blue-100"/>}
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-black text-sm z-10 relative ${step.highlight ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-900'}`}>
                  {i + 1}
                </div>
              </div>
              <div className="flex-1 pb-4">
                <p className="text-blue-600 font-black text-xs tracking-widest mb-2">{step.num}</p>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{step.titre}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-3">{step.desc}</p>
                <div className={`border rounded-xl px-5 py-3 text-sm ${step.highlight ? 'bg-blue-600 border-blue-600 text-white font-semibold' : 'bg-blue-50 border-blue-100 text-blue-800 italic'}`}>
                  {step.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modèle économique */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Modèle de rémunération</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
            Un modèle au résultat, aligné sur vos intérêts
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-10 max-w-2xl">
            La rémunération du Cabinet est indexée sur les économies effectivement réalisées
            par le client. En l'absence d'économies constatées, aucun honoraire n'est facturé.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { etape:'Étude initiale',   label:'Gratuite',                   desc:"L'analyse préliminaire de la facturation et l'identification des anomalies sont réalisées sans contrepartie financière.", color:'border-green-500 bg-green-50' },
              { etape:'Accord',           label:'Préalable à la restitution', desc:"L'accord de partenariat est signé avant la communication du rapport détaillé. Le client dispose d'une visibilité complète sur les termes avant tout engagement.", color:'border-blue-600 bg-blue-50' },
              { etape:'Honoraires',       label:'Indexés sur les économies',  desc:"La rémunération du Cabinet représente un pourcentage des économies effectivement constatées sur les factures d'électricité Moyenne Tension, sur une durée convenue.", color:'border-slate-900 bg-slate-100' },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-6 border-t-4 ${item.color}`}>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{item.etape}</p>
                <p className="text-lg font-extrabold text-slate-900 mb-3">{item.label}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Initier une mission d'audit</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto text-[15px]">
          Transmettez votre facture d'électricité Moyenne Tension. Un expert du Cabinet
          vous restituera ses premières conclusions sous 48 heures.
          L'étude est gratuite et sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-sm">
            Transmettre ma facture →
          </Link>
          <Link href="/engagements" className="bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-sm">
            Nos engagements →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

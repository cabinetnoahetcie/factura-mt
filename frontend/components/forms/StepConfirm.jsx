'use client';
// components/forms/StepConfirm.jsx
export default function StepConfirm({ dossier, client, onNewSubmission }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm animate-fade-up text-center max-w-xl mx-auto">

      {/* Icône succès */}
      <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
        ✅
      </div>

      <div className="text-xs font-bold text-green-600 uppercase tracking-widest mb-3">
        Dossier bien reçu
      </div>

      <h2 className="font-serif text-3xl text-gray-900 mb-3">
        Merci, {client?.contact} !
      </h2>

      <p className="text-gray-500 text-base mb-8 leading-relaxed">
        Votre dossier a été transmis à notre équipe d'auditeurs.
        Nous analyserons votre facture et vous contacterons sous{' '}
        <strong className="text-gray-700">24 à 48 heures</strong> au{' '}
        <strong className="text-gray-700">{client?.telephone}</strong>.
      </p>

      {/* Référence dossier */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8 text-left">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Référence</div>
            <div className="font-mono text-xs text-gray-700 break-all">{dossier?.id}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Factures reçues</div>
            <div className="font-semibold text-gray-900">{dossier?.nbFactures} fichier(s)</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Entreprise</div>
            <div className="font-semibold text-gray-900">{client?.nom}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Statut</div>
            <div className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"/>
              <span className="text-sm font-semibold text-orange-600">En attente d'analyse</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prochaines étapes */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8 text-left">
        <p className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-3">Prochaines étapes</p>
        <div className="space-y-3">
          {[
            ['1', 'Nos auditeurs téléchargent et lisent votre facture', 'text-blue-700'],
            ['2', 'Analyse des postes de coût et identification des anomalies', 'text-blue-700'],
            ['3', 'Chiffrage des économies potentielles', 'text-blue-700'],
            ['4', 'Contact pour vous présenter les résultats', 'text-blue-700'],
          ].map(([n, txt, c]) => (
            <div key={n} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-700 flex-shrink-0 mt-0.5">
                {n}
              </div>
              <p className={`text-sm ${c}`}>{txt}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onNewSubmission}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl text-sm transition">
          Soumettre un autre dossier
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        🔒 Vos factures sont conservées de manière confidentielle et sécurisée.
      </p>
    </div>
  );
}

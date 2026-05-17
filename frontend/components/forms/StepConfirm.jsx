// components/forms/StepConfirm.jsx
const WA_URL = `https://wa.me/237697252071?text=${encodeURIComponent("Bonjour, je viens de transmettre ma facture ENEO MT au Cabinet Global Enerdy et je souhaite confirmer la bonne réception.")}`;

export default function StepConfirm({ dossier, client, onNewSubmission }) {
  return (
    <div style={{
      background: 'white', border: '1px solid #e2e8f0',
      borderRadius: 14,
      padding: 'clamp(28px, 5vw, 48px) clamp(22px, 4vw, 40px)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      textAlign: 'center', maxWidth: 540, margin: '0 auto',
    }}>

      {/* Icône validation */}
      <div style={{
        width: 72, height: 72, borderRadius: '50%',
        background: '#f0fdf4', border: '2px solid #bbf7d0',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 22px',
      }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
          stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>

      <div style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
        textTransform: 'uppercase', color: '#10B981', marginBottom: 10,
      }}>
        Dossier transmis avec succès
      </div>

      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 'clamp(22px, 3.5vw, 28px)',
        color: '#0f172a', marginBottom: 14, lineHeight: 1.2,
      }}>
        Votre dossier est entre nos mains.
      </h2>

      <p style={{
        fontSize: 14, color: '#64748b',
        marginBottom: 26, lineHeight: 1.8,
        maxWidth: 420, margin: '0 auto 26px',
      }}>
        Un ingénieur du cabinet va ouvrir votre dossier dans les prochaines heures.
        Vous recevrez un appel au{' '}
        <strong style={{ color: '#0f172a' }}>{client?.telephone}</strong>{' '}
        sous <strong style={{ color: '#0f172a' }}>48 heures ouvrables</strong>.
      </p>

      {/* Référence */}
      <div style={{
        background: '#f8fafc', border: '1px solid #e2e8f0',
        borderRadius: 11, padding: '16px 18px',
        marginBottom: 22, textAlign: 'left',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
        }}>
          {[
            ['Référence dossier', `${dossier?.id?.slice(0, 8).toUpperCase()}…`],
            ['Factures reçues',   `${dossier?.nbFactures} fichier(s)`],
            ['Entreprise',        client?.nom],
            ['Statut',            'En attente d\'analyse'],
          ].map(([l, v]) => (
            <div key={l}>
              <div style={{
                fontSize: 9, color: '#94a3b8',
                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3,
              }}>{l}</div>
              <div style={{
                fontSize: 13, fontWeight: 600,
                color: '#1e293b', wordBreak: 'break-all',
              }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Démarche */}
      <div style={{
        background: '#f0fdf4', border: '1px solid #d1fae5',
        borderRadius: 11, padding: '16px 18px',
        marginBottom: 24, textAlign: 'left',
      }}>
        <div style={{
          fontSize: 10, fontWeight: 700, color: '#065f46',
          textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12,
        }}>
          Notre démarche
        </div>
        {[
          ['Analyse digitale',  'Diagnostic de votre facture par un ingénieur du cabinet.'],
          ['Contre-expertise',  'Validation des anomalies et chiffrage précis des économies en FCFA.'],
          ['Accompagnement',    "Assistance dans vos démarches de modification de contrat auprès d'ENEO."],
        ].map(([titre, desc], i) => (
          <div key={i} style={{
            display: 'flex', gap: 10,
            marginBottom: i < 2 ? 10 : 0,
          }}>
            <div style={{
              width: 20, height: 20, borderRadius: '50%',
              background: '#d1fae5', color: '#065f46',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1,
            }}>{i + 1}</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#065f46' }}>{titre}</div>
              <div style={{ fontSize: 11, color: '#047857', lineHeight: 1.5 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Si urgence */}
      <div style={{
        background: '#0f172a', borderRadius: 11,
        padding: '14px 18px', marginBottom: 16,
        fontSize: 13, color: 'rgba(255,255,255,0.75)',
        lineHeight: 1.65,
      }}>
        Si vous avez une urgence ou souhaitez accélérer le traitement,
        appelez-nous directement au{' '}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#10B981', textDecoration: 'none', fontWeight: 700 }}
        >
          +237 697 252 071
        </a>
      </div>

      <button
        onClick={onNewSubmission}
        style={{
          width: '100%', background: 'white', color: '#64748b',
          border: '1.5px solid #e2e8f0', borderRadius: 9,
          padding: '12px 20px', fontSize: 13, fontWeight: 500,
          cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Soumettre un autre dossier
      </button>

      <p style={{
        fontSize: 11, color: '#94a3b8', marginTop: 16, lineHeight: 1.6,
      }}>
        Cabinet Global Enerdy SARL · Douala, Cameroun<br/>
        globalenergysarl@gmail.com · +237 697 252 071
      </p>
    </div>
  );
}

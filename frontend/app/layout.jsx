import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata = {
  title: 'Cabinet Global Energy — Audit de facturation Moyenne Tension · Douala',
  description: 'Le Cabinet Global Energy conduit des audits experts de vos factures d\'électricité Moyenne Tension. Anomalies tarifaires identifiées et économies chiffrées en FCFA sous 48 heures. Douala, Cameroun.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#f8fafc',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '500',
            },
            success: { iconTheme: { primary: '#10b981', secondary: '#fff' } },
            error:   { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
          }}
        />
        {children}
      </body>
    </html>
  );
}

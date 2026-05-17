// app/layout.jsx
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300','400','500','600'],
  variable: '--font-sans',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style:  ['normal','italic'],
  variable: '--font-serif',
});

export const metadata = {
  title:       'FacturaMT — Audit gratuit de votre facture ENEO',
  description: 'Analysez votre facture Moyenne Tension ENEO Cameroun. Identifiez vos économies potentielles gratuitement en 2 minutes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="bg-cream font-sans text-gray-800 antialiased">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: { fontFamily: 'var(--font-sans)', fontSize: '14px' },
          }}
        />
      </body>
    </html>
  );
}

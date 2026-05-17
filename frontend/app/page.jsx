// app/mentions-legales/page.jsx
import Link from 'next/link';

export const metadata = {
  title: 'Mentions légales & Confidentialité — Cabinet Global Enerdy',
};

export default function MentionsLegales() {
  return (
    <div style={{ background:'#f8fafc', minHeight:'100vh' }}>
      <div style={{ maxWidth:760, margin:'0 auto', padding:'40px 20px 80px' }}>

        <Link href="/" style={{ fontSize:13, color:'#64748b', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, marginBottom:32 }}>
          ← Retour au site
        </Link>

        <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:36, color:'#0f172a', marginBottom:8 }}>
          Mentions légales &amp; Confidentialité
        </h1>
        <p style={{ fontSize:13, color:'#94a3b8', marginBottom:40 }}>
          Dernière mise à jour : Janvier 2025
        </p>

        {[
          {
            titre: '1. Éditeur de la plateforme',
            contenu: `Ce site est édité par le Cabinet Global Enerdy SARL, société spécialisée dans la maîtrise de l'énergie et l'optimisation des coûts énergétiques pour les entreprises au Cameroun.

Siège social : Douala, Cameroun
Téléphone : +237 697 252 071
Email : globalenergysarl@gmail.com
Forme juridique : SARL
RCCM & NIU : En cours d'immatriculation`,
          },
          {
            titre: '2. Hébergement',
            contenu: `La plateforme FacturaMT est propulsée par Vercel Inc., société américaine proposant une infrastructure cloud sécurisée.
Vercel Inc. · 440 N Barranca Ave #4133 · Covina, CA 91723 · États-Unis
Les données sont hébergées sur des serveurs certifiés avec chiffrement en transit (HTTPS/TLS).`,
          },
          {
            titre: '3. Protection des données personnelles',
            contenu: `Conformément à la loi camerounaise n°2010/012 relative à la cybersécurité et à la cybercriminalité, et aux principes généraux de protection des données personnelles, le Cabinet Global Enerdy s'engage à :

• Collecter uniquement les données strictement nécessaires à l'établissement du rapport d'audit énergétique.
• Ne jamais céder, vendre ou louer vos données à des tiers.
• Supprimer définitivement vos factures et documents 48 heures après la livraison de votre rapport d'opportunité.
• Garantir la confidentialité de vos informations commerciales (consommation, puissance souscrite, données de production).

Vous disposez d'un droit d'accès, de rectification et de suppression de vos données sur simple demande à : globalenergysarl@gmail.com`,
          },
          {
            titre: '4. Données collectées',
            contenu: `Dans le cadre de notre service d'audit, nous collectons :
• Les fichiers de factures ENEO Moyenne Tension que vous déposez volontairement.
• Vos coordonnées professionnelles (nom d'entreprise, téléphone, email).
• Ces données sont utilisées exclusivement pour produire votre rapport d'analyse énergétique.`,
          },
          {
            titre: '5. Sécurité des transmissions',
            contenu: `Toutes les communications entre votre navigateur et notre plateforme sont chiffrées via le protocole HTTPS (TLS 1.3). Vos factures sont transmises de manière sécurisée et stockées dans un espace cloud à accès restreint, accessible uniquement par les ingénieurs du Cabinet Global Enerdy affectés à votre dossier.`,
          },
          {
            titre: '6. Confidentialité professionnelle',
            contenu: `Le Cabinet Global Enerdy est soumis au secret professionnel. Les informations contenues dans vos factures ENEO (puissance souscrite, heures d'utilisation, consommation, données de production implicites) sont considérées comme des informations stratégiques confidentielles et traitées comme telles par l'ensemble de notre équipe.`,
          },
          {
            titre: '7. Contact & Réclamations',
            contenu: `Pour toute question relative à vos données personnelles ou pour exercer vos droits :
Email : globalenergysarl@gmail.com
WhatsApp : +237 697 252 071
Cabinet Global Enerdy SARL · Douala, Cameroun`,
          },
        ].map(({ titre, contenu }) => (
          <div key={titre} style={{ marginBottom:36 }}>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:22, color:'#0f172a', marginBottom:12 }}>
              {titre}
            </h2>
            <div style={{
              fontSize:14, color:'#475569', lineHeight:1.85,
              whiteSpace:'pre-line',
              background:'white', border:'1px solid #e2e8f0',
              borderRadius:10, padding:'18px 20px',
            }}>
              {contenu}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

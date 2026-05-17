// src/services/email.service.js
const { Resend } = require('resend');
const logger = require('../utils/logger');

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM   = process.env.EMAIL_FROM  || 'FacturaMT <contact@factura-mt.cm>';
const ADMIN  = process.env.EMAIL_ADMIN || 'admin@factura-mt.cm';
const BASE   = process.env.FRONTEND_URL || 'http://localhost:3000';

// Confirmation au client après soumission
exports.sendConfirmationClient = async (client, dossierId) => {
  try {
    await resend.emails.send({
      from: FROM, to: client.email,
      subject: 'Votre dossier a bien été reçu — FacturaMT',
      html: `
        <div style="font-family:sans-serif;max-width:540px;margin:0 auto;">
          <div style="background:#e8622a;padding:24px;border-radius:12px 12px 0 0;">
            <h1 style="color:white;margin:0;font-size:20px;">⚡ FacturaMT</h1>
          </div>
          <div style="background:white;padding:28px;border:1px solid #e2e0d8;border-radius:0 0 12px 12px;">
            <p>Bonjour <strong>${client.contact}</strong>,</p>
            <p style="margin-top:12px;">Votre dossier a bien été reçu. Nos auditeurs analyseront votre facture et vous contacteront sous <strong>24 à 48h</strong>.</p>
            <div style="background:#f7f6f2;border-radius:8px;padding:16px;margin:20px 0;">
              <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#888;margin-bottom:6px;">Référence dossier</div>
              <div style="font-family:monospace;font-size:13px;">${dossierId}</div>
            </div>
            <p style="font-size:13px;color:#888;">Nous vous contacterons au <strong>${client.telephone}</strong>.</p>
          </div>
        </div>`,
    });
    logger.info(`Confirmation envoyée à ${client.email}`);
  } catch (e) { logger.warn('Email client non envoyé:', e.message); }
};

// Notification admin nouveau dossier
exports.notifyAdminNouveauDossier = async (client, dossierId, nbFactures) => {
  try {
    await resend.emails.send({
      from: FROM, to: ADMIN,
      subject: `[FacturaMT] 📂 Nouveau dossier — ${client.nom}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;">
          <h2 style="color:#e8622a;">Nouveau dossier reçu</h2>
          <table style="font-size:14px;border-collapse:collapse;width:100%;margin-bottom:20px;">
            <tr><td style="padding:6px 0;color:#888;width:130px;">Entreprise</td><td><strong>${client.nom}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#888;">Secteur</td><td>${client.secteur}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Ville</td><td>${client.ville}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Contact</td><td>${client.contact}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Téléphone</td><td><strong>${client.telephone}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#888;">Email</td><td>${client.email || '—'}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Factures</td><td>${nbFactures} fichier(s)</td></tr>
          </table>
          <a href="${BASE}/admin/dossiers/${dossierId}"
             style="display:inline-block;background:#e8622a;color:white;padding:12px 22px;border-radius:8px;text-decoration:none;font-weight:600;">
            Traiter le dossier →
          </a>
        </div>`,
    });
    logger.info('Email admin envoyé');
  } catch (e) { logger.warn('Email admin non envoyé:', e.message); }
};

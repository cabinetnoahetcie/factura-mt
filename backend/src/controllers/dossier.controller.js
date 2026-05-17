// src/controllers/dossier.controller.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const storageService = require('../services/storage.service');
const emailService   = require('../services/email.service');
const logger = require('../utils/logger');

// POST /api/dossiers
// Reçoit les fichiers et crée le dossier en base
exports.create = async (req, res) => {
  const { clientId, mois } = req.body;
  const files = req.files; // tableau de fichiers

  // Validations
  if (!files || files.length === 0) {
    return res.status(400).json({ error: 'Au moins une facture est requise' });
  }
  if (!clientId) {
    return res.status(400).json({ error: 'clientId requis' });
  }

  // Vérifier que le client existe
  const client = await prisma.client.findUnique({ where: { id: clientId } });
  if (!client) {
    return res.status(404).json({ error: 'Client non trouvé' });
  }

  logger.info(`Création dossier pour client ${client.nom} (${files.length} facture(s))`);

  // Upload de chaque fichier vers Supabase Storage
  const facturesUploaded = [];
  for (const file of files) {
    try {
      const { url, path } = await storageService.uploadFacture(file, clientId);
      facturesUploaded.push({
        imageUrl:      url,
        imagePath:     path,
        nomFichier:    file.originalname,
        tailleFichier: file.size,
        mois:          mois || null,
      });
      logger.info(`Fichier uploadé : ${file.originalname}`);
    } catch (err) {
      logger.error(`Échec upload ${file.originalname}:`, err.message);
      // Nettoyage des fichiers déjà uploadés en cas d'erreur
      for (const f of facturesUploaded) {
        await storageService.deleteFacture(f.imagePath).catch(() => {});
      }
      return res.status(500).json({ error: `Échec upload : ${file.originalname}` });
    }
  }

  // Créer le dossier + ses factures en transaction atomique
  const dossier = await prisma.$transaction(async (tx) => {
    const d = await tx.dossier.create({
      data: {
        clientId,
        statut:   'RECU',
        priorite: 'NORMALE',
        factures: {
          create: facturesUploaded,
        },
      },
      include: {
        factures: true,
        client:   true,
      },
    });
    return d;
  });

  logger.info(`Dossier ${dossier.id} créé — ${files.length} facture(s)`);

  // Notifications email (non bloquantes)
  await Promise.allSettled([
    // Email de confirmation au client si email fourni
    client.email
      ? emailService.sendConfirmationClient(client, dossier.id)
      : Promise.resolve(),
    // Alerte admin
    emailService.notifyAdminNouveauDossier(client, dossier.id, files.length),
  ]);

  res.status(201).json({
    id:             dossier.id,
    statut:         dossier.statut,
    nbFactures:     dossier.factures.length,
    message:        'Dossier bien reçu. Nous vous contactons sous 24 à 48h.',
  });
};

// GET /api/dossiers/:id
exports.getById = async (req, res) => {
  const dossier = await prisma.dossier.findUnique({
    where:   { id: req.params.id },
    include: {
      client:   { select: { id:true, nom:true, telephone:true, email:true, ville:true } },
      factures: { select: { id:true, imageUrl:true, nomFichier:true, mois:true, createdAt:true } },
    },
  });
  if (!dossier) return res.status(404).json({ error: 'Dossier non trouvé' });
  res.json(dossier);
};

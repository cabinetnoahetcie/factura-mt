// src/controllers/client.controller.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST /api/clients — Créer ou retrouver un client par téléphone
exports.createOrFind = async (req, res) => {
  const { nom, secteur, ville, telephone, contact, email } = req.body;

  // Chercher par téléphone (identifiant naturel au Cameroun)
  let client = await prisma.client.findFirst({ where: { telephone } });

  if (client) {
    // Mettre à jour les infos si changées
    client = await prisma.client.update({
      where: { id: client.id },
      data: { nom, secteur, ville, contact, email: email || client.email },
    });
  } else {
    client = await prisma.client.create({
      data: { nom, secteur, ville, telephone, contact, email },
    });
  }

  res.status(client ? 200 : 201).json(client);
};

// GET /api/clients/:id
exports.getById = async (req, res) => {
  const client = await prisma.client.findUnique({ where: { id: req.params.id } });
  if (!client) return res.status(404).json({ error: 'Client non trouvé' });
  res.json(client);
};

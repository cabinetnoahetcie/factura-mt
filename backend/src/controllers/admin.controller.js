// src/controllers/admin.controller.js
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /api/admin/stats
exports.getStats = async (req, res) => {
  const [totalClients, totalDossiers, recu, enCours, traite, aujourdhui] = await Promise.all([
    prisma.client.count(),
    prisma.dossier.count(),
    prisma.dossier.count({ where: { statut: 'RECU'     } }),
    prisma.dossier.count({ where: { statut: 'EN_COURS' } }),
    prisma.dossier.count({ where: { statut: 'TRAITE'   } }),
    prisma.dossier.count({
      where: { createdAt: { gte: new Date(new Date().setHours(0,0,0,0)) } },
    }),
  ]);

  const ecoResult = await prisma.dossier.aggregate({
    _sum: { economiesIdentifiees: true },
    where: { statut: 'TRAITE' },
  });

  res.json({
    totalClients, totalDossiers, aujourdhui,
    dossiers: { recu, enCours, traite },
    economiesTotal: ecoResult._sum.economiesIdentifiees || 0,
  });
};

// GET /api/admin/dossiers
exports.getDossiers = async (req, res) => {
  const { statut, priorite, page = 1, limit = 20, search } = req.query;
  const skip = (Number(page) - 1) * Number(limit);

  const where = {};
  if (statut)   where.statut   = statut;
  if (priorite) where.priorite = priorite;
  if (search) {
    where.client = {
      OR: [
        { nom:       { contains: search, mode: 'insensitive' } },
        { telephone: { contains: search } },
        { email:     { contains: search, mode: 'insensitive' } },
      ],
    };
  }

  const [dossiers, total] = await Promise.all([
    prisma.dossier.findMany({
      where,
      include: {
        client:   { select: { id:true, nom:true, secteur:true, ville:true, telephone:true, email:true } },
        factures: { select: { id:true, imageUrl:true, nomFichier:true, mois:true } },
        expert:   { select: { id:true, nom:true } },
      },
      orderBy: [{ priorite:'asc' }, { createdAt:'desc' }],
      skip,
      take: Number(limit),
    }),
    prisma.dossier.count({ where }),
  ]);

  res.json({ dossiers, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
};

// GET /api/admin/dossiers/:id
exports.getDossierById = async (req, res) => {
  const dossier = await prisma.dossier.findUnique({
    where:   { id: req.params.id },
    include: { client:true, factures:true, expert:{ select:{ id:true, nom:true, email:true } } },
  });
  if (!dossier) return res.status(404).json({ error: 'Dossier non trouvé' });
  res.json(dossier);
};

// PATCH /api/admin/dossiers/:id
exports.updateDossier = async (req, res) => {
  const { statut, priorite, assigneA, notes, rappelAt,
          noteAnalyste, economiesIdentifiees, recommandations, rapportUrl } = req.body;

  const data = {};
  if (statut    !== undefined) data.statut    = statut;
  if (priorite  !== undefined) data.priorite  = priorite;
  if (assigneA  !== undefined) data.assigneA  = assigneA || null;
  if (notes     !== undefined) data.notes     = notes;
  if (rappelAt  !== undefined) data.rappelAt  = rappelAt ? new Date(rappelAt) : null;
  if (noteAnalyste          !== undefined) data.noteAnalyste          = noteAnalyste;
  if (economiesIdentifiees  !== undefined) data.economiesIdentifiees  = economiesIdentifiees ? Number(economiesIdentifiees) : null;
  if (recommandations       !== undefined) data.recommandations       = recommandations;
  if (rapportUrl            !== undefined) data.rapportUrl            = rapportUrl;
  if (statut === 'TRAITE') data.traiteAt = new Date();

  const dossier = await prisma.dossier.update({
    where:   { id: req.params.id },
    data,
    include: { client:true, expert:{ select:{ id:true, nom:true } } },
  });
  res.json(dossier);
};

// GET /api/admin/clients
exports.getClients = async (req, res) => {
  const { search, page = 1, limit = 20 } = req.query;
  const skip = (Number(page) - 1) * Number(limit);
  const where = search ? {
    OR: [
      { nom:       { contains: search, mode: 'insensitive' } },
      { telephone: { contains: search } },
      { email:     { contains: search, mode: 'insensitive' } },
    ],
  } : {};
  const [clients, total] = await Promise.all([
    prisma.client.findMany({ where, include:{ _count:{ select:{ dossiers:true } } }, orderBy:{ createdAt:'desc' }, skip, take:Number(limit) }),
    prisma.client.count({ where }),
  ]);
  res.json({ clients, total, page:Number(page), totalPages:Math.ceil(total/Number(limit)) });
};

// GET /api/admin/clients/:id
exports.getClientById = async (req, res) => {
  const client = await prisma.client.findUnique({
    where:   { id: req.params.id },
    include: { dossiers:{ include:{ factures:true }, orderBy:{ createdAt:'desc' }, take:10 } },
  });
  if (!client) return res.status(404).json({ error: 'Client non trouvé' });
  res.json(client);
};

// GET /api/admin/users
exports.getUsers = async (req, res) => {
  const users = await prisma.adminUser.findMany({
    select: { id:true, nom:true, email:true, role:true, actif:true, createdAt:true },
    orderBy: { createdAt:'desc' },
  });
  res.json(users);
};

// POST /api/admin/users
exports.createUser = async (req, res) => {
  const { nom, email, password, role } = req.body;
  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) return res.status(409).json({ error: 'Email déjà utilisé' });
  const hash = await bcrypt.hash(password, 12);
  const user  = await prisma.adminUser.create({
    data:   { nom, email, password: hash, role },
    select: { id:true, nom:true, email:true, role:true, createdAt:true },
  });
  res.status(201).json(user);
};

// PATCH /api/admin/users/:id
exports.updateUser = async (req, res) => {
  const { nom, role, actif } = req.body;
  const data = {};
  if (nom   !== undefined) data.nom   = nom;
  if (role  !== undefined) data.role  = role;
  if (actif !== undefined) data.actif = actif;
  const user = await prisma.adminUser.update({
    where: { id:req.params.id }, data,
    select:{ id:true, nom:true, email:true, role:true, actif:true },
  });
  res.json(user);
};

// DELETE /api/admin/users/:id
exports.deleteUser = async (req, res) => {
  if (req.params.id === req.user.id)
    return res.status(400).json({ error: 'Impossible de vous supprimer vous-même' });
  await prisma.adminUser.delete({ where: { id:req.params.id } });
  res.json({ message: 'Utilisateur supprimé' });
};

// GET /api/admin/export/dossiers
exports.exportDossiers = async (req, res) => {
  const dossiers = await prisma.dossier.findMany({
    include: { client:true, expert:{ select:{ nom:true } }, factures:{ select:{ mois:true } } },
    orderBy: { createdAt:'desc' },
  });
  const header = 'ID,Client,Secteur,Ville,Téléphone,Email,Nb Factures,Statut,Priorité,Expert,Économies (F/mois),Date\n';
  const rows = dossiers.map(d => [
    d.id, `"${d.client.nom}"`, d.client.secteur, d.client.ville,
    d.client.telephone, d.client.email||'', d.factures.length,
    d.statut, d.priorite, d.expert?.nom||'',
    d.economiesIdentifiees||'',
    new Date(d.createdAt).toLocaleDateString('fr-FR'),
  ].join(',')).join('\n');
  res.setHeader('Content-Type','text/csv; charset=utf-8');
  res.setHeader('Content-Disposition','attachment; filename=dossiers.csv');
  res.send('\uFEFF' + header + rows);
};

// src/middleware/auth.middleware.js
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.authenticate = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token manquant' });
  }

  const token = header.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.adminUser.findUnique({
      where:  { id: payload.id },
      select: { id:true, nom:true, email:true, role:true, actif:true },
    });
    if (!user || !user.actif) {
      return res.status(401).json({ error: 'Compte inactif ou introuvable' });
    }
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Token invalide ou expiré' });
  }
};

exports.requireRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user?.role)) {
    return res.status(403).json({ error: 'Accès non autorisé' });
  }
  next();
};

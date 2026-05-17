// src/controllers/auth.controller.js
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const signToken = (user) => jwt.sign(
  { id: user.id, email: user.email, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
);

// POST /api/auth/login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.adminUser.findUnique({ where: { email } });
  if (!user || !user.actif) {
    return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
  }

  const token = signToken(user);

  res.json({
    token,
    user: {
      id:    user.id,
      nom:   user.nom,
      email: user.email,
      role:  user.role,
    },
  });
};

// GET /api/auth/me
exports.me = async (req, res) => {
  const user = await prisma.adminUser.findUnique({
    where: { id: req.user.id },
    select: { id:true, nom:true, email:true, role:true, createdAt:true },
  });
  res.json(user);
};

// POST /api/auth/logout
exports.logout = (req, res) => {
  // JWT stateless — côté client on supprime le token
  res.json({ message: 'Déconnexion réussie' });
};

// POST /api/auth/change-password
exports.changePassword = async (req, res) => {
  const { ancienPassword, nouveauPassword } = req.body;

  const user = await prisma.adminUser.findUnique({ where: { id: req.user.id } });
  const valid = await bcrypt.compare(ancienPassword, user.password);
  if (!valid) return res.status(400).json({ error: 'Ancien mot de passe incorrect' });

  const hash = await bcrypt.hash(nouveauPassword, 12);
  await prisma.adminUser.update({ where: { id: user.id }, data: { password: hash } });

  res.json({ message: 'Mot de passe mis à jour' });
};

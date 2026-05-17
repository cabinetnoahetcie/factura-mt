// src/routes/auth.routes.js
const router = require('express').Router();
const { body } = require('express-validator');
const authController = require('../controllers/auth.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { validate } = require('../middleware/validate.middleware');

// POST /api/auth/login
router.post('/login',
  [
    body('email').isEmail().withMessage('Email invalide'),
    body('password').notEmpty().withMessage('Mot de passe requis'),
  ],
  validate,
  authController.login
);

// GET /api/auth/me
router.get('/me', authenticate, authController.me);

// POST /api/auth/logout
router.post('/logout', authenticate, authController.logout);

// POST /api/auth/change-password
router.post('/change-password',
  authenticate,
  [
    body('ancienPassword').notEmpty(),
    body('nouveauPassword').isLength({ min: 8 }).withMessage('Minimum 8 caractères'),
  ],
  validate,
  authController.changePassword
);

module.exports = router;

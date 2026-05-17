// src/routes/client.routes.js
const router = require('express').Router();
const { body } = require('express-validator');
const clientController = require('../controllers/client.controller');
const { validate } = require('../middleware/validate.middleware');

// POST /api/clients — Créer ou retrouver un client
router.post('/',
  [
    body('nom').notEmpty().withMessage('Nom requis'),
    body('secteur').notEmpty().withMessage('Secteur requis'),
    body('ville').notEmpty().withMessage('Ville requise'),
    body('telephone').notEmpty().withMessage('Téléphone requis'),
    body('contact').notEmpty().withMessage('Contact requis'),
    body('email').optional().isEmail(),
  ],
  validate,
  clientController.createOrFind
);

// GET /api/clients/:id
router.get('/:id', clientController.getById);

module.exports = router;

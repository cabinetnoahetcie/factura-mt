// src/routes/admin.routes.js
const router = require('express').Router();
const { body } = require('express-validator');
const adminController = require('../controllers/admin.controller');
const { authenticate, requireRole } = require('../middleware/auth.middleware');
const { validate } = require('../middleware/validate.middleware');

router.use(authenticate);

// Dashboard
router.get('/stats', adminController.getStats);

// Dossiers
router.get('/dossiers',     adminController.getDossiers);
router.get('/dossiers/:id', adminController.getDossierById);
router.patch('/dossiers/:id',
  [
    body('statut').optional().isIn(['RECU','EN_COURS','TRAITE','ANNULE']),
    body('priorite').optional().isIn(['URGENTE','HAUTE','NORMALE','BASSE']),
    body('assigneA').optional(),
    body('economiesIdentifiees').optional().isNumeric(),
  ],
  validate,
  adminController.updateDossier
);

// Clients
router.get('/clients',     adminController.getClients);
router.get('/clients/:id', adminController.getClientById);

// Utilisateurs
router.get   ('/users',     requireRole(['SUPER_ADMIN','ADMIN']), adminController.getUsers);
router.post  ('/users',     requireRole(['SUPER_ADMIN','ADMIN']),
  [ body('nom').notEmpty(), body('email').isEmail(), body('password').isLength({min:8}), body('role').isIn(['ADMIN','EXPERT']) ],
  validate, adminController.createUser
);
router.patch ('/users/:id', requireRole(['SUPER_ADMIN','ADMIN']), adminController.updateUser);
router.delete('/users/:id', requireRole(['SUPER_ADMIN']),         adminController.deleteUser);

// Export CSV
router.get('/export/dossiers', adminController.exportDossiers);

module.exports = router;

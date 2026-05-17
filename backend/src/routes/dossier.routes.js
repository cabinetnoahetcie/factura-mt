// src/routes/dossier.routes.js
const router = require('express').Router();
const multer = require('multer');
const { body } = require('express-validator');
const dossierController = require('../controllers/dossier.controller');
const { validate } = require('../middleware/validate.middleware');

// Multer — mémoire, validation type + taille
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 Mo par fichier
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Format non supporté. Utilisez JPG, PNG ou WEBP.'));
    }
  },
});

// POST /api/dossiers — Soumettre un dossier (public)
// Accepte jusqu'à 6 factures en une fois
router.post('/',
  upload.array('factures', 6),
  [
    body('clientId').notEmpty().withMessage('clientId requis'),
    body('mois').optional().isString(),
  ],
  validate,
  dossierController.create
);

// GET /api/dossiers/:id — Récupérer un dossier (public, pour confirmation)
router.get('/:id', dossierController.getById);

module.exports = router;

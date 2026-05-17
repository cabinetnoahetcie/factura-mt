// src/middleware/error.middleware.js
const logger = require('../utils/logger');

exports.errorHandler = (err, req, res, next) => {
  logger.error(err.message, { stack: err.stack, path: req.path });

  // Erreur Multer (fichier)
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(413).json({ error: 'Fichier trop volumineux (max 15 Mo)' });
  }

  // Erreur Prisma
  if (err.code === 'P2002') {
    return res.status(409).json({ error: 'Enregistrement déjà existant' });
  }
  if (err.code === 'P2025') {
    return res.status(404).json({ error: 'Ressource non trouvée' });
  }

  // Erreur générique
  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    error: status === 500 ? 'Erreur interne du serveur' : err.message,
  });
};

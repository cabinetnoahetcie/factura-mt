// src/services/storage.service.js
const { createClient } = require('@supabase/supabase-js');
const { v4: uuidv4 }   = require('uuid');
const logger = require('../utils/logger');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const BUCKET = process.env.SUPABASE_BUCKET || 'factures';

exports.uploadFacture = async (file, clientId) => {
  const ext  = file.originalname.split('.').pop() || 'jpg';
  const path = `${clientId}/${uuidv4()}.${ext}`;

  logger.info(`Upload vers Supabase Storage: ${path}`);

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, file.buffer, {
      contentType:  file.mimetype,
      cacheControl: '3600',
      upsert:       false,
    });

  if (error) {
    logger.error('Erreur Supabase Storage:', error.message);
    throw new Error('Échec upload fichier: ' + error.message);
  }

  const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(path);

  return { url: urlData.publicUrl, path };
};

exports.deleteFacture = async (path) => {
  const { error } = await supabase.storage.from(BUCKET).remove([path]);
  if (error) logger.warn('Erreur suppression fichier:', error.message);
};

exports.getSignedUrl = async (path, expiresIn = 3600) => {
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(path, expiresIn);
  if (error) throw new Error('Impossible de générer l\'URL signée');
  return data.signedUrl;
};

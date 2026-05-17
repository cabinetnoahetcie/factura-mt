// src/index.js
require('dotenv').config();
require('express-async-errors');

const express = require('express');
const cors    = require('cors');
const helmet  = require('helmet');
const morgan  = require('morgan');

const authRoutes    = require('./routes/auth.routes');
const dossierRoutes = require('./routes/dossier.routes');
const adminRoutes   = require('./routes/admin.routes');
const clientRoutes  = require('./routes/client.routes');
const { errorHandler } = require('./middleware/error.middleware');
const logger = require('./utils/logger');

const app  = express();
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000', credentials: true }));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/auth',     authRoutes);
app.use('/api/dossiers', dossierRoutes);
app.use('/api/admin',    adminRoutes);
app.use('/api/clients',  clientRoutes);

app.get('/health', (req, res) => res.json({ status:'ok', timestamp: new Date().toISOString() }));

app.use(errorHandler);

app.listen(PORT, () => logger.info(`🚀 FacturaMT API démarrée sur le port ${PORT}`));

module.exports = app;

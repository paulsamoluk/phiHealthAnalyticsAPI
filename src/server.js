'use strict';

const express = require('express');
const patientsRouter = require('./routes/patients');
const appointmentsRouter = require('./routes/appointments');

const app = express();
const PORT = process.env.PORT || 3000;
const API_TOKEN = process.env.API_TOKEN || null;

app.use(express.json());

// Optional Bearer token auth — only enforced when API_TOKEN env var is set.
app.use((req, res, next) => {
  if (!API_TOKEN) return next();

  const authHeader = req.headers['authorization'] ?? '';
  if (!authHeader.startsWith('Bearer ') || authHeader.slice(7) !== API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  return next();
});

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/patients', patientsRouter);
app.use('/appointments', appointmentsRouter);

app.listen(PORT, () => {
  const authMode = API_TOKEN ? 'Bearer token required' : 'no auth (set API_TOKEN to enable)';
  console.log(`phi-health-test-api running on http://localhost:${PORT}  [${authMode}]`);
});

module.exports = app;

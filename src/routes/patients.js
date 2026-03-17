'use strict';

const { Router } = require('express');
const patients = require('../data/patients');
const proScores = require('../data/proScores');

const router = Router();

// GET /patients/:id
router.get('/:id', (req, res) => {
  const patient = patients[req.params.id];
  if (!patient) {
    return res.status(404).json({ error: `Patient ${req.params.id} not found.` });
  }
  return res.json(patient);
});

// GET /patients/:id/pro-scores
router.get('/:id/pro-scores', (req, res) => {
  const pros = proScores[req.params.id] ?? { patientId: req.params.id };
  return res.json(pros);
});

module.exports = router;

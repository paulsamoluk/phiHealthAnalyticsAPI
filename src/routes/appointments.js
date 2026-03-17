'use strict';

const { Router } = require('express');
const { buildAppointments } = require('../data/appointments');

const router = Router();

// GET /appointments?date=YYYY-MM-DD
// Returns today's appointments for any requested date (mock data is always "today").
router.get('/', (req, res) => {
  return res.json(buildAppointments());
});

module.exports = router;

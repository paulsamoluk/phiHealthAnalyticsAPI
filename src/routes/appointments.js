'use strict';

const { Router } = require('express');
const { buildAppointments } = require('../data/appointments');

const router = Router();

// GET /appointments?date=YYYY-MM-DD
// Returns appointments for the given date. Since all mock data is "today",
// any date matching today returns the full list; other dates return [].
router.get('/', (req, res) => {
  const { date } = req.query;

  if (date) {
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    if (date !== todayStr) {
      return res.json([]);
    }
  }

  return res.json(buildAppointments());
});

module.exports = router;

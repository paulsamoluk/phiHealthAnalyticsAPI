'use strict';

const { Router } = require('express');
const { buildAppointments } = require('../data/appointments');

const router = Router();

function parseRequestedDate(rawDate) {
  if (rawDate == null || rawDate === '') {
    return new Date();
  }

  if (typeof rawDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(rawDate)) {
    return null;
  }

  const [year, month, day] = rawDate.split('-').map(Number);
  const requestedDate = new Date(year, month - 1, day);

  if (
    requestedDate.getFullYear() !== year ||
    requestedDate.getMonth() !== month - 1 ||
    requestedDate.getDate() !== day
  ) {
    return null;
  }

  return requestedDate;
}

// GET /appointments?date=YYYY-MM-DD
// Returns all appointments for the Monday-Friday work week containing the requested date.
router.get('/', (req, res) => {
  const requestedDate = parseRequestedDate(req.query.date);
  if (!requestedDate) {
    return res.status(400).json({ error: 'Invalid date query. Use YYYY-MM-DD.' });
  }

  return res.json(buildAppointments(requestedDate));
});

module.exports = router;

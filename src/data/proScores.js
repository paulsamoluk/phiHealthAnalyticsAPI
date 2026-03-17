'use strict';

const proScores = {
  P001: {
    patientId: 'P001',
    oswestry: [
      { score: 78, collectedAt: '2025-08-05' },
      { score: 74, collectedAt: '2025-10-01' },
      { score: 68, collectedAt: '2025-11-04' },
      { score: 62, collectedAt: '2026-01-10' },
      { score: 56, collectedAt: '2026-02-12' },
      { score: 52, collectedAt: '2026-03-05' },
    ],
    vasPain: [
      { score: 8.5, collectedAt: '2025-08-05' },
      { score: 8.0, collectedAt: '2025-10-01' },
      { score: 7.5, collectedAt: '2025-11-04' },
      { score: 7.0, collectedAt: '2026-01-10' },
      { score: 6.5, collectedAt: '2026-02-12' },
      { score: 6.0, collectedAt: '2026-03-05' },
    ],
    promisGlobal: [
      { physicalTScore: 33, mentalTScore: 38, collectedAt: '2025-08-05' },
      { physicalTScore: 34, mentalTScore: 40, collectedAt: '2025-11-04' },
      { physicalTScore: 36, mentalTScore: 43, collectedAt: '2026-01-10' },
      { physicalTScore: 38, mentalTScore: 44, collectedAt: '2026-03-05' },
    ],
    psfs: [
      {
        activities: [
          { activity: 'Walking 1 block', score: 2 },
          { activity: 'Sitting 30 min', score: 1 },
          { activity: 'Getting out of car', score: 2 },
        ],
        collectedAt: '2025-08-05',
      },
      {
        activities: [
          { activity: 'Walking 1 block', score: 3 },
          { activity: 'Sitting 30 min', score: 2 },
          { activity: 'Getting out of car', score: 3 },
        ],
        collectedAt: '2025-11-04',
      },
      {
        activities: [
          { activity: 'Walking 1 block', score: 3 },
          { activity: 'Sitting 30 min', score: 3 },
          { activity: 'Getting out of car', score: 4 },
        ],
        collectedAt: '2026-01-10',
      },
      {
        activities: [
          { activity: 'Walking 1 block', score: 4 },
          { activity: 'Sitting 30 min', score: 3 },
          { activity: 'Getting out of car', score: 5 },
        ],
        collectedAt: '2026-03-05',
      },
    ],
  },
  P002: {
    patientId: 'P002',
    ndi: [
      { rawScore: 34, collectedAt: '2025-08-10' },
      { rawScore: 32, collectedAt: '2025-09-20' },
      { rawScore: 30, collectedAt: '2025-11-20' },
      { rawScore: 26, collectedAt: '2026-01-15' },
      { rawScore: 23, collectedAt: '2026-02-18' },
      { rawScore: 20, collectedAt: '2026-03-10' },
    ],
    vasPain: [
      { score: 7.5, collectedAt: '2025-08-10' },
      { score: 7.0, collectedAt: '2025-09-20' },
      { score: 6.5, collectedAt: '2025-11-20' },
      { score: 6.0, collectedAt: '2026-01-15' },
      { score: 5.2, collectedAt: '2026-02-18' },
      { score: 4.5, collectedAt: '2026-03-10' },
    ],
    promisGlobal: [
      { physicalTScore: 40, mentalTScore: 45, collectedAt: '2025-08-10' },
      { physicalTScore: 41, mentalTScore: 46, collectedAt: '2025-11-20' },
      { physicalTScore: 42, mentalTScore: 47, collectedAt: '2026-01-15' },
      { physicalTScore: 43, mentalTScore: 49, collectedAt: '2026-03-10' },
    ],
  },
  P003: {
    patientId: 'P003',
    koosJr: [
      { score: 11.1, collectedAt: '2025-07-01' },
      { score: 16.7, collectedAt: '2025-08-15' },
      { score: 22.2, collectedAt: '2025-09-15' },
      { score: 30.6, collectedAt: '2025-11-01' },
      { score: 38.9, collectedAt: '2025-12-01' },
      { score: 47.2, collectedAt: '2026-01-20' },
      { score: 55.6, collectedAt: '2026-02-28' },
    ],
    vasPain: [
      { score: 8.0, collectedAt: '2025-07-01' },
      { score: 7.0, collectedAt: '2025-09-15' },
      { score: 6.0, collectedAt: '2025-12-01' },
      { score: 4.5, collectedAt: '2026-01-20' },
      { score: 3.5, collectedAt: '2026-02-28' },
    ],
    promisGlobal: [
      { physicalTScore: 38, mentalTScore: 44, collectedAt: '2025-07-01' },
      { physicalTScore: 41, mentalTScore: 47, collectedAt: '2025-09-15' },
      { physicalTScore: 44, mentalTScore: 50, collectedAt: '2025-12-01' },
      { physicalTScore: 46, mentalTScore: 52, collectedAt: '2026-02-28' },
    ],
  },
  P004: {
    patientId: 'P004',
    ases: [
      { score: 25, collectedAt: '2025-10-20' },
      { score: 32, collectedAt: '2025-11-25' },
      { score: 41, collectedAt: '2026-01-05' },
      { score: 50, collectedAt: '2026-02-10' },
      { score: 55, collectedAt: '2026-03-03' },
    ],
    dash: [
      { score: 72, collectedAt: '2025-10-20' },
      { score: 63, collectedAt: '2025-11-25' },
      { score: 55, collectedAt: '2026-01-05' },
      { score: 50, collectedAt: '2026-02-10' },
      { score: 45, collectedAt: '2026-03-03' },
    ],
    vasPain: [
      { score: 7.5, collectedAt: '2025-10-20' },
      { score: 6.5, collectedAt: '2025-11-25' },
      { score: 6.0, collectedAt: '2026-01-05' },
      { score: 5.0, collectedAt: '2026-02-10' },
      { score: 4.5, collectedAt: '2026-03-03' },
    ],
  },
  P005: {
    patientId: 'P005',
    koosJr: [
      { score: 50.0, collectedAt: '2025-12-10' },
      { score: 44.4, collectedAt: '2026-02-05' },
      { score: 38.9, collectedAt: '2026-03-10' },
    ],
    vasPain: [
      { score: 5.0, collectedAt: '2025-12-10' },
      { score: 6.0, collectedAt: '2026-02-05' },
      { score: 7.0, collectedAt: '2026-03-10' },
    ],
    promisGlobal: [
      { physicalTScore: 42, mentalTScore: 47, collectedAt: '2025-12-10' },
      { physicalTScore: 40, mentalTScore: 45, collectedAt: '2026-02-05' },
      { physicalTScore: 38, mentalTScore: 44, collectedAt: '2026-03-10' },
    ],
  },
  P006: {
    patientId: 'P006',
    oswestry: [
      { score: 64, collectedAt: '2025-06-01' },
      { score: 60, collectedAt: '2025-08-15' },
      { score: 62, collectedAt: '2025-10-20' },
      { score: 58, collectedAt: '2025-12-10' },
      { score: 56, collectedAt: '2026-02-05' },
      { score: 54, collectedAt: '2026-03-05' },
    ],
    vasPain: [
      { score: 7.0, collectedAt: '2025-06-01' },
      { score: 6.5, collectedAt: '2025-08-15' },
      { score: 7.0, collectedAt: '2025-10-20' },
      { score: 6.5, collectedAt: '2025-12-10' },
      { score: 6.0, collectedAt: '2026-02-05' },
      { score: 5.5, collectedAt: '2026-03-05' },
    ],
    promisGlobal: [
      { physicalTScore: 34, mentalTScore: 36, collectedAt: '2025-06-01' },
      { physicalTScore: 35, mentalTScore: 37, collectedAt: '2025-10-20' },
      { physicalTScore: 36, mentalTScore: 38, collectedAt: '2026-02-05' },
      { physicalTScore: 37, mentalTScore: 39, collectedAt: '2026-03-05' },
    ],
  },
  P007: {
    patientId: 'P007',
    dash: [
      { score: 38, collectedAt: '2025-12-05' },
      { score: 42, collectedAt: '2026-02-20' },
      { score: 45, collectedAt: '2026-03-05' },
    ],
    ases: [
      { score: 62, collectedAt: '2025-12-05' },
      { score: 58, collectedAt: '2026-02-20' },
      { score: 54, collectedAt: '2026-03-05' },
    ],
    vasPain: [
      { score: 3.5, collectedAt: '2025-12-05' },
      { score: 4.5, collectedAt: '2026-02-20' },
      { score: 5.0, collectedAt: '2026-03-05' },
    ],
    promisGlobal: [
      { physicalTScore: 46, mentalTScore: 52, collectedAt: '2025-12-05' },
      { physicalTScore: 44, mentalTScore: 50, collectedAt: '2026-03-05' },
    ],
  },
  P008: {
    patientId: 'P008',
    koosJr: [
      { score: 33.3, collectedAt: '2025-09-08' },
      { score: 38.9, collectedAt: '2025-11-05' },
      { score: 44.4, collectedAt: '2026-01-12' },
      { score: 47.2, collectedAt: '2026-02-16' },
      { score: 50.0, collectedAt: '2026-03-03' },
    ],
    vasPain: [
      { score: 6.5, collectedAt: '2025-09-08' },
      { score: 6.0, collectedAt: '2025-11-05' },
      { score: 5.0, collectedAt: '2026-01-12' },
      { score: 4.5, collectedAt: '2026-02-16' },
      { score: 4.0, collectedAt: '2026-03-03' },
    ],
  },
};

module.exports = proScores;

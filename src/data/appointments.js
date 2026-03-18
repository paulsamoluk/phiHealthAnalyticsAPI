'use strict';

const appointmentTemplates = [
  {
    id: 'A001',
    patientId: 'P001',
    patientFirstName: 'Sarah',
    patientLastName: 'Mitchell',
    patientMrn: 'MRN-00123',
    gender: 'Female',
    dateOfBirth: '1978-04-15',
    weekday: 0,
    hour: 8,
    minute: 0,
    diagnosis: 'Lumbar Disc Herniation L4-L5',
    reasonForVisit: 'Follow-up — 6-week re-assessment',
    status: 'completed',
    roomNumber: '3A',
    treatingProvider: 'Dr. James Ortega',
  },
  {
    id: 'A002',
    patientId: 'P004',
    patientFirstName: 'Derek',
    patientLastName: 'Osei',
    patientMrn: 'MRN-00234',
    gender: 'Male',
    dateOfBirth: '1990-02-08',
    weekday: 0,
    hour: 9,
    minute: 0,
    diagnosis: 'Rotator Cuff Repair — Post-op',
    reasonForVisit: 'Post-surgical ROM evaluation',
    status: 'scheduled',
    roomNumber: '2B',
    treatingProvider: 'Dr. James Ortega',
  },
  {
    id: 'A003',
    patientId: 'P002',
    patientFirstName: 'Marcus',
    patientLastName: 'Thompson',
    patientMrn: 'MRN-00456',
    gender: 'Male',
    dateOfBirth: '1965-11-22',
    weekday: 1,
    hour: 10,
    minute: 0,
    diagnosis: 'Cervical Spondylosis C5-C6',
    reasonForVisit: 'PRO collection — NDI & VAS',
    status: 'inProgress',
    roomNumber: '1C',
    treatingProvider: 'Dr. James Ortega',
  },
  {
    id: 'A004',
    patientId: 'P005',
    patientFirstName: 'Amara',
    patientLastName: 'Diallo',
    patientMrn: 'MRN-00567',
    gender: 'Female',
    dateOfBirth: '1975-09-30',
    weekday: 1,
    hour: 11,
    minute: 0,
    diagnosis: 'Knee Osteoarthritis — Bilateral',
    reasonForVisit: 'Initial evaluation',
    status: 'checkedIn',
    roomNumber: '4B',
    treatingProvider: 'Dr. James Ortega',
  },
  {
    id: 'A005',
    patientId: 'P003',
    patientFirstName: 'Linda',
    patientLastName: 'Chávez',
    patientMrn: 'MRN-00789',
    gender: 'Female',
    dateOfBirth: '1982-07-03',
    weekday: 2,
    hour: 13,
    minute: 0,
    diagnosis: 'Right Knee OA — Post TKA',
    reasonForVisit: 'KOOS Jr. PRO collection',
    status: 'scheduled',
    roomNumber: '2A',
    treatingProvider: 'Dr. James Ortega',
  },
  {
    id: 'A006',
    patientId: 'P006',
    patientFirstName: 'Robert',
    patientLastName: 'Finley',
    patientMrn: 'MRN-00891',
    gender: 'Male',
    dateOfBirth: '1958-03-17',
    weekday: 3,
    hour: 14,
    minute: 0,
    diagnosis: 'Chronic Low Back Pain',
    reasonForVisit: 'Oswestry & PROMIS Global',
    status: 'scheduled',
    roomNumber: '5C',
    treatingProvider: 'Dr. James Ortega',
  },
  {
    id: 'A007',
    patientId: 'P007',
    patientFirstName: 'Mei',
    patientLastName: 'Tanaka',
    patientMrn: 'MRN-00934',
    gender: 'Female',
    dateOfBirth: '2001-06-25',
    weekday: 3,
    hour: 15,
    minute: 0,
    diagnosis: 'Shoulder Impingement Syndrome',
    reasonForVisit: 'DASH & ASES baseline',
    status: 'scheduled',
    roomNumber: '3B',
    treatingProvider: 'Dr. James Ortega',
  },
  {
    id: 'A008',
    patientId: 'P008',
    patientFirstName: 'Jerome',
    patientLastName: 'Williams',
    patientMrn: 'MRN-01012',
    gender: 'Male',
    dateOfBirth: '1984-12-01',
    weekday: 4,
    hour: 16,
    minute: 0,
    diagnosis: 'Patellofemoral Pain Syndrome',
    reasonForVisit: 'KOOS Jr. follow-up',
    status: 'cancelled',
    roomNumber: null,
    treatingProvider: 'Dr. James Ortega',
  },
];

function getStartOfWorkWeek(referenceDate) {
  const dayOfWeek = referenceDate.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

  return new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate() + mondayOffset
  );
}

function buildScheduledTime(startOfWorkWeek, weekday, hour, minute) {
  return new Date(
    startOfWorkWeek.getFullYear(),
    startOfWorkWeek.getMonth(),
    startOfWorkWeek.getDate() + weekday,
    hour,
    minute
  ).toISOString();
}

// Appointments are generated across the Monday-Friday work week containing the reference date.
function buildAppointments(referenceDate = new Date()) {
  const startOfWorkWeek = getStartOfWorkWeek(referenceDate);

  return appointmentTemplates.map(({ weekday, hour, minute, ...appointment }) => ({
    ...appointment,
    scheduledTime: buildScheduledTime(startOfWorkWeek, weekday, hour, minute),
  }));
}

module.exports = { buildAppointments };

# phi-health-test-api

A standalone Node.js/Express mock API server for the **phiHealthAnalytics** Flutter app. It serves realistic healthcare test data (patients, PRO scores, and appointments) over the same REST endpoints used by the production backend.

## Prerequisites

- Node.js 18+
- npm

## Quick start

```bash
npm install
npm start
```

The server starts on **http://localhost:3000** by default.

## Configuration

| Environment variable | Default | Description |
|----------------------|---------|-------------|
| `PORT` | `3000` | TCP port to listen on |
| `API_TOKEN` | _(none)_ | When set, all requests must include `Authorization: Bearer <token>`. When unset, auth is disabled (useful for local dev). |

Example with auth enabled:

```bash
API_TOKEN=my-secret-token npm start
```

## Endpoints

### Health check

```
GET /health
```

Returns `{ "status": "ok" }`.

---

### Patients

#### Get patient demographics

```
GET /patients/:id
```

**Path parameters**

| Parameter | Description |
|-----------|-------------|
| `id` | Patient ID, e.g. `P001`–`P008` |

**Response** `200 OK`

```json
{
  "id": "P001",
  "firstName": "Sarah",
  "lastName": "Mitchell",
  "dateOfBirth": "1978-04-15",
  "gender": "Female",
  "mrn": "MRN-00123",
  "phone": "(555) 214-8833",
  "email": "sarah.mitchell@email.com",
  "diagnosis": "Lumbar Disc Herniation L4-L5",
  "treatingProvider": "Dr. James Ortega",
  "lastVisit": "2026-03-05"
}
```

**Response** `404 Not Found` — unknown patient ID.

---

#### Get PRO scores

```
GET /patients/:id/pro-scores
```

Returns all Patient-Reported Outcome scores on record for the patient. Score arrays present depend on the patient's condition:

| Field | Type | Condition |
|-------|------|-----------|
| `oswestry` | `[{ score, collectedAt }]` | Back pain |
| `ndi` | `[{ rawScore, collectedAt }]` | Cervical |
| `koosJr` | `[{ score, collectedAt }]` | Knee |
| `ases` | `[{ score, collectedAt }]` | Shoulder |
| `dash` | `[{ score, collectedAt }]` | Upper extremity |
| `vasPain` | `[{ score, collectedAt }]` | All patients |
| `promisGlobal` | `[{ physicalTScore, mentalTScore, collectedAt }]` | Most patients |
| `psfs` | `[{ activities: [{ activity, score }], collectedAt }]` | Selected patients |

All `collectedAt` fields are ISO 8601 date strings (`YYYY-MM-DD`).

---

### Appointments

#### Get appointments for a work week

```
GET /appointments?date=YYYY-MM-DD
```

Returns all appointments for the Monday-Friday work week containing the supplied date. If `date` is omitted, the API uses the current date and returns the current work week.

The mock dataset includes 8 appointments distributed across the work week, and `scheduledTime` values are generated from local dates before being serialized as ISO timestamps.

**Query parameters**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `date` | No | Any date within the work week you want returned, formatted as `YYYY-MM-DD` |

**Response** `400 Bad Request` — invalid `date` format.

**Response** `200 OK`

```json
[
  {
    "id": "A001",
    "patientId": "P001",
    "patientFirstName": "Sarah",
    "patientLastName": "Mitchell",
    "patientMrn": "MRN-00123",
    "gender": "Female",
    "dateOfBirth": "1978-04-15",
    "scheduledTime": "2026-03-17T08:00:00.000Z",
    "diagnosis": "Lumbar Disc Herniation L4-L5",
    "reasonForVisit": "Follow-up — 6-week re-assessment",
    "status": "completed",
    "roomNumber": "3A",
    "treatingProvider": "Dr. James Ortega"
  }
]
```

**Status values:** `completed` · `scheduled` · `inProgress` · `checkedIn` · `cancelled`

## Mock patients

| ID | Name | Condition |
|----|------|-----------|
| P001 | Sarah Mitchell | Lumbar Disc Herniation L4-L5 |
| P002 | Marcus Thompson | Cervical Spondylosis C5-C6 |
| P003 | Linda Chávez | Right Knee OA — Post TKA |
| P004 | Derek Osei | Rotator Cuff Repair — Post-op |
| P005 | Amara Diallo | Knee Osteoarthritis — Bilateral |
| P006 | Robert Finley | Chronic Low Back Pain |
| P007 | Mei Tanaka | Shoulder Impingement Syndrome |
| P008 | Jerome Williams | Patellofemoral Pain Syndrome |

## Connecting the Flutter app

In the app's **API Settings** screen, set:

- **Base URL:** `http://<your-machine-ip>:3000`  
  (use `http://10.0.2.2:3000` for Android emulator, `http://localhost:3000` for web/desktop)
- **Token:** leave blank, or set a value matching `API_TOKEN` if auth is enabled

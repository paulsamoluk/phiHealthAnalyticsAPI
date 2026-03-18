# Copilot Instructions

## Build, test, and lint commands

- Install dependencies with `npm install`.
- Start the mock API with `npm start`.
- Override runtime config inline when needed, for example: `PORT=4000 API_TOKEN=my-secret-token npm start`.
- There is no build step or lint script in `package.json`.
- `npm test` is only the default placeholder and exits with code `1`; there is no configured test runner.
- Single-test execution is not available because the repository does not currently define any automated tests.

## High-level architecture

- This repository is a standalone Node.js/Express mock backend for the `phiHealthAnalytics` Flutter app. It is designed to mirror production REST endpoints with local in-memory data.
- `src/server.js` is the composition root. It creates the Express app, enables JSON parsing, applies optional Bearer-token auth based on `API_TOKEN`, exposes `GET /health`, and mounts the route modules under `/patients` and `/appointments`.
- Route modules in `src/routes/` are intentionally thin. They translate HTTP requests directly into reads from the data modules and return JSON without service or database layers in between.
- `src/data/patients.js` exports a single object keyed by patient ID. `src/data/proScores.js` exports a second object keyed by the same patient IDs, with per-condition score arrays. `src/data/appointments.js` exports `buildAppointments(referenceDate)`, which generates appointment timestamps across the Monday-Friday work week containing the supplied date.
- There is no persistence layer, background job, or shared domain model abstraction. Most changes that affect API behavior require coordinated edits across `README.md`, route handlers, and the in-memory data modules.

## Key conventions

- The codebase uses CommonJS throughout (`require`, `module.exports`) with `'use strict';` at the top of each source file. Follow that style unless the whole project is being migrated.
- Keep patient identifiers aligned across all datasets. If you add or rename a patient in `src/data/patients.js`, update related entries in `src/data/proScores.js` and any matching appointment records in `src/data/appointments.js`.
- Preserve the response field names exactly as the Flutter client expects them. The mock data intentionally includes domain-specific fields such as `mrn`, `treatingProvider`, `promisGlobal`, `koosJr`, `ases`, `dash`, and `vasPain`.
- `GET /patients/:id` and `GET /patients/:id/pro-scores` do not behave the same for unknown IDs. Demographics return `404`, while the PRO scores route falls back to `{ patientId: <id> }` if no score set exists.
- `GET /appointments` uses the optional `date` query parameter to choose which Monday-Friday work week to generate. If `date` is omitted, the endpoint uses the current date; invalid `date` values return `400`.
- Appointment times are generated from local work-week dates and converted to ISO strings. If you change appointment generation, preserve the “week-relative” behavior unless you also update the consumer expectations.
- Authentication is all-or-nothing and handled globally in `src/server.js`: when `API_TOKEN` is unset, every route is open; when it is set, every request must send `Authorization: Bearer <token>`.

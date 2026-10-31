# CASE/404 — Detective Investigation Game

**Every case has a story. Every clue has a purpose. Can you find the truth?**

CASE/404 is a noir-inspired detective investigation game built with Angular. Step into the role of an investigator, explore crime scenes, examine evidence, study suspects, and uncover the truth behind mysterious cases.

## Screenshots

### Dashboard

![CASE/404 Dashboard](screenshots/dashboard.png)

### Case Archive

![CASE/404 Case Archive](screenshots/cases.png)

## Features

- **Detective Dashboard** — Overview of investigations, recent activity, and outstanding leads.
- **Case Management** — Browse cases and filter them by status.
- **Case Dossiers** — Explore case backgrounds, crime scenes, suspects, and evidence.
- **Suspect Investigation** — Access individual suspect profiles and recorded statements.
- **Evidence Examination** — Inspect evidence and review fictional forensic findings.
- **Noir Atmosphere** — A dark detective-agency interface inspired by classic crime investigation aesthetics.

## Featured Case: The Last Photograph

**CASE 001 — Arthur Moreau**

A renowned photographer is found dead inside his private studio in Paris. His final photographic collection has disappeared.

Four individuals had access to the studio on the night of October 30.

- Victim: Arthur Moreau
- Location: Studio A, Paris
- Category: Homicide
- Difficulty: Medium
- Suspects: 4
- Evidence Archive: 5 items

The investigation is only beginning.

## Technology Stack

| Technology | Purpose |
|---|---|
| Angular | Front-end framework |
| TypeScript | Application logic |
| HTML | Application structure |
| SCSS | Styling and visual design |
| Angular Router | Navigation |
| Local Mock Data | Case and investigation data |
| LocalStorage | Planned local progress persistence |

## Getting Started

### Prerequisites

- Node.js
- npm
- Angular CLI (optional)

### Installation

Clone the repository:

```bash
git clone https://github.com/vziz1312/case404.git
```

Navigate to the project:

```bash
cd case404
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open your browser at:

```text
http://localhost:4200
```

## Project Structure

```text
case404/
│
├── screenshots/
│   ├── dashboard.png
│   └── cases.png
│
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── dashboard/
│   │   │   ├── cases/
│   │   │   ├── case-dossier/
│   │   │   └── suspect-dossier/
│   │   │
│   │   ├── shared/
│   │   │   └── sidebar/
│   │   │
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   │
│   └── assets/
│       └── images/
│
├── package.json
└── README.md
```

## Development Roadmap

### Implemented

- [x] Noir detective dashboard
- [x] Case archive with filtering and search
- [x] Case dossier page
- [x] Crime scene report
- [x] Suspect profiles
- [x] Evidence archive
- [x] Interactive evidence examination
- [x] Dashboard navigation and investigation leads

### Planned

- [ ] Interactive investigation board
- [ ] Evidence cross-referencing
- [ ] Timeline reconstruction
- [ ] Suspect interrogations
- [ ] Final accusation system
- [ ] Case solution reveal and detective scoring
- [ ] Optional AI-powered investigation assistance

## Project Status

CASE/404 is currently a front-end prototype powered by local mock data. Backend integration and additional investigation mechanics are planned for future development.

## Author

**Mohamed Aziz Mghirbi**

GitHub: [@vziz1312](https://github.com/vziz1312)

---

*CASE/404 — The truth is hidden between the evidence.*
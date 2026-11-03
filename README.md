# CampusFlow

**A Student Project Management & Collaboration Platform.**

CampusFlow helps students plan, manage, and collaborate on hackathons, capstone projects, and academic assignments through a unified workspace.

### Tech Stack

- **Frontend:** React.js, TypeScript
- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB
- **Cloud Storage:** Cloudinary

### Core Features

- Project and task management
- Team collaboration and role assignment
- Progress and deadline tracking
- Dedicated Hackathon & Capstone modes
- GitHub contribution tracking

### Architecture

```text
client/       React + Vite frontend
server/       Express API, MongoDB, Cloudinary integrations
shared/       TypeScript contracts shared by client and server
```

The API is organized around `config`, `middleware`, `models`, `routes`, `controllers`,
and `services`. Add feature modules under `server/src/modules/<feature>` as the
application grows. Keep request/response types in `shared/src`.

### Getting Started

```bash
npm install
Copy-Item .env.example .env
npm run dev
```

Fill in the MongoDB and Cloudinary values in `.env` before starting the API.
The frontend runs at `http://localhost:5173`; the API runs at `http://localhost:5000`.

### Useful commands

```bash
npm run typecheck
npm run build
```

### Contributors

| Name | Role |
|---|---|
| Aditya Aishwarya | Backend Developer |
| Yogesh Dubey | DevOps Engineer |
| Harshit Mohanty | Software Tester |

---

**CampusFlow — Plan. Collaborate. Build.**

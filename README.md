# Server Playground

A lightweight API to monitor local or remote server metrics — built with [Hono.js](https://hono.dev/), Docker, and TypeScript.

---

## What It Does

Minimal REST API exposing system metrics:

| Endpoint   | Description                            |
| ---------- | -------------------------------------- |
| `/`        | Health check (confirms server is up)   |
| `/metrics` | Returns uptime, memory usage, CPU load |

---

## Stack

- **Hono.js** — minimalist web framework for building APIs
- **Node.js 20+** — JavaScript runtime
- **TypeScript** — type-safe modern JavaScript
- **Docker** — containerized local development
- **Docker Compose** — orchestration of local services
- **Nodemon + ts-node** — automatic reload on file change during development

---

## Development Setup

### Clone the repository

```bash
git clone https://github.com/NolanBeaujault/server-playground.git
cd server-playground
```

### Install dependencies

```bash
npm install
```

### Run locally without Docker

```bash
npm run dev
```

### Run using Docker Compose

```bash
docker compose up --build
```

> The application will be accessible on [localhost:3000](http://localhost:3000)

---

## File Structure (Current)

```
server-playground/
│
├── src/
│   └── index.ts           # API entrypoint
│
├── Dockerfile             # Dev-oriented Dockerfile
├── docker-compose.yml     # Container orchestration
├── .env                   # Local environment variables (e.g., port)
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript configuration
```

---

## Features to Build Next

This section tracks upcoming improvements.

- [ ] Add persistent logging (e.g., Winston or Pino)
- [ ] Export metrics in Prometheus-compatible format
- [ ] Add authentication for `/metrics` endpoint
- [ ] Add system details per endpoint (`/cpu`, `/ram`, etc.)
- [ ] Add dashboard frontend to visualize metrics
- [ ] Prepare production-ready Dockerfile and multi-stage build

---

## Why This Exists

This project serves as a personal playground to:

- Practice building minimal web APIs
- Get familiar with Docker/Docker Compose workflows
- Explore performance monitoring and containerized development
- Iterate with clean, scalable architecture from day one

---

## How to Contribute

You're welcome to fork the project, explore, or submit improvements:

1. Fork this repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## License

MIT — free to use, remix, and distribute.

---

## Badges

[![Node.js](https://img.shields.io/static/v1?label=Node.js&message=v20%2B&color=6cc24a&style=flat-square&logo=node.js)](https://nodejs.org)
[![Docker](https://img.shields.io/static/v1?label=Docker&message=Ready&color=2496ed&style=flat-square&logo=docker)](https://www.docker.com)
[![MIT License](https://img.shields.io/static/v1?label=License&message=MIT&color=yellow&style=flat-square)](LICENSE)
![CI](https://github.com/NolanBeaujault/server-playground/actions/workflows/ci.yml/badge.svg)


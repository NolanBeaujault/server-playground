# Server Playground

A lightweight API to monitor local or remote server metrics — built with [Hono.js](https://hono.dev/), Docker, and Typescript.

---

## What it Does

Simple endpoints to check system status:

| Endpoint   | Description                            |
| ---------- | -------------------------------------- |
| `/`        | Health check (server is up)            |
| `/metrics` | Returns uptime, memory usage, CPU load |

---

## Stack

- **Hono.js** — ultralight web framework
- **Docker** — containerization for deployment
- **Node.js 20+** — runtime environment

---

## Getting Started

Clone and install:

```bash
git clone https://github.com/YOUR_USERNAME/server-playground.git
cd server-playground
npm install
```

Run locally:

```bash
npx ts-node index.ts
```

Or use Docker:

```bash
docker build -t server-playground-api .
docker run -p 3000:3000 server-playground-api
```

> Open in browser: [localhost:3000](http://localhost:3000)

---

## Customize It

Make it yours:

- Add or replace endpoints
- Use `.env` for secrets or configuration
- Extend `/metrics` with more detailed system info

---

## Why?

Built as a personal sandbox to play with backend performance monitoring, containers, and clean architecture. No bloat, no dependencies you don't need.

---

## Contributing

Open to PRs, feedback, or just curious developers dropping by:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a pull request for review

---

## License

MIT — free to use, remix, or break things.

---

## Badges

[![Node.js](https://img.shields.io/static/v1?label=Node.js&message=v20%2B&color=6cc24a&style=flat-square&logo=node.js)](https://nodejs.org)  
[![Docker](https://img.shields.io/static/v1?label=Docker&message=Ready&color=2496ed&style=flat-square&logo=docker)](https://www.docker.com)  
[![MIT License](https://img.shields.io/static/v1?label=License&message=MIT&color=yellow&style=flat-square)](LICENSE)

# Server Playground 🚀

> A project for monitoring servers and local services using Hono.js, Docker, and endpoints for system resource monitoring (CPU, RAM, uptime...).

## 🚀 Prerequisites

Before starting, make sure you have installed:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/) (version 20 or higher)

## ⚙️ Features

### 📊 Available Endpoints:

- **`/`**: Displays a message indicating that the server is running.
- **`/metrics`**: Returns system information:
  - Uptime
  - Memory (total, free, used)
  - CPU load (1-minute average)

## 🛠️ Installation

Clone this project and install the dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/server-playground.git
cd server-playground
npm install
```

### 🐳 Dockerization

1. **Build the Docker image**:

   ```bash
   docker build -t server-playground-api .
   ```

2. **Run the Docker container**:

   ```bash
   docker run -p 3000:3000 server-playground-api
   ```

   The API will now be accessible at [http://localhost:3000](http://localhost:3000).

## 📝 Development

### Run locally:

If you want to run the project without Docker, you can use `ts-node` directly to execute the TypeScript code:

```bash
npx ts-node index.ts
```

### 🧪 Test the endpoints:

- **Home**: [http://localhost:3000](http://localhost:3000)
- **Metrics**: [http://localhost:3000/metrics](http://localhost:3000/metrics)

You will see a JSON response with system information such as uptime, CPU load, and memory.

## 🐳 Docker Icons & Badges

[![Docker Image Size](https://img.shields.io/docker/image-size/your_username/server-playground-api)](https://hub.docker.com/r/your_username/server-playground-api)

## 🤝 Contribute

If you want to contribute to this project, here are some steps:

1. Fork the project.
2. Create a branch (`git checkout -b feature/my-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature/my-feature`).
5. Open a Pull Request to discuss the changes.

---

## 📄 License

This project is under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

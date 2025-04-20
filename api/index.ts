import { Hono } from "hono";
import { serve } from "@hono/node-server";
import os from "os";

const app = new Hono();

app.get("/", (c) => c.text("🧠 Server Playground is up and running!"));

app.get("/metrics", (c) => {
  const uptime = os.uptime();
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  const cpuLoad = os.loadavg()[0]; // Mean CPU load over the last minute

  return c.json({
    uptimeSeconds: uptime,
    memory: {
      total: totalMem,
      free: freeMem,
      used: usedMem,
    },
    cpuLoadAvg1min: cpuLoad,
  });
});

serve({
  fetch: app.fetch,
  port: 3000,
});

console.log("Server is running on http://localhost:3000");

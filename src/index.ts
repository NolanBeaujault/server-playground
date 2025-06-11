import { Hono } from "hono";
import { serve } from "@hono/node-server";
import "dotenv/config";

const app = new Hono();

app.get("/", (c) => c.text("Server monitor is up!"));

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000,
});

console.log("Server is running on http://localhost:3000");

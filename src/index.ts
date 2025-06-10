import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/", (c) => c.text("Server monitor is up and running!"));

serve({
  fetch: app.fetch,
  port: 3000,
});

console.log("Server is running on http://localhost:3000");

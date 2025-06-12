// src/routes/metrics.ts
import { Context } from "hono";
import { cpus, totalmem, freemem, uptime } from "os";

export const getMetrics = (c: Context) => {
  const totalMem = totalmem();
  const freeMem = freemem();
  const usedMem = totalMem - freeMem;
  const usagePercent = (usedMem / totalMem) * 100;

  return c.json({
    uptime_seconds: uptime().toFixed(1),
    memory: {
      total_mb: (totalMem / 1024 / 1024).toFixed(0),
      used_mb: (usedMem / 1024 / 1024).toFixed(0),
      free_mb: (freeMem / 1024 / 1024).toFixed(0),
      usage_percent: usagePercent.toFixed(2),
    },
    cpu: {
      cores: cpus().length,
      model: cpus()[0].model,
      speed_mhz: cpus()[0].speed,
    },
  });
};

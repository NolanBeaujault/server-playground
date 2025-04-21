import { logger } from "./logger.ts";

export const loggerMiddleware = async (c: any, next: () => Promise<void>) => {
  const start = Date.now();

  const body = await c.req.text(); // Pour logguer le body s’il y en a

  await next();

  const duration = Date.now() - start;

  logger.info({
    method: c.req.method,
    url: c.req.url,
    status: c.res.status,
    duration: `${duration}ms`,
    body,
  });
};

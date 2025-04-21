import pino from "pino";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logFilePath = join(__dirname, "logs", "access.log");

const logger = pino(
  {
    level: "info",
  },
  pino.destination(logFilePath)
);

export { logger };

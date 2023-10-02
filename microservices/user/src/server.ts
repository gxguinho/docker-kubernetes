import { FastifyInstance } from "fastify";
import { App } from "./app";
import { config } from "./config";

const app: FastifyInstance = App();

const PORT = Number(config.port);

app
  .listen({
    port: PORT,
  })
  .then(() =>
    console.log(`🚀 HTTP server running on  http://localhost:${PORT}`),
  );

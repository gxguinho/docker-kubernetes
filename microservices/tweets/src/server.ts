import { FastifyInstance } from "fastify";
import { App } from "./app";
import { config } from "./config";

const app: FastifyInstance = App();

const PORT = Number(config.port);

app
  .listen({
    port: PORT,
    host: "0.0.0.0",
  })
  .then(() =>
    console.log(`🚀 HTTP server running on  http://localhost:${PORT}`),
  );

import fastify from "fastify";
import { CustomError } from "./utils/custom-error";
import { tweetRoutes } from "./routes/tweet";

export const App = () => {
  const app = fastify();

  app.get("/", async () => "TWEETS MICROSERVICE");

  app.register(tweetRoutes);

  app.setErrorHandler((err, req, res) => {
    const customError: CustomError = err;
    res.status(customError.statusCode || 500).send({
      error: {
        message: customError.message,
        code: customError.code,
        data: customError.data,
      },
    });
  });

  return app;
};

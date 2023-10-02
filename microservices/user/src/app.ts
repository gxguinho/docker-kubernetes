import fastify from "fastify";
import { CustomError } from "./utils/custom-error";
import { userRoutes } from "./routes/user";

export const App = () => {
  const app = fastify();

  app.get("/", async () => "USER MICROSERVICE");

  app.register(userRoutes);

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

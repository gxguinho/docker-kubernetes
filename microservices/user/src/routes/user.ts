import { FastifyInstance } from "fastify";
import {
  createUserHandler,
  getUserByUsernameHandler,
  getUsersByUsernameHandler,
} from "../handlers/user";

export async function userRoutes(app: FastifyInstance) {
  app.post("/", createUserHandler);
  app.get("/:username", getUserByUsernameHandler);
  app.get("/users", getUsersByUsernameHandler);
}

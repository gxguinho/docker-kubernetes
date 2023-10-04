import { FastifyInstance } from "fastify";
import { createTweetHandler, getTweetHandler } from "../handlers/tweet";

export async function tweetRoutes(app: FastifyInstance) {
  app.post("/create-tweet", createTweetHandler);
  app.get("/get-tweet/:tweetId", getTweetHandler);
}

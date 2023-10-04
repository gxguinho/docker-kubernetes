import { z } from "zod";
import { FastifyRequest, FastifyReply } from "fastify";
import { createTweetService } from "../../services/tweet";

export async function createTweetHandler(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const createTweetSchemaBody = z.object({
    text: z.string().max(200),
    userId: z.string(),
  });

  const { text, userId } = createTweetSchemaBody.parse(req.body);

  try {
    const response = createTweetService({
      text,
      userId,
    });

    return response;
  } catch (error) {
    req.log.error(error);

    reply.status(400).send(error);
  }
}

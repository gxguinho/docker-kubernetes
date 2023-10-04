import { z } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { getTweetService } from "../../services/tweet";

export async function getTweetHandler(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const getTweetSchemaParams = z.object({
    tweetId: z.string(),
  });

  const { tweetId } = getTweetSchemaParams.parse(req.params);

  try {
    const response = getTweetService(tweetId);

    return response;
  } catch (error) {
    req.log.error(error);

    reply.status(400).send(error);
  }
}

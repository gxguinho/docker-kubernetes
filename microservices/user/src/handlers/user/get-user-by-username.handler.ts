import { FastifyRequest } from "fastify";
import { string, z } from "zod";
import { getUserByUsernameService } from "../../services/user";
import customError from "../../utils/custom-error";

export async function getUserByUsernameHandler(req: FastifyRequest) {
  const createUserSchema = z.object({
    username: string(),
  });

  const { username } = createUserSchema.parse(req.params);

  const response = await getUserByUsernameService(username);

  if (!response) {
    customError({
      message: "User not found",
      statusCode: 404,
    });
  }

  return response;
}

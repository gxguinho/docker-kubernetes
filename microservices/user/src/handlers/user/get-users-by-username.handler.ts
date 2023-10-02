import { FastifyRequest } from "fastify";
import { string, z } from "zod";
import { getUsersByUsernameService } from "../../services/user/get-users-by-username.service";

export async function getUsersByUsernameHandler(req: FastifyRequest) {
  const createUserSchema = z.object({
    search: string(),
  });

  const { search } = createUserSchema.parse(req.query);

  const response = await getUsersByUsernameService(search);

  return response;
}

import { z } from "zod";
import { FastifyRequest } from "fastify";
import { FastifyReply } from "fastify/types/reply";
import { createUserService } from "../../services/user";

export async function createUserHandler(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const createUserSchema = z.object({
    username: z
      .string()
      .min(3, { message: "O usuário precisa ter pelo menos 3 letras." })
      .regex(/^([a-z\\-]+)$/i, {
        message: "O usuário pode ter apenas letras e hifens.",
      })
      .transform((username) => username.toLowerCase()),
    name: z.string(),
    email: z.string().email(),
    birthDate: z.string(),
  });

  const { birthDate, email, name, username } = createUserSchema.parse(req.body);

  const response = await createUserService({
    username,
    name,
    email,
    birthDate,
  });

  return reply.code(201).send(response);
}

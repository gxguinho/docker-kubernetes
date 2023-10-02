import { CreateUserRequest } from "../../interfaces/user";
import { prisma } from "../../lib/prisma";

export async function createUserService(request: CreateUserRequest) {
  const { birthDate, email, name, username } = request;

  const user = await prisma.user.create({
    data: {
      username,
      name,
      email,
      birthDate,
    },
  });

  return user;
}

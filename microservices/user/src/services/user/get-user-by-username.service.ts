import { prisma } from "../../lib/prisma";

export async function getUserByUsernameService(username: string) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  return user;
}

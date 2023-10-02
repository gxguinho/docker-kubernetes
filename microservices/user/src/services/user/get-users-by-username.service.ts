import { prisma } from "../../lib/prisma";

export async function getUsersByUsernameService(search: string) {
  const users = await prisma.$queryRaw`
    SELECT top 5 username, name, avatarUrl FROM "users"
    WHERE "username" LIKE ${`%${search}%`};
  `;

  return users;
}

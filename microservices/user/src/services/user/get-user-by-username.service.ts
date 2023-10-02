import { prisma } from "../../lib/prisma";

export async function getUserByUsernameService(username: string) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          following: true,
        },
      },
      followers: {
        select: {
          following: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  });

  return user;
}

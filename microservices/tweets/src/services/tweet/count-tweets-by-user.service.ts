import { prisma } from "../../lib/prisma";

export async function countTweetsByUserService(userId: string) {
  const response = await prisma.tweet.count({
    where: {
      userId,
    },
  });

  return response;
}

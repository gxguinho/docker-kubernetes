import { prisma } from "../../lib/prisma";

export async function getTweetService(tweetId: string) {
  const response = await prisma.tweet.findUnique({
    where: {
      id: tweetId,
    },
  });

  return response;
}

import { CreateTweetRequest } from "../../interfaces/tweet";
import { prisma } from "../../lib/prisma";

export async function createTweetService({ text, userId }: CreateTweetRequest) {
  const tweet = await prisma.tweet.create({
    data: {
      text,
      userId,
    },
  });

  return tweet;
}

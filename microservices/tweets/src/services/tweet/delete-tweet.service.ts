import { DeleteTweetRequest } from "../../interfaces/tweet";
import { prisma } from "../../lib/prisma";

export async function deleteTweetService({
  tweetId,
  userId,
}: DeleteTweetRequest) {
  await prisma.tweet.delete({
    where: {
      id: tweetId,
      userId,
    },
  });

  return true;
}

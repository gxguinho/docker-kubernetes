import { prisma } from "../../lib/prisma";

export async function getTweetsService(
  userId: string,
  userIdSearch: string,
  page: number,
  limit: number,
) {
  function skip() {
    if (page === 0 || page === 1) {
      return 0;
    } else {
      page = page - 1;
      limit = limit > 10 ? 10 : limit;
      return page * limit;
    }
  }

  const response = await prisma.tweet.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: true,
      likes: {
        where: {
          userId: userIdSearch,
        },
      },
    },
    skip: skip(),
    take: limit,
  });

  return response;
}

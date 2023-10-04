export interface CreateTweetRequest {
  text: string;
  userId: string;
}

export interface DeleteTweetRequest {
  tweetId: string;
  userId: string;
}

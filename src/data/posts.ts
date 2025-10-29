type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
type PostComment = {
  id: number;
  body: string;
  postId: number;
  userId: number;
};

type PostsResponse = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};
type PostCommentsResponse = {
  comments: PostComment[];
  total: number;
  skip: number;
  limit: number;
};

export async function getPosts(page = 1) {
  const res = await fetch(
    `https://dummyjson.com/posts?limit=10&skip=${page * 10}`
  );
  if (res.ok) {
    return (await res.json()) as PostsResponse;
  } else {
    throw new Error("Failed to fetch posts");
  }
}
export async function getPost(id: number) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  if (res.ok) {
    return (await res.json()) as Post;
  } else {
    throw new Error("Failed to fetch post");
  }
}
export async function getPostComments(id: number) {
  const res = await fetch(`https://dummyjson.com/posts/${id}/comments`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (res.ok) {
    return (await res.json()) as PostCommentsResponse;
  } else {
    throw new Error("Failed to fetch post comments");
  }
}

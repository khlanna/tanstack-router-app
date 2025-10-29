import { createFileRoute } from "@tanstack/react-router";
import Post from "./-components/Post";
import { getPost, getPostComments } from "../data/posts";

export const Route = createFileRoute("/posts/$postId")({
  component: RouteComponent,
  onError: ({ error }) => {
    return <div className="text-red-500">{error.message}</div>;
  },
  onCatch: (error) => {
    return <div className="text-red-500">{error.message}</div>;
  },
  errorComponent: ({ error }) => {
    return <div className="text-red-500">{error.message}</div>;
  },
  loader: async ({ params }) => {
    const commentsPromise = getPostComments(+params.postId);
    const post = await getPost(+params.postId);

    return { post, commentsPromise };
  },
});

function RouteComponent() {
  return <Post />;
}

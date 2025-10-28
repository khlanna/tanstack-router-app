import { createFileRoute, Link } from "@tanstack/react-router";
import { getPosts } from "../data/posts";

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
  beforeLoad: () => {
    return {
      getPosts: getPosts,
    };
  },
  loader: async ({ context }) => {
    const { getPosts } = context;
    const posts = await getPosts();
    return { context, posts: posts.posts };
  },
});

function RouteComponent() {
  const { posts } = Route.useLoaderData();
  return (
    <div className="flex flex-col gap-2">
      Hello "/posts/"!
      {posts.map((post) => (
        <div key={post.id}>
          <Link
            to="/posts/$postId"
            className="text-blue-500"
            params={{ postId: post.id.toString() }}
          >
            Go to Post {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

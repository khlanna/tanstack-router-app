import { createFileRoute, Link } from "@tanstack/react-router";
import { getPosts } from "../data/posts";
import { z } from "zod";
import { zodValidator } from "@tanstack/zod-adapter";

const searchSchema = z.object({
  page: z.number().default(1),
});

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
  validateSearch: zodValidator(searchSchema),
  pendingComponent: () => {
    return <div className="text-yellow-500">Loading...</div>;
  },
  beforeLoad: () => {
    return {
      getPosts: getPosts,
    };
  },
  loaderDeps: ({ search }) => {
    return {
      page: search.page,
    };
  },
  loader: async ({ context, deps }) => {
    const { getPosts } = context;
    const posts = await getPosts(deps.page);
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
      <div className="flex gap-4">
        <Link
          from={Route.fullPath}
          to="."
          search={(prev) => ({ ...prev, page: prev.page - 1 })}
          className="text-yellow-500"
        >
          Go to Prev Page
        </Link>
        <Link
          from={Route.fullPath}
          to="."
          search={(prev) => ({ ...prev, page: prev.page + 1 })}
          className="text-yellow-500"
        >
          Go to Next Page
        </Link>
      </div>
    </div>
  );
}

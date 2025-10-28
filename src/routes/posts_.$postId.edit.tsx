import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts_/$postId/edit")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-2">
      Hello "/posts_/$postId/edit"!
      <Link to=".." className="text-blue-500">
        Go to Post {Route.useParams().postId}
      </Link>
      <Link from={Route.fullPath} to="../.." className="text-blue-500">
        Go to Posts
      </Link>
    </div>
  );
}

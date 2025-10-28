import { createFileRoute } from "@tanstack/react-router";
import Post from "./-components/Post";

export const Route = createFileRoute("/posts/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Post />;
}

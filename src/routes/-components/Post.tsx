import { getRouteApi } from "@tanstack/react-router";

export default function Post() {
  const { useParams } = getRouteApi("/posts/$postId");
  const { postId } = useParams();
  return (
    <div>
      <div>Post</div>
      <div>PostId: {postId}</div>
    </div>
  );
}

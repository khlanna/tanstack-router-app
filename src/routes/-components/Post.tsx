import { Await, getRouteApi } from "@tanstack/react-router";

export default function Post() {
  const { useLoaderData } = getRouteApi("/posts/$postId");
  const { post, commentsPromise } = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <p>{post.body}</p>
      <div className="border-2 p-4 mt-4">
        <h2 className="text-xl font-bold mb-2">Comments</h2>
        <Await promise={commentsPromise} fallback={<div>Loading...</div>}>
          {(comments) => (
            <ul>
              {comments.comments.map((comment) => (
                <li
                  key={comment.id}
                  className="bg-purple-800 border-1 p-2 mb-2"
                >
                  {comment.body}
                  <br />
                </li>
              ))}
            </ul>
          )}
        </Await>
      </div>
    </div>
  );
}

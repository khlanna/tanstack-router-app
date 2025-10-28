import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/file/file-{$fileId}/$")({
  component: RouteComponent,
});

function RouteComponent() {
  const { _splat, fileId } = Route.useParams();
  return (
    <div className="flex flex-col gap-2">
      <div>Hello "/file/$"!</div>
      <div>File: {_splat}</div>
      <div>FileId: {fileId}</div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className=" bg-blue-500 p-2">
      <h1 className="text-white text-2xl font-bold">About</h1>
    </div>
  );
}

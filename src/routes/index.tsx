import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className=" bg-green-500 p-2">
      <h1 className="text-white text-2xl font-bold">Home</h1>
    </div>
  );
}

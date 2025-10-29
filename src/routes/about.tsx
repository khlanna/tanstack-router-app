import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
  beforeLoad: ({ context, location }) => {
    if (context.user === null) {
      throw redirect({ to: "/login", search: { redirect: location.href } });
    }
  },
});

function RouteComponent() {
  return (
    <div className=" bg-blue-500 p-2">
      <h1 className="text-white text-2xl font-bold">About</h1>
    </div>
  );
}

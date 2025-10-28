import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_settingsLayout/settings/payments")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className=" bg-purple-500 p-2 border-2 border-white-500">
      <h1 className="text-white text-2xl font-bold">
        Hello "/settings/payments"!
      </h1>
    </div>
  );
}

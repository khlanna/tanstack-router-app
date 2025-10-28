import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_settingsLayout/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/_settingsLayout/settings"!
      <Outlet />
    </div>
  );
}

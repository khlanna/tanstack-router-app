import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_settingsLayout/settings_/password")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>password</div>;
}

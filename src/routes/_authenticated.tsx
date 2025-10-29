import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    if (context.user === null) {
      throw new Error("User is not authenticated");
    }
  },
  errorComponent: () => {
    return <div>Error: User is not authenticated</div>;
  },
  // beforeLoad: ({ context, location }) => {
  //   if (context.user === null) {
  //     throw redirect({ to: "/login", search: { redirect: location.href } });
  //   }
  // },
});

function RouteComponent() {
  return <Outlet />;
}

import { createFileRoute, redirect } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import z from "zod";

const loginSearchSchema = z.object({
  redirect: z.string().optional(),
});
export const Route = createFileRoute("/login")({
  component: RouteComponent,
  validateSearch: zodValidator(loginSearchSchema),
  beforeLoad: ({ context, search }) => {
    if (context.user !== null) {
      throw redirect({
        to: search.redirect || "/",
      });
    }
  },
});

function RouteComponent() {
  const { loggedIn } = Route.useRouteContext();
  const navigate = Route.useNavigate();
  const { redirect } = Route.useSearch();

  return (
    <>
      <div>Hello "/login"!</div>
      <button
        onClick={() => {
          loggedIn({ id: "1", name: "John Doe" });
          if (redirect) {
            navigate({ to: redirect });
          }
        }}
      >
        Login
      </button>
    </>
  );
}

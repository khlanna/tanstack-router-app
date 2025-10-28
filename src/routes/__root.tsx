import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import type { User } from "../types";

interface RouteContext {
  user: User | null;
  loggedIn: (user: User) => void;
  loggedOut: () => void;
}

export const Route = createRootRouteWithContext<RouteContext>()({
  component: RootComponent,
});

function RootComponent() {
  const { user, loggedIn, loggedOut } = Route.useRouteContext();
  return (
    <div className=" p-2">
      <h1 className="text-2xl font-bold">Root Router</h1>
      <div className="flex gap-2 mb-8  bg-blue-400 p-2 flex-wrap">
        {user ? <div>Hello {user.name}</div> : <div>Hello Guest</div>}
        {user ? (
          <button onClick={loggedOut}>Logout</button>
        ) : (
          <button onClick={() => loggedIn({ id: "1", name: "John Doe" })}>
            Login
          </button>
        )}
      </div>
      <div className="flex gap-2 mb-8  bg-blue-400 p-2 flex-wrap">
        <Link
          to="/"
          className="[&.active]:font-bold  "
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold ">
          About
        </Link>
        <Link to="/posts" className="[&.active]:font-bold">
          Posts
        </Link>
        <Link
          to="/file/file-{$fileId}/$"
          className="[&.active]:font-bold"
          params={{ fileId: "1", _splat: "file1.txt" }}
        >
          File 1
        </Link>

        <Link
          to="/{-$locale}/archive/{-$year}"
          className="[&.active]:font-bold"
          params={{ locale: "en", year: "2025" }}
        >
          Archive 2025
        </Link>

        <Link
          to="/products"
          className="[&.active]:font-bold"
          search={{
            pagination: { page: 1, pageSize: 10 },
            sort_by: "price",
            sort_order: "asc",
            colors: ["red", "blue", "green"],
          }}
        >
          Products
        </Link>

        <Link to="/settings" className="[&.active]:font-bold  ">
          Settings
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}

export default RootComponent;

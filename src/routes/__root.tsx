import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});
function RootComponent() {
  return (
    <div className=" p-2">
      <h1 className="text-2xl font-bold">Root Router</h1>
      <div className="flex gap-2 mb-8  bg-blue-400 p-2">
        <Link to="/" className="[&.active]:font-bold  ">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold ">
          About
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}

export default RootComponent;

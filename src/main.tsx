import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createRouter } from "@tanstack/react-router";
import { RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import type { User } from "./types";
import { flushSync } from "react-dom";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  // defaultPreloadDelay: 100,
  context: {
    user: null,
    loggedIn: () => {},
    loggedOut: () => {},
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  function loggedIn(user: User) {
    flushSync(() => {
      setUser(user);
    });

    router.invalidate();
  }

  function loggedOut() {
    flushSync(() => {
      setUser(null);
    });

    router.invalidate();
  }

  return (
    <RouterProvider router={router} context={{ user, loggedIn, loggedOut }} />
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

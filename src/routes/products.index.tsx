import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { fallback, zodValidator } from "@tanstack/zod-adapter";

const searchSchema = z.object({
  pagination: z.object({
    page: z.number().default(1),
    pageSize: z.number().default(10),
  }),
  sort_by: fallback(z.enum(["price", "name"]), "price"),
  sort_order: z.enum(["asc", "desc"]).default("asc"),
  colors: fallback(z.array(z.enum(["red", "blue", "green"])), ["red"]),
});

export const Route = createFileRoute("/products/")({
  component: RouteComponent,
  validateSearch: zodValidator(searchSchema),
  errorComponent: ({ error }) => {
    return <div className="text-red-500">{error.message}</div>;
  },
});

function RouteComponent() {
  const search = Route.useSearch();
  return (
    <div className="flex flex-col gap-2">
      Hello "/products/"!
      <div>Pagination: {search.pagination?.page}</div>
      <div>Sort by: {search.sort_by}</div>
      <div>Sort order: {search.sort_order}</div>
      <div>Colors: {search.colors?.join(", ")}</div>
    </div>
  );
}

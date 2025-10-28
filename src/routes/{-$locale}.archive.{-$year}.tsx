import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/{-$locale}/archive/{-$year}")({
  component: RouteComponent,
});

function RouteComponent() {
  const { locale, year } = Route.useParams();
  return (
    <div className="flex flex-col gap-2">
      <div>Hello "/-$locale/archive/-$year"!</div>
      <div>Locale: {locale}</div>
      <div>Year: {year}</div>
    </div>
  );
}

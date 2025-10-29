import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import z from "zod";

const randomWordSearchParamsSchema = z.object({
  lang: z.enum(["en", "es", "fr", "zh"]).optional(),
});

type LangType = z.infer<typeof randomWordSearchParamsSchema>["lang"];

export const Route = createFileRoute("/random-words")({
  component: RouteComponent,
  validateSearch: zodValidator(randomWordSearchParamsSchema),
  preloadStaleTime: 5_000,
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: async ({ deps }) => {
    const res = await fetch(
      `https://random-words-api.kushcreates.com/api?words=1&language=${deps.lang || "en"}`
    );
    const resJSON = await res.json();
    return { word: resJSON[0]?.word };
  },
});

function RouteComponent() {
  const { word } = Route.useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center bg-black p-4 m-4">
      <div className="bg-gray-800 p-2 rounded-md mb-4">
        {["en", "es", "fr", "zh"].map((lang) => (
          <Link
            key={lang}
            to="."
            search={{ lang: lang as LangType }}
            className="[&.active]:font-bold mx-2"
          >
            {lang}
          </Link>
        ))}
      </div>
      <h2 className="text-2xl font-bold">{word}</h2>
    </div>
  );
}

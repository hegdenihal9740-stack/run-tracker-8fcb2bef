import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HR Management Dashboard" },
      {
        name: "description",
        content:
          "Manage hiring, employee performance, payroll, and personnel records in one HR workspace.",
      },
      { property: "og:title", content: "HR Management Dashboard" },
      {
        property: "og:description",
        content:
          "Manage hiring, employee performance, payroll, and personnel records in one HR workspace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-dvh w-full overflow-hidden bg-background">
      <iframe
        className="block h-full w-full border-0"
        src="/manager/index.html"
        title="HR Management Dashboard"
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </main>
  );
}

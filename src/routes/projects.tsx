import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ramakrishna Vaddar" },
      {
        name: "description",
        content:
          "Selected web projects by Ramakrishna Vaddar: dashboards, storefronts and developer tools built with React and Node.js.",
      },
      { property: "og:title", content: "Projects — Ramakrishna Vaddar" },
      {
        property: "og:description",
        content: "Selected web projects built with React, TypeScript and Node.js.",
      },
      { property: "og:url", content: "/projects" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Insight Dashboard",
    year: "2026",
    summary:
      "Realtime analytics dashboard with streaming charts, saved views and role-based access for a 20-person sales team.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    role: "Lead developer",
  },
  {
    title: "Kirana Storefront",
    year: "2025",
    summary:
      "Mobile-first grocery storefront with offline cart, UPI checkout and delivery slot picker. Cut checkout drop-off by 28%.",
    stack: ["React", "Tailwind", "Express", "MongoDB"],
    role: "Full-stack developer",
  },
  {
    title: "DocuSearch",
    year: "2025",
    summary:
      "Internal document search with fuzzy matching, keyboard-first navigation and permission-aware indexing.",
    stack: ["React", "Node.js", "MySQL"],
    role: "Backend + UI",
  },
  {
    title: "Habit Loop",
    year: "2024",
    summary:
      "Habit tracker PWA with streak logic, weekly review flow and push reminders. 4.7 average store rating.",
    stack: ["React", "Vite", "IndexedDB"],
    role: "Solo project",
  },
];

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <p className="eyebrow">Portfolio</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A selection of work spanning product dashboards, commerce and internal tools. Each one
        shipped to real users.
      </p>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="surface-card flex flex-col p-7">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-2xl font-semibold">{p.title}</h2>
              <span className="font-display text-sm text-primary">{p.year}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.role}</p>
            <p className="mt-4 flex-1 text-muted-foreground">{p.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <Link to="/contact" className="btn-primary">
          Ask about a project
        </Link>
      </div>
    </div>
  );
}

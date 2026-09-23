import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ramakrishna Vaddar — Full-Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Full-stack developer specialising in React, TypeScript and Node.js. See projects, skills and how to get in touch.",
      },
      { property: "og:title", content: "Ramakrishna Vaddar — Full-Stack Developer" },
      {
        property: "og:description",
        content: "React, TypeScript and Node.js developer. Projects, resume and contact.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite", "Accessibility"] },
  { group: "Backend", items: ["Node.js", "REST APIs", "Auth & sessions", "Caching"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Schema design"] },
  { group: "Craft", items: ["Testing", "CI/CD", "Performance", "SEO"] },
];

const highlights = [
  { value: "3+", label: "Years building for the web" },
  { value: "15+", label: "Shipped projects" },
  { value: "98", label: "Average Lighthouse score" },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt=""
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:py-36">
          <p className="eyebrow">Full-stack developer · India</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
            I build web products that are fast, clear and{" "}
            <span className="text-primary">genuinely useful</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Hi, I'm Ramakrishna Vaddar. I design and ship interfaces with React and TypeScript, back
            them with reliable Node.js services, and care about the details users feel.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">
              View my work
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.label} className="surface-card p-6">
              <p className="font-display text-4xl font-bold text-primary">{h.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <p className="eyebrow">Skills</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What I work with</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.group} className="surface-card p-6">
              <h3 className="text-lg font-semibold">{s.group}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Have a project in mind?</h2>
            <p className="mt-2 text-muted-foreground">
              I'm open to freelance work and full-time roles.
            </p>
          </div>
          <Link to="/contact" className="btn-primary self-start">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}

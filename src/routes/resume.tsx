import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Ramakrishna Vaddar" },
      {
        name: "description",
        content:
          "Interactive resume of Ramakrishna Vaddar: experience, education, certifications and core skills in full-stack web development.",
      },
      { property: "og:title", content: "Resume — Ramakrishna Vaddar" },
      {
        property: "og:description",
        content: "Experience, education and skills of full-stack developer Ramakrishna Vaddar.",
      },
      { property: "og:url", content: "/resume" },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: Resume,
});

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2024 — Present",
    points: [
      "Designed and shipped React + Node.js applications for clients in retail and SaaS.",
      "Improved page load times by up to 40% through code splitting and image strategy.",
      "Owned delivery end to end: scoping, build, deployment and handover.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Product startup",
    period: "2023 — 2024",
    points: [
      "Built the component library used across three internal products.",
      "Added automated tests and CI checks, cutting regression bugs noticeably.",
      "Worked closely with design on accessible, responsive interfaces.",
    ],
  },
];

const education = [
  { title: "B.Tech, Computer Science", detail: "University · 2020 — 2024" },
  { title: "Full-Stack Web Development", detail: "Self-directed, project-based · ongoing" },
];

function Resume() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20">
      <p className="eyebrow">Curriculum vitae</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Resume</h1>
      <p className="mt-4 text-muted-foreground">
        Full-stack developer focused on React, TypeScript and Node.js, with a habit of shipping
        small, well-tested increments.
      </p>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 space-y-5">
          {experience.map((job) => (
            <div key={job.role + job.company} className="surface-card p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">
                  {job.role} · <span className="text-muted-foreground">{job.company}</span>
                </h3>
                <span className="font-display text-sm text-primary">{job.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Education & learning</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <div key={item.title} className="surface-card p-6">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link to="/projects" className="btn-ghost">
          See projects
        </Link>
        <Link to="/contact" className="btn-primary">
          Request full CV
        </Link>
      </div>
    </div>
  );
}

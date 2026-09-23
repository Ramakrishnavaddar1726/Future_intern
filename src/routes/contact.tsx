import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ramakrishna Vaddar" },
      {
        name: "description",
        content:
          "Get in touch with Ramakrishna Vaddar about freelance projects, full-time roles or collaborations.",
      },
      { property: "og:title", content: "Contact — Ramakrishna Vaddar" },
      {
        property: "og:description",
        content: "Send a message about freelance projects, roles or collaborations.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const EMAIL = "hello@example.com";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(1, "Add a short subject").max(120, "Subject is too long"),
  message: z.string().trim().min(10, "Tell me a little more (10+ characters)").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof values) => (value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const { name, email, subject, message } = result.data;
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Let's talk</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Freelance projects, full-time roles or a quick question — send a note and I'll reply within a
        couple of days.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={handleSubmit} noValidate className="surface-card p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" error={errors.name}>
              <input
                className="field-input"
                value={values.name}
                onChange={(e) => update("name")(e.target.value)}
                placeholder="Your name"
                maxLength={100}
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                className="field-input"
                type="email"
                value={values.email}
                onChange={(e) => update("email")(e.target.value)}
                placeholder="you@example.com"
                maxLength={255}
              />
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Subject" error={errors.subject}>
              <input
                className="field-input"
                value={values.subject}
                onChange={(e) => update("subject")(e.target.value)}
                placeholder="What's this about?"
                maxLength={120}
              />
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Message" error={errors.message}>
              <textarea
                className="field-input min-h-36 resize-y"
                value={values.message}
                onChange={(e) => update("message")(e.target.value)}
                placeholder="A few lines about your project or role…"
                maxLength={1000}
              />
            </Field>
          </div>
          <button type="submit" className="btn-primary mt-7">
            Send message
          </button>
          {sent && (
            <p className="mt-4 text-sm text-primary">
              Your email app should now be open with the message ready to send.
            </p>
          )}
        </form>

        <aside className="surface-card h-fit p-7">
          <h2 className="text-lg font-semibold">Direct</h2>
          <p className="mt-3 text-sm text-muted-foreground">Prefer email? Write to</p>
          <a href={`mailto:${EMAIL}`} className="mt-1 block font-medium text-primary">
            {EMAIL}
          </a>
          <h3 className="mt-7 text-lg font-semibold">Availability</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Open to new work · Remote or Bengaluru · Usually replies in 48 hours.
          </p>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

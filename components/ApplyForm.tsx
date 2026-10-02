"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { validate, type Application } from "@/lib/application";
import { earningsRanges, niches, site } from "@/lib/site";

const empty: Application = {
  name: "",
  email: "",
  instagram: "",
  tiktok: "",
  x: "",
  otherSocial: "",
  country: "",
  timezone: "",
  niche: "",
  earnings: "",
  ofLink: "",
  goals: "",
  isAdult: false,
  consent: false,
  website: "",
};

export default function ApplyForm() {
  const [form, setForm] = useState<Application>(empty);
  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) setForm((f) => (f.timezone ? f : { ...f, timezone: tz }));
  }, []);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const set = <K extends keyof Application>(k: K, v: Application[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k as string] || (errors.socials && ["instagram", "tiktok", "x", "otherSocial"].includes(k as string)))
      setErrors((e) => {
        const n = { ...e };
        delete n[k as string];
        delete n.socials;
        return n;
      });
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) {
      document.querySelector<HTMLElement>("[data-error]")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("done");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        if (json.errors) setErrors(json.errors);
        setMessage(json.error ?? "Please check the highlighted fields.");
        setStatus("error");
      }
    } catch {
      setMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-gold-3 bg-ink-2 p-10 text-center md:p-16">
        <p className="font-display text-6xl text-gold-gradient">Thank you.</p>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-mist">
          Your application has been received. We review every one personally and will reply to{" "}
          <span className="text-bone">{form.email}</span> within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-12">
      {/* honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set("website", e.target.value)} />
        </label>
      </div>

      <Fieldset n="01" title="About you">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full name or stage name" error={errors.name}>
            <input className="field" value={form.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" />
          </Field>
          <Field label="Email" error={errors.email}>
            <input type="email" className="field" value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
          </Field>
          <Field label="Country" error={errors.country}>
            <input className="field" value={form.country} onChange={(e) => set("country", e.target.value)} autoComplete="country-name" />
          </Field>
          <Field label="Time zone" hint="Detected automatically, so edit it if it's wrong">
            <input className="field" value={form.timezone} onChange={(e) => set("timezone", e.target.value)} />
          </Field>
        </div>
      </Fieldset>

      <Fieldset n="02" title="Your socials" note="At least one is required">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Instagram">
            <input className="field" placeholder="@handle" value={form.instagram} onChange={(e) => set("instagram", e.target.value)} />
          </Field>
          <Field label="TikTok">
            <input className="field" placeholder="@handle" value={form.tiktok} onChange={(e) => set("tiktok", e.target.value)} />
          </Field>
          <Field label="X (Twitter)">
            <input className="field" placeholder="@handle" value={form.x} onChange={(e) => set("x", e.target.value)} />
          </Field>
          <Field label="Other (Reddit, Fansly, etc.)">
            <input className="field" value={form.otherSocial} onChange={(e) => set("otherSocial", e.target.value)} />
          </Field>
          <div className="md:col-span-2">
            <Field label="Existing OnlyFans link" hint="Optional">
              <input className="field" placeholder="https://" value={form.ofLink} onChange={(e) => set("ofLink", e.target.value)} />
            </Field>
          </div>
        </div>
        {errors.socials && <ErrorText>{errors.socials}</ErrorText>}
      </Fieldset>

      <Fieldset n="03" title="Your business">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Content niche" error={errors.niche}>
            <select className="field" value={form.niche} onChange={(e) => set("niche", e.target.value)}>
              <option value="">Select…</option>
              {niches.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </Field>
          <Field label="Current monthly earnings" error={errors.earnings}>
            <select className="field" value={form.earnings} onChange={(e) => set("earnings", e.target.value)}>
              <option value="">Select…</option>
              {earningsRanges.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </Field>
          <div className="md:col-span-2">
            <Field label="What are your goals for the next 6–12 months?" error={errors.goals}>
              <textarea rows={5} className="field resize-y" value={form.goals} onChange={(e) => set("goals", e.target.value)} />
            </Field>
          </div>
        </div>
      </Fieldset>

      <Fieldset n="04" title="Confirm">
        <div className="space-y-4">
          <Check checked={form.isAdult} onChange={(v) => set("isAdult", v)} error={errors.isAdult}>
            I confirm I am <strong className="text-bone">18 years of age or older</strong> and will verify my identity
            and age before any partnership begins.
          </Check>
          <Check checked={form.consent} onChange={(v) => set("consent", v)} error={errors.consent}>
            I agree to {site.name}&apos;s{" "}
            <Link href="/privacy" className="text-gold underline underline-offset-4" target="_blank">
              Privacy Policy
            </Link>{" "}
            and consent to being contacted about my application.
          </Check>
        </div>
      </Fieldset>

      {status === "error" && (
        <p role="alert" className="border border-red-400/40 bg-red-500/5 p-4 text-sm text-red-300">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gold py-5 text-[0.8rem] uppercase tracking-[0.25em] text-ink transition-colors hover:bg-gold-2 disabled:opacity-60 md:w-auto md:px-14"
      >
        {status === "sending" ? "Submitting…" : "Submit application →"}
      </button>
    </form>
  );
}

function Fieldset({ n, title, note, children }: { n: string; title: string; note?: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-6 flex w-full items-baseline gap-4 border-b border-line pb-4">
        <span className="font-display text-gold">{n}</span>
        <span className="font-display text-2xl">{title}</span>
        {note && <span className="ml-auto text-xs text-mist">{note}</span>}
      </legend>
      {children}
    </fieldset>
  );
}

function Field({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block" {...(error ? { "data-error": true } : {})}>
      <span className="mb-2 flex justify-between text-[0.7rem] uppercase tracking-[0.18em] text-mist">
        {label}
        {hint && <span className="normal-case tracking-normal text-mist/60">{hint}</span>}
      </span>
      <div className={error ? "[&_.field]:border-red-400/70" : ""}>{children}</div>
      {error && <ErrorText>{error}</ErrorText>}
    </label>
  );
}

function Check({
  checked,
  onChange,
  error,
  children,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div {...(error ? { "data-error": true } : {})}>
      <label className="flex cursor-pointer gap-4 text-sm leading-relaxed text-mist">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[#c9a86a]"
        />
        <span>{children}</span>
      </label>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-xs text-red-300">{children}</p>;
}

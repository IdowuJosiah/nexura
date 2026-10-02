import Image from "next/image";
import Link from "next/link";
import { caseStudies, caseStudiesAreExamples, faqs, partners, stats, statsArePlaceholder, tiers } from "@/lib/site";
import { ExampleBadge } from "./ui";

export function StatsBand() {
  return (
    <div className="border-y border-line bg-ink-2">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-5 py-10 text-center md:py-14 ${i % 2 === 1 ? "border-l border-line" : ""} ${
              i >= 2 ? "border-t border-line md:border-t-0" : ""
            } ${i === 2 ? "md:border-l" : ""}`}
          >
            <p className="font-display text-4xl text-gold-gradient md:text-6xl">{s.value}</p>
            <p className="mt-3 text-[0.7rem] uppercase tracking-[0.22em] text-mist">{s.label}</p>
          </div>
        ))}
      </div>
      {statsArePlaceholder && (
        <p className="border-t border-line py-3 text-center text-[0.65rem] uppercase tracking-[0.2em] text-mist/60">
          Placeholder figures, to be replaced with verified results
        </p>
      )}
    </div>
  );
}

export function PartnerLogo({ p, size = "md" }: { p: (typeof partners)[number]; size?: "md" | "lg" }) {
  return (
    <div
      className={`flex items-center justify-center bg-bone ${
        size === "lg" ? "h-40 w-full px-10 md:h-48" : "h-24 w-full px-6 md:h-28"
      }`}
    >
      <Image
        src={p.logo.src}
        width={p.logo.width}
        height={p.logo.height}
        alt={`${p.name} logo`}
        sizes="240px"
        className={`w-auto object-contain mix-blend-multiply ${size === "lg" ? "max-h-28 max-w-[240px]" : "max-h-14 max-w-[150px]"}`}
      />
    </div>
  );
}

export function PartnersBand({ title = "Brands we partner with" }: { title?: string }) {
  if (!partners.length) return null;
  return (
    <section className="border-b border-line py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow text-center">{title}</p>
        <ul className="mt-8 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {partners.map((p) => (
            <li key={p.slug}>
              <Link href={`/brands#${p.slug}`} className="block transition-opacity hover:opacity-85" title={p.name}>
                <PartnerLogo p={p} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PartnerDetails() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {partners.map((p) => (
        <article id={p.slug} key={p.slug} className="flex scroll-mt-28 flex-col border border-line bg-ink-2">
          <PartnerLogo p={p} size="lg" />
          <div className="flex flex-1 flex-col p-7 md:p-9">
            <p className="text-xs uppercase tracking-[0.2em] text-mist">
              {p.category} · {p.location}
            </p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">{p.name}</h3>
            <p className="mt-4 leading-relaxed text-mist">{p.about}</p>
            <div className="hairline my-7" />
            <p className="eyebrow">How we partner</p>
            <ul className="mt-5 space-y-3">
              {p.how.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-bone/85">
                  <span className="mt-[0.45rem] h-1 w-1 shrink-0 rotate-45 bg-gold" />
                  {h}
                </li>
              ))}
            </ul>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block pt-8 text-sm uppercase tracking-[0.2em] text-gold hover:text-gold-2"
            >
              Visit {p.name} ↗
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CaseStudyCard({ c, full = false }: { c: (typeof caseStudies)[number]; full?: boolean }) {
  return (
    <article className="group relative flex flex-col border border-line bg-ink-2 p-7 transition-colors hover:border-gold-3 md:p-9">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-2xl">Creator {c.id}</p>
        {caseStudiesAreExamples && <ExampleBadge />}
      </div>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-mist">
        {c.niche} · {c.region}
      </p>
      <div className="hairline my-7" />
      <div className="flex items-end gap-4">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-mist">Before</p>
          <p className="mt-1 font-display text-3xl text-mist">{c.before}</p>
        </div>
        <span className="pb-2 text-gold" aria-hidden="true">
          ⟶
        </span>
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">After {c.months} months</p>
          <p className="mt-1 font-display text-5xl text-gold-gradient">{c.after}</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-mist">Monthly revenue</p>
      {full && (
        <>
          <p className="mt-6 text-sm text-mist">
            Subscribers: <span className="text-bone">{c.subsBefore}</span> →{" "}
            <span className="text-gold">{c.subsAfter}</span>
          </p>
          <p className="mt-5 leading-relaxed text-bone/85">{c.story}</p>
        </>
      )}
      <div className="mt-auto flex flex-wrap gap-2 pt-7">
        {c.focus.map((f) => (
          <span key={f} className="border border-line px-3 py-1 text-[0.68rem] tracking-wide text-mist">
            {f}
          </span>
        ))}
      </div>
    </article>
  );
}

export function TiersGrid() {
  return (
    <div className="grid gap-px border border-line bg-line md:grid-cols-3">
      {tiers.map((t) => (
        <div key={t.name} className={`relative flex flex-col p-8 md:p-10 ${t.featured ? "bg-ink-3" : "bg-ink-2"}`}>
          {t.featured && (
            <span className="absolute top-0 right-0 bg-gold px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-ink">
              Most chosen
            </span>
          )}
          <p className="eyebrow">{t.for}</p>
          <h3 className="mt-4 font-display text-4xl">{t.name}</h3>
          <div className="hairline my-7" />
          <ul className="space-y-3.5">
            {t.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-bone/85">
                <span className="mt-[0.45rem] h-1 w-1 shrink-0 rotate-45 bg-gold" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/apply"
            className={`mt-10 block py-3.5 text-center text-[0.72rem] uppercase tracking-[0.22em] transition-colors ${
              t.featured ? "bg-gold text-ink hover:bg-gold-2" : "border border-line hover:border-gold hover:text-gold"
            }`}
          >
            Apply for {t.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export function FAQList({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="border-t border-line">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 md:py-7">
            <span className="font-display text-xl md:text-2xl">{f.q}</span>
            <span className="faq-plus text-2xl font-light text-gold transition-transform duration-300">+</span>
          </summary>
          <p className="max-w-3xl pb-7 leading-relaxed text-mist">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

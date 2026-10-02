import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero } from "@/components/ui";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Journal",
  description: "Growth strategy, marketing and business advice for creators from the Nexura team.",
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function BlogPage() {
  const [first, ...rest] = posts;
  return (
    <>
      <PageHero eyebrow="Journal" title="Notes on building a creator business." />
      <section className="py-20 md:py-28">
        <Container>
          <Link href={`/blog/${first.slug}`} className="group block border border-line bg-ink-2 p-8 transition-colors hover:border-gold-3 md:p-14">
            <p className="eyebrow">Featured · {fmt(first.date)}</p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-light leading-tight transition-colors group-hover:text-gold-2 md:text-5xl">
              {first.title}
            </h2>
            <p className="mt-5 max-w-2xl text-mist">{first.excerpt}</p>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-gold">Read article →</p>
          </Link>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col border border-line p-8 transition-colors hover:border-gold-3">
                <p className="text-xs uppercase tracking-[0.2em] text-mist">
                  {fmt(p.date)} · {p.readTime}
                </p>
                <h3 className="mt-5 font-display text-3xl leading-tight transition-colors group-hover:text-gold-2">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mist">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

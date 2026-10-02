import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, CTA } from "@/components/ui";
import { posts } from "@/lib/posts";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="pt-40 pb-24 md:pt-48">
        <Container className="max-w-3xl">
          <Link href="/blog" className="text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-2">
            ← Journal
          </Link>
          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-mist">
            {fmt(post.date)} · {post.readTime}
          </p>
          <h1 className="mt-5 font-display text-4xl font-light leading-[1.08] md:text-6xl">{post.title}</h1>
          <div className="hairline my-12" />
          <div className="space-y-6 text-lg leading-relaxed text-bone/85">
            {post.body.map((b, i) => (
              <div key={i}>
                {b.h && <h2 className="mt-10 mb-4 font-display text-3xl text-bone">{b.h}</h2>}
                <p>{b.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </article>
      <CTA />
    </>
  );
}

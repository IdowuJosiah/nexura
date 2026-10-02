import type { Metadata } from "next";
import { Container, CTA, PageHero, SectionHeading } from "@/components/ui";
import { TiersGrid } from "@/components/blocks";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Full management, marketing & traffic, 24/7 fan engagement and content & branding for creators.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything a creator business needs, <em className="text-gold-gradient">under one roof</em>.
          </>
        }
        intro="Pick the services you need now and add more as you grow. Every partnership is built around your goals and your boundaries."
      />

      <section className="py-12 md:py-20">
        <Container>
          {services.map((s, i) => (
            <article
              id={s.slug}
              key={s.slug}
              className="grid scroll-mt-28 gap-10 border-b border-line py-16 last:border-b-0 md:grid-cols-[120px_1fr_1fr] md:py-20"
            >
              <p className="font-display text-6xl text-gold-gradient md:text-7xl">{s.kicker}</p>
              <div>
                <h2 className="font-display text-4xl font-light md:text-5xl">{s.title}</h2>
                <p className="mt-6 max-w-md leading-relaxed text-mist">{s.summary}</p>
              </div>
              <ul className={`space-y-4 ${i % 2 ? "md:order-none" : ""}`}>
                {s.points.map((p) => (
                  <li key={p} className="flex gap-4 border-b border-line pb-4 text-bone/90">
                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 rotate-45 bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>

      <section className="border-t border-line bg-ink-2 py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Packages"
            title="Choose your level."
            intro="All packages run on a revenue-share model. Exact terms are agreed in writing on your strategy call."
          />
          <div className="mt-14">
            <TiersGrid />
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

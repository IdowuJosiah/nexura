import type { Metadata } from "next";
import { Container, CTA, PageHero, SectionHeading } from "@/components/ui";
import { process, site, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Nexura is a Florida-based, discreet, results-driven creator management agency built on ownership, transparency and consent.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nexura"
        title={
          <>
            We build creator businesses that <em className="text-gold-gradient">last</em>.
          </>
        }
      />

      <section className="py-24 md:py-32">
        <Container className="grid gap-14 md:grid-cols-2">
          <p className="font-display text-3xl font-light leading-snug md:text-4xl">
            Talent gets attention. Strategy turns it into a business. Nexura exists to give creators the team, the
            systems and the discipline that top brands are built on.
          </p>
          <div className="space-y-6 leading-relaxed text-mist">
            <p>
              Most creators are running a full company alone: content, marketing, customer service, pricing and
              analytics. That&apos;s where growth stalls and burnout starts.
            </p>
            <p>
              We take the operational weight off your shoulders. Our marketers, chat specialists, editors and
              account managers work as an extension of you: in your voice, within your boundaries, toward your goals.
            </p>
            <p>
              We&apos;re based in {site.location}, and we partner with creators around the world.
            </p>
            <p>
              We&apos;re selective about who we partner with, because we only succeed when you do. That&apos;s why
              we work on revenue share and report everything transparently, every month.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-ink-2 py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Principles" title="What we stand for." />
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="bg-ink-2 p-8 md:p-10">
                <p className="font-display text-sm text-gold">0{i + 1}</p>
                <h3 className="mt-8 font-display text-3xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Working together" title="How partnerships begin." />
          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.step} className="border-t border-gold-3/60 pt-8">
                <p className="font-display text-sm text-gold">0{i + 1}</p>
                <h3 className="mt-3 font-display text-3xl">{p.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{p.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CTA />
    </>
  );
}

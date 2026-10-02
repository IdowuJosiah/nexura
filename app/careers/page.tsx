import type { Metadata } from "next";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { jobs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Nexura: remote roles for chat specialists, marketers, editors and account managers.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build the agency <em className="text-gold-gradient">creators trust</em>.
          </>
        }
        intro="We're a Florida-based, remote-first team of marketers, chat specialists, editors and account managers. If you're sharp, discreet and results-driven, we want to hear from you."
      />
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Open roles" title="Current openings." />
          <div className="mt-12 border-t border-line">
            {jobs.map((j) => (
              <a
                key={j.title}
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Application: ${j.title}`)}`}
                className="group grid gap-3 border-b border-line py-8 transition-colors hover:bg-ink-2 md:grid-cols-[1.2fr_1fr_2fr_auto] md:items-center md:gap-8 md:px-4"
              >
                <h3 className="font-display text-3xl">{j.title}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">{j.type}</p>
                <p className="text-sm leading-relaxed text-mist">{j.text}</p>
                <span className="text-sm uppercase tracking-[0.2em] text-gold transition-transform group-hover:translate-x-1">
                  Apply →
                </span>
              </a>
            ))}
          </div>
          <p className="mt-10 max-w-xl text-sm text-mist">
            Don&apos;t see your role? Email <span className="text-gold">{site.email}</span> with your CV and a short note
            about what you&apos;d bring.
          </p>
        </Container>
      </section>
    </>
  );
}

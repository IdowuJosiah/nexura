import type { Metadata } from "next";
import { Container, CTA, PageHero } from "@/components/ui";
import { CaseStudyCard, StatsBand } from "@/components/blocks";
import { caseStudies, caseStudiesAreExamples } from "@/lib/site";

export const metadata: Metadata = {
  title: "Results",
  description: "Anonymised creator case studies showing revenue and subscriber growth with Nexura.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title={
          <>
            Private identities. <em className="text-gold-gradient">Public results.</em>
          </>
        }
        intro="We never reveal who we work with. Each case study is anonymised and shared with the creator's written consent."
      />
      <StatsBand />
      <section className="py-24 md:py-32">
        <Container>
          {caseStudiesAreExamples && (
            <p className="mb-10 max-w-2xl border-l-2 border-gold pl-5 text-sm leading-relaxed text-mist">
              The case studies below are illustrative examples of the kind of growth our services target. They will be
              replaced with verified creator results.
            </p>
          )}
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <CaseStudyCard key={c.id} c={c} full />
            ))}
          </div>
        </Container>
      </section>
      <CTA title={<>Your numbers could be <em className="text-gold-gradient">next</em>.</>} />
    </>
  );
}

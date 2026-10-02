import type { Metadata } from "next";
import { Container, CTA, PageHero } from "@/components/ui";
import { FAQList } from "@/components/blocks";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about ownership, pricing, privacy, chatting and how to apply to Nexura.",
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow="FAQ" title="Questions, answered." intro={`Can't find what you need? Email us at ${site.email}.`} />
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl">
          <FAQList />
        </Container>
      </section>
      <CTA />
    </>
  );
}

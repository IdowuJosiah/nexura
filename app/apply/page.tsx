import type { Metadata } from "next";
import ApplyForm from "@/components/ApplyForm";
import { Container, Glow } from "@/components/ui";
import { process } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply to join Nexura. Applications are reviewed personally within 48 hours.",
};

export default function ApplyPage() {
  return (
    <section className="grain relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <Glow />
      <Container className="relative grid gap-16 lg:grid-cols-[1fr_1.7fr]">
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Apply</p>
          <h1 className="mt-6 font-display text-5xl font-light leading-[1.02] md:text-6xl">
            Let&apos;s build your <em className="text-gold-gradient">next chapter</em>.
          </h1>
          <p className="mt-6 leading-relaxed text-mist">
            It takes about three minutes. Everything you share stays confidential, and we reply within 48 hours.
          </p>
          <ol className="mt-10 space-y-5 border-l border-line pl-6">
            {process.map((p, i) => (
              <li key={p.step} className="relative">
                <span className="absolute top-2 -left-[27.5px] h-1.5 w-1.5 rotate-45 bg-gold" />
                <p className="font-display text-xl">
                  <span className="mr-2 text-sm text-gold">0{i + 1}</span>
                  {p.step}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-xs uppercase tracking-[0.18em] text-mist/70">Verified adults (18+) only</p>
        </aside>
        <div>
          <ApplyForm />
        </div>
      </Container>
    </section>
  );
}

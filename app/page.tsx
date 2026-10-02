import Link from "next/link";
import { ButtonLink, Container, CTA, Glow, SectionHeading } from "@/components/ui";
import { CaseStudyCard, FAQList, PartnersBand, StatsBand, TiersGrid } from "@/components/blocks";
import { caseStudies, process, services, site, values } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
        <Glow />
        <HeroOrnament />
        <Container className="relative">
          <p className="eyebrow rise">Creator Management Agency</p>
          <h1
            className="rise mt-8 max-w-5xl font-display text-[3.2rem] font-light leading-[0.98] sm:text-7xl md:text-8xl lg:text-[7.5rem]"
            style={{ animationDelay: "100ms" }}
          >
            {site.tagline.split(" ").slice(0, -1).join(" ")}{" "}
            <em className="text-gold-gradient">{site.tagline.split(" ").slice(-1)}</em>
          </h1>
          <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-mist md:text-xl" style={{ animationDelay: "200ms" }}>
            We turn talented creators into premium brands. Strategy, traffic, fan engagement and content,
            handled by one discreet team so you can focus on creating.
          </p>
          <div className="rise mt-12 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "300ms" }}>
            <ButtonLink href="/apply">Apply as a creator</ButtonLink>
            <ButtonLink href="/results" variant="outline">
              See results
            </ButtonLink>
          </div>
        </Container>
      </section>

      <StatsBand />
      <PartnersBand />

      {/* SERVICES */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  One team. <em className="text-gold-gradient">Every lever</em> of growth.
                </>
              }
            />
            <Link href="/services" className="text-sm uppercase tracking-[0.2em] text-gold hover:text-gold-2">
              All services →
            </Link>
          </div>
          <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                href={`/services#${s.slug}`}
                key={s.slug}
                className="group flex flex-col bg-ink p-8 transition-colors hover:bg-ink-3 md:min-h-[340px]"
              >
                <span className="font-display text-lg text-gold">{s.kicker}</span>
                <h3 className="mt-14 font-display text-3xl leading-tight">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mist">{s.summary}</p>
                <span className="mt-auto pt-8 text-gold opacity-0 transition-opacity group-hover:opacity-100">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* RESULTS PREVIEW */}
      <section className="border-y border-line bg-ink-2 py-24 md:py-36">
        <Container>
          <SectionHeading
            eyebrow="Results"
            title={
              <>
                Growth you can <em className="text-gold-gradient">measure</em>.
              </>
            }
            intro="Every creator's identity stays private. Their numbers speak for themselves."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <CaseStudyCard key={c.id} c={c} />
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink href="/results" variant="outline">
              Read the case studies
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-36">
        <Container>
          <SectionHeading eyebrow="How it works" title="From application to scale in four steps." />
          <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
            {process.map((p, i) => (
              <li key={p.step} className="relative border-t border-gold-3/60 pt-8">
                <span className="absolute -top-[5px] left-0 h-2 w-2 rotate-45 bg-gold" />
                <p className="font-display text-sm text-gold">0{i + 1}</p>
                <h3 className="mt-3 font-display text-3xl">{p.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{p.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* PACKAGES */}
      <section className="border-t border-line bg-ink-2 py-24 md:py-36">
        <Container>
          <SectionHeading
            eyebrow="Packages"
            title="Tailored to where you are, and where you're going."
            intro="Revenue-share partnerships, with terms agreed in writing on your strategy call."
          />
          <div className="mt-16">
            <TiersGrid />
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-36">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            eyebrow="Our standard"
            title={
              <>
                Discretion is not a feature. <em className="text-gold-gradient">It&apos;s the foundation.</em>
              </>
            }
          />
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="bg-ink p-8">
                <h3 className="font-display text-2xl text-gold-2">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line py-24 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading eyebrow="Questions" title="Before you apply." />
            <Link href="/faq" className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-gold hover:text-gold-2">
              All FAQs →
            </Link>
          </div>
          <FAQList limit={4} />
        </Container>
      </section>

      <CTA />
    </>
  );
}

function HeroOrnament() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 right-[-18%] hidden h-[900px] w-[900px] -translate-y-1/2 opacity-[0.22] md:block"
      viewBox="0 0 400 400"
    >
      <defs>
        <linearGradient id="orn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e3c993" />
          <stop offset="1" stopColor="#8f7442" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={200 - (40 + i * 26)}
          y={200 - (40 + i * 26)}
          width={(40 + i * 26) * 2}
          height={(40 + i * 26) * 2}
          fill="none"
          stroke="url(#orn)"
          strokeWidth="0.5"
          transform="rotate(45 200 200)"
        />
      ))}
      <circle cx="200" cy="200" r="190" fill="none" stroke="url(#orn)" strokeWidth="0.4" />
    </svg>
  );
}

import Link from "next/link";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 md:px-8 ${className}`}>{children}</div>;
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.75rem] uppercase tracking-[0.22em] transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-gold text-ink hover:bg-gold-2"
      : "border border-line text-bone hover:border-gold hover:text-gold";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 font-display text-4xl font-light leading-[1.08] md:text-6xl">{title}</h2>
      {intro && <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: string }) {
  return (
    <section className="grain relative overflow-hidden border-b border-line pt-40 pb-20 md:pt-48 md:pb-28">
      <Glow />
      <Container className="relative">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1 className="rise mt-6 max-w-4xl font-display text-5xl font-light leading-[1.02] md:text-7xl" style={{ animationDelay: "80ms" }}>
          {title}
        </h1>
        {intro && (
          <p className="rise mt-8 max-w-2xl text-lg leading-relaxed text-mist" style={{ animationDelay: "160ms" }}>
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}

export function Glow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-gold-3/10 blur-[120px]" />
    </div>
  );
}

export function ExampleBadge({ children = "Illustrative example" }: { children?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-gold-3/60 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-gold/90">
      <span className="h-1 w-1 rounded-full bg-gold" />
      {children}
    </span>
  );
}

export function CTA({
  title = (
    <>
      Ready to build something <em className="text-gold-gradient">extraordinary</em>?
    </>
  ),
  text = "Applications are reviewed personally. If we're a fit, you'll hear from us within 48 hours.",
}: {
  title?: React.ReactNode;
  text?: string;
}) {
  return (
    <section className="grain relative overflow-hidden border-t border-line py-28 md:py-36">
      <Glow />
      <Container className="relative text-center">
        <p className="eyebrow">Limited onboarding each month</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-light leading-[1.05] md:text-7xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-mist">{text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/apply">Apply to join</ButtonLink>
          <ButtonLink href="/brands" variant="outline">
            Partner with us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "./ui";

export default function Legal({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { h: string; p: string[] }[];
}) {
  return (
    <section className="pt-40 pb-24 md:pt-48">
      <Container className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-6 font-display text-5xl font-light md:text-6xl">{title}</h1>
        <p className="mt-4 text-sm text-mist">Last updated: {updated}</p>
        <p className="mt-8 border-l-2 border-gold pl-5 text-sm text-mist">
          This is a starter template, not legal advice. Have it reviewed by a qualified lawyer before launch.
        </p>
        <div className="hairline my-12" />
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl text-gold-2">{s.h}</h2>
              {s.p.map((t, i) => (
                <p key={i} className="mt-4 leading-relaxed text-bone/80">
                  {t}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

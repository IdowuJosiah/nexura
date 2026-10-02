import type { Metadata } from "next";
import { ButtonLink, Container, PageHero, SectionHeading } from "@/components/ui";
import { PartnerDetails, PartnersBand, StatsBand } from "@/components/blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Brands",
  description: "Partner with Nexura creators for sponsored content, product launches and collaborations.",
};

const offers = [
  { title: "Sponsored content", text: "Native, creator-led content for brands in fashion, beauty, fitness, lifestyle and tech." },
  { title: "Product launches", text: "Coordinated multi-creator campaigns that create real momentum on launch day." },
  { title: "Creator collaborations", text: "Cross-promotion and co-created content between creators and platforms." },
  { title: "Long-term ambassadors", text: "Ongoing partnerships with creators whose audience matches yours." },
];

const why = [
  { k: "Vetted roster", v: "Verified adult creators with engaged, loyal audiences." },
  { k: "One point of contact", v: "We handle briefs, scheduling, approvals and reporting." },
  { k: "Brand-safe process", v: "Clear guidelines, contracts and sign-off before anything goes live." },
  { k: "Reporting", v: "Reach, engagement and conversion data after every campaign." },
];

export default function BrandsPage() {
  const mail = `mailto:${site.email}?subject=${encodeURIComponent("Brand partnership enquiry")}`;
  return (
    <>
      <PageHero
        eyebrow="For brands & partners"
        title={
          <>
            Reach audiences that <em className="text-gold-gradient">actually listen</em>.
          </>
        }
        intro="Our creators have built direct, paying relationships with their fans. We connect the right brands with the right creators, and manage everything in between."
      />
      <PartnersBand title="Brands we currently partner with" />
      <StatsBand />

      <section className="border-b border-line py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Current partners"
            title={
              <>
                Miami brands we <em className="text-gold-gradient">grow with</em>.
              </>
            }
            intro="Every partner is matched with creators whose audience fits the product, and every campaign is clearly disclosed."
          />
          <div className="mt-14">
            <PartnerDetails />
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Partnership formats" title="Ways to work together." />
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
            {offers.map((o, i) => (
              <div key={o.title} className="bg-ink p-8 md:p-12">
                <p className="font-display text-sm text-gold">0{i + 1}</p>
                <h3 className="mt-6 font-display text-3xl md:text-4xl">{o.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-mist">{o.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-ink-2 py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Why Nexura" title="Simple for you. Effective for your brand." />
          <dl className="border-t border-line">
            {why.map((w) => (
              <div key={w.k} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[200px_1fr]">
                <dt className="font-display text-xl text-gold-2">{w.k}</dt>
                <dd className="text-mist">{w.v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-28 md:py-36">
        <Container className="text-center">
          <p className="eyebrow">Start a conversation</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-light leading-[1.05] md:text-6xl">
            Tell us about your brand and campaign goals.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-mist">
            Send a short brief to <span className="text-gold">{site.email}</span>. We reply within two business days.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href={mail}
              className="inline-flex items-center gap-3 bg-gold px-7 py-4 text-[0.75rem] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-2"
            >
              Email our partnerships team <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-6">
            <ButtonLink href="/results" variant="outline">
              View results
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

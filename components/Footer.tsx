import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

const cols = [
  {
    title: "Agency",
    links: [
      { href: "/services", label: "Services" },
      { href: "/results", label: "Results" },
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Work with us",
    links: [
      { href: "/apply", label: "Apply as a creator" },
      { href: "/brands", label: "Brand partnerships" },
      { href: "/faq", label: "FAQ" },
      { href: "/blog", label: "Journal" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
    ],
  },
];

export default function Footer() {
  const socials = Object.entries(site.socials).filter(([, v]) => v);
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)] md:px-8">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-mist">{site.description}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-mist">Based in {site.location}</p>
          <a href={`mailto:${site.email}`} className="mt-2 inline-block text-sm text-gold hover:text-gold-2">
            {site.email}
          </a>
          {socials.length > 0 && (
            <div className="mt-4 flex gap-4 text-sm text-mist">
              {socials.map(([k, v]) => (
                <a key={k} href={v} className="capitalize hover:text-gold" target="_blank" rel="noreferrer">
                  {k}
                </a>
              ))}
            </div>
          )}
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="eyebrow mb-5">{c.title}</p>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-mist transition-colors hover:text-bone">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-mist/70 md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>We work exclusively with verified adult creators (18+).</p>
        </div>
      </div>
    </footer>
  );
}

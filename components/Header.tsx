"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-[0.8rem] uppercase tracking-[0.18em] transition-colors hover:text-gold-2 ${
                pathname.startsWith(n.href) ? "text-gold" : "text-mist"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="border border-gold px-5 py-2.5 text-[0.75rem] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Apply Now
          </Link>
        </nav>
        <button
          className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`absolute h-px w-6 bg-bone transition-transform ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-px w-6 bg-bone transition-transform ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-20 bottom-0 bg-ink lg:hidden">
          <nav className="flex flex-col px-6 pt-8" aria-label="Mobile">
            {[...nav, { href: "/careers", label: "Careers" }].map((n) => (
              <Link key={n.href} href={n.href} className="border-b border-line py-5 font-display text-3xl text-bone">
                {n.label}
              </Link>
            ))}
            <Link href="/apply" className="mt-10 bg-gold py-4 text-center text-sm uppercase tracking-[0.2em] text-ink">
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

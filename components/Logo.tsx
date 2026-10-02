import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Nexura home" className={`group inline-flex items-center gap-3 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="nx-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e3c993" />
            <stop offset="1" stopColor="#8f7442" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="38" height="38" fill="none" stroke="url(#nx-g)" strokeWidth="1.2" transform="rotate(45 20 20) scale(.72) translate(7.8 7.8)" />
        <path d="M13 28V12l14 16V12" fill="none" stroke="url(#nx-g)" strokeWidth="1.6" strokeLinecap="square" />
      </svg>
      <span className="font-display text-[1.55rem] leading-none tracking-[0.28em] text-bone transition-colors group-hover:text-gold-2">
        NEXURA
      </span>
    </Link>
  );
}

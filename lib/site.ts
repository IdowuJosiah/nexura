// ─────────────────────────────────────────────────────────────
// Nexura — site content. Edit this file to update copy site-wide.
// Anything marked EXAMPLE / PLACEHOLDER should be replaced with
// real, verifiable figures before you promote the site.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Nexura",
  tagline: "Built for the top 1%.",
  description:
    "Nexura is a full-service creator management agency. We handle growth, marketing, fan engagement and brand strategy so creators can focus on creating.",
  email: "contactnexura@gmail.com",
  location: "Florida, USA",
  url: "https://nexura.vercel.app", // update when you connect a domain
  // Add handles when ready; empty values are hidden automatically.
  socials: { instagram: "", x: "", telegram: "" },
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/brands", label: "For Brands" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/faq", label: "FAQ" },
];

// PLACEHOLDER stats — replace with real numbers.
export const stats = [
  { value: "50+", label: "Creators managed" },
  { value: "$5M+", label: "Creator earnings generated" },
  { value: "4.2×", label: "Average revenue growth" },
  { value: "24/7", label: "Fan engagement coverage" },
];
export const statsArePlaceholder = true;

export const services = [
  {
    slug: "management",
    title: "Full Management",
    kicker: "01",
    summary:
      "A dedicated account manager who owns your strategy, pricing, posting calendar and growth targets, end to end.",
    points: [
      "Dedicated account manager & weekly check-ins",
      "Pricing, bundles & subscription strategy",
      "Content calendar and posting schedule",
      "Monthly performance reports",
    ],
  },
  {
    slug: "marketing",
    title: "Marketing & Traffic",
    kicker: "02",
    summary:
      "Consistent, compliant traffic from the platforms that convert: TikTok, Instagram, Reddit and X.",
    points: [
      "Short-form strategy for TikTok & Reels",
      "Reddit and X growth playbooks",
      "Cross-promotion & collaboration network",
      "Link-in-bio and funnel optimisation",
    ],
  },
  {
    slug: "chatting",
    title: "Chatting & Fan Engagement",
    kicker: "03",
    summary:
      "A trained team that keeps your fans engaged around the clock, in your voice, under guidelines you approve.",
    points: [
      "24/7 shift coverage across time zones",
      "Voice & boundary guide written with you",
      "Retention and re-engagement campaigns",
      "Quality-checked conversations",
    ],
  },
  {
    slug: "content",
    title: "Content & Branding",
    kicker: "04",
    summary:
      "Shoot planning, editing and a personal brand that stands apart, so every post builds long-term value.",
    points: [
      "Personal brand & positioning",
      "Shoot planning and shot lists",
      "Editing, captions and thumbnails",
      "Trend research and content ideas",
    ],
  },
];

export const tiers = [
  {
    name: "Growth",
    for: "Creators building momentum",
    features: [
      "Marketing & traffic",
      "Content calendar",
      "Monthly strategy call",
      "Performance reporting",
    ],
  },
  {
    name: "Signature",
    for: "Established creators ready to scale",
    featured: true,
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "24/7 chatting team",
      "Pricing & PPV strategy",
      "Weekly check-ins",
    ],
  },
  {
    name: "Elite",
    for: "Top earners & multi-platform brands",
    features: [
      "Everything in Signature",
      "Content & branding team",
      "Brand partnership deals",
      "Priority support line",
      "Custom growth roadmap",
    ],
  },
];

// EXAMPLE case studies — illustrative only. Replace with real, anonymised results.
export const caseStudiesAreExamples = true;
export const caseStudies = [
  {
    id: "A",
    niche: "Fitness & lifestyle",
    region: "United States",
    before: "$2,400",
    after: "$21,000",
    months: 5,
    subsBefore: "380",
    subsAfter: "3,100",
    focus: ["Marketing & traffic", "Chatting team", "Pricing strategy"],
    story:
      "Strong social following but almost no conversion. We rebuilt the funnel from TikTok to profile, introduced tiered bundles and added 24/7 chat coverage.",
  },
  {
    id: "B",
    niche: "Cosplay & gaming",
    region: "United Kingdom",
    before: "$900",
    after: "$12,500",
    months: 4,
    subsBefore: "150",
    subsAfter: "1,900",
    focus: ["Content & branding", "Reddit growth"],
    story:
      "A great niche without a clear identity. We sharpened the brand, planned themed monthly drops and built a Reddit-first traffic engine.",
  },
  {
    id: "C",
    niche: "Glamour & fashion",
    region: "Canada",
    before: "$8,000",
    after: "$46,000",
    months: 7,
    subsBefore: "1,200",
    subsAfter: "6,800",
    focus: ["Full management", "Brand partnerships"],
    story:
      "Already successful, but capped by time. Full management freed her to create while we scaled retention, PPV strategy and partnerships.",
  },
];

export const process = [
  { step: "Apply", text: "Tell us about you, your goals and where you are today. It takes three minutes." },
  { step: "Strategy call", text: "If we're a fit, we review your accounts together and map your growth plan." },
  { step: "Onboard", text: "Clear agreement, voice guide and boundaries. Your content stays yours." },
  { step: "Scale", text: "We execute daily and report monthly. You create; we handle the rest." },
];

export const values = [
  { title: "Discretion", text: "Your identity, data and earnings are handled with strict confidentiality." },
  { title: "Ownership", text: "You keep full ownership of your accounts and content, always." },
  { title: "Transparency", text: "Clear contracts, clear reporting. No hidden fees, no lock-in traps." },
  { title: "Consent", text: "We work only with verified adults (18+), on boundaries you set." },
];

export const faqs = [
  {
    q: "Who can apply?",
    a: "Any verified adult creator aged 18 or over. You don't need a large following; we look at potential, consistency and goals.",
  },
  {
    q: "Do I keep ownership of my account and content?",
    a: "Yes. You keep full ownership of your accounts, content and personal brand. We work as your management partner, never as an owner.",
  },
  {
    q: "How does pricing work?",
    a: "We work on a revenue-share model tailored to the package and services you need. We walk through exact terms on your strategy call, in writing, before anything is signed.",
  },
  {
    q: "Will anyone know I work with an agency?",
    a: "Only if you want them to. All case studies on this site are anonymised, and we never share creator identities without written consent.",
  },
  {
    q: "Who talks to my fans?",
    a: "If you choose our chatting service, a trained team follows a voice and boundary guide you approve. You can review conversations and adjust guidelines at any time.",
  },
  {
    q: "Is there a minimum contract length?",
    a: "Terms are agreed individually, with clear notice periods. We earn your trust with results, not lock-in clauses.",
  },
  {
    q: "Where are you based, and which countries do you work with?",
    a: "We're based in Florida and work with creators worldwide, with a focus on the US, UK, Canada, Europe and Australia.",
  },
  {
    q: "How quickly will I hear back after applying?",
    a: "We review every application personally and reply within 48 hours.",
  },
];

export const jobs = [
  {
    title: "Chat Specialist",
    type: "Remote · Shift-based",
    text: "Excellent written English, emotional intelligence and sales instinct. Full training provided.",
  },
  {
    title: "Social Media Marketer",
    type: "Remote · Full-time",
    text: "Grow creator brands on TikTok, Instagram, Reddit and X. Show us accounts you've grown.",
  },
  {
    title: "Video Editor",
    type: "Remote · Contract",
    text: "Fast, trend-aware short-form editing with a strong eye for hooks and pacing.",
  },
  {
    title: "Account Manager",
    type: "Remote · Full-time",
    text: "Own creator relationships, strategy and reporting. Creator-economy experience preferred.",
  },
];

// Current brand partners, shown on the homepage and /brands.
// Logos live in /public/partners. The "about" copy comes from public sources; the
// "how" copy is a DRAFT based on typical partnership formats, so edit it to match
// what you actually do with each brand.
export const partners = [
  {
    slug: "berry-beachy",
    name: "Berry Beachy Swimwear",
    logo: { src: "/partners/berry-beachy.jpg", width: 508, height: 508 },
    url: "https://berrybeachyswim.com",
    category: "Swimwear",
    location: "Miami, FL",
    about:
      "A Miami swimwear label founded by Rob and Mel Gonzalez, known for curve-loving cuts, playful prints and inclusive sizing, and a regular on the Miami Swim Week runway.",
    how: [
      "Creators model new collections in try-on hauls, lookbooks and beach shoots",
      "Content timed around drops and Miami Swim Week",
      "Showcasing inclusive sizing across a range of body types",
      "Creator discount codes and affiliate links",
    ],
  },
  {
    slug: "montce",
    name: "Montce Swim",
    logo: { src: "/partners/montce.png", width: 750, height: 200 },
    url: "https://www.montce.com",
    category: "Designer swimwear",
    location: "Miami, FL",
    about:
      "A designer swimwear brand founded in Miami in 2014, made in the USA and known for its South Florida-inspired prints and construction details.",
    how: [
      "Editorial-style resort, beach and travel content",
      "Launch-day posts for new collections and capsules",
      "Styled shoots that match Montce's premium look",
      "Long-term ambassador content across platforms",
    ],
  },
  {
    slug: "lb-smoke-shop",
    name: "LB Smoke Shop",
    logo: { src: "/partners/lb-smoke-shop.png", width: 600, height: 539 },
    url: "https://www.lbsmokeshop.com",
    category: "Retail · 21+",
    location: "Coral Way, Miami",
    about:
      "A family-run Miami smoke shop on Coral Way since 2015, open 365 days a year with pickup and delivery across Miami.",
    how: [
      "Local Miami spotlights and in-store content",
      "Promotion of delivery and new arrivals",
      "Shown only to audiences aged 21 and over",
      "Content that follows platform rules for age-restricted products",
    ],
  },
  {
    slug: "happy-v",
    name: "Happy V",
    logo: { src: "/partners/happy-v.png", width: 576, height: 96 },
    url: "https://happyv.com",
    category: "Women's wellness",
    location: "Miami, FL",
    about:
      "A Miami women's wellness brand founded by Daniella Levy, making probiotics and supplements for vaginal, urinary and gut health, built largely on TikTok.",
    how: [
      "Short-form wellness storytelling on TikTok and Reels",
      "Honest, personal product reviews",
      "Clearly disclosed #ad content",
      "No medical claims beyond what the brand has approved",
    ],
  },
];

export const niches = [
  "Fitness",
  "Lifestyle",
  "Cosplay / Gaming",
  "Glamour / Fashion",
  "Alternative",
  "Couples",
  "Comedy / Personality",
  "Other",
];

export const earningsRanges = [
  "Not started yet",
  "Under $1,000 / month",
  "$1,000 – $5,000 / month",
  "$5,000 – $20,000 / month",
  "$20,000+ / month",
];

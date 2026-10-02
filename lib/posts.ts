export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  body: { h?: string; p: string }[];
};

// Starter articles: edit, replace or add more. Good for SEO + creator trust.
export const posts: Post[] = [
  {
    slug: "how-to-choose-a-creator-management-agency",
    title: "How to Choose a Creator Management Agency (Without Getting Burned)",
    excerpt:
      "Seven questions every creator should ask before signing with an agency: ownership, contracts, reporting and more.",
    date: "2026-10-01",
    readTime: "6 min read",
    body: [
      {
        p: "Agencies can be the difference between a side income and a real business, but only the right one. Before you sign anything, get clear answers to these questions.",
      },
      {
        h: "1. Who owns the account?",
        p: "You should. Always. Any agency asking to take ownership of your account, email or content is a red flag.",
      },
      {
        h: "2. What exactly is the revenue share?",
        p: "Get the percentage in writing, and understand what it covers. Ask whether there are any extra fees for ads, chatters or tools.",
      },
      {
        h: "3. How will they report results?",
        p: "A good agency shows you monthly numbers: revenue, subscribers, retention and where traffic comes from.",
      },
      {
        h: "4. Who will speak to your fans?",
        p: "If chatting is part of the deal, ask how chatters are trained, what guidelines they follow and how you can review conversations.",
      },
      {
        h: "5. Can you leave?",
        p: "Look for a clear notice period and no punitive exit clauses. Confident agencies don't need to trap you.",
      },
    ],
  },
  {
    slug: "reddit-traffic-for-creators",
    title: "Reddit for Creators: The Underrated Traffic Engine",
    excerpt:
      "Why Reddit still converts better than almost any platform, and how to approach it without getting banned.",
    date: "2026-09-18",
    readTime: "5 min read",
    body: [
      {
        p: "Reddit is search-friendly, niche-driven and full of high-intent audiences. For many creators it outperforms every other platform on conversion.",
      },
      {
        h: "Respect each community",
        p: "Every subreddit has its own rules. Read them, follow posting limits and verify where required. Consistency beats spam.",
      },
      {
        h: "Titles do the heavy lifting",
        p: "Specific, playful and on-theme titles get more upvotes. Test variations and track which ones drive profile clicks.",
      },
      {
        h: "Play the long game",
        p: "Accounts with history and karma perform better. Build slowly, engage genuinely and the traffic compounds.",
      },
    ],
  },
  {
    slug: "pricing-strategy-subscriptions-and-bundles",
    title: "Subscription Pricing: Bundles, Discounts and Retention",
    excerpt:
      "Your subscription price is a strategy, not a guess. Here's how to think about bundles and promos.",
    date: "2026-09-04",
    readTime: "4 min read",
    body: [
      {
        p: "Pricing affects who subscribes, how long they stay and how much they spend beyond the subscription.",
      },
      {
        h: "Use bundles to reward commitment",
        p: "Three- and six-month bundles at a discount lift retention and smooth out monthly income.",
      },
      {
        h: "Run promos with a purpose",
        p: "Time-limited offers work best tied to an event: a new content series, a milestone or a holiday.",
      },
      {
        h: "Measure what matters",
        p: "Track renewal rate and lifetime value, not just new subscribers. Growth that churns isn't growth.",
      },
    ],
  },
];

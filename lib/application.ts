// Shared validation for the creator application (used by client + server).

export type Application = {
  name: string;
  email: string;
  instagram: string;
  tiktok: string;
  x: string;
  otherSocial: string;
  country: string;
  timezone: string;
  niche: string;
  earnings: string;
  ofLink: string;
  goals: string;
  isAdult: boolean;
  consent: boolean;
  website?: string; // honeypot, must stay empty
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(a: Partial<Application>): Record<string, string> {
  const e: Record<string, string> = {};
  const s = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  if (s(a.name).length < 2) e.name = "Please enter your name.";
  if (!EMAIL.test(s(a.email))) e.email = "Please enter a valid email.";
  if (!s(a.instagram) && !s(a.tiktok) && !s(a.x) && !s(a.otherSocial))
    e.socials = "Add at least one social handle.";
  if (!s(a.country)) e.country = "Please enter your country.";
  if (!s(a.niche)) e.niche = "Please choose a niche.";
  if (!s(a.earnings)) e.earnings = "Please choose a range.";
  if (s(a.goals).length < 10) e.goals = "Tell us a little about your goals.";
  if (a.isAdult !== true) e.isAdult = "You must be 18 or over to apply.";
  if (a.consent !== true) e.consent = "Please agree to the Privacy Policy.";
  for (const [k, v] of Object.entries(a)) {
    if (typeof v === "string" && v.length > 2000) e[k] = "That's a bit too long.";
  }
  return e;
}

import { NextResponse } from "next/server";
import { validate, type Application } from "@/lib/application";

// Very small in-memory rate limit (per server instance). Good enough to slow spam.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many attempts. Please try again later." }, { status: 429 });
  }

  let data: Partial<Application>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success, store nothing.
  if (data.website) return NextResponse.json({ ok: true });

  const errors = validate(data);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) {
    console.error("GOOGLE_SHEETS_WEBHOOK_URL is not set. Application not stored:", data.email);
    return NextResponse.json(
      { ok: false, error: "Applications are temporarily unavailable. Please email us instead." },
      { status: 503 },
    );
  }

  const clean = (v: unknown) => (typeof v === "string" ? v.trim().replace(/^[=+\-@]/, "'$&") : v); // block sheet formula injection
  const row = {
    secret: process.env.SHEETS_SHARED_SECRET ?? "",
    submittedAt: new Date().toISOString(),
    name: clean(data.name),
    email: clean(data.email),
    instagram: clean(data.instagram),
    tiktok: clean(data.tiktok),
    x: clean(data.x),
    otherSocial: clean(data.otherSocial),
    country: clean(data.country),
    timezone: clean(data.timezone),
    niche: clean(data.niche),
    earnings: clean(data.earnings),
    ofLink: clean(data.ofLink),
    goals: clean(data.goals),
    isAdult: data.isAdult ? "Yes" : "No",
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(row),
      redirect: "follow",
    });
    const text = await res.text();
    if (!res.ok || !text.includes('"ok":true')) throw new Error(`Sheets responded ${res.status}: ${text.slice(0, 200)}`);
  } catch (err) {
    console.error("Failed to write application to Google Sheets", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong saving your application. Please try again or email us." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

# Nexura: creator management agency website

Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. Dark luxury theme, fully responsive and SEO-ready (metadata, sitemap, robots, FAQ schema).

## Pages
`/` Home · `/services` · `/results` · `/about` · `/apply` · `/faq` · `/brands` · `/blog` (+ articles) · `/careers` · `/privacy` · `/terms`

## Run locally
```bash
npm install
cp .env.example .env.local   # then fill in the two values
npm run dev                   # http://localhost:3000
```

## Edit content
Nearly all copy lives in **`lib/site.ts`**: name, tagline, email, socials, stats, services, packages, case studies, FAQs and jobs. Blog posts are in **`lib/posts.ts`**.

Before launch:
- **Stats:** replace the placeholder numbers in `stats`, then set `statsArePlaceholder = false`.
- **Case studies:** replace them with real, anonymised results (with each creator's written consent), then set `caseStudiesAreExamples = false`. This removes the "Illustrative example" badges.
- **Socials:** add your handles to `site.socials`. The icons appear automatically once a handle is filled in.
- **Domain:** update `site.url` once you connect one.
- **Legal pages:** these are starter templates, so have them reviewed by a lawyer.

Alternative taglines: *"Scale quietly. Earn loudly."* · *"Your brand, engineered to grow."* · *"Where creators become empires."*

## Connect Google Sheets (application form)
1. Create a Google Sheet, open **Extensions → Apps Script**, and paste in `google-apps-script.js`.
2. Set `SHARED_SECRET` in that script to a long random string.
3. Go to **Deploy → New deployment → Web app**, with *Execute as: Me* and *Access: Anyone*. Copy the URL it gives you.
4. Set these environment variables, both locally in `.env.local` and on Vercel:
   - `GOOGLE_SHEETS_WEBHOOK_URL` = the web app URL
   - `SHEETS_SHARED_SECRET` = the same secret you set in step 2

Each application becomes a new row, with a **Status** column (starts as "New") and a **Notes** column for your team.

The form validates its inputs and checks them again on the server. It also has a hidden honeypot field and basic rate limiting against spam, blocks spreadsheet formula injection, and requires the 18+ confirmation.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. At vercel.com, choose **New Project**, import the repo, and add the two environment variables.
3. Deploy. The site goes live at `your-project.vercel.app`. You can add a custom domain later under **Settings → Domains**.

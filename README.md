# TechProphet MVP V0.1

TechProphet is a Vercel-ready Next.js MVP for a **news-first Global Electronics Intelligence Brief**.

It is designed for electronics sales, PM, procurement, executives, and engineers. The product does **not** repost paid-media articles. It turns public-source signals into:

- News-first homepage with today’s Top 3 supply-chain signals
- Daily brief archive so historical editions are preserved
- Mo's Sight: metaphor + mechanism + metrics
- Business Talk: a customer-facing talking point
- One-page 9:16 share card
- Email subscription / webhook integration
- Future backend cron workflow for automated daily updates

## What is included

```text
app/
  page.tsx                    News-first homepage
  briefs/today/page.tsx       Today brief
  briefs/page.tsx             Brief archive
  briefs/[date]/page.tsx      Historical brief page
  card/page.tsx               Browser card demo
  api/briefs/today/route.ts   JSON brief API
  api/card/route.tsx          1080x1920 PNG generation API
  api/subscribe/route.ts      Email waitlist API
  api/cron/daily/route.ts     Dry-run daily workflow endpoint
components/
  Nav.tsx
  SignupForm.tsx
  BriefCard.tsx
lib/
  briefs.ts                   Sample data
  sources.ts                  Global source coverage model
  scoring.ts                  Signal scoring helper
  types.ts                    Core product types
```

## Local setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
http://localhost:3000/briefs/today
http://localhost:3000/briefs
http://localhost:3000/card
http://localhost:3000/api/card
```

## Environment variables

Copy `.env.example` to `.env.local`.

```bash
cp .env.example .env.local
```

Optional variables:

```text
SUBSCRIBE_WEBHOOK_URL=     # Google Apps Script / Zapier / Make / Formspree webhook
EMAIL_WEBHOOK_URL=         # Daily email workflow webhook
CRON_SECRET=               # Protect /api/cron/daily
GEMINI_API_KEY=            # Future AI insight generation
OPENAI_API_KEY=            # Future AI insight generation
```

## V0.1 publishing guardrails

1. Do not copy paid-media full text.
2. Use public title, public summary, company announcements, public filings, RSS, and source links.
3. Keep AI output in `draft` until human review.
4. Every brief should preserve the original source URL.
5. China sources are part of global source coverage; do not turn the product into a regional-only brief.
6. Add footer disclaimer: industry briefing only, not investment advice or procurement advice.

## Suggested next build steps

### Phase 1: Content validation

- Replace sample data in `lib/briefs.ts` manually each morning.
- Share `/briefs/today` and `/api/card` with 10–30 electronics contacts.
- Track whether people forward the brief to customers.

### Phase 2: Source ingestion

Add a `lib/rss.ts` module and connect public RSS sources. Keep the ingestion output as raw signals, not published articles.

Recommended signal fields:

```ts
type RawSignal = {
  title: string;
  publicSummary?: string;
  sourceName: string;
  sourceUrl: string;
  region: "Global" | "Taiwan" | "China" | "Japan/Korea" | "US/EU";
  signalType: "Policy" | "Company Filing" | "Company PR" | "Media Signal" | "Trade Show" | "Tender" | "Market Signal";
  publishedAt?: string;
};
```

### Phase 3: AI generation

Add an AI step that converts raw signals into the `BriefItem` shape.

Mo's Sight output rule:

```text
Do not explain generic terms unless the term has a new market meaning.
Explain specific new technologies, new variants, spec names, or old terms that are suddenly important again.
Use metaphor + mechanism + metrics.
Output must include customer-facing Business Talk.
Avoid investment advice, stock calls, betting, or guaranteed outcomes.
```

### Phase 4: Automation

Connect `/api/cron/daily` to Vercel Cron or an external scheduler.
Send draft payload to email workflow provider.
Keep manual review before public publishing.

## Deployment

1. Push this folder to GitHub.
2. Import the GitHub repo into Vercel.
3. Add environment variables.
4. Deploy.


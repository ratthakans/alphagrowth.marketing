# Alpha Growth Marketing — Website

Multi-page marketing website for **Alpha Growth Marketing** — a financial-fluent
creative + performance agency for XAU/USD · Forex · Prop Firm clients (Bangkok).

> _We create the alpha. You market the growth._

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.
Content is in Thai and derived from the 2026 Rate Card.

## Pages

| Route        | Page                                                        |
| ------------ | ----------------------------------------------------------- |
| `/`          | Home — hero, why-us, the engine, packages & method teasers  |
| `/why-us`    | The 4 problems gold traders face + Creative vs Boost        |
| `/services`  | The Engine — Trust Engine, Survival Kit, deliverables       |
| `/packages`  | Packages S/M/L cards + full side-by-side comparison table   |
| `/method`    | 4-phase timeline, FTD glossary, the fine print              |
| `/contact`   | Free Strategy Session info + interactive lead form          |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Notes

- **Images** — royalty-free photos from **Unsplash** (Unsplash License: free for
  commercial use, no attribution required; credits shown anyway). Centralised in
  `lib/images.ts` — swap the URLs for the client's own brand assets anytime.
  `components/Placeholder.tsx` remains available for pure-graphic placeholders.
- **Charts** are generated, animated SVG (`components/CandlestickChart.tsx`,
  `Watchlist.tsx`, `Ticker.tsx`) — illustrative, not live market data. To wire
  real quotes, drop in a TradingView widget or a price API.
- **All site copy** lives in one file — `lib/content.ts` — edit there to update
  text, packages, pricing, etc. across every page.
- **Contact form** (`components/ContactForm.tsx`) is front-end only; wire it to
  your CRM / email endpoint in `handleSubmit`.
- **Fonts** (Fraunces · Inter · Noto Sans Thai) load from Google Fonts.
- Theme: premium gold-on-black. Tokens in `tailwind.config.ts`.

## Deploy

Optimized for Vercel — push the repo and import, or run `vercel`.
```

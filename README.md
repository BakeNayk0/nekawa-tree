# Nekawa Tree

The landing page for **Nekawa**, a French micro-entreprise run as a creative duo:
a fullstack developer and a designer working on websites, visual identities and
illustration for small businesses, artists and independents.

This site is the single entry point to everything under the Nekawa umbrella —
one page, one link per project, plus a way for people to support the work.

Live at **[tree.nekawa.fr](https://tree.nekawa.fr)**.

## What it links to

| Site | What it is |
|---|---|
| [nekawa.fr](https://nekawa.fr) | The studio — websites and visual identities for small businesses, artists and entrepreneurs |
| [nayko.dev](https://nayko.dev) | Alexis Sanchis — fullstack developer, projects and experiments |
| [nekawashop.fr](https://nekawashop.fr) | The brand shop — esoteric, Japanese and Nordic designs, on Shopify |
| [la-loutre-eveillee.fr](https://la-loutre-eveillee.fr) | La Loutre Éveillée — illustration and watercolour by Lucile C. |

## Stack

- **Next.js 15** (App Router) and **React 19**
- **TypeScript**
- **Tailwind CSS v4** with shadcn/ui components
- **Framer Motion** for section reveals, **Embla** for the project carousel
- **Stripe Checkout** for one-off and recurring support

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm start   # production build
```

## Environment

Create `.env.local` in the project root:

```bash
STRIPE_SECRET_KEY=sk_...          # Stripe secret key (server-side only)
NEXT_PUBLIC_APP_URL=http://localhost:3000   # used for Stripe return URLs
```

Without `STRIPE_SECRET_KEY` the page renders fine — only the support buttons
fail, returning a 500 from `/api/checkout`.

## Structure

```
app/page.tsx              the single page; the `links` array drives both the
                          grid and the carousel
app/api/checkout/route.ts creates a Stripe Checkout session
components/link-card.tsx  the project tiles
components/donation-buttons.tsx  support tiers, keyed by Stripe price ID
components/animated-section.tsx  scroll-reveal wrapper
public/                   brand images, one per linked site
```

Adding a site means appending one entry to `links` in `app/page.tsx` and
dropping its brand image into `public/`.

## Author

Built and maintained by [Alexis Sanchis](https://nayko.dev).

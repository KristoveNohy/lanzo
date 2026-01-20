# LANZO

Premium agency presentation site for LANZO (lanzo.sk) built with Next.js App Router, TypeScript, Tailwind, and MDX.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build & run

```bash
npm run build
npm start
```

## Environment variables

Create a `.env.local` file if needed:

```
NEXT_PUBLIC_ANALYTICS_ENABLED=false
NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible
NEXT_PUBLIC_ANALYTICS_DOMAIN=lanzo.sk
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXX
CONTACT_PROVIDER=placeholder
```

Analytics are disabled by default unless `NEXT_PUBLIC_ANALYTICS_ENABLED=true`.

## Content management

- Blog posts live in `content/posts` as MDX files with frontmatter.
- Case studies, services, FAQs, and testimonials live in `data/site.ts`.

## Deployment

Deploy to Vercel or any Node.js hosting provider. Ensure environment variables are configured in production.

## Notes

- Placeholder copy and images should be replaced with real client assets.
- Privacy and cookie policy pages are placeholders for legal review.

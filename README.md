# Pujitha Nannapaneni — Personal Website (Layout 2)

Next.js (App Router, TypeScript). Deploys to Vercel with default settings.
Design rules are documented in `DESIGN.md`.

## Edit content
All text lives in `app/content.ts`. Styles are in `app/globals.css`.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3001 (Layout 1 runs on http://localhost:3000, so both can run side by side).

## Deploy to Vercel
1. Push this folder to its own GitHub repository and import it in Vercel (Framework: Next.js).
2. After both sites are deployed, in **Project → Settings → Environment Variables** set
   `NEXT_PUBLIC_OTHER_SITE_URL` to the other site's URL (in each project), then redeploy.
   That powers the "Classic layout" / "New layout" links between the two sites.

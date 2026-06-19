# Rawnak2 Next.js Conversion Report

## Summary

- Created the `convert-to-next` Git branch before conversion.
- Preserved all legacy HTML, CSS, JavaScript, and asset files.
- Migrated the website to Next.js 16 App Router with React 19 and TypeScript.
- Kept the existing visual identity and reused the current CSS without a Tailwind rewrite.
- Copied static assets into `public/assets/` and updated runtime paths to `/assets/...`.

## New structure

- `src/app/`: layouts, metadata, global CSS, routes, and the 404 page.
- `src/components/site/`: shared shell, navigation, background, story modal, and interactions.
- `src/components/home/`: hero, strategy card, process strip, and impact strip.
- `src/components/`: React implementations for work filtering, pricing switching, contact form handling, and Coming Soon pages.
- `src/data/site.ts`: navigation and route configuration.
- `public/assets/`: copied images and logo files.

## Routes

- `/`
- `/about`
- `/services`
- `/solutions`
- `/work`
- `/work/ecommerce-platform`
- `/process`
- `/pricing`
- `/contact`
- `/store` (Coming Soon)
- `/academy` (Coming Soon)
- `/app` (Coming Soon)
- `/admin` (Coming Soon)

## Verification

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed.
- Next.js generated all 15 application routes as static content.
- Every public route returned HTTP 200 from the production server.
- Desktop and mobile screenshots are stored in `output/playwright/next-conversion/`.

## Remaining launch content

- Replace the temporary WhatsApp number.
- Confirm the final contact email and social profile URLs.
- Confirm whether indicative pricing should remain public.
- Replace concept projects and case-study content with approved client work.

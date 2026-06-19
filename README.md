# Rawnak Group Website

Next.js App Router website for Rawnak Group, migrated from the original static HTML/CSS/JS implementation while preserving its visual design.

## Run locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production check

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Application structure

- `src/app/`: App Router pages, metadata, and global CSS.
- `src/components/`: shared site, home, pricing, work, and contact components.
- `src/data/`: navigation and route data.
- `public/assets/`: images, logo, and visual assets.
- Root `.html`, `styles.css`, and `script.js`: preserved legacy source files for migration reference.

## Fix Pass 1 Summary

- Kept the project as static HTML/CSS/JS.
- Added clean GitHub Pages routes with folder `index.html` files:
  - `/about/`
  - `/services/`
  - `/solutions/`
  - `/work/`
  - `/work/ecommerce-platform/`
  - `/pricing/`
  - `/contact/`
  - `/process/`
- Preserved the legacy `.html` pages so old links continue to work.
- Updated navigation and CTA links to use clean routes where possible.
- Updated contact details to Mansoura, Egypt and a temporary WhatsApp placeholder.
- Contact form now validates required fields and opens WhatsApp with the filled inquiry message, with a `mailto:` fallback.
- Watch Showreel now opens a lightweight glass modal instead of acting like a fake video link.
- Added page-specific SEO metadata, canonical URLs, Open Graph, Twitter Card, theme color, and favicon link.
- Added `404.html` with the same visual identity.
- Replaced broken/mojibake icon text with safer CSS icon classes and HTML entities.
- Added accessibility polish: focus-visible styles, aria labels, better form labels, and reduced-motion handling.
- Added image loading/decoding hints and dimensions where safe.

## Still Needed Before Launch

- Replace the placeholder WhatsApp number in `contact.html` and `script.js`.
- Confirm the official email address currently set to `hello@rawnak.agency`.
- Replace placeholder social links in the footer with official LinkedIn, Instagram, and Behance profiles.
- Confirm final pricing strategy; current prices are indicative.
- Add the final background/showreel video if required.
- Replace concept case study content with real client-approved case study content.
- Replace concept work images with real project screenshots when available.
- Compress or replace heavy assets later, especially `assets/building-cutout.png` and `assets/logo-mark.png`.

## Performance Pass Summary

- Added lightweight WebP image variants for the hero building, cards, background mountains, wave, and work reference image.
- Desktop home now uses `assets/building-cutout-hero.webp` instead of the full 936 KB PNG.
- Mobile home avoids loading the large building image because that visual is hidden on mobile.
- Background images now use WebP variants.
- Expensive blur, shadow, and animation distances were reduced while keeping the same glassmorphism direction.
- Heavy decorative animations are disabled on mobile.
- Local server now serves `.webp` files with the correct `image/webp` MIME type.

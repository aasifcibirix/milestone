# Steel Building Marketing + Catalog Site (Next.js)

This project is a fresh, original Next.js implementation that mirrors the **information architecture and UX patterns** requested, while using only placeholder assets and new copy.

## Tech Stack
- Next.js (App Router) + TypeScript
- react-hook-form + zod (form validation)
- Local data source (`/data`) for easy CMS swap

## Run Locally
```bash
npm install
npm run dev
npm run build
npm start
```

## Route Map
- `/` home
- Category pages: `/steel-carports`, `/rv-covers`, `/steel-garages`, `/steel-barns`, `/clear-span-commercial`
- `/steel-structures` redirects to `/shop`
- `/rto-financing`
- `/become-a-dealer`
- About section: `/about-us`, `/projects-gallery`, `/customer-reviews`, `/service-area`, `/color-options`, `/insulation`, `/building-faqs`, `/contact-us`
- Catalog: `/shop`, `/shop/[slug]`
- Optional stubs: `/cart`, `/checkout`, `/my-account`

## Folder Structure
- `app/` route files, metadata, SEO files
- `components/` reusable UI components (header, footer, forms, cards, etc.)
- `data/` local content files (`categories.ts`, `products.ts`, `testimonials.ts`, `faqs.ts`, `serviceAreas.ts`)
- `lib/analytics.ts` page-level analytics placeholder hook
- `public/placeholders/` image placeholders

## Replacing Placeholder Content
1. Update copy and records in `data/*.ts`.
2. Replace SVG placeholders in `public/placeholders/` with real optimized images.
3. Wire form submission handlers in `components/forms.tsx` to your API endpoint.
4. Replace `trackEvent` in `lib/analytics.ts` with your analytics provider.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

MyBeautySkin is a Next.js 16 (App Router) + React 19 beauty-product discovery site, built **frontend-first**: all data is currently mock data in `src/data/mock-products.ts`, but the layers are deliberately separated so the data source can later swap to PostgreSQL/Prisma/REST without touching UI components. UI copy and user-facing text are in **Indonesian**.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals + next/typescript)
```

There is no test runner configured. Type checking happens via the Next build (`tsconfig.json` has `strict: true`, `noEmit: true`).

## Architecture

Data flows in one direction through distinct layers — preserve these boundaries when adding features:

```
app/ (routes, metadata, server)  →  features/ (page-level UI + state)  →  components/ (reusable UI)
                                          ↓
                          services/  →  data/ (mock) + utils/ (pure logic)
                                          ↑ typed by types/
```

- **`src/app/`** — App Router routes. Pages are thin: they set `metadata`/`generateMetadata`, fetch via services, and delegate rendering to a `features/` component (e.g. `app/products/page.tsx` → `features/products/product-listing-page.tsx`). Dynamic params are async: `params: Promise<{ slug: string }>` — `await params` before use.
- **`src/features/`** — One folder per domain (home, products, recommendation, categories, about, contact). These hold page composition and client-side state. Files with interactivity start with `"use client"`.
- **`src/services/`** — The **data access seam**. `product.service.ts` and `recommendation.service.ts` are the only intended entry points for data. Async functions simulate latency with a `delay()` helper so swapping mock → real async API is a drop-in change. This is the layer to replace when wiring a backend; do not import `data/mock-products.ts` from UI when a service function exists.
- **`src/utils/`** — Pure, framework-free logic: `filter-products.ts` (the canonical search/filter/sort implementation) and `format.ts`. `filterProducts` also backs `sortProducts` in the service.
- **`src/types/`** — Shared data contracts (`Product`, `ProductFilters`, `ProductSortOption`, `RecommendationMatch`). Treat these as the schema that the future DB/API must satisfy.
- **`src/components/`** — Reusable presentational components; `components/ui/` holds primitives (e.g. `button.tsx`).

### Known inconsistency
`product-listing-page.tsx` calls `filterProducts(mockProducts, …)` directly instead of going through `product.service.ts`. New product-data reads should prefer the service layer to keep the swap-to-backend boundary intact.

### Recommendation engine
`recommendation.service.ts` is keyword-based: `recommendationRules` maps Indonesian/English keywords (e.g. "jerawat", "acne") to `concern` tags. It matches the query against the first rule whose keywords appear, then surfaces products whose `concern` overlaps — but it always appends the full catalog as a deduped fallback and ranks everything by rating, so results are never empty and capped at 6. An empty or unmatched query falls back to the first rule (`acne`). Extend by adding rules to that array.

## Conventions

- **Path alias**: import from `@/*` (maps to `src/*`).
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`, no `tailwind.config`). Colors are hardcoded hex values in className strings (warm beige/brown palette, e.g. `#fffaf8`, `#221816`, `#b37e6e`) rather than theme tokens. Fonts: Inter (`--font-body`) and Merriweather (`--font-display-font`) loaded in `layout.tsx`.
- **Class merging**: use `cn()` from `@/lib/cn` (simple filter+join, not `clsx`/`tailwind-merge`).
- **Animation**: Framer Motion; `PageShell` wraps every route with an `AnimatePresence` page transition keyed on pathname.
- **Icons**: `lucide-react`.
- **File naming**: kebab-case files, PascalCase component exports.

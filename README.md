# MyBeautySkin

MyBeautySkin adalah website beauty recommendation modern berbasis Next.js 15 yang dibangun dengan pendekatan frontend-first. Saat ini seluruh data masih mock data, tetapi struktur project sudah dipisah agar mudah diganti ke PostgreSQL, Prisma, dan backend API tanpa refactor besar di layer UI.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Fitur Saat Ini

- Landing page premium dengan hero, kategori, popular products, featured products, testimonials, FAQ, newsletter, dan footer
- Search recommendation simulator berbasis keyword mapping
- Product listing dengan search, filter, dan sorting
- Product detail page
- About page
- Contact page
- Dummy data 30 produk
- Responsive desktop dan mobile

## Struktur Project

```text
src/
├── app/
├── components/
├── data/
├── features/
│   ├── categories/
│   ├── products/
│   └── recommendation/
├── hooks/
├── lib/
├── services/
├── types/
└── utils/
```

## Instalasi

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build & Lint

```bash
npm run lint
npm run build
```

## Arsitektur Frontend-First

Project ini sengaja memisahkan data access dari UI:

- `src/data/mock-products.ts` menyimpan dummy data saat ini
- `src/services/product.service.ts` menjadi pintu masuk data produk
- `src/services/recommendation.service.ts` mengelola logic rekomendasi
- `src/types/` menyimpan kontrak data yang nanti bisa dipakai ulang oleh API dan database layer

Saat pindah ke backend, Anda cukup mengganti isi service dari:

```ts
getProductsFromMockData();
```

menjadi:

```ts
getProductsFromAPI();
```

atau repository/database access lain tanpa mengubah komponen UI secara besar.

## Rencana Integrasi Masa Depan

Struktur ini sudah siap dihubungkan ke:

- PostgreSQL
- Prisma ORM
- REST API
- Next.js Route Handlers
- Authentication
- Recommendation Engine yang lebih canggih

## Dummy Data

Tersedia 30 produk dummy dengan field:

- id
- slug
- name
- brand
- price
- image
- category
- skinType
- concern
- rating
- description
- ingredients
- usage

## Catatan Pengembangan

Frontend sekarang berfokus pada UX dan flow discovery produk. Setelah backend siap, lapisan service bisa diganti agar semua page tetap memakai API yang sama dari sisi komponen.
